<?php

namespace Plugins\Mentoria2\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class AuditService
{
    public function record(int $tenantId, User $actor, string $action, string $entity, ?string $entityId = null, ?int $studentId = null, array $details = []): void
    {
        $request = request();
        if ($request->attributes->get('mentoria2.workspace')) {
            $actor = $request->attributes->get('mentoria2.workspace_actor') ?? $actor;
            $student = $request->attributes->get('mentoria2.workspace_student');
            $studentId ??= $student?->id;
            $details = ['source' => 'mentor_workspace'] + $details;
        }

        $id = (string) Str::uuid();

        DB::table('mentoria2_audit_events')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'actor_id' => $actor->id,
            'student_id' => $studentId,
            'action' => $action,
            'entity' => $entity,
            'entity_id' => $entityId,
            'details' => $details === [] ? null : json_encode($details, JSON_UNESCAPED_UNICODE),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        Log::info("Mentoria2 Audit [{$action}]", [
            'audit_id' => $id,
            'tenant_id' => $tenantId,
            'actor_id' => $actor->id,
            'student_id' => $studentId,
            'entity' => $entity,
            'entity_id' => $entityId,
            'ip' => $request->ip(),
        ]);
    }
}
