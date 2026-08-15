<script setup>
import { computed, onMounted, ref } from 'vue';
import LayoutInfoprodutor from '@/Layouts/LayoutInfoprodutor.vue';
import Button from '@/components/ui/Button.vue';
import Checkbox from '@/components/ui/Checkbox.vue';
import FlowCanvasEditor from './FlowCanvasEditor.vue';
import IntegrationsSidebar from './IntegrationsSidebar.vue';
import axios from 'axios';
import {
    MessageSquare,
    Plus,
    Play,
    Zap,
    Clock,
    CheckCircle2,
    XCircle,
    AlertCircle,
    Copy,
    Trash2,
    Settings,
    Layers,
    Search,
    Filter,
    RefreshCw,
    ExternalLink,
    Sparkles,
    SlidersHorizontal,
    History,
    Activity,
    Bot,
    ArrowLeft,
    X,
    Palette,
    Edit3,
    Sliders,
    Loader2,
} from 'lucide-vue-next';

defineOptions({ layout: LayoutInfoprodutor });

const loading = ref(true);
const connectionLoading = ref(false);
const connected = ref(false);
const provider = ref(null);
const connectionError = ref('');
const showConnectionModal = ref(false);

const flows = ref([]);
const flowsLoading = ref(false);
const flowsError = ref('');
const searchQuery = ref('');
const selectedEventFilter = ref('all');

const availableProducts = ref([]);
const loadingProducts = ref(false);
const productSearch = ref('');

const runs = ref([]);
const runsLoading = ref(false);
const showRunsModal = ref(false);

// Flow Config Modal State (Name, Trigger, Products, Active)
const showFlowConfigModal = ref(false);
const configSaving = ref(false);
const configError = ref('');
const configForm = ref({
    id: null,
    name: '',
    trigger_event: 'App\\Events\\PixGenerated',
    all_products: true,
    product_ids: [],
    is_active: true,
    graph_json: null,
});

// Fullscreen Floating Flow Canvas Editor State
const editorOpen = ref(false);
const editorFlow = ref(null);
const editorSaving = ref(false);
const editorError = ref('');
const showTemplatesModal = ref(false);

const EVENTS = [
    { id: 'App\\Events\\PixGenerated', label: 'PIX gerado', icon: '⚡', category: 'Conversão' },
    { id: 'App\\Events\\BoletoGenerated', label: 'Boleto gerado', icon: '📄', category: 'Conversão' },
    { id: 'App\\Events\\OrderPending', label: 'Pedido pendente', icon: '⏳', category: 'Vendas' },
    { id: 'App\\Events\\OrderCompleted', label: 'Venda aprovada', icon: '✅', category: 'Vendas' },
    { id: 'App\\Events\\AccessDeliveryReady', label: 'Envio de acesso (WhatsApp)', icon: '🔑', category: 'Pós-venda' },
    { id: 'App\\Events\\CartAbandoned', label: 'Carrinho abandonado', icon: '🛒', category: 'Recuperação' },
    { id: 'App\\Events\\OrderRejected', label: 'Pagamento recusado', icon: '❌', category: 'Recuperação' },
    { id: 'App\\Events\\OrderCancelled', label: 'Pedido cancelado', icon: '🚫', category: 'Vendas' },
    { id: 'App\\Events\\OrderRefunded', label: 'Pedido reembolsado', icon: '↩️', category: 'Vendas' },
    { id: 'App\\Events\\SubscriptionCreated', label: 'Assinatura criada', icon: '🔄', category: 'Assinaturas' },
    { id: 'App\\Events\\SubscriptionRenewed', label: 'Assinatura renovada', icon: '🔁', category: 'Assinaturas' },
    { id: 'App\\Events\\SubscriptionPastDue', label: 'Assinatura em atraso', icon: '⚠️', category: 'Assinaturas' },
    { id: 'App\\Events\\SubscriptionCancelled', label: 'Assinatura cancelada', icon: '⛔', category: 'Assinaturas' },
];

function getEventMeta(eventClass) {
    return EVENTS.find((e) => e.id === eventClass) || { label: eventClass, icon: '⚡', category: 'Evento' };
}

