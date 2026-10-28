<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ContestRadarService
{
    public function listContests(
        ?string $sphere = null,
        ?string $status = null,
        ?string $search = null,
        ?int $limit = 30
    ): array {
        $query = DB::table('mentoria2_radar_contests')
            ->where('is_active', true);

        if ($sphere) {
            $query->where('sphere', $sphere);
        }

        if ($status) {
            $query->where('status', $status);
        }

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('organization', 'like', "%{$search}%")
                  ->orWhere('role', 'like', "%{$search}%")
                  ->orWhere('board', 'like', "%{$search}%");
            });
        }

        $results = $query->orderByDesc('is_featured')
            ->orderByDesc('created_at')
            ->limit($limit)
            ->get();

        if ($results->isEmpty()) {
            return $this->seedDefaultRadarFeed();
        }

        return $results->map(function ($row) {
            return [
                'id' => $row->id,
                'title' => $row->title,
                'organization' => $row->organization,
                'board' => $row->board,
                'role' => $row->role,
                'salary' => $row->salary ? (float) $row->salary : null,
                'vacancies' => $row->vacancies ? (int) $row->vacancies : null,
                'sphere' => $row->sphere,
                'state' => $row->state,
                'status' => $row->status,
                'gazette_extract' => $row->gazette_extract,
                'gazette_url' => $row->gazette_url,
                'edital_url' => $row->edital_url,
                'registration_end' => $row->registration_end,
                'exam_date' => $row->exam_date,
                'is_featured' => (bool) $row->is_featured,
            ];
        })->toArray();
    }

    public function seedDefaultRadarFeed(): array
    {
        $defaults = [
            [
                'id' => (string) Str::uuid(),
                'title' => 'Polícia Rodoviária Federal - Policial Rodoviário',
                'organization' => 'PRF',
                'board' => 'Cebraspe',
                'role' => 'Policial Rodoviário Federal',
                'salary' => 11200.00,
                'vacancies' => 1500,
                'sphere' => 'federal',
                'state' => 'BR',
                'status' => 'previsto',
                'gazette_extract' => 'Portaria autorizativa prevista para publicação no DOU até o fim do semestre.',
                'is_featured' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'title' => 'Tribunal de Justiça - Analista e Técnico Judiciário',
                'organization' => 'TJ',
                'board' => 'FGV',
                'role' => 'Analista / Técnico Judiciário',
                'salary' => 9850.00,
                'vacancies' => 240,
                'sphere' => 'estadual',
                'state' => 'SP',
                'status' => 'edital_aberto',
                'gazette_extract' => 'Edital 01/2026 publicado no Diário da Justiça. Inscrições abertas até o próximo mês.',
                'is_featured' => true,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'id' => (string) Str::uuid(),
                'title' => 'Receita Federal do Brasil - Auditor Fiscal',
                'organization' => 'RFB',
                'board' => 'FGV',
                'role' => 'Auditor-Fiscal da Receita Federal',
                'salary' => 22921.71,
                'vacancies' => 450,
                'sphere' => 'federal',
                'state' => 'BR',
                'status' => 'comissao_formada',
                'gazette_extract' => 'Comissão instituída em Diário Oficial da União. Processo de escolha da banca em andamento.',
                'is_featured' => false,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        DB::table('mentoria2_radar_contests')->insert($defaults);

        return $defaults;
    }
}

