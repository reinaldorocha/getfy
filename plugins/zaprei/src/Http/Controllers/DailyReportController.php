<?php

namespace Plugins\Zaprei\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Zaprei\Exceptions\ZapreiException;
use Plugins\Zaprei\Services\DailySalesReportService;

final class DailyReportController extends Controller
{
    public function __construct(
        private readonly DailySalesReportService $service,
    ) {}

    public function show(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);
        $config = $this->service->getConfig($tenantId);
        $data = $this->service->generateData($tenantId);
        $preview = $this->service->renderMessage($data, $config['custom_template']);

        return response()->json([
            'config' => $config,
            'preview' => $preview,
            'data' => $data,
        ]);
    }

    public function update(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'enabled' => ['required', 'boolean'],
            'time' => ['required', 'string', 'regex:/^\d{2}:\d{2}$/'],
            'phone' => ['nullable', 'string', 'max:50'],
            'custom_template' => ['nullable', 'string', 'max:5000'],
        ]);

        $config = $this->service->saveConfig($tenantId, $validated);
        $data = $this->service->generateData($tenantId);
        $preview = $this->service->renderMessage($data, $config['custom_template']);

        return response()->json([
            'message' => 'Configurações do relatório diário salvas com sucesso.',
            'config' => $config,
            'preview' => $preview,
        ]);
    }

    public function test(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'phone' => ['nullable', 'string', 'max:50'],
        ]);

        try {
            $result = $this->service->sendReport($tenantId, $validated['phone'] ?? null, true);

            return response()->json([
                'message' => "Relatório de teste enviado para {$result['recipient']} com sucesso!",
                'preview' => $result['message'],
            ]);
        } catch (ZapreiException $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Falha ao enviar relatório: '.$e->getMessage(),
            ], 500);
        }
    }
}