const filteredFlows = computed(() => {
    return (flows.value || []).filter((f) => {
        if (selectedEventFilter.value !== 'all' && f.trigger_event !== selectedEventFilter.value) {
            return false;
        }
        if (searchQuery.value.trim()) {
            const q = searchQuery.value.toLowerCase();
            const matchName = (f.name || '').toLowerCase().includes(q);
            const matchEvent = (f.trigger_event || '').toLowerCase().includes(q);
            return matchName || matchEvent;
        }
        return true;
    });
});

const filteredProducts = computed(() => {
    if (!productSearch.value.trim()) return availableProducts.value;
    const q = productSearch.value.toLowerCase();
    return availableProducts.value.filter((p) => (p.name || '').toLowerCase().includes(q));
});

function selectAllProducts() {
    configForm.value.product_ids = availableProducts.value.map((p) => String(p.id));
}

function clearAllProducts() {
    configForm.value.product_ids = [];
}

function toggleProductSelection(prodId) {
    const id = String(prodId);
    if (configForm.value.product_ids.includes(id)) {
        configForm.value.product_ids = configForm.value.product_ids.filter((p) => p !== id);
    } else {
        configForm.value.product_ids.push(id);
    }
}

async function loadStatus() {
    connectionLoading.value = true;
    connectionError.value = '';
    try {
        const { data } = await axios.get('/autozap/connection');
        connected.value = !!data?.connected;
        provider.value = data?.provider || null;
    } catch (e) {
        connectionError.value = e.response?.data?.message || 'Falha ao obter status de conexão.';
    } finally {
        connectionLoading.value = false;
    }
}

async function loadProducts() {
    loadingProducts.value = true;
    try {
        const { data } = await axios.get('/autozap/products');
        availableProducts.value = Array.isArray(data?.products) ? data.products : [];
    } catch {
        // Fallback
    } finally {
        loadingProducts.value = false;
    }
}

async function loadFlows() {
    flowsLoading.value = true;
    flowsError.value = '';
    try {
        const { data } = await axios.get('/autozap/flows');
        flows.value = Array.isArray(data?.flows) ? data.flows : [];
    } catch (e) {
        flowsError.value = e.response?.data?.message || 'Erro ao carregar os fluxos.';
    } finally {
        flowsLoading.value = false;
        loading.value = false;
    }
}

async function loadRuns() {
    runsLoading.value = true;
    try {
        const { data } = await axios.get('/autozap/runs');
        runs.value = Array.isArray(data?.runs) ? data.runs : [];
    } catch {
        // Fallback
    } finally {
        runsLoading.value = false;
    }
}

function openRunsModal() {
    showRunsModal.value = true;
    loadRuns();
}

async function toggleFlowActive(flow) {
    const nextState = !flow.is_active;
    flow.is_active = nextState;
    try {
        await axios.put(`/autozap/flows/${flow.id}`, { is_active: nextState });
    } catch (e) {
        flow.is_active = !nextState;
        alert(e.response?.data?.message || 'Erro ao atualizar status do fluxo.');
    }
}

async function duplicateFlow(flow) {
    try {
        const { data } = await axios.post(`/autozap/flows/${flow.id}/duplicate`);
        await loadFlows();
        if (data?.id) {
            const newlyCreated = flows.value.find((f) => f.id === data.id);
            if (newlyCreated) openEditor(newlyCreated);
        }
    } catch (e) {
        alert(e.response?.data?.message || 'Erro ao duplicar fluxo.');
    }
}

async function deleteFlow(flow) {
    if (!confirm(`Deseja realmente excluir o fluxo "${flow.name}"?`)) return;
    try {
        await axios.delete(`/autozap/flows/${flow.id}`);
        flows.value = flows.value.filter((f) => f.id !== flow.id);
    } catch (e) {
        alert(e.response?.data?.message || 'Erro ao excluir fluxo.');
    }
}

// Open Configuration Modal
function openConfigModal(flow = null) {
    configError.value = '';
    productSearch.value = '';
    if (flow) {
        configForm.value = {
            id: flow.id,
            name: flow.name || '',
            trigger_event: flow.trigger_event || 'App\\Events\\PixGenerated',
            all_products: flow.all_products ?? (!flow.product_ids || flow.product_ids.length === 0),
            product_ids: Array.isArray(flow.product_ids) ? [...flow.product_ids] : (flow.product_id ? [String(flow.product_id)] : []),
            is_active: flow.is_active ?? true,
            graph_json: flow.graph_json || null,
        };
    } else {
        configForm.value = {
            id: null,
            name: 'Nova Automação',
            trigger_event: 'App\\Events\\PixGenerated',
            all_products: true,
            product_ids: [],
            is_active: true,
            graph_json: null,
        };
    }
    showFlowConfigModal.value = true;
}

