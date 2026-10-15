<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Plugins\Mentoria\Services\LearningRewardsService;
use Plugins\Mentoria\Services\LearningWorkspaceService;
use Plugins\Mentoria\Services\ScheduleEngineService;
use Tests\TestCase;

class MentoriaGuidedLearningTest extends TestCase
{
    private User $mentor;

    private User $student;

    private string $contest;

    private string $subject;

    private string $topic;

    private string $schedule;

    private string $item;

    protected function setUp(): void
    {
        parent::setUp();
        Http::fake();
        $this->withoutMiddleware(\App\Http\Middleware\EnsureInstalled::class);
        config(['app.key' => 'base64:'.base64_encode(str_repeat('a', 32))]);
        $loader = require base_path('vendor/autoload.php');
        $loader->addPsr4('Plugins\\Mentoria\\', base_path('plugins/mentoria/src'));
        if (! Schema::hasTable('mentoria_learning_profiles')) {
            foreach (glob(base_path('plugins/mentoria/migrations/*.php')) as $file) {
                (require $file)->up();
            }
        }
        Route::middleware(['web', 'auth', 'role:aluno'])->prefix('mentoria-estudos')->group(base_path('plugins/mentoria/routes-student.php'));
        Route::middleware(['web', 'auth', 'role:admin|infoprodutor'])->prefix('mentoria')->group(base_path('plugins/mentoria/routes.php'));
        $this->mentor = User::factory()->create(['role' => 'infoprodutor', 'tenant_id' => 7]);
        $this->student = User::factory()->create(['role' => 'aluno', 'tenant_id' => 7]);
        $product = $this->createTestProduct(['tenant_id' => 7]);
        DB::table('mentoria_products')->insert(['product_id' => $product->id, 'tenant_id' => 7, 'is_active' => true,
            'capabilities' => json_encode(['dashboard', 'cronograma', 'cronograma_inteligente', 'questoes', 'edital']), 'created_at' => now(), 'updated_at' => now()]);
        $this->student->products()->attach($product->id);
        $this->contest = (string) Str::uuid();
        $edict = (string) Str::uuid();
        $this->subject = (string) Str::uuid();
        $this->topic = (string) Str::uuid();
        $this->schedule = (string) Str::uuid();
        $this->item = (string) Str::uuid();
        DB::table('mentoria_contests')->insert(['id' => $this->contest, 'tenant_id' => 7, 'name' => 'Técnico', 'created_by' => $this->mentor->id, 'exam_date' => today()->addDays(30)]);
        DB::table('mentoria_student_contests')->insert(['id' => Str::uuid(), 'tenant_id' => 7, 'student_id' => $this->student->id, 'contest_id' => $this->contest, 'assigned_by' => $this->mentor->id]);
        DB::table('mentoria_edicts')->insert(['id' => $edict, 'tenant_id' => 7, 'contest_id' => $this->contest, 'name' => 'Edital', 'created_by' => $this->mentor->id]);
        DB::table('mentoria_student_edicts')->insert(['id' => Str::uuid(), 'tenant_id' => 7, 'student_id' => $this->student->id, 'edict_id' => $edict, 'assigned_by' => $this->mentor->id]);
        DB::table('mentoria_subjects')->insert(['id' => $this->subject, 'tenant_id' => 7, 'edict_id' => $edict, 'name' => 'Constitucional']);
        DB::table('mentoria_topics')->insert(['id' => $this->topic, 'tenant_id' => 7, 'subject_id' => $this->subject, 'name' => 'Direitos fundamentais']);
        DB::table('mentoria_schedules')->insert(['id' => $this->schedule, 'tenant_id' => 7, 'student_id' => $this->student->id,
            'contest_id' => $this->contest, 'type' => 'agendado', 'state' => 'ativo', 'version' => 1, 'created_by' => $this->mentor->id,
            'configuration' => json_encode(['horas' => array_fill_keys(['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'], 2)]), 'created_at' => now(), 'updated_at' => now()]);
        DB::table('mentoria_schedule_items')->insert(['id' => $this->item, 'tenant_id' => 7, 'schedule_id' => $this->schedule,
            'subject_id' => $this->subject, 'topic_id' => $this->topic, 'duration_minutes' => 60, 'planned_date' => today()->toDateString()]);
    }

