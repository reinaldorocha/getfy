<script setup>
import { ref } from 'vue';
import { AlertCircle, ArrowLeft, Loader2, MessageSquare, Save } from 'lucide-vue-next';
import FlowCanvas from './FlowCanvas.vue';
import { api } from '../api';

const props = defineProps({
    flow: { type: Object, required: true },
});

const emit = defineEmits(['close', 'saved']);

const saving = ref(false);
const error = ref('');

async function save(graph) {
    saving.value = true;
    error.value = '';
    try {
        await api.updateFlow(props.flow.id, { graph_json: graph });
        emit('saved');
        emit('close');
    } catch (e) {
        error.value = e.message;
        saving.value = false;
    }
}
</script>

<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-[100000] flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
            <header class="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
                <div class="flex items-center gap-3">
                    <button
                        type="button"
                        class="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                        :disabled="saving"
                        @click="emit('close')"
                    >
                        <ArrowLeft class="h-4 w-4 text-emerald-500" />
                        <span>Voltar para Automações</span>
                    </button>
                    <div class="h-5 w-px bg-zinc-200 dark:bg-zinc-800" />
                    <div class="flex items-center gap-2">
                        <div class="flex h-8 w-8 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <MessageSquare class="h-4 w-4" />
                        </div>
                        <div>
                            <div class="text-sm font-bold">{{ flow.name || 'Editor de Fluxo Visual' }}</div>
                            <div class="text-[11px] text-zinc-400">Arraste os blocos e conecte os pontos para desenhar o fluxo.</div>
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    :disabled="saving"
                    class="flex min-w-[130px] items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-60"
                    @click="$refs.canvas?.requestSave()"
                >
                    <Loader2 v-if="saving" class="h-4 w-4 animate-spin" />
                    <Save v-else class="h-4 w-4" />
                    <span>{{ saving ? 'Salvando...' : 'Salvar Fluxo' }}</span>
                </button>
            </header>

            <p v-if="error" class="flex items-center gap-2 border-b border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                <AlertCircle class="h-4 w-4 shrink-0" />
                <span>{{ error }}</span>
            </p>

            <FlowCanvas ref="canvas" :flow="flow" :saving="saving" class="flex-1 overflow-hidden" @save="save" />
        </div>
    </Teleport>
</template>
