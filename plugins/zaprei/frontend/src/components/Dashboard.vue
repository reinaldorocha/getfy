<script setup>
import { computed, onMounted, ref } from 'vue';
import { Activity, CheckCircle2, History, MessageSquare, Plug, Send, Users, Zap } from 'lucide-vue-next';
import ConnectionForm from './ConnectionForm.vue';
import FlowsPanel from './FlowsPanel.vue';
import ContactsPanel from './ContactsPanel.vue';
import CampaignsPanel from './CampaignsPanel.vue';
import RunsPanel from './RunsPanel.vue';
import { api } from '../api';

const TABS = [
    { id: 'flows', label: 'Fluxos Automáticos', icon: Zap, component: FlowsPanel },
    { id: 'campaigns', label: 'Campanhas WhatsApp', icon: Send, component: CampaignsPanel },
    { id: 'contacts', label: 'Base de Contatos', icon: Users, component: ContactsPanel },
    { id: 'runs', label: 'Execuções', icon: History, component: RunsPanel },
    { id: 'connection', label: 'Conexão', icon: Plug, component: ConnectionForm },
];

const active = ref('flows');
const connection = ref(null);
const counts = ref({ flows: 0, campaigns: 0, contacts: 0 });
const stats = ref({
    flowsCount: 0,
    activeFlowsCount: 0,
    campaignsCount: 0,
    contactsCount: 0,
    runsCount: 0,
    runsSuccessRate: 100,
});

async function refreshStatus() {
    try {
        connection.value = (await api.connection()).connection;
    } catch {
        connection.value = null;
    }
}

async function refreshCounts() {
    try {
        const [flowsRes, campaignsRes, contactsRes, runsRes] = await Promise.all([
            api.flows().catch(() => ({ flows: [] })),
            api.campaigns().catch(() => ({ campaigns: [] })),
            api.contacts().catch(() => ({ counts: {} })),
            api.runs().catch(() => ({ runs: [] })),
        ]);

        const flowsList = flowsRes.flows || [];
        const campaignsList = campaignsRes.campaigns || [];
        const runsList = runsRes.runs || [];
        const totalContacts = contactsRes.counts?.all || 0;

        counts.value = {
            flows: flowsList.length,
            campaigns: campaignsList.length,
            contacts: totalContacts,
        };

        const activeFlows = flowsList.filter((f) => f.is_active).length;
        const successfulRuns = runsList.filter((r) => r.status === 'completed').length;
        const successRate = runsList.length ? Math.round((successfulRuns / runsList.length) * 100) : 100;

        stats.value = {
            flowsCount: flowsList.length,
            activeFlowsCount: activeFlows,
            campaignsCount: campaignsList.length,
            contactsCount: totalContacts,
            runsCount: runsList.length,
            runsSuccessRate: successRate,
        };
    } catch {
        // Best-effort — os badges apenas ficam sem número.
    }
}

const countFor = (id) => ({ flows: counts.value.flows, campaigns: counts.value.campaigns, contacts: counts.value.contacts }[id] ?? null);

onMounted(() => {
    refreshStatus();
    refreshCounts();
});
</script>

