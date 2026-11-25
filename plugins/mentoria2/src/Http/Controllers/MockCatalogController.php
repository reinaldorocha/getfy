<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Services\StorageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class MockCatalogController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function index(Request $request): JsonResponse
    {
        $tenantId = $this->access->tenantId($request->user());

        return response()->json([
            'ok' => true,
            'data' => self::forMentor($tenantId),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $data = $this->validatePayload($request);
        $isPaid = filter_var($data['is_paid'] ?? false, FILTER_VALIDATE_BOOLEAN);
        $price = $isPaid ? (float) ($data['price'] ?? 0) : null;

        if ($isPaid && ($price === null || $price <= 0)) {
            return response()->json(['message' => 'Informe um valor maior que zero para simulados pagos.'], 422);
        }

        [$productId, $checkoutSlug] = $this->resolveOrCreateProduct($tenantId, $data['title'], $isPaid, $price, $data['product_id'] ?? null);
        $pdfMeta = $this->storePdf($request, $tenantId);

        $id = (string) Str::uuid();
        DB::table('mentoria2_mock_catalog')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'contest_id' => ! empty($data['contest_id']) ? $data['contest_id'] : null,
            'title' => trim($data['title']),
            'description' => isset($data['description']) ? trim((string) $data['description']) : null,
            'board_style' => isset($data['board_style']) ? trim((string) $data['board_style']) : null,
            'questions_count' => isset($data['questions_count']) && $data['questions_count'] !== '' ? (int) $data['questions_count'] : null,
            'time_minutes' => isset($data['time_minutes']) && $data['time_minutes'] !== '' ? (int) $data['time_minutes'] : null,
            'pdf_path' => $pdfMeta['path'] ?? null,
            'pdf_name' => $pdfMeta['name'] ?? null,
            'pdf_size' => $pdfMeta['size'] ?? null,
            'is_paid' => $isPaid,
            'price' => $price,
            'product_id' => $productId,
            'checkout_slug' => $checkoutSlug,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->audit->record($tenantId, $actor, 'mock_catalog.created', 'mock_catalog', $id, null, [
            'is_paid' => $isPaid,
            'price' => $price,
            'has_pdf' => ! empty($pdfMeta),
        ]);

        $item = collect(self::forMentor($tenantId))->firstWhere('id', $id);

        return response()->json(['ok' => true, 'item' => $item], 201);
    }

    public function update(Request $request, string $mock): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $current = DB::table('mentoria2_mock_catalog')
            ->where('tenant_id', $tenantId)
            ->where('id', $mock)
            ->where('is_active', true)
            ->first();

        if (! $current) {
            throw new NotFoundHttpException('Simulado não encontrado.');
        }

        $data = $this->validatePayload($request, true);
        $title = isset($data['title']) ? trim((string) $data['title']) : (string) $current->title;
        $isPaid = array_key_exists('is_paid', $data)
            ? filter_var($data['is_paid'], FILTER_VALIDATE_BOOLEAN)
            : (bool) $current->is_paid;
        $price = $isPaid
            ? (array_key_exists('price', $data) && $data['price'] !== '' ? (float) $data['price'] : (float) ($current->price ?? 0))
            : null;

        if ($isPaid && ($price === null || $price <= 0)) {
            return response()->json(['message' => 'Informe um valor maior que zero para simulados pagos.'], 422);
        }

        [$productId, $checkoutSlug] = $this->resolveOrCreateProduct(
            $tenantId,
            $title,
            $isPaid,
            $price,
            array_key_exists('product_id', $data) ? $data['product_id'] : $current->product_id
        );

        $update = [
            'title' => $title,
            'description' => array_key_exists('description', $data) ? trim((string) $data['description']) : $current->description,
            'board_style' => array_key_exists('board_style', $data) ? trim((string) $data['board_style']) : $current->board_style,
            'questions_count' => array_key_exists('questions_count', $data)
                ? ($data['questions_count'] !== '' && $data['questions_count'] !== null ? (int) $data['questions_count'] : null)
                : $current->questions_count,
            'time_minutes' => array_key_exists('time_minutes', $data)
                ? ($data['time_minutes'] !== '' && $data['time_minutes'] !== null ? (int) $data['time_minutes'] : null)
                : $current->time_minutes,
            'is_paid' => $isPaid,
            'price' => $price,
            'product_id' => $productId,
            'checkout_slug' => $checkoutSlug,
            'updated_at' => now(),
        ];

        $pdfMeta = $this->storePdf($request, $tenantId);
        if (! empty($pdfMeta)) {
            $update['pdf_path'] = $pdfMeta['path'];
            $update['pdf_name'] = $pdfMeta['name'];
            $update['pdf_size'] = $pdfMeta['size'];
        }

        DB::table('mentoria2_mock_catalog')->where('id', $mock)->update($update);
        $this->audit->record($tenantId, $actor, 'mock_catalog.updated', 'mock_catalog', $mock);

        $item = collect(self::forMentor($tenantId))->firstWhere('id', $mock);

        return response()->json(['ok' => true, 'item' => $item]);
    }

    public function destroy(Request $request, string $mock): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $updated = DB::table('mentoria2_mock_catalog')
            ->where('tenant_id', $tenantId)
            ->where('id', $mock)
            ->update(['is_active' => false, 'updated_at' => now()]);

        if ($updated === 0) {
            throw new NotFoundHttpException('Simulado não encontrado.');
        }

        $this->audit->record($tenantId, $actor, 'mock_catalog.deleted', 'mock_catalog', $mock);

        return response()->json(['ok' => true]);
    }

    public function download(Request $request, string $mock): StreamedResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $row = DB::table('mentoria2_mock_catalog')
            ->where('tenant_id', $tenantId)
            ->where('id', $mock)
            ->where('is_active', true)
            ->first();

        if (! $row || empty($row->pdf_path)) {
            throw new NotFoundHttpException('PDF do simulado não encontrado.');
        }

        return $this->streamPdf($row);
    }

    public function downloadStudent(Request $request, int $tenant, string $mock): StreamedResponse
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);

        $row = DB::table('mentoria2_mock_catalog')
            ->where('tenant_id', $tenant)
            ->where('id', $mock)
            ->where('is_active', true)
            ->first();

        if (! $row || empty($row->pdf_path)) {
            throw new NotFoundHttpException('PDF do simulado não encontrado.');
        }

        if ($row->is_paid) {
            $hasAccess = $this->studentHasPurchased($tenant, (int) $student->id, $row->product_id);
            if (! $hasAccess) {
                abort(403, 'Este simulado é pago. Realize a compra pelo checkout para liberar o download.');
            }
        }

        return $this->streamPdf($row);
    }

    public static function forMentor(int $tenantId): array
    {
        $rows = DB::table('mentoria2_mock_catalog as mc')
            ->leftJoin('products as p', 'p.id', '=', 'mc.product_id')
            ->where('mc.tenant_id', $tenantId)
            ->where('mc.is_active', true)
            ->select(
                'mc.*',
                'p.name as product_name',
                'p.checkout_slug as product_checkout_slug',
                'p.price as product_price'
            )
            ->orderByDesc('mc.created_at')
            ->get();

        return $rows->map(function ($row) {
            $slug = $row->product_checkout_slug ?: $row->checkout_slug;
            return [
                'id' => (string) $row->id,
                'contest_id' => $row->contest_id,
                'title' => (string) $row->title,
                'description' => $row->description,
                'board_style' => $row->board_style,
                'questions_count' => $row->questions_count ? (int) $row->questions_count : null,
                'time_minutes' => $row->time_minutes ? (int) $row->time_minutes : null,
                'has_pdf' => ! empty($row->pdf_path),
                'pdf_name' => $row->pdf_name,
                'pdf_size' => $row->pdf_size ? (int) $row->pdf_size : null,
                'download_url' => ! empty($row->pdf_path) ? url('/mentoria2/mock-catalog/' . $row->id . '/download') : null,
                'is_paid' => (bool) $row->is_paid,
                'price' => $row->price !== null ? (float) $row->price : ($row->product_price !== null ? (float) $row->product_price : null),
                'product_id' => $row->product_id,
                'product_name' => $row->product_name,
                'checkout_slug' => $slug,
                'checkout_url' => ((bool) $row->is_paid && $slug) ? url('/c/' . $slug) : null,
                'created_at' => $row->created_at,
            ];
        })->all();
    }

    public static function forStudent(int $tenantId, int $studentId): array
    {
        $rows = DB::table('mentoria2_mock_catalog as mc')
            ->leftJoin('products as p', 'p.id', '=', 'mc.product_id')
            ->where('mc.tenant_id', $tenantId)
            ->where('mc.is_active', true)
            ->select(
                'mc.*',
                'p.checkout_slug as product_checkout_slug',
                'p.price as product_price'
            )
            ->orderByDesc('mc.created_at')
            ->get();

        $paidProductIds = $rows->where('is_paid', true)->pluck('product_id')->filter()->unique()->values();
        $ownedIds = [];
        if ($paidProductIds->isNotEmpty()) {
            $fromProductUser = DB::table('product_user')
                ->where('user_id', $studentId)
                ->whereIn('product_id', $paidProductIds)
                ->pluck('product_id')
                ->all();

            $fromOrders = DB::table('orders')
                ->where('tenant_id', $tenantId)
                ->where('user_id', $studentId)
                ->whereIn('product_id', $paidProductIds)
                ->whereIn('status', ['paid', 'approved', 'completed'])
                ->pluck('product_id')
                ->all();

            $ownedIds = array_fill_keys(array_unique(array_merge($fromProductUser, $fromOrders)), true);
        }

        return $rows->map(function ($row) use ($tenantId, $ownedIds) {
            $isPaid = (bool) $row->is_paid;
            $hasAccess = ! $isPaid || ($row->product_id && isset($ownedIds[$row->product_id]));
            $slug = $row->product_checkout_slug ?: $row->checkout_slug;

            return [
                'id' => (string) $row->id,
                'contest_id' => $row->contest_id,
                'title' => (string) $row->title,
                'description' => $row->description,
                'board_style' => $row->board_style,
                'questions_count' => $row->questions_count ? (int) $row->questions_count : null,
                'time_minutes' => $row->time_minutes ? (int) $row->time_minutes : null,
                'has_pdf' => ! empty($row->pdf_path),
                'pdf_name' => $row->pdf_name,
                'pdf_size' => $row->pdf_size ? (int) $row->pdf_size : null,
                'is_paid' => $isPaid,
                'price' => $row->price !== null ? (float) $row->price : ($row->product_price !== null ? (float) $row->product_price : null),
                'has_access' => $hasAccess,
                'checkout_slug' => $slug,
                'checkout_url' => ($isPaid && ! $hasAccess && $slug) ? url('/c/' . $slug) : null,
                'download_url' => ($hasAccess && ! empty($row->pdf_path))
                    ? url('/mentoria2-estudos/' . $tenantId . '/mock-catalog/' . $row->id . '/download')
                    : null,
            ];
        })->all();
    }

    private function validatePayload(Request $request, bool $partial = false): array
    {
        $required = $partial ? 'sometimes' : 'required';

        return $request->validate([
            'title' => [$required, 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:2000'],
            'board_style' => ['nullable', 'string', 'max:80'],
            'questions_count' => ['nullable', 'integer', 'min:1', 'max:500'],
            'time_minutes' => ['nullable', 'integer', 'min:1', 'max:720'],
            'contest_id' => ['nullable', 'uuid'],
            'is_paid' => ['nullable'],
            'price' => ['nullable', 'numeric', 'min:0', 'max:100000'],
            'product_id' => ['nullable', 'string', 'max:64'],
            'pdf' => ['nullable', 'file', 'mimes:pdf', 'max:25600'],
        ]);
    }

    private function resolveOrCreateProduct(
        int $tenantId,
        string $title,
        bool $isPaid,
        ?float $price,
        ?string $existingProductId
    ): array {
        if (! $isPaid) {
            return [$existingProductId ?: null, null];
        }

        if (! empty($existingProductId)) {
            $product = Product::query()
                ->where('tenant_id', $tenantId)
                ->where('id', $existingProductId)
                ->first();

            if ($product) {
                if ($price !== null && (float) $product->price !== $price) {
                    $product->update(['price' => $price, 'is_active' => true]);
                }
                return [(string) $product->id, (string) $product->checkout_slug];
            }
        }

        $productName = 'Simulado: ' . Str::limit($title, 120, '');
        $existingByName = Product::query()
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->whereIn('name', [$productName, $title])
            ->first();

        if ($existingByName) {
            if ($price !== null && (float) $existingByName->price !== $price) {
                $existingByName->update(['price' => $price]);
            }
            return [(string) $existingByName->id, (string) $existingByName->checkout_slug];
        }

        $product = Product::create([
            'tenant_id' => $tenantId,
            'name' => $productName,
            'slug' => Str::slug(Str::limit($title, 40, '')) . '-' . Str::lower(Str::random(5)),
            'type' => Product::TYPE_LINK_PAGAMENTO,
            'billing_type' => Product::BILLING_ONE_TIME,
            'description' => 'Acesso ao simulado ' . $title,
            'price' => $price ?? 0,
            'currency' => 'BRL',
            'is_active' => true,
        ]);

        return [(string) $product->id, (string) $product->checkout_slug];
    }

    private function storePdf(Request $request, int $tenantId): array
    {
        if (! $request->hasFile('pdf')) {
            return [];
        }

        $file = $request->file('pdf');
        $storage = new StorageService($tenantId);
        $extension = $file->getClientOriginalExtension() ?: 'pdf';
        $path = $storage->putFileAs(
            'mentoria2/' . $tenantId . '/mock-catalog',
            $file,
            Str::uuid() . '.' . $extension
        );

        return [
            'path' => $path,
            'name' => $file->getClientOriginalName(),
            'size' => $file->getSize(),
        ];
    }

    private function studentHasPurchased(int $tenantId, int $studentId, ?string $productId): bool
    {
        if (! $productId) {
            return false;
        }

        $inProductUser = DB::table('product_user')
            ->where('user_id', $studentId)
            ->where('product_id', $productId)
            ->exists();

        if ($inProductUser) {
            return true;
        }

        return DB::table('orders')
            ->where('tenant_id', $tenantId)
            ->where('user_id', $studentId)
            ->where('product_id', $productId)
            ->whereIn('status', ['paid', 'approved', 'completed'])
            ->exists();
    }

    private function streamPdf(object $row): StreamedResponse
    {
        $storage = new StorageService((int) $row->tenant_id);
        if (! $storage->exists((string) $row->pdf_path)) {
            throw new NotFoundHttpException('Arquivo PDF não encontrado no armazenamento.');
        }

        $stream = $storage->disk()->readStream((string) $row->pdf_path);
        if (! is_resource($stream)) {
            throw new NotFoundHttpException('Não foi possível abrir o arquivo PDF.');
        }

        $downloadName = $row->pdf_name ?: ($row->title . '.pdf');

        return response()->streamDownload(function () use ($stream): void {
            fpassthru($stream);
            fclose($stream);
        }, $downloadName, [
            'Content-Type' => 'application/pdf',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }
}
