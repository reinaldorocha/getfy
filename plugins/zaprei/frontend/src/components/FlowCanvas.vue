<script setup>
import { computed, ref, watch } from 'vue';
import { Handle, MarkerType, Position, VueFlow, useVueFlow } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { AlertCircle, Check, Clock, Flag, GitBranch, MessageCircle, Mic, Reply, Sparkles, X, Zap } from 'lucide-vue-next';
import FlowEdge from './FlowEdge.vue';
import NodeInspector from './NodeInspector.vue';
import FlowSimulatorModal from './FlowSimulatorModal.vue';
import { nodeLabel } from '../constants';
import { makeNode, subtitleFor, toStoredGraph, toVueFlow } from '../graph';
import { validateGraph } from '../validation';

const props = defineProps({
    flow: { type: Object, required: true },
    saving: { type: Boolean, default: false },
});

const emit = defineEmits(['save']);

const nodes = ref([]);
const edges = ref([]);
const selectedNodeId = ref(null);
const selectedEdgeId = ref(null);
const validationErrors = ref([]);
const simulatorOpen = ref(false);

const MESSAGE_MODE_META = {
    text: { label: 'Texto', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    media: { label: 'Mídia', color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20' },
    audio: { label: 'Áudio', color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20' },
    buttons: { label: 'Botões', color: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' },
    list: { label: 'Lista', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    location: { label: 'Local', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
    contact: { label: 'Contato', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
    poll: { label: 'Enquete', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20' },
    link: { label: 'Link', color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20' },
};

function messageModeMeta(mode) {
    return MESSAGE_MODE_META[mode] || { label: mode || 'Texto', color: 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20' };
}

const { onConnect, addEdges, project, fitView } = useVueFlow();

const PALETTE = [
    { type: 'trigger', title: 'Gatilho', desc: 'Início do fluxo — define qual evento dispara as mensagens.', icon: Zap, color: 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400' },
    { type: 'send_message', title: 'Enviar mensagem', desc: 'Texto, mídia ou botões pelo WhatsApp.', icon: MessageCircle, color: 'border-blue-200 bg-blue-50 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400' },
    { type: 'delay', title: 'Aguardar', desc: 'Espera antes de seguir para o próximo bloco.', icon: Clock, color: 'border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400' },
    { type: 'condition', title: 'Condição', desc: 'Bifurca o fluxo entre as saídas SIM e NÃO.', icon: GitBranch, color: 'border-purple-200 bg-purple-50 text-purple-600 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400' },
    { type: 'wait_reply', title: 'Aguardar resposta', desc: 'Espera o cliente responder, com saída se o tempo esgotar.', icon: Reply, color: 'border-teal-200 bg-teal-50 text-teal-600 dark:border-teal-500/30 dark:bg-teal-500/10 dark:text-teal-400' },
    { type: 'end', title: 'Fim', desc: 'Encerra a execução do fluxo.', icon: Flag, color: 'border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400' },
];

const triggerEvent = computed(() => props.flow?.trigger_event || '');
const selectedNode = computed(() => nodes.value.find((node) => node.id === selectedNodeId.value) || null);
const selectedEdge = computed(() => edges.value.find((edge) => edge.id === selectedEdgeId.value) || null);

const defaultEdgeOptions = {
    type: 'zaprei',
    markerEnd: MarkerType.ArrowClosed,
    data: {},
};

watch(
    () => props.flow?.id,
    () => {
        const converted = toVueFlow(props.flow?.graph_json, triggerEvent.value);
        nodes.value = converted.nodes;
        edges.value = converted.edges;
        selectedNodeId.value = null;
        selectedEdgeId.value = null;
        setTimeout(() => fitView({ padding: 0.2, duration: 200 }), 0);
    },
    { immediate: true },
);

onConnect((connection) => {
    addEdges([{
        ...connection,
        ...defaultEdgeOptions,
        sourceHandle: connection.sourceHandle,
        data: { sourceHandle: connection.sourceHandle },
    }]);
});

function selectNode(id) {
    selectedNodeId.value = id;
    selectedEdgeId.value = null;
}

function selectEdge(id) {
    selectedEdgeId.value = id;
    selectedNodeId.value = null;
}

function clearSelection() {
    selectedNodeId.value = null;
    selectedEdgeId.value = null;
}

function addNode(type, position) {
    if (type === 'trigger' && nodes.value.some((node) => node.type === 'trigger')) {
        return;
    }
    const node = makeNode(type, position || { x: 420, y: 320 }, triggerEvent.value);
    nodes.value = [...nodes.value, node];
    selectNode(node.id);
}

function removeNode(id) {
    if (!id || nodes.value.find((node) => node.id === id)?.type === 'trigger') {
        return;
    }
    nodes.value = nodes.value.filter((node) => node.id !== id);
    edges.value = edges.value.filter((edge) => edge.source !== id && edge.target !== id);
    if (selectedNodeId.value === id) {
        selectedNodeId.value = null;
    }
}

function removeEdge(id) {
    edges.value = edges.value.filter((edge) => edge.id !== id);
    if (selectedEdgeId.value === id) {
        selectedEdgeId.value = null;
    }
}

function onDragStart(event, type) {
    event.dataTransfer?.setData('application/zaprei-node', type);
    event.dataTransfer.effectAllowed = 'move';
}

function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function onDrop(event) {
    event.preventDefault();
    const type = event.dataTransfer?.getData('application/zaprei-node');
    if (!type) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const position = project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
    });
    addNode(type, position);
}

function handleSave() {
    const stored = toStoredGraph(nodes.value, edges.value);
    const errors = validateGraph(stored);
    validationErrors.value = errors;
    if (errors.length) return;

    emit('save', stored);
}

defineExpose({
    requestSave: handleSave,
    handleSave,
});
</script>

<template>
    <div class="flex h-full flex-col lg:flex-row">
        <!-- Sidebar com Paleta de Blocos -->
        <aside class="flex w-full shrink-0 flex-col border-b border-zinc-200 bg-white p-4 lg:w-64 lg:border-r lg:border-b-0 dark:border-zinc-800 dark:bg-zinc-950">
            <div class="mb-4 flex items-center justify-between">
                <div>
                    <h3 class="text-xs font-bold uppercase tracking-wider text-zinc-400">Componentes</h3>
                    <p class="text-[11px] text-zinc-500">Arraste para a área de edição</p>
                </div>
                <button
                    type="button"
                    class="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-600 transition hover:bg-emerald-500/20 dark:text-emerald-400"
                    @click="simulatorOpen = true"
                >
                    <Sparkles class="h-3.5 w-3.5" />
                    <span>Simulador</span>
                </button>
            </div>

            <div class="space-y-2">
                <div
                    v-for="item in PALETTE"
                    :key="item.type"
                    draggable="true"
                    class="group flex cursor-grab items-start gap-3 rounded-2xl border p-2.5 transition active:cursor-grabbing hover:shadow-xs"
                    :class="item.color"
                    @dragstart="onDragStart($event, item.type)"
                    @click="addNode(item.type)"
                >
                    <component :is="item.icon" class="mt-0.5 h-4 w-4 shrink-0" />
                    <div>
                        <div class="text-xs font-bold">{{ item.title }}</div>
                        <div class="text-[10px] text-zinc-500 dark:text-zinc-400">{{ item.desc }}</div>
                    </div>
                </div>
            </div>

            <div class="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                    type="button"
                    :disabled="saving"
                    class="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 disabled:opacity-50"
                    @click="handleSave"
                >
                    <span>{{ saving ? 'Salvando...' : 'Salvar Alterações' }}</span>
                </button>
            </div>
        </aside>

        <!-- Canvas Principal -->
        <main class="relative h-full flex-1" @dragover="onDragOver" @drop="onDrop">
            <!-- Toast de Erros de Validação -->
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="-translate-y-2 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-2 opacity-0"
            >
                <div
                    v-if="validationErrors.length"
                    class="absolute top-4 left-1/2 z-50 -translate-x-1/2 max-w-md w-full px-4"
                >
                    <div class="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-md dark:bg-zinc-900/95 dark:border-red-500/30">
                        <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                            <AlertCircle class="h-4 w-4" />
                        </div>
                        <div class="flex-1 text-xs">
                            <p class="font-bold text-red-600 dark:text-red-400">Não foi possível salvar o fluxo:</p>
                            <ul class="mt-1 list-disc pl-4 space-y-0.5 text-zinc-600 dark:text-zinc-300">
                                <li v-for="(err, i) in validationErrors" :key="i">{{ err }}</li>
                            </ul>
                        </div>
                        <button
                            type="button"
                            class="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                            @click="validationErrors = []"
                        >
                            <X class="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </transition>

            <VueFlow
                v-model:nodes="nodes"
                v-model:edges="edges"
                class="zr-flow-canvas h-full"
                :min-zoom="0.2"
                :max-zoom="1.8"
                :default-edge-options="defaultEdgeOptions"
                @node-click="(event) => selectNode(event.node?.id)"
                @edge-click="(event) => selectEdge(event.edge?.id)"
                @pane-click="clearSelection"
            >
                <template #edge-zaprei="edgeProps">
                    <FlowEdge v-bind="edgeProps" @remove="removeEdge" />
                </template>

                <template #node-trigger="nodeProps">
                    <div
                        class="min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900"
                        :class="nodeProps.selected ? 'border-emerald-500 ring-4 ring-emerald-500/20 shadow-emerald-500/10' : 'border-zinc-200/90 dark:border-zinc-800'"
                    >
                        <Handle type="source" :position="Position.Right" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900" />

                        <div class="flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80">
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs shadow-emerald-500/30">
                                    <Zap class="h-3.5 w-3.5" />
                                </div>
                                <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100">{{ nodeLabel('trigger') }}</span>
                            </div>
                            <span class="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-600 dark:text-emerald-400">INÍCIO</span>
                        </div>

                        <div class="p-3">
                            <div class="flex items-center gap-1.5 rounded-xl border border-zinc-200/60 bg-zinc-50/80 px-2.5 py-1.5 font-mono text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-300">
                                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span class="truncate">{{ subtitleFor('trigger', nodeProps.data) }}</span>
                            </div>
                        </div>
                    </div>
                </template>

                <template #node-send_message="nodeProps">
                    <div
                        class="relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900"
                        :class="nodeProps.selected ? 'border-sky-500 ring-4 ring-sky-500/20 shadow-sky-500/10' : 'border-zinc-200/90 dark:border-zinc-800'"
                    >
                        <Handle type="target" :position="Position.Left" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500" />
                        <Handle type="source" :position="Position.Right" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-sky-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900" />

                        <div class="flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80">
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-sky-500 text-white shadow-xs shadow-sky-500/30">
                                    <MessageCircle class="h-3.5 w-3.5" />
                                </div>
                                <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100">{{ nodeLabel('send_message') }}</span>
                            </div>
                            <div class="flex items-center gap-1.5">
                                <span
                                    class="rounded-full border px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase"
                                    :class="messageModeMeta(nodeProps.data?.mode).color"
                                >
                                    {{ messageModeMeta(nodeProps.data?.mode).label }}
                                </span>
                                <button
                                    type="button"
                                    class="rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600"
                                    title="Excluir bloco"
                                    @click.stop="removeNode(nodeProps.id)"
                                >
                                    <X class="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>

                        <div class="p-3">
                            <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-xs text-zinc-700 shadow-xs dark:bg-emerald-950/20 dark:text-zinc-200">
                                <div v-if="nodeProps.data?.mode === 'audio'" class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                                    <Mic class="h-3.5 w-3.5" />
                                    <span class="font-mono text-[11px] font-semibold">Mensagem de Voz</span>
                                    <span class="text-[10px] text-zinc-400">PTT</span>
                                </div>
                                <div v-else-if="nodeProps.data?.mode === 'poll'" class="space-y-1">
                                    <div class="font-semibold text-zinc-900 dark:text-zinc-100 text-[11px] truncate">📊 {{ nodeProps.data?.question || 'Pergunta da enquete...' }}</div>
                                    <div class="text-[10px] text-zinc-500">{{ (nodeProps.data?.options || []).length }} opções configuradas</div>
                                </div>
                                <div v-else-if="nodeProps.data?.mode === 'buttons'" class="space-y-1.5">
                                    <p class="text-[11px] leading-snug line-clamp-2">{{ nodeProps.data?.text || 'Texto da mensagem...' }}</p>
                                    <div v-if="(nodeProps.data?.buttons || []).length" class="flex flex-wrap gap-1 pt-1 border-t border-emerald-500/10">
                                        <span
                                            v-for="(btn, idx) in (nodeProps.data?.buttons || []).slice(0, 3)"
                                            :key="idx"
                                            class="rounded-md border border-sky-500/30 bg-white/80 px-1.5 py-0.5 text-[9px] font-medium text-sky-700 dark:bg-zinc-800 dark:text-sky-300"
                                        >
                                            {{ btn.label || `Botão ${idx + 1}` }}
                                        </span>
                                    </div>
                                </div>
                                <div v-else class="line-clamp-2 text-[11px] leading-snug">
                                    {{ nodeProps.data?.text || nodeProps.data?.caption || 'Sem texto definido...' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <template #node-delay="nodeProps">
                    <div
                        class="relative min-w-[240px] max-w-[280px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900"
                        :class="nodeProps.selected ? 'border-amber-500 ring-4 ring-amber-500/20 shadow-amber-500/10' : 'border-zinc-200/90 dark:border-zinc-800'"
                    >
                        <Handle type="target" :position="Position.Left" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500" />
                        <Handle type="source" :position="Position.Right" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900" />

                        <div class="flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80">
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs shadow-amber-500/30">
                                    <Clock class="h-3.5 w-3.5" />
                                </div>
                                <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100">{{ nodeLabel('delay') }}</span>
                            </div>
                            <button
                                type="button"
                                class="rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600"
                                title="Excluir bloco"
                                @click.stop="removeNode(nodeProps.id)"
                            >
                                <X class="h-3.5 w-3.5" />
                            </button>
                        </div>

                        <div class="p-3">
                            <div class="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
                                <span class="relative flex h-2 w-2">
                                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                                    <span class="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                                </span>
                                <span>{{ subtitleFor('delay', nodeProps.data) }}</span>
                            </div>
                        </div>
                    </div>
                </template>

                <template #node-condition="nodeProps">
                    <div
                        class="relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900"
                        :class="nodeProps.selected ? 'border-purple-500 ring-4 ring-purple-500/20 shadow-purple-500/10' : 'border-zinc-200/90 dark:border-zinc-800'"
                    >
                        <Handle type="target" :position="Position.Left" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500" />

                        <div class="flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-purple-500/10 via-purple-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80">
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-500 text-white shadow-xs shadow-purple-500/30">
                                    <GitBranch class="h-3.5 w-3.5" />
                                </div>
                                <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100">{{ nodeLabel('condition') }}</span>
                            </div>
                            <button
                                type="button"
                                class="rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600"
                                title="Excluir bloco"
                                @click.stop="removeNode(nodeProps.id)"
                            >
                                <X class="h-3.5 w-3.5" />
                            </button>
                        </div>

                        <div class="p-3 space-y-2.5 pb-12">
                            <div class="rounded-xl border border-purple-500/20 bg-purple-500/10 px-2.5 py-1.5 text-[11px] font-medium text-purple-700 dark:text-purple-300">
                                <span class="line-clamp-2">{{ subtitleFor('condition', nodeProps.data) }}</span>
                            </div>

                            <!-- Saídas Nomeadas SIM e NÃO com badges e handles dedicados -->
                            <span class="pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400">
                                SIM
                            </span>
                            <Handle id="yes" type="source" :position="Position.Right" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-emerald-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900" style="top: 58%" />

                            <span class="pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400">
                                NÃO
                            </span>
                            <Handle id="no" type="source" :position="Position.Right" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-rose-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900" style="top: 82%" />
                        </div>
                    </div>
                </template>

                <template #node-wait_reply="nodeProps">
                    <div
                        class="relative min-w-[260px] max-w-[300px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900"
                        :class="nodeProps.selected ? 'border-teal-500 ring-4 ring-teal-500/20 shadow-teal-500/10' : 'border-zinc-200/90 dark:border-zinc-800'"
                    >
                        <Handle type="target" :position="Position.Left" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500" />

                        <div class="flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80">
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-500 text-white shadow-xs shadow-teal-500/30">
                                    <Reply class="h-3.5 w-3.5" />
                                </div>
                                <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100">{{ nodeLabel('wait_reply') }}</span>
                            </div>
                            <button
                                type="button"
                                class="rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600"
                                title="Excluir bloco"
                                @click.stop="removeNode(nodeProps.id)"
                            >
                                <X class="h-3.5 w-3.5" />
                            </button>
                        </div>

                        <div class="p-3 space-y-2.5 pb-12">
                            <div class="rounded-xl border border-teal-500/20 bg-teal-500/10 px-2.5 py-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-300">
                                <span class="line-clamp-2">{{ subtitleFor('wait_reply', nodeProps.data) }}</span>
                            </div>

                            <!-- Saídas Nomeadas RESPONDEU e ESGOTOU -->
                            <span class="pointer-events-none absolute top-[58%] right-4 -translate-y-1/2 rounded-full border border-teal-500/30 bg-teal-500/15 px-2 py-0.5 text-[9px] font-black text-teal-600 dark:text-teal-400">
                                RESPONDEU
                            </span>
                            <Handle id="replied" type="source" :position="Position.Right" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-teal-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900" style="top: 58%" />

                            <span class="pointer-events-none absolute top-[82%] right-4 -translate-y-1/2 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400">
                                ESGOTOU
                            </span>
                            <Handle id="timeout" type="source" :position="Position.Right" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-amber-500 shadow-sm transition hover:!scale-125 dark:!border-zinc-900" style="top: 82%" />
                        </div>
                    </div>
                </template>

                <template #node-end="nodeProps">
                    <div
                        class="relative min-w-[200px] overflow-hidden rounded-2xl border bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900"
                        :class="nodeProps.selected ? 'border-rose-500 ring-4 ring-rose-500/20 shadow-rose-500/10' : 'border-zinc-200/90 dark:border-zinc-800'"
                    >
                        <Handle type="target" :position="Position.Left" class="!h-3.5 !w-3.5 !rounded-full !border-2 !border-white !bg-zinc-400 shadow-sm transition hover:!scale-125 dark:!border-zinc-900 dark:!bg-zinc-500" />

                        <div class="flex items-center justify-between border-b border-zinc-100 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent px-3 py-2.5 dark:border-zinc-800/80">
                            <div class="flex items-center gap-2">
                                <div class="flex h-6 w-6 items-center justify-center rounded-lg bg-rose-500 text-white shadow-xs shadow-rose-500/30">
                                    <Flag class="h-3.5 w-3.5" />
                                </div>
                                <span class="text-xs font-bold text-zinc-900 dark:text-zinc-100">{{ nodeLabel('end') }}</span>
                            </div>
                            <button
                                type="button"
                                class="rounded-lg p-1 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600"
                                title="Excluir bloco"
                                @click.stop="removeNode(nodeProps.id)"
                            >
                                <X class="h-3.5 w-3.5" />
                            </button>
                        </div>

                        <div class="p-3">
                            <p class="text-[11px] text-zinc-500 dark:text-zinc-400">Execução encerrada com sucesso.</p>
                        </div>
                    </div>
                </template>

                <Background :gap="18" pattern-color="rgba(120,120,120,0.25)" />
                <Controls />
            </VueFlow>
        </main>

        <NodeInspector
            :node="selectedNode"
            :edge="selectedEdge"
            @remove-node="removeNode"
            @remove-edge="removeEdge"
        />

        <FlowSimulatorModal
            v-if="simulatorOpen"
            :flow="flow"
            :nodes="nodes"
            :edges="edges"
            @close="simulatorOpen = false"
        />
    </div>
</template>
