<script setup>
import { computed, ref, watch } from 'vue';
import Button from '@/components/ui/Button.vue';
import { VueFlow, useVueFlow, MarkerType, Handle, Position, BaseEdge, EdgeLabelRenderer, getBezierPath } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import {
    Trash2,
    Sparkles,
    Clock,
    GitBranch,
    MessageSquare,
    CheckCircle2,
    Upload,
    Image as ImageIcon,
    Mic,
    FileText,
    Video as VideoIcon,
    MousePointerClick,
    Plus,
    Loader2,
    Link as LinkIcon,
    ArrowLeft,
    Layers,
    Save,
    Eye,
    Sliders,
    Phone,
    Video,
    MoreVertical,
    CheckCheck,
    Play,
    Volume2,
    User,
    Users,
    RefreshCw,
} from 'lucide-vue-next';
import axios from 'axios';

import '@vue-flow/core/dist/style.css';
import '@vue-flow/core/dist/theme-default.css';
import '@vue-flow/controls/dist/style.css';

const props = defineProps({
    flow: { type: Object, required: true },
    saving: { type: Boolean, default: false },
});
const emit = defineEmits(['save', 'close']);

const isSaving = ref(false);

function isObject(v) {
    return !!v && typeof v === 'object' && !Array.isArray(v);
}

function ensureId(prefix) {
    return `${prefix}_${Math.random().toString(16).slice(2, 10)}`;
}

const nodes = ref([]);
const edges = ref([]);

const selectedNodeId = ref(null);
const selectedEdgeId = ref(null);
const activeInputTarget = ref('text');
const activeVariableTab = ref('cliente');
const inspectorTab = ref('editor'); // 'editor' | 'preview'

// WhatsApp Connected Groups state
const availableGroups = ref([]);
const loadingGroups = ref(false);
const manualGroupInput = ref(false);

async function loadGroups() {
    loadingGroups.value = true;
    try {
        const { data } = await axios.get('/autozap/groups');
        availableGroups.value = Array.isArray(data?.groups) ? data.groups : [];
    } catch {
        availableGroups.value = [];
    } finally {
        loadingGroups.value = false;
    }
}

// Uploading state
const isUploading = ref(false);
const uploadError = ref('');
const fileInputRef = ref(null);

const { project, onConnect, addEdges } = useVueFlow();

function nodeLabel(type) {
    if (type === 'trigger') return 'Gatilho';
    if (type === 'send_message') return 'Enviar mensagem';
    if (type === 'delay') return 'Aguardar';
    if (type === 'condition') return 'Condição';
    if (type === 'end') return 'Fim';
    return type;
}

function defaultDataFor(type) {
    if (type === 'send_message') {
        return {
            recipient_type: 'customer',
            custom_phone: '',
            group_id: '',
            mode: 'text',
            text: 'Olá {{customer.first_name}}! Segue seu código PIX: {{pix.copy_paste}}',
            media_url: '',
            mime_type: '',
            document_name: '',
            is_ptt: true,
            title: '',
            footer: '',
            buttons: [],
        };
    }
    if (type === 'delay') return { seconds: 900, delay_value: 15, delay_unit: 'minutes' };
    if (type === 'condition') return { kind: 'order_is_paid' };
    return {};
}

function calculateSeconds(val, unit) {
    const v = Math.max(0, parseInt(val, 10) || 0);
    if (unit === 'minutes') return v * 60;
    if (unit === 'hours') return v * 3600;
    if (unit === 'days') return v * 86400;
    return v;
}

function subtitleFor(type, data) {
    const d = isObject(data) ? data : {};
    if (type === 'send_message') {
        const mode = d.mode || 'text';
        const modeNames = {
            text: '💬 Texto',
            image: '🖼️ Imagem',
            audio: d.is_ptt !== false ? '🎙️ Voz (PTT)' : '🎵 Áudio',
            document: '📄 Documento',
            video: '🎬 Vídeo',
            buttons: '🔘 Botões',
            interactive: '🔘 Interativo',
        };
        const label = modeNames[mode] || '💬 Mensagem';
        const text = typeof d.text === 'string' ? d.text.trim() : (d.caption || '');
        const preview = text ? text.replace(/\s+/g, ' ').slice(0, 24) : '';
        const targetBadge = d.recipient_type === 'custom'
            ? `📱 Manual`
            : (d.recipient_type === 'group' ? `👥 Grupo` : '');
        if (targetBadge && preview) return `${targetBadge} • ${label} • ${preview}…`;
        if (targetBadge) return `${targetBadge} • ${label}`;
        return preview ? `${label} • ${preview}${text.length > 24 ? '…' : ''}` : label;
    }
    if (type === 'delay') {
        if (d.delay_value && d.delay_unit) {
            const unitMap = { seconds: 'segundos', minutes: 'minutos', hours: 'horas', days: 'dias' };
            return `Aguardar ${d.delay_value} ${unitMap[d.delay_unit] || 'minutos'}`;
        }
        const s = Number.isFinite(d.seconds) ? d.seconds : parseInt(d.seconds || 0, 10) || 0;
        if (s >= 86400) return `Aguardar ${Math.round(s / 86400)} dias`;
        if (s >= 3600) return `Aguardar ${Math.round(s / 3600)} horas`;
        if (s >= 60) return `Aguardar ${Math.round(s / 60)} min`;
        return `Aguardar ${Math.max(0, s)}s`;
    }
    if (type === 'condition') {
        const kind = String(d.kind || 'order_is_paid');
        if (kind === 'order_is_paid') return 'Pedido foi pago?';
        if (kind === 'order_status_is') {
            const statusMap = { pending: 'Pendente', completed: 'Pago/Aprovado', rejected: 'Recusado', cancelled: 'Cancelado', refunded: 'Reembolsado' };
            return `Status é: ${statusMap[d.value] || d.value || '…'}`;
        }
        if (kind === 'payment_method_is') {
            const methodMap = { pix: 'PIX', boleto: 'Boleto', credit_card: 'Cartão' };
            return `Método é: ${methodMap[d.value] || d.value || '…'}`;
        }
        if (kind === 'has_phone') return 'Cliente tem telefone?';
        return 'Condição';
    }
    return '';
}

function syncPresentation(n) {
    if (!n || !n.data) return;
    const sub = subtitleFor(n.type, n.data);
    if (sub) n.data.subtitle = sub;
    else if (n.data.subtitle) delete n.data.subtitle;
    n.data._label = nodeLabel(n.type);
}

function fromStoredGraph(graphJson) {
    const g = isObject(graphJson) ? graphJson : {};
    const storedNodes = Array.isArray(g.nodes) ? g.nodes : [];
    const storedEdges = Array.isArray(g.edges) ? g.edges : [];

    const vfNodes = storedNodes
        .filter((n) => isObject(n) && typeof n.id === 'string')
        .map((n, idx) => {
            const type = typeof n.type === 'string' ? n.type : 'custom';
            const x = typeof n.x === 'number' ? n.x : 80 + (idx % 4) * 240;
            const y = typeof n.y === 'number' ? n.y : 80 + Math.floor(idx / 4) * 160;
            const data = isObject(n.data) ? { ...n.data } : {};

            if (type === 'delay') {
                const s = Number.isFinite(data.seconds) ? data.seconds : parseInt(data.seconds || 0, 10) || 0;
                if (!data.delay_value || !data.delay_unit) {
                    if (s > 0 && s % 86400 === 0) {
                        data.delay_value = s / 86400;
                        data.delay_unit = 'days';
                    } else if (s > 0 && s % 3600 === 0) {
                        data.delay_value = s / 3600;
                        data.delay_unit = 'hours';
                    } else if (s > 0 && s % 60 === 0) {
                        data.delay_value = s / 60;
                        data.delay_unit = 'minutes';
                    } else {
                        data.delay_value = s;
                        data.delay_unit = 'seconds';
                    }
                }
            }

            const node = {
                id: n.id,
                type,
                position: { x, y },
                data: {
                    ...data,
                    _label: nodeLabel(type),
                },
                draggable: n.id !== 'trigger',
            };
            syncPresentation(node);
            return node;
        });

    const vfEdges = storedEdges
        .filter((e) => isObject(e) && typeof e.from === 'string' && typeof e.to === 'string')
        .map((e) => {
            const edgeId = `${e.from}->${e.to}`;
            const isCondition = vfNodes.some((n) => n.id === e.from && n.type === 'condition');
            const condBranch = isObject(e.data) && (e.data.branch || e.data.condition) ? (e.data.branch || e.data.condition) : null;

            return {
                id: edgeId,
                source: e.from,
                target: e.to,
                type: 'autozap',
                data: isObject(e.data) ? { ...e.data } : {},
                label: isCondition && condBranch ? (condBranch === 'true' ? 'SIM' : 'NÃO') : undefined,
                animated: true,
                style: {
                    stroke: isCondition ? (condBranch === 'true' ? '#10b981' : '#ef4444') : '#10b981',
                    strokeWidth: 2,
                },
            };
        })
        .filter(Boolean);

    if (!vfNodes.some((n) => n.id === 'trigger')) {
        const t = {
            id: 'trigger',
            type: 'trigger',
            position: { x: 80, y: 160 },
            data: { _label: nodeLabel('trigger'), event_class: props.flow?.trigger_event || 'App\\Events\\PixGenerated' },
            draggable: false,
        };
        syncPresentation(t);
        vfNodes.unshift(t);
    }

    return { vfNodes, vfEdges };
}

