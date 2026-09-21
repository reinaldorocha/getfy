import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import test from 'node:test';

const root = new URL('..', import.meta.url);
const source = (path) => readFileSync(new URL(path, root), 'utf8');

test('Mentoria source owns the four public runtime exports', () => {
    assert.equal(existsSync(new URL('src/plugin-ui.js', root)), true);

    const entry = source('src/plugin-ui.js');
    for (const name of ['MentoriaIndex', 'MentoriaStudent', 'MentoriaCourseBuilder', 'MentoriaLessonExercises']) {
        assert.match(entry, new RegExp(`\\b${name}\\b`));
    }
});

test('Mentoria entry loads its stylesheet once', () => {
    const entry = source('src/plugin-ui.js');

    assert.match(entry, /mentoria-plugin-style/);
    assert.match(entry, /plugin-ui\.css/);
});

test('Mentoria styles stay scoped and provide visual primitives', () => {
    const css = source('src/plugin-ui.css');
    const shared = source('src/shared.js');

    assert.match(css, /\.mentoria-app/);
    assert.match(css, /\.mentoria-embedded/);
    assert.doesNotMatch(css, /(^|\n)\s*(body|:root)\s*\{/);
    for (const primitive of ['mentoria-card', 'mentoria-button', 'mentoria-badge', 'mentoria-field', 'mentoria-modal']) {
        assert.match(shared, new RegExp(primitive));
    }
});

test('full Mentoria pages and embedded exports use their intended visual boundary', () => {
    const admin = source('src/admin.js');
    const student = source('src/student.js');
    const course = source('src/course.js');

    assert.match(admin, /mentoria-app--producer/);
    assert.match(student, /mentoria-app--student/);
    assert.match(course, /mentoria-embedded/);
});

test('desktop Mentoria navigation becomes a local rail without replacing Getfy navigation', () => {
    const css = source('src/plugin-ui.css');

    assert.match(css, /grid-template-columns:\s*196px minmax\(0, 1fr\)/);
    assert.match(css, /\.mentoria-tabs\s*\{[\s\S]*flex-direction:\s*column/);
    assert.match(css, /max-width:\s*900px/);
});

test('Mentoria full pages opt into the standalone shell and return to their Getfy homes', () => {
    const manifest = JSON.parse(readFileSync(new URL('../plugin.json', root), 'utf8'));
    const css = source('src/plugin-ui.css');

    assert.deepEqual(manifest.frontend.pages.Index, { export: 'MentoriaIndex', layout: 'standalone' });
    assert.deepEqual(manifest.frontend.pages.Student, { export: 'MentoriaStudent', layout: 'standalone' });
    assert.match(source('src/admin.js'), /href:\s*'\/dashboard'/);
    assert.match(source('src/student.js'), /'\/meus-produtos'/);
    assert.match(css, /\.mentoria-app\s*\{[\s\S]*min-height:\s*100vh/);
    assert.doesNotMatch(css, /@media \(max-width: 700px\)\s*\{\s*\.mentoria-app \{ border-radius:/);
});

test('student flashcards and questions run as one-item study sessions', () => {
    const student = source('src/student.js');

    assert.match(student, /const flashcardIndex = ref\(0\);/);
    assert.match(student, /const questionIndex = ref\(0\);/);
    assert.match(student, /Revelar resposta/);
    assert.match(student, /Próxima questão/);
    assert.match(student, /nextQuestion\(filtered\.length\)/);
    assert.doesNotMatch(student, /due\.slice\(0,100\)\.map/);
});

test('answering a study question keeps the current session mounted', () => {
    const student = source('src/student.js');
    const start = student.indexOf('async function answerQuestion');
    const end = student.indexOf('function resetFlashcardSession');

    assert.match(student.slice(start, end), /\}\),'',false\);/);
});

test('radar turns measurable student gaps into actionable alerts', async () => {
    const { radarAlerts } = await import('../src/radar.js');

    const alerts = radarAlerts({
        study_hours_7d: 0,
        accuracy_7d: 58,
        accuracy_previous_7d: 71,
        questions_7d: 12,
        questions_previous_7d: 12,
        edict_percentage: 34,
        edict_target_percentage: 55,
        pending_reviews: 3,
    });

    assert.deepEqual(alerts.map((alert) => alert.type), [
        'low_frequency',
        'accuracy_drop',
        'edict_behind',
        'pending_reviews',
    ]);
    assert.match(alerts[1].detail, /13 pontos/);
    assert.match(alerts[2].detail, /34%.*55%/);
    assert.match(alerts[3].detail, /3 revis/);
});

test('student metrics expose the comparison and pacing data required by the radar', () => {
    const metrics = readFileSync(new URL('../src/Services/MetricsService.php', root), 'utf8');

    for (const field of [
        'accuracy_7d',
        'accuracy_previous_7d',
        'questions_7d',
        'questions_previous_7d',
        'edict_pace_percentage',
        'edict_target_percentage',
    ]) {
        assert.match(metrics, new RegExp(`'${field}'`));
    }
});

test('Mentoria menus render icons and accessible larger labels', () => {
    const admin = source('src/admin.js');
    const student = source('src/student.js');
    const shared = source('src/shared.js');
    const css = source('src/plugin-ui.css');

    assert.match(admin, /icon:/);
    assert.match(student, /icon:/);
    assert.match(shared, /mentoria-tab__icon/);
    assert.match(css, /\.mentoria-tab\s*\{[^}]*font-size:\s*13px/s);
    assert.match(css, /\.mentoria-tab__icon/);
});

test('producer can open a read-only preview of a student dashboard', () => {
    const admin = source('src/admin.js');
    const student = source('src/student.js');
    const routes = readFileSync(new URL('../routes.php', root), 'utf8');
    const controller = readFileSync(new URL('../src/Http/Controllers/StudentController.php', root), 'utf8');

    assert.match(admin, /Ver dashboard do aluno/);
    assert.match(admin, /\/mentoria\/students\/['"]\s*\+\s*student\.id\s*\+\s*['"]\/preview/);
    assert.match(student, /read_only/);
    assert.match(student, /mentoria-app--read-only/);
    assert.match(student, /Voltar ao painel do produtor/);
    assert.match(routes, /students\/\{student\}\/preview/);
    assert.match(controller, /function preview\(/);
});

test('build versions every Mentoria runtime dependency so a published update bypasses immutable asset caches', () => {
    execFileSync(process.execPath, ['scripts/build.mjs'], { cwd: new URL('.', root), stdio: 'pipe' });

    const dist = (path) => readFileSync(new URL(`../dist/${path}`, root), 'utf8');
    const versioned = /\?v=[a-f0-9]{12}/;

    assert.match(dist('plugin-ui.js'), new RegExp(`from '\\./admin\\.js${versioned.source}'`));
    assert.match(dist('plugin-ui.js'), new RegExp(`from '\\./student\\.js${versioned.source}'`));
    assert.match(dist('plugin-ui.js'), new RegExp(`from '\\./course\\.js${versioned.source}'`));
    assert.match(dist('plugin-ui.js'), new RegExp(`plugin-ui\\.css${versioned.source}`));
    for (const chunk of ['admin.js', 'student.js', 'course.js']) {
        assert.match(dist(chunk), new RegExp(`from '\\./shared\\.js${versioned.source}'`));
    }
});
