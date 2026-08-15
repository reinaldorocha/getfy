<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import axios from 'axios';
import {
    X,
    Send,
    Users,
    MessageSquare,
    CheckCircle2,
    Search,
    Filter,
    Clock,
    Calendar,
    Sparkles,
    ShieldCheck,
    AlertCircle,
    ArrowRight,
    ArrowLeft,
    Check,
    Loader2,
    Phone,
    Zap,
} from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
    open: { type: Boolean, default: false },
    initialSelectedKeys: { type: Array, default: () => [] },
    availableProducts: { type: Array, default: () => [] },
});

const emit = defineEmits(['close', 'created']);

const step = ref(1);
const saving = ref(false);
const errorMessage = ref('');

// Step 1: Config Form
const form = ref({
    name: '',
    autozap_connection_id: null,
    throttle_seconds: 5,
    schedule_mode: 'immediate', // 'immediate' | 'scheduled'
    scheduled_at: '',
    message: 'Olá {{primeiro_nome}}, temos uma novidade especial sobre o {{produto}} para você!',
    product_ids: [],
    selected_contact_keys: [],
    audience_filter: {
        origin: 'all',
        search: '',
    },
});

const connections = ref([]);
const connectionsLoading = ref(false);

// Step 2: Contact Search & Segmentation State
const contacts = ref([]);
const contactsLoading = ref(false);
const contactSearch = ref('');
const originFilter = ref('all');
const selectedProductFilter = ref([]);
const selectAllMode = ref(true);

// Data mínima para agendamento (formato YYYY-MM-DDTHH:mm)
const minScheduledDate = computed(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 2); // mínimo 2 minutos no futuro
    return now.toISOString().slice(0, 16);
});

// Carregar conexões ativas
async function loadConnections() {
    connectionsLoading.value = true;
    try {
        const res = await axios.get('/autozap/connection');
        if (res.data.success && res.data.connection) {
            connections.value = [res.data.connection];
            if (!form.value.autozap_connection_id && res.data.connection.id) {
                form.value.autozap_connection_id = res.data.connection.id;
            }
        }
    } catch (e) {
        console.error('Erro ao carregar conexões:', e);
    } finally {
        connectionsLoading.value = false;
    }
}

// Carregar contatos para segmentação
async function loadContacts() {
    contactsLoading.value = true;
    try {
        const res = await axios.get('/autozap/contacts', {
            params: {
                search: contactSearch.value || undefined,
                origin: originFilter.value || undefined,
                product_ids: selectedProductFilter.value.length ? selectedProductFilter.value : undefined,
            },
        });

        if (res.data.success) {
            contacts.value = res.data.data || [];

            // Se estiver no modo selecionar todos, auto-seleciona todos os retornados
            if (selectAllMode.value && !form.value.selected_contact_keys.length) {
                form.value.selected_contact_keys = contacts.value.map((c) => c.key);
            }
        }
    } catch (e) {
        console.error('Erro ao carregar contatos:', e);
    } finally {
        contactsLoading.value = false;
    }
}

watch(
    () => props.open,
    (val) => {
        if (val) {
            step.value = 1;
            errorMessage.value = '';
            form.value.schedule_mode = 'immediate';
            form.value.scheduled_at = '';
            loadConnections();
            if (props.initialSelectedKeys?.length) {
                form.value.selected_contact_keys = [...props.initialSelectedKeys];
                selectAllMode.value = false;
            }
            loadContacts();
        }
    }
);

// Toggle seleção individual
function toggleContactSelection(key) {
    const idx = form.value.selected_contact_keys.indexOf(key);
    if (idx > -1) {
        form.value.selected_contact_keys.splice(idx, 1);
        selectAllMode.value = false;
    } else {
        form.value.selected_contact_keys.push(key);
    }
}

function selectAllContacts() {
    form.value.selected_contact_keys = contacts.value.map((c) => c.key);
    selectAllMode.value = true;
}

function deselectAllContacts() {
    form.value.selected_contact_keys = [];
    selectAllMode.value = false;
}

