<script setup>
import { ref, watch } from 'vue';
import axios from 'axios';
import {
    X,
    MessageSquare,
    CheckCircle2,
    Clock,
    AlertCircle,
    XCircle,
    Loader2,
    RefreshCw,
    Search,
    Send,
    User,
    Ban,
} from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
    open: { type: Boolean, default: false },
    campaignId: { type: [Number, String], default: null },
});

const emit = defineEmits(['close', 'updated']);

const loading = ref(false);
const campaign = ref(null);
const sends = ref([]);
const sendsPagination = ref({ current_page: 1, last_page: 1, total: 0 });
const statusFilter = ref('');
const searchQuery = ref('');
const cancelling = ref(false);

async function loadCampaignDetails(page = 1) {
    if (!props.campaignId) return;

    loading.value = true;
    try {
        const response = await axios.get(`/autozap/campaigns/${props.campaignId}`, {
            params: {
                page,
                status: statusFilter.value || undefined,
                search: searchQuery.value || undefined,
            },
        });

        if (response.data.success) {
            campaign.value = response.data.campaign;
            sends.value = response.data.sends?.data || [];
            sendsPagination.value = {
                current_page: response.data.sends?.current_page || 1,
                last_page: response.data.sends?.last_page || 1,
                total: response.data.sends?.total || 0,
            };
        }
    } catch (e) {
        console.error('Erro ao carregar detalhes da campanha:', e);
    } finally {
        loading.value = false;
    }
}

async function cancelCampaign() {
    if (!campaign.value || !confirm('Tem certeza que deseja cancelar os envios restantes desta campanha?')) return;

    cancelling.value = true;
    try {
        const res = await axios.post(`/autozap/campaigns/${campaign.value.id}/cancel`);
        if (res.data.success) {
            campaign.value = res.data.campaign;
            loadCampaignDetails(sendsPagination.value.current_page);
            emit('updated');
        }
    } catch (e) {
        alert('Falha ao cancelar: ' + (e.response?.data?.message || e.message));
    } finally {
        cancelling.value = false;
    }
}

watch(
    () => props.open,
    (val) => {
        if (val && props.campaignId) {
            loadCampaignDetails(1);
        }
    }
);

function getStatusBadge(status) {
    switch (status) {
        case 'completed':
            return { label: 'Concluída', class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: CheckCircle2 };
        case 'processing':
            return { label: 'Em execução', class: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: Loader2, spin: true };
        case 'scheduled':
            return { label: 'Agendada', class: 'bg-purple-500/10 text-purple-400 border-purple-500/20', icon: Clock };
        case 'cancelled':
            return { label: 'Cancelada', class: 'bg-zinc-800 text-zinc-400 border-zinc-700', icon: Ban };
        default:
            return { label: status, class: 'bg-zinc-800 text-zinc-300 border-zinc-700', icon: Clock };
    }
}

