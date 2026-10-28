import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const pluginRoot = new URL('../..', import.meta.url);
const source = (path) => readFileSync(new URL(path, pluginRoot), 'utf8');

test('Mentoria 2.0 has dedicated migrations for all 6 benchmark features', () => {
    assert.equal(existsSync(new URL('migrations/2026_10_15_000002_create_essay_and_discursive_tables.php', pluginRoot)), true);
    assert.equal(existsSync(new URL('migrations/2026_10_15_000003_create_ai_memory_and_reports_tables.php', pluginRoot)), true);
    assert.equal(existsSync(new URL('migrations/2026_10_15_000004_create_radar_contests_and_timer_logs_tables.php', pluginRoot)), true);

    const mEssay = source('migrations/2026_10_15_000002_create_essay_and_discursive_tables.php');
    assert.match(mEssay, /mentoria2_essays/);
    assert.match(mEssay, /mentoria2_essay_submissions/);

    const mAi = source('migrations/2026_10_15_000003_create_ai_memory_and_reports_tables.php');
    assert.match(mAi, /mentoria2_ai_memory/);
    assert.match(mAi, /mentoria2_question_reports/);

    const mRadar = source('migrations/2026_10_15_000004_create_radar_contests_and_timer_logs_tables.php');
    assert.match(mRadar, /mentoria2_radar_contests/);
    assert.match(mRadar, /mentoria2_timer_logs/);
    assert.match(mRadar, /mentoria2_gamification_logs/);
});

test('Mentoria 2.0 defines Clean Architecture contracts and DTOs', () => {
    const contracts = [
        'src/Contracts/EssayServiceInterface.php',
        'src/Contracts/AiMemoryServiceInterface.php',
        'src/Contracts/CebraspeScoreServiceInterface.php',
        'src/Contracts/QuestionReportServiceInterface.php',
        'src/Contracts/JsonImportServiceInterface.php',
        'src/Contracts/GamificationServiceInterface.php',
    ];

    for (const contract of contracts) {
        assert.equal(existsSync(new URL(contract, pluginRoot)), true, `Contract ${contract} must exist`);
    }

    const dtos = [
        'src/DTOs/EssaySubmissionDTO.php',
        'src/DTOs/CebraspeScoreDTO.php',
        'src/DTOs/QuestionReportDTO.php',
        'src/DTOs/TimerLogDTO.php',
    ];

    for (const dto of dtos) {
        assert.equal(existsSync(new URL(dto, pluginRoot)), true, `DTO ${dto} must exist`);
    }
});

test('Mentoria 2.0 services implement strict domain logic and Cebraspe scoring formula', () => {
    const cebraspeService = source('src/Services/CebraspeScoreService.php');
    assert.match(cebraspeService, /class CebraspeScoreService implements CebraspeScoreServiceInterface/);
    assert.match(cebraspeService, /\$liquidScore\s*=\s*max\(0\.0,\s*\(\$correct\s*\*\s*\$pointsPerQuestion\)\s*-\s*\(\$wrong\s*\*\s*\$pointsPerQuestion\)\);/);

    const essayService = source('src/Services/EssayService.php');
    assert.match(essayService, /class EssayService implements EssayServiceInterface/);
    assert.match(essayService, /function gradeWithAi/);
    assert.match(essayService, /function gradeByMentor/);

    const aiMemoryService = source('src/Services/AiMemoryService.php');
    assert.match(aiMemoryService, /class AiMemoryService implements AiMemoryServiceInterface/);
    assert.match(aiMemoryService, /function buildTutorContext/);

    const jsonImportService = source('src/Services/JsonImportService.php');
    assert.match(jsonImportService, /class JsonImportService implements JsonImportServiceInterface/);
    assert.match(jsonImportService, /function validatePayload/);
    assert.match(jsonImportService, /function importPayload/);
});

test('Mentoria 2.0 routes cleanly map all new student and mentor benchmark endpoints', () => {
    const routesMentor = source('routes.php');
    assert.match(routesMentor, /Route::post\('\/essays', \[EssayController::class, 'store'\]\)/);
    assert.match(routesMentor, /Route::get\('\/question-reports', \[QuestionReportController::class, 'mentorIndex'\]\)/);
    assert.match(routesMentor, /Route::get\('\/radar\/contests', \[ContestRadarController::class, 'index'\]\)/);
    assert.match(routesMentor, /Route::post\('\/external-import\/execute', \[ExternalImportController::class, 'importJson'\]\)/);

    const routesStudent = source('routes-student.php');
    assert.match(routesStudent, /Route::get\('\/\{tenant\}\/essays', \[EssayController::class, 'index'\]\)/);
    assert.match(routesStudent, /Route::get\('\/\{tenant\}\/ai-memory', \[AiMemoryController::class, 'profile'\]\)/);
    assert.match(routesStudent, /Route::post\('\/\{tenant\}\/questions\/\{question\}\/report', \[QuestionReportController::class, 'report'\]\)/);
    assert.match(routesStudent, /Route::post\('\/\{tenant\}\/timer-logs', \[TimerLogController::class, 'store'\]\)/);
});

test('Mentoria 2.0 CSS stylesheet provides responsive classes for floating Mini-Timer and AI Tutor chat', () => {
    const css = source('frontend/src/plugin-ui.css');
    assert.match(css, /\.mentoria2-floating-timer/);
    assert.match(css, /\.mentoria2-mini-timer-pill/);
    assert.match(css, /\.mentoria2-mini-timer-card/);
    assert.match(css, /\.mentoria2-floating-ai-wrap/);
    assert.match(css, /\.mentoria2-floating-ai-trigger/);
    assert.match(css, /\.mentoria2-floating-ai-card/);
});

