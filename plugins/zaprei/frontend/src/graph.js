import { CONDITION_KINDS, ORDER_STATUS_OPTIONS, PAYMENT_METHOD_OPTIONS, defaultNodeData, delayUnitLabel, nodeLabel, secondsFromValueUnit } from './constants';

/**
 * Conversão entre o grafo persistido pelo backend ({ nodes:[{id,type,x,y,data}],
 * edges:[{from,to,data}] }) e o formato do Vue Flow ({ position, source, target }).
 */

function isPlainObject(value) {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}

export function newNodeId(type) {
    return `${type}_${Math.random().toString(36).slice(2, 9)}`;
}

/** Ids dos dois pontos de saída nomeados, por tipo de bloco (ver FlowCanvas.vue). */
const BRANCH_HANDLES = {
    condition: { true: 'yes', false: 'no' },
    wait_reply: { true: 'replied', false: 'timeout' },
};

function sourceHandleFor(nodeType, condition) {
    if (condition !== 'true' && condition !== 'false') return undefined;

    return BRANCH_HANDLES[nodeType]?.[condition];
}

export function subtitleFor(type, data = {}) {
    if (type === 'send_message') {
        const mode = String(data.mode || 'text');
        if (mode === 'buttons') return `Botões • ${(data.buttons || []).length} opção(ões)`;
        if (mode === 'list') return `Lista • ${(data.sections || []).flatMap((s) => s.rows || []).length} item(ns)`;
        if (mode === 'location') return `Localização${data.location_name ? ` • ${data.location_name}` : ''}`;
        if (mode === 'contact') return `Contato${data.contact_name ? ` • ${data.contact_name}` : ''}`;
        if (mode === 'poll') return `Enquete${data.question ? ` • ${data.question}` : ''}`;
        if (mode === 'link') return `Link${data.url ? ` • ${data.url}` : ''}`;

        const text = String(data.text || data.caption || '').replace(/\s+/g, ' ').trim();
        const preview = text.length > 46 ? `${text.slice(0, 46)}…` : text;

        return preview ? `${mode} • ${preview}` : mode;
    }
    if (type === 'delay') {
        if (data.delay_value && data.delay_unit) return `Aguardar ${data.delay_value} ${delayUnitLabel(data.delay_unit)}`;

        return `Aguardar ${Math.max(0, Number(data.seconds) || 0)}s`;
    }
    if (type === 'condition') {
        if (data.kind === 'order_status_is') {
            const label = ORDER_STATUS_OPTIONS.find((s) => s.value === data.value)?.label || data.value || '…';

            return `Status do pedido é "${label}"`;
        }
        if (data.kind === 'payment_method_is') {
            const label = PAYMENT_METHOD_OPTIONS.find((m) => m.value === data.value)?.label || data.value || '…';

            return `Pagamento é "${label}"`;
        }
        if (data.kind === 'event_is') return `Evento é "${data.value || '…'}"`;

        return CONDITION_KINDS.find((k) => k.value === data.kind)?.label || 'Pedido foi pago?';
    }
    if (type === 'wait_reply') {
        if (data.delay_value && data.delay_unit) return `Espera até ${data.delay_value} ${delayUnitLabel(data.delay_unit)}`;

        return `Espera até ${Math.max(0, Number(data.seconds) || 0)}s`;
    }
    if (type === 'trigger') {
        return data.event_class || 'Evento do fluxo';
    }

    return '';
}

export function toVueFlow(graph, eventClass = '') {
    const source = isPlainObject(graph) ? graph : {};
    const storedNodes = Array.isArray(source.nodes) ? source.nodes : [];
    const storedEdges = Array.isArray(source.edges) ? source.edges : [];

    const nodes = storedNodes
        .filter((node) => isPlainObject(node) && node.id)
        .map((node, index) => ({
            id: String(node.id),
            type: String(node.type || 'send_message'),
            position: {
                x: Number.isFinite(node.x) ? node.x : 80 + (index % 4) * 260,
                y: Number.isFinite(node.y) ? node.y : 120 + Math.floor(index / 4) * 170,
            },
            data: isPlainObject(node.data) ? { ...node.data } : {},
            draggable: node.type !== 'trigger',
            deletable: node.type !== 'trigger',
        }));

    if (!nodes.some((node) => node.type === 'trigger')) {
        nodes.unshift({
            id: 'trigger',
            type: 'trigger',
            position: { x: 80, y: 200 },
            data: defaultNodeData('trigger', eventClass),
            draggable: false,
            deletable: false,
        });
    }

    const typeById = new Map(nodes.map((node) => [node.id, node.type]));
    const ids = new Set(nodes.map((node) => node.id));
    const edges = storedEdges
        .filter((edge) => isPlainObject(edge) && ids.has(String(edge.from)) && ids.has(String(edge.to)))
        .map((edge, index) => {
            const data = isPlainObject(edge.data) ? { ...edge.data } : {};

            return {
                id: `e_${edge.from}_${edge.to}_${index}`,
                source: String(edge.from),
                target: String(edge.to),
                // Blocos de condição e "aguardar resposta" têm duas saídas
                // nomeadas; os demais blocos usam a saída única (sourceHandle
                // indefinido).
                sourceHandle: sourceHandleFor(typeById.get(String(edge.from)), data.condition),
                type: 'zaprei',
                data,
            };
        });

    return { nodes, edges };
}

/** No save, garante que `seconds` reflita `delay_value`/`delay_unit` (fonte da verdade na UI). */
function normalizedData(type, data) {
    const value = isPlainObject(data) ? { ...data } : {};
    if ((type === 'delay' || type === 'wait_reply') && value.delay_value && value.delay_unit) {
        value.seconds = secondsFromValueUnit(value.delay_value, value.delay_unit);
    }

    return value;
}

/**
 * A saída (SIM/NÃO de uma condição, ou respondeu/esgotou de um "aguardar
 * resposta") vem de qual dos dois pontos de conexão (handles) a linha
 * começou — não de uma propriedade escolhida à mão na linha depois de
 * desenhada. O id do handle já basta pra saber qual é, sem olhar o tipo do nó.
 */
function conditionFromHandle(sourceHandle) {
    if (sourceHandle === 'yes' || sourceHandle === 'replied') return 'true';
    if (sourceHandle === 'no' || sourceHandle === 'timeout') return 'false';

    return undefined;
}

export function toStoredGraph(nodes, edges) {
    return {
        nodes: (nodes || []).map((node) => ({
            id: node.id,
            type: node.type,
            x: Math.round(node.position?.x ?? 0),
            y: Math.round(node.position?.y ?? 0),
            data: normalizedData(node.type, node.data),
        })),
        edges: (edges || []).map((edge) => {
            const condition = conditionFromHandle(edge.sourceHandle);

            return {
                from: edge.source,
                to: edge.target,
                data: condition ? { condition } : undefined,
            };
        }),
    };
}

export function makeNode(type, position, eventClass = '') {
    return {
        id: type === 'trigger' ? 'trigger' : newNodeId(type),
        type,
        position,
        data: defaultNodeData(type, eventClass),
        draggable: type !== 'trigger',
        deletable: type !== 'trigger',
        label: nodeLabel(type),
    };
}
