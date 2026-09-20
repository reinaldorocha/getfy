<?php

namespace Plugins\Cjc\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\StorageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Cjc\Services\AccessService;
use Plugins\Cjc\Services\AuditService;
use Plugins\Cjc\Services\ContentAudienceService;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class MaterialController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
        private readonly ContentAudienceService $audience,
    ) {}

    public function store(Request $request): JsonResponse
    {
        $this->normalizeTargetsInput($request);
        $data = $this->validateMaterial($request);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);

        $fileMeta = $this->storeUploadedFile($request, $tenantId);
        $id = (string) Str::uuid();

        [$scope, $edictId] = $this->legacyScope($data['targets'] ?? [], $data['scope'] ?? null, $data['edict_id'] ?? null);

        DB::table('cjc_support_materials')->insert([
            'id' => $id,
            'tenant_id' => $tenantId,
            'title' => trim($data['title']),
            'description' => $data['description'] ?? null,
            'type' => $data['type'],
            'url' => $data['url'] ?? null,
            'text' => $data['text'] ?? null,
            'scope' => $scope,
            'edict_id' => $edictId,
            'folder' => trim((string) ($data['folder'] ?? '')),
            'file_name' => $fileMeta['file_name'] ?? null,
            'file_path' => $fileMeta['file_path'] ?? null,
            'file_mime' => $fileMeta['file_mime'] ?? null,
            'created_by' => $actor->id,
            'is_active' => true,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $targets = $this->materialTargets($data);
        $this->audience->replaceTargets($tenantId, 'material', $id, $targets);

        $this->audit->record($tenantId, $actor, 'material.created', 'support_material', $id, null, [
            'title' => $data['title'],
            'type' => $data['type'],
            'targets' => $targets,
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function update(Request $request, string $material): JsonResponse
    {
        $this->normalizeTargetsInput($request);
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $current = $this->requireMaterial($tenantId, $material);

        $data = $request->validate([
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'description' => ['sometimes', 'nullable', 'string'],
            'type' => ['sometimes', 'in:arquivo,youtube,texto,link'],
            'url' => ['sometimes', 'nullable', 'string', 'max:2048'],
            'text' => ['sometimes', 'nullable', 'string'],
            'folder' => ['sometimes', 'nullable', 'string', 'max:255'],
            'scope' => ['sometimes', 'in:global,edital'],
            'edict_id' => ['sometimes', 'nullable', 'uuid'],
            'targets' => ['sometimes', 'array'],
            'file' => ['sometimes', 'nullable', 'file', 'max:20480', 'mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,txt,jpg,jpeg,png,zip'],
        ]);

        if (! empty($data['edict_id'])) {
            $this->requireTenantRow('cjc_edicts', $tenantId, $data['edict_id']);
        }

        $update = [];
        foreach (['title', 'description', 'type', 'url', 'text', 'folder'] as $field) {
            if (array_key_exists($field, $data)) {
                $update[$field] = $field === 'title' ? trim((string) $data[$field]) : $data[$field];
            }
        }

        if (array_key_exists('targets', $data) || array_key_exists('scope', $data) || array_key_exists('edict_id', $data)) {
            $targets = array_key_exists('targets', $data)
                ? $data['targets']
                : $this->materialTargets([
                    'scope' => $data['scope'] ?? $current->scope,
                    'edict_id' => $data['edict_id'] ?? $current->edict_id,
                ]);

            [$scope, $edictId] = $this->legacyScope($targets, $data['scope'] ?? $current->scope, $data['edict_id'] ?? $current->edict_id);
            $update['scope'] = $scope;
            $update['edict_id'] = $edictId;
            $this->audience->replaceTargets($tenantId, 'material', $material, $targets);
        }

        $newFile = null;
        if ($request->hasFile('file')) {
            $newFile = $this->storeUploadedFile($request, $tenantId);
            $update = array_merge($update, $newFile);
        }

        if (($data['type'] ?? $current->type) !== 'arquivo' && ! $request->hasFile('file')) {
            $update['file_name'] = null;
            $update['file_path'] = null;
            $update['file_mime'] = null;
        }

        $update['updated_at'] = now();
        DB::table('cjc_support_materials')->where('tenant_id', $tenantId)->where('id', $material)->update($update);

        if (($newFile !== null || (($data['type'] ?? $current->type) !== 'arquivo')) && $current->file_path) {
            $storage = new StorageService($tenantId);
            $storage->delete((string) $current->file_path);
        }

        $this->audit->record($tenantId, $actor, 'material.updated', 'support_material', $material);

        return response()->json(['ok' => true]);
    }

    public function destroy(Request $request, string $material): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $row = $this->requireMaterial($tenantId, $material);

        DB::transaction(function () use ($tenantId, $material): void {
            DB::table('cjc_support_materials')
                ->where('tenant_id', $tenantId)
                ->where('id', $material)
                ->update(['is_active' => false, 'updated_at' => now()]);
            DB::table('cjc_content_targets')
                ->where('tenant_id', $tenantId)
                ->where('content_type', 'material')
                ->where('content_id', $material)
                ->delete();
        });

        if ($row->file_path) {
            (new StorageService($tenantId))->delete((string) $row->file_path);
        }

        $this->audit->record($tenantId, $actor, 'material.disabled', 'support_material', $material);

        return response()->json(['ok' => true]);
    }

    public function downloadAdmin(Request $request, string $material): StreamedResponse
    {
        $tenantId = $this->access->tenantId($request->user());
        $row = $this->requireMaterial($tenantId, $material, true);

        return $this->download($tenantId, $row);
    }

    public function downloadStudent(Request $request, int $tenant, string $material): StreamedResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'materiais');
        $row = $this->requireMaterial($tenant, $material, true);

        if (! $this->audience->canStudentAccess($student, $tenant, 'material', $material)) {
            throw new NotFoundHttpException('Material não disponível para este aluno.');
        }

        return $this->download($tenant, $row);
    }

    public function updateStudentProgress(Request $request, int $tenant, string $material): JsonResponse
    {
        $student = $request->user();
        $this->access->assertCapability($student, $tenant, 'materiais');
        $this->requireMaterial($tenant, $material, true);

        if (! $this->audience->canStudentAccess($student, $tenant, 'material', $material)) {
            throw new NotFoundHttpException('Material não disponível para este aluno.');
        }

        $data = $request->validate(['completed' => ['required', 'boolean']]);
        $existing = DB::table('cjc_material_progress')
            ->where('tenant_id', $tenant)
            ->where('student_id', $student->id)
            ->where('material_id', $material)
            ->first();

        $payload = [
            'completed' => (bool) $data['completed'],
            'completed_at' => $data['completed'] ? now() : null,
            'updated_at' => now(),
        ];

        if ($existing) {
            DB::table('cjc_material_progress')->where('id', $existing->id)->update($payload);
            $id = $existing->id;
        } else {
            $id = (string) Str::uuid();
            DB::table('cjc_material_progress')->insert($payload + [
                'id' => $id,
                'tenant_id' => $tenant,
                'student_id' => $student->id,
                'material_id' => $material,
                'created_at' => now(),
            ]);
        }

        return response()->json(['ok' => true, 'id' => $id]);
    }

    private function validateMaterial(Request $request): array
    {
        $data = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'type' => ['required', 'in:arquivo,youtube,texto,link'],
            'url' => ['nullable', 'string', 'max:2048'],
            'text' => ['nullable', 'string'],
            'folder' => ['nullable', 'string', 'max:255'],
            'scope' => ['nullable', 'in:global,edital'],
            'edict_id' => ['nullable', 'uuid'],
            'targets' => ['nullable', 'array'],
            'file' => ['nullable', 'file', 'max:20480', 'mimes:pdf,doc,docx,xls,xlsx,ppt,pptx,txt,jpg,jpeg,png,zip'],
        ]);

        if ($data['type'] === 'arquivo' && ! $request->hasFile('file')) {
            return abort(422, 'Arquivo obrigatório para material do tipo arquivo.');
        }
        if (in_array($data['type'], ['youtube', 'link'], true) && empty($data['url'])) {
            return abort(422, 'URL obrigatória para este tipo de material.');
        }
        if ($data['type'] === 'texto' && trim((string) ($data['text'] ?? '')) === '') {
            return abort(422, 'Texto obrigatório para material do tipo texto.');
        }

        if (! empty($data['edict_id'])) {
            $tenantId = $this->access->tenantId($request->user());
            $this->requireTenantRow('cjc_edicts', $tenantId, $data['edict_id']);
        }

        return $data;
    }

    private function normalizeTargetsInput(Request $request): void
    {
        $raw = $request->input('targets');
        if (! is_string($raw)) {
            return;
        }

        $decoded = json_decode($raw, true);
        if (is_array($decoded)) {
            $request->merge(['targets' => $decoded]);
        }
    }

    private function storeUploadedFile(Request $request, int $tenantId): array
    {
        if (! $request->hasFile('file')) {
            return [];
        }

        $file = $request->file('file');
        $storage = new StorageService($tenantId);
        $safeName = (string) Str::uuid().'-'.preg_replace('/[^A-Za-z0-9._-]+/', '-', $file->getClientOriginalName());
        $path = $storage->putFileAs('cjc/'.$tenantId.'/materials', $file, $safeName);

        return [
            'file_name' => $file->getClientOriginalName(),
            'file_path' => $path,
            'file_mime' => $file->getMimeType() ?: $file->getClientMimeType(),
        ];
    }

    private function download(int $tenantId, object $row): StreamedResponse
    {
        if (! $row->file_path) {
            throw new NotFoundHttpException('Este material não possui arquivo.');
        }

        $storage = new StorageService($tenantId);
        if (! $storage->exists((string) $row->file_path)) {
            throw new NotFoundHttpException('Arquivo do material não encontrado.');
        }

        $stream = $storage->disk()->readStream((string) $row->file_path);
        if (! is_resource($stream)) {
            throw new NotFoundHttpException('Não foi possível abrir o arquivo do material.');
        }

        $name = $row->file_name ?: basename((string) $row->file_path);
        $mime = $row->file_mime ?: 'application/octet-stream';

        return response()->streamDownload(function () use ($stream): void {
            fpassthru($stream);
            fclose($stream);
        }, $name, [
            'Content-Type' => $mime,
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }

    private function materialTargets(array $data): array
    {
        if (is_array($data['targets'] ?? null)) {
            return $data['targets'];
        }

        if (($data['scope'] ?? null) === 'edital' && ! empty($data['edict_id'])) {
            return [['type' => 'edict', 'id' => $data['edict_id']]];
        }

        return [['type' => 'global', 'id' => null]];
    }

    private function legacyScope(array $targets, ?string $scope, ?string $edictId): array
    {
        foreach ($targets as $target) {
            $type = $target['type'] ?? $target['target_type'] ?? null;
            $id = $target['id'] ?? $target['target_id'] ?? null;
            if ($type === 'edict' && $id) {
                return ['edital', (string) $id];
            }
        }

        if ($scope === 'edital' && $edictId) {
            return ['edital', $edictId];
        }

        return ['global', null];
    }

    private function requireMaterial(int $tenantId, string $materialId, bool $activeOnly = false): object
    {
        $query = DB::table('cjc_support_materials')
            ->where('tenant_id', $tenantId)
            ->where('id', $materialId);

        if ($activeOnly) {
            $query->where('is_active', true);
        }

        $row = $query->first();
        if (! $row) {
            throw new NotFoundHttpException('Material não encontrado.');
        }

        return $row;
    }

    private function requireTenantRow(string $table, int $tenantId, string $id): object
    {
        $row = DB::table($table)->where('tenant_id', $tenantId)->where('id', $id)->first();
        if (! $row) {
            throw new NotFoundHttpException('Referência CJC não encontrada neste tenant.');
        }

        return $row;
    }
}
