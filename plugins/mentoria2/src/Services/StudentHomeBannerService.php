<?php

namespace Plugins\Mentoria2\Services;

use App\Services\StorageService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class StudentHomeBannerService
{
    /** @return array{url: string, name: string}|null */
    public function forTenant(int $tenantId): ?array
    {
        if (! Schema::hasTable('mentoria2_tenant_settings')) {
            return null;
        }

        $row = DB::table('mentoria2_tenant_settings')
            ->where('tenant_id', $tenantId)
            ->first(['student_home_banner_path', 'student_home_banner_name']);

        if (! $row?->student_home_banner_path) {
            return null;
        }

        $storage = new StorageService($tenantId);
        if (! $storage->exists((string) $row->student_home_banner_path)) {
            return null;
        }

        return [
            'url' => $storage->url((string) $row->student_home_banner_path),
            'name' => (string) ($row->student_home_banner_name ?: 'Capa da ?rea do aluno'),
        ];
    }

    /** @return array{url: string, name: string} */
    public function replace(int $tenantId, UploadedFile $file): array
    {
        $previousPath = Schema::hasTable('mentoria2_tenant_settings')
            ? DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('student_home_banner_path')
            : null;

        $storage = new StorageService($tenantId);
        $extension = strtolower($file->getClientOriginalExtension() ?: 'jpg');
        $path = $storage->putFileAs(
            'mentoria2/'.$tenantId.'/student-home-banners',
            $file,
            (string) Str::uuid().'.'.$extension,
        );

        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            [
                'student_home_banner_path' => $path,
                'student_home_banner_name' => $file->getClientOriginalName(),
                'updated_at' => now(),
                'created_at' => now(),
            ],
        );

        if ($previousPath && $previousPath !== $path) {
            $storage->delete((string) $previousPath);
        }

        return ['url' => $storage->url($path), 'name' => $file->getClientOriginalName()];
    }

    public function remove(int $tenantId): void
    {
        if (! Schema::hasTable('mentoria2_tenant_settings')) {
            return;
        }

        $path = DB::table('mentoria2_tenant_settings')->where('tenant_id', $tenantId)->value('student_home_banner_path');
        DB::table('mentoria2_tenant_settings')->updateOrInsert(
            ['tenant_id' => $tenantId],
            ['student_home_banner_path' => null, 'student_home_banner_name' => null, 'updated_at' => now(), 'created_at' => now()],
        );

        if ($path) {
            (new StorageService($tenantId))->delete((string) $path);
        }
    }
}