function toStoredGraph(vfNodes, vfEdges) {
    const storedNodes = (vfNodes || []).map((n) => {
        const d = sanitizeNodeData(n.data);
        if (n.type === 'delay') {
            d.seconds = calculateSeconds(d.delay_value || d.seconds || 0, d.delay_unit || 'seconds');
        }
        return {
            id: n.id,
            type: n.type,
            x: Math.round(n.position?.x ?? 0),
            y: Math.round(n.position?.y ?? 0),
            data: d,
        };
    });
    const storedEdges = (vfEdges || []).map((e) => ({
        from: e.source,
        to: e.target,
        data: isObject(e.data) ? e.data : undefined,
    }));
    return { nodes: storedNodes, edges: storedEdges };
}

function sanitizeNodeData(data) {
    if (!isObject(data)) return {};
    const d = { ...data };
    delete d._label;
    return d;
}

function loadFromProps() {
    const { vfNodes, vfEdges } = fromStoredGraph(props.flow?.graph_json);
    nodes.value = vfNodes;
    edges.value = vfEdges;

    selectedNodeId.value = 'trigger';
    selectedEdgeId.value = null;
}

watch(
    () => props.flow,
    () => loadFromProps(),
    { immediate: true },
);

watch(
    nodes,
    () => {
        nodes.value.forEach((n) => syncPresentation(n));
    },
    { deep: true },
);

const selectedNode = computed(() => nodes.value.find((n) => n.id === selectedNodeId.value) || null);
const selectedEdge = computed(() => edges.value.find((e) => e.id === selectedEdgeId.value) || null);
const showInspector = computed(() => !!selectedNode.value || !!selectedEdge.value);

function selectNode(id) {
    selectedNodeId.value = id;
    selectedEdgeId.value = null;
    inspectorTab.value = 'editor';
}

function selectEdge(id) {
    selectedEdgeId.value = id;
    selectedNodeId.value = null;
}

function clearSelection() {
    selectedNodeId.value = null;
    selectedEdgeId.value = null;
}

onConnect((params) => {
    const srcNode = nodes.value.find((n) => n.id === params.source);
    let edgeData = {};
    let label;
    let strokeColor = '#10b981';

    if (srcNode?.type === 'condition') {
        const existingOutEdges = edges.value.filter((e) => e.source === params.source);
        const hasTrue = existingOutEdges.some((e) => e.data?.branch === 'true' || e.data?.condition === 'true');
        const branch = hasTrue ? 'false' : 'true';
        edgeData = { branch, condition: branch };
        label = branch === 'true' ? 'SIM' : 'NÃO';
        strokeColor = branch === 'true' ? '#10b981' : '#ef4444';
    }

    const newEdge = {
        ...params,
        id: `${params.source}->${params.target}`,
        type: 'autozap',
        data: edgeData,
        label,
        animated: true,
        style: { stroke: strokeColor, strokeWidth: 2 },
    };

    edges.value = edges.value.filter((e) => e.id !== newEdge.id);
    addEdges([newEdge]);
    selectEdge(newEdge.id);
});

function onNodeClick({ node }) {
    selectNode(node?.id || null);
}

function onEdgeClick({ edge }) {
    selectEdge(edge?.id || null);
}

function addNode(type, position) {
    const id = type === 'trigger' ? 'trigger' : ensureId(type);
    if (type === 'trigger' && nodes.value.some((n) => n.id === 'trigger')) return;
    const n = {
        id,
        type,
        position: position || { x: 300, y: 160 },
        data: { ...defaultDataFor(type), _label: nodeLabel(type) },
        draggable: id !== 'trigger',
    };
    syncPresentation(n);
    nodes.value.push(n);
    selectedNodeId.value = id;
    selectedEdgeId.value = null;
    inspectorTab.value = 'editor';
}

function deleteSelectedNode() {
    if (!selectedNode.value || selectedNode.value.id === 'trigger') return;
    const id = selectedNode.value.id;
    nodes.value = nodes.value.filter((n) => n.id !== id);
    edges.value = edges.value.filter((e) => e.source !== id && e.target !== id);
    selectedNodeId.value = null;
}

function deleteSelectedEdge() {
    if (!selectedEdge.value) return;
    const id = selectedEdge.value.id;
    edges.value = edges.value.filter((e) => e.id !== id);
    selectedEdgeId.value = null;
}

function deleteNodeById(id) {
    if (!id || id === 'trigger') return;
    nodes.value = nodes.value.filter((n) => n.id !== id);
    edges.value = edges.value.filter((e) => e.source !== id && e.target !== id);
    if (selectedNodeId.value === id) selectedNodeId.value = null;
}

function deleteEdgeById(id) {
    if (!id) return;
    edges.value = edges.value.filter((e) => e.id !== id);
    if (selectedEdgeId.value === id) selectedEdgeId.value = null;
}

const palette = [
    {
        type: 'send_message',
        title: 'Enviar mensagem',
        desc: 'Texto, Imagem, Áudio (Voz), Documento/PDF ou Botões.',
        icon: MessageSquare,
        color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
        type: 'delay',
        title: 'Aguardar',
        desc: 'Pausa o fluxo por X minutos/horas antes de prosseguir.',
        icon: Clock,
        color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
        type: 'condition',
        title: 'Condição',
        desc: 'Bifurca o fluxo (Ex: Verificar se pedido foi pago SIM / NÃO).',
        icon: GitBranch,
        color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
        type: 'end',
        title: 'Fim',
        desc: 'Encerra o fluxo com sucesso.',
        icon: CheckCircle2,
        color: 'text-zinc-500 bg-zinc-500/10 border-zinc-500/20',
    },
];

// Variable dictionary organized by category
const variableGroups = [
    {
        id: 'cliente',
        label: '👤 Cliente',
        variables: [
            { tag: '{{customer.first_name}}', label: 'Primeiro Nome', preview: 'João' },
            { tag: '{{customer.name}}', label: 'Nome Completo', preview: 'João Silva' },
            { tag: '{{customer.phone}}', label: 'Telefone/WhatsApp', preview: '5511999998888' },
            { tag: '{{customer.email}}', label: 'E-mail', preview: 'joao@email.com' },
            { tag: '{{customer.cpf}}', label: 'CPF', preview: '123.456.789-00' },
        ],
    },
    {
        id: 'pedido',
        label: '📦 Pedido',
        variables: [
            { tag: '{{order.product.name}}', label: 'Nome do Produto', preview: 'Curso VIP' },
            { tag: '{{order.total_amount_formatted}}', label: 'Valor Formatado', preview: 'R$ 197,00' },
            { tag: '{{order.id}}', label: 'ID do Pedido', preview: '#10492' },
            { tag: '{{order.payment_method}}', label: 'Método (PIX/Boleto/Cartão)', preview: 'PIX' },
        ],
    },
    {
        id: 'pix',
        label: '⚡ PIX',
        variables: [
            { tag: '{{pix.copy_paste}}', label: 'PIX Copia e Cola', preview: '00020126580014br.gov.bcb.pix...' },
            { tag: '{{pix.qrcode}}', label: 'Link do QR Code', preview: 'https://api.qrserver.com/...' },
        ],
    },
    {
        id: 'boleto',
        label: '📄 Boleto',
        variables: [
            { tag: '{{boleto.barcode}}', label: 'Linha Digitável', preview: '34191.79001 01043.510047...' },
            { tag: '{{boleto.pdf_url}}', label: 'Link do Boleto PDF', preview: 'https://banco.com/boleto.pdf' },
            { tag: '{{boleto.expire_at}}', label: 'Vencimento', preview: '18/08/2026' },
        ],
    },
    {
        id: 'acesso',
        label: '🔑 Acesso',
        variables: [
            { tag: '{{access.link}}', label: 'Link da Área de Membros', preview: 'https://hub.getfy.com/login' },
            { tag: '{{access.email}}', label: 'E-mail de Login', preview: 'joao@email.com' },
            { tag: '{{access.password}}', label: 'Senha de Acesso', preview: '••••••••' },
            { tag: '{{checkout_link}}', label: 'Link de Checkout / Retomada', preview: 'https://pay.getfy.com/c/xyz' },
        ],
    },
];

