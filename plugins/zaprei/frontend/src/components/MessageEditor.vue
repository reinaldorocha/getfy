<script setup>
import { computed, onMounted, ref } from 'vue';
import { api } from '../api';
import { BUTTON_TYPES, MESSAGE_MODES, PIX_KEY_TYPES, RECIPIENT_TYPES, TEMPLATE_VARIABLES } from '../constants';

const props = defineProps({
    data: { type: Object, required: true },
    /** Campanhas não têm seletor de destinatário — o telefone já vem do contato escolhido. */
    showRecipient: { type: Boolean, default: true },
    /** Variáveis oferecidas nos botões de inserção rápida do texto. */
    variables: { type: Array, default: () => TEMPLATE_VARIABLES },
});

const uploading = ref(false);
const uploadError = ref('');
const groups = ref([]);
const groupMode = ref('list');

const inputClass = 'w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white';
const labelClass = 'mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300';

const isMedia = (mode) => ['image', 'video', 'audio', 'document'].includes(mode);
const mediaAccept = computed(() => ({
    image: 'image/*', video: 'video/*', audio: 'audio/*', document: '.pdf,.doc,.docx,.xls,.xlsx,.zip',
}[props.data.mode] || '*/*'));

function insertVariable(field, token) {
    props.data[field] = `${props.data[field] || ''}${token}`;
}

async function uploadMedia(event, field = 'media_url', mimeField = 'mime_type') {
    const file = event.target.files?.[0];
    if (!file) return;

    uploading.value = true;
    uploadError.value = '';
    try {
        const media = await api.uploadMedia(file);
        props.data[field] = media.url;
        if (mimeField) props.data[mimeField] = media.mime_type;
    } catch (e) {
        uploadError.value = e.message;
    } finally {
        uploading.value = false;
        event.target.value = '';
    }
}

// ---------- botões ----------
const buttons = computed(() => (Array.isArray(props.data.buttons) ? props.data.buttons : []));
const addButton = () => { props.data.buttons = [...buttons.value, { type: 'reply', displayText: '' }]; };
const removeButton = (index) => { props.data.buttons = buttons.value.filter((_, i) => i !== index); };

// ---------- lista ----------
const sections = computed(() => (Array.isArray(props.data.sections) ? props.data.sections : []));
const addSection = () => { props.data.sections = [...sections.value, { title: '', rows: [{ title: '', description: '' }] }]; };
const removeSection = (index) => { props.data.sections = sections.value.filter((_, i) => i !== index); };
const addRow = (section) => { section.rows = [...(section.rows || []), { title: '', description: '' }]; };
const removeRow = (section, index) => { section.rows = (section.rows || []).filter((_, i) => i !== index); };

// ---------- enquete ----------
const pollOptions = computed(() => (Array.isArray(props.data.options) ? props.data.options : []));
const addPollOption = () => { props.data.options = [...pollOptions.value, '']; };
const removePollOption = (index) => { props.data.options = pollOptions.value.filter((_, i) => i !== index); };

async function loadGroups() {
    try {
        groups.value = (await api.groups()).groups || [];
        groupMode.value = groups.value.length ? 'list' : 'manual';
    } catch {
        groups.value = [];
        groupMode.value = 'manual';
    }
}

onMounted(() => {
    if (props.showRecipient) loadGroups();
});
</script>

