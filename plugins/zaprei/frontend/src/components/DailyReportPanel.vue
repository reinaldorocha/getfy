<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import {
    AlertCircle,
    BarChart3,
    Calendar,
    CalendarDays,
    CalendarRange,
    CheckCircle2,
    Clock,
    DollarSign,
    Loader2,
    Phone,
    RefreshCw,
    Send,
    Sparkles,
    TrendingUp,
    Users,
    Wallet,
} from 'lucide-vue-next';
import { api } from '../api';

const activeTab = ref('daily'); // 'daily' | 'weekly' | 'monthly'
const loading = ref(true);
const saving = ref(false);
const testing = ref(false);
const loadingGroups = ref(false);
const error = ref('');
const notice = ref('');
const testSuccess = ref('');

const groups = ref([]);
const groupMode = ref('list'); // 'list' | 'manual'

const dailyForm = reactive({
    enabled: false,
    time: '23:59',
    recipient_type: 'phone', // 'phone' | 'group'
    phone: '',
    group_id: '',
    custom_template: '',
});
const showDailyCustom = ref(false);
const dailyPreview = ref('');
const dailyData = ref(null);

const weeklyForm = reactive({
    enabled: false,
    time: '23:59',
    recipient_type: 'phone', // 'phone' | 'group'
    phone: '',
    group_id: '',
    custom_template: '',
});
const showWeeklyCustom = ref(false);
const weeklyPreview = ref('');
const weeklyData = ref(null);

const monthlyForm = reactive({
    enabled: false,
    time: '23:59',
    recipient_type: 'phone', // 'phone' | 'group'
    phone: '',
    group_id: '',
    custom_template: '',
});
const showMonthlyCustom = ref(false);
const monthlyPreview = ref('');
const monthlyData = ref(null);

const TEMPLATE_TAGS = [
    { tag: '{{date}}', label: 'Data / Período do relatório' },
    { tag: '{{total_formatted}}', label: 'Faturamento bruto total' },
    { tag: '{{net_total_formatted}}', label: 'Valor líquido total' },
    { tag: '{{orders_count}}', label: 'Vendas aprovadas' },
    { tag: '{{ticket_medio_formatted}}', label: 'Ticket médio bruto' },
    { tag: '{{ticket_medio_liquido_formatted}}', label: 'Ticket médio líquido' },
    { tag: '{{pending_total_formatted}}', label: 'Valor pendente' },
    { tag: '{{pending_count}}', label: 'Qtd pedidos pendentes' },
    { tag: '{{refunded_count}}', label: 'Qtd reembolsos' },
    { tag: '{{refunded_total_formatted}}', label: 'Valor reembolsado' },
    { tag: '{{payment_methods_text}}', label: 'Formas de pagamento' },
    { tag: '{{products_text}}', label: 'Lista de produtos vendidos (com total)' },
    { tag: '{{products_total_formatted}}', label: 'Total faturado em produtos principais' },
    { tag: '{{products_count}}', label: 'Qtd de produtos principais vendidos' },
    { tag: '{{bumps_section}}', label: 'Seção de Order Bumps (com total)' },
    { tag: '{{bumps_total_formatted}}', label: 'Total faturado em order bumps' },
    { tag: '{{bumps_count}}', label: 'Qtd de order bumps vendidos' },
    { tag: '{{month_name}}', label: 'Nome do mês (relatório mensal)' },
    { tag: '{{year}}', label: 'Ano do relatório' },
];

const currentForm = computed(() => {
    if (activeTab.value === 'weekly') return weeklyForm;
    if (activeTab.value === 'monthly') return monthlyForm;
    return dailyForm;
});

const currentPreview = computed(() => {
    if (activeTab.value === 'weekly') return weeklyPreview.value;
    if (activeTab.value === 'monthly') return monthlyPreview.value;
    return dailyPreview.value;
});

const currentData = computed(() => {
    if (activeTab.value === 'weekly') return weeklyData.value;
    if (activeTab.value === 'monthly') return monthlyData.value;
    return dailyData.value;
});

