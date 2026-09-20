<script setup>
import { onMounted, reactive, ref } from 'vue';
import { CheckCircle2, Copy, Loader2, Plug } from 'lucide-vue-next';
import { api } from '../api';

const emit = defineEmits(['saved']);

const loading = ref(true);
const saving = ref(false);
const testing = ref(false);
const error = ref('');
const notice = ref('');
const connected = ref(false);
const hasApiKey = ref(false);
const webhookUrl = ref('');

const form = reactive({
    base_url: '',
    instance: '',
    api_key: '',
    is_active: true,
});

async function load() {
    loading.value = true;
    error.value = '';
    try {
        const { connection } = await api.connection();
        form.base_url = connection.credentials.base_url || '';
        form.instance = connection.credentials.instance || '';
        form.is_active = connection.is_active;
        hasApiKey.value = connection.credentials.has_api_key;
        connected.value = connection.connected;
        webhookUrl.value = connection.webhook_url || '';
    } catch (e) {
        error.value = e.message;
    } finally {
        loading.value = false;
    }
}

async function save() {
    saving.value = true;
    error.value = '';
    notice.value = '';
    try {
        const { connection } = await api.saveConnection({ ...form });
        form.api_key = '';
        hasApiKey.value = connection.credentials.has_api_key;
        connected.value = connection.connected;
        webhookUrl.value = connection.webhook_url || '';
        notice.value = 'Conexão salva.';
        emit('saved');
    } catch (e) {
        error.value = e.message;
    } finally {
        saving.value = false;
    }
}

async function copyWebhookUrl() {
    if (!webhookUrl.value) return;
    try {
        await navigator.clipboard.writeText(webhookUrl.value);
        notice.value = 'URL do webhook copiada.';
    } catch {
        error.value = 'Não foi possível copiar automaticamente — selecione e copie o texto manualmente.';
    }
}

async function test() {
    testing.value = true;
    error.value = '';
    notice.value = '';
    try {
        const { message } = await api.testConnection();
        notice.value = message || 'Conexão validada.';
    } catch (e) {
        error.value = e.message;
    } finally {
        testing.value = false;
    }
}

onMounted(load);
</script>

<template>
    <div class="rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
        <div class="flex items-center gap-3 border-b border-zinc-100 pb-4 dark:border-zinc-800">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Plug class="h-5 w-5" />
            </div>
            <div>
                <h3 class="text-sm font-black text-zinc-900 dark:text-white">Conexão Evolution GO</h3>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">
                    O ZapRei envia todas as mensagens pela Evolution GO (evo-go).
                </p>
            </div>
        </div>

        <div v-if="loading" class="py-10 text-center text-zinc-400">
            <Loader2 class="mb-2 inline h-6 w-6 animate-spin text-emerald-500" />
            <p class="text-xs font-medium">Carregando configuração…</p>
        </div>

        <div v-else class="mt-4 space-y-4">
            <div class="flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div>
                    <div class="text-xs font-bold text-zinc-900 dark:text-white">Automação ativa</div>
                    <div class="text-[11px] text-zinc-500 dark:text-zinc-400">Desative para pausar fluxos e campanhas sem perder as credenciais.</div>
                </div>
                <label class="relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors" :class="form.is_active ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-700'">
                    <input v-model="form.is_active" type="checkbox" class="sr-only">
                    <span class="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition duration-200" :class="form.is_active ? 'translate-x-4' : 'translate-x-0'" />
                </label>
            </div>

            <div>
                <label class="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300" for="zr-base-url">URL da Evolution GO</label>
                <input
                    id="zr-base-url"
                    v-model.trim="form.base_url"
                    type="url"
                    placeholder="https://sua-evolution-go.com"
                    class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                >
            </div>

            <div>
                <label class="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300" for="zr-instance">Instância</label>
                <input
                    id="zr-instance"
                    v-model.trim="form.instance"
                    type="text"
                    placeholder="getfy-bot"
                    class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                >
            </div>

            <div>
                <label class="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300" for="zr-api-key">API key</label>
                <input
                    id="zr-api-key"
                    v-model.trim="form.api_key"
                    type="password"
                    autocomplete="off"
                    :placeholder="hasApiKey ? 'Chave salva — preencha apenas para substituir' : 'Cole a API key da instância'"
                    class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500"
                >
                <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">A chave é gravada criptografada e nunca é devolvida ao navegador.</p>
            </div>

            <div v-if="webhookUrl" class="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3">
                <div class="text-xs font-bold text-zinc-900 dark:text-white">URL de webhook (respostas do cliente)</div>
                <p class="mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
                    Cole esta URL como <span class="font-mono">webhookUrl</span> ao conectar a instância na Evolution GO
                    (<span class="font-mono">POST /instance/connect</span>, evento <span class="font-mono">Message</span>)
                    para usar o bloco "Aguardar resposta" nos fluxos.
                </p>
                <div class="mt-2 flex items-center gap-2">
                    <input :value="webhookUrl" type="text" readonly class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300" @focus="$event.target.select()">
                    <button type="button" class="flex shrink-0 items-center gap-1 rounded-xl border border-zinc-200 px-2.5 py-1.5 text-[11px] font-bold text-zinc-600 transition hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800" @click="copyWebhookUrl">
                        <Copy class="h-3.5 w-3.5" />
                        Copiar
                    </button>
                </div>
            </div>
            <p v-else class="text-[11px] text-zinc-500 dark:text-zinc-400">
                Salve a conexão pelo menos uma vez para gerar a URL de webhook (usada pelo bloco "Aguardar resposta").
            </p>

            <div class="flex flex-wrap items-center gap-2">
                <button type="button" :disabled="saving" class="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50" @click="save">
                    {{ saving ? 'Salvando…' : 'Salvar conexão' }}
                </button>
                <button type="button" :disabled="testing || !hasApiKey" class="rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800" @click="test">
                    {{ testing ? 'Testando…' : 'Testar conexão' }}
                </button>
                <span v-if="connected" class="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 class="h-3 w-3" />
                    Conectado
                </span>
            </div>

            <p v-if="error" class="rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{{ error }}</p>
            <p v-else-if="notice" class="rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400">{{ notice }}</p>
        </div>
    </div>
</template>
