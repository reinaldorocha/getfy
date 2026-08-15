<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import LayoutInfoprodutor from '@/Layouts/LayoutInfoprodutor.vue';
import Button from '@/components/ui/Button.vue';
import Checkbox from '@/components/ui/Checkbox.vue';
import FlowCanvasEditor from './FlowCanvasEditor.vue';
import IntegrationsSidebar from './IntegrationsSidebar.vue';
import CampaignWizardModal from './Components/CampaignWizardModal.vue';
import CampaignDetailDrawer from './Components/CampaignDetailDrawer.vue';
import ImportContactsModal from './Components/ImportContactsModal.vue';
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
    Send,
    Users,
    UploadCloud,
    UserCheck,
    FileSpreadsheet,
    Eye,
    ChevronRight,
    Ban,
    Radio,
} from 'lucide-vue-next';

defineOptions({ layout: LayoutInfoprodutor });

// Navigation Tabs: 'flows' | 'campaigns' | 'contacts' | 'connection'
const activeMainTab = ref('flows');

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

// Flow Config Modal State
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

// ==========================================
// CAMPANHAS STATE
// ==========================================
const campaigns = ref([]);
const campaignsLoading = ref(false);
const campaignSearch = ref('');
const campaignStatusFilter = ref('all');
const showCampaignWizard = ref(false);
const showCampaignDrawer = ref(false);
const selectedCampaignId = ref(null);
const preselectedContactKeys = ref([]);

// ==========================================
// BASE DE CONTATOS STATE
// ==========================================
const contactsList = ref([]);
const contactsLoading = ref(false);
const contactsSearch = ref('');
const contactsOrigin = ref('all');
const contactsProductFilter = ref([]);
const selectedContactKeys = ref([]);
const showImportModal = ref(false);
const contactCounts = ref({ all: 0, buyers: 0, imported: 0 });

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

const filteredCampaigns = computed(() => {
    return (campaigns.value || []).filter((c) => {
        if (campaignStatusFilter.value !== 'all' && c.status !== campaignStatusFilter.value) {
            return false;
        }
        if (campaignSearch.value.trim()) {
            const q = campaignSearch.value.toLowerCase();
            return (c.name || '').toLowerCase().includes(q);
        }
        return true;
    });
});

// Carregar Status da Conexão
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

// Carregar Produtos
async function loadProducts() {
    loadingProducts.value = true;
    try {
        const { data } = await axios.get('/autozap/products');
        availableProducts.value = data?.products || [];
    } catch (e) {
        console.error('Falha ao carregar produtos:', e);
    } finally {
        loadingProducts.value = false;
    }
}

// Carregar Fluxos
async function loadFlows() {
    flowsLoading.value = true;
    flowsError.value = '';
    try {
        const { data } = await axios.get('/autozap/flows');
        flows.value = data?.flows || [];
    } catch (e) {
        flowsError.value = e.response?.data?.message || 'Falha ao carregar fluxos de automação.';
    } finally {
        flowsLoading.value = false;
    }
}

// Carregar Execuções
async function loadRuns() {
    runsLoading.value = true;
    try {
        const { data } = await axios.get('/autozap/runs');
        runs.value = data?.runs || [];
    } catch (e) {
        console.error('Falha ao carregar execuções:', e);
    } finally {
        runsLoading.value = false;
    }
}

// Carregar Campanhas
async function loadCampaigns() {
    campaignsLoading.value = true;
    try {
        const { data } = await axios.get('/autozap/campaigns');
        campaigns.value = data?.campaigns?.data || data?.campaigns || [];
    } catch (e) {
        console.error('Erro ao carregar campanhas:', e);
    } finally {
        campaignsLoading.value = false;
    }
}

// Carregar Contatos Unificados
async function loadContactsList() {
    contactsLoading.value = true;
    try {
        const { data } = await axios.get('/autozap/contacts', {
            params: {
                search: contactsSearch.value || undefined,
                origin: contactsOrigin.value || undefined,
                product_ids: contactsProductFilter.value.length ? contactsProductFilter.value : undefined,
            },
        });

        if (data?.success) {
            contactsList.value = data.data || [];
            contactCounts.value = data.counts || { all: 0, buyers: 0, imported: 0 };
        }
    } catch (e) {
        console.error('Erro ao carregar contatos unificados:', e);
    } finally {
        contactsLoading.value = false;
    }
}

