<?php

namespace Plugins\Mentoria\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria\Services\AccessService;
use Plugins\Mentoria\Services\AuditService;
use Plugins\Mentoria\Services\LearningWorkspaceService;
use Plugins\Mentoria\Services\ReviewScheduleService;
use Plugins\Mentoria\Services\ScheduleEngineService;
use Symfony\Component\HttpFoundation\Response;

class LearningController extends Controller
{
    public function __construct(private readonly AccessService $access, private readonly LearningWorkspaceService $workspace) {}

    private function context(Request $request, int $tenant, ?string $contest = null): array
    {
        $student = $request->user();
        $this->access->assertStudentAccess($student, $tenant);
        $contest ??= (string) $request->input('contest_id', $request->query('contest_id', ''));
        abort_unless(Str::isUuid($contest), 422, 'Selecione um concurso.');
        $this->workspace->assertContest($tenant, (int) $student->id, $contest);

        return [$student, $contest];
    }

    public function profile(Request $request, int $tenant)
    {
        [$student, $contest] = $this->context($request, $tenant);
        $data = $request->validate([
            'timezone' => ['required', 'timezone'], 'diagnostic' => ['required', 'array:hours,level,difficulties,goal'],
            'diagnostic.hours' => ['required', 'array:dom,seg,ter,qua,qui,sex,sab'],
            'diagnostic.hours.*' => ['numeric', 'min:0', 'max:12'],
            'diagnostic.level' => ['required', 'in:iniciante,intermediario,avancado'],
            'diagnostic.difficulties' => ['nullable', 'string', 'max:3000'],
            'diagnostic.goal' => ['required', 'integer', 'min:1', 'max:100'],
        ]);
        $id = DB::transaction(function () use ($tenant, $student, $contest, $data) {
            DB::table('users')->where('id', $student->id)->lockForUpdate()->first();
            $existing = DB::table('mentoria_learning_profiles')->where('tenant_id', $tenant)
                ->where('student_id', $student->id)->where('contest_id', $contest)->first();
            $id = $existing?->id ?: (string) Str::uuid();
            DB::table('mentoria_learning_profiles')->updateOrInsert(['id' => $id], [
                'tenant_id' => $tenant, 'student_id' => $student->id, 'contest_id' => $contest,
                'timezone' => $data['timezone'], 'diagnostic' => json_encode($data['diagnostic']),
                'revision' => ($existing?->revision ?? 0) + 1, 'created_at' => $existing?->created_at ?? now(), 'updated_at' => now(),
            ]);

            return $id;
        });

        return response()->json(['ok' => true, 'id' => $id]);
    }

    public function note(Request $request, int $tenant)
    {
        [$student, $contest] = $this->context($request, $tenant);
        $data = $request->validate(['message' => ['required', 'string', 'max:4000']]);
        $actor = $request->attributes->get('mentoria.workspace_actor') ?? $student;
        $id = (string) Str::uuid();
        DB::table('mentoria_mentor_notes')->insert([
            'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id, 'contest_id' => $contest,
            'actor_id' => $actor->id, 'kind' => $actor->id === $student->id ? 'adjustment' : 'guidance',
            'message' => $data['message'], 'status' => 'open', 'created_at' => now(), 'updated_at' => now(),
        ]);

        return response()->json(['ok' => true, 'id' => $id], 201);
    }

    public function resolve(Request $request, int $tenant, string $note)
    {
        [$student, $contest] = $this->context($request, $tenant);
        $this->assertMentor($request);
        $data = $request->validate(['resolution' => ['required', 'string', 'max:4000']]);
        $count = DB::table('mentoria_mentor_notes')->where('id', $note)->where('tenant_id', $tenant)
            ->where('student_id', $student->id)->where('contest_id', $contest)->where('kind', 'adjustment')
            ->update(['status' => 'resolved', 'resolution' => $data['resolution'], 'resolved_at' => now(), 'updated_at' => now()]);
        abort_unless($count, 404);

        return response()->json(['ok' => true]);
    }

