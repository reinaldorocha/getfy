<script setup>
import { FLOW_TEMPLATES } from '../templates';

defineEmits(['use']);
</script>

<template>
    <div class="rounded-3xl border border-zinc-200 bg-white p-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-950">
        <div class="mb-4 flex items-center justify-between">
            <div>
                <h2 class="text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white">
                    Modelos Prontos para Usar
                </h2>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">
                    Clique em um modelo para iniciar com a estrutura pré-configurada.
                </p>
            </div>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <button
                v-for="template in FLOW_TEMPLATES"
                :key="template.id"
                type="button"
                class="group relative flex cursor-pointer flex-col justify-between rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 text-left transition hover:border-emerald-500/50 hover:bg-emerald-50/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20"
                @click="$emit('use', template)"
            >
                <div>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl">{{ template.icon }}</span>
                        <span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                            {{ template.badge }}
                        </span>
                    </div>
                    <h3 class="mt-2.5 text-sm font-bold text-zinc-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                        {{ template.title }}
                    </h3>
                    <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{{ template.description }}</p>
                </div>
                <div class="mt-3 flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <span>Usar modelo</span>
                    <span>→</span>
                </div>
            </button>
        </div>
    </div>
</template>