    private function studentUrl(string $suffix): string
    {
        return '/mentoria-estudos/7/learning/'.$suffix;
    }

    private function mentorUrl(string $suffix): string
    {
        return '/mentoria/students/'.$this->student->id.'/workspace/7/learning/'.$suffix;
    }

    private function execution(): array
    {
        return ['contest_id' => $this->contest, 'request_id' => (string) Str::uuid(), 'minutes' => 23, 'solved' => 10, 'correct' => 6, 'notes' => 'Dúvida'];
    }

    private function config(): array
    {
        return ['tipo' => 'agendado', 'horas' => array_fill_keys(['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'], 2), 'minutosTopico' => 30];
    }

    public function test_execution_is_atomic_idempotent_and_uses_actual_time(): void
    {
        $data = $this->execution();
        $this->actingAs($this->student)->postJson($this->studentUrl('items/'.$this->item.'/execute'), $data)->assertOk();
        $this->postJson($this->studentUrl('items/'.$this->item.'/execute'), $data)->assertOk();
        $this->assertDatabaseCount('mentoria_study_sessions', 1);
        $this->assertDatabaseCount('mentoria_question_logs', 1);
        $this->assertDatabaseHas('mentoria_study_sessions', ['seconds' => 1380, 'origin' => 'self_reported']);
        $this->assertDatabaseCount('mentoria_learning_events', 0);
        $this->postJson($this->studentUrl('items/'.$this->item.'/execute'), array_merge($data, ['minutes' => 24]))->assertStatus(409);
    }

    public function test_student_cannot_publish_or_mutate_plan_and_another_tenant_cannot_access_it(): void
    {
        $this->actingAs($this->student)->postJson($this->studentUrl('preview'), ['contest_id' => $this->contest, 'configuration' => $this->config()])->assertForbidden();
        $this->postJson('/mentoria-estudos/7/schedules/generate', ['contest_id' => $this->contest])->assertForbidden();
        $this->patchJson('/mentoria-estudos/7/schedule-items/'.$this->item, ['duration_minutes' => 1])->assertForbidden();
        $other = User::factory()->create(['role' => 'infoprodutor', 'tenant_id' => 8]);
        $this->actingAs($other)->postJson($this->mentorUrl('notes'), ['contest_id' => $this->contest, 'message' => 'Wrong tenant'])->assertNotFound();
    }

    public function test_profile_and_adjustment_survive_reload_and_mentor_can_resolve(): void
    {
        $this->actingAs($this->student)->putJson($this->studentUrl('profile'), ['contest_id' => $this->contest, 'timezone' => 'America/Fortaleza',
            'diagnostic' => ['hours' => ['seg' => 1], 'level' => 'iniciante', 'goal' => 80, 'difficulties' => 'Português']])->assertOk();
        $this->assertDatabaseHas('mentoria_learning_profiles', ['student_id' => $this->student->id, 'contest_id' => $this->contest]);
        $id = $this->postJson($this->studentUrl('notes'), ['contest_id' => $this->contest, 'message' => 'Reduzir quinta'])->assertCreated()->json('id');
        $this->actingAs($this->mentor)->patchJson($this->mentorUrl('notes/'.$id), ['contest_id' => $this->contest, 'resolution' => 'Ajustaremos a carga'])->assertOk();
        $payload = app(LearningWorkspaceService::class)->payload(7, $this->student->id, $this->contest);
        $this->assertSame('iniciante', $payload['profile']->diagnostic['level']);
        $this->assertSame('resolved', $payload['notes'][0]->status);
    }

    public function test_preview_publish_preserves_history_and_rejects_stale_preview(): void
    {
        $this->actingAs($this->mentor);
        $body = ['contest_id' => $this->contest, 'configuration' => $this->config()];
        $preview = $this->postJson($this->mentorUrl('preview'), $body)->assertOk()->json('token');
        $stale = $this->postJson($this->mentorUrl('preview'), $body)->assertOk()->json('token');
        $this->postJson($this->mentorUrl('publish'), ['contest_id' => $this->contest, 'token' => $preview, 'reason' => 'Consolidar conteúdo'])->assertOk();
        $this->assertDatabaseHas('mentoria_schedules', ['id' => $this->schedule, 'state' => 'substituido', 'is_active' => false]);
        $this->assertDatabaseHas('mentoria_schedule_items', ['id' => $this->item]);
        $this->assertDatabaseHas('mentoria_schedules', ['version' => 2, 'algorithm_version' => 'guided-v1', 'created_by' => $this->mentor->id]);
        $this->postJson($this->mentorUrl('publish'), ['contest_id' => $this->contest, 'token' => $stale, 'reason' => 'Stale'])->assertStatus(409);
    }

