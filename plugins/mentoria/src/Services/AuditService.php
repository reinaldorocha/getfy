<?php

namespace Plugins\Mentoria\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class AuditService
{
    public function record(int $tenantId, User $actor, string $action, string $entity, ?string $entityId = null, ?int $studentId = null, array $details = []): void
    {
        DB::table('mentoria_audit_events')->insert([
            'id' => (string) Str::uuid(),
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
    }
}
