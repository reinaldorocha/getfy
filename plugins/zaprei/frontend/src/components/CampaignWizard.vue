<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { AlertCircle, ArrowLeft, ArrowRight, Calendar, Check, Clock, Loader2, Search, Send, ShieldCheck, Zap } from 'lucide-vue-next';
import MessageEditor from './MessageEditor.vue';
import MessagePreview from './MessagePreview.vue';
import MultiSelectDropdown from './MultiSelectDropdown.vue';
import { api } from '../api';
import { renderPreview } from '../preview';
import { TEMPLATE_VARIABLES, defaultModeData } from '../constants';
import { messageDataErrors } from '../validation';

const emit = defineEmits(['close', 'created']);

const step = ref(1);
const saving = ref(false);
const error = ref('');

const contacts = ref([]);
const products = ref([]);
const loadingContacts = ref(false);

const origin = ref('all');
const productFilter = ref([]);
const productFilterMode = ref('or');
const excludeProductFilter = ref([]);
const search = ref('');

const form = ref({
    name: '',
    schedule_mode: 'immediate',
    scheduled_at: '',
    throttle_seconds: 8,
    selected_contact_keys: [],
    message_data: { mode: 'text', recipient_type: 'customer', text: '' },
});

const minDateTime = computed(() => new Date(Date.now() + 5 * 60000).toISOString().slice(0, 16));

/** Variáveis úteis em campanha (não há evento; só dados do contato). */
const variables = TEMPLATE_VARIABLES.filter((variable) => variable.token.startsWith('{{customer.'));

/** Troca de tipo de mensagem sempre limpa os campos do tipo anterior — só há uma mensagem por campanha. */
let firstMode = true;
watch(() => form.value.message_data.mode, (mode) => {
    if (firstMode) {
        firstMode = false;

        return;
    }
    Object.assign(form.value.message_data, defaultModeData(mode));
});

const productOptions = computed(() => products.value.map((product) => ({ value: product.name, label: product.name })));

const filteredContacts = computed(() => {
    const term = search.value.trim().toLowerCase();

    return contacts.value.filter((contact) => {
        if (origin.value === 'buyers' && contact.source !== 'buyer') return false;
        if (origin.value === 'imported' && contact.source !== 'imported') return false;
        if (productFilter.value.length) {
            const matchesProduct = productFilterMode.value === 'and'
                ? productFilter.value.every((p) => contact.products.includes(p))
                : contact.products.some((p) => productFilter.value.includes(p));
            if (!matchesProduct) return false;
        }
        // "Comprou X e não comprou Y": exclui quem tem qualquer um dos produtos marcados aqui.
        if (excludeProductFilter.value.length && contact.products.some((p) => excludeProductFilter.value.includes(p))) return false;

        return !term || `${contact.name} ${contact.phone}`.toLowerCase().includes(term);
    });
});

const allFilteredSelected = computed(() => filteredContacts.value.length > 0
    && filteredContacts.value.every((c) => form.value.selected_contact_keys.includes(c.id)));

function toggleContact(id) {
    const list = form.value.selected_contact_keys;
    form.value.selected_contact_keys = list.includes(id) ? list.filter((k) => k !== id) : [...list, id];
}

function selectAllFiltered() {
    const ids = filteredContacts.value.map((c) => c.id);
    form.value.selected_contact_keys = [...new Set([...form.value.selected_contact_keys, ...ids])];
}

function deselectAllFiltered() {
    const ids = new Set(filteredContacts.value.map((c) => c.id));
    form.value.selected_contact_keys = form.value.selected_contact_keys.filter((k) => !ids.has(k));
}

const previewContact = computed(() => {
    const first = contacts.value.find((c) => form.value.selected_contact_keys.includes(c.id));

    return first || { name: 'Cliente' };
});