// Save Flow Config (from Modal) and optionally open visual editor
async function saveFlowConfig(andOpenVisualEditor = false) {
    if (!configForm.value.name.trim()) {
        configError.value = 'Informe um nome para a automação.';
        return;
    }
    configSaving.value = true;
    configError.value = '';
    try {
        let savedFlow = null;
        if (configForm.value.id) {
            const { data } = await axios.put(`/autozap/flows/${configForm.value.id}`, {
                name: configForm.value.name,
                trigger_event: configForm.value.trigger_event,
                all_products: configForm.value.all_products,
                product_ids: configForm.value.all_products ? [] : configForm.value.product_ids,
                is_active: configForm.value.is_active,
            });
            savedFlow = data?.flow || { ...configForm.value };
        } else {
            const initialGraph = configForm.value.graph_json || {
                nodes: [
                    { id: 'trigger', type: 'trigger', x: 80, y: 160, data: { event_class: configForm.value.trigger_event } },
                    {
                        id: 'send1',
                        type: 'send_message',
                        x: 380,
                        y: 160,
                        data: {
                            mode: 'text',
                            text: 'Olá {{customer.first_name}}!\n\nRecebemos seu pedido de *{{order.product.name}}* no valor de {{order.total_amount_formatted}}.',
                        },
                    },
                    { id: 'end', type: 'end', x: 720, y: 160, data: {} },
                ],
                edges: [
                    { from: 'trigger', to: 'send1' },
                    { from: 'send1', to: 'end' },
                ],
            };

            const { data } = await axios.post('/autozap/flows', {
                name: configForm.value.name,
                trigger_event: configForm.value.trigger_event,
                all_products: configForm.value.all_products,
                product_ids: configForm.value.all_products ? [] : configForm.value.product_ids,
                is_active: configForm.value.is_active,
                graph_json: initialGraph,
            });
            savedFlow = data?.flow || { ...configForm.value, id: data?.id, graph_json: initialGraph };
        }

        await loadFlows();
        showFlowConfigModal.value = false;

        if (andOpenVisualEditor && savedFlow) {
            openEditor(savedFlow);
        }
    } catch (e) {
        configError.value = e.response?.data?.message || 'Erro ao salvar configuração.';
    } finally {
        configSaving.value = false;
    }
}

// Open Visual Fullscreen Canvas Editor
function openEditor(flow) {
    editorFlow.value = flow;
    editorError.value = '';
    editorOpen.value = true;
}

// Save from Floating Canvas Editor
async function handleSaveFlow(payload) {
    if (!editorFlow.value?.id) return;
    editorSaving.value = true;
    editorError.value = '';
    try {
        await axios.put(`/autozap/flows/${editorFlow.value.id}`, {
            graph_json: payload.graph_json,
        });
        await loadFlows();
        editorOpen.value = false;
    } catch (e) {
        alert(e.response?.data?.message || 'Erro ao salvar fluxo.');
    } finally {
        editorSaving.value = false;
    }
}

function createFromTemplate(tpl) {
    showTemplatesModal.value = false;
    configForm.value = {
        id: null,
        name: tpl.title,
        trigger_event: tpl.eventClass,
        all_products: true,
        product_ids: [],
        is_active: true,
        graph_json: tpl.graph,
    };
    showFlowConfigModal.value = true;
}