<template>
    <div class="space-y-6 pb-12 text-zinc-900 dark:text-white">
        <!-- Banner Principal com Identidade -->
        <div class="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 p-6 shadow-xs sm:p-8 dark:border-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-emerald-950/20">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <div class="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:text-emerald-400">
                        <MessageSquare class="h-3.5 w-3.5" />
                        <span>Central de WhatsApp &amp; Automações</span>
                    </div>
                    <h1 class="mt-3 text-2xl font-black tracking-tight sm:text-3xl">ZapRei</h1>
                    <p class="mt-1.5 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
                        Fluxos automáticos por eventos, campanhas de disparo em massa segmentadas e base unificada de
                        contatos — tudo pela Evolution GO.
                    </p>
                </div>

                <div class="flex flex-wrap items-center gap-3">
                    <div
                        class="flex items-center gap-3 rounded-2xl border p-3 transition"
                        :class="connection?.connected
                            ? 'border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-950/30'
                            : 'border-amber-500/30 bg-amber-500/10 dark:bg-amber-950/30'"
                    >
                        <div
                            class="h-3 w-3 rounded-full"
                            :class="connection?.connected ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'bg-amber-500'"
                        />
                        <div>
                            <div class="text-xs font-bold">
                                {{ connection?.connected ? 'WhatsApp Conectado' : 'WhatsApp Desconectado' }}
                            </div>
                            <div class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                {{ connection?.connected ? (connection.instance_name || 'Evolution GO ativa') : 'Nenhuma API ativa' }}
                            </div>
                        </div>
                        <button
                            type="button"
                            class="ml-2 rounded-lg bg-white/80 px-2.5 py-1.5 text-xs font-bold text-zinc-700 transition hover:bg-white dark:bg-zinc-900 dark:text-zinc-200"
                            @click="active = 'connection'"
                        >
                            {{ connection?.connected ? 'Ajustar' : 'Conectar' }}
                        </button>
                    </div>
                </div>
            </div>

            <!-- Grade de 4 Cards de KPIs Modernos -->
            <div class="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2 lg:grid-cols-4 dark:border-zinc-800">
                <!-- KPI 1: Automações Ativas -->
                <div
                    class="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
                    @click="active = 'flows'"
                >
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Automações</span>
                        <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/20 dark:text-emerald-400">
                            <Zap class="h-4 w-4" />
                        </div>
                    </div>
                    <div class="mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
                        {{ stats.activeFlowsCount }}
                        <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">ativas</span>
                    </div>
                    <div class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                        de {{ stats.flowsCount }} fluxos configurados
                    </div>
                </div>

                <!-- KPI 2: Campanhas em Massa -->
                <div
                    class="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
                    @click="active = 'campaigns'"
                >
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Campanhas</span>
                        <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-500/20 dark:text-sky-400">
                            <Send class="h-4 w-4" />
                        </div>
                    </div>
                    <div class="mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
                        {{ stats.campaignsCount }}
                    </div>
                    <div class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                        disparos em massa com anti-ban
                    </div>
                </div>

                <!-- KPI 3: Base de Contatos -->
                <div
                    class="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
                    @click="active = 'contacts'"
                >
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Base Unificada</span>
                        <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition group-hover:bg-purple-500 group-hover:text-white dark:bg-purple-500/20 dark:text-purple-400">
                            <Users class="h-4 w-4" />
                        </div>
                    </div>
                    <div class="mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
                        {{ stats.contactsCount.toLocaleString('pt-BR') }}
                    </div>
                    <div class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                        contatos sincronizados
                    </div>
                </div>

                <!-- KPI 4: Execuções & Taxa de Sucesso -->
                <div
                    class="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/70 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/50 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
                    @click="active = 'runs'"
                >
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-medium text-zinc-500 dark:text-zinc-400">Disparos do Motor</span>
                        <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 transition group-hover:bg-teal-500 group-hover:text-white dark:bg-teal-500/20 dark:text-teal-400">
                            <Activity class="h-4 w-4" />
                        </div>
                    </div>
                    <div class="mt-2 text-2xl font-black tracking-tight text-zinc-900 dark:text-white">
                        {{ stats.runsCount }}
                        <span class="text-xs font-semibold text-teal-600 dark:text-teal-400">envios</span>
                    </div>
                    <div class="mt-1 flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                        <span class="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{{ stats.runsSuccessRate }}% taxa de sucesso</span>
                    </div>
                </div>
            </div>

            <!-- Barra de Abas -->
            <div class="mt-6 flex flex-wrap gap-2 border-t border-zinc-200/80 pt-4 dark:border-zinc-800">
                <button
                    v-for="tab in TABS"
                    :key="tab.id"
                    type="button"
                    class="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition"
                    :class="active === tab.id
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/60'"
                    @click="active = tab.id"
                >
                    <component :is="tab.icon" class="h-4 w-4" />
                    <span>{{ tab.label }}</span>
                    <span
                        v-if="countFor(tab.id) !== null && countFor(tab.id) > 0"
                        class="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        :class="active === tab.id ? 'bg-black/10 dark:bg-white/10' : 'bg-zinc-200/60 dark:bg-zinc-800'"
                    >
                        {{ countFor(tab.id) }}
                    </span>
                </button>
            </div>
        </div>

        <p v-if="connection && !connection.connected" class="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300">
            A Evolution GO ainda não está conectada — os fluxos e campanhas não vão disparar até você configurar a conexão.
        </p>

        <component
            :is="TABS.find((tab) => tab.id === active).component"
            :key="active"
            v-on="active === 'connection' ? { saved: refreshStatus } : {}"
        />
    </div>
</template>
