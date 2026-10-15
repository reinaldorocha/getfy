import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const pluginRoot = new URL('../..', import.meta.url);
const source = (path) => readFileSync(new URL(path, pluginRoot), 'utf8');

test('Mentoria owns its slug, routes, exports and isolated table prefix', () => {
    assert.equal(existsSync(new URL('plugin.json', pluginRoot)), true);

    const manifest = JSON.parse(source('plugin.json'));
    const manifestText = source('plugin.json');
    const bootstrap = source('bootstrap.php');
    const student = source('frontend/src/student.js');
    const entry = source('frontend/src/plugin-ui.js');
    const migration = source('migrations/2026_09_19_000001_create_mentoria_tables.php');
    const all = [manifestText, bootstrap, student, entry, migration].join('\n');

    assert.equal(manifest.slug, 'mentoria');
    assert.match(bootstrap, /register\('mentoria', 'mentoria'/);
    assert.match(bootstrap, /prefix\('mentoria-estudos'\)/);
    assert.match(bootstrap, /prefix\('mentoria-course'\)/);
    assert.match(student, /\/mentoria-estudos\//);
    assert.match(entry, /MentoriaIndex/);
    assert.match(entry, /MentoriaStudent/);
    assert.match(migration, /mentoria_products/);
    const legacyIdentifier = new RegExp(['c', 'jc'].join(''), 'i');
    assert.doesNotMatch(all, legacyIdentifier);
});

test('scheduled reviews are linked to one 30-minute schedule reservation', () => {
    const migrationPath = new URL('migrations/2026_09_20_000004_add_scheduled_review_to_mentoria_schedule_items.php', pluginRoot);
    const servicePath = new URL('src/Services/ReviewScheduleService.php', pluginRoot);

    assert.equal(existsSync(migrationPath), true);
    assert.equal(existsSync(servicePath), true);

    const migration = source('migrations/2026_09_20_000004_add_scheduled_review_to_mentoria_schedule_items.php');
    const service = source('src/Services/ReviewScheduleService.php');
    assert.match(migration, /scheduled_review_id/);
    assert.match(service, /function syncForContest\(int \$tenantId, int \$studentId, string \$contestId\): void/);
    assert.match(service, /REVIEW_DURATION_MINUTES = 30/);
    assert.match(service, /whereNotNull\('scheduled_review_id'\)/);
});

test('review changes synchronize before reprogramming only study items', () => {
    const engine = source('src/Services/ScheduleEngineService.php');
    const student = source('src/Http/Controllers/StudentController.php');
    const study = source('src/Http/Controllers/StudyController.php');

    assert.match(engine, /whereNull\('scheduled_review_id'\)/);
    assert.match(engine, /whereNotNull\('scheduled_review_id'\)/);
    assert.match(student, /reviewSchedule->syncForContest/);
    assert.match(study, /reviewSchedule->syncForContest/);
});

test('the verticalized edict and schedule-owned review cards replace virtual calendar reviews', () => {
    const student = source('frontend/src/student.js');

    assert.match(student, /Edital verticalizado/);
    assert.match(student, /scheduled_review_id/);
    assert.doesNotMatch(student, /const calendarReviews=/);
    assert.match(student, /item\.scheduled_review_id/);
});

test('student workspace keeps the global timer launcher available to mentors using a student workspace', () => {
    const student = source('frontend/src/student.js');
    const stylesheet = source('frontend/src/plugin-ui.css');

    assert.match(student, /function renderTimerLauncher\(\)/);
    assert.match(student, /class:'mentoria-timer-launcher/);
    assert.match(student, /renderTimerLauncher\(\)/);
    assert.doesNotMatch(student, /readOnly\.value\?null:renderTimerLauncher\(\)/);
    assert.match(stylesheet, /\.mentoria-timer-launcher\s*\{/);
});

test('scheduled execution uses the guided form instead of multiple independent requests', () => {
    const student = source('frontend/src/student.js');
    const guided = source('frontend/src/guided-workspace.js');
    assert.match(student, /guided.openExecution\(item\)/);
    assert.match(guided, /request_id: m.requestId/);
    assert.match(guided, /minutes: Number\(f.minutes\)/);
    assert.match(guided, /Registrar execução/);
});
