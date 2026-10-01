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

        $weeklyConfig = $this->service->getWeeklyConfig($tenantId);
        $weeklyData = $this->service->generateWeeklyData($tenantId);
        $weeklyPreview = $this->service->renderWeeklyMessage($weeklyData, $weeklyConfig['custom_template']);

        $monthlyConfig = $this->service->getMonthlyConfig($tenantId);
        $monthlyData = $this->service->generateMonthlyData($tenantId);
        $monthlyPreview = $this->service->renderMonthlyMessage($monthlyData, $monthlyConfig['custom_template']);

        $yearlyConfig = $this->service->getYearlyConfig($tenantId);
        $yearlyData = $this->service->generateYearlyData($tenantId);
        $yearlyPreview = $this->service->renderYearlyMessage($yearlyData, $yearlyConfig['custom_template']);

        return response()->json([
            'config' => $config,
            'preview' => $preview,
            'data' => $data,
            'weekly_config' => $weeklyConfig,
            'weekly_preview' => $weeklyPreview,
            'weekly_data' => $weeklyData,
            'monthly_config' => $monthlyConfig,
            'monthly_preview' => $monthlyPreview,
            'monthly_data' => $monthlyData,
            'yearly_config' => $yearlyConfig,
            'yearly_preview' => $yearlyPreview,
            'yearly_data' => $yearlyData,
        ]);
    }

    public function update(Request $request): JsonResponse
    {
        $reportType = (string) $request->input('report_type', 'daily');
        if ($reportType === 'yearly') {
            return $this->updateYearly($request);
        }
        if ($reportType === 'monthly') {
            return $this->updateMonthly($request);
        }
        if ($reportType === 'weekly') {
            return $this->updateWeekly($request);
        }

        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'enabled' => ['required', 'boolean'],
            'time' => ['required', 'string', 'regex:/^\d{2}:\d{2}$/'],
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
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

    public function showWeekly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $config = $this->service->getWeeklyConfig($tenantId);
        $data = $this->service->generateWeeklyData($tenantId);
        $preview = $this->service->renderWeeklyMessage($data, $config['custom_template']);

        return response()->json([
            'config' => $config,
            'preview' => $preview,
            'data' => $data,
        ]);
    }

    public function updateWeekly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'enabled' => ['required', 'boolean'],
            'time' => ['required', 'string', 'regex:/^\d{2}:\d{2}$/'],
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'custom_template' => ['nullable', 'string', 'max:5000'],
        ]);

        $config = $this->service->saveWeeklyConfig($tenantId, $validated);
        $data = $this->service->generateWeeklyData($tenantId);
        $preview = $this->service->renderWeeklyMessage($data, $config['custom_template']);

        return response()->json([
            'message' => 'Configurações do relatório semanal salvas com sucesso.',
            'config' => $config,
            'preview' => $preview,
        ]);
    }

    public function showMonthly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $config = $this->service->getMonthlyConfig($tenantId);
        $data = $this->service->generateMonthlyData($tenantId);
        $preview = $this->service->renderMonthlyMessage($data, $config['custom_template']);

        return response()->json([
            'config' => $config,
            'preview' => $preview,
            'data' => $data,
        ]);
    }

    public function updateMonthly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'enabled' => ['required', 'boolean'],
            'time' => ['required', 'string', 'regex:/^\d{2}:\d{2}$/'],
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'custom_template' => ['nullable', 'string', 'max:5000'],
        ]);

        $config = $this->service->saveMonthlyConfig($tenantId, $validated);
        $data = $this->service->generateMonthlyData($tenantId);
        $preview = $this->service->renderMonthlyMessage($data, $config['custom_template']);

        return response()->json([
            'message' => 'Configurações do relatório mensal salvas com sucesso.',
            'config' => $config,
            'preview' => $preview,
        ]);
    }

    public function showYearly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $config = $this->service->getYearlyConfig($tenantId);
        $data = $this->service->generateYearlyData($tenantId);
        $preview = $this->service->renderYearlyMessage($data, $config['custom_template']);

        return response()->json([
            'config' => $config,
            'preview' => $preview,
            'data' => $data,
        ]);
    }

    public function updateYearly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'enabled' => ['required', 'boolean'],
            'time' => ['required', 'string', 'regex:/^\d{2}:\d{2}$/'],
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'custom_template' => ['nullable', 'string', 'max:5000'],
        ]);

        $config = $this->service->saveYearlyConfig($tenantId, $validated);
        $data = $this->service->generateYearlyData($tenantId);
        $preview = $this->service->renderYearlyMessage($data, $config['custom_template']);

        return response()->json([
            'message' => 'Configurações do relatório anual salvas com sucesso.',
            'config' => $config,
            'preview' => $preview,
        ]);
    }

    public function test(Request $request): JsonResponse
    {
        $reportType = (string) $request->input('report_type', 'daily');
        if ($reportType === 'yearly') {
            return $this->testYearly($request);
        }
        if ($reportType === 'monthly') {
            return $this->testMonthly($request);
        }
        if ($reportType === 'weekly') {
            return $this->testWeekly($request);
        }

        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'destination' => ['nullable', 'string', 'max:100'],
            'date' => ['nullable', 'string', 'max:50'],
        ]);

        $recipientType = (string) ($validated['recipient_type'] ?? 'phone');
        $destination = $recipientType === 'group'
            ? ($validated['group_id'] ?? $validated['destination'] ?? null)
            : ($validated['phone'] ?? $validated['destination'] ?? null);

        $dateParam = $validated['date'] ?? null;
        $refDate = $dateParam !== null ? $this->service->parseReferenceDate((string) $dateParam, 'daily') : null;

        try {
            $result = $this->service->sendReport($tenantId, $destination, true, $refDate, $recipientType);
            $targetLabel = ! empty($result['is_group']) ? "o grupo {$result['recipient']}" : $result['recipient'];

            return response()->json([
                'message' => "Relatório diário de teste enviado para {$targetLabel} com sucesso!",
                'preview' => $result['message'],
            ]);
        } catch (ZapreiException $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Falha ao enviar relatório diário: '.$e->getMessage(),
            ], 500);
        }
    }

    public function testWeekly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'destination' => ['nullable', 'string', 'max:100'],
            'date' => ['nullable', 'string', 'max:50'],
        ]);

        $recipientType = (string) ($validated['recipient_type'] ?? 'phone');
        $destination = $recipientType === 'group'
            ? ($validated['group_id'] ?? $validated['destination'] ?? null)
            : ($validated['phone'] ?? $validated['destination'] ?? null);

        $dateParam = $validated['date'] ?? null;
        $refDate = $dateParam !== null ? $this->service->parseReferenceDate((string) $dateParam, 'weekly') : null;

        try {
            $result = $this->service->sendWeeklyReport($tenantId, $destination, true, $refDate, $recipientType);
            $targetLabel = ! empty($result['is_group']) ? "o grupo {$result['recipient']}" : $result['recipient'];

            return response()->json([
                'message' => "Relatório semanal de teste enviado para {$targetLabel} com sucesso!",
                'preview' => $result['message'],
            ]);
        } catch (ZapreiException $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Falha ao enviar relatório semanal: '.$e->getMessage(),
            ], 500);
        }
    }

    public function testMonthly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'destination' => ['nullable', 'string', 'max:100'],
            'date' => ['nullable', 'string', 'max:50'],
            'month' => ['nullable', 'string', 'max:50'],
        ]);

        $recipientType = (string) ($validated['recipient_type'] ?? 'phone');
        $destination = $recipientType === 'group'
            ? ($validated['group_id'] ?? $validated['destination'] ?? null)
            : ($validated['phone'] ?? $validated['destination'] ?? null);

        $dateParam = $validated['month'] ?? $validated['date'] ?? null;
        $refDate = $dateParam !== null ? $this->service->parseReferenceDate((string) $dateParam, 'monthly') : null;

        try {
            $result = $this->service->sendMonthlyReport($tenantId, $destination, true, $refDate, $recipientType);
            $targetLabel = ! empty($result['is_group']) ? "o grupo {$result['recipient']}" : $result['recipient'];

            return response()->json([
                'message' => "Relatório mensal de teste enviado para {$targetLabel} com sucesso!",
                'preview' => $result['message'],
            ]);
        } catch (ZapreiException $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Falha ao enviar relatório mensal: '.$e->getMessage(),
            ], 500);
        }
    }

    public function testYearly(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'destination' => ['nullable', 'string', 'max:100'],
            'date' => ['nullable', 'string', 'max:50'],
            'year' => ['nullable', 'string', 'max:50'],
        ]);

        $recipientType = (string) ($validated['recipient_type'] ?? 'phone');
        $destination = $recipientType === 'group'
            ? ($validated['group_id'] ?? $validated['destination'] ?? null)
            : ($validated['phone'] ?? $validated['destination'] ?? null);

        $dateParam = $validated['year'] ?? $validated['date'] ?? null;
        $refDate = $dateParam !== null ? $this->service->parseReferenceDate((string) $dateParam, 'yearly') : null;

        try {
            $result = $this->service->sendYearlyReport($tenantId, $destination, true, $refDate, $recipientType);
            $targetLabel = ! empty($result['is_group']) ? "o grupo {$result['recipient']}" : $result['recipient'];

            return response()->json([
                'message' => "Relatório anual de teste enviado para {$targetLabel} com sucesso!",
                'preview' => $result['message'],
            ]);
        } catch (ZapreiException $e) {
            return response()->json([
                'message' => $e->getMessage(),
            ], 422);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Falha ao enviar relatório anual: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Retorna a pré-visualização e dados consolidados para um período e tipo específicos.
     */
    public function preview(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $type = (string) $request->query('type', 'daily');
        if (! in_array($type, ['daily', 'weekly', 'monthly', 'yearly'], true)) {
            $type = 'daily';
        }

        $date = $request->query('date') ?? $request->query('month') ?? $request->query('year');

        try {
            $result = $this->service->previewReport($tenantId, $type, $date !== null ? (string) $date : null);

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Erro ao gerar pré-visualização: '.$e->getMessage(),
            ], 500);
        }
    }

    /**
     * Reenvia um relatório específico para WhatsApp sob demanda (para contingência quando a API cai).
     */
    public function resend(Request $request): JsonResponse
    {
        $tenantId = $this->tenantId($request);

        $validated = $request->validate([
            'type' => ['nullable', 'string', 'in:daily,weekly,monthly,yearly'],
            'date' => ['nullable', 'string', 'max:50'],
            'month' => ['nullable', 'string', 'max:50'],
            'year' => ['nullable', 'string', 'max:50'],
            'recipient_type' => ['nullable', 'string', 'in:phone,group'],
            'phone' => ['nullable', 'string', 'max:50'],
            'group_id' => ['nullable', 'string', 'max:100'],
            'destination' => ['nullable', 'string', 'max:100'],
        ]);

        $type = (string) ($validated['type'] ?? 'daily');
        $dateParam = $validated['date'] ?? $validated['month'] ?? $validated['year'] ?? null;

        $recipientType = ! empty($validated['recipient_type']) ? (string) $validated['recipient_type'] : null;
        $destination = $recipientType === 'group'
            ? ($validated['group_id'] ?? $validated['destination'] ?? null)
            : ($validated['phone'] ?? $validated['destination'] ?? null);

        try {
            $result = $this->service->resendReport(
                $tenantId,
                $type,
                $dateParam !== null ? (string) $dateParam : null,
                $destination,
                $recipientType
            );

            $targetLabel = ! empty($result['is_group']) ? "o grupo {$result['recipient']}" : $result['recipient'];
            $periodLabel = $result['data']['date'] ?? 'período selecionado';

            return response()->json([
                'message' => "Relatório ({$periodLabel}) reenviado com sucesso para {$targetLabel}!",
                'preview' => $result['message'],
                'data' => $result['data'],
            ]);
        } catch (ZapreiException $e) {
            return response()->json([
                'message' => 'Falha no reenvio via WhatsApp: '.$e->getMessage(),
            ], 422);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Erro interno ao reenviar relatório: '.$e->getMessage(),
            ], 500);
        }
    }
}
