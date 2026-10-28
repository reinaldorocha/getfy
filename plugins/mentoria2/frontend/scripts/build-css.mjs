import { readFileSync, writeFileSync } from 'node:fs';

const origUiCss = readFileSync('plugins/mentoria2/frontend/src/plugin-ui.css', 'utf8');
let styleCss = readFileSync('docs/mentoria-2.0/prototipo/css/style.css', 'utf8');

// Replace :root
styleCss = styleCss.replace(/^:root \{/m, `html,
:host,
.mentoria2-app,
.mentoria2-app--producer,
.mentoria2-app--student,
.mentoria2-embedded,
.m2-wrapper,
#app-root,
.m2-app-root {`);

// Replace [data-theme="light"]
styleCss = styleCss.replace(/^\[data-theme="light"\] \{/m, `html[data-theme="light"],
[data-theme="light"],
.mentoria2-app--theme-light,
.m2-app-root[data-theme="light"] {`);

// Replace body
styleCss = styleCss.replace(/^body \{/m, `html body,
.mentoria2-app,
.mentoria2-embedded,
.m2-app-root,
#app-root {`);

// Combine: Ensure old plugin-ui.css rules are present and new styleCss rules are present
let combined = origUiCss;
if (!combined.includes('/* --- Mentoria 2.0 Prototype Design System --- */')) {
  combined += '\n\n/* --- Mentoria 2.0 Prototype Design System --- */\n' + styleCss;
} else {
  const parts = combined.split('/* --- Mentoria 2.0 Prototype Design System --- */');
  combined = parts[0] + '/* --- Mentoria 2.0 Prototype Design System --- */\n' + styleCss;
}

const regex = /(^|\n)\s*(body|:root)\s*\{/;
console.log('Test regex matches body|:root?:', regex.test(combined));

writeFileSync('plugins/mentoria2/frontend/src/plugin-ui.css', combined);
console.log('plugin-ui.css updated successfully.');

