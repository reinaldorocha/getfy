<script setup>
import { computed, onMounted, ref } from 'vue';
import { Bot, Check, CheckCheck, Clock, FastForward, Play, RefreshCw, Send, Smartphone, Sparkles, User, X } from 'lucide-vue-next';
import MessagePreview from './MessagePreview.vue';

const props = defineProps({
    flow: { type: Object, required: true },
    nodes: { type: Array, required: true },
    edges: { type: Array, required: true },
});

const emit = defineEmits(['close']);

// Estado da simulação
const currentNodeId = ref(null);
const history = ref([]); // { type: 'bot' | 'user' | 'system', text, mode, data, time }
const isRunning = ref(false);
const waitingForReply = ref(false);
const replyInput = ref('');
const orderPaid = ref(false);
const currentDelay = ref(null);

const currentNode = computed(() => props.nodes.find((n) => n.id === currentNodeId.value));

function nowTime() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function start() {
    history.value = [];
    waitingForReply.value = false;
    currentDelay.value = null;
    replyInput.value = '';

    const trigger = props.nodes.find((n) => n.type === 'trigger');
    if (!trigger) {
        history.value.push({
            type: 'system',
            text: 'Gatilho inicial não encontrado no fluxo.',
            time: nowTime(),
        });
        return;
    }

    history.value.push({
        type: 'system',
        text: `🚀 Gatilho disparado: ${trigger.data?.event_class || 'Evento do Fluxo'}`,
        time: nowTime(),
    });

    currentNodeId.value = trigger.id;
    stepNext();
}

function findNextEdge(sourceId, condition = null) {
    return props.edges.find((e) => {
        if (e.source !== sourceId) return false;
        if (condition === null) return true;
        const edgeCond = e.sourceHandle === 'yes' || e.sourceHandle === 'replied' || e.data?.condition === 'true' ? 'true'
            : (e.sourceHandle === 'no' || e.sourceHandle === 'timeout' || e.data?.condition === 'false' ? 'false' : null);
        return edgeCond === condition;
    });
}

function stepNext() {
    if (!currentNodeId.value) return;

    const curr = props.nodes.find((n) => n.id === currentNodeId.value);
    if (!curr) return;

    if (curr.type === 'trigger') {
        const edge = findNextEdge(curr.id);
        if (!edge) return finish('Fluxo finalizado após o gatilho.');
        currentNodeId.value = edge.target;
        processCurrentNode();
        return;
    }

    if (curr.type === 'send_message') {
        const edge = findNextEdge(curr.id);
        if (!edge) return finish('Fim do fluxo atingido.');
        currentNodeId.value = edge.target;
        processCurrentNode();
        return;
    }

    if (curr.type === 'delay') {
        const edge = findNextEdge(curr.id);
        if (!edge) return finish('Fim do fluxo atingido.');
        currentNodeId.value = edge.target;
        processCurrentNode();
        return;
    }

    if (curr.type === 'condition') {
        const condResult = orderPaid.value ? 'true' : 'false';
        const edge = findNextEdge(curr.id, condResult);
        if (!edge) return finish(`Fim do fluxo (ramificação ${condResult === 'true' ? 'SIM' : 'NÃO'} sem saída).`);
        currentNodeId.value = edge.target;
        processCurrentNode();
        return;
    }

    if (curr.type === 'end') {
        finish('Fluxo finalizado com sucesso.');
    }
}

function processCurrentNode() {
    const node = props.nodes.find((n) => n.id === currentNodeId.value);
    if (!node) return;

    if (node.type === 'send_message') {
        history.value.push({
            type: 'bot',
            mode: node.data?.mode || 'text',
            text: node.data?.text || node.data?.caption || 'Mensagem enviada',
            data: node.data || {},
            time: nowTime(),
        });
        setTimeout(stepNext, 800);
        return;
    }

    if (node.type === 'delay') {
        const value = node.data?.delay_value || 15;
        const unit = node.data?.delay_unit || 'minutes';
        currentDelay.value = `${value} ${unit}`;
        history.value.push({
            type: 'system',
            text: `⏱️ Aguardando delay de ${value} ${unit}...`,
            time: nowTime(),
        });
        return;
    }

    if (node.type === 'condition') {
        const condResult = orderPaid.value;
        history.value.push({
            type: 'system',
            text: `🔀 Avaliando condição: Pedido pago? -> ${condResult ? 'SIM (Aprovado)' : 'NÃO (Pendente)'}`,
            time: nowTime(),
        });
        setTimeout(stepNext, 600);
        return;
    }

    if (node.type === 'wait_reply') {
        waitingForReply.value = true;
        history.value.push({
            type: 'system',
            text: `👂 Aguardando resposta do cliente (digite uma resposta abaixo)...`,
            time: nowTime(),
        });
        return;
    }

    if (node.type === 'end') {
        finish('Fluxo concluído.');
    }
}

