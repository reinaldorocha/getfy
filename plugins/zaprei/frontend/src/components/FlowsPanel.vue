<script setup>
import { computed, onMounted, ref } from 'vue';
import { Copy, Download, Loader2, Palette, Plus, Search, Send, Settings, Trash2, Upload, Zap } from 'lucide-vue-next';
import FlowEditorModal from './FlowEditorModal.vue';
import FlowSettingsModal from './FlowSettingsModal.vue';
import FlowTemplateGallery from './FlowTemplateGallery.vue';
import MultiSelectDropdown from './MultiSelectDropdown.vue';
import { api } from '../api';
import { TRIGGER_EVENTS, defaultGraph, eventLabel } from '../constants';

const flows = ref([]);
const products = ref([]);
const loading = ref(true);
const busy = ref(false);
const error = ref('');
const notice = ref('');
const importing = ref(false);
const search = ref('');
const eventFilter = ref('all');
const editing = ref(null);
const configuring = ref(null);

const draft = ref({ name: '', trigger_event: TRIGGER_EVENTS[3].eventClass, product_ids: [] });
const creating = ref(false);

const visible = computed(() => {
    const term = search.value.trim().toLowerCase();

    return flows.value.filter((flow) => {
        if (eventFilter.value !== 'all' && flow.trigger_event !== eventFilter.value) return false;

        return !term || `${flow.name} ${eventLabel(flow.trigger_event)}`.toLowerCase().includes(term);
    });
});

const productOptions = computed(() => products.value.map((product) => ({ value: product.id, label: product.name })));

function productNames(ids) {
    if (!ids || !ids.length) return 'Todos os produtos';

    const names = ids.map((id) => products.value.find((product) => product.id === id)?.name).filter(Boolean);
    if (!names.length) return 'Todos os produtos';

    return names.length > 2 ? `${names.slice(0, 2).join(', ')} +${names.length - 2}` : names.join(', ');
}

async function load() {
    loading.value = true;
    error.value = '';
    try {
        const [flowsResponse, productsResponse] = await Promise.all([api.flows(), api.products()]);
        flows.value = flowsResponse.flows || [];
        products.value = productsResponse.products || [];
    } catch (e) {
        error.value = e.message;
    } finally {
        loading.value = false;
    }
}

async function run(action) {
    busy.value = true;
    error.value = '';
    try {
        await action();
        await load();
    } catch (e) {
        error.value = e.message;
    } finally {
        busy.value = false;
    }
}

function test(flow) {
    const phone = window.prompt(`Testar "${flow.name}" — número de WhatsApp com DDD (ex: 11999998888):`);
    if (!phone || !phone.trim()) return;

    notice.value = '';
    return run(async () => {
        await api.testFlow(flow.id, phone.trim());
        notice.value = `Fluxo "${flow.name}" disparado para ${phone.trim()}. Confira o WhatsApp e o Histórico de Execuções.`;
    });
}

function create() {
    const name = draft.value.name.trim() || eventLabel(draft.value.trigger_event);

    return run(async () => {
        await api.createFlow({
            name,
            trigger_event: draft.value.trigger_event,
            product_ids: draft.value.product_ids.length ? draft.value.product_ids : null,
            is_active: true,
            graph_json: defaultGraph(draft.value.trigger_event),
        });
        draft.value.name = '';
        draft.value.product_ids = [];
        creating.value = false;
    });
}

const toggle = (flow) => run(() => api.updateFlow(flow.id, { is_active: !flow.is_active }));
const duplicate = (flow) => run(() => api.duplicateFlow(flow.id));

function remove(flow) {
    if (!window.confirm(`Excluir o fluxo "${flow.name}"?`)) return;

    return run(() => api.deleteFlow(flow.id));
}

