<?php

namespace Plugins\Zaprei\Services;

use Illuminate\Support\Facades\Log;
use Plugins\Zaprei\Jobs\RunFlowJob;
use Plugins\Zaprei\Models\Flow;
use Plugins\Zaprei\Models\FlowRun;
use Plugins\Zaprei\Support\OrderReader;
use Plugins\Zaprei\Support\PhoneNumber;
use Plugins\Zaprei\Zaprei;
use Throwable;

/**
 * Percorre o grafo de um fluxo e envia as mensagens pela Evolution GO.
 *
 * A execução é sequencial: a partir do gatilho, cada bloco decide qual é o
 * próximo. Blocos de espera interrompem a execução e gravam o horário de
 * retomada no banco (ver scheduleContinuation()/resumeDue()) — nenhum worker
 * fica bloqueado dormindo, e funciona mesmo sem fila assíncrona configurada.
 */
final class FlowEngine
{
    public function __construct(
        private readonly GatewayFactory $gateways,
        private readonly TemplateRenderer $templates,
        private readonly MessageDispatcher $dispatcher,
    ) {}

    /**
     * @param  array<string, mixed>  $context
     */
    public function run(Flow $flow, array $context, ?int $runId = null, ?string $startNodeId = null): void
    {
        $run = $this->resolveRun($flow, $context, $runId);
        $graph = FlowGraph::fromArray((array) $flow->graph_json);
        $nodeId = $startNodeId ?? $graph->startNodeId();

        if ($nodeId === null || ! $graph->hasNode($nodeId)) {
            $run->update(['status' => FlowRun::STATUS_COMPLETED]);

            return;
        }

        try {
            $this->walk($flow, $run, $graph, $nodeId, $context);
        } catch (Throwable $e) {
            Log::warning('ZapRei: falha ao executar fluxo.', [
                'flow_id' => $flow->id,
                'run_id' => $run->id,
                'error' => $e->getMessage(),
            ]);
            $run->update([
                'status' => FlowRun::STATUS_FAILED,
                'last_error' => mb_substr($e->getMessage(), 0, 1000),
            ]);

            throw $e;
        }
    }