const currentShowCustom = computed({
    get: () => {
        if (activeTab.value === 'weekly') return showWeeklyCustom.value;
        if (activeTab.value === 'monthly') return showMonthlyCustom.value;
        return showDailyCustom.value;
    },
    set: (val) => {
        if (activeTab.value === 'weekly') {
            showWeeklyCustom.value = val;
        } else if (activeTab.value === 'monthly') {
            showMonthlyCustom.value = val;
        } else {
            showDailyCustom.value = val;
        }
    },
});

async function loadGroups() {
    loadingGroups.value = true;
    try {
        const res = await api.groups();
        groups.value = res.groups || [];
        if (groups.value.length === 0) {
            groupMode.value = 'manual';
        }
    } catch {
        groups.value = [];
        groupMode.value = 'manual';
    } finally {
        loadingGroups.value = false;
    }
}

async function load() {
    loading.value = true;
    error.value = '';
    try {
        const res = await api.dailyReport();

        // Dados diários
        dailyForm.enabled = Boolean(res.config?.enabled);
        dailyForm.time = res.config?.time || '23:59';
        dailyForm.recipient_type = res.config?.recipient_type || 'phone';
        dailyForm.phone = res.config?.phone || '';
        dailyForm.group_id = res.config?.group_id || '';
        dailyForm.custom_template = res.config?.custom_template || '';
        showDailyCustom.value = Boolean(res.config?.custom_template);
        dailyPreview.value = res.preview || '';
        dailyData.value = res.data || null;

        // Dados semanais
        const wkConfig = res.weekly_config || {};
        weeklyForm.enabled = Boolean(wkConfig.enabled);
        weeklyForm.time = wkConfig.time || '23:59';
        weeklyForm.recipient_type = wkConfig.recipient_type || (dailyForm.recipient_type || 'phone');
        weeklyForm.phone = wkConfig.phone || dailyForm.phone || '';
        weeklyForm.group_id = wkConfig.group_id || dailyForm.group_id || '';
        weeklyForm.custom_template = wkConfig.custom_template || '';
        showWeeklyCustom.value = Boolean(wkConfig.custom_template);
        weeklyPreview.value = res.weekly_preview || '';
        weeklyData.value = res.weekly_data || null;

        // Dados mensais
        const moConfig = res.monthly_config || {};
        monthlyForm.enabled = Boolean(moConfig.enabled);
        monthlyForm.time = moConfig.time || '23:59';
        monthlyForm.recipient_type = moConfig.recipient_type || (dailyForm.recipient_type || 'phone');
        monthlyForm.phone = moConfig.phone || dailyForm.phone || '';
        monthlyForm.group_id = moConfig.group_id || dailyForm.group_id || '';
        monthlyForm.custom_template = moConfig.custom_template || '';
        showMonthlyCustom.value = Boolean(moConfig.custom_template);
        monthlyPreview.value = res.monthly_preview || '';
        monthlyData.value = res.monthly_data || null;

        await loadGroups();
    } catch (e) {
        error.value = e.message || 'Falha ao carregar configurações dos relatórios.';
    } finally {
        loading.value = false;
    }
}

