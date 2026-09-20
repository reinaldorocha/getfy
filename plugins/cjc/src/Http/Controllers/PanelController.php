<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\AuditService;
use Plugins\Cjc\Services\MetricsService;

class PanelController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly MetricsService $metrics,
        private readonly AuditService $audit,
    ) {}

    public function index(Request $request): Response
    {
        $tenantId = $this->access->tenantId($request->user());

        return Inertia::render('Plugin/cjc/Index', [
            'pluginSlug' => 'cjc',
            'pluginPage' => 'Index',
            'plugin_ui_page' => $this->panelPayload($tenantId),
        ]);
    }

    public function data(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json($this->panelPayload($tenantId));
    }

    public function student(Request $request, int $student): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $user = $this->access->assertStudentInTenant($actor, $student);

        return response()->json([
            'student' => ['id' => $user->id, 'name' => $user->name, 'email' => $user->email],
            'metrics' => $this->metrics->studentSummary($tenantId, $user->id),
            'contests' => DB::table('cjc_student_contests as sc')
                ->join('cjc_contests as c', 'c.id', '=', 'sc.contest_id')
                ->where('sc.tenant_id', $tenantId)->where('sc.student_id', $user->id)->where('sc.is_active', true)
                ->select('c.id', 'c.name', 'c.board', 'c.position', 'c.exam_date', 'sc.group', 'sc.result', 'sc.ranking', 'sc.final_score')
                ->orderBy('sc.position')->get(),
            'schedule' => DB::table('cjc_schedules')->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)->latest('updated_at')->first(),
            'recent_sessions' => DB::table('cjc_study_sessions')->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)->latest('studied_at')->limit(20)->get(),
            'mock_exams' => DB::table('cjc_mock_exams')->where('tenant_id', $tenantId)->where('student_id', $user->id)->where('is_active', true)->latest('performed_at')->limit(20)->get(),
        ]);
    }

    public function enableProduct(Request $request, Product $product): RedirectResponse|JsonResponse
    {
        $data = $request->validate([
            'capabilities' => ['sometimes', 'array'],
            'capabilities.*' => ['string', 'max:80'],
            'settings' => ['sometimes', 'array'],
        ]);
        $actor = $request->user();
        $this->access->enableProduct($actor, $product, $data['capabilities'] ?? ['cronograma', 'questoes', 'flashcards', 'simulados'], $data['settings'] ?? []);
        $tenantId = $this->access->tenantId($actor);
        $this->audit->record($tenantId, $actor, 'product.enabled', 'product', (string) $product->id, null, $data);

        return $request->expectsJson()
            ? response()->json(['ok' => true])
            : back()->with('success', 'Produto habilitado para o CJC.');
    }

    public function disableProduct(Request $request, Product $product): RedirectResponse|JsonResponse
    {
        $actor = $request->user();
        $this->access->disableProduct($actor, $product);
        $tenantId = $this->access->tenantId($actor);
        $this->audit->record($tenantId, $actor, 'product.disabled', 'product', (string) $product->id);

        return $request->expectsJson()
            ? response()->json(['ok' => true])
            : back()->with('success', 'Produto removido do acesso CJC.');
    }

    private function panelPayload(int $tenantId): array
    {
        $students = $this->access->studentsForTenant($tenantId)->take(100)->map(function ($student) use ($tenantId) {
            return [
                'id' => (int) $student->id,
                'name' => $student->name,
                'email' => $student->email,
                'metrics' => $this->metrics->studentSummary($tenantId, (int) $student->id),
            ];
        })->values();

        return [
            'tenant_id' => $tenantId,
            'summary' => $this->metrics->tenantSummary($tenantId),
            'products' => $this->access->productsForTenant($tenantId)->values(),
            'students' => $students,
            'contests' => DB::table('cjc_contests')->where('tenant_id', $tenantId)->where('is_active', true)->orderByRaw('exam_date IS NULL, exam_date')->orderBy('name')->get(),
            'edicts' => DB::table('cjc_edicts as e')->join('cjc_contests as c', 'c.id', '=', 'e.contest_id')
                ->where('e.tenant_id', $tenantId)->where('e.is_active', true)
                ->select('e.*', 'c.name as contest_name')->orderBy('e.name')->get(),
            'questions' => DB::table('cjc_question_bank')->where('tenant_id', $tenantId)->where('is_active', true)->latest('created_at')->limit(50)->get(),
            'student_app_base' => url('/cjc-estudos/'.$tenantId),
        ];
    }
}