const previewContext = computed(() => ({
    customer: { name: previewContact.value.name, first_name: (previewContact.value.name || '').split(' ')[0] || previewContact.value.name },
}));
const previewText = computed(() => {
    const data = form.value.message_data;

    return renderPreview(data.text || data.question || data.title || '', previewContext.value);
});
const previewCaption = computed(() => renderPreview(form.value.message_data.caption || '', previewContext.value));

async function loadContacts() {
    loadingContacts.value = true;
    try {
        const [contactsResponse, productsResponse] = await Promise.all([api.contacts(), api.products()]);
        contacts.value = contactsResponse.contacts || [];
        products.value = productsResponse.products || [];
    } catch {
        contacts.value = [];
    } finally {
        loadingContacts.value = false;
    }
}

function next() {
    error.value = '';
    if (step.value === 1) {
        if (!form.value.name.trim()) {
            error.value = 'Informe um nome para a campanha.';

            return;
        }
        if (form.value.schedule_mode === 'scheduled' && !form.value.scheduled_at) {
            error.value = 'Escolha a data e o horário do disparo.';

            return;
        }
    }
    if (step.value === 2 && form.value.selected_contact_keys.length === 0) {
        error.value = 'Selecione ao menos um destinatário para o disparo.';

        return;
    }
    if (step.value === 3) {
        const errors = messageDataErrors(form.value.message_data, 'Mensagem');
        if (errors.length) {
            error.value = errors[0];

            return;
        }
    }
    step.value++;
}

async function submit() {
    saving.value = true;
    error.value = '';
    try {
        await api.createCampaign({
            name: form.value.name,
            message_data: form.value.message_data,
            contact_ids: form.value.selected_contact_keys,
            throttle_seconds: form.value.throttle_seconds,
            scheduled_at: form.value.schedule_mode === 'scheduled' ? form.value.scheduled_at : null,
        });
        emit('created');
        emit('close');
    } catch (e) {
        error.value = e.message;
    } finally {
        saving.value = false;
    }
}

onMounted(loadContacts);
</script>

