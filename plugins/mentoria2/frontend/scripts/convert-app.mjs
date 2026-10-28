import { readFileSync, writeFileSync, statSync } from 'node:fs';

let code = readFileSync('docs/mentoria-2.0/prototipo/js/app.js', 'utf8');

// Replace header
code = code.replace(
  /^\(\(\) => \{[\s\S]*?const icon = \(name, size, cls\) => \{[\s\S]*?\};/m,
  `import { icon as renderIconSvg } from './m2-icons.js';
import { M2Data } from './m2-data.js';

const icon = (name, size, cls) => {
  if (typeof window !== 'undefined' && window.icon) return window.icon(name, size, cls);
  return renderIconSvg(name, size, cls);
};`
);

// Replace appRoot
code = code.replace(
  "const appRoot = document.getElementById('app-root');",
  `function getAppRoot() {
  if (typeof document === 'undefined') return null;
  return document.getElementById('app-root') || document.querySelector('.m2-app-root');
}`
);

// Replace render
code = code.replace(
  'function render() {\n    if (!appRoot) return;\n\n    appRoot.innerHTML = `',
  `function render() {
    const appRoot = getAppRoot();
    if (!appRoot) return;

    appRoot.innerHTML = \``
);

// Guard setupEvents
code = code.replace(
  'function setupEvents() {',
  `function setupEvents() {
    if (typeof document === 'undefined') return;
    if (document.__m2EventsAttached) return;
    document.__m2EventsAttached = true;`
);

// Wrap Ticker safely
const tickerTarget = `    // Ticker para o cronômetro flutuante e Pomodoro (1 segundo)
    setInterval(() => {`;
const tickerWith = `    // Ticker para o cronômetro flutuante e Pomodoro (1 segundo)
    if (typeof window !== 'undefined') {
      if (window.__m2TimerInterval) clearInterval(window.__m2TimerInterval);
      window.__m2TimerInterval = setInterval(() => {`;

code = code.replace(tickerTarget, tickerWith);

// Close Ticker safely
const tickerEndTarget = `        if (topbarTime) topbarTime.textContent = formatted;
      }
    }, 1000);`;

const tickerEndWith = `        if (topbarTime) topbarTime.textContent = formatted;
      }
    }, 1000);
    }`;

code = code.replace(tickerEndTarget, tickerEndWith);

// Replace footer
code = code.replace(
  /\/\/ Inicialização[\s\S]*?\}\)\(\);[\s\r\n]*$/,
  `// Inicialização e Exportações
export function initMentoria2App(options = {}) {
  if (options.mode) state.mode = options.mode;
  if (options.screen) state.screen = options.screen;
  if (options.payload) {
    if (options.payload.students?.length) {
      window.M2Data.mentor.totalStudents = options.payload.students.length;
    }
    if (options.payload.contests?.length) {
      window.M2Data.mentor.totalContests = options.payload.contests.length;
    }
  }
  applyTheme();
  setupEvents();
  render();
}

export { state, navigate, showToast, toggleTheme, render };

if (typeof window !== 'undefined') {
  window.M2App = {
    state,
    navigate,
    showToast,
    toggleTheme,
    render,
    initMentoria2App
  };
}
`
);

writeFileSync('plugins/mentoria2/frontend/src/m2-app.js', code);
console.log('m2-app.js written successfully, bytes:', statSync('plugins/mentoria2/frontend/src/m2-app.js').size);

