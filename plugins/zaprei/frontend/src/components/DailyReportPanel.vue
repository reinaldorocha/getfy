<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import {
    AlertCircle,
    ArrowRight,
    BarChart3,
    Calendar,
    CalendarDays,
    CalendarRange,
    CheckCircle2,
    Clock,
    DollarSign,
    History,
    Info,
    Loader2,
    Phone,
    RefreshCw,
    RotateCcw,
    Send,
    Sparkles,
    TrendingUp,
    Users,
    Wallet,
} from 'lucide-vue-next';
import { api } from '../api';

const activeTab = ref('daily'); // 'daily' | 'weekly' | 'monthly' | 'yearly'
const loading = ref(true);
const saving = ref(false);
const testing = ref(false);
const resending = ref(false);
const loadingPeriodPreview = ref(false);
const loadingGroups = ref(false);
const error = ref('');
const notice = ref('');
const testSuccess = ref('');
const resendSuccess = ref('');
const resendError = ref('');

const groups = ref([]);
const groupMode = ref('list'); // 'list' | 'manual'

// Funções auxiliares para datas
function getTodayIso() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getYesterdayIso() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getBeforeYesterdayIso() {
    const d = new Date();
    d.setDate(d.getDate() - 2);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getCurrentMonthIso() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

function getPreviousMonthIso() {
    const d = new Date();
    d.setMonth(d.getMonth() - 1);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

const todayDateString = getTodayIso();
const currentMonthString = getCurrentMonthIso();
const currentYear = new Date().getFullYear();
const recentYears = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];

// Seletores de período de reenvio sob demanda
const selectedDailyDate = ref(getYesterdayIso());
const selectedMonthlyDate = ref(getPreviousMonthIso());
const selectedYearlyDate = ref(currentYear.toString());
const selectedWeeklyPreset = ref('previous_week');

// Reenvio: modo de destino
const resendRecipientMode = ref('default'); // 'default' | 'custom'
const resendCustomType = ref('phone'); // 'phone' | 'group'
const resendCustomPhone = ref('');
const resendCustomGroupId = ref('');

// Estado de prévia customizada (quando o usuário escolhe um dia/mês/ano passado)
const isCustomPeriodActive = ref(false);
const customPeriodPreview = ref('');
const customPeriodData = ref(null);
const customPeriodLabel = ref('');

// Formulários por tipo de relatório
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
    recipient_type: 'phone',
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
    recipient_type: 'phone',
    phone: '',
    group_id: '',
    custom_template: '',
});
const showMonthlyCustom = ref(false);
const monthlyPreview = ref('');
const monthlyData = ref(null);

const yearlyForm = reactive({
    enabled: false,
    time: '23:59',
    recipient_type: 'phone',
    phone: '',
    group_id: '',
    custom_template: '',
});
const showYearlyCustom = ref(false);
const yearlyPreview = ref('');
const yearlyData = ref(null);

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
    if (activeTab.value === 'yearly') return yearlyForm;
    return dailyForm;
});

const currentPreview = computed(() => {
    if (isCustomPeriodActive.value && customPeriodPreview.value) {
        return customPeriodPreview.value;
    }
    if (activeTab.value === 'weekly') return weeklyPreview.value;
    if (activeTab.value === 'monthly') return monthlyPreview.value;
    if (activeTab.value === 'yearly') return yearlyPreview.value;
    return dailyPreview.value;
});

const currentData = computed(() => {
    if (isCustomPeriodActive.value && customPeriodData.value) {
        return customPeriodData.value;
    }
    if (activeTab.value === 'weekly') return weeklyData.value;
    if (activeTab.value === 'monthly') return monthlyData.value;
    if (activeTab.value === 'yearly') return yearlyData.value;
    return dailyData.value;
});

const currentShowCustom = computed({
    get: () => {
        if (activeTab.value === 'weekly') return showWeeklyCustom.value;
        if (activeTab.value === 'monthly') return showMonthlyCustom.value;
        if (activeTab.value === 'yearly') return showYearlyCustom.value;
        return showDailyCustom.value;
    },
    set: (val) => {
        if (activeTab.value === 'weekly') {
            showWeeklyCustom.value = val;
        } else if (activeTab.value === 'monthly') {
            showMonthlyCustom.value = val;
        } else if (activeTab.value === 'yearly') {
            showYearlyCustom.value = val;
        } else {
            showDailyCustom.value = val;
        }
    },
});

