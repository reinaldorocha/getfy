<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\EssayService;
use Plugins\Mentoria2\Services\NotificationService;

class EssayController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly EssayService $essayService,
        private readonly NotificationService $notifications,
    ) {}

    public function index(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $contestId = $request->query('contest_id');
        $essays = $this->essayService->listEssays($tenant, $contestId);

        return response()->json([
            'essays' => $essays,
            'ai_configured' => $this->essayService->isAiConfigured($tenant),
        ]);
    }

    public function aiStatus(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $configured = $this->essayService->isAiConfigured($tenant);

        return response()->json([
            'configured' => $configured,
            'message' => $configured
                ? 'Member IA configurado e disponível para geração de propostas e correções analíticas.'
                : 'A Inteligência Artificial (Member IA) ainda não foi configurada pelo mentor.',
        ]);
    }

    public function generateTheme(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);

        if (! $this->access->hasAiAccess($request->user(), $tenant)) {
            return response()->json([
                'ok' => false,
                'has_ai_access' => false,
                'error' => 'ai_access_denied',
                'message' => 'Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.',
            ], 403);
        }

        $tipo = $request->input('tipo', 'dissertacao');
        $banca = $request->input('banca');
        $contestId = $request->input('contest_id');

        if (! $this->essayService->isAiConfigured($tenant)) {
            return response()->json([
                'configured' => false,
                'ai_available' => false,
                'error' => 'unconfigured_ai',
                'message' => 'A Inteligência Artificial (Member IA) ainda não foi configurada pelo mentor neste ambiente. Solicite a configuração nas opções da plataforma.',
                'temas' => [],
            ], 422);
        }

        $result = $this->essayService->generateThemes($tenant, (string) $tipo, $banca ? (string) $banca : null, $contestId ? (string) $contestId : null);

        if (empty($result['temas']) && ! empty($result['error'])) {
            return response()->json($result, 503);
        }

        return response()->json($result);
    }

    public function aiCorrection(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);

        if (! $this->access->hasAiAccess($request->user(), $tenant)) {
            return response()->json([
                'ok' => false,
                'has_ai_access' => false,
                'error' => 'ai_access_denied',
                'message' => 'Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.',
            ], 403);
        }

        if (! $this->essayService->isAiConfigured($tenant)) {
            return response()->json([
                'configured' => false,
                'ai_available' => false,
                'error' => 'unconfigured_ai',
                'message' => 'A correção por IA está indisponível porque o Member IA não foi configurado pelo mentor.',
            ], 422);
        }

        $validated = $request->validate([
            'tema' => 'nullable|string',
            'texto' => 'nullable|string',
            'tipo' => 'nullable|string',
            'foto_base64' => 'nullable|string',
            'submission_id' => 'nullable|string',
        ]);

        $tema = ! empty($validated['tema']) ? trim($validated['tema']) : 'Tema dissertativo da banca';
        $texto = ! empty($validated['texto']) ? trim($validated['texto']) : '';
        $tipo = ! empty($validated['tipo']) ? trim($validated['tipo']) : 'dissertacao';

        if (empty($texto) && empty($validated['foto_base64'])) {
            return response()->json(['message' => 'Texto da redação ou foto da folha é obrigatório.'], 422);
        }

        if (empty($texto) && ! empty($validated['foto_base64'])) {
            try {
                $texto = $this->essayService->transcribeHandwrittenPhoto($tenant, (int) $request->user()->id, $validated['foto_base64']);
            } catch (\Throwable $e) {
                return response()->json(['message' => 'Falha no OCR da folha de redação: ' . $e->getMessage()], 422);
            }
        }

        try {
            $result = $this->essayService->evaluateContentWithAi(
                $tenant,
                (int) $request->user()->id,
                $tema,
                $texto,
                $tipo,
                $validated['submission_id'] ?? null
            );

            return response()->json($result);
        } catch (\Throwable $e) {
            return response()->json([
                'configured' => true,
                'ai_available' => false,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function show(Request $request, int $tenant, string $essay): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $data = $this->essayService->getEssay($tenant, $essay);

        if (! $data) {
            return response()->json(['message' => 'Proposta de redação não encontrada.'], 404);
        }

        return response()->json($data);
    }

    public function store(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'prompt_theme' => 'required|string',
            'contest_id' => 'nullable|string',
            'min_words' => 'nullable|integer|min:50|max:1000',
            'max_words' => 'nullable|integer|min:100|max:2000',
            'max_score' => 'nullable|numeric|min:10|max:1000',
            'motivating_texts' => 'nullable|array',
            'criteria' => 'nullable|array',
        ]);

        $created = $this->essayService->createEssay($tenantId, $request->user(), $validated);

        return response()->json($created, 201);
    }

    public function submit(Request $request, int $tenant, string $essay): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $validated = $request->validate([
            'content' => 'required|string|min:30',
        ]);

        $result = $this->essayService->submitEssay($tenant, $request->user(), $essay, $validated['content']);

        return response()->json($result);
    }

    public function mentorGrade(Request $request, string $submission): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $submissionRow = \Illuminate\Support\Facades\DB::table('mentoria2_essay_submissions')->where('tenant_id', $tenantId)->where('id', $submission)->first(['student_id', 'essay_id']);
        if (! $submissionRow) abort(404);
        $validated = $request->validate([
            'total_score' => 'required|numeric|min:0|max:1000',
            'criteria_scores' => 'required|array',
            'feedback' => 'required|string|min:10',
        ]);

        $result = $this->essayService->gradeByMentor(
            $tenantId,
            $request->user(),
            $submission,
            (float) $validated['total_score'],
            $validated['criteria_scores'],
            $validated['feedback']
        );
        $this->notifications->create($tenantId, (int) $submissionRow->student_id, 'essay_graded', 'Redacao corrigida', 'Sua redacao recebeu uma correcao do mentor.', 'essays', 'essay_submission', $submission, 'essay_graded_'.$submission);

        return response()->json($result);
    }

    public function submissions(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);
        $submissions = $this->essayService->getStudentSubmissions($tenant, $request->user()->id);

        return response()->json([
            'submissions' => $submissions,
        ]);
    }

    public function tenantSubmissions(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $status = $request->query('status');
        $submissions = $this->essayService->getTenantSubmissions($tenantId, $status);

        return response()->json([
            'submissions' => $submissions,
        ]);
    }

    public function ocrTranscribe(Request $request, int $tenant): JsonResponse
    {
        $this->access->assertStudentAccess($request->user(), $tenant);

        if (! $this->access->hasAiAccess($request->user(), $tenant)) {
            return response()->json([
                'ok' => false,
                'has_ai_access' => false,
                'error' => 'ai_access_denied',
                'message' => 'Este recurso de Inteligência Artificial não está incluso no seu plano. Solicite ao administrador a liberação do módulo de IA ou faça upgrade do seu curso.',
            ], 403);
        }

        if (! $this->essayService->isAiConfigured($tenant)) {
            return response()->json([
                'configured' => false,
                'ai_available' => false,
                'error' => 'unconfigured_ai',
                'message' => 'A transcrição OCR por IA está indisponível porque o Member IA não foi configurado pelo mentor.',
            ], 422);
        }

        $validated = $request->validate([
            'foto_base64' => 'required|string',
        ]);

        try {
            $transcribed = $this->essayService->transcribeHandwrittenPhoto($tenant, (int) $request->user()->id, $validated['foto_base64']);

            return response()->json([
                'ok' => true,
                'transcribed_text' => $transcribed,
            ]);
        } catch (\Throwable $e) {
            return response()->json([
                'ok' => false,
                'message' => $e->getMessage(),
            ], 422);
        }
    }
}


