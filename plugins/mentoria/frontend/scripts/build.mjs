import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const frontend = fileURLToPath(new URL('..', import.meta.url));
const dist = fileURLToPath(new URL('../../dist/', import.meta.url));

await mkdir(dist, { recursive: true });
const files = ['plugin-ui.js', 'admin.js', 'student.js', 'course.js', 'shared.js', 'radar.js', 'prompts.js', 'question-alternatives.js', 'plugin-ui.css'];
const sourceFiles = await Promise.all(files.map(async (file) => [file, await readFile(`${frontend}/src/${file}`, 'utf8')]));
const version = createHash('sha256')
  .update(sourceFiles.map(([, content]) => content).join('\0'))
  .digest('hex')
  .slice(0, 12);

for (const [file, content] of sourceFiles) {
  const output = file.endsWith('.js')
    ? content.replace(/(['"])\.\/([a-z0-9-]+\.(?:js|css))\1/gi, `$1./$2?v=${version}$1`)
    : content;
  await writeFile(`${dist}/${file}`, output);
}

console.log('Mentoria UI assets built into plugins/mentoria/dist.');