// Inserir tag de variável no editor de texto
function insertTag(tag) {
    form.value.message += ' ' + tag;
}

// Prévia dinâmica com dados do primeiro contato selecionado
const previewContact = computed(() => {
    if (!contacts.value.length) {
        return { name: 'João Silva', phone: '5511999998888', email: 'joao@email.com', product: 'Curso VIP' };
    }
    const selected = contacts.value.find((c) => form.value.selected_contact_keys.includes(c.key)) || contacts.value[0];
    const prodName = selected?.products?.[0]?.name || 'Produto Principal';
    return {
        name: selected?.name || 'João Silva',
        phone: selected?.phone || '5511999998888',
        email: selected?.email || 'joao@email.com',
        product: prodName,
    };
});

const renderedPreviewMessage = computed(() => {
    let msg = form.value.message || '';
    const name = previewContact.value.name;
    const firstName = name.split(' ')[0] || name;
    const email = previewContact.value.email;
    const phone = previewContact.value.phone;
    const prod = previewContact.value.product;

    return msg
        .replace(/{{nome}}|{nome}|{{name}}|{name}/g, name)
        .replace(/{{primeiro_nome}}|{primeiro_nome}|{{first_name}}|{first_name}/g, firstName)
        .replace(/{{email}}|{email}/g, email)
        .replace(/{{telefone}}|{telefone}|{{phone}}|{phone}/g, phone)
        .replace(/{{produto}}|{produto}|{{product}}|{product}|{{produtos}}|{produtos}/g, prod);
});

// Avançar etapas com validação
function nextStep() {
    errorMessage.value = '';
    if (step.value === 1) {
        if (!form.value.name.trim()) {
            errorMessage.value = 'Informe um nome para a campanha.';
            return;
        }
        if (!form.value.autozap_connection_id) {
            errorMessage.value = 'Selecione uma instância de WhatsApp conectada.';
            return;
        }
        if (form.value.schedule_mode === 'scheduled') {
            if (!form.value.scheduled_at) {
                errorMessage.value = 'Selecione a data e horário para o agendamento da campanha.';
                return;
            }
            const target = new Date(form.value.scheduled_at);
            if (target <= new Date()) {
                errorMessage.value = 'A data de agendamento deve ser no futuro.';
                return;
            }
        }
    } else if (step.value === 2) {
        if (!form.value.selected_contact_keys.length) {
            errorMessage.value = 'Selecione ao menos um destinatário para o disparo.';
            return;
        }
    } else if (step.value === 3) {
        if (!form.value.message.trim()) {
            errorMessage.value = 'Escreva o texto da mensagem.';
            return;
        }
    }
    step.value++;
}

async function submitCampaign() {
    saving.value = true;
    errorMessage.value = '';

    try {
        const payload = {
            name: form.value.name,
            message: form.value.message,
            autozap_connection_id: form.value.autozap_connection_id,
            product_ids: selectedProductFilter.value,
            selected_contact_keys: form.value.selected_contact_keys,
            audience_filter: {
                origin: originFilter.value,
                search: contactSearch.value,
            },
            throttle_seconds: form.value.throttle_seconds,
            schedule_mode: form.value.schedule_mode,
            scheduled_at: form.value.schedule_mode === 'scheduled' ? form.value.scheduled_at : null,
        };

        const res = await axios.post('/autozap/campaigns', payload);
        if (res.data.success) {
            emit('created', res.data.campaign);
            emit('close');
        } else {
            errorMessage.value = res.data.message || 'Erro ao criar campanha.';
        }
    } catch (e) {
        errorMessage.value = e.response?.data?.message || 'Falha ao salvar e iniciar campanha.';
    } finally {
        saving.value = false;
    }
}
</script>

