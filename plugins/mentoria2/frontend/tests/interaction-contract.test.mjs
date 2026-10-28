import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../src/modules/', import.meta.url)));

function sourceFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? sourceFiles(path) : (statSync(path).isFile() && path.endsWith('.js') ? [path] : []);
  });
}

test('every literal button action rendered by a module has a handler in events', () => {
  const moduleSource = sourceFiles(root).map((file) => readFileSync(file, 'utf8')).join('\n');
  const eventSource = readFileSync(join(root, 'events.js'), 'utf8');
  const actions = [...moduleSource.matchAll(/data-action="([a-z0-9-]+)"/g)].map((match) => match[1]);
  const missing = [...new Set(actions)].filter((action) => !eventSource.includes(`'${action}'`));

  assert.deepEqual(missing, [], `Ações sem manipulador no events.js: ${missing.join(', ')}`);
});

test('mentor card editing remains in a mentor-only editor and uses the real card endpoints', () => {
  const app = readFileSync(resolve(fileURLToPath(new URL('../src/m2-app.js', import.meta.url))), 'utf8');
  const mentor = readFileSync(join(root, 'mentor.js'), 'utf8');
  const events = readFileSync(join(root, 'events.js'), 'utf8');

  assert.match(app, /case 'mentor-deck-editor': return viewMentorDeckEditor\(\);/);
  assert.match(mentor, /export function viewMentorDeckEditor\(\)/);
  assert.match(events, /state\.screen = 'mentor-deck-editor';/);
  assert.match(events, /\/mentoria2\/flashcard-decks\/\$\{encodeURIComponent\(editor\.deckId\)\}\/cards/);
  assert.match(events, /\/mentoria2\/flashcards\/\$\{encodeURIComponent\(editor\.card\.id\)\}/);
});

test('frontend does not use native JavaScript dialogs or imperative popup windows', () => {
  // All DOM event side effects are centralized here. Limiting the assertion to
  // this module avoids treating human-facing copy such as "prompt (opcional)"
  // in a template as executable JavaScript.
  const source = readFileSync(join(root, 'events.js'), 'utf8');

  assert.doesNotMatch(source, /\b(?:alert|confirm|prompt)\s*\(|\bwindow\.(?:alert|confirm|prompt|open)\s*\(/);
});

test('verticalized syllabus persists progress for both topics and subtopics', () => {
  const curriculum = readFileSync(join(root, 'curriculum.js'), 'utf8');
  const events = readFileSync(join(root, 'events.js'), 'utf8');
  const core = readFileSync(join(root, 'core.js'), 'utf8');

  assert.match(curriculum, /data-item-type="topico"/);
  assert.match(curriculum, /data-item-type="subtopico"/);
  assert.match(events, /itemType === 'subtopico'/);
  assert.match(events, /item_type: itemType/);
  assert.match(events, /e\.preventDefault\(\)/);
  assert.match(core, /const allSubtopics = Array\.isArray\(payload\.subtopics\)/);
  assert.match(core, /const progressByItem = new Map/);
});

test('student entry restores an authorized screen from the URL hash', () => {
  const student = readFileSync(resolve(fileURLToPath(new URL('../src/student.js', import.meta.url))), 'utf8');
  const app = readFileSync(resolve(fileURLToPath(new URL('../src/m2-app.js', import.meta.url))), 'utf8');

  assert.doesNotMatch(student, /screen:\s*'today'/);
  assert.match(app, /window\.location\.hash\.match\(\/\^#\(student\|mentor\|workspace\)\\\/\(\[a-z0-9-\]\+\)\$\/i\)/);
});

test('digital mock attempts persist answers and open the selected result', () => {
  const app = readFileSync(resolve(fileURLToPath(new URL('../src/m2-app.js', import.meta.url))), 'utf8');
  const study = readFileSync(join(root, 'study.js'), 'utf8');
  const events = readFileSync(join(root, 'events.js'), 'utf8');

  assert.match(app, /case 'mock-taking': return viewMockTaking\(\);/);
  assert.match(study, /export function viewMockTaking\(\)/);
  assert.match(events, /mock-exams\/\$\{encodeURIComponent\(mockId\)\}\/attempts/);
  assert.match(events, /attempts\/\$\{encodeURIComponent\(attempt\.id\)\}\/answers/);
  assert.match(events, /attempts\/\$\{encodeURIComponent\(attempt\.id\)\}\/finish/);
  assert.match(study, /find\(item => String\(item\.id\) === String\(state\.activeMockId\)\)/);
});

test('frontend toasts never expose an API error message', () => {
  const events = readFileSync(join(root, 'events.js'), 'utf8');

  assert.doesNotMatch(events, /showToast\([\s\S]{0,240}?(?:error|err)\.message/);
  assert.doesNotMatch(events, /\$\{(?:error|err)\.message\}/);
});

test('curation and adaptive planning use dedicated, persistent endpoints', () => {
  const events = readFileSync(join(root, 'events.js'), 'utf8');
  const mentor = readFileSync(join(root, 'mentor.js'), 'utf8');
  const shell = readFileSync(join(root, 'shell.js'), 'utf8');

  assert.match(events, /action === 'set-content-status'/);
  assert.match(mentor, /data-action="set-content-status"/);
  assert.match(events, /\/curation/);
  assert.match(events, /schedules\/adaptive-plan/);
  assert.match(mentor, /mentor-filter-status/);
  assert.match(shell, /preview-adaptive-plan/);
  assert.match(shell, /apply-adaptive-plan/);
});