const recipientSummary = computed(() => {
    const form = currentForm.value;
    if (form.recipient_type === 'group') {
        if (!form.group_id) return 'Nenhum grupo configurado';
        const found = groups.value.find((g) => g.id === form.group_id);
        return found ? `Grupo: ${found.name}` : `Grupo: ${form.group_id}`;
    }
    return form.phone ? `WhatsApp: ${form.phone}` : 'Nenhum número configurado';
});

function getSelectedPeriodValue() {
    if (activeTab.value === 'daily') return selectedDailyDate.value;
    if (activeTab.value === 'monthly') return selectedMonthlyDate.value;
    if (activeTab.value === 'yearly') return selectedYearlyDate.value;
    if (activeTab.value === 'weekly') {
        return selectedWeeklyPreset.value === 'previous_week' ? 'last_week' : 'this_week';
    }
    return '';
}

async function loadPeriodPreview() {
    loadingPeriodPreview.value = true;
    resendError.value = '';
    try {
        const periodVal = getSelectedPeriodValue();
        const res = await api.previewReport({
            type: activeTab.value,
            date: periodVal,
        });

        customPeriodPreview.value = res.preview || '';
        customPeriodData.value = res.data || null;
        customPeriodLabel.value = res.date || periodVal;
        isCustomPeriodActive.value = true;
    } catch (e) {
        resendError.value = e.message || 'Falha ao carregar prévia do período selecionado.';
    } finally {
        loadingPeriodPreview.value = false;
    }
}

function resetToCurrent() {
    isCustomPeriodActive.value = false;
    customPeriodPreview.value = '';
    customPeriodData.value = null;
    customPeriodLabel.value = '';
    resendSuccess.value = '';
    resendError.value = '';
}

function setQuickDaily(preset) {
    if (preset === 'today') selectedDailyDate.value = getTodayIso();
    else if (preset === 'yesterday') selectedDailyDate.value = getYesterdayIso();
    else if (preset === 'before_yesterday') selectedDailyDate.value = getBeforeYesterdayIso();
    loadPeriodPreview();
}

function setQuickMonthly(preset) {
    if (preset === 'current') selectedMonthlyDate.value = getCurrentMonthIso();
    else if (preset === 'previous') selectedMonthlyDate.value = getPreviousMonthIso();
    loadPeriodPreview();
}

function setQuickYearly(year) {
    selectedYearlyDate.value = year.toString();
    loadPeriodPreview();
}

function setQuickWeekly(preset) {
    selectedWeeklyPreset.value = preset;
    loadPeriodPreview();
}