function insertVariable(tag) {
    if (!selectedNode.value || selectedNode.value.type !== 'send_message') return;
    const d = selectedNode.value.data;
    const target = activeInputTarget.value;

    if (target === 'caption') {
        d.caption = (d.caption || '') + tag;
    } else if (target === 'title') {
        d.title = (d.title || '') + tag;
    } else if (target === 'document_name') {
        d.document_name = (d.document_name || '') + tag;
    } else if (target === 'media_url') {
        d.media_url = (d.media_url || '') + tag;
    } else if (target.startsWith('btn_url_')) {
        const idx = parseInt(target.replace('btn_url_', ''), 10);
        if (d.buttons && d.buttons[idx]) {
            d.buttons[idx].url = (d.buttons[idx].url || '') + tag;
        }
    } else {
        d.text = (d.text || '') + tag;
    }
}

// Media upload handler
async function handleFileUpload(event) {
    const file = event.target.files?.[0];
    if (!file || !selectedNode.value) return;

    isUploading.value = true;
    uploadError.value = '';
    const formData = new FormData();
    formData.append('file', file);

    try {
        const { data } = await axios.post('/autozap/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        if (data.url) {
            selectedNode.value.data.media_url = data.url;
            selectedNode.value.data.mime_type = data.mime_type;
            if (data.file_name && !selectedNode.value.data.document_name) {
                selectedNode.value.data.document_name = data.file_name;
            }
        }
    } catch (err) {
        uploadError.value = err.response?.data?.message || 'Falha ao enviar arquivo. Tente novamente.';
    } finally {
        isUploading.value = false;
        if (event.target) event.target.value = '';
    }
}

function clearMedia() {
    if (!selectedNode.value) return;
    selectedNode.value.data.media_url = '';
    selectedNode.value.data.mime_type = '';
}

function addButton() {
    if (!selectedNode.value) return;
    if (!Array.isArray(selectedNode.value.data.buttons)) {
        selectedNode.value.data.buttons = [];
    }
    if (selectedNode.value.data.buttons.length >= 3) return;
    selectedNode.value.data.buttons.push({
        type: 'url',
        text: 'Acessar Link',
        url: '{{checkout_link}}',
    });
}

function removeButton(index) {
    if (!selectedNode.value || !Array.isArray(selectedNode.value.data.buttons)) return;
    selectedNode.value.data.buttons.splice(index, 1);
}

function onDragStart(e, type) {
    e.dataTransfer?.setData('application/autozap-node', type);
    e.dataTransfer.effectAllowed = 'move';
}