    public function preview(Request $request, int $tenant)
    {
        [$student, $contest] = $this->context($request, $tenant);
        abort_unless($this->access->hasCapability($student, $tenant, 'cronograma') || $this->access->hasCapability($student, $tenant, 'cronograma_inteligente'), 403, 'Seu produto não inclui planejamento.');
        $this->assertMentor($request);
        $data = $request->validate([
            'configuration' => ['required', 'array'], 'configuration.horas' => ['required', 'array:dom,seg,ter,qua,qui,sex,sab'],
            'configuration.horas.*' => ['numeric', 'min:0', 'max:12'],
            'configuration.minutosTopico' => ['required', 'integer', 'min:5', 'max:180'],
            'configuration.repeticoesEdital' => ['nullable', 'integer', 'min:1', 'max:5'],
            'configuration.maxTopicosDia' => ['nullable', 'integer', 'min:0', 'max:24'],
            'configuration.tipo' => ['required', 'in:agendado,ciclo_inteligente'],
            'configuration.materiaAfinidade' => ['nullable', 'array'],
            'configuration.materiaAfinidade.*' => ['numeric', 'min:0', 'max:100'],
            'configuration.materiasSelecionadas' => ['nullable', 'array'],
            'configuration.materiasSelecionadas.*' => ['boolean'],
            'configuration.materiaPrioridades' => ['nullable', 'array'],
            'configuration.materiaPrioridades.*' => ['in:alta,media,baixa'],
        ]);
        $profile = DB::table('mentoria_learning_profiles')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('contest_id', $contest)->first();
        $diagnostic = json_decode($profile?->diagnostic ?? '{}', true) ?: [];
        if (isset($diagnostic['hours'])) {
            foreach ($data['configuration']['horas'] as $day => $hours) {
                abort_if((float) $hours > (float) ($diagnostic['hours'][$day] ?? 0), 422, 'A carga excede a disponibilidade informada. Atualize o diagnóstico com o aluno antes de publicar.');
            }
        }
        $data['configuration']['timezone'] = $profile?->timezone ?: config('app.timezone');
        $data['configuration']['diagnostic_revision'] = $profile?->revision;
        $data['configuration']['metaAcertos'] = $diagnostic['goal'] ?? 80;
        $data['configuration']['nivelAtual'] = $diagnostic['level'] ?? null;
        try {
            $items = app(ScheduleEngineService::class)->generate($student, $tenant, $contest, $data['configuration']);
        } catch (\RuntimeException $e) {
            abort(422, $e->getMessage());
        }
        // Server-owned preview. Publishing never trusts a client-supplied item list.
        $key = (string) Str::uuid();
        $actor = $request->attributes->get('mentoria.workspace_actor');
        $request->session()->put('mentoria.preview.'.$key, [
            'tenant' => $tenant, 'student' => $student->id, 'contest' => $contest, 'actor' => $actor->id,
            'configuration' => $data['configuration'], 'items' => $items, 'expires' => now()->addMinutes(15)->timestamp,
            'base_schedule' => $this->currentScheduleId($tenant, $student->id, $contest),
            'fingerprint' => $this->fingerprint($tenant, $student->id, $contest),
        ]);

        return response()->json(['token' => $key, 'items' => $items, 'minutes' => array_sum(array_column($items, 'duration_minutes')),
            'algorithm' => 'guided-v1', 'warning' => 'A prévia reserva as revisões já registradas. Novas revisões podem exigir ajuste do plano.']);
    }