// Predefined flow templates
const TEMPLATES = [
    {
        id: 'pix_recovery',
        title: 'Recuperação de PIX com Verificação',
        desc: 'Espera 15 min ➔ Verifica se foi pago ➔ Se não pago, envia o código PIX Copia e Cola.',
        icon: '⚡',
        badge: 'Mais Popular',
        eventClass: 'App\\Events\\PixGenerated',
        graph: {
            nodes: [
                { id: 'trigger', type: 'trigger', x: 60, y: 180, data: { event_class: 'App\\Events\\PixGenerated' } },
                { id: 'delay1', type: 'delay', x: 300, y: 180, data: { seconds: 900, delay_value: 15, delay_unit: 'minutes' } },
                { id: 'cond1', type: 'condition', x: 550, y: 180, data: { kind: 'order_is_paid' } },
                {
                    id: 'send_pix',
                    type: 'send_message',
                    x: 820,
                    y: 280,
                    data: {
                        mode: 'text',
                        text: 'Olá {{customer.first_name}}! ⏳\n\nNotamos que seu pedido de *{{order.product.name}}* ({{order.total_amount_formatted}}) ainda está aguardando pagamento.\n\nAqui está o seu código PIX Copia e Cola para pagar rapidamente:\n\n{{pix.copy_paste}}\n\nAssim que você pagar, seu acesso será liberado na mesma hora!',
                    },
                },
                { id: 'end_paid', type: 'end', x: 820, y: 100, data: {} },
                { id: 'end_done', type: 'end', x: 1100, y: 280, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay1' },
                { from: 'delay1', to: 'cond1' },
                { from: 'cond1', to: 'end_paid', data: { condition: 'true', branch: 'true' } },
                { from: 'cond1', to: 'send_pix', data: { condition: 'false', branch: 'false' } },
                { from: 'send_pix', to: 'end_done' },
            ],
        },
    },
    {
        id: 'access_delivery',
        title: 'Entrega Imediata de Acesso',
        desc: 'Venda aprovada ➔ Envia mensagem com Link, E-mail e Senha de Acesso no WhatsApp.',
        icon: '🔑',
        badge: 'Essencial',
        eventClass: 'App\\Events\\OrderCompleted',
        graph: {
            nodes: [
                { id: 'trigger', type: 'trigger', x: 80, y: 180, data: { event_class: 'App\\Events\\OrderCompleted' } },
                {
                    id: 'send_access',
                    type: 'send_message',
                    x: 360,
                    y: 180,
                    data: {
                        mode: 'text',
                        text: 'Parabéns {{customer.first_name}}! 🎉\n\nSeu pagamento para *{{order.product.name}}* foi aprovado com sucesso!\n\nDados para você acessar o conteúdo:\n🔗 Link: {{access.link}}\n👤 Login: {{access.email}}\n🔑 Senha: {{access.password}}\n\nBons estudos e conte com nossa equipe para qualquer dúvida!',
                    },
                },
                { id: 'end', type: 'end', x: 680, y: 180, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'send_access' },
                { from: 'send_access', to: 'end' },
            ],
        },
    },
    {
        id: 'boleto_recovery',
        title: 'Lembrete de Boleto Bancário',
        desc: 'Espera 24 horas ➔ Verifica se foi pago ➔ Se não pago, envia Linha Digitável e Link.',
        icon: '📄',
        badge: 'Conversão',
        eventClass: 'App\\Events\\BoletoGenerated',
        graph: {
            nodes: [
                { id: 'trigger', type: 'trigger', x: 60, y: 180, data: { event_class: 'App\\Events\\BoletoGenerated' } },
                { id: 'delay1', type: 'delay', x: 300, y: 180, data: { seconds: 86400, delay_value: 1, delay_unit: 'days' } },
                { id: 'cond1', type: 'condition', x: 550, y: 180, data: { kind: 'order_is_paid' } },
                {
                    id: 'send_boleto',
                    type: 'send_message',
                    x: 820,
                    y: 280,
                    data: {
                        mode: 'text',
                        text: 'Olá {{customer.first_name}}! 📄\n\nSeu boleto para o produto *{{order.product.name}}* vence em breve.\n\nLinha Digitável:\n{{boleto.barcode}}\n\nLink do Boleto PDF:\n{{boleto.pdf_url}}',
                    },
                },
                { id: 'end_paid', type: 'end', x: 820, y: 100, data: {} },
                { id: 'end_done', type: 'end', x: 1100, y: 280, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay1' },
                { from: 'delay1', to: 'cond1' },
                { from: 'cond1', to: 'end_paid', data: { condition: 'true', branch: 'true' } },
                { from: 'cond1', to: 'send_boleto', data: { condition: 'false', branch: 'false' } },
                { from: 'send_boleto', to: 'end_done' },
            ],
        },
    },
    {
        id: 'cart_recovery',
        title: 'Recuperação de Carrinho Abandonado',
        desc: 'Espera 30 min ➔ Envia mensagem amigável com link para retomar o checkout.',
        icon: '🛒',
        badge: 'Recuperação',
        eventClass: 'App\\Events\\CartAbandoned',
        graph: {
            nodes: [
                { id: 'trigger', type: 'trigger', x: 80, y: 180, data: { event_class: 'App\\Events\\CartAbandoned' } },
                { id: 'delay1', type: 'delay', x: 320, y: 180, data: { seconds: 1800, delay_value: 30, delay_unit: 'minutes' } },
                {
                    id: 'send_cart',
                    type: 'send_message',
                    x: 580,
                    y: 180,
                    data: {
                        mode: 'text',
                        text: 'Olá {{customer.first_name}}! Notamos que você teve interesse em nosso produto mas não concluiu a compra.\n\nPreparamos uma oportunidade especial para você finalizar:\n🔗 {{checkout_link}}\n\nPrecisa de alguma ajuda?',
                    },
                },
                { id: 'end', type: 'end', x: 880, y: 180, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay1' },
                { from: 'delay1', to: 'send_cart' },
                { from: 'send_cart', to: 'end' },
            ],
        },
    },
];

onMounted(() => {
    loadStatus();
    loadProducts();
    loadFlows();
});
</script>

<template>
    <div class="space-y-6 pb-12">
        <!-- Top Banner / Header -->
        <div class="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20 sm:p-8">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400">
                        <MessageSquare class="h-3.5 w-3.5" />
                        <span>Central de Automações WhatsApp</span>
                    </div>
                    <h1 class="mt-3 text-2xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                        AutoZap
                    </h1>
                    <p class="mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                        Crie fluxos inteligentes com delays, checagem de pagamento em tempo real, recuperação de PIX/Boleto e entrega de acessos com suporte a Evolution API, Z-API e MenuIA.
                    </p>
                </div>

                <!-- Connection status card & Quick actions -->
                <div class="flex flex-wrap items-center gap-3">
                    <!-- Connection Badge -->
                    <div
                        class="flex items-center gap-3 rounded-2xl border p-3 transition"
                        :class="
                            connected
                                ? 'border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30'
                                : 'border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30'
                        "
                    >
                        <div
                            class="flex h-3 w-3 rounded-full"
                            :class="connected ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-amber-500'"
                        ></div>
                        <div>
                            <div class="text-xs font-bold text-zinc-900 dark:text-white">
                                {{ connected ? 'WhatsApp Conectado' : 'WhatsApp Desconectado' }}
                            </div>
                            <div class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                {{ provider ? `Provedor: ${provider.toUpperCase()}` : 'Nenhuma API ativa' }}
                            </div>
                        </div>
                        <Button
                            type="button"
                            size="xs"
                            variant="outline"
                            class="ml-2 bg-white/80 dark:bg-zinc-900 text-xs font-bold"
                            @click="showConnectionModal = true"
                        >
                            {{ connected ? 'Ajustar' : 'Conectar' }}
                        </Button>
                    </div>

                    <!-- History / Logs Button -->
                    <Button
                        type="button"
                        variant="outline"
                        class="bg-white dark:bg-zinc-900 gap-2 text-xs font-bold"
                        @click="openRunsModal"
                    >
                        <History class="h-4 w-4 text-zinc-500" />
                        <span>Histórico de Envios</span>
                    </Button>

                    <!-- Create Flow Button -->
                    <Button
                        type="button"
                        class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 shadow-xs"
                        @click="openConfigModal()"
                    >
                        <Plus class="h-4 w-4" />
                        <span>Novo Fluxo</span>
                    </Button>
                </div>
            </div>
        </div>

        <!-- Flow Templates Section -->
        <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
            <div class="mb-4 flex items-center justify-between">
                <div>
                    <h2 class="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                        Modelos Prontos para Usar
                    </h2>
                    <p class="text-xs text-zinc-500 dark:text-zinc-400">
                        Clique em um modelo para iniciar com a estrutura pré-configurada.
                    </p>
                </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    v-for="tpl in TEMPLATES"
                    :key="tpl.id"
                    class="group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20"
                    @click="createFromTemplate(tpl)"
                >
                    <div>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl">{{ tpl.icon }}</span>
                            <span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                                {{ tpl.badge }}
                            </span>
                        </div>
                        <h3 class="mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                            {{ tpl.title }}
                        </h3>
                        <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                            {{ tpl.desc }}
                        </p>
                    </div>
                    <div class="mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        <span>Usar modelo</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Flows Management Table / List -->
        <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
            <!-- Filter Bar -->
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                <div class="flex flex-wrap items-center gap-2">
                    <div class="relative w-64">
                        <Search class="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Buscar fluxos..."
                            class="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pl-9 pr-3 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        />
                    </div>

                    <select
                        v-model="selectedEventFilter"
                        class="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    >
                        <option value="all">Todos os eventos</option>
                        <option v-for="ev in EVENTS" :key="ev.id" :value="ev.id">
                            {{ ev.icon }} {{ ev.label }}
                        </option>
                    </select>
                </div>

                <div class="text-xs text-zinc-500 dark:text-zinc-400">
                    {{ filteredFlows.length }} fluxo(s) cadastrado(s)
                </div>
            </div>

            <!-- Loading State -->
            <div v-if="flowsLoading" class="py-12 text-center text-sm text-zinc-400">
                <Loader2 class="inline h-5 w-5 animate-spin mr-2 text-emerald-500" />
                Carregando fluxos de automação…
            </div>

            <!-- Empty State -->
            <div v-else-if="filteredFlows.length === 0" class="py-16 text-center">
                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400 dark:bg-zinc-900">
                    <Bot class="h-7 w-7" />
                </div>
                <h3 class="mt-4 text-base font-bold text-zinc-900 dark:text-white">Nenhum fluxo encontrado</h3>
                <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                    {{ searchQuery ? 'Nenhum fluxo corresponde aos filtros aplicados.' : 'Comece criando uma automação para disparar mensagens no WhatsApp.' }}
                </p>
                <div class="mt-4">
                    <Button type="button" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold" @click="openConfigModal()">
                        <Plus class="h-4 w-4 mr-1.5" />
                        Criar Primeiro Fluxo
                    </Button>
                </div>
            </div>

            <!-- Flows Grid / Cards -->
            <div v-else class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="flow in filteredFlows"
                    :key="flow.id"
                    class="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                >
                    <div>
                        <!-- Header / Event tag & Status switch -->
                        <div class="flex items-center justify-between gap-2">
                            <span class="inline-flex items-center gap-1.5 rounded-lg bg-zinc-200/70 px-2.5 py-1 text-[11px] font-bold text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                                <span>{{ getEventMeta(flow.trigger_event).icon }}</span>
                                <span>{{ getEventMeta(flow.trigger_event).label }}</span>
                            </span>

                            <button
                                type="button"
                                class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                                :class="flow.is_active ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-700'"
                                :title="flow.is_active ? 'Automação Ativa' : 'Automação Pausada'"
                                @click.stop="toggleFlowActive(flow)"
                            >
                                <span
                                    class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                    :class="flow.is_active ? 'translate-x-4' : 'translate-x-0'"
                                />
                            </button>
                        </div>

                        <!-- Name -->
                        <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">
                            {{ flow.name }}
                        </h3>

                        <!-- Target Products Badge -->
                        <div class="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                            <Layers class="h-3.5 w-3.5 text-zinc-400" />
                            <span v-if="flow.all_products" class="font-medium text-emerald-600 dark:text-emerald-400">
                                Todos os produtos (Global)
                            </span>
                            <span v-else>
                                {{ flow.product_ids?.length || (flow.product_id ? 1 : 0) }} produto(s) vinculado(s)
                            </span>
                        </div>
                    </div>

                    <!-- Footer Actions -->
                    <div class="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 dark:border-zinc-800">
                        <div class="flex items-center gap-1">
                            <button
                                type="button"
                                class="rounded-lg p-1.5 text-zinc-500 transition hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                                title="Configurar Nome, Gatilho e Produtos"
                                @click.stop="openConfigModal(flow)"
                            >
                                <Settings class="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                class="rounded-lg p-1.5 text-zinc-500 transition hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                                title="Duplicar Fluxo"
                                @click.stop="duplicateFlow(flow)"
                            >
                                <Copy class="h-3.5 w-3.5" />
                            </button>
                            <button
                                type="button"
                                class="rounded-lg p-1.5 text-zinc-500 transition hover:bg-red-50 hover:text-red-600 dark:text-zinc-400 dark:hover:bg-red-950/40 dark:hover:text-red-400"
                                title="Excluir Fluxo"
                                @click.stop="deleteFlow(flow)"
                            >
                                <Trash2 class="h-3.5 w-3.5" />
                            </button>
                        </div>

                        <Button size="sm" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 text-xs shadow-2xs" @click="openEditor(flow)">
                            <Palette class="h-3.5 w-3.5" />
                            <span>Editar Fluxo</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal de Configurações do Fluxo (Nome, Gatilho, Produtos, Ativo) -->
        <div v-if="showFlowConfigModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div class="w-full max-w-xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                    <div>
                        <h3 class="text-base font-black text-zinc-900 dark:text-white">
                            {{ configForm.id ? 'Configurar Automação' : 'Criar Nova Automação' }}
                        </h3>
                        <p class="text-xs text-zinc-500 dark:text-zinc-400">
                            Defina o nome, evento gatilho e os produtos vinculados.
                        </p>
                    </div>
                    <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-600" @click="showFlowConfigModal = false">
                        <X class="h-4 w-4" />
                    </button>
                </div>

                <div v-if="configError" class="mt-3 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs font-semibold text-red-600 dark:text-red-400">
                    {{ configError }}
                </div>

                <div class="mt-4 space-y-4">
                    <!-- Nome do Fluxo -->
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                            Nome da Automação *
                        </label>
                        <input
                            v-model="configForm.name"
                            type="text"
                            placeholder="Ex: Recuperação de PIX 15 Minutos"
                            class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        />
                    </div>

                    <!-- Evento Gatilho -->
                    <div class="space-y-1">
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                            Evento Gatilho (Quando disparar) *
                        </label>
                        <select
                            v-model="configForm.trigger_event"
                            class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-semibold text-zinc-900 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        >
                            <option v-for="ev in EVENTS" :key="ev.id" :value="ev.id">
                                {{ ev.icon }} {{ ev.label }} ({{ ev.category }})
                            </option>
                        </select>
                    </div>

                    <!-- Produtos Vinculados (Lightweight Dropdown / Checkbox identical to Webhooks) -->
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                            <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                                Produtos Vinculados
                            </label>
                            <button
                                type="button"
                                class="text-xs font-bold text-emerald-600 hover:underline dark:text-emerald-400"
                                @click="configForm.all_products = !configForm.all_products"
                            >
                                {{ configForm.all_products ? 'Filtrar produtos específicos' : 'Mudar para todos os produtos' }}
                            </button>
                        </div>

                        <div v-if="configForm.all_products" class="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <span class="text-base">🌐</span>
                                <div>
                                    <div class="font-bold">Todos os produtos (Global)</div>
                                    <div class="text-[11px] opacity-80">Este fluxo será acionado para qualquer produto da sua conta.</div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="space-y-2 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div class="flex items-center justify-between gap-2 pb-1 border-b border-zinc-200/60 dark:border-zinc-800">
                                <div class="relative flex-1">
                                    <Search class="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                                    <input
                                        v-model="productSearch"
                                        type="text"
                                        placeholder="Filtrar produto..."
                                        class="w-full rounded-lg border border-zinc-200 bg-white py-1 pl-8 pr-2 text-xs dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
                                    />
                                </div>
                                <button
                                    type="button"
                                    class="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[11px] font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                    @click="selectAllProducts"
                                >
                                    Todos
                                </button>
                                <button
                                    type="button"
                                    class="rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[11px] font-semibold text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                                    @click="clearAllProducts"
                                >
                                    Limpar
                                </button>
                            </div>

                            <div class="max-h-40 space-y-1.5 overflow-y-auto pr-1">
                                <div v-if="loadingProducts" class="py-3 text-center text-xs text-zinc-400">
                                    <Loader2 class="inline h-3.5 w-3.5 animate-spin mr-1.5" />
                                    Carregando catálogo...
                                </div>
                                <div v-else-if="availableProducts.length === 0" class="py-3 text-center text-xs text-zinc-500">
                                    Nenhum produto cadastrado.
                                </div>
                                <div v-else-if="filteredProducts.length === 0" class="py-3 text-center text-xs text-zinc-400">
                                    Nenhum produto encontrado com o termo "{{ productSearch }}".
                                </div>
                                <template v-else>
                                    <Checkbox
                                        v-for="p in filteredProducts"
                                        :key="p.id"
                                        :model-value="configForm.product_ids.includes(String(p.id))"
                                        :label="p.name"
                                        class="block py-1 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 rounded-lg px-2 transition"
                                        @update:model-value="toggleProductSelection(p.id)"
                                    />
                                </template>
                            </div>
                        </div>
                    </div>

                    <!-- Status Ativo Switch -->
                    <div class="flex items-center justify-between rounded-xl border border-zinc-200 p-3 dark:border-zinc-800">
                        <div>
                            <div class="text-xs font-bold text-zinc-800 dark:text-zinc-200">Automação Ativa</div>
                            <div class="text-[11px] text-zinc-400">Desative temporariamente para pausar os envios.</div>
                        </div>
                        <input
                            v-model="configForm.is_active"
                            type="checkbox"
                            class="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500"
                        />
                    </div>
                </div>

                <!-- Modal Footer -->
                <div class="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    <Button type="button" variant="outline" size="sm" @click="showFlowConfigModal = false">
                        Cancelar
                    </Button>
                    <div class="flex items-center gap-2">
                        <Button
                            type="button"
                            size="sm"
                            variant="secondary"
                            :disabled="configSaving"
                            @click="saveFlowConfig(false)"
                        >
                            <Loader2 v-if="configSaving" class="h-4 w-4 animate-spin mr-1.5" />
                            <span>{{ configSaving ? 'Salvando...' : 'Salvar Configurações' }}</span>
                        </Button>
                        <Button
                            type="button"
                            size="sm"
                            class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 shadow-2xs"
                            :disabled="configSaving"
                            @click="saveFlowConfig(true)"
                        >
                            <Loader2 v-if="configSaving" class="h-4 w-4 animate-spin" />
                            <Palette v-else class="h-3.5 w-3.5" />
                            <span>{{ configSaving ? 'Salvando...' : 'Salvar e Abrir Editor Visual' }}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fullscreen Floating Visual Canvas Editor Modal Component -->
        <FlowCanvasEditor
            v-if="editorOpen && editorFlow"
            :flow="editorFlow"
            :saving="editorSaving"
            @save="handleSaveFlow"
            @close="editorOpen = false"
        />

        <!-- Connection Settings Drawer -->
        <IntegrationsSidebar
            v-if="showConnectionModal"
            :open="showConnectionModal"
            @close="showConnectionModal = false"
            @saved="() => { showConnectionModal = false; loadStatus(); }"
        />

        <!-- Runs History Modal -->
        <div v-if="showRunsModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div class="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 max-h-[85vh] overflow-y-auto">
                <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                    <div>
                        <h3 class="text-base font-black text-zinc-900 dark:text-white">Histórico de Execuções (AutoZap)</h3>
                        <p class="text-xs text-zinc-500 dark:text-zinc-400">Últimos disparos de mensagens automáticas no WhatsApp.</p>
                    </div>
                    <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-600" @click="showRunsModal = false">
                        <X class="h-4 w-4" />
                    </button>
                </div>

                <div v-if="runsLoading" class="py-12 text-center text-xs text-zinc-400">
                    <Loader2 class="inline h-4 w-4 animate-spin mr-1.5" /> Carregando histórico…
                </div>
                <div v-else-if="runs.length === 0" class="py-12 text-center text-xs text-zinc-500">
                    Nenhum disparo registrado ainda.
                </div>
                <div v-else class="mt-4 space-y-2">
                    <div
                        v-for="r in runs"
                        :key="r.id"
                        class="flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
                    >
                        <div class="flex items-center gap-3">
                            <span
                                class="h-2 w-2 rounded-full"
                                :class="r.status === 'completed' ? 'bg-emerald-500' : r.status === 'failed' ? 'bg-rose-500' : 'bg-amber-500'"
                            ></span>
                            <div>
                                <div class="font-bold text-zinc-900 dark:text-white">
                                    {{ r.flow_name || 'Fluxo de Automação' }}
                                </div>
                                <div class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                    {{ r.event_class ? getEventMeta(r.event_class).label : 'Evento' }} • {{ r.created_at || 'Agora' }}
                                </div>
                            </div>
                        </div>
                        <span
                            class="rounded-full px-2.5 py-0.5 text-[10px] font-bold"
                            :class="
                                r.status === 'completed'
                                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                    : r.status === 'failed'
                                    ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                            "
                        >
                            {{ r.status === 'completed' ? 'Sucesso' : r.status === 'failed' ? 'Falha' : 'Em andamento' }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
