<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { Settings, X } from 'lucide-vue-next';
import MultiSelectDropdown from './MultiSelectDropdown.vue';
import { api } from '../api';
import { TRIGGER_EVENTS } from '../constants';

const props = defineProps({
    flow: { type: Object, required: true },
});

const emit = defineEmits(['close', 'saved']);

const products = ref([]);
const saving = ref(false);
const error = ref('');

const form = reactive({
    name: props.flow.name || '',
    trigger_event: props.flow.trigger_event || TRIGGER_EVENTS[0].eventClass,
    product_ids: props.flow.product_ids || [],
});

const productOptions = computed(() => products.value.map((product) => ({ value: product.id, label: product.name })));

async function loadProducts() {
    try {
        products.value = (await api.products()).products || [];
    } catch {
        products.value = [];
    }
}

async function save() {
    if (!form.name.trim()) {
        error.value = 'Informe um nome para o fluxo.';

        return;
    }

    saving.value = true;
    error.value = '';
    try {
        await api.updateFlow(props.flow.id, {
            name: form.name.trim(),
            trigger_event: form.trigger_event,
            product_ids: form.product_ids.length ? form.product_ids : null,
        });
        emit('saved');
        emit('close');
    } catch (e) {
        error.value = e.message;
    } finally {
        saving.value = false;
    }
}

onMounted(loadProducts);
</script>

<template>
    <div class="fixed inset-0 z-[100000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
        <div class="w-full max-w-md rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
            <div class="flex items-center justify-between border-b border-zinc-200 px-5 py-4 dark:border-zinc-800">
                <div class="flex items-center gap-2.5">
                    <div class="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <Settings class="h-4 w-4" />
                    </div>
                    <h3 class="text-sm font-bold text-zinc-900 dark:text-white">Configurar detalhes e produto</h3>
                </div>
                <button type="button" class="rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200" @click="emit('close')">
                    <X class="h-4 w-4" />
                </button>
            </div>

            <div class="space-y-4 p-5">
                <div>
                    <label class="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300" for="zr-settings-name">Nome do fluxo</label>
                    <input
                        id="zr-settings-name"
                        v-model="form.name"
                        type="text"
                        class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    >
                </div>

                <div>
                    <label class="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300" for="zr-settings-event">Evento gatilho</label>
                    <select
                        id="zr-settings-event"
                        v-model="form.trigger_event"
                        class="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    >
                        <option v-for="event in TRIGGER_EVENTS" :key="event.id" :value="event.eventClass">{{ event.label }}</option>
                    </select>
                    <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                        Trocar o evento atualiza o bloco de gatilho do fluxo automaticamente.
                    </p>
                </div>

                <div>
                    <label class="mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300" for="zr-settings-product">Produtos</label>
                    <MultiSelectDropdown v-model="form.product_ids" :options="productOptions" placeholder="Todos os produtos" />
                </div>

                <p v-if="error" class="rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{{ error }}</p>
            </div>

            <div class="flex justify-end gap-2 border-t border-zinc-200 px-5 py-4 dark:border-zinc-800">
                <button
                    type="button"
                    class="rounded-xl border border-zinc-200 px-4 py-2 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    @click="emit('close')"
                >
                    Cancelar
                </button>
                <button
                    type="button"
                    :disabled="saving"
                    class="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50"
                    @click="save"
                >
                    {{ saving ? 'Salvando…' : 'Salvar' }}
                </button>
            </div>
        </div>
    </div>
</template>