    public function reprogramPreview(Request $request, int $tenant)
    {
        [$student, $contest] = $this->context($request, $tenant);
        $this->assertMentor($request);
        $id = $this->currentScheduleId($tenant, $student->id, $contest);
        abort_unless($id, 404, 'Nenhum plano ativo.');
        $schedule = DB::table('mentoria_schedules')->where('id', $id)->first();
        $data = $request->validate(['from_date' => ['nullable', 'date']]);
        try {
            $updates = app(ScheduleEngineService::class)->reprogram($tenant, $student->id, $id, $data['from_date'] ?? null, true);
        } catch (\RuntimeException $e) {
            abort(422, $e->getMessage());
        }
        $updates = collect($updates)->keyBy('id');
        $rows = DB::table('mentoria_schedule_items')->where('tenant_id', $tenant)->where('schedule_id', $id)
            ->whereNull('scheduled_review_id')->orderBy('position')->get();
        $items = $rows->map(function ($row) use ($updates) {
            $item = array_intersect_key((array) $row, array_flip(['planned_date', 'cycle_position', 'subject_id', 'topic_id', 'subtopic_id', 'duration_minutes', 'priority', 'position', 'status', 'completed_at']));
            if ($updates->has($row->id)) {
                $item['planned_date'] = $updates[$row->id]['planned_date'];
                $item['position'] = $updates[$row->id]['position'];
            }

            return $item;
        })->all();
        $config = json_decode($schedule->configuration ?? '{}', true) ?: [];
        $config['tipo'] = $schedule->type;
        $key = (string) Str::uuid();
        $actor = $request->attributes->get('mentoria.workspace_actor');
        $request->session()->put('mentoria.preview.'.$key, [
            'tenant' => $tenant, 'student' => $student->id, 'contest' => $contest, 'actor' => $actor->id,
            'configuration' => $config, 'items' => $items, 'expires' => now()->addMinutes(15)->timestamp,
            'base_schedule' => $id, 'fingerprint' => $this->fingerprint($tenant, $student->id, $contest),
        ]);

        return response()->json(['token' => $key, 'items' => $items, 'minutes' => array_sum(array_column($items, 'duration_minutes')),
            'warning' => 'Concluídos e ignorados são preservados. Apenas pendências de estudo recebem novas datas. Revisões mantêm suas reservas.']);
    }

    public function publish(Request $request, int $tenant)
    {
        [$student, $contest] = $this->context($request, $tenant);
        abort_unless($this->access->hasCapability($student, $tenant, 'cronograma') || $this->access->hasCapability($student, $tenant, 'cronograma_inteligente'), 403, 'Seu produto não inclui planejamento.');
        $this->assertMentor($request);
        $data = $request->validate(['token' => ['required', 'uuid'], 'reason' => ['required', 'string', 'max:2000']]);
        $preview = $request->session()->get('mentoria.preview.'.$data['token']);
        $actor = $request->attributes->get('mentoria.workspace_actor');
        abort_unless($preview && $preview['tenant'] === $tenant && (int) $preview['student'] === (int) $student->id
            && $preview['contest'] === $contest && (int) $preview['actor'] === (int) $actor->id && $preview['expires'] >= time(), 409, 'Prévia expirada. Gere novamente.');
        $id = DB::transaction(function () use ($tenant, $student, $contest, $actor, $preview, $data) {
            DB::table('users')->where('id', $student->id)->lockForUpdate()->first();
            abort_unless($this->currentScheduleId($tenant, $student->id, $contest) === $preview['base_schedule'], 409, 'O plano foi alterado. Gere uma nova prévia.');
            abort_unless($preview['fingerprint'] === $this->fingerprint($tenant, $student->id, $contest), 409, 'Houve novos registros desde a prévia. Revise o plano novamente.');
            $schedules = DB::table('mentoria_schedules')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('contest_id', $contest);
            $version = (int) (clone $schedules)->max('version') + 1;
            $schedules->where('is_active', true)->update(['is_active' => false, 'state' => 'substituido', 'updated_at' => now()]);
            $id = (string) Str::uuid();
            DB::table('mentoria_schedules')->insert([
                'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id, 'contest_id' => $contest,
                'created_by' => $actor->id, 'version' => $version, 'type' => $preview['configuration']['tipo'],
                'state' => 'ativo', 'is_active' => true, 'configuration' => json_encode($preview['configuration']),
                'algorithm_version' => 'guided-v1', 'change_reason' => $data['reason'], 'published_at' => now(),
                'created_at' => now(), 'updated_at' => now(),
            ]);
            foreach ($preview['items'] as $item) {
                DB::table('mentoria_schedule_items')->insert($item + ['id' => (string) Str::uuid(), 'tenant_id' => $tenant,
                    'schedule_id' => $id, 'created_at' => now(), 'updated_at' => now()]);
            }
            app(ReviewScheduleService::class)->syncForContest($tenant, $student->id, $contest);
            app(AuditService::class)->record($tenant, $actor, 'plan.published', 'schedule', $id, $student->id, ['reason' => $data['reason']]);

            return $id;
        });
        $request->session()->forget('mentoria.preview.'.$data['token']);

        return response()->json(['ok' => true, 'id' => $id]);
    }

