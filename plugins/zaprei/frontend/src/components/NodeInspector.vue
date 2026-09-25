<script setup>
import { ref, watch } from 'vue';
import { Trash2 } from 'lucide-vue-next';
import MessageEditor from './MessageEditor.vue';
import MessagePreview from './MessagePreview.vue';
import { SAMPLE_CONTEXT } from '../preview';
import {
    CONDITION_KINDS,
    ORDER_STATUS_OPTIONS,
    PAYMENT_METHOD_OPTIONS,
    defaultModeData,
    delayUnitLabel,
    nodeLabel,
    secondsFromValueUnit,
    valueUnitFromSeconds,
} from '../constants';

const props = defineProps({
    node: { type: Object, default: null },
    edge: { type: Object, default: null },
});

const emit = defineEmits(['remove-node', 'remove-edge']);

const tab = ref('config');

const inputClass = 'w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-900 focus:border-emerald-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-white';
const labelClass = 'mb-1 block text-xs font-semibold text-zinc-700 dark:text-zinc-300';

/**
 * Reseta os campos específicos ao trocar o tipo de mensagem NO MESMO nó — não
 * quando o usuário apenas seleciona outro nó que já tinha um modo diferente
 * configurado (senão perderíamos a configuração salva ao clicar em outro bloco).
 */
let lastModeNodeId = null;
let lastMode = null;
watch(
    () => [props.node?.id, props.node?.data?.mode],
    ([nodeId, mode]) => {
        if (nodeId === undefined || mode === undefined) return;
        if (nodeId === lastModeNodeId && mode !== lastMode) {
            Object.assign(props.node.data, defaultModeData(mode));
        }
        lastModeNodeId = nodeId;
        lastMode = mode;
    },
    { immediate: true },
);

/** Fluxos antigos podem só ter `seconds`; decompõe na maior unidade redonda. */
watch(
    () => props.node,
    (node) => {
        if (!['delay', 'wait_reply'].includes(node?.type) || node.data.delay_value) return;
        const { value, unit } = valueUnitFromSeconds(node.data.seconds || 0);
        node.data.delay_value = value;
        node.data.delay_unit = unit;
    },
    { immediate: true },
);

watch(() => props.node?.id, () => { tab.value = 'config'; });

function updateDelay() {
    if (!['delay', 'wait_reply'].includes(props.node?.type)) return;
    props.node.data.seconds = secondsFromValueUnit(props.node.data.delay_value, props.node.data.delay_unit);
}
</script>

