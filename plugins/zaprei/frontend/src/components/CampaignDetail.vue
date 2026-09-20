<script setup>
import { computed, onMounted, ref } from 'vue';
import { Ban, Search, X } from 'lucide-vue-next';
import { api } from '../api';
import { CAMPAIGN_STATUS_LABELS, SEND_STATUS_LABELS } from '../constants';

const props = defineProps({
    campaignId: { type: Number, required: true },
});

const emit = defineEmits(['close', 'changed']);

const campaign = ref(null);
const sends = ref([]);
const loading = ref(true);
const cancelling = ref(false);
const error = ref('');
const search = ref('');
const statusFilter = ref('');

const filteredSends = computed(() => {
    const term = search.value.trim().toLowerCase();

    return sends.value.filter((send) => {
        if (statusFilter.value && send.status !== statusFilter.value) return false;

        return !term || `${send.name || ''} ${send.phone}`.toLowerCase().includes(term);
    });
});

const badgeFor = (status) => ({
    sent: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
    failed: 'border-red-500/20 bg-red-500/10 text-red-400',
    cancelled: 'border-zinc-700 bg-zinc-800 text-zinc-400',
}[status] || 'border-blue-500/20 bg-blue-500/10 text-blue-400');

async function load() {
    loading.value = true;
    error.value = '';
    try {
        const data = await api.campaign(props.campaignId);
        campaign.value = data.campaign;
        sends.value = data.sends || [];
    } catch (e) {
        error.value = e.message;
    } finally {
        loading.value = false;
    }
}

async function cancel() {
    cancelling.value = true;
    error.value = '';
    try {
        await api.cancelCampaign(props.campaignId);
        emit('changed');
        await load();
    } catch (e) {
        error.value = e.message;
    } finally {
        cancelling.value = false;
    }
}

onMounted(load);
</script>

<template>
    <div class="fixed inset-0 z-[100000] flex justify-end bg-black/60 backdrop-blur-sm">
        <div class="flex h-full w-full max-w-4xl flex-col border-l border-zinc-800 bg-zinc-900 shadow-2xl">
            <div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-5">
                <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                        <Search class="h-5 w-5" />
                    </div>
                    <div>
                        <div class="text-lg font-bold text-white">{{ campaign?.name || 'Campanha' }}</div>
                        <p class="mt-0.5 text-xs text-zinc-400">
                            {{ campaign ? (CAMPAIGN_STATUS_LABELS[campaign.status] || campaign.status) : '—' }}
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button
                        v-if="campaign && !['completed', 'cancelled'].includes(campaign.status)"
                        type="button"
                        :disabled="cancelling"
                        class="flex items-center gap-1.5 rounded-xl border border-red-500/30 px-3 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/10 disabled:opacity-50"
                        @click="cancel"
                    >
                        <Ban class="h-3.5 w-3.5" />
                        <span>{{ cancelling ? 'Cancelando…' : 'Cancelar envios' }}</span>
                    </button>
                    <button type="button" class="rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white" @click="emit('close')">
                        <X class="h-4 w-4" />
                    </button>
                </div>
            </div>

            <p v-if="loading" class="py-20 text-center text-sm text-zinc-400">Carregando detalhes…</p>
            <p v-else-if="error" class="px-6 py-4 text-sm text-red-400">{{ error }}</p>

            <template v-else-if="campaign">
                <div class="grid grid-cols-2 gap-3 border-b border-zinc-800 bg-zinc-950/60 px-6 py-4 md:grid-cols-4">
                    <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-3">
                        <span class="text-xs text-zinc-500">Destinatários</span>
                        <div class="mt-0.5 text-xl font-bold text-white">{{ campaign.total_recipients }}</div>
                    </div>
                    <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                        <span class="text-xs text-zinc-500">Enviados</span>
                        <div class="mt-0.5 text-xl font-bold text-emerald-400">{{ campaign.sent_count }}</div>
                    </div>
                    <div class="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
                        <span class="text-xs text-zinc-500">Em fila</span>
                        <div class="mt-0.5 text-xl font-bold text-amber-400">
                            {{ Math.max(0, campaign.total_recipients - campaign.sent_count - campaign.error_count) }}
                        </div>
                    </div>
                    <div class="rounded-xl border border-red-500/20 bg-red-500/5 p-3">
                        <span class="text-xs text-zinc-500">Falhas</span>
                        <div class="mt-0.5 text-xl font-bold text-red-400">{{ campaign.error_count }}</div>
                    </div>
                </div>

                <div class="flex items-center justify-between gap-4 border-b border-zinc-800 bg-zinc-900/50 px-6 py-3">
                    <div class="relative max-w-sm flex-1">
                        <Search class="absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
                        <input v-model="search" type="text" placeholder="Buscar destinatário por nome ou telefone..." class="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none">
                    </div>
                    <select v-model="statusFilter" class="rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs text-white focus:border-emerald-500 focus:outline-none">
                        <option value="">Todos os status</option>
                        <option value="pending">Na fila</option>
                        <option value="sent">Enviado</option>
                        <option value="failed">Falhou</option>
                        <option value="cancelled">Cancelado</option>
                    </select>
                </div>

                <div class="flex-1 overflow-y-auto p-6">
                    <div v-if="!filteredSends.length" class="py-16 text-center text-sm text-zinc-500">
                        Nenhum destinatário encontrado com esses filtros.
                    </div>
                    <div v-else class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/40">
                        <table class="w-full text-left text-xs">
                            <thead class="border-b border-zinc-800 bg-zinc-900 text-zinc-400">
                                <tr>
                                    <th class="px-4 py-2.5">Destinatário</th>
                                    <th class="px-4 py-2.5">Telefone</th>
                                    <th class="px-4 py-2.5">Status</th>
                                    <th class="px-4 py-2.5 text-right">Enviado em</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60">
                                <tr v-for="send in filteredSends" :key="send.id">
                                    <td class="px-4 py-3">
                                        <div class="font-medium text-white">{{ send.name || '—' }}</div>
                                        <div v-if="send.error_message" :title="send.error_message" class="mt-0.5 max-w-[200px] truncate text-[10px] text-red-400">
                                            {{ send.error_message }}
                                        </div>
                                    </td>
                                    <td class="px-4 py-3 font-mono text-zinc-300">{{ send.phone }}</td>
                                    <td class="px-4 py-3">
                                        <span class="rounded-full border px-2 py-0.5 text-[10px] font-semibold" :class="badgeFor(send.status)">
                                            {{ SEND_STATUS_LABELS[send.status] || send.status }}
                                        </span>
                                    </td>
                                    <td class="px-4 py-3 text-right text-zinc-400">
                                        {{ send.sent_at ? new Date(send.sent_at).toLocaleString('pt-BR') : '—' }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