function exportFlow(flow) {
    const payload = {
        name: flow.name,
        trigger_event: flow.trigger_event,
        product_ids: flow.product_ids,
        graph_json: flow.graph_json,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${(flow.name || 'fluxo').trim().replace(/[^\w-]+/g, '_').toLowerCase()}.zaprei.json`;
    link.click();
    URL.revokeObjectURL(url);
}

async function importFlow(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    importing.value = true;
    error.value = '';
    notice.value = '';
    try {
        const parsed = JSON.parse(await file.text());
        if (!parsed || typeof parsed !== 'object' || !parsed.graph_json || !parsed.trigger_event) {
            throw new Error('Arquivo inválido: não parece ser um fluxo exportado do ZapRei.');
        }

        // Produtos podem não existir mais (ou vir de outra conta) — nesse caso o
        // fluxo importado vale para todos os produtos em vez de falhar.
        const knownIds = new Set(products.value.map((product) => product.id));
        const importedIds = (Array.isArray(parsed.product_ids) ? parsed.product_ids : []).filter((id) => knownIds.has(id));

        await api.createFlow({
            name: parsed.name ? `${parsed.name} (importado)` : 'Fluxo importado',
            trigger_event: parsed.trigger_event,
            product_ids: importedIds.length ? importedIds : null,
            graph_json: parsed.graph_json,
            is_active: false,
        });
        notice.value = 'Fluxo importado como pausado — confira o grafo e ative quando estiver pronto.';
        await load();
    } catch (e) {
        error.value = e.message || 'Não foi possível importar o arquivo.';
    } finally {
        importing.value = false;
        event.target.value = '';
    }
}

function useTemplate(template) {
    return run(() => api.createFlow({
        name: template.title,
        trigger_event: template.eventClass,
        product_ids: null,
        is_active: true,
        graph_json: template.graph(template.eventClass),
    }));
}

onMounted(load);
</script>

<template>
    <div class="space-y-4 text-zinc-900 dark:text-white">
        <FlowTemplateGallery @use="useTemplate" />

        <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
            <div class="flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
                <div class="flex flex-wrap items-center gap-2">
                    <div class="relative w-64">
                        <Search class="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                        <input
                            v-model="search"
                            type="text"
                            placeholder="Buscar fluxos..."
                            class="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                        >
                    </div>
                    <select
                        v-model="eventFilter"
                        class="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    >
                        <option value="all">Todos os eventos</option>
                        <option v-for="event in TRIGGER_EVENTS" :key="event.id" :value="event.eventClass">{{ event.label }}</option>
                    </select>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-xs text-zinc-500 dark:text-zinc-400">{{ visible.length }} fluxo(s) cadastrado(s)</span>
                    <label
                        class="flex cursor-pointer items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        :class="{ 'opacity-60': importing }"
                    >
                        <Upload class="h-4 w-4" />
                        <span>{{ importing ? 'Importando…' : 'Importar' }}</span>
                        <input type="file" accept=".json,application/json" hidden :disabled="importing" @change="importFlow">
                    </label>
                    <button
                        type="button"
                        class="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700"
                        @click="creating = !creating"
                    >
                        <Plus class="h-4 w-4" />
                        <span>Novo Fluxo</span>
                    </button>
                </div>
            </div>

            <div v-if="creating" class="mt-4 space-y-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40">
                <div class="grid gap-3 sm:grid-cols-3">
                    <div>
                        <label class="mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" for="zr-flow-name">Nome</label>
                        <input id="zr-flow-name" v-model="draft.name" type="text" placeholder="Recuperação de PIX" class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white">
                    </div>
                    <div>
                        <label class="mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" for="zr-flow-event">Evento gatilho</label>
                        <select id="zr-flow-event" v-model="draft.trigger_event" class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white">
                            <option v-for="event in TRIGGER_EVENTS" :key="event.id" :value="event.eventClass">{{ event.label }}</option>
                        </select>
                    </div>
                    <div>
                        <label class="mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400" for="zr-flow-product">Produtos</label>
                        <MultiSelectDropdown v-model="draft.product_ids" :options="productOptions" placeholder="Todos os produtos" />
                    </div>
                </div>
                <div class="flex gap-2">
                    <button type="button" class="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:opacity-50" :disabled="busy" @click="create">
                        Criar fluxo em branco
                    </button>
                    <button type="button" class="rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800" @click="creating = false">
                        Cancelar
                    </button>
                </div>
            </div>

            <p v-if="error" class="mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{{ error }}</p>
            <p v-else-if="notice" class="mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400">{{ notice }}</p>

            <div v-if="loading" class="py-10 text-center text-zinc-400">
                <Loader2 class="mb-2 inline h-6 w-6 animate-spin text-emerald-500" />
                <p class="text-xs font-medium">Carregando fluxos de automação...</p>
            </div>

            <div v-else-if="!visible.length" class="py-10 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900">
                    <Zap class="h-6 w-6" />
                </div>
                <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">Nenhum fluxo encontrado</h3>
                <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Crie seu primeiro fluxo automático clicando no botão acima ou escolhendo um modelo pronto.
                </p>
            </div>

            <div v-else class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="flow in visible"
                    :key="flow.id"
                    class="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-4 transition hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                >
                    <div>
                        <div class="flex items-start justify-between gap-2">
                            <div>
                                <span class="text-[10px] font-semibold text-zinc-400 uppercase">{{ eventLabel(flow.trigger_event) }}</span>
                                <h3 class="text-sm font-bold text-zinc-900 dark:text-white">{{ flow.name }}</h3>
                            </div>
                            <button
                                type="button"
                                class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
                                :class="flow.is_active ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-700'"
                                :title="flow.is_active ? 'Ativo — clique para pausar' : 'Pausado — clique para ativar'"
                                :disabled="busy"
                                @click="toggle(flow)"
                            >
                                <span
                                    class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                    :class="flow.is_active ? 'translate-x-4' : 'translate-x-0'"
                                />
                            </button>
                        </div>
                        <div class="mt-2">
                            <span class="text-xs text-zinc-500 dark:text-zinc-400">{{ productNames(flow.product_ids) }}</span>
                        </div>
                    </div>
                    <div class="mt-3 flex items-center justify-between border-t border-zinc-200/60 pt-3 dark:border-zinc-800">
                        <div class="flex items-center gap-1">
                            <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200" title="Configurar detalhes e produto" @click="configuring = flow">
                                <Settings class="h-4 w-4" />
                            </button>
                            <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200" title="Duplicar fluxo" :disabled="busy" @click="duplicate(flow)">
                                <Copy class="h-4 w-4" />
                            </button>
                            <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600" title="Excluir fluxo" :disabled="busy" @click="remove(flow)">
                                <Trash2 class="h-4 w-4" />
                            </button>
                            <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:bg-emerald-500/10 hover:text-emerald-600" title="Testar fluxo agora, em um número de WhatsApp" :disabled="busy" @click="test(flow)">
                                <Send class="h-4 w-4" />
                            </button>
                            <button type="button" class="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-200/60 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200" title="Exportar fluxo como arquivo .json" @click="exportFlow(flow)">
                                <Download class="h-4 w-4" />
                            </button>
                        </div>
                        <button
                            type="button"
                            class="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700"
                            @click="editing = flow"
                        >
                            <Palette class="h-3.5 w-3.5" />
                            <span>Editar Visual</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <FlowEditorModal v-if="editing" :flow="editing" @close="editing = null" @saved="load" />
        <FlowSettingsModal v-if="configuring" :flow="configuring" @close="configuring = null" @saved="load" />
    </div>
</template>