function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function onDrop(e) {
    e.preventDefault();
    const type = e.dataTransfer?.getData('application/autozap-node') || '';
    if (!type) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const pos = project({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
    addNode(type, pos);
}

function save() {
    emit('save', {
        graph_json: toStoredGraph(nodes.value, edges.value),
    });
}

// WhatsApp Live Preview Generator
function renderWhatsAppText(raw) {
    if (!raw) return '';
    const sample = {
        'customer.first_name': 'Lucas',
        'customer.name': 'Lucas Silveira',
        'customer.phone': '551199887766',
        'customer.email': 'lucas@email.com',
        'customer.cpf': '123.456.789-00',
        'order.product.name': 'Método Getfy Pro',
        'order.total_amount_formatted': 'R$ 197,00',
        'order.id': '#10492',
        'order.payment_method': 'PIX',
        'pix.copy_paste': '00020126580014br.gov.bcb.pix0136123e4567-e89b-12d3-a456-4266141740005204000053039865405197.005802BR5913Getfy Pagamentos6009Sao Paulo62070503***6304E8A1',
        'pix.qrcode': 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=getfy-pix-preview',
        'boleto.barcode': '34191.79001 01043.510047 91020.150008 1 98760000019700',
        'boleto.pdf_url': 'https://getfy.com/boleto.pdf',
        'boleto.expire_at': '18/08/2026',
        'access.link': 'https://hub.getfy.com/login',
        'access.email': 'lucas@email.com',
        'access.password': 'getfy#2026',
        'checkout_link': 'https://pay.getfy.com/c/metodo-pro',
    };

    let text = String(raw);
    for (const [k, v] of Object.entries(sample)) {
        text = text.replaceAll(`{{${k}}}`, v);
    }

    // WhatsApp formatting rules
    return text
        .replace(/\*(.*?)\*/g, '<strong class="font-bold text-zinc-900 dark:text-zinc-100">$1</strong>')
        .replace(/_(.*?)_/g, '<em class="italic">$1</em>')
        .replace(/~(.*?)~/g, '<del class="line-through opacity-70">$1</del>')
        .replace(/\n/g, '<br>');
}

const defaultEdgeOptions = {
    type: 'autozap',
    markerEnd: MarkerType.ArrowClosed,
    animated: true,
    style: { strokeDasharray: '6 6' },
};

const connectionLineStyle = { strokeDasharray: '6 6', strokeWidth: 2.5, stroke: 'rgba(16, 185, 129, 0.9)' };
</script>

<template>
    <Teleport to="body">
        <!-- Fullscreen Floating Visual Flow Editor -->
        <div class="fixed inset-0 z-[100000] flex flex-col bg-zinc-100 dark:bg-zinc-950 font-sans select-none">
            <!-- Top Navbar Bar -->
            <header class="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                <div class="flex items-center gap-4">
                    <button
                        type="button"
                        class="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                        @click="emit('close')"
                    >
                        <ArrowLeft class="h-4 w-4 text-emerald-500" />
                        <span>Voltar para Automações</span>
                    </button>

                    <div class="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-800"></div>

                    <div class="flex items-center gap-2.5">
                        <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <MessageSquare class="h-4 w-4" />
                        </div>
                        <div>
                            <div class="text-sm font-black text-zinc-900 dark:text-white">
                                {{ flow?.name || 'Editor de Fluxo Visual' }}
                            </div>
                            <div class="text-[11px] text-zinc-400">
                                Arraste os blocos e conecte os pontos para desenhar o fluxo.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-2.5">
                    <Button type="button" variant="outline" size="sm" :disabled="props.saving || isSaving" @click="emit('close')">
                        Cancelar
                    </Button>
                    <Button
                        type="button"
                        size="sm"
                        class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 min-w-[130px] shadow-sm transition active:scale-95"
                        :disabled="props.saving || isSaving"
                        @click="save"
                    >
                        <Loader2 v-if="props.saving || isSaving" class="h-4 w-4 animate-spin text-white" />
                        <Save v-else class="h-4 w-4" />
                        <span>{{ (props.saving || isSaving) ? 'Salvando...' : 'Salvar Fluxo' }}</span>
                    </Button>
                </div>
            </header>

            <!-- Floating Top Saving Indicator Toast -->
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4"
            >
                <div
                    v-if="props.saving || isSaving"
                    class="absolute top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 rounded-2xl bg-zinc-900/90 dark:bg-emerald-950/90 text-white px-5 py-2.5 shadow-2xl backdrop-blur-md border border-emerald-500/30 text-xs font-bold"
                >
                    <Loader2 class="h-4 w-4 animate-spin text-emerald-400" />
                    <span>Salvando alterações do fluxo no servidor...</span>
                </div>
            </transition>

            <!-- Main Floating Workspace -->
            <div class="flex flex-1 overflow-hidden">
                <!-- Left Palette -->
                <aside class="w-72 shrink-0 flex flex-col border-r border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/90 overflow-y-auto">
                    <div class="mb-1 text-xs font-black uppercase tracking-wider text-zinc-400">
                        Componentes
                    </div>
                    <p class="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        Arraste para o canvas ou clique duas vezes para adicionar:
                    </p>

                    <div class="space-y-2.5">
                        <div
                            v-for="p in palette"
                            :key="p.type"
                            class="group relative flex cursor-grab select-none items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 shadow-2xs transition hover:border-emerald-500/40 hover:bg-white hover:shadow-md active:cursor-grabbing dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/40"
                            draggable="true"
                            @dragstart="(e) => onDragStart(e, p.type)"
                            @dblclick="addNode(p.type)"
                        >
                            <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border text-sm font-semibold" :class="p.color">
                                <component :is="p.icon" class="h-4 w-4" />
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="text-xs font-bold text-zinc-900 dark:text-white">{{ p.title }}</div>
                                <div class="mt-0.5 text-[11px] leading-tight text-zinc-500 dark:text-zinc-400">{{ p.desc }}</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-auto pt-6 text-[11px] text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/80">
                        💡 Dica: Conecte puxando do ponto verde para o azul de outro bloco.
                    </div>
                </aside>

                <!-- Center VueFlow Canvas -->
                <main class="flex-1 relative h-full overflow-hidden bg-zinc-50/60 dark:bg-zinc-950/80" @dragover="onDragOver" @drop="onDrop">
                    <VueFlow
                        v-model:nodes="nodes"
                        v-model:edges="edges"
                        :default-viewport="{ x: 0, y: 0, zoom: 1 }"
                        :min-zoom="0.2"
                        :max-zoom="1.8"
                        :default-edge-options="defaultEdgeOptions"
                        :connection-line-style="connectionLineStyle"
                        connection-line-type="bezier"
                        class="autozap-flow"
                        @node-click="onNodeClick"
                        @edge-click="onEdgeClick"
                        @pane-click="clearSelection"
                    >
                        <!-- Custom edge with trash button at center -->
                        <template
                            #edge-autozap="{
                                id,
                                sourceX,
                                sourceY,
                                targetX,
                                targetY,
                                sourcePosition,
                                targetPosition,
                                markerEnd,
                                style,
                                selected,
                            }"
                        >
                            <BaseEdge
                                :id="id"
                                :path="getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition })[0]"
                                :marker-end="markerEnd"
                                :style="style"
                                :class="selected ? 'autozap-edge--selected' : ''"
                            />
                            <EdgeLabelRenderer>
                                <div
                                    class="autozap-edge-trash"
                                    :style="(() => { const [, x, y] = getBezierPath({ sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }); return { transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }; })()"
                                >
                                    <button
                                        type="button"
                                        class="autozap-edge-trashBtn"
                                        title="Excluir ligação"
                                        @click.stop="deleteEdgeById(id)"
                                    >
                                        <Trash2 class="h-3 w-3" />
                                    </button>
                                </div>
                            </EdgeLabelRenderer>
                        </template>

                        <!-- Trigger Node -->
                        <template #node-trigger="{ id, data, selected }">
                            <div class="autozap-node autozap-node--trigger" :class="selected ? 'autozap-node--selected' : ''">
                                <Handle type="source" :position="Position.Right" class="autozap-handle autozap-handle--source" />
                                <div class="autozap-node__header">
                                    <div class="flex items-center gap-1.5">
                                        <div class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span class="font-bold text-xs text-zinc-900 dark:text-white">Gatilho do Evento</span>
                                    </div>
                                    <span class="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400">INÍCIO</span>
                                </div>
                                <div class="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
                                    <span class="font-medium text-zinc-900 dark:text-white">{{ data?.event_class || 'Evento disparado' }}</span>
                                </div>
                            </div>
                        </template>

                        <!-- Send Message Node -->
                        <template #node-send_message="{ id, data, selected }">
                            <div class="autozap-node autozap-node--msg" :class="selected ? 'autozap-node--selected' : ''">
                                <Handle type="target" :position="Position.Left" class="autozap-handle autozap-handle--target" />
                                <Handle type="source" :position="Position.Right" class="autozap-handle autozap-handle--source" />
                                <button type="button" class="autozap-node-trash" title="Excluir" @click.stop="deleteNodeById(id)">
                                    <Trash2 class="h-3 w-3" />
                                </button>
                                <div class="autozap-node__header">
                                    <div class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                        <MessageSquare class="h-3.5 w-3.5" />
                                        <span class="font-bold text-xs text-zinc-900 dark:text-white">Enviar Mensagem</span>
                                    </div>
                                </div>
                                <div v-if="data?.subtitle" class="autozap-node__subtitle">{{ data.subtitle }}</div>
                            </div>
                        </template>

                        <!-- Delay Node -->
                        <template #node-delay="{ id, data, selected }">
                            <div class="autozap-node autozap-node--delay" :class="selected ? 'autozap-node--selected' : ''">
                                <Handle type="target" :position="Position.Left" class="autozap-handle autozap-handle--target" />
                                <Handle type="source" :position="Position.Right" class="autozap-handle autozap-handle--source" />
                                <button type="button" class="autozap-node-trash" title="Excluir" @click.stop="deleteNodeById(id)">
                                    <Trash2 class="h-3 w-3" />
                                </button>
                                <div class="autozap-node__header">
                                    <div class="flex items-center gap-1.5 text-amber-500">
                                        <Clock class="h-3.5 w-3.5" />
                                        <span class="font-bold text-xs text-zinc-900 dark:text-white">Aguardar Tempo</span>
                                    </div>
                                </div>
                                <div v-if="data?.subtitle" class="autozap-node__subtitle">{{ data.subtitle }}</div>
                            </div>
                        </template>

                        <!-- Condition Node -->
                        <template #node-condition="{ id, data, selected }">
                            <div class="autozap-node autozap-node--condition" :class="selected ? 'autozap-node--selected' : ''">
                                <Handle type="target" :position="Position.Left" class="autozap-handle autozap-handle--target" />
                                <Handle type="source" :position="Position.Right" class="autozap-handle autozap-handle--source" />
                                <button type="button" class="autozap-node-trash" title="Excluir" @click.stop="deleteNodeById(id)">
                                    <Trash2 class="h-3 w-3" />
                                </button>
                                <div class="autozap-node__header">
                                    <div class="flex items-center gap-1.5 text-indigo-500">
                                        <GitBranch class="h-3.5 w-3.5" />
                                        <span class="font-bold text-xs text-zinc-900 dark:text-white">Verificação / Regra</span>
                                    </div>
                                </div>
                                <div v-if="data?.subtitle" class="autozap-node__subtitle">{{ data.subtitle }}</div>
                                <div class="mt-1 text-[10px] text-zinc-400 dark:text-zinc-500">Conecte saídas SIM e NÃO</div>
                            </div>
                        </template>

                        <!-- End Node -->
                        <template #node-end="{ id, data, selected }">
                            <div class="autozap-node autozap-node--end" :class="selected ? 'autozap-node--selected' : ''">
                                <Handle type="target" :position="Position.Left" class="autozap-handle autozap-handle--target" />
                                <button type="button" class="autozap-node-trash" title="Excluir" @click.stop="deleteNodeById(id)">
                                    <Trash2 class="h-3 w-3" />
                                </button>
                                <div class="autozap-node__header">
                                    <div class="flex items-center gap-1.5 text-zinc-500">
                                        <CheckCircle2 class="h-3.5 w-3.5" />
                                        <span class="font-bold text-xs text-zinc-900 dark:text-white">Fim do Fluxo</span>
                                    </div>
                                    <span class="rounded bg-zinc-200 px-1.5 py-0.5 text-[9px] font-bold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">FIM</span>
                                </div>
                            </div>
                        </template>

                        <Background pattern-color="rgba(120,120,120,0.18)" :gap="18" />
                        <Controls />
                    </VueFlow>
                </main>

                <!-- Right Inspector Drawer (Only opens when node/edge selected) -->
                <aside v-if="showInspector" class="w-[450px] shrink-0 border-l border-zinc-200 bg-white p-5 shadow-lg dark:border-zinc-800 dark:bg-zinc-900 overflow-y-auto">
                    <div class="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-800">
                        <div class="text-sm font-bold text-zinc-900 dark:text-white">Configurar Bloco</div>
                        <div class="flex items-center gap-1">
                            <Button
                                v-if="selectedNode && selectedNode.id !== 'trigger'"
                                type="button"
                                size="xs"
                                variant="destructive"
                                @click="deleteSelectedNode"
                            >
                                Excluir Bloco
                            </Button>
                            <Button
                                v-if="selectedEdge"
                                type="button"
                                size="xs"
                                variant="destructive"
                                @click="deleteSelectedEdge"
                            >
                                Excluir Ligação
                            </Button>
                        </div>
                    </div>

                    <!-- Inspector: Message Node -->
                    <div v-if="selectedNode?.type === 'send_message'" class="space-y-4">
                        <!-- Switch between Editor and WhatsApp Live Screen Preview -->
                        <div class="flex rounded-2xl bg-zinc-100 p-1 dark:bg-zinc-950 text-xs">
                            <button
                                type="button"
                                class="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 font-bold transition"
                                :class="inspectorTab === 'editor' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                @click="inspectorTab = 'editor'"
                            >
                                <Sliders class="h-3.5 w-3.5 text-emerald-500" />
                                <span>Configuração</span>
                            </button>
                            <button
                                type="button"
                                class="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 font-bold transition"
                                :class="inspectorTab === 'preview' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                @click="inspectorTab = 'preview'"
                            >
                                <Eye class="h-3.5 w-3.5" />
                                <span>Prévia no WhatsApp</span>
                            </button>
                        </div>

                        <!-- TAB 1: FORM EDITOR -->
                        <div v-if="inspectorTab === 'editor'" class="space-y-4">
                            <!-- Recipient Target Selection -->
                            <div class="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-3.5 space-y-2.5 dark:border-zinc-800 dark:bg-zinc-950">
                                <div class="flex items-center justify-between">
                                    <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                                        <Users class="h-3.5 w-3.5 text-emerald-500" />
                                        <span>Destinatário da Mensagem</span>
                                    </label>
                                    <span class="text-[10px] text-zinc-400">Para quem enviar</span>
                                </div>

                                <!-- 3 Options: Customer, Custom Phone (Numero Manual), WhatsApp Group -->
                                <div class="grid grid-cols-3 gap-1.5 rounded-xl bg-zinc-200/50 p-1 dark:bg-zinc-900 text-xs">
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-lg py-1.5 font-bold transition"
                                        :class="selectedNode.data.recipient_type === 'customer' || !selectedNode.data.recipient_type ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.recipient_type = 'customer'"
                                    >
                                        <User class="h-3.5 w-3.5 text-emerald-500" />
                                        <span>Cliente</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-lg py-1.5 font-bold transition"
                                        :class="selectedNode.data.recipient_type === 'custom' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.recipient_type = 'custom'"
                                    >
                                        <Phone class="h-3.5 w-3.5 text-blue-500" />
                                        <span>Número Manual</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-lg py-1.5 font-bold transition"
                                        :class="selectedNode.data.recipient_type === 'group' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="() => { selectedNode.data.recipient_type = 'group'; if (availableGroups.length === 0) loadGroups(); }"
                                    >
                                        <Users class="h-3.5 w-3.5 text-purple-500" />
                                        <span>Grupo</span>
                                    </button>
                                </div>

                                <!-- Custom Number Input (Numero Manual) -->
                                <div v-if="selectedNode.data.recipient_type === 'custom'" class="space-y-1 pt-1">
                                    <label class="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                                        Número do WhatsApp de Destino (com DDD)
                                    </label>
                                    <input
                                        v-model="selectedNode.data.custom_phone"
                                        type="text"
                                        placeholder="Ex: 5511999998888 ou 11999998888"
                                        class="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                        @focus="activeInputTarget = 'custom_phone'"
                                    />
                                    <p class="text-[10px] text-zinc-500 dark:text-zinc-400">
                                        Dica: Ideal para receber alertas de vendas para seu número pessoal, sócio ou equipe.
                                    </p>
                                </div>

                                <!-- WhatsApp Connected Group Selection -->
                                <div v-if="selectedNode.data.recipient_type === 'group'" class="space-y-2 pt-1">
                                    <div class="flex items-center justify-between">
                                        <label class="block text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                                            Selecione o Grupo do WhatsApp
                                        </label>
                                        <button
                                            type="button"
                                            class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 hover:underline dark:text-emerald-400"
                                            :disabled="loadingGroups"
                                            @click="loadGroups"
                                        >
                                            <RefreshCw class="h-3 w-3" :class="loadingGroups ? 'animate-spin' : ''" />
                                            <span>{{ loadingGroups ? 'Atualizando...' : 'Atualizar Lista' }}</span>
                                        </button>
                                    </div>

                                    <!-- Loading State -->
                                    <div v-if="loadingGroups" class="py-2 text-center text-xs text-zinc-400">
                                        <Loader2 class="inline h-3.5 w-3.5 animate-spin mr-1.5 text-emerald-500" />
                                        Buscando grupos da sua conexão WhatsApp...
                                    </div>

                                    <!-- Dropdown List of Connected Groups -->
                                    <div v-else-if="availableGroups.length > 0 && !manualGroupInput" class="space-y-1.5">
                                        <select
                                            v-model="selectedNode.data.group_id"
                                            class="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                                        >
                                            <option value="">Selecione o grupo conectado...</option>
                                            <option v-for="g in availableGroups" :key="g.id" :value="g.id">
                                                👥 {{ g.name }} {{ g.participants_count ? `(${g.participants_count} participantes)` : '' }}
                                            </option>
                                        </select>
                                        <div class="flex items-center justify-between text-[10px] text-zinc-400">
                                            <span>{{ availableGroups.length }} grupo(s) encontrado(s) na sua conta.</span>
                                            <button
                                                type="button"
                                                class="text-emerald-600 hover:underline dark:text-emerald-400 font-semibold"
                                                @click="manualGroupInput = true"
                                            >
                                                Digitar ID manualmente
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Manual Group ID Input (or fallback when 0 groups) -->
                                    <div v-else class="space-y-1.5">
                                        <input
                                            v-model="selectedNode.data.group_id"
                                            type="text"
                                            placeholder="Ex: 120363025244589234@g.us ou ID do Grupo"
                                            class="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                            @focus="activeInputTarget = 'group_id'"
                                        />
                                        <div class="flex items-center justify-between text-[10px] text-zinc-500 dark:text-zinc-400">
                                            <span>ID/JID do grupo no WhatsApp.</span>
                                            <button
                                                v-if="availableGroups.length > 0"
                                                type="button"
                                                class="text-emerald-600 hover:underline dark:text-emerald-400 font-semibold"
                                                @click="manualGroupInput = false"
                                            >
                                                Ver lista de grupos
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Format / Mode Tabs -->
                            <div>
                                <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                                    Tipo de Mensagem
                                </label>
                                <div class="grid grid-cols-3 gap-1.5 rounded-2xl bg-zinc-100 p-1 dark:bg-zinc-950 text-xs">
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-xl py-1.5 font-bold transition"
                                        :class="selectedNode.data.mode === 'text' || !selectedNode.data.mode ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.mode = 'text'"
                                    >
                                        <MessageSquare class="h-3.5 w-3.5 text-emerald-500" />
                                        <span>Texto</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-xl py-1.5 font-bold transition"
                                        :class="selectedNode.data.mode === 'image' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.mode = 'image'"
                                    >
                                        <ImageIcon class="h-3.5 w-3.5 text-blue-500" />
                                        <span>Imagem</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-xl py-1.5 font-bold transition"
                                        :class="selectedNode.data.mode === 'audio' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.mode = 'audio'"
                                    >
                                        <Mic class="h-3.5 w-3.5 text-purple-500" />
                                        <span>Áudio / Voz</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-xl py-1.5 font-bold transition"
                                        :class="selectedNode.data.mode === 'document' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.mode = 'document'"
                                    >
                                        <FileText class="h-3.5 w-3.5 text-amber-500" />
                                        <span>PDF / Doc</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-xl py-1.5 font-bold transition"
                                        :class="selectedNode.data.mode === 'video' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.mode = 'video'"
                                    >
                                        <VideoIcon class="h-3.5 w-3.5 text-rose-500" />
                                        <span>Vídeo</span>
                                    </button>
                                    <button
                                        type="button"
                                        class="flex items-center justify-center gap-1 rounded-xl py-1.5 font-bold transition"
                                        :class="selectedNode.data.mode === 'buttons' || selectedNode.data.mode === 'interactive' ? 'bg-white text-zinc-900 shadow-2xs dark:bg-zinc-800 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400'"
                                        @click="selectedNode.data.mode = 'buttons'"
                                    >
                                        <MousePointerClick class="h-3.5 w-3.5 text-indigo-500" />
                                        <span>Botões</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Media Upload / Link Section -->
                            <div
                                v-if="['image', 'audio', 'document', 'video'].includes(selectedNode.data.mode)"
                                class="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-3.5 space-y-3 dark:border-zinc-800 dark:bg-zinc-950"
                            >
                                <div class="flex items-center justify-between">
                                    <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                        Arquivo de Mídia
                                    </label>
                                    <span v-if="selectedNode.data.media_url" class="text-[11px] text-emerald-600 font-semibold dark:text-emerald-400">
                                        ✓ Mídia vinculada
                                    </span>
                                </div>

                                <div class="flex flex-col gap-2">
                                    <div class="flex items-center gap-2">
                                        <input
                                            ref="fileInputRef"
                                            type="file"
                                            class="hidden"
                                            :accept="
                                                selectedNode.data.mode === 'image'
                                                    ? 'image/*'
                                                    : selectedNode.data.mode === 'audio'
                                                    ? 'audio/*'
                                                    : selectedNode.data.mode === 'video'
                                                    ? 'video/*'
                                                    : '.pdf,.doc,.docx,.xls,.xlsx,.zip'
                                            "
                                            @change="handleFileUpload"
                                        />
                                        <button
                                            type="button"
                                            class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-300 bg-white p-3 text-xs font-semibold text-zinc-800 shadow-2xs transition hover:border-emerald-500 hover:bg-emerald-50/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                                            :disabled="isUploading"
                                            @click="fileInputRef?.click()"
                                        >
                                            <Loader2 v-if="isUploading" class="h-4 w-4 animate-spin text-emerald-600" />
                                            <Upload v-else class="h-4 w-4 text-emerald-600" />
                                            <span>{{ isUploading ? 'Enviando arquivo...' : 'Fazer Upload do Arquivo (PC)' }}</span>
                                        </button>
                                        <button
                                            v-if="selectedNode.data.media_url"
                                            type="button"
                                            class="rounded-xl border border-zinc-200 bg-white p-2.5 text-zinc-500 hover:text-red-600 dark:border-zinc-700 dark:bg-zinc-900"
                                            title="Remover arquivo"
                                            @click="clearMedia"
                                        >
                                            <Trash2 class="h-4 w-4" />
                                        </button>
                                    </div>

                                    <div v-if="uploadError" class="text-[11px] font-semibold text-red-500">
                                        {{ uploadError }}
                                    </div>

                                    <div class="space-y-1 pt-1">
                                        <div class="relative">
                                            <LinkIcon class="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                                            <input
                                                v-model="selectedNode.data.media_url"
                                                type="text"
                                                placeholder="Ou informe URL: {{pix.qrcode}} / https://..."
                                                class="w-full rounded-xl border border-zinc-300 bg-white py-1.5 pl-8 pr-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                                @focus="activeInputTarget = 'media_url'"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <!-- Audio Mode: WhatsApp Voice Note Switch (PTT) -->
                                <div v-if="selectedNode.data.mode === 'audio'" class="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 space-y-1">
                                    <label class="flex items-center justify-between cursor-pointer">
                                        <div class="text-xs font-bold text-purple-950 dark:text-purple-300">
                                            🎙️ Enviar como Nota de Voz gravada na hora (PTT)
                                        </div>
                                        <input
                                            v-model="selectedNode.data.is_ptt"
                                            type="checkbox"
                                            class="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500"
                                        />
                                    </label>
                                    <p class="text-[10px] text-purple-800 dark:text-purple-400">
                                        Aparece para o cliente com o microfone verde gravado no momento.
                                    </p>
                                </div>

                                <!-- Document Mode: Custom File Name -->
                                <div v-if="selectedNode.data.mode === 'document'" class="space-y-1">
                                    <label class="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300">
                                        Nome do Arquivo (com .pdf)
                                    </label>
                                    <input
                                        v-model="selectedNode.data.document_name"
                                        type="text"
                                        placeholder="Ex: boleto-{{order.id}}.pdf"
                                        class="w-full rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                        @focus="activeInputTarget = 'document_name'"
                                    />
                                </div>
                            </div>

                            <!-- Dynamic Variables Chip Toolbar -->
                            <div class="space-y-2 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-3.5 dark:border-zinc-800 dark:bg-zinc-950">
                                <div class="flex items-center justify-between">
                                    <label class="flex items-center gap-1.5 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                        <Sparkles class="h-3.5 w-3.5 text-emerald-500" />
                                        <span>Inserir Variável Dinâmica</span>
                                    </label>
                                    <span class="text-[10px] text-zinc-400">1 Clique</span>
                                </div>

                                <div class="flex gap-1 overflow-x-auto no-scrollbar border-b border-zinc-200/80 pb-1.5 dark:border-zinc-800">
                                    <button
                                        v-for="grp in variableGroups"
                                        :key="grp.id"
                                        type="button"
                                        class="rounded-lg px-2.5 py-1 text-[11px] font-bold transition whitespace-nowrap"
                                        :class="
                                            activeVariableTab === grp.id
                                                ? 'bg-emerald-600 text-white shadow-2xs'
                                                : 'bg-zinc-200/60 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300'
                                        "
                                        @click="activeVariableTab = grp.id"
                                    >
                                        {{ grp.label }}
                                    </button>
                                </div>

                                <div class="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pt-1">
                                    <button
                                        v-for="v in variableGroups.find((g) => g.id === activeVariableTab)?.variables || []"
                                        :key="v.tag"
                                        type="button"
                                        class="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[11px] font-semibold text-zinc-800 shadow-2xs transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 active:scale-95 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-emerald-950/40"
                                        :title="`Inserir ${v.tag} (ex: ${v.preview})`"
                                        @click="insertVariable(v.tag)"
                                    >
                                        <Plus class="h-2.5 w-2.5 text-emerald-500" />
                                        <span>{{ v.label }}</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Interactive Buttons Header / Title -->
                            <div v-if="selectedNode.data.mode === 'buttons' || selectedNode.data.mode === 'interactive'" class="space-y-3">
                                <div class="space-y-1">
                                    <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Título do Card (Opcional)</label>
                                    <input
                                        v-model="selectedNode.data.title"
                                        type="text"
                                        placeholder="Ex: Seu Pedido foi Gerado!"
                                        class="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                        @focus="activeInputTarget = 'title'"
                                    />
                                </div>
                            </div>

                            <!-- Message Body / Caption Textarea -->
                            <div class="space-y-1.5">
                                <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                                    {{ selectedNode.data.mode === 'text' || selectedNode.data.mode === 'buttons' ? 'Texto da Mensagem' : 'Legenda da Mídia (Opcional)' }}
                                </label>
                                <textarea
                                    v-model="selectedNode.data.text"
                                    rows="6"
                                    class="w-full rounded-2xl border border-zinc-300 bg-white p-3.5 text-xs leading-relaxed text-zinc-900 placeholder:text-zinc-400 transition focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-emerald-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100 shadow-2xs"
                                    :placeholder="
                                        selectedNode.data.mode === 'text'
                                            ? 'Olá {{customer.first_name}}! Segue seu código PIX:\n{{pix.copy_paste}}'
                                            : 'Digite a legenda que acompanha a mídia...'
                                    "
                                    @focus="activeInputTarget = 'text'"
                                />
                                <div class="text-[10px] text-zinc-400">
                                    Suporta formatação: *negrito*, _itálico_, ~tachado~ e emojis.
                                </div>
                            </div>

                            <!-- Buttons Editor -->
                            <div v-if="selectedNode.data.mode === 'buttons' || selectedNode.data.mode === 'interactive'" class="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-3.5 dark:border-zinc-800 dark:bg-zinc-950">
                                <div class="flex items-center justify-between">
                                    <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                        Botões de Ação (Até 3)
                                    </label>
                                    <button
                                        v-if="(selectedNode.data.buttons?.length || 0) < 3"
                                        type="button"
                                        class="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-2 py-1 text-[11px] font-bold text-white shadow-2xs hover:bg-emerald-700"
                                        @click="addButton"
                                    >
                                        <Plus class="h-3 w-3" />
                                        <span>Adicionar Botão</span>
                                    </button>
                                </div>

                                <div v-if="!selectedNode.data.buttons || selectedNode.data.buttons.length === 0" class="text-center py-3 text-xs text-zinc-400">
                                    Nenhum botão adicionado. Clique acima para adicionar.
                                </div>

                                <div v-else class="space-y-2.5">
                                    <div
                                        v-for="(btn, idx) in selectedNode.data.buttons"
                                        :key="idx"
                                        class="rounded-xl border border-zinc-200 bg-white p-3 space-y-2 dark:border-zinc-700 dark:bg-zinc-900"
                                    >
                                        <div class="flex items-center justify-between">
                                            <span class="text-[11px] font-bold text-zinc-700 dark:text-zinc-300">
                                                Botão #{{ idx + 1 }}
                                            </span>
                                            <button
                                                type="button"
                                                class="text-zinc-400 hover:text-red-500"
                                                @click="removeButton(idx)"
                                            >
                                                <Trash2 class="h-3.5 w-3.5" />
                                            </button>
                                        </div>

                                        <div class="grid grid-cols-2 gap-2">
                                            <div>
                                                <label class="block text-[10px] font-semibold text-zinc-500">Texto do Botão</label>
                                                <input
                                                    v-model="btn.text"
                                                    type="text"
                                                    placeholder="Ex: Copiar PIX"
                                                    class="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                                />
                                            </div>
                                            <div>
                                                <label class="block text-[10px] font-semibold text-zinc-500">Tipo de Ação</label>
                                                <select
                                                    v-model="btn.type"
                                                    class="w-full rounded-lg border border-zinc-300 bg-white px-2 py-1 text-xs text-zinc-900 focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                                                >
                                                    <option value="url">Abrir Link (URL)</option>
                                                    <option value="reply">Resposta Rápida</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div v-if="btn.type === 'url'">
                                            <label class="block text-[10px] font-semibold text-zinc-500">Link de Destino</label>
                                            <input
                                                v-model="btn.url"
                                                type="text"
                                                placeholder="Ex: {{checkout_link}}"
                                                class="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                                @focus="activeInputTarget = `btn_url_${idx}`"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="space-y-1 pt-1">
                                    <label class="block text-[11px] font-bold text-zinc-700 dark:text-zinc-300">Rodapé (Opcional)</label>
                                    <input
                                        v-model="selectedNode.data.footer"
                                        type="text"
                                        placeholder="Ex: Mensagem enviada automaticamente pelo Getfy"
                                        class="w-full rounded-xl border border-zinc-300 bg-white px-3 py-1.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:bg-zinc-900 dark:focus:text-zinc-100"
                                        @focus="activeInputTarget = 'footer'"
                                    />
                                </div>
                            </div>
                        </div>

                        <!-- TAB 2: WHATSAPP SMARTPHONE CLIENT LIVE PREVIEW -->
                        <div v-else-if="inspectorTab === 'preview'" class="space-y-3">
                            <div class="text-center pb-1">
                                <span class="text-xs font-bold text-zinc-600 dark:text-zinc-400">
                                    Simulação de como seu cliente verá no WhatsApp
                                </span>
                            </div>

                            <!-- Smartphone Shell Mockup -->
                            <div class="relative mx-auto w-full max-w-[340px] rounded-[38px] border-[6px] border-zinc-800 bg-zinc-900 p-1.5 shadow-2xl overflow-hidden ring-1 ring-zinc-700/50">
                                <!-- Phone Speaker Notch -->
                                <div class="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-3.5 w-24 rounded-full bg-zinc-800 flex items-center justify-center">
                                    <div class="h-1.5 w-1.5 rounded-full bg-zinc-900"></div>
                                </div>

                                <!-- Screen Content -->
                                <div class="relative rounded-[30px] overflow-hidden flex flex-col bg-[#e5ddd5] dark:bg-[#0b141a] min-h-[460px]">
                                    <!-- WhatsApp Top Bar -->
                                    <div class="bg-[#075e54] dark:bg-[#1f2c34] text-white px-3 pt-6 pb-2.5 flex items-center justify-between shadow-md">
                                        <div class="flex items-center gap-2">
                                            <ArrowLeft class="h-4 w-4" />
                                            <div class="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold uppercase overflow-hidden ring-1 ring-white/30">
                                                <img v-if="selectedNode.data.mode === 'image' && selectedNode.data.media_url" :src="selectedNode.data.media_url" class="h-full w-full object-cover" />
                                                <span v-else>GF</span>
                                                <div class="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-1 ring-white"></div>
                                            </div>
                                            <div class="min-w-0">
                                                <div class="text-xs font-bold leading-tight truncate">Sua Loja • Suporte</div>
                                                <div class="text-[10px] opacity-80 leading-none">Online</div>
                                            </div>
                                        </div>
                                        <div class="flex items-center gap-2.5 opacity-90">
                                            <Video class="h-3.5 w-3.5" />
                                            <Phone class="h-3.5 w-3.5" />
                                            <MoreVertical class="h-3.5 w-3.5" />
                                        </div>
                                    </div>

                                    <!-- Chat Wallpaper Background + Date Pill -->
                                    <div class="flex-1 p-3 flex flex-col justify-end space-y-2 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]">
                                        <div class="mx-auto rounded-lg bg-white/80 dark:bg-[#182229] px-2.5 py-0.5 text-[10px] font-semibold text-zinc-600 dark:text-zinc-300 shadow-2xs">
                                            HOJE
                                        </div>

                                        <!-- WhatsApp Incoming Chat Bubble -->
                                        <div class="relative max-w-[92%] rounded-2xl rounded-tl-xs bg-white dark:bg-[#202c33] text-zinc-900 dark:text-zinc-100 shadow-xs p-2 space-y-1.5 text-xs">
                                            <!-- Media Preview: Image -->
                                            <div v-if="selectedNode.data.mode === 'image'" class="rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                                                <img
                                                    v-if="selectedNode.data.media_url"
                                                    :src="selectedNode.data.media_url"
                                                    alt="Preview"
                                                    class="w-full max-h-48 object-cover rounded-xl"
                                                />
                                                <div v-else class="h-36 flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
                                                    <ImageIcon class="h-8 w-8 mb-1 opacity-50" />
                                                    <span class="text-[11px]">Nenhuma imagem carregada</span>
                                                </div>
                                            </div>

                                            <!-- Media Preview: Video -->
                                            <div v-if="selectedNode.data.mode === 'video'" class="relative rounded-xl overflow-hidden bg-zinc-900 text-white h-36 flex items-center justify-center">
                                                <Play class="h-10 w-10 text-white/90 drop-shadow-md" />
                                                <span class="absolute bottom-2 left-2 text-[10px] font-bold bg-black/60 px-1.5 py-0.5 rounded">0:45</span>
                                            </div>

                                            <!-- Media Preview: Audio Voice Note (PTT) -->
                                            <div v-if="selectedNode.data.mode === 'audio'" class="flex items-center gap-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 p-2 border border-zinc-200/60 dark:border-zinc-700/60">
                                                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#128c7e] text-white shadow-2xs">
                                                    <Play class="h-4 w-4 fill-white ml-0.5" />
                                                </div>
                                                <div class="flex-1 space-y-1">
                                                    <!-- Waveform simulation bars -->
                                                    <div class="flex items-center gap-[2px] h-4">
                                                        <div v-for="h in [4,8,12,6,14,10,16,8,12,6,14,10,8,4,12,6]" :key="h" class="w-[3px] rounded-full bg-[#128c7e]" :style="{ height: `${h}px` }"></div>
                                                    </div>
                                                    <div class="flex items-center justify-between text-[10px] text-zinc-400">
                                                        <span>0:18</span>
                                                        <Mic v-if="selectedNode.data.is_ptt !== false" class="h-3 w-3 text-emerald-500" />
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Media Preview: Document PDF -->
                                            <div v-if="selectedNode.data.mode === 'document'" class="flex items-center gap-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/90 p-2.5 border border-zinc-200/80 dark:border-zinc-700">
                                                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                                                    <FileText class="h-5 w-5" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                    <div class="truncate text-xs font-bold text-zinc-900 dark:text-white">
                                                        {{ selectedNode.data.document_name || 'documento.pdf' }}
                                                    </div>
                                                    <div class="text-[10px] text-zinc-500 dark:text-zinc-400">184 KB • PDF</div>
                                                </div>
                                            </div>

                                            <!-- Interactive Header Title -->
                                            <div v-if="(selectedNode.data.mode === 'buttons' || selectedNode.data.mode === 'interactive') && selectedNode.data.title" class="font-bold text-xs text-zinc-900 dark:text-white pb-0.5">
                                                {{ selectedNode.data.title }}
                                            </div>

                                            <!-- Body Text / Caption with Markdown rendering & Sample data -->
                                            <div
                                                v-if="selectedNode.data.text"
                                                class="text-xs leading-relaxed break-words"
                                                v-html="renderWhatsAppText(selectedNode.data.text)"
                                            ></div>
                                            <div v-else-if="selectedNode.data.mode === 'text'" class="text-xs italic text-zinc-400">
                                                (Digite o texto da mensagem no formulário...)
                                            </div>

                                            <!-- Interactive Footer -->
                                            <div v-if="(selectedNode.data.mode === 'buttons' || selectedNode.data.mode === 'interactive') && selectedNode.data.footer" class="text-[10px] text-zinc-400 pt-0.5">
                                                {{ selectedNode.data.footer }}
                                            </div>

                                            <!-- Time + Double Blue Checks -->
                                            <div class="flex items-center justify-end gap-1 text-[9px] text-zinc-400 pt-0.5">
                                                <span>14:32</span>
                                                <CheckCheck class="h-3 w-3 text-blue-500" />
                                            </div>
                                        </div>

                                        <!-- Interactive Buttons Simulation -->
                                        <div v-if="(selectedNode.data.mode === 'buttons' || selectedNode.data.mode === 'interactive') && selectedNode.data.buttons?.length" class="space-y-1 max-w-[92%]">
                                            <button
                                                v-for="(btn, i) in selectedNode.data.buttons"
                                                :key="i"
                                                type="button"
                                                class="w-full flex items-center justify-center gap-1.5 rounded-xl bg-white dark:bg-[#202c33] text-[#00a884] dark:text-[#00a884] p-2 text-xs font-bold shadow-2xs border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-zinc-50 dark:hover:bg-[#2a3942]"
                                            >
                                                <LinkIcon v-if="btn.type === 'url'" class="h-3.5 w-3.5" />
                                                <MessageSquare v-else class="h-3.5 w-3.5" />
                                                <span>{{ btn.text || `Botão #${i+1}` }}</span>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Bottom Chat Input Bar Simulation -->
                                    <div class="bg-[#f0f2f5] dark:bg-[#202c33] px-3 py-2 flex items-center gap-2 border-t border-zinc-200 dark:border-zinc-700/60">
                                        <div class="flex-1 rounded-full bg-white dark:bg-[#2a3942] px-3 py-1.5 text-[11px] text-zinc-400">
                                            Mensagem
                                        </div>
                                        <div class="h-7 w-7 rounded-full bg-[#00a884] flex items-center justify-center text-white">
                                            <Mic class="h-3.5 w-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Inspector: Delay Node -->
                    <div v-else-if="selectedNode?.type === 'delay'" class="space-y-4">
                        <div class="space-y-2">
                            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Tempo de Espera</label>
                            <div class="flex gap-2">
                                <input
                                    v-model.number="selectedNode.data.delay_value"
                                    type="number"
                                    min="1"
                                    class="w-24 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-bold dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                                />
                                <select
                                    v-model="selectedNode.data.delay_unit"
                                    class="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                                >
                                    <option value="minutes">Minutos</option>
                                    <option value="hours">Horas</option>
                                    <option value="days">Dias</option>
                                    <option value="seconds">Segundos</option>
                                </select>
                            </div>
                            <p class="text-xs text-zinc-500 dark:text-zinc-400">
                                Ex: para aguardar 15 minutos antes de verificar se o PIX foi pago, defina 15 Minutos.
                            </p>
                        </div>
                    </div>

                    <!-- Inspector: Condition Node -->
                    <div v-else-if="selectedNode?.type === 'condition'" class="space-y-4">
                        <div class="space-y-1">
                            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Regra de Validação</label>
                            <select
                                v-model="selectedNode.data.kind"
                                class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-semibold dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                            >
                                <option value="order_is_paid">✅ Pedido foi pago? (Status = Aprovado/Completo)</option>
                                <option value="order_status_is">Status específico do pedido é...</option>
                                <option value="payment_method_is">Método de pagamento é...</option>
                                <option value="has_phone">Cliente possui telefone válido?</option>
                            </select>
                        </div>

                        <div v-if="selectedNode.data.kind === 'order_status_is'" class="space-y-1">
                            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Status Esperado</label>
                            <select
                                v-model="selectedNode.data.value"
                                class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                            >
                                <option value="pending">Pendente</option>
                                <option value="completed">Aprovado / Concluído</option>
                                <option value="rejected">Recusado</option>
                                <option value="cancelled">Cancelado</option>
                                <option value="refunded">Reembolsado</option>
                            </select>
                        </div>

                        <div v-if="selectedNode.data.kind === 'payment_method_is'" class="space-y-1">
                            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Método de Pagamento</label>
                            <select
                                v-model="selectedNode.data.value"
                                class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                            >
                                <option value="pix">PIX</option>
                                <option value="boleto">Boleto Bancário</option>
                                <option value="credit_card">Cartão de Crédito</option>
                            </select>
                        </div>

                        <div class="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-xs text-indigo-900 dark:text-indigo-300 space-y-1">
                            <div class="font-bold">Bifurcação do Fluxo:</div>
                            <div>• A saída <span class="font-bold text-emerald-600 dark:text-emerald-400">SIM</span> é executada se a condição for verdadeira.</div>
                            <div>• A saída <span class="font-bold text-red-600 dark:text-red-400">NÃO</span> é executada se for falsa.</div>
                        </div>
                    </div>

                    <!-- Inspector: Edge selected -->
                    <div v-else-if="selectedEdge" class="space-y-3">
                        <div class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Ligação de Fluxo</div>
                        <div v-if="selectedEdge.data?.branch || selectedEdge.data?.condition" class="space-y-1">
                            <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">Caminho da Condição</label>
                            <select
                                v-model="selectedEdge.data.branch"
                                class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                                @change="
                                    () => {
                                        selectedEdge.data.condition = selectedEdge.data.branch;
                                        selectedEdge.label = selectedEdge.data.branch === 'true' ? 'SIM' : 'NÃO';
                                        selectedEdge.style = {
                                            stroke: selectedEdge.data.branch === 'true' ? '#10b981' : '#ef4444',
                                            strokeWidth: 2,
                                        };
                                    }
                                "
                            >
                                <option value="true">SIM (Verdadeiro)</option>
                                <option value="false">NÃO (Falso)</option>
                            </select>
                        </div>
                        <p class="text-xs text-zinc-500 dark:text-zinc-400">
                            De: <span class="font-mono text-zinc-800 dark:text-zinc-200">{{ selectedEdge.source }}</span>
                            <br />
                            Para: <span class="font-mono text-zinc-800 dark:text-zinc-200">{{ selectedEdge.target }}</span>
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    </Teleport>
</template>

<style>
.autozap-flow {
    width: 100%;
    height: 100%;
}

.autozap-node {
    min-width: 180px;
    max-width: 240px;
    border-radius: 1rem;
    padding: 0.85rem;
    background: #ffffff;
    border: 1.5px solid #e4e4e7;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    position: relative;
    transition: all 0.15s ease;
}

.dark .autozap-node {
    background: #09090b;
    border-color: #27272a;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
}

.autozap-node--selected {
    border-color: #10b981 !important;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3), 0 4px 12px rgba(0, 0, 0, 0.08) !important;
}

.autozap-node--trigger {
    border-color: rgba(16, 185, 129, 0.4);
    background: linear-gradient(to bottom right, #ffffff, #f0fdf4);
}
.dark .autozap-node--trigger {
    background: linear-gradient(to bottom right, #09090b, #022c22);
}

.autozap-node--msg {
    border-left: 4px solid #10b981;
}

.autozap-node--delay {
    border-left: 4px solid #f59e0b;
}

.autozap-node--condition {
    border-left: 4px solid #6366f1;
}

.autozap-node--end {
    border-left: 4px solid #71717a;
}

.autozap-node__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
}

.autozap-node__subtitle {
    margin-top: 0.35rem;
    font-size: 0.7rem;
    line-height: 1.15;
    color: #71717a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.autozap-node-trash {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 22px;
    height: 22px;
    border-radius: 9999px;
    background: #ef4444;
    color: #ffffff;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border: none;
}

.autozap-node:hover .autozap-node-trash {
    display: flex;
}

.autozap-handle {
    width: 10px !important;
    height: 10px !important;
    background: #10b981 !important;
    border: 2px solid #ffffff !important;
    border-radius: 9999px !important;
}

.dark .autozap-handle {
    border-color: #09090b !important;
}

.autozap-handle--target {
    left: -6px !important;
    background: #3b82f6 !important;
}

.autozap-handle--source {
    right: -6px !important;
    background: #10b981 !important;
}

.autozap-edge-trash {
    position: absolute;
    pointer-events: all;
}

.autozap-edge-trashBtn {
    width: 20px;
    height: 20px;
    border-radius: 9999px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    color: #71717a;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.15s ease;
}

.dark .autozap-edge-trashBtn {
    background: #18181b;
    border-color: #27272a;
    color: #a1a1aa;
}

.autozap-edge-trashBtn:hover {
    background: #ef4444;
    border-color: #ef4444;
    color: #ffffff;
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
