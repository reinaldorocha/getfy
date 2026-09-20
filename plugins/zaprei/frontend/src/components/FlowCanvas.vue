<script setup>
import { computed, ref, watch } from 'vue';
import { Handle, MarkerType, Position, VueFlow, useVueFlow } from '@vue-flow/core';
import { Background } from '@vue-flow/background';
import { Controls } from '@vue-flow/controls';
import { AlertCircle, Clock, Flag, GitBranch, MessageCircle, Reply, X, Zap } from 'lucide-vue-next';
import FlowEdge from './FlowEdge.vue';
import NodeInspector from './NodeInspector.vue';
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
    addEdges([{ ...connection, ...defaultEdgeOptions, data: {} }]);
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
    addNode(type, project({ x: event.clientX - bounds.left, y: event.clientY - bounds.top }));
}

function requestSave() {
    const errors = validateGraph(nodes.value);
    if (errors.length > 0) {
        validationErrors.value = errors;

        return;
    }
    validationErrors.value = [];
    emit('save', toStoredGraph(nodes.value, edges.value));
}

defineExpose({ requestSave });
</script>

<template>
    <div class="flex h-full">
        <aside class="flex w-64 shrink-0 flex-col gap-3 overflow-y-auto border-r border-zinc-200 p-4 dark:border-zinc-800">
            <div>
                <div class="mb-1 text-xs font-black tracking-wider text-zinc-400 uppercase">Componentes</div>
                <p class="mb-3 text-xs text-zinc-500 dark:text-zinc-400">Arraste para o canvas ou clique duas vezes para adicionar:</p>
            </div>
            <div
                v-for="item in PALETTE"
                :key="item.type"
                class="group relative flex cursor-grab items-start gap-3 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-3 shadow-2xs transition select-none hover:border-emerald-500/40 hover:bg-white hover:shadow-md active:cursor-grabbing dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-500/40"
                draggable="true"
                @dragstart="(event) => onDragStart(event, item.type)"
                @dblclick="addNode(item.type)"
            >
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border" :class="item.color">
                    <component :is="item.icon" class="h-4 w-4" />
                </div>
                <div>
                    <div class="text-xs font-bold text-zinc-900 dark:text-white">{{ item.title }}</div>
                    <div class="text-[11px] text-zinc-500 dark:text-zinc-400">{{ item.desc }}</div>
                </div>
            </div>
            <div class="mt-auto border-t border-zinc-100 pt-6 text-[11px] text-zinc-400 dark:border-zinc-800/80">
                💡 Dica: conecte puxando do ponto de saída para o ponto de entrada de outro bloco.
            </div>
        </aside>

        <main class="relative flex-1 bg-zinc-50/60 dark:bg-zinc-950/80" @dragover="onDragOver" @drop="onDrop">
            <div
                v-if="validationErrors.length > 0"
                class="absolute inset-x-4 top-4 z-10 space-y-1 rounded-2xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-700 shadow-lg dark:border-rose-500/30 dark:bg-rose-950/80 dark:text-rose-300"
            >
                <div class="flex items-center gap-1.5 font-bold">
                    <AlertCircle class="h-3.5 w-3.5" />
                    Corrija antes de salvar:
                </div>
                <ul class="list-disc space-y-0.5 pl-5">
                    <li v-for="(error, index) in validationErrors" :key="index">{{ error }}</li>
                </ul>
            </div>

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
                    <div class="min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900" :class="nodeProps.selected ? 'border-emerald-500 ring-4 ring-emerald-500/20' : 'border-zinc-200 dark:border-zinc-700'">
                        <Handle type="source" :position="Position.Right" />
                        <div class="flex items-center justify-between gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                            <span class="flex items-center gap-1.5"><Zap class="h-3.5 w-3.5 text-emerald-500" />{{ nodeLabel('trigger') }}</span>
                            <span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400">INÍCIO</span>
                        </div>
                        <div class="mt-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{{ subtitleFor('trigger', nodeProps.data) }}</div>
                    </div>
                </template>

                <template #node-send_message="nodeProps">
                    <div class="relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900" :class="nodeProps.selected ? 'border-emerald-500 ring-4 ring-emerald-500/20' : 'border-zinc-200 dark:border-zinc-700'">
                        <Handle type="target" :position="Position.Left" />
                        <Handle type="source" :position="Position.Right" />
                        <button type="button" class="absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600" @click.stop="removeNode(nodeProps.id)">
                            <X class="h-3.5 w-3.5" />
                        </button>
                        <div class="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white">
                            <MessageCircle class="h-3.5 w-3.5 text-blue-500" />{{ nodeLabel('send_message') }}
                        </div>
                        <div class="mt-1.5 truncate text-[11px] text-zinc-500 dark:text-zinc-400">{{ subtitleFor('send_message', nodeProps.data) }}</div>
                    </div>
                </template>

                <template #node-delay="nodeProps">
                    <div class="relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900" :class="nodeProps.selected ? 'border-emerald-500 ring-4 ring-emerald-500/20' : 'border-zinc-200 dark:border-zinc-700'">
                        <Handle type="target" :position="Position.Left" />
                        <Handle type="source" :position="Position.Right" />
                        <button type="button" class="absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600" @click.stop="removeNode(nodeProps.id)">
                            <X class="h-3.5 w-3.5" />
                        </button>
                        <div class="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white">
                            <Clock class="h-3.5 w-3.5 text-amber-500" />{{ nodeLabel('delay') }}
                        </div>
                        <div class="mt-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">{{ subtitleFor('delay', nodeProps.data) }}</div>
                    </div>
                </template>

                <template #node-condition="nodeProps">
                    <div class="relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 pr-6 shadow-lg dark:bg-zinc-900" :class="nodeProps.selected ? 'border-emerald-500 ring-4 ring-emerald-500/20' : 'border-zinc-200 dark:border-zinc-700'">
                        <Handle type="target" :position="Position.Left" />
                        <button type="button" class="absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600" @click.stop="removeNode(nodeProps.id)">
                            <X class="h-3.5 w-3.5" />
                        </button>
                        <div class="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white">
                            <GitBranch class="h-3.5 w-3.5 text-purple-500" />{{ nodeLabel('condition') }}
                        </div>
                        <div class="mt-1.5 truncate text-[11px] text-zinc-500 dark:text-zinc-400">{{ subtitleFor('condition', nodeProps.data) }}</div>

                        <!-- Duas saídas nomeadas: a linha nasce de uma delas, sem precisar
                             marcar SIM/NÃO depois — a origem já diz qual é. -->
                        <span class="pointer-events-none absolute top-[35%] right-4 -translate-y-1/2 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400">SIM</span>
                        <Handle id="yes" type="source" :position="Position.Right" class="!bg-emerald-500 !border-emerald-600" style="top: 35%" />
                        <span class="pointer-events-none absolute top-[65%] right-4 -translate-y-1/2 rounded-full bg-rose-500/10 px-1.5 py-0.5 text-[9px] font-black text-rose-600 dark:text-rose-400">NÃO</span>
                        <Handle id="no" type="source" :position="Position.Right" class="!bg-rose-500 !border-rose-600" style="top: 65%" />
                    </div>
                </template>

                <template #node-wait_reply="nodeProps">
                    <div class="relative min-w-[210px] max-w-[260px] rounded-2xl border bg-white p-3 pr-6 shadow-lg dark:bg-zinc-900" :class="nodeProps.selected ? 'border-emerald-500 ring-4 ring-emerald-500/20' : 'border-zinc-200 dark:border-zinc-700'">
                        <Handle type="target" :position="Position.Left" />
                        <button type="button" class="absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600" @click.stop="removeNode(nodeProps.id)">
                            <X class="h-3.5 w-3.5" />
                        </button>
                        <div class="flex items-center gap-1.5 text-xs font-bold text-zinc-900 dark:text-white">
                            <Reply class="h-3.5 w-3.5 text-teal-500" />{{ nodeLabel('wait_reply') }}
                        </div>
                        <div class="mt-1.5 truncate text-[11px] text-zinc-500 dark:text-zinc-400">{{ subtitleFor('wait_reply', nodeProps.data) }}</div>

                        <!-- Duas saídas nomeadas, mesma convenção do bloco de condição. -->
                        <span class="pointer-events-none absolute top-[35%] right-4 -translate-y-1/2 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-black text-emerald-600 dark:text-emerald-400">RESPONDEU</span>
                        <Handle id="replied" type="source" :position="Position.Right" class="!bg-emerald-500 !border-emerald-600" style="top: 35%" />
                        <span class="pointer-events-none absolute top-[65%] right-4 -translate-y-1/2 rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-black text-amber-600 dark:text-amber-400">ESGOTOU</span>
                        <Handle id="timeout" type="source" :position="Position.Right" class="!bg-amber-500 !border-amber-600" style="top: 65%" />
                    </div>
                </template>

                <template #node-end="nodeProps">
                    <div class="relative min-w-[160px] rounded-2xl border bg-white p-3 shadow-lg dark:bg-zinc-900" :class="nodeProps.selected ? 'border-emerald-500 ring-4 ring-emerald-500/20' : 'border-zinc-200 dark:border-zinc-700'">
                        <Handle type="target" :position="Position.Left" />
                        <button type="button" class="absolute top-1.5 right-1.5 rounded-lg p-1 text-zinc-400 hover:bg-rose-500/10 hover:text-rose-600" @click.stop="removeNode(nodeProps.id)">
                            <X class="h-3.5 w-3.5" />
                        </button>
                        <div class="flex items-center justify-between gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                            <span class="flex items-center gap-1.5"><Flag class="h-3.5 w-3.5 text-rose-500" />{{ nodeLabel('end') }}</span>
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
    </div>
</template>