    public function execute(Request $request, int $tenant, string $item)
    {
        [$student, $contest] = $this->context($request, $tenant);
        abort_unless($this->access->hasCapability($student, $tenant, 'cronograma') || $this->access->hasCapability($student, $tenant, 'cronograma_inteligente'), 403, 'Seu produto não inclui planejamento.');
        $data = $request->validate(['request_id' => ['required', 'uuid'], 'minutes' => ['required', 'integer', 'min:1', 'max:720'],
            'notes' => ['nullable', 'string', 'max:4000'], 'solved' => ['required', 'integer', 'min:0', 'max:1000'],
            'correct' => ['required', 'integer', 'min:0', 'lte:solved']]);
        $hash = hash('sha256', json_encode([$item, $contest, $data['minutes'], $data['notes'] ?? null, $data['solved'], $data['correct']]));
        $id = DB::transaction(function () use ($tenant, $student, $contest, $item, $data, $hash) {
            DB::table('users')->where('id', $student->id)->lockForUpdate()->first();
            $receipt = DB::table('mentoria_execution_receipts')->where('tenant_id', $tenant)->where('student_id', $student->id)->where('request_id', $data['request_id'])->first();
            if ($receipt) {
                abort_unless($receipt->payload_hash === $hash, 409, 'Identificador de execução já utilizado com outro conteúdo.');

                return $receipt->session_id;
            }
            $row = DB::table('mentoria_schedule_items as i')->join('mentoria_schedules as s', 's.id', '=', 'i.schedule_id')
                ->where('i.id', $item)->where('i.tenant_id', $tenant)->where('s.student_id', $student->id)
                ->where('s.contest_id', $contest)->where('s.is_active', true)->where('s.state', 'ativo')->select('i.*')->first();
            abort_unless($row, 404);
            abort_unless($row->status === 'pendente', 409, 'Esta atividade já foi registrada.');
            $id = (string) Str::uuid();
            DB::table('mentoria_study_sessions')->insert([
                'id' => $id, 'tenant_id' => $tenant, 'student_id' => $student->id, 'contest_id' => $contest,
                'subject_id' => $row->subject_id, 'topic_id' => $row->topic_id, 'subtopic_id' => $row->subtopic_id,
                'schedule_item_id' => $item, 'seconds' => $data['minutes'] * 60, 'mode' => $row->scheduled_review_id ? 'revisao' : 'estudo',
                'notes' => $data['notes'] ?? null, 'origin' => request()->attributes->get('mentoria.workspace_actor') ? 'mentor_reported' : 'self_reported',
                'is_active' => true, 'studied_at' => now(), 'created_at' => now(), 'updated_at' => now(),
            ]);
            if ($data['solved']) {
                DB::table('mentoria_question_logs')->insert([
                    'id' => (string) Str::uuid(), 'tenant_id' => $tenant, 'student_id' => $student->id, 'contest_id' => $contest,
                    'subject_id' => $row->subject_id, 'topic_id' => $row->topic_id, 'subtopic_id' => $row->subtopic_id,
                    'solved' => $data['solved'], 'correct' => $data['correct'], 'wrong' => $data['solved'] - $data['correct'],
                    'origin' => 'self_reported', 'is_active' => true, 'recorded_at' => now(), 'created_at' => now(), 'updated_at' => now(),
                ]);
            }
            DB::table('mentoria_schedule_items')->where('id', $item)->update(['status' => 'concluido', 'completed_at' => now(), 'updated_at' => now()]);
            if ($row->scheduled_review_id) {
                DB::table('mentoria_scheduled_reviews')->where('id', $row->scheduled_review_id)->where('tenant_id', $tenant)
                    ->where('student_id', $student->id)->update(['completed' => true, 'completed_at' => now(), 'updated_at' => now()]);
            }
            DB::table('mentoria_execution_receipts')->insert([
                'id' => (string) Str::uuid(), 'tenant_id' => $tenant, 'student_id' => $student->id,
                'schedule_item_id' => $item, 'request_id' => $data['request_id'], 'payload_hash' => $hash, 'session_id' => $id,
                'created_at' => now(), 'updated_at' => now(),
            ]);

            return $id;
        });

        return response()->json(['ok' => true, 'id' => $id]);
    }

