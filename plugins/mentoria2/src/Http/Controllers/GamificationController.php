<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\GamificationService;

class GamificationController extends Controller
{
    public function __construct(private readonly AccessService $access, private readonly GamificationService $gamification) {}

    public function studentSummary(Request $request, int $tenant): JsonResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        return response()->json(['summary' => $this->gamification->getSummary($tenant, (int) $student->id), 'history' => $this->gamification->history($tenant, (int) $student->id)]);
    }

    public function rules(Request $request): JsonResponse
    {
        $tenant = $this->access->tenantId($request->user());
        return response()->json(['rules' => $this->gamification->rules($tenant)]);
    }

    public function saveRules(Request $request): JsonResponse
    {
        $tenant = $this->access->tenantId($request->user());
        $data = $request->validate(['rules' => ['required', 'array', 'max:20'], 'rules.*.event_type' => ['required', 'string', 'max:60'], 'rules.*.points' => ['required', 'integer', 'min:0', 'max:10000'], 'rules.*.is_active' => ['sometimes', 'boolean']]);
        foreach ($data['rules'] as $rule) {
            DB::table('mentoria2_gamification_rules')->updateOrInsert(['tenant_id' => $tenant, 'event_type' => $rule['event_type']], ['id' => (string) Str::uuid(), 'points' => $rule['points'], 'is_active' => $rule['is_active'] ?? true, 'updated_at' => now(), 'created_at' => now()]);
        }
        return response()->json(['ok' => true, 'rules' => $this->gamification->rules($tenant)]);
    }
}