    public function test_schedule_never_exceeds_daily_capacity_and_rejects_impossible_deadline(): void
    {
        $config = $this->config();
        $config['horas'] = array_fill_keys(['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'], .5);
        $items = app(ScheduleEngineService::class)->generate($this->student, 7, $this->contest, $config);
        foreach (collect($items)->groupBy('planned_date') as $day) {
            $this->assertLessThanOrEqual(30, $day->sum('duration_minutes'));
        }
        $config['minutosTopico'] = 60;
        $this->expectException(\RuntimeException::class);
        app(ScheduleEngineService::class)->generate($this->student, 7, $this->contest, $config);
    }

    public function test_existing_reviews_reserve_capacity_before_generation(): void
    {
        DB::table('mentoria_contests')->where('id', $this->contest)->update(['exam_date' => today()->addDay()]);
        DB::table('mentoria_scheduled_reviews')->insert(['id' => Str::uuid(), 'tenant_id' => 7, 'student_id' => $this->student->id,
            'contest_id' => $this->contest, 'next_date' => today()->toDateString()]);
        $config = $this->config();
        $config['horas'] = array_fill_keys(['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'], .5);
        $this->expectException(\RuntimeException::class);
        app(ScheduleEngineService::class)->generate($this->student, 7, $this->contest, $config);
    }

    public function test_rewards_are_unique_and_mentor_actions_never_award_xp(): void
    {
        $question = (string) Str::uuid();
        $answer = (string) Str::uuid();
        $service = app(LearningRewardsService::class);
        $service->recordAnswer(7, $this->student->id, $this->contest, $question, $answer, true);
        $service->recordAnswer(7, $this->student->id, $this->contest, $question, $answer, true);
        $this->assertSame(5, $service->summary(7, $this->student->id, $this->contest)['xp']);
        request()->attributes->set('mentoria.workspace', true);
        $service->recordAnswer(7, $this->student->id, $this->contest, (string) Str::uuid(), (string) Str::uuid(), true);
        $this->assertDatabaseCount('mentoria_learning_events', 1);
    }

    public function test_calendar_is_private_and_contains_stable_all_day_events(): void
    {
        $response = $this->actingAs($this->student)->get($this->studentUrl('calendar.ics').'?contest_id='.$this->contest)->assertOk();
        $this->assertStringContainsString('BEGIN:VCALENDAR', $response->getContent());
        $this->assertStringContainsString('UID:'.$this->item.'@mentoria.getfy', $response->getContent());
        $this->assertStringContainsString('VALUE=DATE', $response->getContent());
        $this->assertStringContainsString('private', $response->headers->get('Cache-Control'));
    }

    private function question(): string
    {
        $id = (string) Str::uuid();
        DB::table('mentoria_question_bank')->insert(['id' => $id, 'tenant_id' => 7, 'subject' => 'Constitucional',
            'topic' => 'Direitos fundamentais', 'prompt' => 'Questão de teste', 'alternatives' => json_encode(['A', 'B']),
            'correct_answer' => 'A', 'created_by' => $this->mentor->id]);
        app(\Plugins\Mentoria\Services\ContentAudienceService::class)->replaceTargets(7, 'question', $id, [['type' => 'global']]);

        return $id;
    }

