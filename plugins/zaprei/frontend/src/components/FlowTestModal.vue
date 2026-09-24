<script setup>
import { computed, ref } from 'vue';
import { CheckCircle2, Loader2, Send, User, X } from 'lucide-vue-next';
import { api } from '../api';

const props = defineProps({
    flow: { type: Object, required: true },
});

const emit = defineEmits(['close', 'tested']);

const phone = ref('');
const customerName = ref('');
const busy = ref(false);
const error = ref('');
const success = ref(false);
const sentPhone = ref('');

function formatPhone(value) {
    const numbers = String(value || '').replace(/\D/g, '').slice(0, 11);
    if (!numbers) return '';
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
}

function onPhoneInput(e) {
    const raw = e.target.value;
    phone.value = formatPhone(raw);
}

const rawPhone = computed(() => phone.value.replace(/\D/g, ''));
const isValid = computed(() => rawPhone.value.length >= 10 && rawPhone.value.length <= 11);

async function submit() {
    if (!isValid.value || busy.value) return;

    busy.value = true;
    error.value = '';
    success.value = false;

    try {
        await api.testFlow(props.flow.id, {
            phone: rawPhone.value,
            customer_name: customerName.value.trim() || undefined,
        });
        sentPhone.value = phone.value;
        success.value = true;
        emit('tested', { phone: rawPhone.value, name: customerName.value });
    } catch (e) {
        error.value = e.message || 'Falha ao disparar teste.';
    } finally {
        busy.value = false;
    }
}
</script>

<template>
    <div class="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <div class="w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900">
            <!-- Header -->
            <div class="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-6 py-5 dark:border-zinc-800 dark:bg-zinc-950/40">
                <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                        <Send class="h-5 w-5" />
                    </div>
                    <div>
                        <h2 class="text-base font-bold text-zinc-900 dark:text-white">Testar Disparo de Fluxo</h2>
                        <p class="text-xs text-zinc-500 dark:text-zinc-400">Fluxo: <strong class="text-zinc-700 dark:text-zinc-300">{{ flow.name }}</strong></p>
                    </div>
                </div>
                <button
                    type="button"
                    class="rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                    @click="emit('close')"
                >
                    <X class="h-4 w-4" />
                </button>
            </div>

            <!-- Body -->
            <div class="p-6 space-y-4">
                <!-- Info Alert -->
                <div class="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-zinc-600 dark:bg-emerald-950/20 dark:text-zinc-300">
                    <p class="leading-relaxed">
                        O disparo de teste executa o grafo completo em tempo real pelo WhatsApp conectado na Evolution GO. É gerado um registro no Histórico de Execuções para inspeção.
                    </p>
                </div>

                <!-- Success Box -->
                <div v-if="success" class="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-300 space-y-2">
                    <div class="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle2 class="h-5 w-5 text-emerald-500" />
                        <span>Fluxo disparado com sucesso!</span>
                    </div>
                    <p class="text-xs">
                        As mensagens foram enviadas para <strong>{{ sentPhone }}</strong>. Verifique o WhatsApp e a aba "Execuções" para conferir os blocos processados.
                    </p>
                </div>

                <!-- Error Box -->
                <div v-if="error" class="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-700 dark:text-rose-300">
                    {{ error }}
                </div>

                <form class="space-y-4" @submit.prevent="submit">
                    <!-- WhatsApp Number Input -->
                    <div>
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                            Número de WhatsApp para Receber o Teste
                        </label>
                        <div class="mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900">
                            <span class="mr-2 text-xs font-bold text-zinc-500">🇧🇷 +55</span>
                            <input
                                :value="phone"
                                type="text"
                                placeholder="(11) 99999-8888"
                                class="w-full bg-transparent font-mono text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                                @input="onPhoneInput"
                            >
                        </div>
                        <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                            Digite seu número com DDD (10 ou 11 dígitos).
                        </p>
                    </div>

                    <!-- Context Customer Name -->
                    <div>
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">
                            Nome do Cliente (para variáveis do fluxo)
                        </label>
                        <div class="mt-1.5 flex items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 transition focus-within:border-emerald-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-950/60 dark:focus-within:bg-zinc-900">
                            <User class="mr-2 h-4 w-4 text-zinc-400" />
                            <input
                                v-model="customerName"
                                type="text"
                                placeholder="Ex: Rodrigo Silva (padrão: Contato de Teste)"
                                class="w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                            >
                        </div>
                        <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                            Substitui as tags <code class="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800">&#123;&#123;customer.name&#125;&#125;</code> e <code class="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[10px] dark:bg-zinc-800">&#123;&#123;customer.first_name&#125;&#125;</code>.
                        </p>
                    </div>
                </form>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-end gap-2 border-t border-zinc-100 bg-zinc-50/50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950/40">
                <button
                    type="button"
                    class="rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    @click="emit('close')"
                >
                    {{ success ? 'Concluir' : 'Cancelar' }}
                </button>
                <button
                    type="button"
                    :disabled="!isValid || busy"
                    class="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50"
                    @click="submit"
                >
                    <Loader2 v-if="busy" class="h-4 w-4 animate-spin" />
                    <Send v-else class="h-4 w-4" />
                    <span>{{ busy ? 'Disparando...' : 'Disparar Teste Agora' }}</span>
                </button>
            </div>
        </div>
    </div>
</template>