function switchTab(tab) {
    activeTab.value = tab;
    resetToCurrent();
}

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

        // Dados anuais
        const yrConfig = res.yearly_config || {};
        yearlyForm.enabled = Boolean(yrConfig.enabled);
        yearlyForm.time = yrConfig.time || '23:59';
        yearlyForm.recipient_type = yrConfig.recipient_type || (dailyForm.recipient_type || 'phone');
        yearlyForm.phone = yrConfig.phone || dailyForm.phone || '';
        yearlyForm.group_id = yrConfig.group_id || dailyForm.group_id || '';
        yearlyForm.custom_template = yrConfig.custom_template || '';
        showYearlyCustom.value = Boolean(yrConfig.custom_template);
        yearlyPreview.value = res.yearly_preview || '';
        yearlyData.value = res.yearly_data || null;

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
        } else if (activeTab.value === 'monthly') {
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
        } else {
            const res = await api.saveYearlyReport({
                enabled: yearlyForm.enabled,
                time: yearlyForm.time,
                recipient_type: yearlyForm.recipient_type,
                phone: yearlyForm.phone,
                group_id: yearlyForm.group_id,
                custom_template: showYearlyCustom.value ? yearlyForm.custom_template : null,
            });
            yearlyPreview.value = res.preview || yearlyPreview.value;
            notice.value = 'Configurações do relatório anual (fechamento de ano) salvas com sucesso!';
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
        } else if (activeTab.value === 'monthly') {
            const res = await api.testMonthlyReport({
                recipient_type: form.recipient_type,
                phone: form.phone,
                group_id: form.group_id,
            });
            testSuccess.value = res.message || 'Relatório mensal de teste enviado para o WhatsApp!';
            if (res.preview) {
                monthlyPreview.value = res.preview;
            }
        } else {
            const res = await api.testYearlyReport({
                recipient_type: form.recipient_type,
                phone: form.phone,
                group_id: form.group_id,
            });
            testSuccess.value = res.message || 'Relatório anual de teste enviado para o WhatsApp!';
            if (res.preview) {
                yearlyPreview.value = res.preview;
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

async function resendReportAction() {
    const isCustomDest = resendRecipientMode.value === 'custom';
    const form = currentForm.value;

    const recipientType = isCustomDest ? resendCustomType.value : form.recipient_type;
    const phone = isCustomDest ? resendCustomPhone.value : form.phone;
    const groupId = isCustomDest ? resendCustomGroupId.value : form.group_id;

    if (recipientType === 'group' && !groupId) {
        resendError.value = 'Selecione ou informe o JID do grupo do WhatsApp de destino para o reenvio.';
        return;
    }
    if (recipientType === 'phone' && !phone) {
        resendError.value = 'Informe o número do WhatsApp de destino para o reenvio.';
        return;
    }

    resending.value = true;
    resendError.value = '';
    resendSuccess.value = '';

    try {
        const periodVal = getSelectedPeriodValue();
        const res = await api.resendReport({
            type: activeTab.value,
            date: periodVal,
            recipient_type: recipientType,
            phone: phone,
            group_id: groupId,
        });

        resendSuccess.value = res.message || 'Relatório reenviado com sucesso para o WhatsApp!';
        if (res.preview) {
            customPeriodPreview.value = res.preview;
            customPeriodData.value = res.data || customPeriodData.value;
            isCustomPeriodActive.value = true;
        }

        setTimeout(() => {
            resendSuccess.value = '';
        }, 10000);
    } catch (e) {
        resendError.value = e.body?.message || e.message || 'Falha ao reenviar relatório. Se a API do WhatsApp estiver offline, verifique a conexão do ZapRei antes de tentar novamente.';
    } finally {
        resending.value = false;
    }
}

function insertTag(tag) {
    if (activeTab.value === 'daily') {
        dailyForm.custom_template = (dailyForm.custom_template || '') + ' ' + tag;
    } else if (activeTab.value === 'weekly') {
        weeklyForm.custom_template = (weeklyForm.custom_template || '') + ' ' + tag;
    } else if (activeTab.value === 'monthly') {
        monthlyForm.custom_template = (monthlyForm.custom_template || '') + ' ' + tag;
    } else {
        yearlyForm.custom_template = (yearlyForm.custom_template || '') + ' ' + tag;
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
        <!-- Sub-tabs switcher: Diário, Semanal, Mensal e Anual -->
        <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="inline-flex flex-wrap rounded-2xl border border-zinc-200 bg-zinc-100/80 p-1.5 dark:border-zinc-800 dark:bg-zinc-900">
                <button
                    type="button"
                    class="flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition"
                    :class="activeTab === 'daily'
                        ? 'bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'"
                    @click="switchTab('daily')"
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
                    @click="switchTab('weekly')"
                >
                    <CalendarDays class="h-4 w-4" />
                    <span>Relatório Semanal</span>
                </button>

                <button
                    type="button"
                    class="flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition"
                    :class="activeTab === 'monthly'
                        ? 'bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'"
                    @click="switchTab('monthly')"
                >
                    <CalendarRange class="h-4 w-4" />
                    <span>Relatório Mensal</span>
                </button>

                <button
                    type="button"
                    class="flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition"
                    :class="activeTab === 'yearly'
                        ? 'bg-white text-emerald-600 shadow-xs dark:bg-zinc-800 dark:text-emerald-400'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'"
                    @click="switchTab('yearly')"
                >
                    <TrendingUp class="h-4 w-4" />
                    <span>Relatório Anual</span>
                </button>
            </div>

            <div class="hidden sm:flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Clock class="h-3.5 w-3.5 text-emerald-500" />
                <span>Horário padrão: <strong>23:59</strong> (Brasília)</span>
            </div>
        </div>

        <!-- Top banner -->
        <div class="flex flex-col gap-4 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-emerald-500/10 via-zinc-50 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:from-emerald-500/15 dark:via-zinc-900">
            <div class="flex items-center gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-600 dark:bg-emerald-500/25 dark:text-emerald-400">
                    <BarChart3 v-if="activeTab === 'daily'" class="h-7 w-7" />
                    <CalendarDays v-else-if="activeTab === 'weekly'" class="h-7 w-7" />
                    <CalendarRange v-else-if="activeTab === 'monthly'" class="h-7 w-7" />
                    <TrendingUp v-else class="h-7 w-7" />
                </div>
                <div>
                    <h2 class="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        <template v-if="activeTab === 'daily'">Relatório Diário de Vendas no WhatsApp</template>
                        <template v-else-if="activeTab === 'weekly'">Relatório Semanal de Vendas no WhatsApp</template>
                        <template v-else-if="activeTab === 'monthly'">Relatório Mensal de Vendas no WhatsApp</template>
                        <template v-else>Relatório Anual de Vendas no WhatsApp</template>
                    </h2>
                    <p class="text-xs text-zinc-600 dark:text-zinc-400">
                        <template v-if="activeTab === 'daily'">
                            Receba automaticamente todo dia no horário escolhido (ex: 23:59) o resumo de vendas com <strong>faturamento bruto e valor líquido</strong>.
                        </template>
                        <template v-else-if="activeTab === 'weekly'">
                            Receba automaticamente todo <strong>domingo às 23:59</strong> o consolidado de vendas de <strong>segunda-feira a domingo</strong> com faturamento bruto e líquido.
                        </template>
                        <template v-else-if="activeTab === 'monthly'">
                            Receba automaticamente no <strong>último dia do mês às 23:59</strong> o fechamento consolidado completo de vendas do mês inteiro (1º ao último dia).
                        </template>
                        <template v-else>
                            Receba automaticamente no <strong>último dia do ano (31 de dezembro) às 23:59</strong> o fechamento consolidado de vendas de todo o ano.
                        </template>
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-3">
                <span class="text-xs font-semibold" :class="currentForm.enabled ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500'">
                    {{ currentForm.enabled ? '● Envio Automático Ativo' : '○ Envio Automático Desativado' }}
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
            <!-- Left Column: Contingency/Resend Card & Settings Card -->
            <div class="space-y-6 lg:col-span-7">

                <!-- CARD DE REENVIO SOB DEMANDA & CONTINGÊNCIA (Caso a API caia) -->
                <div class="rounded-3xl border border-amber-300/80 bg-gradient-to-b from-amber-500/10 via-white to-white p-6 shadow-sm dark:border-amber-500/30 dark:from-amber-500/15 dark:via-zinc-900 dark:bg-zinc-900">
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="inline-flex items-center gap-1.5 rounded-xl bg-amber-500/20 px-2.5 py-1 text-[11px] font-bold text-amber-800 dark:bg-amber-500/25 dark:text-amber-300">
                                    <RefreshCw class="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                                    <span>Contingência de API & Reenvio sob Demanda</span>
                                </span>
                            </div>
                            <h3 class="mt-2 text-sm font-bold text-zinc-900 dark:text-white">
                                <template v-if="activeTab === 'daily'">Reenviar Relatório do Dia (Escolher Data)</template>
                                <template v-else-if="activeTab === 'weekly'">Reenviar Relatório Semanal</template>
                                <template v-else-if="activeTab === 'monthly'">Reenviar Relatório do Mês (Escolher Mês/Ano)</template>
                                <template v-else>Reenviar Relatório do Ano (Escolher Ano)</template>
                            </h3>
                            <p class="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                                A API do WhatsApp caiu ou precisa reenviar vendas passadas? Escolha o período abaixo para visualizar e disparar imediatamente.
                            </p>
                        </div>
                    </div>

                    <!-- Mensagens de Sucesso ou Erro do Reenvio -->
                    <div v-if="resendSuccess" class="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-3.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                        <CheckCircle2 class="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span>{{ resendSuccess }}</span>
                    </div>

                    <div v-if="resendError" class="mt-4 flex items-start gap-3 rounded-2xl border border-rose-500/40 bg-rose-500/15 p-3.5 text-xs font-semibold text-rose-800 dark:text-rose-300">
                        <AlertCircle class="h-5 w-5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                        <div class="space-y-1">
                            <div>{{ resendError }}</div>
                            <div class="text-[11px] font-normal text-rose-700/80 dark:text-rose-300/80">
                                Dica: Verifique na aba <strong>Conexão</strong> se a instância da Evolution GO está online e conectada ao WhatsApp antes de reenviar.
                            </div>
                        </div>
                    </div>

                    <!-- Seletor do Período -->
                    <div class="mt-5 rounded-2xl border border-amber-200/60 bg-amber-50/50 p-4 dark:border-amber-500/20 dark:bg-amber-950/20">
                        <!-- DIÁRIO: Seletor de dia -->
                        <div v-if="activeTab === 'daily'" class="space-y-3">
                            <div class="flex items-center justify-between">
                                <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                    Escolher o Dia para Reenviar
                                </label>
                                <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                    Selecione qualquer data no calendário
                                </span>
                            </div>

                            <!-- Atalhos rápidos para Diário -->
                            <div class="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedDailyDate === todayDateString
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickDaily('today')"
                                >
                                    Hoje
                                </button>
                                <button
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedDailyDate === getYesterdayIso()
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickDaily('yesterday')"
                                >
                                    Ontem
                                </button>
                                <button
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedDailyDate === getBeforeYesterdayIso()
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickDaily('before_yesterday')"
                                >
                                    Anteontem
                                </button>
                            </div>

                            <div class="flex items-center gap-2">
                                <div class="flex flex-1 items-center rounded-2xl border border-zinc-200 bg-white px-3.5 py-2 dark:border-zinc-700 dark:bg-zinc-900">
                                    <Calendar class="mr-2.5 h-4 w-4 text-amber-500" />
                                    <input
                                        v-model="selectedDailyDate"
                                        type="date"
                                        :max="todayDateString"
                                        class="w-full bg-transparent text-xs font-semibold text-zinc-900 focus:outline-none dark:text-white"
                                        @change="loadPeriodPreview"
                                    />
                                </div>
                                <button
                                    type="button"
                                    :disabled="loadingPeriodPreview"
                                    class="flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                                    @click="loadPeriodPreview"
                                >
                                    <Loader2 v-if="loadingPeriodPreview" class="h-3.5 w-3.5 animate-spin text-amber-500" />
                                    <RefreshCw v-else class="h-3.5 w-3.5 text-amber-500" />
                                    <span>Visualizar</span>
                                </button>
                            </div>
                        </div>

                        <!-- MENSAL: Seletor de mês/ano -->
                        <div v-else-if="activeTab === 'monthly'" class="space-y-3">
                            <div class="flex items-center justify-between">
                                <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                    Escolher o Mês para Reenviar
                                </label>
                                <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                    Consolida vendas do dia 1º ao último dia do mês
                                </span>
                            </div>

                            <!-- Atalhos rápidos para Mensal -->
                            <div class="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedMonthlyDate === currentMonthString
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickMonthly('current')"
                                >
                                    Mês Atual
                                </button>
                                <button
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedMonthlyDate === getPreviousMonthIso()
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickMonthly('previous')"
                                >
                                    Mês Anterior
                                </button>
                            </div>

                            <div class="flex items-center gap-2">
                                <div class="flex flex-1 items-center rounded-2xl border border-zinc-200 bg-white px-3.5 py-2 dark:border-zinc-700 dark:bg-zinc-900">
                                    <CalendarRange class="mr-2.5 h-4 w-4 text-amber-500" />
                                    <input
                                        v-model="selectedMonthlyDate"
                                        type="month"
                                        :max="currentMonthString"
                                        class="w-full bg-transparent text-xs font-semibold text-zinc-900 focus:outline-none dark:text-white"
                                        @change="loadPeriodPreview"
                                    />
                                </div>
                                <button
                                    type="button"
                                    :disabled="loadingPeriodPreview"
                                    class="flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                                    @click="loadPeriodPreview"
                                >
                                    <Loader2 v-if="loadingPeriodPreview" class="h-3.5 w-3.5 animate-spin text-amber-500" />
                                    <RefreshCw v-else class="h-3.5 w-3.5 text-amber-500" />
                                    <span>Visualizar</span>
                                </button>
                            </div>
                        </div>

                        <!-- ANUAL: Seletor de ano -->
                        <div v-else-if="activeTab === 'yearly'" class="space-y-3">
                            <div class="flex items-center justify-between">
                                <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                    Escolher o Ano para Reenviar
                                </label>
                                <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                    Consolida vendas de 01/01 a 31/12
                                </span>
                            </div>

                            <!-- Atalhos rápidos para Anual -->
                            <div class="flex flex-wrap gap-2">
                                <button
                                    v-for="yr in recentYears"
                                    :key="yr"
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedYearlyDate === yr.toString()
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickYearly(yr)"
                                >
                                    Ano {{ yr }}
                                </button>
                            </div>

                            <div class="flex items-center gap-2">
                                <div class="flex flex-1 items-center rounded-2xl border border-zinc-200 bg-white px-3.5 py-2 dark:border-zinc-700 dark:bg-zinc-900">
                                    <TrendingUp class="mr-2.5 h-4 w-4 text-amber-500" />
                                    <select
                                        v-model="selectedYearlyDate"
                                        class="w-full bg-transparent text-xs font-semibold text-zinc-900 focus:outline-none dark:text-white"
                                        @change="loadPeriodPreview"
                                    >
                                        <option v-for="yr in recentYears" :key="yr" :value="yr.toString()">
                                            Ano {{ yr }} (01/01 a 31/12)
                                        </option>
                                    </select>
                                </div>
                                <button
                                    type="button"
                                    :disabled="loadingPeriodPreview"
                                    class="flex items-center gap-1.5 rounded-2xl border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-bold text-zinc-700 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                                    @click="loadPeriodPreview"
                                >
                                    <Loader2 v-if="loadingPeriodPreview" class="h-3.5 w-3.5 animate-spin text-amber-500" />
                                    <RefreshCw v-else class="h-3.5 w-3.5 text-amber-500" />
                                    <span>Visualizar</span>
                                </button>
                            </div>
                        </div>

                        <!-- SEMANAL: Seletor de semana -->
                        <div v-else class="space-y-3">
                            <div class="flex items-center justify-between">
                                <label class="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                    Escolher Semana para Reenviar
                                </label>
                                <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                    Consolida de segunda a domingo
                                </span>
                            </div>

                            <div class="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedWeeklyPreset === 'previous_week'
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickWeekly('previous_week')"
                                >
                                    Semana Passada (Fechada)
                                </button>
                                <button
                                    type="button"
                                    class="rounded-xl border px-3 py-1.5 text-xs font-bold transition"
                                    :class="selectedWeeklyPreset === 'this_week'
                                        ? 'border-amber-500 bg-amber-500 text-white shadow-xs'
                                        : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'"
                                    @click="setQuickWeekly('this_week')"
                                >
                                    Esta Semana (Em Andamento)
                                </button>
                            </div>
                        </div>

                        <!-- Banner de modo de visualização ativa do reenvio -->
                        <div v-if="isCustomPeriodActive" class="mt-3 flex items-center justify-between rounded-xl border border-amber-300 bg-amber-100/60 px-3 py-2 text-xs text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300">
                            <span class="flex items-center gap-1.5 font-semibold">
                                <Sparkles class="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                                Visualizando dados de: <strong>{{ customPeriodLabel }}</strong>
                            </span>
                            <button
                                type="button"
                                class="flex items-center gap-1 text-[11px] font-bold text-amber-800 hover:underline dark:text-amber-300"
                                @click="resetToCurrent"
                            >
                                <RotateCcw class="h-3 w-3" />
                                <span>Voltar ao tempo real</span>
                            </button>
                        </div>
                    </div>

                    <!-- Destino do Reenvio -->
                    <div class="mt-4 space-y-3">
                        <div class="flex items-center justify-between">
                            <label class="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                                Para Onde Reenviar?
                            </label>
                            <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
                                {{ resendRecipientMode === 'default' ? 'Usando destino configurado' : 'Destino personalizado' }}
                            </span>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <button
                                type="button"
                                class="flex items-center gap-2 rounded-2xl border p-2.5 text-left text-xs font-semibold transition"
                                :class="resendRecipientMode === 'default'
                                    ? 'border-amber-500 bg-amber-500/10 text-amber-800 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-300'
                                    : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400'"
                                @click="resendRecipientMode = 'default'"
                            >
                                <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-400 font-bold text-[10px]">
                                    ✓
                                </div>
                                <div class="truncate">
                                    <div class="text-[11px] font-bold">Destinatário Padrão</div>
                                    <div class="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">{{ recipientSummary }}</div>
                                </div>
                            </button>

                            <button
                                type="button"
                                class="flex items-center gap-2 rounded-2xl border p-2.5 text-left text-xs font-semibold transition"
                                :class="resendRecipientMode === 'custom'
                                    ? 'border-amber-500 bg-amber-500/10 text-amber-800 dark:border-amber-500 dark:bg-amber-500/20 dark:text-amber-300'
                                    : 'border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400'"
                                @click="resendRecipientMode = 'custom'"
                            >
                                <div class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold text-[10px]">
                                    +
                                </div>
                                <div class="truncate">
                                    <div class="text-[11px] font-bold">Outro Destino (Teste)</div>
                                    <div class="text-[10px] text-zinc-500 dark:text-zinc-400">Digitar outro número ou grupo</div>
                                </div>
                            </button>
                        </div>

                        <!-- Campos quando selecionado destino customizado -->
                        <div v-if="resendRecipientMode === 'custom'" class="pt-2 space-y-2 border-t border-zinc-100 dark:border-zinc-800">
                            <div class="flex items-center gap-4">
                                <label class="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                    <input v-model="resendCustomType" type="radio" value="phone" class="text-amber-600" />
                                    <span>WhatsApp Individual</span>
                                </label>
                                <label class="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                                    <input v-model="resendCustomType" type="radio" value="group" class="text-amber-600" />
                                    <span>Grupo de WhatsApp</span>
                                </label>
                            </div>

                            <div v-if="resendCustomType === 'phone'" class="flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 dark:border-zinc-800 dark:bg-zinc-950">
                                <Phone class="mr-2.5 h-4 w-4 text-zinc-400" />
                                <input
                                    v-model="resendCustomPhone"
                                    type="text"
                                    placeholder="Ex: 5511999998888 ou 11999998888"
                                    class="w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                                />
                            </div>

                            <div v-else class="flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3.5 py-2 dark:border-zinc-800 dark:bg-zinc-950">
                                <Users class="mr-2.5 h-4 w-4 text-zinc-400" />
                                <input
                                    v-model="resendCustomGroupId"
                                    type="text"
                                    placeholder="Ex: 120363025244589234@g.us"
                                    class="w-full bg-transparent text-xs text-zinc-900 focus:outline-none dark:text-white"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Botão de Ação Destacado: Reenviar Agora -->
                    <div class="mt-5">
                        <button
                            type="button"
                            :disabled="resending || loadingPeriodPreview"
                            class="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 px-5 py-3.5 text-xs font-bold text-white shadow-sm transition hover:from-amber-500 hover:to-amber-400 disabled:opacity-50"
                            @click="resendReportAction"
                        >
                            <Loader2 v-if="resending" class="h-4 w-4 animate-spin text-white" />
                            <RefreshCw v-else class="h-4 w-4 text-white" />
                            <span>
                                <template v-if="resending">Disparando para o WhatsApp...</template>
                                <template v-else-if="activeTab === 'daily'">Reenviar Relatório do Dia Escolhido</template>
                                <template v-else-if="activeTab === 'weekly'">Reenviar Relatório Semanal</template>
                                <template v-else-if="activeTab === 'monthly'">Reenviar Relatório Mensal Escolhido</template>
                                <template v-else>Reenviar Relatório Anual Escolhido</template>
                            </span>
                        </button>
                    </div>
                </div>

                <!-- CARD DE AGENDAMENTO AUTOMÁTICO & DESTINO PADRÃO -->
                <div class="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                    <h3 class="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-white">
                        <Clock class="h-4 w-4 text-emerald-500" />
                        <template v-if="activeTab === 'daily'">Agendamento & Destino Diário Automático</template>
                        <template v-else-if="activeTab === 'weekly'">Agendamento & Destino Semanal Automático</template>
                        <template v-else-if="activeTab === 'monthly'">Agendamento & Destino Mensal Automático</template>
                        <template v-else>Agendamento & Destino Anual Automático</template>
                    </h3>
                    <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                        <template v-if="activeTab === 'daily'">
                            Defina o horário e para quem o relatório diário consolidado será entregue diariamente (número ou grupo).
                        </template>
                        <template v-else-if="activeTab === 'weekly'">
                            O relatório semanal é disparado todo domingo com o acumulado de vendas de segunda a domingo.
                        </template>
                        <template v-else-if="activeTab === 'monthly'">
                            O relatório mensal é disparado no último dia do mês com o consolidado de vendas do mês inteiro.
                        </template>
                        <template v-else>
                            O relatório anual é disparado no dia 31 de dezembro com o fechamento anual consolidado.
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
                                <template v-else-if="activeTab === 'monthly'">Horário de Disparo no Último Dia do Mês *</template>
                                <template v-else>Horário de Disparo em 31 de Dezembro *</template>
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
                                <template v-else-if="activeTab === 'monthly'">
                                    Padrão sugerido: <strong>23:59 no último dia do mês</strong>. O relatório consolidará as vendas de todo o mês (do dia 1º ao último dia).
                                </template>
                                <template v-else>
                                    Padrão sugerido: <strong>23:59 no dia 31 de dezembro</strong>. O relatório consolidará as vendas de todo o ano.
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
                            <template v-if="isCustomPeriodActive">Bruto do Período</template>
                            <template v-else-if="activeTab === 'daily'">Bruto Hoje</template>
                            <template v-else-if="activeTab === 'weekly'">Bruto Semana</template>
                            <template v-else-if="activeTab === 'monthly'">Bruto Mês</template>
                            <template v-else>Bruto Ano</template>
                        </span>
                        <div class="mt-1 text-sm font-black text-zinc-900 dark:text-white">
                            {{ currentData.total_formatted }}
                        </div>
                    </div>

                    <div class="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 text-center shadow-xs dark:border-emerald-500/30 dark:bg-emerald-500/10">
                        <span class="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase flex items-center justify-center gap-1">
                            <Wallet class="h-3 w-3" />
                            <template v-if="isCustomPeriodActive">Líquido do Período</template>
                            <template v-else-if="activeTab === 'daily'">Líquido Hoje</template>
                            <template v-else-if="activeTab === 'weekly'">Líquido Semana</template>
                            <template v-else-if="activeTab === 'monthly'">Líquido Mês</template>
                            <template v-else>Líquido Ano</template>
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

            <!-- Right Column: WhatsApp Phone Simulator -->
            <div class="lg:col-span-5">
                <div class="sticky top-6 overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-900 shadow-xl dark:border-zinc-800">
                    <!-- WhatsApp Top Bar -->
                    <div class="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
                        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold text-xs">
                            <Users v-if="currentForm.recipient_type === 'group'" class="h-4 w-4" />
                            <span v-else>ZR</span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="text-xs font-bold leading-tight truncate">
                                {{ currentForm.recipient_type === 'group' ? selectedGroupName : 'ZapRei Notificações' }}
                            </div>
                            <div class="text-[10px] text-white/70 truncate">
                                <template v-if="isCustomPeriodActive">
                                    ⚡ reenvio sob demanda: {{ customPeriodLabel }}
                                </template>
                                <template v-else-if="currentForm.recipient_type === 'group'">
                                    grupo do WhatsApp
                                </template>
                                <template v-else-if="activeTab === 'daily'">
                                    relatório diário automático
                                </template>
                                <template v-else-if="activeTab === 'weekly'">
                                    relatório semanal aos domingos
                                </template>
                                <template v-else-if="activeTab === 'monthly'">
                                    relatório mensal no último dia
                                </template>
                                <template v-else>
                                    relatório anual em 31/12
                                </template>
                            </div>
                        </div>
                        <Sparkles class="h-4 w-4 text-emerald-300 shrink-0" />
                    </div>

                    <!-- Chat conversation area -->
                    <div class="min-h-[460px] max-h-[580px] overflow-y-auto bg-[#efeae2] p-4 font-sans text-zinc-800 dark:bg-[#0b141a]">
                        <!-- Chat Bubble -->
                        <div class="max-w-[92%] rounded-2xl rounded-tl-xs bg-white p-3.5 shadow-sm text-xs leading-relaxed text-zinc-800 dark:bg-[#202c33] dark:text-zinc-100">
                            <div class="font-sans whitespace-pre-wrap select-text">
                                <div v-for="(line, idx) in formattedPreviewLines" :key="idx" class="min-h-[1.2em]">
                                    {{ line }}
                                </div>
                            </div>
                            <div class="mt-2 flex items-center justify-end gap-1 text-[9px] text-zinc-400">
                                <span>{{ isCustomPeriodActive ? 'Reenvio' : (currentForm.time || '23:59') }}</span>
                                <span class="text-[#53bdeb]">✓✓</span>
                            </div>
                        </div>
                    </div>

                    <!-- WhatsApp Footer -->
                    <div class="border-t border-zinc-200/20 bg-[#f0f2f5] px-4 py-2.5 text-center text-[11px] text-zinc-500 dark:bg-[#111b21] dark:text-zinc-400">
                        <template v-if="isCustomPeriodActive">
                            Prévia de reenvio para <strong>{{ customPeriodLabel }}</strong> via <strong>Evolution GO</strong>
                        </template>
                        <template v-else-if="activeTab === 'daily'">
                            Disparo automático diário via <strong>Evolution GO</strong> às {{ dailyForm.time }}
                        </template>
                        <template v-else-if="activeTab === 'weekly'">
                            Disparo automático aos <strong>domingos</strong> via <strong>Evolution GO</strong> às {{ weeklyForm.time }} (segunda a domingo)
                        </template>
                        <template v-else-if="activeTab === 'monthly'">
                            Disparo automático no <strong>último dia do mês</strong> via <strong>Evolution GO</strong> às {{ monthlyForm.time }} (mês inteiro)
                        </template>
                        <template v-else>
                            Disparo automático no <strong>dia 31 de dezembro</strong> via <strong>Evolution GO</strong> às {{ yearlyForm.time }} (ano inteiro)
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