function getSendStatusBadge(status) {
    switch (status) {
        case 'sent':
            return { label: 'Enviado', class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: CheckCircle2 };
        case 'delivered':
            return { label: 'Entregue', class: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40', icon: CheckCircle2 };
        case 'processing':
            return { label: 'Processando', class: 'bg-blue-500/10 text-blue-400 border-blue-500/20', icon: Loader2, spin: true };
        case 'pending':
            return { label: 'Pendente', class: 'bg-amber-500/10 text-amber-400 border-amber-500/20', icon: Clock };
        case 'error':
            return { label: 'Erro', class: 'bg-red-500/10 text-red-400 border-red-500/20', icon: AlertCircle };
        default:
            return { label: status, class: 'bg-zinc-800 text-zinc-400 border-zinc-700', icon: Clock };
    }
}
</script>

<template>
    <div v-if="open" class="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
        <div class="bg-zinc-900 border-l border-zinc-800 w-full max-w-4xl h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <!-- Header -->
            <div class="px-6 py-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Send class="w-5 h-5" />
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h2 class="font-bold text-white text-lg">{{ campaign?.name || 'Detalhes da Campanha' }}</h2>
                            <span
                                v-if="campaign"
                                :class="['px-2.5 py-0.5 rounded-full text-xs font-semibold border flex items-center gap-1.5', getStatusBadge(campaign.status).class]"
                            >
                                <component :is="getStatusBadge(campaign.status).icon" :class="['w-3.5 h-3.5', getStatusBadge(campaign.status).spin ? 'animate-spin' : '']" />
                                {{ getStatusBadge(campaign.status).label }}
                            </span>
                        </div>
                        <p class="text-xs text-zinc-400 mt-0.5">
                            Criada em {{ campaign?.created_at ? new Date(campaign.created_at).toLocaleString('pt-BR') : '-' }}
                            <span v-if="campaign?.connection"> • Instância: <strong class="text-zinc-300">{{ campaign.connection.name || campaign.connection.driver }}</strong></span>
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <Button
                        v-if="campaign && (campaign.status === 'processing' || campaign.status === 'scheduled')"
                        variant="ghost"
                        size="sm"
                        @click="cancelCampaign"
                        :disabled="cancelling"
                        class="text-red-400 hover:text-red-300 hover:bg-red-500/10 text-xs border border-red-500/20"
                    >
                        <Ban class="w-3.5 h-3.5 mr-1" />
                        {{ cancelling ? 'Cancelando...' : 'Cancelar Envios' }}
                    </Button>
                    <button @click="loadCampaignDetails(sendsPagination.current_page)" class="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition">
                        <RefreshCw :class="['w-4 h-4', loading ? 'animate-spin' : '']" />
                    </button>
                    <button @click="emit('close')" class="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition">
                        <X class="w-5 h-5" />
                    </button>
                </div>
            </div>

            <!-- Stats Bar -->
            <div v-if="campaign" class="px-6 py-4 bg-zinc-950/60 border-b border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div class="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span class="text-xs text-zinc-400">Total Destinatários</span>
                    <p class="text-xl font-bold text-white mt-0.5">{{ campaign.total_recipients }}</p>
                </div>
                <div class="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <span class="text-xs text-emerald-400 font-medium">Enviados com Sucesso</span>
                    <p class="text-xl font-bold text-emerald-400 mt-0.5">{{ campaign.sent_count }}</p>
                </div>
                <div class="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20">
                    <span class="text-xs text-amber-400 font-medium">Pendentes na Fila</span>
                    <p class="text-xl font-bold text-amber-400 mt-0.5">{{ campaign.pending_count }}</p>
                </div>
                <div class="p-3 rounded-xl bg-red-500/5 border border-red-500/20">
                    <span class="text-xs text-red-400 font-medium">Falhas / Erros</span>
                    <p class="text-xl font-bold text-red-400 mt-0.5">{{ campaign.error_count }}</p>
                </div>
            </div>

            <!-- Filter Controls -->
            <div class="px-6 py-3 border-b border-zinc-800 flex items-center justify-between gap-4 bg-zinc-900/50">
                <div class="relative flex-1 max-w-sm">
                    <Search class="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        v-model="searchQuery"
                        @input="loadCampaignDetails(1)"
                        type="text"
                        placeholder="Buscar destinatário por nome ou telefone..."
                        class="w-full bg-zinc-800/80 border border-zinc-700/60 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                    />
                </div>

                <div class="flex items-center gap-2">
                    <select
                        v-model="statusFilter"
                        @change="loadCampaignDetails(1)"
                        class="bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-1.5 text-xs text-zinc-300 focus:outline-none focus:border-emerald-500"
                    >
                        <option value="">Todos os status</option>
                        <option value="sent">Enviados</option>
                        <option value="pending">Pendentes</option>
                        <option value="error">Com Erro</option>
                    </select>
                </div>
            </div>

            <!-- Recipients Table -->
            <div class="flex-1 overflow-y-auto p-6">
                <div v-if="loading && !sends.length" class="py-20 text-center text-zinc-400">
                    <Loader2 class="w-8 h-8 animate-spin mx-auto text-emerald-400 mb-2" />
                    Carregando logs de destinatários...
                </div>

                <div v-else-if="!sends.length" class="py-16 text-center text-zinc-500 text-sm">
                    Nenhum envio registrado para os filtros selecionados.
                </div>

                <div v-else class="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/40">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-zinc-900/80 text-zinc-400 border-b border-zinc-800 font-medium">
                            <tr>
                                <th class="px-4 py-3">Destinatário</th>
                                <th class="px-4 py-3">Telefone</th>
                                <th class="px-4 py-3">Produto</th>
                                <th class="px-4 py-3">Status</th>
                                <th class="px-4 py-3 text-right">Data/Hora</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-800/60">
                            <tr v-for="send in sends" :key="send.id" class="hover:bg-zinc-800/30 transition">
                                <td class="px-4 py-3">
                                    <div class="font-medium text-white">{{ send.name || 'Sem nome' }}</div>
                                    <div class="text-[11px] text-zinc-500">{{ send.email || '-' }}</div>
                                </td>
                                <td class="px-4 py-3 font-mono text-zinc-300">
                                    {{ send.phone }}
                                </td>
                                <td class="px-4 py-3 text-zinc-400 max-w-[180px] truncate" :title="send.product_name">
                                    {{ send.product_name || '-' }}
                                </td>
                                <td class="px-4 py-3">
                                    <span
                                        :class="['px-2 py-0.5 rounded-full text-[11px] font-medium border inline-flex items-center gap-1', getSendStatusBadge(send.status).class]"
                                        :title="send.error_message || ''"
                                    >
                                        <component :is="getSendStatusBadge(send.status).icon" :class="['w-3 h-3', getSendStatusBadge(send.status).spin ? 'animate-spin' : '']" />
                                        {{ getSendStatusBadge(send.status).label }}
                                    </span>
                                    <p v-if="send.error_message" class="text-[10px] text-red-400 truncate max-w-[200px] mt-0.5">
                                        {{ send.error_message }}
                                    </p>
                                </td>
                                <td class="px-4 py-3 text-right text-zinc-400">
                                    {{ send.sent_at ? new Date(send.sent_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (send.created_at ? new Date(send.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '-') }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div v-if="sendsPagination.last_page > 1" class="mt-4 flex items-center justify-between text-xs text-zinc-400">
                    <span>Mostrando página {{ sendsPagination.current_page }} de {{ sendsPagination.last_page }} ({{ sendsPagination.total }} envios)</span>
                    <div class="flex items-center gap-2">
                        <Button
                            size="sm"
                            variant="ghost"
                            :disabled="sendsPagination.current_page <= 1"
                            @click="loadCampaignDetails(sendsPagination.current_page - 1)"
                        >
                            Anterior
                        </Button>
                        <Button
                            size="sm"
                            variant="ghost"
                            :disabled="sendsPagination.current_page >= sendsPagination.last_page"
                            @click="loadCampaignDetails(sendsPagination.current_page + 1)"
                        >
                            Próxima
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