    public function calendar(Request $request, int $tenant): Response
    {
        [$student, $contest] = $this->context($request, $tenant);
        abort_unless($this->access->hasCapability($student, $tenant, 'cronograma') || $this->access->hasCapability($student, $tenant, 'cronograma_inteligente'), 403, 'Seu produto não inclui planejamento.');
        $id = $this->currentScheduleId($tenant, $student->id, $contest);
        $rows = DB::table('mentoria_schedule_items as i')->leftJoin('mentoria_subjects as s', 's.id', '=', 'i.subject_id')
            ->where('i.tenant_id', $tenant)->where('i.schedule_id', $id)->whereNotNull('i.planned_date')->select('i.*', 's.name as subject_name')->get();
        $escape = static fn ($s) => str_replace(['\\', "\r", "\n", ';', ','], ['\\\\', '', '\\n', '\\;', '\\,'], (string) $s);
        $lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Getfy//Mentoria//PT-BR', 'CALSCALE:GREGORIAN'];
        foreach ($rows as $row) {
            $lines = array_merge($lines, ['BEGIN:VEVENT', 'UID:'.$row->id.'@mentoria.getfy', 'DTSTAMP:'.now('UTC')->format('Ymd\THis\Z'),
                'DTSTART;VALUE=DATE:'.str_replace('-', '', $row->planned_date),
                'DTEND;VALUE=DATE:'.\Carbon\Carbon::parse($row->planned_date)->addDay()->format('Ymd'),
                'SUMMARY:'.$escape(($row->scheduled_review_id ? 'Revisão: ' : 'Estudo: ').($row->subject_name ?: 'Atividade')),
                'DESCRIPTION:'.$escape($row->duration_minutes.' minutos previstos. Consulte o plano no Getfy.'), 'END:VEVENT']);
        }
        $lines[] = 'END:VCALENDAR';
        // RFC 5545: fold at 75 octets without splitting UTF-8 characters.
        $folded = [];
        foreach ($lines as $line) {
            $first = true;
            while (strlen($line) > ($first ? 75 : 74)) {
                $part = mb_strcut($line, 0, $first ? 75 : 74, 'UTF-8');
                $folded[] = ($first ? '' : ' ').$part;
                $line = substr($line, strlen($part));
                $first = false;
            }
            $folded[] = ($first ? '' : ' ').$line;
        }

        return response(implode("\r\n", $folded)."\r\n", 200, ['Content-Type' => 'text/calendar; charset=utf-8', 'Content-Disposition' => 'attachment; filename="mentoria.ics"', 'Cache-Control' => 'private, no-store']);
    }

    private function assertMentor(Request $request): void
    {
        abort_unless($request->attributes->get('mentoria.workspace_actor'), 403, 'O plano é publicado pelo mentor.');
    }

    private function fingerprint(int $tenant, int $student, string $contest): string
    {
        $id = $this->currentScheduleId($tenant, $student, $contest);
        $items = DB::table('mentoria_schedule_items')->where('tenant_id', $tenant)->where('schedule_id', $id)->orderBy('id')->get();
        $reviews = DB::table('mentoria_scheduled_reviews')->where('tenant_id', $tenant)->where('student_id', $student)
            ->where('contest_id', $contest)->orderBy('id')->get();
        $profile = DB::table('mentoria_learning_profiles')->where('tenant_id', $tenant)->where('student_id', $student)->where('contest_id', $contest)->value('revision');

        return hash('sha256', json_encode([$id, $items, $reviews, $profile]));
    }

    private function currentScheduleId(int $tenant, int $student, string $contest): ?string
    {
        return DB::table('mentoria_schedules')->where('tenant_id', $tenant)->where('student_id', $student)
            ->where('contest_id', $contest)->where('is_active', true)->latest('version')->value('id');
    }
}