// Deletar contato importado
async function deleteContact(contact) {
    if (!contact.imported_contact_id) return;
    if (!confirm(`Deseja remover o contato importado "${contact.name}"?`)) return;

    try {
        await axios.delete(`/autozap/contacts/${contact.imported_contact_id}`);
        await loadContactsList();
    } catch (e) {
        alert('Erro ao excluir: ' + (e.response?.data?.message || e.message));
    }
}

// Seleção de contatos na base
function toggleSelectContact(key) {
    const idx = selectedContactKeys.value.indexOf(key);
    if (idx > -1) {
        selectedContactKeys.value.splice(idx, 1);
    } else {
        selectedContactKeys.value.push(key);
    }
}

function selectAllFilteredContacts() {
    selectedContactKeys.value = contactsList.value.map((c) => c.key);
}

function deselectAllFilteredContacts() {
    selectedContactKeys.value = [];
}

function startCampaignWithSelected() {
    preselectedContactKeys.value = [...selectedContactKeys.value];
    showCampaignWizard.value = true;
}

function openCampaignDetails(campaign) {
    selectedCampaignId.value = campaign.id;
    showCampaignDrawer.value = true;
}

// Flow Actions
function openConfigModal(flow = null) {
    configError.value = '';
    if (flow) {
        configForm.value = {
            id: flow.id,
            name: flow.name,
            trigger_event: flow.trigger_event,
            all_products: flow.all_products ?? true,
            product_ids: Array.isArray(flow.product_ids) ? flow.product_ids.map(String) : [],
            is_active: !!flow.is_active,
            graph_json: flow.graph_json,
        };
    } else {
        configForm.value = {
            id: null,
            name: '',
            trigger_event: 'App\\Events\\PixGenerated',
            all_products: true,
            product_ids: [],
            is_active: true,
            graph_json: null,
        };
    }
    showFlowConfigModal.value = true;
}

async function saveFlowConfig(andOpenVisualEditor = false) {
    if (!configForm.value.name.trim()) {
        configError.value = 'O nome do fluxo é obrigatório.';
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
                    { id: 'trigger', type: 'trigger', x: 80, y: 200, data: { event_class: configForm.value.trigger_event } },
                    { id: 'msg', type: 'send_message', x: 380, y: 200, data: { mode: 'text', text: 'Olá {{customer.first_name}}!' } },
                    { id: 'end', type: 'end', x: 680, y: 200, data: {} },
                ],
                edges: [
                    { from: 'trigger', to: 'msg' },
                    { from: 'msg', to: 'end' },
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

function openEditor(flow) {
    editorFlow.value = flow;
    editorError.value = '';
    editorOpen.value = true;
}

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

async function toggleFlowActive(flow) {
    const prev = flow.is_active;
    flow.is_active = !flow.is_active;
    try {
        await axios.put(`/autozap/flows/${flow.id}`, {
            is_active: flow.is_active,
        });
    } catch (e) {
        flow.is_active = prev;
        alert(e.response?.data?.message || 'Falha ao alterar status do fluxo.');
    }
}

async function duplicateFlow(flow) {
    try {
        await axios.post(`/autozap/flows/${flow.id}/duplicate`);
        await loadFlows();
    } catch (e) {
        alert(e.response?.data?.message || 'Falha ao duplicar fluxo.');
    }
}

async function deleteFlow(flow) {
    if (!confirm(`Tem certeza que deseja excluir o fluxo "${flow.name}"?`)) return;
    try {
        await axios.delete(`/autozap/flows/${flow.id}`);
        await loadFlows();
    } catch (e) {
        alert(e.response?.data?.message || 'Falha ao excluir fluxo.');
    }
}

function openRunsModal() {
    loadRuns();
    showRunsModal.value = true;
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
                { id: 'send_done', type: 'end', x: 1100, y: 280, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay1' },
                { from: 'delay1', to: 'cond1' },
                { from: 'cond1', to: 'end_paid', data: { condition: 'true', branch: 'true' } },
                { from: 'cond1', to: 'send_boleto', data: { condition: 'false', branch: 'false' } },
                { from: 'send_boleto', to: 'send_done' },
            ],
        },
    },
    {
        id: 'cart_recovery',
        title: 'Recuperação de Carrinho Abandonado',
        desc: 'Espera 30 min ➔ Envia mensagem com link direto de retorno ao checkout.',
        icon: '🛒',
        badge: 'Recuperação',
        eventClass: 'App\\Events\\CartAbandoned',
        graph: {
            nodes: [
                { id: 'trigger', type: 'trigger', x: 60, y: 180, data: { event_class: 'App\\Events\\CartAbandoned' } },
                { id: 'delay1', type: 'delay', x: 300, y: 180, data: { seconds: 1800, delay_value: 30, delay_unit: 'minutes' } },
                { id: 'cond1', type: 'condition', x: 550, y: 180, data: { kind: 'order_is_paid' } },
                {
                    id: 'send_cart',
                    type: 'send_message',
                    x: 820,
                    y: 280,
                    data: {
                        mode: 'text',
                        text: 'Oi {{customer.first_name}}! Notamos que você não finalizou sua inscrição em *{{order.product.name}}*.\n\nSeu pedido foi reservado! Clique aqui para concluir agora com segurança:\n👉 {{checkout.url}}\n\nRestam poucas vagas disponíveis!',
                    },
                },
                { id: 'end_paid', type: 'end', x: 820, y: 100, data: {} },
                { id: 'end_done', type: 'end', x: 1100, y: 280, data: {} },
            ],
            edges: [
                { from: 'trigger', to: 'delay1' },
                { from: 'delay1', to: 'cond1' },
                { from: 'cond1', to: 'end_paid', data: { condition: 'true', branch: 'true' } },
                { from: 'cond1', to: 'send_cart', data: { condition: 'false', branch: 'false' } },
                { from: 'send_cart', to: 'end_done' },
            ],
        },
    },
];

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