function skipDelay() {
    if (!currentDelay.value) return;
    currentDelay.value = null;
    history.value.push({
        type: 'system',
        text: `⏩ Tempo avançado pelo simulador.`,
        time: nowTime(),
    });
    stepNext();
}

function sendReply() {
    if (!replyInput.value.trim()) return;

    const userText = replyInput.value.trim();
    replyInput.value = '';
    waitingForReply.value = false;

    history.value.push({
        type: 'user',
        text: userText,
        time: nowTime(),
    });

    const curr = props.nodes.find((n) => n.id === currentNodeId.value);
    if (curr && curr.type === 'wait_reply') {
        const edge = findNextEdge(curr.id, 'true');
        if (!edge) return finish('Fim do fluxo (saída RESPONDEU não conectada).');
        currentNodeId.value = edge.target;
        setTimeout(processCurrentNode, 500);
    }
}

function timeoutReply() {
    waitingForReply.value = false;
    history.value.push({
        type: 'system',
        text: `⏳ Tempo limite de resposta esgotado.`,
        time: nowTime(),
    });

    const curr = props.nodes.find((n) => n.id === currentNodeId.value);
    if (curr && curr.type === 'wait_reply') {
        const edge = findNextEdge(curr.id, 'false');
        if (!edge) return finish('Fim do fluxo (saída ESGOTOU não conectada).');
        currentNodeId.value = edge.target;
        setTimeout(processCurrentNode, 500);
    }
}

function finish(msg) {
    history.value.push({
        type: 'system',
        text: `🏁 ${msg}`,
        time: nowTime(),
    });
    currentNodeId.value = null;
}

onMounted(start);
</script>