    public function test_real_answers_award_once_and_recovery_requires_a_day(): void
    {
        $this->actingAs($this->student);
        $question = $this->question();
        $url = '/mentoria-estudos/7/questions/'.$question.'/answer';
        $body = ['contest_id' => $this->contest, 'answer' => 'A'];
        $this->postJson($url, $body)->assertOk();
        $this->postJson($url, $body)->assertOk();
        $this->assertSame(5, (int) DB::table('mentoria_learning_events')->sum('xp'));
        $question = $this->question();
        $url = '/mentoria-estudos/7/questions/'.$question.'/answer';
        $this->postJson($url, ['contest_id' => $this->contest, 'answer' => 'B'])->assertOk();
        $this->postJson($url, $body)->assertOk();
        $this->assertSame(5, (int) DB::table('mentoria_learning_events')->sum('xp'));
        $this->travel(25)->hours();
        $this->postJson($url, $body)->assertOk();
        $this->postJson($url, $body)->assertOk();
        $this->assertSame(15, (int) DB::table('mentoria_learning_events')->sum('xp'));
        $this->travelBack();
    }

    public function test_reward_daily_limit(): void
    {
        $service = app(LearningRewardsService::class);
        for ($i = 0; $i < 25; $i++) {
            $service->recordAnswer(7, $this->student->id, $this->contest, (string) Str::uuid(), (string) Str::uuid(), true);
        }
        $this->assertSame(100, (int) DB::table('mentoria_learning_events')->sum('xp'));
        $this->assertDatabaseCount('mentoria_learning_events', 20);
    }

    public function test_reprogram_preview_is_read_only_and_rejects_intervening_execution(): void
    {
        $this->actingAs($this->mentor);
        $token = $this->postJson($this->mentorUrl('reprogram-preview'), ['contest_id' => $this->contest])->assertOk()->json('token');
        $this->assertDatabaseHas('mentoria_schedules', ['id' => $this->schedule, 'is_active' => true]);
        $this->actingAs($this->student)->postJson($this->studentUrl('items/'.$this->item.'/execute'), $this->execution())->assertOk();
        $this->actingAs($this->mentor)->postJson($this->mentorUrl('publish'), ['contest_id' => $this->contest, 'token' => $token, 'reason' => 'Reprogramar'])->assertStatus(409);
        $this->assertDatabaseCount('mentoria_study_sessions', 1);
    }

    public function test_full_pupil_payload_contains_guided_workspace_without_answer_keys(): void
    {
        $this->question();
        $response = $this->actingAs($this->student)->getJson('/mentoria-estudos/7/data?contest_id='.$this->contest)->assertOk();
        $response->assertJsonPath('learning.today.0.id', $this->item);
        $this->assertArrayNotHasKey('correct_answer', $response->json('questions.0'));
        DB::table('mentoria_products')->update(['capabilities' => json_encode(['dashboard'])]);
        $this->postJson($this->studentUrl('items/'.$this->item.'/execute'), $this->execution())->assertForbidden();
    }

    public function test_mentor_answers_are_attributed_and_do_not_pollute_pupil_evidence(): void
    {
        $question = $this->question();
        $this->actingAs($this->mentor)->postJson('/mentoria/students/'.$this->student->id.'/workspace/7/questions/'.$question.'/answer',
            ['contest_id' => $this->contest, 'answer' => 'A'])->assertOk();
        $this->assertDatabaseHas('mentoria_question_answers', ['actor_id' => $this->mentor->id, 'is_student_evidence' => false]);
        $this->assertDatabaseCount('mentoria_learning_events', 0);
        $this->actingAs($this->student)->postJson('/mentoria-estudos/7/questions/'.$question.'/answer',
            ['contest_id' => $this->contest, 'answer' => 'A'])->assertOk();
        $this->assertSame(5, (int) DB::table('mentoria_learning_events')->sum('xp'));
        $summary = app(\Plugins\Mentoria\Services\MetricsService::class)->summary(7, $this->student->id, $this->contest);
        $this->assertSame(1, $summary['questions_solved_total']);
    }

    public function test_additive_schema_rollback_does_not_remove_existing_sessions_or_content(): void
    {
        $this->actingAs($this->student)->postJson($this->studentUrl('items/'.$this->item.'/execute'), $this->execution())->assertOk();
        $migration = require base_path('plugins/mentoria/migrations/2026_10_15_000001_add_guided_learning.php');
        $migration->down();
        $this->assertDatabaseCount('mentoria_study_sessions', 1);
        $this->assertDatabaseHas('mentoria_topics', ['id' => $this->topic]);
        $this->assertDatabaseHas('mentoria_schedules', ['id' => $this->schedule]);
        $migration->up();
    }
}