<template>
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden">
            <!-- Header -->
            <div class="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/40">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Send class="w-5 h-5" />
                    </div>
                    <div>
                        <h3 class="font-bold text-white text-base">Criar Nova Campanha WhatsApp</h3>
                        <p class="text-xs text-zinc-400">Disparo em massa imediato ou agendado com proteção anti-bloqueio</p>
                    </div>
                </div>

                <!-- Step indicator -->
                <div class="flex items-center gap-2">
                    <div
                        v-for="s in 4"
                        :key="s"
                        :class="[
                            'w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition',
                            step === s ? 'bg-emerald-500 text-zinc-950' : (step > s ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-zinc-800 text-zinc-500')
                        ]"
                    >
                        <Check v-if="step > s" class="w-3.5 h-3.5" />
                        <span v-else>{{ s }}</span>
                    </div>
                </div>
            </div>

            <!-- Error banner -->
            <div v-if="errorMessage" class="px-6 py-2.5 bg-red-500/10 border-b border-red-500/20 text-red-400 text-xs font-medium flex items-center gap-2">
                <AlertCircle class="w-4 h-4 shrink-0" />
                <span>{{ errorMessage }}</span>
            </div>

            <!-- Body Steps -->
            <div class="flex-1 overflow-y-auto p-6">
                <!-- STEP 1: Configuração Básica & Agendamento -->
                <div v-if="step === 1" class="space-y-5 max-w-xl mx-auto py-2">
                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">Nome da Campanha *</label>
                        <input
                            v-model="form.name"
                            type="text"
                            placeholder="Ex: Oferta Especial Black Friday - Compradores PMMA"
                            class="w-full bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                        />
                        <p class="text-[11px] text-zinc-500 mt-1">Identificador interno para relatórios e histórico.</p>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-zinc-300 mb-1.5">Instância / Conexão WhatsApp *</label>
                        <select
                            v-model="form.autozap_connection_id"
                            class="w-full bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                        >
                            <option :value="null" disabled>Selecione a conexão do WhatsApp...</option>
                            <option v-for="conn in connections" :key="conn.id" :value="conn.id">
                                {{ conn.name || conn.driver || conn.provider }} • {{ (conn.provider || conn.driver || 'WHATSAPP').toUpperCase() }} (Conectado)
                            </option>
                        </select>
                        <p v-if="!connections.length" class="text-[11px] text-amber-400 mt-1 flex items-center gap-1">
                            <AlertCircle class="w-3.5 h-3.5" />
                            Nenhum WhatsApp conectado. Configure sua conexão na aba "Conexões".
                        </p>
                    </div>

                    <!-- Modo de Disparo (Imediato vs Agendado) -->
                    <div class="space-y-2">
                        <label class="block text-xs font-semibold text-zinc-300">Programação de Envio *</label>
                        <div class="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                @click="form.schedule_mode = 'immediate'"
                                :class="[
                                    'p-3.5 rounded-xl border text-left transition flex flex-col justify-between',
                                    form.schedule_mode === 'immediate'
                                        ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-sm'
                                        : 'border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700'
                                ]"
                            >
                                <div class="flex items-center gap-2">
                                    <Zap class="w-4 h-4 text-emerald-400" />
                                    <span class="text-xs font-bold">Disparo Imediato</span>
                                </div>
                                <p class="text-[10px] text-zinc-400 mt-1">Inicia o envio assim que confirmar.</p>
                            </button>

                            <button
                                type="button"
                                @click="form.schedule_mode = 'scheduled'"
                                :class="[
                                    'p-3.5 rounded-xl border text-left transition flex flex-col justify-between',
                                    form.schedule_mode === 'scheduled'
                                        ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-sm'
                                        : 'border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700'
                                ]"
                            >
                                <div class="flex items-center gap-2">
                                    <Calendar class="w-4 h-4 text-emerald-400" />
                                    <span class="text-xs font-bold">Agendar Envio</span>
                                </div>
                                <p class="text-[10px] text-zinc-400 mt-1">Programa data e hora futura.</p>
                            </button>
                        </div>

                        <!-- Date Time Picker for Scheduled Campaign -->
                        <div v-if="form.schedule_mode === 'scheduled'" class="mt-3 p-4 rounded-xl bg-zinc-950/80 border border-emerald-500/30 animate-in fade-in space-y-2">
                            <label class="block text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                                <Clock class="w-3.5 h-3.5" />
                                Data e Horário de Início do Disparo *
                            </label>
                            <input
                                v-model="form.scheduled_at"
                                type="datetime-local"
                                :min="minScheduledDate"
                                class="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                            />
                            <p class="text-[11px] text-zinc-400">
                                A campanha ficará com status <strong class="text-purple-400">Agendada</strong> e a fila iniciará automaticamente no momento programado.
                            </p>
                        </div>
                    </div>

                    <!-- Throttle Anti-bloqueio -->
                    <div class="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/60 space-y-3">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <ShieldCheck class="w-4 h-4 text-emerald-400" />
                                <label class="text-xs font-semibold text-white">Intervalo Médio Anti-Bloqueio</label>
                            </div>
                            <span class="text-xs font-bold text-emerald-400">{{ form.throttle_seconds }} segundos</span>
                        </div>
                        <input
                            v-model.number="form.throttle_seconds"
                            type="range"
                            min="3"
                            max="30"
                            step="1"
                            class="w-full accent-emerald-500 cursor-pointer"
                        />
                        <p class="text-[11px] text-zinc-400">
                            Espaçamento aleatório entre cada mensagem enviada para simular digitação humana e evitar bloqueios.
                        </p>
                    </div>
                </div>

                <!-- STEP 2: Segmentação & Destinatários -->
                <div v-else-if="step === 2" class="space-y-4">
                    <!-- Filters bar -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                            <label class="block text-[11px] font-medium text-zinc-400 mb-1">Filtrar por Produto</label>
                            <select
                                v-model="selectedProductFilter"
                                multiple
                                @change="loadContacts"
                                class="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 h-20"
                            >
                                <option v-for="prod in availableProducts" :key="prod.id" :value="String(prod.id)">
                                    {{ prod.name }}
                                </option>
                            </select>
                            <p class="text-[10px] text-zinc-500 mt-0.5">Segure Ctrl para selecionar múltiplos</p>
                        </div>

                        <div>
                            <label class="block text-[11px] font-medium text-zinc-400 mb-1">Origem dos Contatos</label>
                            <select
                                v-model="originFilter"
                                @change="loadContacts"
                                class="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                            >
                                <option value="all">Todos (Compradores + Importados)</option>
                                <option value="buyers">Apenas Compradores do Checkout</option>
                                <option value="imported">Apenas Contatos Importados (CSV)</option>
                            </select>

                            <label class="block text-[11px] font-medium text-zinc-400 mt-2 mb-1">Busca rápida</label>
                            <div class="relative">
                                <Search class="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                                <input
                                    v-model="contactSearch"
                                    @input="loadContacts"
                                    type="text"
                                    placeholder="Nome, telefone..."
                                    class="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                        </div>

                        <!-- Selection Summary Box -->
                        <div class="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 flex flex-col justify-between">
                            <div>
                                <span class="text-[11px] text-zinc-400">Destinatários Selecionados</span>
                                <div class="text-2xl font-black text-emerald-400 mt-0.5">
                                    {{ form.selected_contact_keys.length }}
                                    <span class="text-xs font-normal text-zinc-500">de {{ contacts.length }} filtrados</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 pt-2 border-t border-zinc-800">
                                <button type="button" @click="selectAllContacts" class="text-xs text-emerald-400 hover:underline font-medium">
                                    Selecionar Todos
                                </button>
                                <span class="text-zinc-600">•</span>
                                <button type="button" @click="deselectAllContacts" class="text-xs text-zinc-400 hover:underline">
                                    Desmarcar Todos
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Contact List Table -->
                    <div class="border border-zinc-800 rounded-xl overflow-hidden max-h-72 overflow-y-auto bg-zinc-950/30">
                        <table class="w-full text-left text-xs">
                            <thead class="bg-zinc-900 text-zinc-400 border-b border-zinc-800 font-medium sticky top-0">
                                <tr>
                                    <th class="w-10 px-3 py-2.5 text-center">
                                        <input
                                            type="checkbox"
                                            :checked="form.selected_contact_keys.length === contacts.length && contacts.length > 0"
                                            @change="form.selected_contact_keys.length === contacts.length ? deselectAllContacts() : selectAllContacts()"
                                            class="rounded bg-zinc-800 border-zinc-700 text-emerald-500 focus:ring-0"
                                        />
                                    </th>
                                    <th class="px-3 py-2.5">Nome / Email</th>
                                    <th class="px-3 py-2.5">Telefone</th>
                                    <th class="px-3 py-2.5">Origem</th>
                                    <th class="px-3 py-2.5">Produtos</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60">
                                <tr
                                    v-for="c in contacts"
                                    :key="c.key"
                                    @click="toggleContactSelection(c.key)"
                                    :class="[
                                        'cursor-pointer transition',
                                        form.selected_contact_keys.includes(c.key) ? 'bg-emerald-500/5 hover:bg-emerald-500/10' : 'hover:bg-zinc-800/40'
                                    ]"
                                >
                                    <td class="w-10 px-3 py-2 text-center" @click.stop>
                                        <input
                                            type="checkbox"
                                            :value="c.key"
                                            v-model="form.selected_contact_keys"
                                            class="rounded bg-zinc-800 border-zinc-700 text-emerald-500 focus:ring-0"
                                        />
                                    </td>
                                    <td class="px-3 py-2">
                                        <div class="font-medium text-white">{{ c.name }}</div>
                                        <div class="text-[11px] text-zinc-500">{{ c.email || '-' }}</div>
                                    </td>
                                    <td class="px-3 py-2 font-mono text-zinc-300">{{ c.phone }}</td>
                                    <td class="px-3 py-2">
                                        <span :class="['px-2 py-0.5 rounded-full text-[10px] font-semibold border', c.origin === 'Comprador' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20']">
                                            {{ c.origin }}
                                        </span>
                                    </td>
                                    <td class="px-3 py-2">
                                        <div class="flex flex-wrap gap-1 max-w-[200px]">
                                            <span v-for="p in (c.products || []).slice(0, 2)" :key="p.name" class="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 truncate max-w-[100px]">
                                                {{ p.name }}
                                            </span>
                                            <span v-if="(c.products || []).length > 2" class="text-[10px] text-zinc-500">
                                                +{{ c.products.length - 2 }}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- STEP 3: Mensagem & Preview WhatsApp -->
                <div v-else-if="step === 3" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-3">
                        <label class="block text-xs font-semibold text-zinc-300">Texto da Mensagem *</label>
                        <textarea
                            v-model="form.message"
                            rows="9"
                            placeholder="Digite o texto da mensagem..."
                            class="w-full bg-zinc-800/90 border border-zinc-700 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 font-mono leading-relaxed"
                        ></textarea>

                        <!-- Dynamic Variable Tags Buttons -->
                        <div>
                            <span class="text-[11px] font-semibold text-zinc-400 block mb-1.5">Inserir variáveis dinâmicas:</span>
                            <div class="flex flex-wrap gap-1.5">
                                <button
                                    v-for="tag in ['{{primeiro_nome}}', '{{nome}}', '{{produto}}', '{{telefone}}', '{{email}}']"
                                    :key="tag"
                                    type="button"
                                    @click="insertTag(tag)"
                                    class="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-emerald-500/20 text-zinc-300 hover:text-emerald-400 border border-zinc-700 hover:border-emerald-500/30 text-xs font-mono transition"
                                >
                                    {{ tag }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Live WhatsApp Phone Preview -->
                    <div>
                        <span class="text-xs font-semibold text-zinc-400 block mb-2">Simulador de Pré-visualização</span>
                        <div class="bg-[#0b141a] border border-zinc-800 rounded-2xl p-4 shadow-xl flex flex-col justify-between min-h-[300px]">
                            <!-- WhatsApp top bar mock -->
                            <div class="flex items-center gap-2.5 pb-3 border-b border-zinc-800">
                                <div class="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                                    {{ previewContact.name[0] }}
                                </div>
                                <div class="text-xs">
                                    <div class="font-bold text-white">{{ previewContact.name }}</div>
                                    <div class="text-[10px] text-emerald-400">online</div>
                                </div>
                            </div>

                            <!-- Chat Message Bubble -->
                            <div class="my-4 flex justify-end">
                                <div class="bg-[#005c4b] text-[#e9edef] rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[90%] shadow text-xs whitespace-pre-wrap leading-relaxed relative">
                                    {{ renderedPreviewMessage }}
                                    <div class="text-[9px] text-zinc-300 text-right mt-1.5 flex items-center justify-end gap-1">
                                        <span>12:00</span>
                                        <CheckCircle2 class="w-3 h-3 text-sky-400" />
                                    </div>
                                </div>
                            </div>

                            <p class="text-[10px] text-zinc-500 text-center">Exibindo simulação com o primeiro destinatário da lista</p>
                        </div>
                    </div>
                </div>

                <!-- STEP 4: Revisão & Confirmação -->
                <div v-else-if="step === 4" class="space-y-5 max-w-xl mx-auto py-2">
                    <div class="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
                        <h4 class="font-bold text-white text-sm border-b border-zinc-800 pb-2">Resumo da Campanha</h4>
                        <div class="grid grid-cols-2 gap-3 text-xs">
                            <div>
                                <span class="text-zinc-500">Nome:</span>
                                <p class="font-semibold text-white mt-0.5">{{ form.name }}</p>
                            </div>
                            <div>
                                <span class="text-zinc-500">Total de Destinatários:</span>
                                <p class="font-black text-emerald-400 text-base mt-0.5">{{ form.selected_contact_keys.length }} contatos</p>
                            </div>
                            <div>
                                <span class="text-zinc-500">Programação:</span>
                                <p :class="['font-bold mt-0.5 flex items-center gap-1', form.schedule_mode === 'scheduled' ? 'text-purple-400' : 'text-emerald-400']">
                                    <component :is="form.schedule_mode === 'scheduled' ? Calendar : Zap" class="w-3.5 h-3.5" />
                                    {{ form.schedule_mode === 'scheduled' ? `Agendado para ${new Date(form.scheduled_at).toLocaleString('pt-BR')}` : 'Disparo Imediato' }}
                                </p>
                            </div>
                            <div>
                                <span class="text-zinc-500">Intervalo de Segurança:</span>
                                <p class="text-zinc-300 mt-0.5">~{{ form.throttle_seconds }}s entre envios</p>
                            </div>
                        </div>

                        <div>
                            <span class="text-zinc-500 text-xs">Prévia do Conteúdo:</span>
                            <div class="mt-1 p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono whitespace-pre-wrap max-h-32 overflow-y-auto">
                                {{ renderedPreviewMessage }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Navigation -->
            <div class="px-6 py-4 bg-zinc-950/60 border-t border-zinc-800 flex items-center justify-between">
                <Button
                    v-if="step > 1"
                    type="button"
                    variant="ghost"
                    @click="step--"
                    class="text-zinc-400 hover:text-white"
                >
                    <ArrowLeft class="w-4 h-4 mr-2" />
                    Voltar
                </Button>
                <div v-else></div>

                <div class="flex items-center gap-3">
                    <Button type="button" variant="ghost" @click="emit('close')" class="text-zinc-400 hover:text-white">
                        Cancelar
                    </Button>
                    <Button
                        v-if="step < 4"
                        type="button"
                        @click="nextStep"
                        class="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-5"
                    >
                        Próximo
                        <ArrowRight class="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                        v-else
                        type="button"
                        :disabled="saving"
                        @click="submitCampaign"
                        :class="[
                            'font-black px-6 shadow-lg',
                            form.schedule_mode === 'scheduled'
                                ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/20'
                                : 'bg-emerald-500 hover:bg-emerald-600 text-zinc-950 shadow-emerald-500/20'
                        ]"
                    >
                        <Loader2 v-if="saving" class="w-4 h-4 mr-2 animate-spin" />
                        <component :is="form.schedule_mode === 'scheduled' ? Calendar : Send" v-else class="w-4 h-4 mr-2" />
                        {{ saving ? 'Salvando...' : (form.schedule_mode === 'scheduled' ? 'Confirmar Agendamento' : 'Iniciar Disparos') }}
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>