<template>
    <div class="space-y-4">
        <div>
            <label :class="labelClass" for="zr-mode">Tipo de mensagem</label>
            <select id="zr-mode" v-model="data.mode" :class="inputClass">
                <option v-for="mode in MESSAGE_MODES" :key="mode.value" :value="mode.value">{{ mode.label }}</option>
            </select>
        </div>

        <template v-if="showRecipient">
            <div>
                <label :class="labelClass" for="zr-recipient">Destinatário</label>
                <select id="zr-recipient" v-model="data.recipient_type" :class="inputClass">
                    <option v-for="type in RECIPIENT_TYPES" :key="type.value" :value="type.value">{{ type.label }}</option>
                </select>
            </div>

            <div v-if="data.recipient_type === 'custom'">
                <label :class="labelClass" for="zr-custom-phone">Número</label>
                <input id="zr-custom-phone" v-model.trim="data.custom_phone" type="text" placeholder="5511999998888" :class="inputClass">
            </div>

            <div v-else-if="data.recipient_type === 'group'">
                <label :class="labelClass" for="zr-group-id">Grupo do WhatsApp</label>
                <select v-if="groupMode === 'list'" id="zr-group-id" v-model="data.group_id" :class="inputClass">
                    <option value="">Selecione o grupo…</option>
                    <option v-for="group in groups" :key="group.id" :value="group.id">{{ group.name }}</option>
                </select>
                <input v-else id="zr-group-id" v-model.trim="data.group_id" type="text" placeholder="Ex.: 120363025244589234@g.us" :class="inputClass">
                <button type="button" class="mt-1 text-[11px] font-semibold text-emerald-600 hover:underline dark:text-emerald-400" @click="groupMode = groupMode === 'list' ? 'manual' : 'list'">
                    {{ groupMode === 'list' ? 'Digitar JID manualmente' : (groups.length ? 'Escolher da lista' : 'Nenhum grupo encontrado — digite o JID') }}
                </button>
            </div>
        </template>

        <!-- Texto / mídia / figurinha -->
        <template v-if="data.mode === 'text' || isMedia(data.mode)">
            <div>
                <label :class="labelClass" for="zr-text">{{ isMedia(data.mode) ? 'Legenda' : 'Mensagem' }}</label>
                <textarea id="zr-text" v-model="data.text" rows="6" placeholder="Digite o texto da mensagem…" :class="[inputClass, 'font-mono leading-relaxed']" />
                <div class="mt-2 flex flex-wrap gap-1.5">
                    <button
                        v-for="variable in variables"
                        :key="variable.token"
                        type="button"
                        class="rounded-lg border border-zinc-200 bg-white px-2 py-1 font-mono text-[10px] text-zinc-600 transition hover:border-emerald-500/40 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400"
                        :title="variable.label"
                        @click="insertVariable('text', variable.token)"
                    >
                        {{ variable.token }}
                    </button>
                </div>
            </div>

            <div v-if="isMedia(data.mode)">
                <label :class="labelClass" for="zr-media-url">Arquivo</label>
                <input id="zr-media-url" v-model.trim="data.media_url" type="url" placeholder="https://… ou envie um arquivo" :class="inputClass">
                <input type="file" class="mt-2 w-full text-xs" :accept="mediaAccept" :disabled="uploading" @change="uploadMedia">
                <p v-if="uploading" class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">Enviando arquivo…</p>
            </div>
        </template>

        <!-- Figurinha -->
        <template v-else-if="data.mode === 'sticker'">
            <div>
                <label :class="labelClass" for="zr-sticker-url">Figurinha (imagem)</label>
                <input id="zr-sticker-url" v-model.trim="data.media_url" type="url" placeholder="https://… ou envie um arquivo" :class="inputClass">
                <input type="file" class="mt-2 w-full text-xs" accept="image/*" :disabled="uploading" @change="uploadMedia">
            </div>
        </template>

        <!-- Botões -->
        <template v-else-if="data.mode === 'buttons'">
            <div>
                <label :class="labelClass" for="zr-title">Título</label>
                <input id="zr-title" v-model="data.title" type="text" placeholder="Seu pedido foi gerado!" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-text-btn">Descrição</label>
                <textarea id="zr-text-btn" v-model="data.text" rows="3" :class="inputClass" />
            </div>
            <div>
                <label :class="labelClass" for="zr-footer">Rodapé</label>
                <input id="zr-footer" v-model="data.footer" type="text" placeholder="Enviado automaticamente pelo Getfy" :class="inputClass">
            </div>
            <div class="space-y-2">
                <label :class="labelClass">Botões (até 3 de resposta rápida, ou combine copiar/link/ligar)</label>
                <div v-for="(button, index) in buttons" :key="index" class="space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900">
                    <select v-model="button.type" :class="inputClass">
                        <option v-for="type in BUTTON_TYPES" :key="type.value" :value="type.value">{{ type.label }}</option>
                    </select>

                    <template v-if="button.type === 'pix'">
                        <input v-model="button.name" type="text" placeholder="Nome da loja (opcional)" :class="inputClass">
                        <select v-model="button.keyType" :class="inputClass">
                            <option value="">Tipo de chave PIX</option>
                            <option v-for="k in PIX_KEY_TYPES" :key="k.value" :value="k.value">{{ k.label }}</option>
                        </select>
                        <input v-model.trim="button.key" type="text" placeholder="Chave PIX" :class="inputClass">
                        <p class="text-[10px] text-zinc-500 dark:text-zinc-400">O botão PIX deve ser o único botão da mensagem.</p>
                    </template>
                    <template v-else>
                        <input v-model="button.displayText" type="text" placeholder="Texto do botão" :class="inputClass">
                        <input v-if="button.type === 'url'" v-model.trim="button.url" type="url" placeholder="https://…" :class="inputClass">
                        <input v-if="button.type === 'call'" v-model.trim="button.phoneNumber" type="text" placeholder="+5511999998888" :class="inputClass">
                        <input v-if="button.type === 'copy'" v-model.trim="button.copyCode" type="text" placeholder="Código a copiar" :class="inputClass">
                    </template>
                    <button type="button" class="text-[11px] font-bold text-rose-600 hover:underline" @click="removeButton(index)">Remover botão</button>
                </div>
                <button type="button" class="w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700" @click="addButton">
                    + Adicionar botão
                </button>
            </div>
        </template>

        <!-- Lista -->
        <template v-else-if="data.mode === 'list'">
            <div>
                <label :class="labelClass" for="zr-list-title">Título</label>
                <input id="zr-list-title" v-model="data.title" type="text" placeholder="Nossos planos" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-list-text">Descrição</label>
                <textarea id="zr-list-text" v-model="data.text" rows="3" :class="inputClass" />
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label :class="labelClass" for="zr-list-footer">Rodapé</label>
                    <input id="zr-list-footer" v-model="data.footer" type="text" :class="inputClass">
                </div>
                <div>
                    <label :class="labelClass" for="zr-list-button">Texto do botão</label>
                    <input id="zr-list-button" v-model="data.button_text" type="text" placeholder="Ver Menu" :class="inputClass">
                </div>
            </div>
            <div class="space-y-3">
                <label :class="labelClass">Seções</label>
                <div v-for="(section, sIndex) in sections" :key="sIndex" class="space-y-2 rounded-xl border border-zinc-200/80 bg-white p-2.5 dark:border-zinc-800 dark:bg-zinc-900">
                    <input v-model="section.title" type="text" placeholder="Nome da seção (opcional)" :class="inputClass">
                    <div v-for="(row, rIndex) in section.rows" :key="rIndex" class="space-y-1 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-950">
                        <input v-model="row.title" type="text" placeholder="Título da opção" :class="inputClass">
                        <input v-model="row.description" type="text" placeholder="Descrição (opcional)" :class="inputClass">
                        <button type="button" class="text-[10px] font-bold text-rose-600 hover:underline" @click="removeRow(section, rIndex)">Remover opção</button>
                    </div>
                    <button type="button" class="text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400" @click="addRow(section)">+ Adicionar opção</button>
                    <div class="border-t border-zinc-100 pt-2 dark:border-zinc-800">
                        <button type="button" class="text-[11px] font-bold text-rose-600 hover:underline" @click="removeSection(sIndex)">Remover seção</button>
                    </div>
                </div>
                <button type="button" class="w-full rounded-xl border border-dashed border-zinc-300 py-1.5 text-[11px] font-bold text-zinc-500 transition hover:border-emerald-500/40 hover:text-emerald-600 dark:border-zinc-700" @click="addSection">
                    + Adicionar seção
                </button>
            </div>
        </template>

        <!-- Localização -->
        <template v-else-if="data.mode === 'location'">
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <label :class="labelClass" for="zr-lat">Latitude</label>
                    <input id="zr-lat" v-model="data.latitude" type="text" placeholder="-23.5505" :class="inputClass">
                </div>
                <div>
                    <label :class="labelClass" for="zr-lng">Longitude</label>
                    <input id="zr-lng" v-model="data.longitude" type="text" placeholder="-46.6333" :class="inputClass">
                </div>
            </div>
            <div>
                <label :class="labelClass" for="zr-loc-name">Nome do local</label>
                <input id="zr-loc-name" v-model="data.location_name" type="text" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-loc-address">Endereço</label>
                <input id="zr-loc-address" v-model="data.address" type="text" :class="inputClass">
            </div>
        </template>

        <!-- Contato -->
        <template v-else-if="data.mode === 'contact'">
            <div>
                <label :class="labelClass" for="zr-contact-name">Nome completo</label>
                <input id="zr-contact-name" v-model="data.contact_name" type="text" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-contact-phone">Telefone</label>
                <input id="zr-contact-phone" v-model="data.contact_phone" type="text" placeholder="5511999998888" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-contact-org">Empresa (opcional)</label>
                <input id="zr-contact-org" v-model="data.organization" type="text" :class="inputClass">
            </div>
        </template>

        <!-- Enquete -->
        <template v-else-if="data.mode === 'poll'">
            <div>
                <label :class="labelClass" for="zr-poll-question">Pergunta</label>
                <input id="zr-poll-question" v-model="data.question" type="text" :class="inputClass">
            </div>
            <div class="space-y-2">
                <label :class="labelClass">Opções (mínimo 2)</label>
                <div v-for="(option, index) in pollOptions" :key="index" class="flex gap-2">
                    <input v-model="pollOptions[index]" type="text" :class="inputClass" :placeholder="`Opção ${index + 1}`">
                    <button v-if="pollOptions.length > 2" type="button" class="text-[11px] font-bold text-rose-600 hover:underline" @click="removePollOption(index)">✕</button>
                </div>
                <button type="button" class="text-[11px] font-bold text-emerald-600 hover:underline dark:text-emerald-400" @click="addPollOption">+ Adicionar opção</button>
            </div>
            <div>
                <label :class="labelClass" for="zr-poll-max">Máximo de respostas por pessoa</label>
                <input id="zr-poll-max" v-model.number="data.max_answers" type="number" min="1" :max="pollOptions.length" :class="inputClass">
            </div>
        </template>

        <!-- Link com prévia -->
        <template v-else-if="data.mode === 'link'">
            <div>
                <label :class="labelClass" for="zr-link-url">URL</label>
                <input id="zr-link-url" v-model.trim="data.url" type="url" placeholder="https://…" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-link-title">Título da prévia</label>
                <input id="zr-link-title" v-model="data.title" type="text" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-link-desc">Descrição da prévia</label>
                <input id="zr-link-desc" v-model="data.description" type="text" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-link-image">Imagem da prévia (URL)</label>
                <input id="zr-link-image" v-model.trim="data.image_url" type="url" :class="inputClass">
            </div>
            <div>
                <label :class="labelClass" for="zr-link-text">Texto que acompanha o link</label>
                <textarea id="zr-link-text" v-model="data.text" rows="3" :class="inputClass" />
            </div>
        </template>

        <p v-if="uploadError" class="rounded-lg bg-rose-500/10 px-2 py-1.5 text-[11px] text-rose-600 dark:text-rose-400">{{ uploadError }}</p>
    </div>
</template>
