<?php

namespace Plugins\Zaprei\Http\Controllers;

use App\PluginSdk\Getfy;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use InvalidArgumentException;
use Plugins\Zaprei\Models\Flow;
use Plugins\Zaprei\Models\FlowRun;
use Plugins\Zaprei\Services\ConnectionRepository;
use Plugins\Zaprei\Services\FlowEngine;
use Plugins\Zaprei\Services\FlowGraphValidator;
use Plugins\Zaprei\Support\PhoneNumber;
use Throwable;

/**
 * CRUD dos fluxos e leitura do histórico de execuções.
 */
final class FlowController extends Controller
{
    private const RUNS_LIMIT = 100;

    public function __construct(
        private readonly FlowGraphValidator $validator,
        private readonly FlowEngine $engine,
        private readonly ConnectionRepository $connections,
    ) {}

    public function index(Request $request): JsonResponse
    {
        $productId = trim((string) $request->query('product_id', '')) ?: null;

        $flows = Flow::forTenant($this->tenantId($request))
            ->forProduct($productId)
            ->orderByDesc('id')
            ->get();

        return response()->json(['flows' => $flows]);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->normalizeProductIds($this->validated($request, required: true));
        $this->assertValidGraph($data['graph_json']);

        $flow = Flow::create($data + [
            'tenant_id' => $this->tenantId($request),
            'is_active' => (bool) ($data['is_active'] ?? true),
        ]);

        return response()->json(['flow' => $flow], 201);
    }

    public function update(Request $request, int $flow): JsonResponse
    {
        $model = $this->find($request, $flow);
        $data = $this->normalizeProductIds($this->validated($request, required: false));

        if (array_key_exists('graph_json', $data)) {
            $this->assertValidGraph($data['graph_json']);
        } elseif (array_key_exists('trigger_event', $data) && $data['trigger_event'] !== $model->trigger_event) {
            // Edição rápida de nome/produto/evento (fora do editor visual): mantém o
            // nó de gatilho do grafo já salvo em sincronia com o evento escolhido aqui.
            $data['graph_json'] = $this->withUpdatedTriggerEvent((array) $model->graph_json, $data['trigger_event']);
        }

        $model->update($data);

        return response()->json(['flow' => $model->refresh()]);
    }

    public function destroy(Request $request, int $flow): JsonResponse
    {
        $this->find($request, $flow)->delete();

        return response()->json(['ok' => true]);
    }

    public function duplicate(Request $request, int $flow): JsonResponse
    {
        $original = $this->find($request, $flow);

        $copy = $original->replicate();
        $copy->name = mb_substr($original->name.' (cópia)', 0, 255);
        $copy->is_active = false;
        $copy->save();

        return response()->json(['flow' => $copy], 201);
    }

    /**
     * Dispara o fluxo agora, para um telefone informado, com dados fictícios de
     * pedido — sem precisar de uma venda real para validar o percurso do grafo.
     */
    public function test(Request $request, int $flow): JsonResponse
    {
        $model = $this->find($request, $flow);
        $tenantId = $this->tenantId($request);

        $data = $request->validate([
            'phone' => ['required', 'string'],
            'customer_name' => ['nullable', 'string', 'max:120'],
        ]);
        $phone = PhoneNumber::normalize($data['phone']);
        if ($phone === null) {
            return response()->json(['message' => 'Telefone inválido.'], 422);
        }

        if (! $this->connections->isReady($tenantId)) {
            return response()->json(['message' => 'Conecte o WhatsApp (Evolution GO) antes de testar um fluxo.'], 422);
        }

        try {
            $this->engine->run($model, $this->testContext($tenantId, $model, $phone, $data['customer_name'] ?? null));
        } catch (Throwable $e) {
            return response()->json(['message' => 'Falha ao testar o fluxo: '.$e->getMessage()], 422);
        }

        return response()->json(['ok' => true]);
    }