<template>
    <div class="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <div class="flex h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl transition dark:border-zinc-800 dark:bg-zinc-900">
            <!-- Coluna de Controles e Variáveis do Simulador -->
            <div class="hidden w-80 flex-col border-r border-zinc-200 bg-zinc-50/50 p-5 md:flex dark:border-zinc-800 dark:bg-zinc-950/40">
                <div class="flex items-center gap-2">
                    <Sparkles class="h-4 w-4 text-emerald-500" />
                    <h3 class="text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-white">Simulador de Fluxo</h3>
                </div>
                <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                    Teste o comportamento do fluxo passo a passo em um smartphone virtual.
                </p>

                <!-- Status de Variáveis Fictícias -->
                <div class="mt-6 space-y-4">
                    <div class="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                        <label class="block text-xs font-bold text-zinc-700 dark:text-zinc-300">Variável: Pedido Pago?</label>
                        <p class="mt-0.5 text-[10px] text-zinc-500 dark:text-zinc-400">Altera o resultado de blocos de condição.</p>
                        <div class="mt-2.5 flex items-center gap-2">
                            <button
                                type="button"
                                class="flex-1 rounded-xl py-1.5 text-xs font-bold transition"
                                :class="orderPaid ? 'bg-emerald-600 text-white shadow-xs' : 'border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300'"
                                @click="orderPaid = true"
                            >
                                SIM (Pago)
                            </button>
                            <button
                                type="button"
                                class="flex-1 rounded-xl py-1.5 text-xs font-bold transition"
                                :class="!orderPaid ? 'bg-rose-600 text-white shadow-xs' : 'border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300'"
                                @click="orderPaid = false"
                            >
                                NÃO (Pendente)
                            </button>
                        </div>
                    </div>

                    <!-- Botão de Pular Delay se houver -->
                    <div v-if="currentDelay" class="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5">
                        <div class="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-300">
                            <Clock class="h-4 w-4" />
                            <span>Aguardando: {{ currentDelay }}</span>
                        </div>
                        <button
                            type="button"
                            class="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white transition hover:bg-amber-600"
                            @click="skipDelay"
                        >
                            <FastForward class="h-3.5 w-3.5" />
                            <span>Avançar Tempo Agora</span>
                        </button>
                    </div>

                    <!-- Botão de Esgotar Tempo de Resposta -->
                    <div v-if="waitingForReply" class="rounded-2xl border border-teal-500/30 bg-teal-500/10 p-3.5">
                        <div class="text-xs font-bold text-teal-700 dark:text-teal-300">
                            Cliente não respondeu?
                        </div>
                        <button
                            type="button"
                            class="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-teal-600 py-1.5 text-xs font-bold text-white transition hover:bg-teal-700"
                            @click="timeoutReply"
                        >
                            <span>Simular Timeout (Esgotou)</span>
                        </button>
                    </div>
                </div>

                <div class="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <button
                        type="button"
                        class="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-2 text-xs font-bold text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        @click="start"
                    >
                        <RefreshCw class="h-3.5 w-3.5" />
                        <span>Reiniciar Simulação</span>
                    </button>
                </div>
            </div>

            <!-- Coluna do Smartphone Virtual -->
            <div class="flex flex-1 flex-col bg-[#eae6df] dark:bg-[#0b141a]">
                <!-- Header do WhatsApp -->
                <div class="flex items-center justify-between border-b border-zinc-200/40 bg-[#f0f2f5] px-4 py-3 dark:border-zinc-800 dark:bg-[#202c33]">
                    <div class="flex items-center gap-3">
                        <div class="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs">
                            ZR
                        </div>
                        <div>
                            <div class="text-xs font-bold text-zinc-900 dark:text-white">{{ flow.name }}</div>
                            <div class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">online agora</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button
                            type="button"
                            class="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-black/5 dark:text-zinc-400 dark:hover:bg-white/5"
                            @click="emit('close')"
                        >
                            <X class="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <!-- Lista de Mensagens no WhatsApp -->
                <div class="flex-1 space-y-3 overflow-y-auto p-4">
                    <template v-for="(msg, idx) in history" :key="idx">
                        <!-- Mensagem do Sistema / Log do Simulador -->
                        <div v-if="msg.type === 'system'" class="flex justify-center my-1">
                            <span class="rounded-lg bg-zinc-200/80 px-2.5 py-1 text-[10px] font-semibold text-zinc-700 shadow-xs dark:bg-zinc-800 dark:text-zinc-300">
                                {{ msg.text }}
                            </span>
                        </div>

                        <!-- Balão do Bot (Esquerda) -->
                        <div v-else-if="msg.type === 'bot'" class="flex justify-start">
                            <div class="max-w-[85%] rounded-2xl rounded-tl-xs bg-white p-3 text-xs text-zinc-900 shadow-xs dark:bg-[#202c33] dark:text-zinc-100">
                                <MessagePreview
                                    :text="msg.text"
                                    :mode="msg.mode"
                                    :caption="msg.data?.caption"
                                    recipient-name="Cliente Teste"
                                />
                                <div class="mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-400">
                                    <span>{{ msg.time }}</span>
                                    <CheckCheck class="h-3 w-3 text-sky-500" />
                                </div>
                            </div>
                        </div>

                        <!-- Balão do Usuário (Direita) -->
                        <div v-else-if="msg.type === 'user'" class="flex justify-end">
                            <div class="max-w-[80%] rounded-2xl rounded-tr-xs bg-[#d9fdd3] p-2.5 text-xs text-zinc-900 shadow-xs dark:bg-[#005c4b] dark:text-zinc-100">
                                <p class="leading-relaxed">{{ msg.text }}</p>
                                <div class="mt-1 flex items-center justify-end gap-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                                    <span>{{ msg.time }}</span>
                                    <CheckCheck class="h-3 w-3 text-sky-500" />
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <!-- Barra de Resposta do Cliente -->
                <div class="border-t border-zinc-200/40 bg-[#f0f2f5] p-3 dark:border-zinc-800 dark:bg-[#202c33]">
                    <form class="flex items-center gap-2" @submit.prevent="sendReply">
                        <input
                            v-model="replyInput"
                            type="text"
                            :disabled="!waitingForReply"
                            :placeholder="waitingForReply ? 'Digite a resposta do cliente simulado...' : 'Aguardando o fluxo solicitar resposta...'"
                            class="flex-1 rounded-2xl border-none bg-white px-4 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none disabled:opacity-50 dark:bg-[#2a3942] dark:text-white"
                        >
                        <button
                            type="submit"
                            :disabled="!waitingForReply || !replyInput.trim()"
                            class="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:opacity-40"
                        >
                            <Send class="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
