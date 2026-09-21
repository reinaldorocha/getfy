<?php

namespace Plugins\Mentoria\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\MemberLesson;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Plugins\Mentoria\Services\AccessService;
use Plugins\Mentoria\Services\QuestionAnswerService;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CourseQuestionController extends Controller
{
    public function __construct(
        private readonly AccessService $access,
        private readonly QuestionAnswerService $answers,
    ) {}

    public function builderData(Request $request, string $product): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $productRow = $this->requireProducerProduct($product, $tenantId);

        $questions = DB::table('mentoria_question_bank')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->orderBy('subject')
            ->orderBy('topic')
            ->orderByDesc('created_at')
            ->get(['id', 'subject', 'topic', 'type', 'prompt']);

        $lessonIds = MemberLesson::query()
            ->where('product_id', $productRow->id)
            ->pluck('id');

        $links = DB::table('mentoria_lesson_questions')
            ->where('tenant_id', $tenantId)
            ->where('product_id', (string) $productRow->id)
            ->whereIn('member_lesson_id', $lessonIds)
            ->orderBy('position')
            ->get(['member_lesson_id', 'question_id', 'position'])
            ->groupBy('member_lesson_id')
            ->map(fn ($rows) => $rows->pluck('question_id')->values()->all());

        return response()->json([
            'questions' => $questions,
            'lesson_questions' => $links,
        ]);
    }

    public function syncLessonQuestions(Request $request, string $product, int $lesson): JsonResponse
    {
        $actor = $request->user();
        $tenantId = $this->access->tenantId($actor);
        $productRow = $this->requireProducerProduct($product, $tenantId);
        $lessonRow = $this->requireLesson($productRow, $lesson);

        $data = $request->validate([
            'question_ids' => ['present', 'array', 'max:50'],
            'question_ids.*' => ['uuid'],
        ]);

        $ids = array_values(array_unique(array_map('strval', $data['question_ids'])));
        $valid = $ids === [] ? collect() : DB::table('mentoria_question_bank')
            ->where('tenant_id', $tenantId)
            ->where('is_active', true)
            ->whereIn('id', $ids)
            ->pluck('id');

        if ($valid->count() !== count($ids)) {
            abort(422, 'Uma ou mais questões não pertencem ao Banco de Questões deste Mentoria.');
        }

        $now = now();
        DB::transaction(function () use ($tenantId, $productRow, $lessonRow, $ids, $now): void {
            DB::table('mentoria_lesson_questions')
                ->where('tenant_id', $tenantId)
                ->where('product_id', (string) $productRow->id)
                ->where('member_lesson_id', $lessonRow->id)
                ->delete();

            foreach ($ids as $position => $questionId) {
                DB::table('mentoria_lesson_questions')->insert([
                    'id' => (string) Str::uuid(),
                    'tenant_id' => $tenantId,
                    'product_id' => (string) $productRow->id,
                    'member_lesson_id' => $lessonRow->id,
                    'question_id' => $questionId,
                    'position' => $position + 1,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        });

        return response()->json(['ok' => true, 'question_ids' => $ids]);
    }

    public function studentLessonQuestions(Request $request, string $product, int $lesson): JsonResponse
    {
        $student = $request->user();
        $productRow = $this->requireStudentProduct($student, $product);
        $lessonRow = $this->requireLesson($productRow, $lesson);
        $tenantId = (int) $productRow->tenant_id;

        $questions = DB::table('mentoria_lesson_questions as lq')
            ->join('mentoria_question_bank as q', 'q.id', '=', 'lq.question_id')
            ->where('lq.tenant_id', $tenantId)
            ->where('lq.product_id', (string) $productRow->id)
            ->where('lq.member_lesson_id', $lessonRow->id)
            ->where('q.is_active', true)
            ->orderBy('lq.position')
            ->get([
                'q.id', 'q.subject', 'q.topic', 'q.type', 'q.prompt', 'q.alternatives',
            ])
            ->map(function ($q) {
                $q->alternatives = $this->answers->alternatives($q->alternatives);
                return $q;
            });

        $latest = DB::table('mentoria_lesson_question_attempts')
            ->where('tenant_id', $tenantId)
            ->where('student_id', $student->id)
            ->where('product_id', (string) $productRow->id)
            ->where('member_lesson_id', $lessonRow->id)
            ->orderByDesc('answered_at')
            ->get()
            ->unique('question_id')
            ->keyBy('question_id')
            ->map(fn ($row) => [
                'answer' => $row->answer,
                'correct' => (bool) $row->is_correct,
                'answered_at' => $row->answered_at,
            ]);

        return response()->json([
            'questions' => $questions,
            'latest_attempts' => $latest,
        ]);
    }

    public function answerStudentLessonQuestion(Request $request, string $product, int $lesson, string $question): JsonResponse
    {
        $student = $request->user();
        $productRow = $this->requireStudentProduct($student, $product);
        $lessonRow = $this->requireLesson($productRow, $lesson);
        $tenantId = (int) $productRow->tenant_id;

        $data = $request->validate([
            'answer' => ['required', 'string', 'max:1000'],
        ]);

        $row = DB::table('mentoria_lesson_questions as lq')
            ->join('mentoria_question_bank as q', 'q.id', '=', 'lq.question_id')
            ->where('lq.tenant_id', $tenantId)
            ->where('lq.product_id', (string) $productRow->id)
            ->where('lq.member_lesson_id', $lessonRow->id)
            ->where('lq.question_id', $question)
            ->where('q.is_active', true)
            ->first([
                'q.id', 'q.subject', 'q.topic', 'q.type', 'q.alternatives',
                'q.correct_answer', 'q.explanation', 'q.contest_id',
            ]);

        if (! $row) {
            throw new NotFoundHttpException('Questão não vinculada a esta aula.');
        }

        $correct = $this->answers->matches((string) $data['answer'], (string) $row->correct_answer, $row->alternatives);
        $subjectId = $this->resolveSubjectId($tenantId, (int) $student->id, $row->contest_id, (string) $row->subject);
        $now = now();
        $answerId = (string) Str::uuid();

        DB::transaction(function () use ($tenantId, $student, $productRow, $lessonRow, $row, $data, $correct, $subjectId, $now, $answerId): void {
            DB::table('mentoria_lesson_question_attempts')->insert([
                'id' => (string) Str::uuid(),
                'tenant_id' => $tenantId,
                'student_id' => $student->id,
                'product_id' => (string) $productRow->id,
                'member_lesson_id' => $lessonRow->id,
                'question_id' => $row->id,
                'answer' => $data['answer'],
                'is_correct' => $correct,
                'answered_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            DB::table('mentoria_question_answers')->insert([
                'id' => $answerId,
                'tenant_id' => $tenantId,
                'student_id' => $student->id,
                'question_id' => $row->id,
                'contest_id' => $row->contest_id,
                'answer' => $data['answer'],
                'is_correct' => $correct,
                'answered_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);

            DB::table('mentoria_question_logs')->insert([
                'id' => (string) Str::uuid(),
                'tenant_id' => $tenantId,
                'student_id' => $student->id,
                'contest_id' => $row->contest_id,
                'subject_id' => $subjectId,
                'topic_id' => null,
                'subtopic_id' => null,
                'solved' => 1,
                'correct' => $correct ? 1 : 0,
                'wrong' => $correct ? 0 : 1,
                'origin' => 'curso',
                'is_active' => true,
                'recorded_at' => $now,
                'created_at' => $now,
                'updated_at' => $now,
            ]);
        });

        return response()->json([
            'ok' => true,
            'answer_id' => $answerId,
            'correct' => $correct,
            'correct_answer' => $row->correct_answer,
            'explanation' => $row->explanation,
        ]);
    }

    private function requireProducerProduct(string $productId, int $tenantId): Product
    {
        $product = Product::query()
            ->whereKey($productId)
            ->where('tenant_id', $tenantId)
            ->first();

        if (! $product) {
            throw new NotFoundHttpException('Produto não encontrado neste tenant.');
        }

        return $product;
    }

    private function requireStudentProduct($student, string $productId): Product
    {
        $product = Product::query()->whereKey($productId)->first();
        if (! $product || ! $product->tenant_id) {
            throw new NotFoundHttpException('Produto não encontrado.');
        }

        $hasAccess = $student->products()->where('products.id', $product->id)->exists();
        if (! $hasAccess) {
            throw new NotFoundHttpException('Produto não disponível para este aluno.');
        }

        return $product;
    }

    private function requireLesson(Product $product, int $lessonId): MemberLesson
    {
        $lesson = MemberLesson::query()
            ->whereKey($lessonId)
            ->where('product_id', $product->id)
            ->first();

        if (! $lesson) {
            throw new NotFoundHttpException('Aula não encontrada neste produto.');
        }

        return $lesson;
    }

    private function resolveSubjectId(int $tenantId, int $studentId, ?string $contestId, string $subjectName): ?string
    {
        if (! $contestId || trim($subjectName) === '') {
            return null;
        }

        return DB::table('mentoria_subjects as s')
            ->join('mentoria_edicts as e', 'e.id', '=', 's.edict_id')
            ->join('mentoria_student_edicts as se', function ($join) use ($studentId): void {
                $join->on('se.edict_id', '=', 'e.id')->where('se.student_id', '=', $studentId);
            })
            ->where('s.tenant_id', $tenantId)
            ->where('e.contest_id', $contestId)
            ->where('se.is_active', true)
            ->where('e.is_active', true)
            ->where('s.is_active', true)
            ->whereRaw('LOWER(s.name) = ?', [mb_strtolower(trim($subjectName), 'UTF-8')])
            ->value('s.id');
    }
}