async function save() {
    saving.value = true;
    error.value = '';
    notice.value = '';
    try {
        if (activeTab.value === 'daily') {
            const res = await api.saveDailyReport({
                enabled: dailyForm.enabled,
                time: dailyForm.time,
                recipient_type: dailyForm.recipient_type,
                phone: dailyForm.phone,
                group_id: dailyForm.group_id,
                custom_template: showDailyCustom.value ? dailyForm.custom_template : null,
            });
            dailyPreview.value = res.preview || dailyPreview.value;
            notice.value = 'Configurações do relatório diário salvas com sucesso!';
        } else if (activeTab.value === 'weekly') {
            const res = await api.saveWeeklyReport({
                enabled: weeklyForm.enabled,
                time: weeklyForm.time,
                recipient_type: weeklyForm.recipient_type,
                phone: weeklyForm.phone,
                group_id: weeklyForm.group_id,
                custom_template: showWeeklyCustom.value ? weeklyForm.custom_template : null,
            });
            weeklyPreview.value = res.preview || weeklyPreview.value;
            notice.value = 'Configurações do relatório semanal (segunda a domingo) salvas com sucesso!';
        } else {
            const res = await api.saveMonthlyReport({
                enabled: monthlyForm.enabled,
                time: monthlyForm.time,
                recipient_type: monthlyForm.recipient_type,
                phone: monthlyForm.phone,
                group_id: monthlyForm.group_id,
                custom_template: showMonthlyCustom.value ? monthlyForm.custom_template : null,
            });
            monthlyPreview.value = res.preview || monthlyPreview.value;
            notice.value = 'Configurações do relatório mensal (fechamento do mês) salvas com sucesso!';
        }

        setTimeout(() => {
            notice.value = '';
        }, 5000);
    } catch (e) {
        error.value = e.message || 'Erro ao salvar configurações.';
    } finally {
        saving.value = false;
    }
}

async function testSend() {
    const form = currentForm.value;
    if (form.recipient_type === 'group') {
        if (!form.group_id) {
            error.value = 'Selecione ou informe o JID do grupo do WhatsApp antes de testar.';
            return;
        }
    } else {
        if (!form.phone) {
            error.value = 'Informe o número do WhatsApp de destino antes de testar.';
            return;
        }
    }

    testing.value = true;
    error.value = '';
    testSuccess.value = '';

    try {
        if (activeTab.value === 'daily') {
            const res = await api.testDailyReport({
                recipient_type: form.recipient_type,
                phone: form.phone,
                group_id: form.group_id,
            });
            testSuccess.value = res.message || 'Relatório diário de teste enviado para o WhatsApp!';
            if (res.preview) {
                dailyPreview.value = res.preview;
            }
        } else if (activeTab.value === 'weekly') {
            const res = await api.testWeeklyReport({
                recipient_type: form.recipient_type,
                phone: form.phone,
                group_id: form.group_id,
            });
            testSuccess.value = res.message || 'Relatório semanal de teste enviado para o WhatsApp!';
            if (res.preview) {
                weeklyPreview.value = res.preview;
            }
        } else {
            const res = await api.testMonthlyReport({
                recipient_type: form.recipient_type,
                phone: form.phone,
                group_id: form.group_id,
            });
            testSuccess.value = res.message || 'Relatório mensal de teste enviado para o WhatsApp!';
            if (res.preview) {
                monthlyPreview.value = res.preview;
            }
        }

        setTimeout(() => {
            testSuccess.value = '';
        }, 8000);
    } catch (e) {
        error.value = e.message || 'Falha ao disparar relatório de teste.';
    } finally {
        testing.value = false;
    }
}

function insertTag(tag) {
    if (activeTab.value === 'daily') {
        dailyForm.custom_template = (dailyForm.custom_template || '') + ' ' + tag;
    } else if (activeTab.value === 'weekly') {
        weeklyForm.custom_template = (weeklyForm.custom_template || '') + ' ' + tag;
    } else {
        monthlyForm.custom_template = (monthlyForm.custom_template || '') + ' ' + tag;
    }
}

const formattedPreviewLines = computed(() => {
    return (currentPreview.value || '').split('\n');
});

const selectedGroupName = computed(() => {
    if (currentForm.value.recipient_type !== 'group') return '';
    const found = groups.value.find((g) => g.id === currentForm.value.group_id);
    return found ? found.name : (currentForm.value.group_id || 'Grupo de Vendas');
});

onMounted(load);
</script>