    /**
     * @return array<string, mixed>
     */
    private function testContext(int $tenantId, Flow $flow, string $phone, ?string $customerName = null): array
    {
        $productId = $flow->product_ids[0] ?? null;
        $product = is_string($productId) && $productId !== ''
            ? Getfy::products()->findForTenant($tenantId, $productId)
            : null;
        $productName = $product?->name ?? 'Produto de teste';

        $name = trim($customerName ?? '') !== '' ? trim($customerName) : 'Contato de Teste';
        $parts = explode(' ', $name, 2);
        $firstName = $parts[0];
        $lastName = $parts[1] ?? '';

        return [
            'tenant_id' => $tenantId,
            'event_class' => $flow->trigger_event,
            'subject_type' => 'order',
            'subject_id' => null,
            'phone' => $phone,
            'email' => 'teste@getfy.com',
            'name' => $name,
            'customer' => [
                'name' => $name,
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => 'teste@getfy.com',
                'phone' => $phone,
                'cpf' => '000.000.000-00',
            ],
            'order' => [
                'id' => null,
                // "pending", não "completed": os 3 templates prontos (PIX, boleto,
                // carrinho) testam "pedido já foi pago?" e só mandam a mensagem de
                // lembrete no branch "não" — com "completed" o teste nunca chegaria
                // nela.
                'status' => 'pending',
                'amount' => 124.0,
                'amount_formatted' => 'R$ 124,00',
                'total_amount' => 124.0,
                'total_amount_formatted' => 'R$ 124,00',
                'paid_amount' => 124.0,
                'paid_amount_formatted' => 'R$ 124,00',
                'currency' => 'BRL',
                'gateway' => 'teste',
                'payment_method' => 'pix',
                'payment_method_label' => 'PIX',
                'metadata' => [],
                'product' => ['id' => $product?->id, 'name' => $productName],
                'has_bumps' => 'Sim',
                'has_bumps_bool' => true,
                'bumps_count' => 1,
                'bumps' => '• Bônus Exclusivo (R$ 27,00)',
                'bumps_list' => '• Bônus Exclusivo (R$ 27,00)',
                'bumps_section' => "➕ *Order Bump(s):*\n• Bônus Exclusivo (R$ 27,00)",
                'bumps_names' => 'Bônus Exclusivo',
                'bumps_total' => 27.0,
                'bumps_total_formatted' => 'R$ 27,00',
                'items_list' => "• {$productName} (R$ 97,00)\n• Bônus Exclusivo (R$ 27,00)",
                'first_bump' => [
                    'name' => 'Bônus Exclusivo',
                    'amount' => 27.0,
                    'amount_formatted' => 'R$ 27,00',
                ],
            ],
            'product' => ['id' => $product?->id, 'name' => $productName],
            'checkout_link' => '',
            'pix' => [],
            'boleto' => [],
            'access' => [],
            'bumps' => '• Bônus Exclusivo (R$ 27,00)',
            'bumps_list' => '• Bônus Exclusivo (R$ 27,00)',
            'bumps_section' => "➕ *Order Bump(s):*\n• Bônus Exclusivo (R$ 27,00)",
            'bumps_names' => 'Bônus Exclusivo',
            'order_bumps' => '• Bônus Exclusivo (R$ 27,00)',
        ];
    }

    public function runs(Request $request): JsonResponse
    {
        $runs = FlowRun::forTenant($this->tenantId($request))
            ->orderByDesc('id')
            ->limit(self::RUNS_LIMIT)
            ->get();

        return response()->json(['runs' => $runs]);
    }

    /**
     * Reinicia uma execução que falhou, do zero (a partir do gatilho), com o
     * mesmo contexto salvo na primeira tentativa. Não há como retomar exatamente
     * de onde parou — o fluxo não rastreia qual bloco de mensagem já foi
     * entregue —, então blocos já enviados antes da falha original podem ser
     * reenviados; por isso a retentativa é sempre manual, nunca automática.
     */
    public function retryRun(Request $request, int $run): JsonResponse
    {
        $tenantId = $this->tenantId($request);
        $model = FlowRun::forTenant($tenantId)->findOrFail($run);

        if ($model->status !== FlowRun::STATUS_FAILED) {
            return response()->json(['message' => 'Só é possível tentar novamente uma execução que falhou.'], 422);
        }

        $flow = Flow::forTenant($tenantId)->find($model->flow_id);
        if ($flow === null) {
            return response()->json(['message' => 'O fluxo desta execução foi excluído.'], 422);
        }

        try {
            $this->engine->run($flow, (array) $model->context, $model->id);
        } catch (Throwable $e) {
            return response()->json(['message' => 'Falha ao tentar novamente: '.$e->getMessage()], 422);
        }

        return response()->json(['ok' => true]);
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request, bool $required): array
    {
        $rule = $required ? 'required' : 'sometimes';

        return $request->validate([
            'name' => [$rule, 'string', 'max:255'],
            'trigger_event' => [$rule, 'string', 'max:255'],
            'graph_json' => [$rule, 'array'],
            'product_ids' => ['sometimes', 'nullable', 'array'],
            'product_ids.*' => ['uuid'],
            'is_active' => ['sometimes', 'boolean'],
        ]);
    }

    /**
     * Lista vazia é tratada como "todos os produtos" (mesmo estado de null),
     * evitando gravar um filtro que nunca casaria com nenhum evento.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    private function normalizeProductIds(array $data): array
    {
        if (array_key_exists('product_ids', $data) && $data['product_ids'] === []) {
            $data['product_ids'] = null;
        }

        return $data;
    }

    /**
     * @param  array<string, mixed>  $graph
     * @return array<string, mixed>
     */
    private function withUpdatedTriggerEvent(array $graph, string $eventClass): array
    {
        $nodes = (array) ($graph['nodes'] ?? []);
        foreach ($nodes as $index => $node) {
            if (is_array($node) && ($node['type'] ?? null) === 'trigger') {
                $nodes[$index]['data'] = array_merge(
                    is_array($node['data'] ?? null) ? $node['data'] : [],
                    ['event_class' => $eventClass],
                );
            }
        }
        $graph['nodes'] = $nodes;

        return $graph;
    }

    /**
     * @param  array<string, mixed>  $graph
     */
    private function assertValidGraph(array $graph): void
    {
        try {
            $this->validator->validate($graph);
        } catch (InvalidArgumentException $e) {
            abort(422, $e->getMessage());
        }
    }

    private function find(Request $request, int $flowId): Flow
    {
        return Flow::forTenant($this->tenantId($request))->findOrFail($flowId);
    }
}
