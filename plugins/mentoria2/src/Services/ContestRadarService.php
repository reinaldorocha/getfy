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
            return [];
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

}

