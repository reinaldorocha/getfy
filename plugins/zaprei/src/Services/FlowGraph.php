<?php

namespace Plugins\Zaprei\Services;

/**
 * Leitura do grafo salvo pelo editor visual.
 *
 * Formato persistido:
 *   nodes: [{ id, type, x, y, data }]
 *   edges: [{ from, to, data: { condition?: "true"|"false" } }]
 */
final class FlowGraph
{
    public const NODE_TRIGGER = 'trigger';

    public const NODE_SEND_MESSAGE = 'send_message';

    public const NODE_DELAY = 'delay';

    public const NODE_CONDITION = 'condition';

    public const NODE_WAIT_REPLY = 'wait_reply';

    public const NODE_END = 'end';

    /**
     * @param  array<string, array<string, mixed>>  $nodes  id => nó
     * @param  list<array<string, mixed>>  $edges
     */
    private function __construct(
        private readonly array $nodes,
        private readonly array $edges,
    ) {}

    /**
     * @param  array<string, mixed>  $graph
     */
    public static function fromArray(array $graph): self
    {
        $nodes = [];
        foreach ((array) ($graph['nodes'] ?? []) as $node) {
            if (! is_array($node)) {
                continue;
            }
            $id = trim((string) ($node['id'] ?? ''));
            if ($id !== '') {
                $nodes[$id] = $node;
            }
        }

        $edges = [];
        foreach ((array) ($graph['edges'] ?? []) as $edge) {
            if (is_array($edge)) {
                $edges[] = $edge;
            }
        }

        return new self($nodes, $edges);
    }

    public function startNodeId(): ?string
    {
        foreach ($this->nodes as $id => $node) {
            if (($node['type'] ?? '') === self::NODE_TRIGGER) {
                return (string) $id;
            }
        }

        return null;
    }

    public function hasNode(string $id): bool
    {
        return isset($this->nodes[$id]);
    }

    public function typeOf(string $id): string
    {
        return (string) ($this->nodes[$id]['type'] ?? '');
    }

    /**
     * @return array<string, mixed>
     */
    public function dataOf(string $id): array
    {
        $data = $this->nodes[$id]['data'] ?? [];

        return is_array($data) ? $data : [];
    }

    /**
     * Próximo nó a executar.
     *
     * Em nós de condição, a saída é escolhida pelo rótulo da aresta
     * (`data.condition` = "true"/"false"); as demais arestas seguem a ordem
     * em que foram desenhadas.
     */
    public function nextNodeId(string $fromId, ?bool $branch = null): ?string
    {
        $fallback = null;

        foreach ($this->edges as $edge) {
            if (trim((string) ($edge['from'] ?? '')) !== $fromId) {
                continue;
            }
            $to = trim((string) ($edge['to'] ?? ''));
            if ($to === '' || ! isset($this->nodes[$to])) {
                continue;
            }

            $condition = $this->conditionOf($edge);
            if ($branch === null) {
                return $to;
            }
            if ($condition === $branch) {
                return $to;
            }
            if ($condition === null) {
                $fallback ??= $to;
            }
        }

        return $fallback;
    }

    /**
     * @param  array<string, mixed>  $edge
     */
    private function conditionOf(array $edge): ?bool
    {
        $data = $edge['data'] ?? [];
        $condition = is_array($data) ? ($data['condition'] ?? null) : null;

        return match ($condition) {
            true, 'true' => true,
            false, 'false' => false,
            default => null,
        };
    }
}