<template>
    <div class="fixed inset-0 z-[100000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
        <div class="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-950/40 px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                        <Send class="h-5 w-5" />
                    </div>
                    <div>
                        <h3 class="text-base font-bold text-white">Criar Nova Campanha WhatsApp</h3>
                        <p class="text-xs text-zinc-400">Disparo em massa imediato ou agendado com proteção anti-bloqueio</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div
                        v-for="n in 4"
                        :key="n"
                        class="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition"
                        :class="step === n ? 'bg-emerald-500 text-zinc-950' : step > n ? 'border border-emerald-500/30 bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-500'"
                    >
                        <Check v-if="step > n" class="h-3.5 w-3.5" />
                        <span v-else>{{ n }}</span>
                    </div>
                </div>
            </div>

            <div v-if="error" class="flex items-center gap-2 border-b border-red-500/20 bg-red-500/10 px-6 py-2.5 text-xs font-medium text-red-400">
                <AlertCircle class="h-4 w-4 shrink-0" />
                <span>{{ error }}</span>
            </div>

            <div class="flex-1 overflow-y-auto p-6">
                <!-- Passo 1: nome + programação -->
                <div v-if="step === 1" class="mx-auto max-w-xl space-y-5 py-2">
                    <div>
                        <label class="mb-1.5 block text-xs font-semibold text-zinc-300" for="zr-name">Nome da Campanha *</label>
                        <input
                            id="zr-name"
                            v-model="form.name"
                            type="text"
                            placeholder="Ex: Oferta Especial Black Friday"
                            class="w-full rounded-xl border border-zinc-700 bg-zinc-800/90 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none"
                        >
                        <p class="mt-1 text-[11px] text-zinc-500">Identificador interno para relatórios e histórico.</p>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-xs font-semibold text-zinc-300">Programação de Envio *</label>
                        <div class="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                class="flex flex-col justify-between rounded-xl border p-3.5 text-left transition"
                                :class="form.schedule_mode === 'immediate' ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-sm' : 'border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700'"
                                @click="form.schedule_mode = 'immediate'"
                            >
                                <div class="flex items-center gap-2">
                                    <Zap class="h-4 w-4 text-emerald-400" />
                                    <span class="text-xs font-bold">Disparo Imediato</span>
                                </div>
                                <p class="mt-1 text-[10px] text-zinc-400">Inicia o envio assim que confirmar.</p>
                            </button>
                            <button
                                type="button"
                                class="flex flex-col justify-between rounded-xl border p-3.5 text-left transition"
                                :class="form.schedule_mode === 'scheduled' ? 'border-emerald-500 bg-emerald-500/10 text-white shadow-sm' : 'border-zinc-800 bg-zinc-800/40 text-zinc-400 hover:border-zinc-700'"
                                @click="form.schedule_mode = 'scheduled'"
                            >
                                <div class="flex items-center gap-2">
                                    <Calendar class="h-4 w-4 text-emerald-400" />
                                    <span class="text-xs font-bold">Agendar Envio</span>
                                </div>
                                <p class="mt-1 text-[10px] text-zinc-400">Programa data e hora futura.</p>
                            </button>
                        </div>

                        <div v-if="form.schedule_mode === 'scheduled'" class="mt-3 space-y-2 rounded-xl border border-emerald-500/30 bg-zinc-950/80 p-4">
                            <label class="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                                <Clock class="h-3.5 w-3.5" />
                                <span>Data e Horário de Início do Disparo *</span>
                            </label>
                            <input
                                v-model="form.scheduled_at"
                                type="datetime-local"
                                :min="minDateTime"
                                class="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none"
                            >
                            <p class="text-[11px] text-zinc-400">
                                A campanha ficará com status <strong class="text-purple-400">Agendada</strong> e a fila iniciará
                                automaticamente no momento programado.
                            </p>
                        </div>
                    </div>

                    <div class="space-y-3 rounded-xl border border-zinc-700/60 bg-zinc-800/50 p-4">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <ShieldCheck class="h-4 w-4 text-emerald-400" />
                                <label class="text-xs font-semibold text-white">Intervalo Médio Anti-Bloqueio</label>
                            </div>
                            <span class="text-xs font-bold text-emerald-400">{{ form.throttle_seconds }} segundos</span>
                        </div>
                        <input v-model.number="form.throttle_seconds" type="range" min="3" max="30" step="1" class="w-full cursor-pointer accent-emerald-500">
                        <p class="text-[11px] text-zinc-400">
                            Espaçamento entre cada mensagem enviada para simular digitação humana e evitar bloqueios.
                        </p>
                    </div>
                </div>

                <!-- Passo 2: destinatários -->
                <div v-else-if="step === 2" class="space-y-4">
                    <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div class="dark space-y-3">
                            <div>
                                <label class="mb-1 block text-[11px] font-medium text-zinc-400">Comprou o produto</label>
                                <MultiSelectDropdown v-model="productFilter" v-model:mode="productFilterMode" :options="productOptions" placeholder="Todos os produtos" match-mode />
                            </div>
                            <div>
                                <label class="mb-1 block text-[11px] font-medium text-zinc-400">Exceto quem comprou</label>
                                <MultiSelectDropdown v-model="excludeProductFilter" :options="productOptions" placeholder="Nenhuma exclusão" />
                                <p class="mt-0.5 text-[10px] text-zinc-500">Ex.: comprou X e não comprou Y — indique X acima e Y aqui.</p>
                            </div>
                        </div>
                        <div>
                            <label class="mb-1 block text-[11px] font-medium text-zinc-400">Origem dos Contatos</label>
                            <select v-model="origin" class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none">
                                <option value="all">Todos (Compradores + Importados)</option>
                                <option value="buyers">Apenas Compradores do Checkout</option>
                                <option value="imported">Apenas Contatos Importados (CSV)</option>
                            </select>
                            <label class="mt-2 mb-1 block text-[11px] font-medium text-zinc-400">Busca rápida</label>
                            <div class="relative">
                                <Search class="absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" />
                                <input v-model="search" type="text" placeholder="Nome, telefone..." class="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 pr-2.5 pl-8 text-xs text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none">
                            </div>
                        </div>
                        <div class="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-3.5">
                            <div>
                                <span class="text-[11px] text-zinc-400">Destinatários Selecionados</span>
                                <div class="mt-0.5 text-2xl font-black text-emerald-400">
                                    {{ form.selected_contact_keys.length }}
                                    <span class="text-xs font-normal text-zinc-500">de {{ filteredContacts.length }} filtrados</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 border-t border-zinc-800 pt-2">
                                <button type="button" class="text-xs font-medium text-emerald-400 hover:underline" @click="selectAllFiltered">Selecionar Todos</button>
                                <span class="text-zinc-600">•</span>
                                <button type="button" class="text-xs text-zinc-400 hover:underline" @click="deselectAllFiltered">Desmarcar Todos</button>
                            </div>
                        </div>
                    </div>

                    <div class="max-h-72 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-950/30">
                        <table class="w-full text-left text-xs">
                            <thead class="sticky top-0 border-b border-zinc-800 bg-zinc-900 font-medium text-zinc-400">
                                <tr>
                                    <th class="w-10 px-3 py-2.5 text-center">
                                        <input type="checkbox" :checked="allFilteredSelected" class="rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0" @change="allFilteredSelected ? deselectAllFiltered() : selectAllFiltered()">
                                    </th>
                                    <th class="px-3 py-2.5">Nome / Email</th>
                                    <th class="px-3 py-2.5">Telefone</th>
                                    <th class="px-3 py-2.5">Origem</th>
                                    <th class="px-3 py-2.5">Produtos</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-zinc-800/60">
                                <tr
                                    v-for="contact in filteredContacts"
                                    :key="contact.id"
                                    class="cursor-pointer transition"
                                    :class="form.selected_contact_keys.includes(contact.id) ? 'bg-emerald-500/5 hover:bg-emerald-500/10' : 'hover:bg-zinc-800/40'"
                                    @click="toggleContact(contact.id)"
                                >
                                    <td class="w-10 px-3 py-2 text-center" @click.stop>
                                        <input type="checkbox" :checked="form.selected_contact_keys.includes(contact.id)" class="rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-0" @change="toggleContact(contact.id)">
                                    </td>
                                    <td class="px-3 py-2">
                                        <div class="font-medium text-white">{{ contact.name }}</div>
                                        <div class="text-[11px] text-zinc-500">{{ contact.email || '-' }}</div>
                                    </td>
                                    <td class="px-3 py-2 font-mono text-zinc-300">{{ contact.phone }}</td>
                                    <td class="px-3 py-2">
                                        <span class="rounded-full border px-2 py-0.5 text-[10px] font-semibold" :class="contact.source === 'buyer' ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400' : 'border-blue-500/20 bg-blue-500/10 text-blue-400'">
                                            {{ contact.origin }}
                                        </span>
                                    </td>
                                    <td class="px-3 py-2">
                                        <div class="flex max-w-[200px] flex-wrap gap-1">
                                            <span v-for="name in contact.products.slice(0, 2)" :key="name" class="max-w-[100px] truncate rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-300">{{ name }}</span>
                                            <span v-if="contact.products.length > 2" class="text-[10px] text-zinc-500">+{{ contact.products.length - 2 }}</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p v-if="loadingContacts" class="py-8 text-center text-xs text-zinc-500">Carregando contatos...</p>
                        <p v-else-if="!filteredContacts.length" class="py-8 text-center text-xs text-zinc-500">Nenhum contato encontrado com esses filtros.</p>
                    </div>
                </div>

                <!-- Passo 3: mensagem + preview -->
                <div v-else-if="step === 3" class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div class="dark">
                        <MessageEditor :data="form.message_data" :show-recipient="false" :variables="variables" />
                    </div>
                    <div>
                        <span class="mb-2 block text-xs font-semibold text-zinc-400">Simulador de Pré-visualização</span>
                        <MessagePreview :text="previewText" :caption="previewCaption" :mode="form.message_data.mode" :recipient-name="previewContact.name" />
                    </div>
                </div>

                <!-- Passo 4: resumo -->
                <div v-else-if="step === 4" class="mx-auto max-w-xl space-y-5 py-2">
                    <div class="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5">
                        <h4 class="border-b border-zinc-800 pb-2 text-sm font-bold text-white">Resumo da Campanha</h4>
                        <div class="grid grid-cols-2 gap-3 text-xs">
                            <div>
                                <span class="text-zinc-500">Nome:</span>
                                <p class="mt-0.5 font-semibold text-white">{{ form.name }}</p>
                            </div>
                            <div>
                                <span class="text-zinc-500">Total de Destinatários:</span>
                                <p class="mt-0.5 text-base font-black text-emerald-400">{{ form.selected_contact_keys.length }} contatos</p>
                            </div>
                            <div>
                                <span class="text-zinc-500">Programação:</span>
                                <p class="mt-0.5 flex items-center gap-1 font-bold" :class="form.schedule_mode === 'scheduled' ? 'text-purple-400' : 'text-emerald-400'">
                                    <component :is="form.schedule_mode === 'scheduled' ? Calendar : Zap" class="h-3.5 w-3.5" />
                                    <span>{{ form.schedule_mode === 'scheduled' ? `Agendado para ${new Date(form.scheduled_at).toLocaleString('pt-BR')}` : 'Disparo Imediato' }}</span>
                                </p>
                            </div>
                            <div>
                                <span class="text-zinc-500">Intervalo de Segurança:</span>
                                <p class="mt-0.5 text-zinc-300">~{{ form.throttle_seconds }}s entre envios</p>
                            </div>
                        </div>
                        <div>
                            <span class="text-xs text-zinc-500">Prévia do Conteúdo ({{ form.message_data.mode }}):</span>
                            <div class="mt-1 max-h-32 overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 p-3 font-mono text-xs whitespace-pre-wrap text-zinc-300">{{ previewText || previewCaption || '—' }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between border-t border-zinc-800 bg-zinc-950/60 px-6 py-4">
                <button v-if="step > 1" type="button" class="flex items-center text-zinc-400 transition hover:text-white" @click="step--">
                    <ArrowLeft class="mr-2 h-4 w-4" />
                    <span class="text-xs font-bold">Voltar</span>
                </button>
                <div v-else />
                <div class="flex items-center gap-3">
                    <button type="button" class="text-xs font-bold text-zinc-400 transition hover:text-white" @click="emit('close')">Cancelar</button>
                    <button
                        v-if="step < 4"
                        type="button"
                        class="flex items-center rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-zinc-950 transition hover:bg-emerald-600"
                        @click="next"
                    >
                        <span>Próximo</span>
                        <ArrowRight class="ml-2 h-4 w-4" />
                    </button>
                    <button
                        v-else
                        type="button"
                        :disabled="saving"
                        class="flex items-center rounded-xl px-6 py-2 text-xs font-black shadow-lg transition disabled:opacity-60"
                        :class="form.schedule_mode === 'scheduled' ? 'bg-purple-600 text-white shadow-purple-500/20 hover:bg-purple-500' : 'bg-emerald-500 text-zinc-950 shadow-emerald-500/20 hover:bg-emerald-600'"
                        @click="submit"
                    >
                        <Loader2 v-if="saving" class="mr-2 h-4 w-4 animate-spin" />
                        <component :is="form.schedule_mode === 'scheduled' ? Calendar : Send" v-else class="mr-2 h-4 w-4" />
                        <span>{{ saving ? 'Salvando...' : form.schedule_mode === 'scheduled' ? 'Confirmar Agendamento' : 'Iniciar Disparos' }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
