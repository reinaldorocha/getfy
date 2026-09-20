<script setup>
import ConnectionForm from './ConnectionForm.vue';

/**
 * Painel exibido na gaveta de Integrações do Getfy.
 * O core escuta `saved` para recarregar a página e `close` para fechar a gaveta.
 */
const emit = defineEmits(['saved', 'close']);
</script>

<template>
    <div class="space-y-4">
        <ConnectionForm @saved="emit('saved')" />

        <div class="rounded-2xl border border-zinc-200/80 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
            <p class="text-xs text-zinc-500 dark:text-zinc-400">
                Fluxos, contatos e campanhas ficam no menu <strong class="text-zinc-700 dark:text-zinc-300">ZapRei</strong> do painel.
            </p>
        </div>
    </div>
</template>
