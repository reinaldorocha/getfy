<?php

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
use Plugins\Mentoria2\Services\SpreadsheetParserService;

class SpreadsheetImportController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
        private readonly SpreadsheetParserService $parser,
    ) {}

    public function downloadTemplate(): Response
    {
        $csv = $this->parser->generateCsvTemplate();

        return response($csv, 200, [
            'Content-Type' => 'text/csv; charset=UTF-8',
            'Content-Disposition' => 'attachment; filename="modelo_edital_verticalizado.csv"',
        ]);
    }

    public function parsePreview(Request $request): JsonResponse
    {
        $request->validate([
            'file' => 'required|file|max:20480',
        ]);

        $file = $request->file('file');
        $rows = $this->parser->parseFile($file->getRealPath(), $file->getClientOriginalName());

        if (empty($rows)) {
            return response()->json(['message' => 'Nenhum dado encontrado na planilha.'], 422);
        }

        $subjects = [];
        $totalEstimatedMinutes = 0;
        $totalQuestions = 0;

        foreach ($rows as $row) {
            $subj = $row['subject'] ?: 'Geral';
            $top = $row['topic'] ?: 'Geral';
            $sub = $row['subtopic'] ?: null;

            if (! isset($subjects[$subj])) {
                $subjects[$subj] = [
                    'name' => $subj,
                    'topics' => [],
                    'weight' => $row['weight'],
                ];
            }

            if (! isset($subjects[$subj]['topics'][$top])) {
                $subjects[$subj]['topics'][$top] = [
                    'name' => $top,
                    'subtopics' => [],
                    'priority' => $row['priority'],
                    'estimated_minutes' => $row['estimated_minutes'],
                    'questions_target' => $row['questions_target'],
                ];
            }

            if ($sub) {
                $subjects[$subj]['topics'][$top]['subtopics'][] = [
                    'name' => $sub,
                    'priority' => $row['priority'],
                    'estimated_minutes' => $row['estimated_minutes'],
                    'questions_target' => $row['questions_target'],
                ];
            }

            $totalEstimatedMinutes += (int) ($row['estimated_minutes'] ?: 60);
            $totalQuestions += (int) ($row['questions_target'] ?: 0);
        }

        return response()->json([
            'ok' => true,
            'summary' => [
                'total_rows' => count($rows),
                'total_subjects' => count($subjects),
                'total_estimated_minutes' => $totalEstimatedMinutes,
                'total_estimated_hours' => round($totalEstimatedMinutes / 60, 1),
                'total_questions_target' => $totalQuestions,
            ],
            'preview_subjects' => array_values(array_map(function ($s) {
                return [
                    'name' => $s['name'],
                    'topics_count' => count($s['topics']),
                    'weight' => $s['weight'],
                ];
            }, $subjects)),
        ]);
    }

    public function import(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $user = $request->user();

        $validated = $request->validate([
            'file' => 'required|file|max:20480',
            'contest_id' => 'nullable|string',
            'new_contest_name' => 'nullable|string',
            'role' => 'nullable|string',
            'organization' => 'nullable|string',
            'board' => 'nullable|string',
            'exam_date' => 'nullable|date',
        ]);

        $file = $request->file('file');
        $rows = $this->parser->parseFile($file->getRealPath(), $file->getClientOriginalName());

        if (empty($rows)) {
            return response()->json(['message' => 'A planilha enviada não contém linhas válidas.'], 422);
        }

        $contestId = $validated['contest_id'] ?? null;

        return DB::transaction(function () use ($tenantId, $user, $validated, $rows, $contestId) {
            if (! empty($contestId)) {
                $contest = DB::table('mentoria2_contests')
                    ->where('tenant_id', $tenantId)
                    ->where('id', $contestId)
                    ->first();

                if (! $contest) {
                    return response()->json(['message' => 'Concurso selecionado não encontrado.'], 404);
                }

                if (! empty($validated['exam_date'])) {
                    DB::table('mentoria2_contests')
                        ->where('tenant_id', $tenantId)
                        ->where('id', $contestId)
                        ->update(['exam_date' => $validated['exam_date'], 'updated_at' => now()]);
                }
            } else {
                $contestId = (string) Str::uuid();
                DB::table('mentoria2_contests')->insert([
                    'id' => $contestId,
                    'tenant_id' => $tenantId,
                    'name' => $validated['new_contest_name'] ?: 'Novo Concurso',
                    'organization' => $validated['organization'] ?: null,
                    'board' => $validated['board'] ?: null,
                    'position' => $validated['role'] ?: null,
                    'phase' => 'Publicado',
                    'exam_date' => $validated['exam_date'] ?: null,
                    'created_by' => $user->id,
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            // Find or create edict
            $edict = DB::table('mentoria2_edicts')
                ->where('tenant_id', $tenantId)
                ->where('contest_id', $contestId)
                ->where('is_active', true)
                ->first();

            if ($edict) {
                $edictId = (string) $edict->id;
            } else {
                $edictId = (string) Str::uuid();
                DB::table('mentoria2_edicts')->insert([
                    'id' => $edictId,
                    'tenant_id' => $tenantId,
                    'contest_id' => $contestId,
                    'name' => 'Edital Verticalizado Oficial',
                    'version' => '1.0',
                    'created_by' => $user->id,
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            $subjectPosition = (int) DB::table('mentoria2_subjects')
                ->where('tenant_id', $tenantId)
                ->where('edict_id', $edictId)
                ->max('position');

            // Group rows by subject -> topic -> subtopics
            $tree = [];
            foreach ($rows as $row) {
                $sName = $row['subject'] ?: 'Conhecimentos Gerais';
                $tName = $row['topic'] ?: 'Geral';
                $subName = $row['subtopic'] ?: null;

                if (! isset($tree[$sName])) {
                    $tree[$sName] = [
                        'weight' => $row['weight'],
                        'priority' => $row['priority'],
                        'topics' => [],
                    ];
                }

                if (! isset($tree[$sName]['topics'][$tName])) {
                    $tree[$sName]['topics'][$tName] = [
                        'priority' => $row['priority'],
                        'estimated_minutes' => $row['estimated_minutes'],
                        'questions_target' => $row['questions_target'],
                        'subtopics' => [],
                    ];
                }

                if ($subName) {
                    $tree[$sName]['topics'][$tName]['subtopics'][] = [
                        'name' => $subName,
                        'priority' => $row['priority'],
                        'estimated_minutes' => $row['estimated_minutes'],
                        'questions_target' => $row['questions_target'],
                    ];
                }
            }

            $createdSubjects = 0;
            $createdTopics = 0;
            $createdSubtopics = 0;

            foreach ($tree as $subjName => $subjData) {
                $subjectPosition++;
                $subjectId = (string) Str::uuid();

                DB::table('mentoria2_subjects')->insert([
                    'id' => $subjectId,
                    'tenant_id' => $tenantId,
                    'edict_id' => $edictId,
                    'name' => $subjName,
                    'position' => $subjectPosition,
                    'weight' => $subjData['weight'],
                    'relevance' => $subjData['priority'],
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
                $createdSubjects++;

                $topicPosition = 0;
                foreach ($subjData['topics'] as $topicName => $topicData) {
                    $topicPosition++;
                    $topicId = (string) Str::uuid();

                    DB::table('mentoria2_topics')->insert([
                        'id' => $topicId,
                        'tenant_id' => $tenantId,
                        'subject_id' => $subjectId,
                        'name' => $topicName,
                        'position' => $topicPosition,
                        'weight' => $subjData['weight'],
                        'relevance' => $topicData['priority'],
                        'estimated_minutes' => $topicData['estimated_minutes'],
                        'questions_target' => $topicData['questions_target'],
                        'is_active' => true,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                    $createdTopics++;

                    $subtopicPosition = 0;
                    foreach ($topicData['subtopics'] as $sub) {
                        $subtopicPosition++;
                        $subtopicId = (string) Str::uuid();

                        DB::table('mentoria2_subtopics')->insert([
                            'id' => $subtopicId,
                            'tenant_id' => $tenantId,
                            'topic_id' => $topicId,
                            'name' => $sub['name'],
                            'position' => $subtopicPosition,
                            'weight' => $subjData['weight'],
                            'relevance' => $sub['priority'],
                            'estimated_minutes' => $sub['estimated_minutes'],
                            'questions_target' => $sub['questions_target'],
                            'is_active' => true,
                            'created_at' => now(),
                            'updated_at' => now(),
                        ]);
                        $createdSubtopics++;
                    }
                }
            }

            $this->audit->record($tenantId, $user, 'edict.spreadsheet_imported', 'edict', $edictId, [
                'contest_id' => $contestId,
                'subjects' => $createdSubjects,
                'topics' => $createdTopics,
                'subtopics' => $createdSubtopics,
            ]);

            return response()->json([
                'ok' => true,
                'message' => 'Edital verticalizado importado com sucesso via planilha.',
                'contest_id' => $contestId,
                'edict_id' => $edictId,
                'subjects_count' => $createdSubjects,
                'topics_count' => $createdTopics,
                'subtopics_count' => $createdSubtopics,
            ]);
        });
    }
}
