<script setup>
import { computed, onBeforeUnmount, ref } from 'vue';
import { Check, ChevronDown } from 'lucide-vue-next';

const props = defineProps({
    /** @type {{value: string, label: string}[]} */
    options: { type: Array, required: true },
    modelValue: { type: Array, default: () => [] },
    placeholder: { type: String, default: 'Filtrar' },
    /** Mostra o alternador E/OU (só faz diferença com 2+ itens marcados). */
    matchMode: { type: Boolean, default: false },
    /** 'or' = tem pelo menos um dos marcados; 'and' = tem todos os marcados. */
    mode: { type: String, default: 'or' },
});

const emit = defineEmits(['update:modelValue', 'update:mode']);

const open = ref(false);
const root = ref(null);

function onDocumentClick(event) {
    if (root.value && !root.value.contains(event.target)) close();
}

function toggleOpen() {
    open.value ? close() : openDropdown();
}

function openDropdown() {
    open.value = true;
    document.addEventListener('click', onDocumentClick, true);
}

function close() {
    open.value = false;
    document.removeEventListener('click', onDocumentClick, true);
}

function toggleValue(value) {
    emit('update:modelValue', props.modelValue.includes(value)
        ? props.modelValue.filter((v) => v !== value)
        : [...props.modelValue, value]);
}

function clear() {
    emit('update:modelValue', []);
}

onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick, true));

const buttonLabel = computed(() => {
    if (!props.modelValue.length) return props.placeholder;

    const suffix = props.matchMode && props.modelValue.length > 1 ? `, ${props.mode === 'and' ? 'todos' : 'qualquer um'}` : '';

    return `${props.placeholder} (${props.modelValue.length}${suffix})`;
});
</script>

<template>
    <div ref="root" class="relative">
        <button
            type="button"
            class="flex w-full items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            @click="toggleOpen"
        >
            <span class="truncate">{{ buttonLabel }}</span>
            <ChevronDown class="h-3.5 w-3.5 shrink-0 text-zinc-400" />
        </button>

        <div
            v-if="open"
            class="absolute z-20 mt-1 max-h-64 w-full min-w-[14rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
        >
            <p v-if="!options.length" class="px-2 py-1.5 text-xs text-zinc-500 dark:text-zinc-400">Nenhuma opção disponível.</p>
            <template v-else>
                <div v-if="matchMode" class="mb-1.5 flex gap-1 border-b border-zinc-100 pb-1.5 dark:border-zinc-800">
                    <button
                        type="button"
                        class="flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition"
                        :class="mode === 'or' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'"
                        title="Contato tem pelo menos um dos itens marcados"
                        @click="emit('update:mode', 'or')"
                    >
                        Qualquer um (OU)
                    </button>
                    <button
                        type="button"
                        class="flex-1 rounded-lg px-2 py-1 text-[11px] font-bold transition"
                        :class="mode === 'and' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'"
                        title="Contato tem todos os itens marcados"
                        @click="emit('update:mode', 'and')"
                    >
                        Todos (E)
                    </button>
                </div>
                <button
                    v-if="modelValue.length"
                    type="button"
                    class="mb-1 w-full rounded-lg px-2 py-1 text-left text-[11px] font-bold text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400"
                    @click="clear"
                >
                    Limpar seleção
                </button>
                <label
                    v-for="option in options"
                    :key="option.value"
                    class="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-xs text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                    <span
                        class="flex h-4 w-4 shrink-0 items-center justify-center rounded border"
                        :class="modelValue.includes(option.value)
                            ? 'border-emerald-500 bg-emerald-500 text-white'
                            : 'border-zinc-300 dark:border-zinc-600'"
                    >
                        <Check v-if="modelValue.includes(option.value)" class="h-3 w-3" />
                    </span>
                    <input type="checkbox" class="hidden" :checked="modelValue.includes(option.value)" @change="toggleValue(option.value)">
                    <span class="truncate">{{ option.label }}</span>
                </label>
            </template>
        </div>
    </div>
</template>
