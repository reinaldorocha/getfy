<script setup>
import { computed, onMounted, ref } from 'vue';
import { History, MessageSquare, Plug, Send, Users, Zap } from 'lucide-vue-next';
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

async function refreshStatus() {
    try {
        connection.value = (await api.connection()).connection;
    } catch {
        connection.value = null;
    }
}

async function refreshCounts() {
    try {
        const [flows, campaigns, contacts] = await Promise.all([api.flows(), api.campaigns(), api.contacts()]);
        counts.value = {
            flows: (flows.flows || []).length,
            campaigns: (campaigns.campaigns || []).length,
            contacts: contacts.counts?.all || 0,
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
                                {{ connection?.connected ? 'Evolution GO ativa' : 'Nenhuma API ativa' }}
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
