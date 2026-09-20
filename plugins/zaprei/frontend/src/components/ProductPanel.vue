<script setup>
import { computed, onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { CheckCircle2, Palette } from 'lucide-vue-next';
import FlowEditorModal from './FlowEditorModal.vue';
import { api } from '../api';
import { TRIGGER_EVENTS, defaultGraph } from '../constants';

const props = defineProps({
    /** Injetado pela aba de plugin da página de produto (Pages/Produtos/Edit.vue). */
    produto: { type: Object, default: () => ({}) },
});

const flows = ref([]);
const loading = ref(true);
const busy = ref(false);
const connected = ref(false);
const error = ref('');
const editing = ref(null);

const productId = computed(() => props.produto?.id ?? null);
const flowByEvent = computed(() => new Map(flows.value.map((flow) => [flow.trigger_event, flow])));

async function load() {
    loading.value = true;
    error.value = '';
    try {
        const [connection, flowsResponse] = await Promise.all([api.connection(), api.flows(productId.value)]);
        connected.value = connection.connection.connected;
        flows.value = flowsResponse.flows || [];
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

const create = (event) => run(() => api.createFlow({
    name: `${event.label} — ${props.produto?.name || 'Produto'}`,
    trigger_event: event.eventClass,
    product_id: productId.value,
    is_active: true,
    graph_json: defaultGraph(event.eventClass),
}));

const toggle = (flow) => run(() => api.updateFlow(flow.id, { is_active: !flow.is_active }));

onMounted(load);
</script>

<template>
    <div class="space-y-3 text-zinc-900 dark:text-white">
        <p v-if="loading" class="py-6 text-center text-xs text-zinc-500 dark:text-zinc-400">Verificando integração…</p>

        <template v-else>
            <div
                class="flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs"
                :class="connected ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400'"
            >
                <CheckCircle2 class="h-4 w-4 shrink-0" />
                <span v-if="connected">ZapRei conectado à Evolution GO.</span>
                <span v-else>
                    A Evolution GO não está conectada.
                    <Link href="/integracoes" class="font-semibold underline">Configure em Integrações</Link> para os fluxos deste produto dispararem.
                </span>
            </div>

            <div>
                <h3 class="text-sm font-bold text-zinc-900 dark:text-white">Gatilhos deste produto</h3>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">Crie um fluxo por evento e personalize no editor visual.</p>
            </div>

            <p v-if="error" class="rounded-xl bg-rose-500/10 px-3 py-2 text-xs text-rose-600 dark:text-rose-400">{{ error }}</p>

            <div class="space-y-2">
                <div
                    v-for="event in TRIGGER_EVENTS"
                    :key="event.id"
                    class="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/60 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                    <div>
                        <div class="text-xs font-semibold text-zinc-900 dark:text-white">{{ event.label }}</div>
                        <div class="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">{{ event.eventClass }}</div>
                    </div>

                    <div v-if="flowByEvent.get(event.eventClass)" class="flex items-center gap-2">
                        <span
                            class="rounded-full px-2 py-0.5 text-[10px] font-bold"
                            :class="flowByEvent.get(event.eventClass).is_active ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'"
                        >
                            {{ flowByEvent.get(event.eventClass).is_active ? 'Ativo' : 'Pausado' }}
                        </span>
                        <button
                            type="button"
                            class="rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                            :disabled="!connected || busy"
                            @click="toggle(flowByEvent.get(event.eventClass))"
                        >
                            {{ flowByEvent.get(event.eventClass).is_active ? 'Pausar' : 'Ativar' }}
                        </button>
                        <button
                            type="button"
                            class="flex items-center gap-1 rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white transition hover:bg-emerald-700"
                            :disabled="!connected"
                            @click="editing = flowByEvent.get(event.eventClass)"
                        >
                            <Palette class="h-3 w-3" />
                            Editar
                        </button>
                    </div>
                    <button
                        v-else
                        type="button"
                        class="rounded-lg border border-zinc-200 px-2.5 py-1 text-[11px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        :disabled="!connected || busy"
                        @click="create(event)"
                    >
                        Criar fluxo
                    </button>
                </div>
            </div>
        </template>

        <FlowEditorModal v-if="editing" :flow="editing" @close="editing = null" @saved="load" />
    </div>
</template>