    /**
     * @param  array<string, mixed>  $context
     */
    private function walk(Flow $flow, FlowRun $run, FlowGraph $graph, string $nodeId, array $context): void
    {
        $gateway = null;
        $steps = 0;
        $current = $nodeId;

        while ($current !== null && $steps < Zaprei::MAX_FLOW_STEPS) {
            $steps++;
            $type = $graph->typeOf($current);
            $data = $graph->dataOf($current);

            if ($type === FlowGraph::NODE_END) {
                $current = null;
                break;
            }

            if ($type === FlowGraph::NODE_DELAY) {
                $this->scheduleContinuation($run, $graph, $current, $data);

                return;
            }

            if ($type === FlowGraph::NODE_WAIT_REPLY) {
                $this->scheduleWaitReply($run, $graph, $current, $data);

                return;
            }

            if ($type === FlowGraph::NODE_SEND_MESSAGE) {
                $gateway ??= $this->gateways->forTenant((int) $flow->tenant_id);
                $this->dispatcher->send($gateway, $data, $context);
                Log::info('ZapRei: bloco de mensagem enviado.', [
                    'flow_id' => $flow->id,
                    'run_id' => $run->id,
                    'node_id' => $current,
                ]);
            }

            $branch = $type === FlowGraph::NODE_CONDITION
                ? $this->evaluateCondition($data, $context, (int) $flow->tenant_id)
                : null;

            $current = $graph->nextNodeId($current, $branch);
        }

        // $current !== null aqui só acontece se o laço parou pelo teto de passos
        // (Zaprei::MAX_FLOW_STEPS) sem chegar a um bloco de fim — grafo com ciclo.
        if ($current !== null) {
            $run->update([
                'status' => FlowRun::STATUS_FAILED,
                'last_error' => 'O fluxo excedeu o limite de '.Zaprei::MAX_FLOW_STEPS.' passos (verifique se há um ciclo entre os blocos).',
            ]);

            return;
        }

        $run->update(['status' => FlowRun::STATUS_COMPLETED]);
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $context
     */
    private function evaluateCondition(array $data, array $context, int $tenantId): bool
    {
        $kind = (string) ($data['kind'] ?? 'has_phone');

        if ($kind === 'order_is_paid' || $kind === 'order_status_is') {
            $status = mb_strtolower($this->liveOrderStatus($context, $tenantId) ?? (string) ($context['order']['status'] ?? ''));
            if ($kind === 'order_is_paid') {
                return $status === 'completed';
            }
            $expected = mb_strtolower(trim($this->templates->render((string) ($data['value'] ?? ''), $context)));

            return $status === $expected;
        }

        $expected = mb_strtolower(trim($this->templates->render((string) ($data['value'] ?? ''), $context)));

        return match ($kind) {
            'has_order_bumps' => ! empty($context['order']['has_bumps_bool']),
            'payment_method_is' => mb_strtolower((string) ($context['order']['payment_method'] ?? '')) === $expected,
            'event_is' => mb_strtolower((string) ($context['event_class'] ?? '')) === $expected,
            default => PhoneNumber::normalize((string) ($context['phone'] ?? '')) !== null,
        };
    }

    /**
     * Status real do pedido no momento da avaliação (não o congelado quando o
     * evento disparou) — essencial em blocos "aguardar então verificar pagamento".
     *
     * @param  array<string, mixed>  $context
     */
    private function liveOrderStatus(array $context, int $tenantId): ?string
    {
        $subjectId = $context['subject_id'] ?? null;
        if (! is_int($subjectId) && ! is_numeric($subjectId)) {
            return null;
        }

        return OrderReader::currentOrderStatus($tenantId, (string) ($context['subject_type'] ?? ''), (int) $subjectId);
    }

    /**
     * Marca a execução como parada num bloco de espera, com o horário de
     * retomada gravado no banco.
     *
     * Não usamos Queue::later()/->delay(): em QUEUE_CONNECTION=sync (comum em
     * hospedagens sem worker persistente) o Laravel ignora o delay e roda o
     * job na hora, fazendo o bloco "Aguardar" não esperar nada. Quem retoma é
     * o comando agendado (ver resumeDue()), que funciona com qualquer driver.
     *
     * @param  array<string, mixed>  $data
     */
    private function scheduleContinuation(FlowRun $run, FlowGraph $graph, string $nodeId, array $data): void
    {
        $next = $graph->nextNodeId($nodeId);
        if ($next === null) {
            $run->update(['status' => FlowRun::STATUS_COMPLETED]);

            return;
        }

        $seconds = max(0, min(86400, (int) ($data['seconds'] ?? 0)));
        $run->update([
            'status' => FlowRun::STATUS_WAITING,
            'resume_node_id' => $next,
            'resume_at' => now()->addSeconds($seconds),
        ]);
    }

    /**
     * Marca a execução como parada num bloco "Aguardar resposta", com duas
     * saídas possíveis — mesma convenção do bloco de condição (SIM/NÃO): a
     * aresta que sai do ponto "respondeu" tem `data.condition = "true"`, a que
     * sai de "esgotou o tempo" tem `data.condition = "false"`.
     *
     * O timeout usa o mesmo mecanismo de retomada agendada do bloco "Aguardar"
     * (resume_node_id/resume_at, ver scheduleContinuation()) — nenhuma mudança
     * necessária em resumeDue() para esse lado. O lado "respondeu" ainda não
     * tem gatilho: falta o webhook de mensagem recebida da Evolution GO
     * chamar algo equivalente a resumeDue() usando reply_node_id.
     *
     * @param  array<string, mixed>  $data
     */
    private function scheduleWaitReply(FlowRun $run, FlowGraph $graph, string $nodeId, array $data): void
    {
        $timeoutTarget = $graph->nextNodeId($nodeId, false);
        $replyTarget = $graph->nextNodeId($nodeId, true);

        if ($timeoutTarget === null && $replyTarget === null) {
            $run->update(['status' => FlowRun::STATUS_COMPLETED]);

            return;
        }

        $seconds = max(0, min(86400, (int) ($data['seconds'] ?? 86400)));
        $run->update([
            'status' => FlowRun::STATUS_WAITING,
            'resume_node_id' => $timeoutTarget,
            'reply_node_id' => $replyTarget,
            // Sem saída de timeout conectada, a execução só é retomada por uma
            // resposta do cliente — não pelo comando agendado.
            'resume_at' => $timeoutTarget !== null ? now()->addSeconds($seconds) : null,
        ]);
    }

    /**
     * Retoma execuções cujo bloco de espera já venceu. Chamado pelo comando
     * agendado `zaprei:resume-flows` (roda a cada minuto).
     */
    public function resumeDue(): int
    {
        $due = FlowRun::dueToResume()->get();

        foreach ($due as $run) {
            // Update atômico condicionado ao status: evita retomar a mesma
            // execução duas vezes se o comando rodar em paralelo.
            $claimed = FlowRun::query()
                ->whereKey($run->id)
                ->where('status', FlowRun::STATUS_WAITING)
                ->update(['status' => FlowRun::STATUS_RUNNING]);
            if ($claimed === 0) {
                continue;
            }

            $flow = Flow::forTenant((int) $run->tenant_id)->find($run->flow_id);
            if ($flow === null || ! $flow->is_active) {
                $run->update([
                    'status' => FlowRun::STATUS_FAILED,
                    'last_error' => 'Fluxo removido ou pausado antes da retomada.',
                ]);

                continue;
            }

            RunFlowJob::dispatch(
                (int) $run->tenant_id,
                (int) $flow->id,
                (array) $run->context,
                (int) $run->id,
                (string) $run->resume_node_id,
            );
        }

        return $due->count();
    }

    /**
     * @param  array<string, mixed>  $context
     */
    private function resolveRun(Flow $flow, array $context, ?int $runId): FlowRun
    {
        if ($runId !== null) {
            $existing = FlowRun::forTenant((int) $flow->tenant_id)->find($runId);
            if ($existing !== null) {
                // Grava o contexto recebido (por exemplo, com last_reply
                // preenchido pelo webhook de resposta) — sem isso, a mensagem
                // seguinte usaria o texto do cliente pra renderizar, mas o
                // registro da execução nunca mostraria qual foi a resposta.
                // Também limpa o erro da tentativa anterior — senão uma
                // retentativa bem sucedida (status completed) ficaria
                // mostrando o erro antigo.
                $existing->update([
                    'status' => FlowRun::STATUS_RUNNING,
                    'last_error' => null,
                    'context' => $context,
                ]);

                return $existing;
            }
        }

        return FlowRun::create([
            'tenant_id' => $flow->tenant_id,
            'flow_id' => $flow->id,
            'event_class' => $flow->trigger_event,
            'status' => FlowRun::STATUS_RUNNING,
            'context' => $context,
        ]);
    }
}
