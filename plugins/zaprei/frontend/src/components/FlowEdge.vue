<script setup>
import { computed } from 'vue';
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from '@vue-flow/core';
import { X } from 'lucide-vue-next';

const props = defineProps({
    id: { type: String, required: true },
    source: { type: String, default: '' },
    target: { type: String, default: '' },
    sourceX: { type: Number, required: true },
    sourceY: { type: Number, required: true },
    targetX: { type: Number, required: true },
    targetY: { type: Number, required: true },
    sourcePosition: { type: String, default: 'right' },
    targetPosition: { type: String, default: 'left' },
    sourceHandleId: { type: String, default: '' },
    sourceHandle: { type: String, default: '' },
    markerEnd: { type: String, default: '' },
    selected: { type: Boolean, default: false },
    data: { type: Object, default: () => ({}) },
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

const handleKind = computed(() => {
    const handle = props.sourceHandleId || props.sourceHandle || props.data?.sourceHandle;
    if (handle) return handle;

    if (props.data?.condition === 'true') return 'yes';
    if (props.data?.condition === 'false') return 'no';

    return '';
});

const branchConfig = computed(() => {
    switch (handleKind.value) {
        case 'yes':
            return {
                label: 'SIM',
                stroke: '#10b981',
                badgeClass: 'border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-500/40',
            };
        case 'no':
            return {
                label: 'NÃO',
                stroke: '#f43f5e',
                badgeClass: 'border-rose-500/30 bg-rose-50 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 dark:border-rose-500/40',
            };
        case 'replied':
            return {
                label: 'RESPONDEU',
                stroke: '#14b8a6',
                badgeClass: 'border-teal-500/30 bg-teal-50 text-teal-700 dark:bg-teal-950/80 dark:text-teal-300 dark:border-teal-500/40',
            };
        case 'timeout':
            return {
                label: 'ESGOTOU',
                stroke: '#f59e0b',
                badgeClass: 'border-amber-500/30 bg-amber-50 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-500/40',
            };
        default:
            return {
                label: null,
                stroke: props.selected ? '#10b981' : '#94a3b8',
                badgeClass: '',
            };
    }
});

const edgeStyle = computed(() => ({
    stroke: branchConfig.value.stroke,
    strokeWidth: props.selected ? 3 : 2,
    strokeDasharray: props.selected ? '6 4' : undefined,
    transition: 'stroke 0.2s ease, stroke-width 0.2s ease',
}));
</script>

<template>
    <BaseEdge :id="id" :path="bezier[0]" :style="edgeStyle" :marker-end="markerEnd" />
    <EdgeLabelRenderer>
        <div
            class="pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-200/90 bg-white/95 px-1 py-0.5 shadow-md backdrop-blur-xs transition hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900/95"
            :style="labelStyle"
        >
            <span
                v-if="branchConfig.label"
                class="rounded-full border px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider"
                :class="branchConfig.badgeClass"
            >
                {{ branchConfig.label }}
            </span>
            <button
                type="button"
                class="flex h-4 w-4 items-center justify-center rounded-full text-zinc-400 transition hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500"
                title="Excluir conexão"
                @click.stop="emit('remove', id)"
            >
                <X class="h-2.5 w-2.5" />
            </button>
        </div>
    </EdgeLabelRenderer>
</template>
