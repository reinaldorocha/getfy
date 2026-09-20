<script setup>
import { onMounted, ref } from 'vue';
import { History, Loader2, MessageSquareText, RotateCcw } from 'lucide-vue-next';
import { api } from '../api';
import { RUN_STATUS_LABELS, eventLabel } from '../constants';

const runs = ref([]);
const loading = ref(true);
const error = ref('');
const notice = ref('');
const retrying = ref(null);

const dotFor = (status) => ({ completed: 'bg-emerald-500', failed: 'bg-rose-500' }[status] || 'bg-amber-500');
const pillFor = (status) => ({
    completed: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    failed: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
}[status] || 'bg-amber-500/10 text-amber-600 dark:text-amber-400');

async function load() {
    loading.value = true;
    error.value = '';
    try {
        runs.value = (await api.runs()).runs || [];
    } catch (e) {
        error.value = e.message;
    } finally {
        loading.value = false;
    }
}

async function retry(run) {
    if (!window.confirm('Tentar novamente do início do fluxo? Blocos de mensagem já entregues antes da falha podem ser reenviados.')) return;

    retrying.value = run.id;
    error.value = '';
    notice.value = '';
    try {
        await api.retryRun(run.id);
        notice.value = `Execução #${run.id} reiniciada.`;
        await load();
    } catch (e) {
        error.value = e.message;
    } finally {
        retrying.value = null;
    }
}

onMounted(load);
</script>

<template>
    <div class="rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
        <div class="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div>
                <h2 class="text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white">Histórico de Execuções</h2>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">Últimos disparos de mensagens automáticas no WhatsApp.</p>
            </div>
            <button type="button" class="rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800" :disabled="loading" @click="load">
                Atualizar
            </button>
        </div>

        <p v-if="error" class="mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{{ error }}</p>
        <p v-else-if="notice" class="mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400">{{ notice }}</p>

        <div v-if="loading" class="py-10 text-center text-zinc-400">
            <Loader2 class="mb-2 inline h-6 w-6 animate-spin text-emerald-500" />
            <p class="text-xs font-medium">Carregando histórico…</p>
        </div>

        <div v-else-if="!runs.length" class="py-10 text-center">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900">
                <History class="h-6 w-6" />
            </div>
            <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">Nenhum disparo registrado ainda</h3>
        </div>

        <div v-else class="mt-4 space-y-2">
            <div
                v-for="run in runs"
                :key="run.id"
                class="flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 text-xs dark:border-zinc-800 dark:bg-zinc-900/50"
            >
                <div class="flex items-center gap-3">
                    <span class="h-2 w-2 rounded-full" :class="dotFor(run.status)" />
                    <div>
                        <div class="font-semibold text-zinc-900 dark:text-white">Fluxo #{{ run.flow_id }}</div>
                        <div class="text-zinc-500 dark:text-zinc-400">
                            {{ eventLabel(run.event_class) }} • {{ new Date(run.created_at).toLocaleString('pt-BR') }}
                        </div>
                        <div v-if="run.context?.last_reply" class="mt-0.5 flex items-start gap-1 text-[10px] text-teal-600 dark:text-teal-400">
                            <MessageSquareText class="mt-0.5 h-3 w-3 shrink-0" />
                            <span class="max-w-md truncate" :title="run.context.last_reply">Cliente respondeu: “{{ run.context.last_reply }}”</span>
                        </div>
                        <div v-if="run.last_error" class="mt-0.5 max-w-md truncate text-[10px] text-rose-500" :title="run.last_error">
                            {{ run.last_error }}
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        v-if="run.status === 'failed'"
                        type="button"
                        class="flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[10px] font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        title="Tentar novamente do início do fluxo"
                        :disabled="retrying === run.id"
                        @click="retry(run)"
                    >
                        <RotateCcw class="h-3 w-3" :class="{ 'animate-spin': retrying === run.id }" />
                        <span>{{ retrying === run.id ? 'Tentando…' : 'Tentar novamente' }}</span>
                    </button>
                    <span class="rounded-full px-2.5 py-0.5 text-[10px] font-bold" :class="pillFor(run.status)">
                        {{ RUN_STATUS_LABELS[run.status] || run.status }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