function getCampaignStatusBadge(status) {
    switch (status) {
        case 'completed':
            return { label: 'Concluída', class: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20', icon: CheckCircle2 };
        case 'processing':
            return { label: 'Em execução', class: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20', icon: Loader2, spin: true };
        case 'scheduled':
            return { label: 'Agendada', class: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20', icon: Clock };
        case 'cancelled':
            return { label: 'Cancelada', class: 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700', icon: Ban };
        default:
            return { label: status, class: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700', icon: Clock };
    }
}

// Watch tab change to lazy-load corresponding data
watch(activeMainTab, (newTab) => {
    if (newTab === 'campaigns' && !campaigns.value.length) {
        loadCampaigns();
    } else if (newTab === 'contacts' && !contactsList.value.length) {
        loadContactsList();
    }
});

onMounted(async () => {
    loading.value = true;
    await Promise.all([loadStatus(), loadFlows(), loadProducts()]);
    loading.value = false;
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
                        <span>Central de WhatsApp & Automações</span>
                    </div>
                    <h1 class="mt-3 text-2xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                        AutoZap
                    </h1>
                    <p class="mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                        Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de contatos em tempo real.
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
                        <span>Logs de Envios</span>
                    </Button>
                </div>
            </div>

            <!-- Main Tab Bar Navigation -->
            <div class="mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
                <button
                    type="button"
                    @click="activeMainTab = 'flows'"
                    :class="[
                        'flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition',
                        activeMainTab === 'flows'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60'
                    ]"
                >
                    <Zap class="h-4 w-4" />
                    <span>Fluxos Automáticos</span>
                    <span class="rounded-full bg-black/10 dark:bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                        {{ flows.length }}
                    </span>
                </button>

                <button
                    type="button"
                    @click="activeMainTab = 'campaigns'"
                    :class="[
                        'flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition',
                        activeMainTab === 'campaigns'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60'
                    ]"
                >
                    <Send class="h-4 w-4" />
                    <span>Campanhas WhatsApp</span>
                    <span class="rounded-full bg-black/10 dark:bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                        {{ campaigns.length }}
                    </span>
                </button>

                <button
                    type="button"
                    @click="activeMainTab = 'contacts'"
                    :class="[
                        'flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition',
                        activeMainTab === 'contacts'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60'
                    ]"
                >
                    <Users class="h-4 w-4" />
                    <span>Base de Contatos</span>
                    <span v-if="contactCounts.all > 0" class="rounded-full bg-black/10 dark:bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                        {{ contactCounts.all }}
                    </span>
                </button>
            </div>
        </div>

        <!-- ========================================================================= -->
        <!-- TAB 1: FLUXOS AUTOMÁTICOS (VISUAL FLOW CANVAS & LIST)                     -->
        <!-- ========================================================================= -->
        <div v-if="activeMainTab === 'flows'" class="space-y-6">
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

                    <div class="flex items-center gap-3">
                        <span class="text-xs text-zinc-500 dark:text-zinc-400">
                            {{ filteredFlows.length }} fluxo(s) cadastrado(s)
                        </span>
                        <Button
                            type="button"
                            size="sm"
                            class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 shadow-xs"
                            @click="openConfigModal()"
                        >
                            <Plus class="h-4 w-4" />
                            <span>Novo Fluxo</span>
                        </Button>
                    </div>
                </div>

                <!-- Loading State -->
                <div v-if="flowsLoading" class="py-16 text-center text-zinc-400">
                    <Loader2 class="inline h-6 w-6 animate-spin text-emerald-500 mb-2" />
                    <p class="text-xs font-medium">Carregando fluxos de automação...</p>
                </div>

                <!-- Empty State -->
                <div v-else-if="filteredFlows.length === 0" class="py-16 text-center">
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400">
                        <Zap class="h-6 w-6" />
                    </div>
                    <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">Nenhum fluxo encontrado</h3>
                    <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto.
                    </p>
                    <div class="mt-4">
                        <Button type="button" size="sm" class="bg-emerald-600 hover:bg-emerald-700 text-white" @click="openConfigModal()">
                            <Plus class="h-4 w-4 mr-1.5" />
                            Criar Primeiro Fluxo
                        </Button>
                    </div>
                </div>

                <!-- Flows Grid / List -->
                <div v-else class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div
                        v-for="flow in filteredFlows"
                        :key="flow.id"
                        class="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                    >
                        <div>
                            <!-- Header / Trigger info -->
                            <div class="flex items-start justify-between gap-2">
                                <div class="flex items-center gap-2">
                                    <span class="text-lg">{{ getEventMeta(flow.trigger_event).icon }}</span>
                                    <div>
                                        <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                            {{ getEventMeta(flow.trigger_event).label }}
                                        </span>
                                        <h3 class="text-sm font-black text-zinc-900 dark:text-white line-clamp-1">
                                            {{ flow.name }}
                                        </h3>
                                    </div>
                                </div>

                                <!-- Status Toggle -->
                                <button
                                    type="button"
                                    class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                                    :class="flow.is_active ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-700'"
                                    @click.stop="toggleFlowActive(flow)"
                                    :title="flow.is_active ? 'Ativo - Clique para desativar' : 'Pausado - Clique para ativar'"
                                >
                                    <span
                                        class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                        :class="flow.is_active ? 'translate-x-4' : 'translate-x-0'"
                                    />
                                </button>
                            </div>

                            <!-- Products scope badge -->
                            <div class="mt-3 flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                                <span class="rounded-md bg-zinc-200/60 px-2 py-0.5 text-[10px] font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                    {{ flow.all_products ? 'Todos os Produtos' : `${flow.product_ids?.length || 0} produto(s)` }}
                                </span>
                            </div>
                        </div>

                        <!-- Actions footer -->
                        <div class="mt-4 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800/80">
                            <div class="flex items-center gap-1">
                                <button
                                    type="button"
                                    class="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                                    title="Configurar Detalhes e Produtos"
                                    @click="openConfigModal(flow)"
                                >
                                    <Settings class="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    class="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                                    title="Duplicar Fluxo"
                                    @click="duplicateFlow(flow)"
                                >
                                    <Copy class="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    class="rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600"
                                    title="Excluir Fluxo"
                                    @click="deleteFlow(flow)"
                                >
                                    <Trash2 class="h-4 w-4" />
                                </button>
                            </div>

                            <Button
                                type="button"
                                size="xs"
                                class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5"
                                @click="openEditor(flow)"
                            >
                                <Palette class="h-3.5 w-3.5" />
                                <span>Editar Visual</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ========================================================================= -->
        <!-- TAB 2: CAMPANHAS DE WHATSAPP (BROADCAST & MASS DISPATCH)                   -->
        <!-- ========================================================================= -->
        <div v-else-if="activeMainTab === 'campaigns'" class="space-y-6">
            <!-- Stats Cards Header -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <div class="rounded-2xl border border-zinc-200 bg-white p-4 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
                    <span class="text-xs text-zinc-500 dark:text-zinc-400">Total de Campanhas</span>
                    <p class="text-2xl font-black text-zinc-900 dark:text-white mt-1">{{ campaigns.length }}</p>
                </div>
                <div class="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 shadow-xs dark:bg-emerald-950/20">
                    <span class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Total Enviados</span>
                    <p class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                        {{ campaigns.reduce((acc, c) => acc + (c.sent_count || 0), 0) }}
                    </p>
                </div>
                <div class="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 shadow-xs dark:bg-blue-950/20">
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-400">Em Fila / Pendentes</span>
                    <p class="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
                        {{ campaigns.reduce((acc, c) => acc + (c.pending_count || 0), 0) }}
                    </p>
                </div>
                <div class="rounded-2xl border border-red-500/20 bg-red-500/5 p-4 shadow-xs dark:bg-red-950/20">
                    <span class="text-xs font-semibold text-red-700 dark:text-red-400">Total Falhas</span>
                    <p class="text-2xl font-black text-red-600 dark:text-red-400 mt-1">
                        {{ campaigns.reduce((acc, c) => acc + (c.error_count || 0), 0) }}
                    </p>
                </div>
            </div>

            <!-- Campaigns Table -->
            <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div class="flex flex-wrap items-center gap-2">
                        <div class="relative w-64">
                            <Search class="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                            <input
                                v-model="campaignSearch"
                                type="text"
                                placeholder="Buscar campanhas..."
                                class="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pl-9 pr-3 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                            />
                        </div>

                        <select
                            v-model="campaignStatusFilter"
                            class="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        >
                            <option value="all">Todos os status</option>
                            <option value="processing">Em execução</option>
                            <option value="completed">Concluídas</option>
                            <option value="cancelled">Canceladas</option>
                        </select>
                    </div>

                    <div class="flex items-center gap-3">
                        <Button
                            type="button"
                            size="sm"
                            class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 shadow-xs"
                            @click="showCampaignWizard = true; preselectedContactKeys = [];"
                        >
                            <Plus class="h-4 w-4" />
                            <span>Nova Campanha</span>
                        </Button>
                    </div>
                </div>

                <!-- Loading -->
                <div v-if="campaignsLoading" class="py-16 text-center text-zinc-400">
                    <Loader2 class="inline h-6 w-6 animate-spin text-emerald-500 mb-2" />
                    <p class="text-xs font-medium">Carregando histórico de campanhas...</p>
                </div>

                <!-- Empty State -->
                <div v-else-if="filteredCampaigns.length === 0" class="py-16 text-center">
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400">
                        <Send class="h-6 w-6" />
                    </div>
                    <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">Nenhuma campanha registrada</h3>
                    <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        Dispare mensagens em massa segmentadas por produtos e base de contatos.
                    </p>
                    <div class="mt-4">
                        <Button type="button" size="sm" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold" @click="showCampaignWizard = true">
                            <Plus class="h-4 w-4 mr-1.5" />
                            Criar Primeira Campanha
                        </Button>
                    </div>
                </div>

                <!-- Table of Campaigns -->
                <div v-else class="mt-4 overflow-x-auto">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-zinc-50 dark:bg-zinc-900/60 text-zinc-500 dark:text-zinc-400 font-semibold border-b border-zinc-100 dark:border-zinc-800">
                            <tr>
                                <th class="px-4 py-3">Campanha</th>
                                <th class="px-4 py-3">Instância WhatsApp</th>
                                <th class="px-4 py-3">Destinatários</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3">Data</th>
                                <th class="px-4 py-3 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                            <tr
                                v-for="c in filteredCampaigns"
                                :key="c.id"
                                class="hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 transition cursor-pointer"
                                @click="openCampaignDetails(c)"
                            >
                                <td class="px-4 py-3.5">
                                    <div class="font-bold text-zinc-900 dark:text-white text-sm">{{ c.name }}</div>
                                    <div class="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 max-w-sm mt-0.5">
                                        {{ c.message }}
                                    </div>
                                </td>
                                <td class="px-4 py-3.5">
                                    <span class="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                        {{ c.connection?.name || c.connection?.driver || 'WhatsApp' }}
                                    </span>
                                </td>
                                <td class="px-4 py-3.5">
                                    <div class="font-semibold text-zinc-900 dark:text-white">
                                        {{ c.total_recipients }} contatos
                                    </div>
                                    <div class="text-[11px] text-zinc-500 flex items-center gap-2 mt-0.5">
                                        <span class="text-emerald-500">✓ {{ c.sent_count }}</span>
                                        <span v-if="c.pending_count > 0" class="text-blue-500">⏳ {{ c.pending_count }}</span>
                                        <span v-if="c.error_count > 0" class="text-red-500">✗ {{ c.error_count }}</span>
                                    </div>
                                </td>
                                <td class="px-4 py-3.5">
                                    <span
                                        :class="['px-2.5 py-0.5 rounded-full text-[10px] font-bold border inline-flex items-center gap-1.5', getCampaignStatusBadge(c.status).class]"
                                    >
                                        <component :is="getCampaignStatusBadge(c.status).icon" :class="['w-3 h-3', getCampaignStatusBadge(c.status).spin ? 'animate-spin' : '']" />
                                        {{ getCampaignStatusBadge(c.status).label }}
                                    </span>
                                </td>
                                <td class="px-4 py-3.5 text-zinc-500 dark:text-zinc-400">
                                    {{ c.created_at ? new Date(c.created_at).toLocaleDateString('pt-BR') : '-' }}
                                </td>
                                <td class="px-4 py-3.5 text-right" @click.stop>
                                    <Button
                                        size="xs"
                                        variant="outline"
                                        class="text-xs font-bold gap-1"
                                        @click="openCampaignDetails(c)"
                                    >
                                        <Eye class="w-3.5 h-3.5" />
                                        <span>Detalhes</span>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- ========================================================================= -->
        <!-- TAB 3: BASE DE CONTATOS UNIFICADA                                         -->
        <!-- ========================================================================= -->
        <div v-else-if="activeMainTab === 'contacts'" class="space-y-6">
            <!-- Stats Cards Header -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="rounded-2xl border border-zinc-200 bg-white p-4 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
                    <span class="text-xs text-zinc-500 dark:text-zinc-400">Total de Contatos na Base</span>
                    <p class="text-2xl font-black text-zinc-900 dark:text-white mt-1">{{ contactCounts.all }}</p>
                    <p class="text-[11px] text-zinc-400 mt-0.5">Leads e clientes cadastrados</p>
                </div>
                <div class="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 shadow-xs dark:bg-emerald-950/20">
                    <span class="text-xs font-semibold text-emerald-700 dark:text-emerald-400">👤 Compradores do Checkout</span>
                    <p class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{{ contactCounts.buyers }}</p>
                    <p class="text-[11px] text-emerald-600/70 dark:text-emerald-400/70 mt-0.5">Extraídos em tempo real das vendas</p>
                </div>
                <div class="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 shadow-xs dark:bg-blue-950/20">
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-400">📥 Contatos Importados (CSV)</span>
                    <p class="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">{{ contactCounts.imported }}</p>
                    <p class="text-[11px] text-blue-600/70 dark:text-blue-400/70 mt-0.5">Listas externas e planilhas</p>
                </div>
            </div>

            <!-- Contacts Management Table -->
            <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
                <!-- Filter Bar -->
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                    <div class="flex flex-wrap items-center gap-2">
                        <div class="relative w-64">
                            <Search class="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                            <input
                                v-model="contactsSearch"
                                @input="loadContactsList"
                                type="text"
                                placeholder="Buscar por nome, telefone, email..."
                                class="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pl-9 pr-3 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                            />
                        </div>

                        <select
                            v-model="contactsOrigin"
                            @change="loadContactsList"
                            class="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        >
                            <option value="all">Todas as Origens</option>
                            <option value="buyers">Apenas Compradores</option>
                            <option value="imported">Apenas Importados</option>
                        </select>
                    </div>

                    <div class="flex items-center gap-2">
                        <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            class="text-xs font-bold gap-1.5"
                            @click="showImportModal = true"
                        >
                            <UploadCloud class="h-4 w-4" />
                            <span>Importar CSV</span>
                        </Button>
                        <Button
                            type="button"
                            size="sm"
                            :disabled="selectedContactKeys.length === 0"
                            class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 shadow-xs"
                            @click="startCampaignWithSelected"
                        >
                            <Send class="h-4 w-4" />
                            <span>Criar Campanha ({{ selectedContactKeys.length }})</span>
                        </Button>
                    </div>
                </div>

                <!-- Selection summary bar -->
                <div v-if="contactsList.length > 0" class="py-2.5 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/80">
                    <div class="flex items-center gap-3">
                        <button type="button" @click="selectAllFilteredContacts" class="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                            Selecionar Todos ({{ contactsList.length }})
                        </button>
                        <span>•</span>
                        <button type="button" @click="deselectAllFilteredContacts" class="text-zinc-500 hover:underline">
                            Desmarcar Todos
                        </button>
                    </div>
                    <div>
                        <strong class="text-zinc-900 dark:text-white">{{ selectedContactKeys.length }}</strong> contato(s) selecionado(s)
                    </div>
                </div>

                <!-- Loading State -->
                <div v-if="contactsLoading" class="py-16 text-center text-zinc-400">
                    <Loader2 class="inline h-6 w-6 animate-spin text-emerald-500 mb-2" />
                    <p class="text-xs font-medium">Carregando contatos...</p>
                </div>

                <!-- Empty State -->
                <div v-else-if="contactsList.length === 0" class="py-16 text-center">
                    <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-400">
                        <Users class="h-6 w-6" />
                    </div>
                    <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">Nenhum contato encontrado</h3>
                    <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        Os compradores das suas vendas aparecerão aqui automaticamente, ou você pode importar um CSV.
                    </p>
                    <div class="mt-4">
                        <Button type="button" size="sm" variant="outline" class="font-bold" @click="showImportModal = true">
                            <UploadCloud class="h-4 w-4 mr-1.5" />
                            Importar Planilha CSV
                        </Button>
                    </div>
                </div>

                <!-- Contacts Table -->
                <div v-else class="mt-2 overflow-x-auto">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-zinc-50 dark:bg-zinc-900/60 text-zinc-500 dark:text-zinc-400 font-semibold border-b border-zinc-100 dark:border-zinc-800">
                            <tr>
                                <th class="w-10 px-4 py-3 text-center">
                                    <input
                                        type="checkbox"
                                        :checked="selectedContactKeys.length === contactsList.length && contactsList.length > 0"
                                        @change="selectedContactKeys.length === contactsList.length ? deselectAllFilteredContacts() : selectAllFilteredContacts()"
                                        class="rounded border-zinc-300 dark:border-zinc-700 text-emerald-600 focus:ring-0"
                                    />
                                </th>
                                <th class="px-4 py-3">Contato</th>
                                <th class="px-4 py-3">Telefone</th>
                                <th class="px-4 py-3">Origem</th>
                                <th class="px-4 py-3">Produtos Adquiridos</th>
                                <th class="px-4 py-3 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                            <tr
                                v-for="contact in contactsList"
                                :key="contact.key"
                                @click="toggleSelectContact(contact.key)"
                                :class="[
                                    'cursor-pointer transition',
                                    selectedContactKeys.includes(contact.key) ? 'bg-emerald-500/5 dark:bg-emerald-950/20' : 'hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40'
                                ]"
                            >
                                <td class="w-10 px-4 py-3.5 text-center" @click.stop>
                                    <input
                                        type="checkbox"
                                        :value="contact.key"
                                        v-model="selectedContactKeys"
                                        class="rounded border-zinc-300 dark:border-zinc-700 text-emerald-600 focus:ring-0"
                                    />
                                </td>
                                <td class="px-4 py-3.5">
                                    <div class="font-bold text-zinc-900 dark:text-white">{{ contact.name }}</div>
                                    <div class="text-[11px] text-zinc-500 dark:text-zinc-400">{{ contact.email || '-' }}</div>
                                </td>
                                <td class="px-4 py-3.5 font-mono text-zinc-800 dark:text-zinc-200">
                                    {{ contact.phone }}
                                </td>
                                <td class="px-4 py-3.5">
                                    <span
                                        :class="[
                                            'px-2.5 py-0.5 rounded-full text-[10px] font-bold border inline-flex items-center gap-1',
                                            contact.origin === 'Comprador'
                                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                                                : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                                        ]"
                                    >
                                        {{ contact.origin }}
                                    </span>
                                </td>
                                <td class="px-4 py-3.5">
                                    <div class="flex flex-wrap gap-1 max-w-sm">
                                        <span
                                            v-for="p in (contact.products || []).slice(0, 3)"
                                            :key="p.name"
                                            class="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-700 dark:text-zinc-300 truncate max-w-[140px]"
                                            :title="p.name"
                                        >
                                            {{ p.name }}
                                        </span>
                                        <span
                                            v-if="(contact.products || []).length > 3"
                                            class="rounded-md bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-bold text-zinc-500"
                                        >
                                            +{{ contact.products.length - 3 }}
                                        </span>
                                    </div>
                                </td>
                                <td class="px-4 py-3.5 text-right" @click.stop>
                                    <button
                                        v-if="contact.imported_contact_id"
                                        type="button"
                                        class="rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600 transition"
                                        title="Remover Contato Importado"
                                        @click="deleteContact(contact)"
                                    >
                                        <Trash2 class="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- ========================================================================= -->
        <!-- MODALS & DRAWERS                                                          -->
        <!-- ========================================================================= -->

        <!-- Campaign Wizard Modal -->
        <CampaignWizardModal
            v-if="showCampaignWizard"
            :open="showCampaignWizard"
            :initial-selected-keys="preselectedContactKeys"
            :available-products="availableProducts"
            @close="showCampaignWizard = false"
            @created="() => { activeMainTab = 'campaigns'; loadCampaigns(); }"
        />

        <!-- Campaign Details Drawer -->
        <CampaignDetailDrawer
            v-if="showCampaignDrawer"
            :open="showCampaignDrawer"
            :campaign-id="selectedCampaignId"
            @close="showCampaignDrawer = false"
            @updated="loadCampaigns"
        />

        <!-- Import Contacts Modal -->
        <ImportContactsModal
            v-if="showImportModal"
            :open="showImportModal"
            @close="showImportModal = false"
            @imported="loadContactsList"
        />

        <!-- Flow Config Modal -->
        <div v-if="showFlowConfigModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div class="w-full max-w-xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
                <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
                    <div>
                        <h3 class="text-base font-black text-zinc-900 dark:text-white">
                            {{ configForm.id ? 'Editar Configuração do Fluxo' : 'Novo Fluxo Automático' }}
                        </h3>
                        <p class="text-xs text-zinc-500 dark:text-zinc-400">Defina o nome, evento gatilho e produtos vinculados.</p>
                    </div>
                    <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-600" @click="showFlowConfigModal = false">
                        <X class="h-4 w-4" />
                    </button>
                </div>

                <div v-if="configError" class="mt-4 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-xs text-rose-600 dark:text-rose-400">
                    {{ configError }}
                </div>

                <div class="mt-4 space-y-4">
                    <!-- Flow Name -->
                    <div>
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Nome do Fluxo *</label>
                        <input
                            v-model="configForm.name"
                            type="text"
                            placeholder="Ex: Recuperação de PIX 15 min"
                            class="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        />
                    </div>

                    <!-- Trigger Event -->
                    <div>
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Evento Gatilho (Quando disparar) *</label>
                        <select
                            v-model="configForm.trigger_event"
                            class="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-900 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        >
                            <option v-for="ev in EVENTS" :key="ev.id" :value="ev.id">
                                {{ ev.icon }} {{ ev.label }} ({{ ev.category }})
                            </option>
                        </select>
                    </div>

                    <!-- Products scope -->
                    <div>
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Produtos Vinculados</label>
                        <div class="mt-2 space-y-2">
                            <label class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <input
                                    v-model="configForm.all_products"
                                    type="radio"
                                    :value="true"
                                    class="text-emerald-600 focus:ring-emerald-500"
                                />
                                <span>Aplicar a todos os produtos</span>
                            </label>

                            <label class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <input
                                    v-model="configForm.all_products"
                                    type="radio"
                                    :value="false"
                                    class="text-emerald-600 focus:ring-emerald-500"
                                />
                                <span>Selecionar produtos específicos</span>
                            </label>
                        </div>

                        <!-- Specific Products List -->
                        <div v-if="!configForm.all_products" class="mt-3 rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800">
                            <div class="mb-2 flex items-center justify-between gap-2">
                                <input
                                    v-model="productSearch"
                                    type="text"
                                    placeholder="Filtrar produtos..."
                                    class="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                                />
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
