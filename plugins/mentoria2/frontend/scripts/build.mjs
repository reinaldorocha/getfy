import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const frontend = fileURLToPath(new URL('..', import.meta.url));
const dist = fileURLToPath(new URL('../../dist/', import.meta.url));

await mkdir(dist, { recursive: true });
const files = [
  'plugin-ui.js',
  'admin.js',
  'student.js',
  'course.js',
  'shared.js',
  'api/client.js',
  'app/context.js',
  'composables/useResource.js',
  'composables/useMutation.js',
  'components/EmptyState.js',
  'components/ErrorState.js',
  'components/Modal.js',
  'layouts/WorkspaceBanner.js',
  'utils/escape-html.js',
  'radar.js',
  'prompts.js',
  'question-alternatives.js',
  'm2-icons.js',
  'm2-data.js',
  'm2-app.js',
  'modules/core.js',
  'modules/shell.js',
  'modules/routine.js',
  'modules/curriculum.js',
  'modules/study.js',
  'modules/metrics.js',
  'modules/mentor.js',
  'modules/mentor-resources.js',
  'modules/ai.js',
  'modules/tutor-client.js',
  'modules/events.js',
  'plugin-ui.css'
];

const sourceFiles = await Promise.all(files.map(async (file) => [file, await readFile(`${frontend}/src/${file}`, 'utf8')]));
const version = createHash('sha256')
  .update(sourceFiles.map(([, content]) => content).join('\0'))
  .digest('hex')
  .slice(0, 12);

for (const [file, content] of sourceFiles) {
  const output = file.endsWith('.js')
    ? content.replace(/(['"])(\.{1,2}\/[a-zA-Z0-9_\/-]+\.(?:js|css))\1/g, `$1$2?v=${version}$1`)
    : content;
  const target = `${dist}/${file}`;
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, output);
}

console.log('Mentoria2 UI assets built into plugins/mentoria2/dist with version ' + version);
