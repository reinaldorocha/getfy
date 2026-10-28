<?php

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
use Plugins\Mentoria2\Services\NotificationService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FeedbackController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
        private readonly NotificationService $notifications,
    ) {}

    public function mentorIndex(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);

        $feedbacks = DB::table('mentoria2_student_feedbacks as f')
            ->join('users as m', 'm.id', '=', 'f.mentor_id')
            ->where('f.tenant_id', $tenantId)
            ->where('f.student_id', $studentUser->id)
            ->select(
                'f.id',
                'f.student_id',
                'f.mentor_id',
                'm.name as mentor_name',
                'f.message',
                'f.category',
                'f.is_read',
                'f.read_at',
                'f.reply',
                'f.replied_at',
                'f.created_at',
                'f.updated_at'
            )
            ->orderByDesc('f.created_at')
            ->get();

        return response()->json([
            'ok' => true,
            'feedbacks' => $feedbacks,
        ]);
    }

    public function store(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $studentUser = $this->access->assertStudentInTenant($actor, $student);

        $data = $request->validate([
            'message' => ['required', 'string', 'max:5000'],
            'category' => ['nullable', 'string', 'max:60'],
        ]);

        $feedbackId = (string) Str::uuid();

        DB::table('mentoria2_student_feedbacks')->insert([
            'id' => $feedbackId,
            'tenant_id' => $tenantId,
            'mentor_id' => $actor->id,
            'student_id' => $studentUser->id,
            'message' => $data['message'],
            'category' => $data['category'] ?? 'general',
            'is_read' => false,
            'read_at' => null,
            'reply' => null,
            'replied_at' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->audit->record(
            $tenantId,
            $actor,
            'feedback.created',
            'feedback',
            $feedbackId,
            $studentUser->id,
            ['category' => $data['category'] ?? 'general']
        );
        $this->notifications->create($tenantId, (int) $studentUser->id, 'mentor_feedback', 'Novo feedback do mentor', (string) $data['message'], 'feedback', 'feedback', $feedbackId, 'feedback_'.$feedbackId);

        return response()->json([
            'ok' => true,
            'id' => $feedbackId,
            'message' => $data['message'],
            'category' => $data['category'] ?? 'general',
            'created_at' => now()->toIso8601String(),
        ], 201);
    }

    public function studentIndex(Request $request, int|string $tenant): JsonResponse
    {
        $actor = $request->user();
        $tenantId = (int) $tenant;
        $this->access->assertStudentAccess($actor, $tenantId);

        $feedbacks = DB::table('mentoria2_student_feedbacks as f')
            ->join('users as m', 'm.id', '=', 'f.mentor_id')
            ->where('f.tenant_id', $tenantId)
            ->where('f.student_id', $actor->id)
            ->select(
                'f.id',
                'f.mentor_id',
                'm.name as mentor_name',
                'f.message',
                'f.category',
                'f.is_read',
                'f.read_at',
                'f.reply',
                'f.replied_at',
                'f.created_at',
                'f.updated_at'
            )
            ->orderByDesc('f.created_at')
            ->get();

        return response()->json([
            'ok' => true,
            'feedbacks' => $feedbacks,
        ]);
    }

    public function studentReply(Request $request, int|string $tenant, string $feedback): JsonResponse
    {
        $actor = $request->user();
        $tenantId = (int) $tenant;
        $this->access->assertStudentAccess($actor, $tenantId);

        $data = $request->validate([
            'reply' => ['required', 'string', 'max:5000'],
        ]);

        $row = DB::table('mentoria2_student_feedbacks')
            ->where('id', $feedback)
            ->where('tenant_id', $tenantId)
            ->where('student_id', $actor->id)
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Feedback não encontrado.');
        }

        DB::table('mentoria2_student_feedbacks')
            ->where('id', $feedback)
            ->update([
                'reply' => $data['reply'],
                'replied_at' => now(),
                'is_read' => true,
                'read_at' => $row->read_at ?? now(),
                'updated_at' => now(),
            ]);

        return response()->json([
            'ok' => true,
            'reply' => $data['reply'],
            'replied_at' => now()->toIso8601String(),
        ]);
    }

    public function studentMarkRead(Request $request, int|string $tenant, string $feedback): JsonResponse
    {
        $actor = $request->user();
        $tenantId = (int) $tenant;
        $this->access->assertStudentAccess($actor, $tenantId);

        $row = DB::table('mentoria2_student_feedbacks')
            ->where('id', $feedback)
            ->where('tenant_id', $tenantId)
            ->where('student_id', $actor->id)
            ->first();

        if (! $row) {
            throw new NotFoundHttpException('Feedback não encontrado.');
        }

        DB::table('mentoria2_student_feedbacks')
            ->where('id', $feedback)
            ->update([
                'is_read' => true,
                'read_at' => now(),
                'updated_at' => now(),
            ]);

        return response()->json(['ok' => true]);
    }
}

