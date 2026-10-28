<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Contracts\QuestionReportServiceInterface;

class QuestionReportService implements QuestionReportServiceInterface
{
    public function fileReport(int $tenantId, User $student, string $questionId, string $reason, string $details): array
    {
        $id = (string) Str::uuid();

        DB::table('mentoria2_question_reports')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'student_id' => $student->id,
            'question_id' => $questionId,
            'reason' => $reason,
            'details' => $details,
            'status' => 'pendente',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return [
            'id' => $id,
            'status' => 'pendente',
            'message' => 'Reporte enviado com sucesso para a equipe de mentoria.',
        ];
    }

    public function listPendingReports(int $tenantId, ?string $status = null): array
    {
        $query = DB::table('mentoria2_question_reports as r')
            ->join('mentoria2_question_bank as q', 'q.id', '=', 'r.question_id')
            ->join('users as u', 'u.id', '=', 'r.student_id')
            ->where('r.tenant_id', $tenantId);

        if ($status) {
            $query->where('r.status', $status);
        }

        return $query->select(
            'r.id', 'r.question_id', 'r.reason', 'r.details', 'r.status',
            'r.mentor_resolution', 'r.created_at', 'r.resolved_at',
            'u.name as student_name', 'q.prompt', 'q.correct_answer', 'q.subject', 'q.topic'
        )
        ->orderByDesc('r.created_at')
        ->get()
        ->toArray();
    }

    public function resolveReport(
        int $tenantId,
        User $mentor,
        string $reportId,
        string $status,
        string $resolutionNotes,
        ?array $updatedQuestion = null
    ): array {
        return DB::transaction(function () use ($tenantId, $mentor, $reportId, $status, $resolutionNotes, $updatedQuestion) {
            $report = DB::table('mentoria2_question_reports')
                ->where('tenant_id', $tenantId)
                ->where('id', $reportId)
                ->first();

            if (! $report) {
                throw new \InvalidArgumentException('Report not found.');
            }

            if ($updatedQuestion && $status === 'deferido') {
                $qUpdate = [];
                if (isset($updatedQuestion['prompt'])) $qUpdate['prompt'] = $updatedQuestion['prompt'];
                if (isset($updatedQuestion['correct_answer'])) $qUpdate['correct_answer'] = $updatedQuestion['correct_answer'];
                if (isset($updatedQuestion['explanation'])) $qUpdate['explanation'] = $updatedQuestion['explanation'];
                if (isset($updatedQuestion['alternatives'])) $qUpdate['alternatives'] = json_encode($updatedQuestion['alternatives'], JSON_UNESCAPED_UNICODE);
                if (isset($updatedQuestion['is_active'])) $qUpdate['is_active'] = (bool) $updatedQuestion['is_active'];

                if (! empty($qUpdate)) {
                    $qUpdate['updated_at'] = now();
                    DB::table('mentoria2_question_bank')
                        ->where('tenant_id', $tenantId)
                        ->where('id', $report->question_id)
                        ->update($qUpdate);
                }
            }

            DB::table('mentoria2_question_reports')->where('id', $reportId)->update([
                'status' => $status,
                'mentor_resolution' => $resolutionNotes,
                'resolved_by' => $mentor->id,
                'resolved_at' => now(),
                'updated_at' => now(),
            ]);

            return [
                'id' => $reportId,
                'status' => $status,
                'resolved_by' => $mentor->name,
                'mentor_resolution' => $resolutionNotes,
                'resolved_at' => now()->toIso8601String(),
            ];
        });
    }
}