<template>
    <div class="mx-auto max-w-6xl space-y-6">
        <!-- Sub-tabs switcher: Diário, Semanal e Mensal -->
        <div class="flex items-center justify-between">
            <div class="inline-flex rounded-2xl border border-zinc-200 bg-zinc-100/80 p-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                <button
                    type="button"
                    class="flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition"
                    :class="activeTab === 'daily'
                        ? 'bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'"
                    @click="activeTab = 'daily'"
                >
                    <Calendar class="h-4 w-4" />
                    <span>Relatório Diário</span>
                </button>

                <button
                    type="button"
                    class="flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition"
                    :class="activeTab === 'weekly'
                        ? 'bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'"
                    @click="activeTab = 'weekly'"
                >
                    <CalendarDays class="h-4 w-4" />
                    <span>Relatório Semanal (Domingos)</span>
                </button>

                <button
                    type="button"
                    class="flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition"
                    :class="activeTab === 'monthly'
                        ? 'bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'"
                    @click="activeTab = 'monthly'"
                >
                    <CalendarRange class="h-4 w-4" />
                    <span>Relatório Mensal (Último Dia)</span>
                </button>
            </div>

            <div class="hidden sm:flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Clock class="h-3.5 w-3.5 text-emerald-500" />
                <span>Horário padrão: <strong>23:59</strong></span>
            </div>
        </div>

        <!-- Top banner -->
        <div class="flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-emerald-500/10 via-zinc-50 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:from-emerald-500/15 dark:via-zinc-900">
            <div class="flex items-center gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400">
                    <BarChart3 v-if="activeTab === 'daily'" class="h-7 w-7" />
                    <CalendarDays v-else-if="activeTab === 'weekly'" class="h-7 w-7" />
                    <CalendarRange v-else class="h-7 w-7" />
                </div>
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        <template v-if="activeTab === 'daily'">Relatório Diário de Vendas no WhatsApp</template>
                        <template v-else-if="activeTab === 'weekly'">Relatório Semanal de Vendas no WhatsApp</template>
                        <template v-else>Relatório Mensal de Vendas no WhatsApp</template>
                    </h2>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        <template v-if="activeTab === 'daily'">
                            Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo de vendas com <strong>faturamento bruto e valor líquido</strong>.
                        </template>
                        <template v-else-if="activeTab === 'weekly'">
                            Receba automaticamente todo <strong>domingo às 23:59</strong> o consolidado de vendas de <strong>segunda-feira a domingo</strong> com faturamento bruto e líquido.
                        </template>
                        <template v-else>
                            Receba automaticamente no <strong>último dia do mês às 23:59</strong> o fechamento consolidado completo de vendas do mês inteiro (1º ao último dia).
                        </template>
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <span class="text-xs font-semibold" :class="currentForm.enabled ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500'">
                    {{ currentForm.enabled ? '● Envio Ativo' : '○ Envio Desativado' }}
                </span>
                <label class="relative inline-flex cursor-pointer items-center">
                    <input v-model="currentForm.enabled" type="checkbox" class="peer sr-only" @change="save">
                    <div class="peer h-6 w-11 rounded-full bg-zinc-300 peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] dark:bg-zinc-700"></div>
                </label>
            </div>
        </div>

        <!-- Alert messages -->
        <div v-if="notice" class="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 class="h-5 w-5 shrink-0" />
            <span>{{ notice }}</span>
        </div>

        <div v-if="testSuccess" class="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            <Send class="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{{ testSuccess }}</span>
        </div>

        <div v-if="error" class="flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-700 dark:text-rose-300">
            <AlertCircle class="h-5 w-5 shrink-0" />
            <span>{{ error }}</span>
        </div>

        <div v-if="loading" class="flex h-64 items-center justify-center">
            <Loader2 class="h-8 w-8 animate-spin text-emerald-500" />
        </div>

        <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <!-- Left: Settings Form -->
            <div class="space-y-6 lg:col-span-7">
                <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                    <h3 class="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
                        <Clock class="h-4 w-4 text-emerald-500" />
                        <template v-if="activeTab === 'daily'">Agendamento & Destino Diário</template>
                        <template v-else-if="activeTab === 'weekly'">Agendamento & Destino Semanal</template>
                        <template v-else>Agendamento & Destino Mensal</template>
                    </h3>
                    <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        <template v-if="activeTab === 'daily'">
                            Defina o horário e para quem o relatório diário consolidado será entregue (número ou grupo).
                        </template>
                        <template v-else-if="activeTab === 'weekly'">
                            O relatório semanal é disparado todo domingo com o acumulado de vendas de segunda a domingo.
                        </template>
                        <template v-else>
                            O relatório mensal é disparado no último dia do mês com o consolidado de vendas do mês inteiro.
                        </template>
                    </p>

                    <div class="mt-6 space-y-4">
                        <!-- Destinatário: Número ou Grupo -->
                        <div>
                            <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                                Enviar Para *
                            </label>
                            <div class="mt-1.5 grid grid-cols-2 gap-2">
                                <button
                                    type="button"
                                    class="flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition"
                                    :class="currentForm.recipient_type === 'phone'
                                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                                        : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900'"
                                    @click="currentForm.recipient_type = 'phone'"
                                >
                                    <Phone class="h-3.5 w-3.5" />
                                    <span>Número Individual</span>
                                </button>

                                <button
                                    type="button"
                                    class="flex items-center justify-center gap-2 rounded-2xl border p-2.5 text-xs font-bold transition"
                                    :class="currentForm.recipient_type === 'group'
                                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                                        : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900'"
                                    @click="() => { currentForm.recipient_type = 'group'; if (!groups.length) loadGroups(); }"
                                >
                                    <Users class="h-3.5 w-3.5" />
                                    <span>Grupo do WhatsApp</span>
                                </button>
                            </div>
                        </div>

                        <!-- Se número individual -->
                        <div v-if="currentForm.recipient_type === 'phone'">
                            <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                                WhatsApp de Destino *
                            </label>
                            <div class="mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900">
                                <Phone class="mr-2.5 h-4 w-4 text-zinc-400" />
                                <input
                                    v-model="currentForm.phone"
                                    type="text"
                                    placeholder="Ex: 5511999998888 ou 11999998888"
                                    class="w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                                />
                            </div>
                            <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                                Seu próprio número com DDD. Aceita formato nacional com ou sem o 55.
                            </p>
                        </div>

                        <!-- Se grupo do WhatsApp -->
                        <div v-else class="space-y-2">
                            <div class="flex items-center justify-between">
                                <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                                    Grupo de Destino *
                                </label>
                                <div class="flex items-center gap-2">
                                    <button
                                        type="button"
                                        class="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 transition hover:underline dark:text-emerald-400"
                                        :disabled="loadingGroups"
                                        @click="loadGroups"
                                    >
                                        <RefreshCw class="h-3 w-3" :class="loadingGroups ? 'animate-spin' : ''" />
                                        <span>Recarregar Grupos</span>
                                    </button>
                                    <span class="text-zinc-300 dark:text-zinc-700">|</span>
                                    <button
                                        type="button"
                                        class="text-[11px] font-semibold text-zinc-600 transition hover:underline dark:text-zinc-400"
                                        @click="groupMode = groupMode === 'list' ? 'manual' : 'list'"
                                    >
                                        {{ groupMode === 'list' ? 'Digitar JID' : 'Escolher da lista' }}
                                    </button>
                                </div>
                            </div>

                            <div v-if="groupMode === 'list' && groups.length > 0">
                                <div class="flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900">
                                    <Users class="mr-2.5 h-4 w-4 text-zinc-400" />
                                    <select
                                        v-model="currentForm.group_id"
                                        class="w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                                    >
                                        <option value="">Selecione um grupo da Evolution GO...</option>
                                        <option v-for="group in groups" :key="group.id" :value="group.id">
                                            {{ group.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div v-else>
                                <div class="flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900">
                                    <Users class="mr-2.5 h-4 w-4 text-zinc-400" />
                                    <input
                                        v-model="currentForm.group_id"
                                        type="text"
                                        placeholder="Ex: 120363025244589234@g.us"
                                        class="w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                                    />
                                </div>
                                <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                                    Insira o JID oficial do grupo do WhatsApp (terminado em <code>@g.us</code>).
                                </p>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                                <template v-if="activeTab === 'daily'">Horário de Disparo Diário *</template>
                                <template v-else-if="activeTab === 'weekly'">Horário de Disparo aos Domingos *</template>
                                <template v-else>Horário de Disparo no Último Dia do Mês *</template>
                            </label>
                            <div class="mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900">
                                <Clock class="mr-2.5 h-4 w-4 text-zinc-400" />
                                <input
                                    v-model="currentForm.time"
                                    type="time"
                                    class="w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                                />
                            </div>
                            <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                                <template v-if="activeTab === 'daily'">
                                    Padrão sugerido: <strong>23:59</strong> (Horário oficial de Brasília). O relatório incluirá todas as vendas das 00:00 até as 23:59 do dia.
                                </template>
                                <template v-else-if="activeTab === 'weekly'">
                                    Padrão sugerido: <strong>23:59 aos domingos</strong>. O relatório consolidará as vendas de <strong>segunda-feira a domingo</strong>.
                                </template>
                                <template v-else>
                                    Padrão sugerido: <strong>23:59 no último dia do mês</strong>. O relatório consolidará as vendas de todo o mês (do dia 1º ao último dia).
                                </template>
                            </p>
                        </div>

                        <!-- Template selection toggle -->
                        <div class="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                            <div class="flex items-center justify-between">
                                <div>
                                    <label class="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Personalizar texto da mensagem</label>
                                    <p class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                        {{ currentShowCustom ? 'Modo personalizado ativo' : 'Usando modelo visual oficial do ZapRei' }}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    class="text-xs font-bold text-emerald-600 transition hover:underline dark:text-emerald-400"
                                    @click="currentShowCustom = !currentShowCustom"
                                >
                                    {{ currentShowCustom ? 'Usar Modelo Padrão' : 'Editar Texto' }}
                                </button>
                            </div>

                            <div v-if="currentShowCustom" class="mt-3 space-y-2">
                                <div class="flex flex-wrap gap-1.5">
                                    <button
                                        v-for="item in TEMPLATE_TAGS"
                                        :key="item.tag"
                                        type="button"
                                        class="rounded-lg bg-zinc-100 px-2 py-1 text-[10px] font-mono text-zinc-700 transition hover:bg-emerald-500/10 hover:text-emerald-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-400"
                                        :title="item.label"
                                        @click="insertTag(item.tag)"
                                    >
                                        {{ item.tag }}
                                    </button>
                                </div>

                                <textarea
                                    v-model="currentForm.custom_template"
                                    rows="10"
                                    placeholder="Digite o texto personalizado para o relatório..."
                                    class="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-3 font-mono text-xs text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                                ></textarea>
                            </div>
                        </div>

                        <!-- Actions -->
                        <div class="flex flex-col gap-2.5 pt-4 sm:flex-row sm:items-center">
                            <button
                                type="button"
                                :disabled="saving"
                                class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-500 disabled:opacity-50"
                                @click="save"
                            >
                                <Loader2 v-if="saving" class="h-4 w-4 animate-spin" />
                                <CheckCircle2 v-else class="h-4 w-4" />
                                Salvar Configurações
                            </button>

                            <button
                                type="button"
                                :disabled="testing || (currentForm.recipient_type === 'group' ? !currentForm.group_id : !currentForm.phone)"
                                class="flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
                                @click="testSend"
                            >
                                <Loader2 v-if="testing" class="h-4 w-4 animate-spin text-emerald-500" />
                                <Send v-else class="h-4 w-4 text-emerald-500" />
                                <span>{{ currentForm.recipient_type === 'group' ? 'Enviar Teste ao Grupo' : 'Enviar Teste' }}</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Snapshot cards: Faturamento Bruto, Valor Líquido, Vendas Aprovadas, Order Bumps -->
                <div v-if="currentData" class="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div class="rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                        <span class="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
                            <template v-if="activeTab === 'daily'">Bruto Hoje</template>
                            <template v-else-if="activeTab === 'weekly'">Bruto Semana</template>
                            <template v-else>Bruto Mês</template>
                        </span>
                        <div class="mt-1 text-sm font-black text-zinc-900 dark:text-white">
                            {{ currentData.total_formatted }}
                        </div>
                    </div>

                    <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 text-center shadow-xs dark:border-emerald-500/30 dark:bg-emerald-500/10">
                        <span class="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase flex items-center justify-center gap-1">
                            <Wallet class="h-3 w-3" />
                            <template v-if="activeTab === 'daily'">Líquido Hoje</template>
                            <template v-else-if="activeTab === 'weekly'">Líquido Semana</template>
                            <template v-else>Líquido Mês</template>
                        </span>
                        <div class="mt-1 text-sm font-black text-emerald-600 dark:text-emerald-400">
                            {{ currentData.net_total_formatted }}
                        </div>
                    </div>

                    <div class="rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                        <span class="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
                            Vendas Aprovadas
                        </span>
                        <div class="mt-1 text-sm font-black text-zinc-900 dark:text-white">
                            {{ currentData.orders_count }}
                        </div>
                    </div>

                    <div class="rounded-2xl border border-zinc-200 bg-white p-3.5 text-center shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                        <span class="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase">
                            Order Bumps
                        </span>
                        <div class="mt-1 text-sm font-black text-zinc-900 dark:text-white">
                            {{ currentData.bumps_count }} ({{ currentData.bumps_total_formatted }})
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: WhatsApp Phone Simulator -->
            <div class="lg:col-span-5">
                <div class="overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800">
                    <!-- WhatsApp Top Bar -->
                    <div class="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
                        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs">
                            <Users v-if="currentForm.recipient_type === 'group'" class="h-4 w-4" />
                            <span v-else>ZR</span>
                        </div>
                        <div class="flex-1">
                            <div class="text-xs font-bold leading-tight">
                                {{ currentForm.recipient_type === 'group' ? selectedGroupName : 'ZapRei Notificações' }}
                            </div>
                            <div class="text-[10px] text-white/70">
                                <template v-if="currentForm.recipient_type === 'group'">grupo do WhatsApp</template>
                                <template v-else-if="activeTab === 'daily'">relatório diário automático</template>
                                <template v-else-if="activeTab === 'weekly'">relatório semanal aos domingos</template>
                                <template v-else>relatório mensal no último dia</template>
                            </div>
                        </div>
                        <Sparkles class="h-4 w-4 text-emerald-300" />
                    </div>

                    <!-- Chat conversation area -->
                    <div class="min-h-[460px] bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]">
                        <!-- Chat Bubble -->
                        <div class="max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100">
                            <div class="font-sans whitespace-pre-wrap select-text">
                                <div v-for="(line, idx) in formattedPreviewLines" :key="idx" class="min-h-[1.2em]">
                                    {{ line }}
                                </div>
                            </div>
                            <div class="mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400">
                                <span>{{ currentForm.time || '23:59' }}</span>
                                <span class="text-[#53bdeb]">✓✓</span>
                            </div>
                        </div>
                    </div>

                    <!-- WhatsApp Footer -->
                    <div class="border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400">
                        <template v-if="activeTab === 'daily'">
                            Disparo automático diário via <strong>Evolution GO</strong> às {{ dailyForm.time }}
                        </template>
                        <template v-else-if="activeTab === 'weekly'">
                            Disparo automático aos <strong>domingos</strong> via <strong>Evolution GO</strong> às {{ weeklyForm.time }} (vendas de segunda a domingo)
                        </template>
                        <template v-else>
                            Disparo automático no <strong>último dia do mês</strong> via <strong>Evolution GO</strong> às {{ monthlyForm.time }} (vendas do mês inteiro)
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
