<?php

namespace Plugins\Zaprei\Services;

use InvalidArgumentException;

/**
 * Valida o grafo antes de persistir, protegendo o motor de execução.
 */
final class FlowGraphValidator
{
    private const MAX_NODES = 200;

    private const MAX_EDGES = 400;

    /** @var list<string> */
    private const KNOWN_TYPES = [
        FlowGraph::NODE_TRIGGER,
        FlowGraph::NODE_SEND_MESSAGE,
        FlowGraph::NODE_DELAY,
        FlowGraph::NODE_CONDITION,
        FlowGraph::NODE_WAIT_REPLY,
        FlowGraph::NODE_END,
    ];

    /**
     * @param  array<string, mixed>  $graph
     *
     * @throws InvalidArgumentException
     */
    public function validate(array $graph): void
    {
        $nodes = $graph['nodes'] ?? null;
        $edges = $graph['edges'] ?? null;

        if (! is_array($nodes) || ! is_array($edges)) {
            throw new InvalidArgumentException('O fluxo precisa conter as listas de nós e conexões.');
        }
        if (count($nodes) > self::MAX_NODES || count($edges) > self::MAX_EDGES) {
            throw new InvalidArgumentException('O fluxo excede o tamanho máximo permitido.');
        }

        $ids = $this->collectNodeIds($nodes);

        foreach ($edges as $edge) {
            $from = is_array($edge) ? trim((string) ($edge['from'] ?? '')) : '';
            $to = is_array($edge) ? trim((string) ($edge['to'] ?? '')) : '';
            if (! isset($ids[$from], $ids[$to])) {
                throw new InvalidArgumentException('Há uma conexão apontando para um bloco inexistente.');
            }
        }
    }

    /**
     * @param  array<mixed>  $nodes
     * @return array<string, true>
     */
    private function collectNodeIds(array $nodes): array
    {
        $ids = [];
        $triggers = 0;

        foreach ($nodes as $node) {
            $id = is_array($node) ? trim((string) ($node['id'] ?? '')) : '';
            $type = is_array($node) ? trim((string) ($node['type'] ?? '')) : '';

            if ($id === '' || isset($ids[$id])) {
                throw new InvalidArgumentException('Cada bloco precisa de um identificador único.');
            }
            if (! in_array($type, self::KNOWN_TYPES, true)) {
                throw new InvalidArgumentException('Bloco de tipo desconhecido: '.($type ?: 'vazio').'.');
            }

            $ids[$id] = true;
            $triggers += (int) ($type === FlowGraph::NODE_TRIGGER);
        }

        if ($triggers !== 1) {
            throw new InvalidArgumentException('O fluxo precisa de exatamente um bloco de gatilho.');
        }

        return $ids;
    }
}
