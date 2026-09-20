<script setup>
import { computed, onMounted, ref } from 'vue';
import { Eye, Loader2, Plus, Search, Send } from 'lucide-vue-next';
import CampaignWizard from './CampaignWizard.vue';
import CampaignDetail from './CampaignDetail.vue';
import { api } from '../api';
import { CAMPAIGN_STATUS_LABELS } from '../constants';

const campaigns = ref([]);
const loading = ref(true);
const error = ref('');
const search = ref('');
const wizardOpen = ref(false);
const detailId = ref(null);

const badgeFor = (status) => ({
    completed: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
    cancelled: 'border-zinc-300 bg-zinc-100 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400',
    scheduled: 'border-purple-500/20 bg-purple-500/10 text-purple-700 dark:text-purple-400',
}[status] || 'border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400');

const visible = computed(() => {
    const term = search.value.trim().toLowerCase();

    return term ? campaigns.value.filter((c) => c.name.toLowerCase().includes(term)) : campaigns.value;
});

async function load() {
    loading.value = true;
    error.value = '';
    try {
        campaigns.value = (await api.campaigns()).campaigns || [];
    } catch (e) {
        error.value = e.message;
    } finally {
        loading.value = false;
    }
}

onMounted(load);
</script>

<template>
    <div class="rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
        <div class="flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
            <div class="relative w-64">
                <Search class="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-zinc-400" />
                <input
                    v-model="search"
                    type="text"
                    placeholder="Buscar campanhas..."
                    class="w-full rounded-xl border border-zinc-200 bg-zinc-50 py-1.5 pr-3 pl-9 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                >
            </div>
            <button
                type="button"
                class="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700"
                @click="wizardOpen = true"
            >
                <Plus class="h-4 w-4" />
                <span>Nova Campanha</span>
            </button>
        </div>

        <p v-if="error" class="mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{{ error }}</p>

        <div v-if="loading" class="py-10 text-center text-zinc-400">
            <Loader2 class="mb-2 inline h-6 w-6 animate-spin text-emerald-500" />
            <p class="text-xs font-medium">Carregando histórico de campanhas...</p>
        </div>

        <div v-else-if="!visible.length" class="py-10 text-center">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900">
                <Send class="h-6 w-6" />
            </div>
            <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">Nenhuma campanha criada até agora</h3>
        </div>

        <div v-else class="mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800">
            <table class="w-full text-left text-xs">
                <thead class="bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                    <tr>
                        <th class="px-3 py-2.5">Campanha</th>
                        <th class="px-3 py-2.5">Status</th>
                        <th class="px-3 py-2.5">Destinatários</th>
                        <th class="px-3 py-2.5">Enviados</th>
                        <th class="px-3 py-2.5">Falhas</th>
                        <th class="px-3 py-2.5">Agendada para</th>
                        <th class="px-3 py-2.5" />
                    </tr>
                </thead>
                <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                    <tr v-for="campaign in visible" :key="campaign.id" class="transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40">
                        <td class="px-3 py-2.5 font-medium text-zinc-900 dark:text-white">{{ campaign.name }}</td>
                        <td class="px-3 py-2.5">
                            <span class="rounded-full border px-2 py-0.5 text-[10px] font-semibold" :class="badgeFor(campaign.status)">
                                {{ CAMPAIGN_STATUS_LABELS[campaign.status] || campaign.status }}
                            </span>
                        </td>
                        <td class="px-3 py-2.5">{{ campaign.total_recipients }}</td>
                        <td class="px-3 py-2.5 font-semibold text-emerald-600 dark:text-emerald-400">{{ campaign.sent_count }}</td>
                        <td class="px-3 py-2.5" :class="campaign.error_count ? 'font-semibold text-red-600 dark:text-red-400' : ''">{{ campaign.error_count }}</td>
                        <td class="px-3 py-2.5 text-zinc-500 dark:text-zinc-400">
                            {{ campaign.scheduled_at ? new Date(campaign.scheduled_at).toLocaleString('pt-BR') : 'Imediato' }}
                        </td>
                        <td class="px-3 py-2.5">
                            <button type="button" class="flex items-center gap-1 rounded-lg px-2 py-1 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white" @click="detailId = campaign.id">
                                <Eye class="h-3.5 w-3.5" />
                                <span>Detalhes</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <CampaignWizard v-if="wizardOpen" @close="wizardOpen = false" @created="load" />
        <CampaignDetail v-if="detailId" :campaign-id="detailId" @close="detailId = null" @changed="load" />
    </div>
</template>
