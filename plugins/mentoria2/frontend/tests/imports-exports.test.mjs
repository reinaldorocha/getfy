import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = resolve(__dirname, '../src');

function getAllJsFiles(dir) {
  let results = [];
  const list = readdirSync(dir);
  for (const file of list) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJsFiles(fullPath));
    } else if (file.endsWith('.js') || file.endsWith('.mjs')) {
      results.push(fullPath);
    }
  }
  return results;
}

test('all named imports across Mentoria2 frontend resolve to valid exports', () => {
  const allFiles = getAllJsFiles(srcDir);
  const errors = [];

  for (const filePath of allFiles) {
    const content = readFileSync(filePath, 'utf8');
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const importedVars = match[1].split(',').map(v => v.trim().split(/\s+as\s+/)[0]).filter(Boolean);
      const importPath = match[2];
      if (importPath.startsWith('.')) {
        const cleanPath = importPath.split('?')[0];
        const resolvedTarget = resolve(dirname(filePath), cleanPath);
        const targetWithExt = existsSync(resolvedTarget) ? resolvedTarget : resolvedTarget + '.js';
        if (!existsSync(targetWithExt)) {
          errors.push(`File ${relative(srcDir, filePath)} imports non-existent ${importPath}`);
          continue;
        }
        const targetContent = readFileSync(targetWithExt, 'utf8');
        for (const v of importedVars) {
          const hasExportDecl = new RegExp(`export\\s+(?:async\\s+)?(?:const|function|let|class|var)\\s+${v}\\b`).test(targetContent);
          const hasExportList = new RegExp(`export\\s*\\{[^}]*\\b${v}\\b[^}]*\\}`).test(targetContent);
          const hasExportDefault = v === 'default' && /export\s+default\b/.test(targetContent);
          if (!hasExportDecl && !hasExportList && !hasExportDefault) {
            errors.push(`File ${relative(srcDir, filePath)} imports '${v}' from ${relative(srcDir, targetWithExt)}, but it is NOT exported!`);
          }
        }
      }
    }
  }

  assert.deepEqual(errors, [], `Found missing exports: \n${errors.join('\n')}`);
});

test('all JavaScript files in Mentoria2 frontend have valid syntax without parsing errors', async () => {
  const { execFileSync } = await import('node:child_process');
  const allFiles = getAllJsFiles(srcDir);
  for (const filePath of allFiles) {
    assert.doesNotThrow(() => {
      execFileSync(process.execPath, ['--check', filePath]);
    }, `Syntax error in ${relative(srcDir, filePath)}`);
  }
});


