<script setup>
import { computed } from 'vue';
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from '@vue-flow/core';
import { X } from 'lucide-vue-next';

const props = defineProps({
    id: { type: String, required: true },
    sourceX: { type: Number, required: true },
    sourceY: { type: Number, required: true },
    targetX: { type: Number, required: true },
    targetY: { type: Number, required: true },
    sourcePosition: { type: String, default: 'right' },
    targetPosition: { type: String, default: 'left' },
    markerEnd: { type: String, default: '' },
});

const emit = defineEmits(['remove']);

const bezier = computed(() => getBezierPath({
    sourceX: props.sourceX,
    sourceY: props.sourceY,
    targetX: props.targetX,
    targetY: props.targetY,
    sourcePosition: props.sourcePosition,
    targetPosition: props.targetPosition,
}));

const labelStyle = computed(() => ({
    position: 'absolute',
    transform: `translate(-50%, -50%) translate(${bezier.value[1]}px, ${bezier.value[2]}px)`,
}));
</script>

<template>
    <BaseEdge :id="id" :path="bezier[0]" :marker-end="markerEnd" />
    <EdgeLabelRenderer>
        <button
            type="button"
            class="flex items-center justify-center rounded-full border border-zinc-200 bg-white p-0.5 text-zinc-400 shadow-sm transition hover:bg-rose-500/10 hover:text-rose-600 dark:border-zinc-700 dark:bg-zinc-900"
            :style="labelStyle"
            title="Excluir conexão"
            @click.stop="emit('remove', id)"
        >
            <X class="h-3 w-3" />
        </button>
    </EdgeLabelRenderer>
</template>