<template>
    <aside class="flex w-80 shrink-0 flex-col overflow-y-auto border-l border-zinc-200 bg-zinc-50/60 dark:border-zinc-800 dark:bg-zinc-950/60">
        <template v-if="node">
            <div class="flex items-start justify-between gap-2 p-4 pb-0">
                <div>
                    <h3 class="text-sm font-bold text-zinc-900 dark:text-white">{{ nodeLabel(node.type) }}</h3>
                    <p class="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{{ node.id }}</p>
                </div>
                <button
                    v-if="node.type !== 'trigger'"
                    type="button"
                    class="flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700"
                    @click="emit('remove-node', node.id)"
                >
                    <Trash2 class="h-3 w-3" />
                    Excluir
                </button>
            </div>

            <template v-if="node.type === 'trigger'">
                <div class="space-y-4 p-4">
                    <div>
                        <label :class="labelClass">Evento</label>
                        <input :class="inputClass" type="text" :value="node.data.event_class || ''" disabled class="opacity-70">
                        <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">Definido pelo gatilho escolhido ao criar o fluxo.</p>
                    </div>
                </div>
            </template>

            <template v-else-if="node.type === 'send_message'">
                <div class="flex gap-1 border-b border-zinc-200 px-4 dark:border-zinc-800">
                    <button
                        type="button"
                        class="border-b-2 px-3 py-2 text-xs font-bold transition"
                        :class="tab === 'config' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'"
                        @click="tab = 'config'"
                    >
                        Configurar
                    </button>
                    <button
                        type="button"
                        class="border-b-2 px-3 py-2 text-xs font-bold transition"
                        :class="tab === 'preview' ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'border-transparent text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'"
                        @click="tab = 'preview'"
                    >
                        Pré-visualização
                    </button>
                </div>

                <div v-if="tab === 'preview'" class="p-4">
                    <MessagePreview
                        :text="node.data.text || node.data.question || node.data.title || ''"
                        :caption="node.data.caption"
                        :mode="node.data.mode"
                        :recipient-name="SAMPLE_CONTEXT.customer.name"
                    />
                </div>

                <div v-else class="p-4">
                    <MessageEditor :data="node.data" />
                </div>
            </template>

            <template v-else-if="node.type === 'delay'">
                <div class="space-y-1 p-4">
                    <label :class="labelClass" for="zr-delay-value">Tempo de espera</label>
                    <div class="flex gap-2">
                        <input id="zr-delay-value" v-model.number="node.data.delay_value" type="number" min="1" :class="inputClass" @change="updateDelay">
                        <select v-model="node.data.delay_unit" :class="inputClass" @change="updateDelay">
                            <option value="seconds">Segundos</option>
                            <option value="minutes">Minutos</option>
                            <option value="hours">Horas</option>
                            <option value="days">Dias</option>
                        </select>
                    </div>
                    <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                        Aguarda {{ node.data.delay_value || 0 }} {{ delayUnitLabel(node.data.delay_unit) }} (máximo de 24 horas).
                        O fluxo é retomado automaticamente pela fila.
                    </p>
                </div>
            </template>

            <template v-else-if="node.type === 'condition'">
                <div class="space-y-4 p-4">
                    <div>
                        <label :class="labelClass" for="zr-kind">Regra de validação</label>
                        <select id="zr-kind" v-model="node.data.kind" :class="inputClass">
                            <option v-for="kind in CONDITION_KINDS" :key="kind.value" :value="kind.value">{{ kind.label }}</option>
                        </select>
                    </div>

                    <div v-if="node.data.kind === 'order_status_is'">
                        <label :class="labelClass" for="zr-order-status">Status esperado</label>
                        <select id="zr-order-status" v-model="node.data.value" :class="inputClass">
                            <option v-for="status in ORDER_STATUS_OPTIONS" :key="status.value" :value="status.value">{{ status.label }}</option>
                        </select>
                    </div>

                    <div v-else-if="node.data.kind === 'payment_method_is'">
                        <label :class="labelClass" for="zr-payment-method">Método de pagamento</label>
                        <select id="zr-payment-method" v-model="node.data.value" :class="inputClass">
                            <option v-for="method in PAYMENT_METHOD_OPTIONS" :key="method.value" :value="method.value">{{ method.label }}</option>
                        </select>
                    </div>

                    <div v-else-if="node.data.kind === 'event_is'">
                        <label :class="labelClass" for="zr-value">Classe do evento</label>
                        <input id="zr-value" v-model.trim="node.data.value" type="text" placeholder="App\Events\OrderCompleted" :class="inputClass">
                    </div>

                    <div v-else-if="node.data.kind === 'reply_matches'" class="space-y-3 rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3.5">
                        <div class="text-xs font-bold text-zinc-900 dark:text-white">Identificar resposta do cliente</div>
                        <div>
                            <label :class="labelClass" for="zr-reply-mode">Modo de correspondência</label>
                            <select id="zr-reply-mode" v-model="node.data.match_mode" :class="inputClass">
                                <option value="contains">Contém o texto</option>
                                <option value="exact">Texto exato</option>
                            </select>
                        </div>

                        <div>
                            <label :class="labelClass" for="zr-reply-value">Texto esperado</label>
                            <input
                                id="zr-reply-value"
                                v-model="node.data.value"
                                type="text"
                                placeholder="Ex: eu quero"
                                :class="inputClass"
                            >
                        </div>

                        <div class="space-y-2 pt-1">
                            <label class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <input
                                    v-model="node.data.case_sensitive"
                                    type="checkbox"
                                    class="rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                                >
                                <span>Diferenciar maiúsculas e minúsculas</span>
                            </label>

                            <label class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                <input
                                    v-model="node.data.ignore_accents"
                                    type="checkbox"
                                    class="rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                                >
                                <span>Ignorar acentos (ex: "não" = "nao", "é" = "e")</span>
                            </label>
                        </div>

                        <p class="text-[11px] text-teal-700 dark:text-teal-300">
                            Avalia a última mensagem enviada pelo cliente. Segue por <strong class="text-emerald-600 dark:text-emerald-400">SIM</strong> se corresponder, ou <strong class="text-rose-600 dark:text-rose-400">NÃO</strong> caso responda outra coisa (ex: "não").
                        </p>
                    </div>

                    <p v-if="node.data.kind === 'order_is_paid'" class="rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400">
                        Consulta o status atual do pedido no momento da execução — ideal depois de um bloco de espera.
                    </p>
                    <p v-else-if="node.data.kind === 'has_order_bumps'" class="rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700 dark:text-emerald-400">
                        Verifica se o cliente incluiu algum Order Bump no pedido. Segue pela saída <strong class="text-emerald-600 dark:text-emerald-400">SIM</strong> se houver bumps, ou <strong class="text-rose-600 dark:text-rose-400">NÃO</strong> se comprou apenas o produto principal.
                    </p>
                    <p class="text-[11px] text-zinc-500 dark:text-zinc-400">
                        Este bloco tem duas saídas: puxe uma linha do ponto <strong class="text-emerald-600 dark:text-emerald-400">SIM</strong>
                        e outra do ponto <strong class="text-rose-600 dark:text-rose-400">NÃO</strong> até os próximos blocos.
                    </p>
                </div>
            </template>

            <template v-else-if="node.type === 'wait_reply'">
                <div class="space-y-3 p-4">
                    <div>
                        <label :class="labelClass" for="zr-wait-value">Tempo máximo de espera</label>
                        <div class="flex gap-2">
                            <input id="zr-wait-value" v-model.number="node.data.delay_value" type="number" min="1" :class="inputClass" @change="updateDelay">
                            <select v-model="node.data.delay_unit" :class="inputClass" @change="updateDelay">
                                <option value="seconds">Segundos</option>
                                <option value="minutes">Minutos</option>
                                <option value="hours">Horas</option>
                                <option value="days">Dias</option>
                            </select>
                        </div>
                        <p class="mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                            Espera até {{ node.data.delay_value || 0 }} {{ delayUnitLabel(node.data.delay_unit) }} (máximo de 24 horas) por uma resposta do cliente na Evolution GO.
                        </p>
                    </div>

                    <!-- Filtro opcional na espera -->
                    <div class="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-3 space-y-2.5">
                        <label class="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white cursor-pointer">
                            <input
                                v-model="node.data.filter_reply"
                                type="checkbox"
                                class="rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                            >
                            <span>Filtrar resposta esperada (opcional)</span>
                        </label>

                        <div v-if="node.data.filter_reply" class="space-y-2.5 pt-1 border-t border-teal-500/10">
                            <div>
                                <label :class="labelClass" for="zr-wait-filter-mode">Tipo de correspondência</label>
                                <select id="zr-wait-filter-mode" v-model="node.data.match_mode" :class="inputClass">
                                    <option value="contains">Contém o texto</option>
                                    <option value="exact">Texto exato</option>
                                </select>
                            </div>

                            <div>
                                <label :class="labelClass" for="zr-wait-filter-text">Texto esperado</label>
                                <input
                                    id="zr-wait-filter-text"
                                    v-model="node.data.match_text"
                                    type="text"
                                    placeholder="Ex: eu quero"
                                    :class="inputClass"
                                >
                            </div>

                            <div class="space-y-1.5 pt-0.5">
                                <label class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                    <input
                                        v-model="node.data.case_sensitive"
                                        type="checkbox"
                                        class="rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                                    >
                                    <span>Diferenciar maiúsculas/minúsculas</span>
                                </label>

                                <label class="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 cursor-pointer">
                                    <input
                                        v-model="node.data.ignore_accents"
                                        type="checkbox"
                                        class="rounded border-zinc-300 text-teal-600 focus:ring-teal-500"
                                    >
                                    <span>Ignorar acentos (ex: "não" = "nao")</span>
                                </label>
                            </div>

                            <p class="text-[10px] text-zinc-500 dark:text-zinc-400">
                                Apenas respostas que atenderem a este critério ativarão a saída <strong class="text-teal-600 dark:text-teal-400">RESPONDEU</strong>.
                                Respostas divergentes continuarão aguardando até o tempo esgotar.
                            </p>
                        </div>
                    </div>

                    <p class="text-[11px] text-zinc-500 dark:text-zinc-400">
                        Este bloco tem duas saídas: puxe uma linha do ponto <strong class="text-emerald-600 dark:text-emerald-400">RESPONDEU</strong>
                        (o cliente mandou uma mensagem) e outra do ponto <strong class="text-amber-600 dark:text-amber-400">ESGOTOU</strong>
                        (ninguém respondeu a tempo) até os próximos blocos. Deixar uma saída sem conexão é válido — o fluxo só segue pela outra.
                    </p>
                </div>
            </template>

            <template v-else>
                <p class="p-4 text-[11px] text-zinc-500 dark:text-zinc-400">Este bloco encerra a execução do fluxo.</p>
            </template>
        </template>

        <template v-else-if="edge">
            <div class="space-y-4 p-4">
                <div class="flex items-start justify-between gap-2">
                    <div>
                        <h3 class="text-sm font-bold text-zinc-900 dark:text-white">Conexão</h3>
                        <p class="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{{ edge.source }} → {{ edge.target }}</p>
                    </div>
                    <button type="button" class="flex items-center gap-1 rounded-lg border border-zinc-200 px-2 py-1 text-[11px] font-bold text-rose-600 transition hover:bg-rose-500/10 dark:border-zinc-700" @click="emit('remove-edge', edge.id)">
                        <Trash2 class="h-3 w-3" />
                        Excluir
                    </button>
                </div>
                <p class="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Apenas liga um bloco ao próximo — quando ela sai de um bloco de condição, o ponto de origem
                    (SIM ou NÃO) já define o caminho.
                </p>
            </div>
        </template>

        <template v-else>
            <p class="p-4 text-[11px] text-zinc-500 dark:text-zinc-400">Selecione um bloco ou uma conexão para editar as propriedades.</p>
        </template>
    </aside>
</template>
