import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { readFileSync, mkdirSync } from 'node:fs';

const root = fileURLToPath(new URL('../../../..', import.meta.url));
const server = await createServer({ configFile: false, appType: 'custom', root, server: { host: '127.0.0.1', port: 0 }, logLevel: 'error' });
const css = JSON.parse(readFileSync(root + '/public/build/manifest.json', 'utf8'))['resources/css/app.css'].file;
server.middlewares.use('/__mentoria_test', (_req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><head><meta name="csrf-token" content="test"><link rel="stylesheet" href="/build/${css}"><link rel="stylesheet" href="/plugins/mentoria/frontend/src/plugin-ui.css"></head><body style="margin:0"><div id="app"></div><script type="module" src="/plugins/mentoria/frontend/tests/browser-entry.js"></script></body></html>`);
});
await server.listen();
const url = server.resolvedUrls.local[0] + '__mentoria_test';
const browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH } : {}) });
const errors = [];
const screenshots = process.env.MENTORIA_SCREENSHOTS;
if (screenshots) mkdirSync(screenshots, {recursive:true});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.on('pageerror', e => {errors.push(e.message); console.error(e.message);});
page.on('console', m=>{if(m.type()==='error')console.error(m.text());});
const item = { id: 'item-1', subject_id: 'subject-1', topic_id: 'topic-1', duration_minutes: 25, planned_date: '2026-10-15', status: 'pendente', schedule_id: 'schedule-1', position: 1 };
const fixture = {
    tenant_id: 1, student: { id: 2, name: 'Ana Martins' }, active_contest_id: 'contest-1',
    capabilities: ['dashboard', 'edital', 'materiais', 'cronograma', 'revisoes', 'questoes', 'metricas'],
    contests: [{ id: 'contest-1', name: 'Técnico judiciário', exam_date: '2027-01-10' }],
    subjects: [{ id: 'subject-1', name: 'Direito Constitucional' }], topics: [{ id: 'topic-1', subject_id: 'subject-1', name: 'Direitos fundamentais' }],
    schedule: { id: 'schedule-1', version: 2, type: 'agendado', state: 'ativo', configuration: {} },
    schedule_items: [item], learning: { date: '2026-10-15', timezone: 'America/Fortaleza', today: [item],
        week: ['seg','ter','qua','qui','sex','sab','dom'].map((key,i) => ({ key, date: '2026-10-'+(12+i), capacity: i<5?90:0, planned: i===3?25:0, total:i===3?1:0, completed:0 })),
        notes: [{ id:'note-1',kind:'guidance', actor_name:'Camila', message:'Priorize entender seus erros.',created_at:'2026-10-15'}],
        recommendations: [{title:'Construir diagnóstico',reason:'Amostra insuficiente.'}],
        evidence: { sample:10,accuracy:60,confidence:'insuficiente' },
        rewards: {xp:15,level:1,level_progress:15,daily_cap:100,rules:[{id:'first',label:'Primeiro acerto',xp:5}],achievements:[{label:'Primeiro passo',description:'Um acerto verificado.',unlocked:true}]} },
};
let posted = [];
await page.addInitScript(f => window.fixture = f, fixture);
await page.route('**/mentoria-estudos/**', route => {
    const request = route.request();
    if (request.method() === 'GET') return route.fulfill({ json: fixture });
    posted.push({ url: request.url(), body: request.postDataJSON() });
    return route.fulfill({ json: {ok:true,id:'saved'} });
});
try {
    await page.goto(url);
    await page.locator('.mentoria-guided-heading').waitFor();
    if(errors.length) throw new Error(errors.join('; '));
    await page.getByRole('heading', {name:'Bom estudo, Ana Martins.'}).waitFor();
    if(screenshots) await page.screenshot({path:screenshots+'/today-desktop.png',fullPage:true});
    await page.getByRole('button',{name:'Registrar execução',exact:true}).click();


    await page.getByText('Minutos realizados', {exact:true}).locator('..').locator('input').fill('23');
    await page.getByRole('button',{name:'Salvar execução',exact:true}).click();
    await page.getByText('Execução registrada uma única vez.',{exact:true}).waitFor();
    assert.equal(posted.at(-1).body.minutes,23);
    assert.match(posted.at(-1).body.request_id,/^[a-f0-9-]{36}$/);
    await page.getByRole('button',{name:'Solicitar ajuste',exact:true}).click();
    await page.locator('textarea').fill('Disponibilidade menor na quinta.');
    await page.getByRole('button',{name:'Salvar',exact:true}).click();
    await page.getByText('Mensagem registrada no acompanhamento.',{exact:true}).waitFor();
    assert.equal(posted.at(-1).body.message,'Disponibilidade menor na quinta.');
    await page.getByRole('button',{name:'Meu plano',exact:true}).click();
    await page.getByRole('link',{name:'Exportar calendário'}).waitFor();
    assert.equal(await page.getByRole('button',{name:'Prévia e publicação',exact:true}).count(),0);
    if(screenshots) await page.screenshot({path:screenshots+'/plan-desktop.png',fullPage:true});
    await page.setViewportSize({width:390,height:844});
    await page.waitForTimeout(400);

    // Whole page must reflow on mobile; no clipped primary content.
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),true);
    if(screenshots) await page.screenshot({path:screenshots+'/plan-mobile.png',fullPage:true});
    await page.setViewportSize({width:320,height:800});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),true);
    assert.deepEqual(errors,[]);
    console.log('PASS: student execution, adjustment, permissions, desktop/mobile layout and runtime.');

    const mentorPage = await browser.newPage({viewport:{width:1440,height:1000}});
    mentorPage.on('pageerror',e=>errors.push(e.message));
    await mentorPage.addInitScript(f=>window.fixture=f,{...fixture,acting_as_mentor:true,workspace_base:'/mentoria/students/2/workspace/1'});
    await mentorPage.route('**/mentoria/students/**',route=>{
        if(route.request().method()==='GET')return route.fulfill({json:{...fixture,acting_as_mentor:true,workspace_base:'/mentoria/students/2/workspace/1'}});
        const body=route.request().postDataJSON();posted.push({url:route.request().url(),body});
        return route.fulfill({json:route.request().url().endsWith('/preview')?{token:'preview-token',items:[item],minutes:25,warning:'Prévia de teste.'}:{ok:true}});
    });
    await mentorPage.goto(url);
    await mentorPage.getByRole('button',{name:'Meu plano',exact:true}).click();
    await mentorPage.getByRole('button',{name:'Prévia e publicação',exact:true}).click();
    await mentorPage.getByRole('button',{name:'Gerar prévia',exact:true}).click();
    await mentorPage.getByText('Motivo e orientação para esta versão',{exact:true}).locator('..').locator('textarea').fill('Consolidar direitos fundamentais.');
    await mentorPage.getByRole('button',{name:'Publicar nova versão',exact:true}).click();
    await mentorPage.getByText('Plano publicado. Histórico anterior preservado.',{exact:true}).waitFor();
    assert.equal(posted.at(-1).body.token,'preview-token');
    assert.equal(posted.at(-1).body.reason,'Consolidar direitos fundamentais.');
    await mentorPage.getByRole('button',{name:'Acompanhamento',exact:true}).click();
    if(screenshots) await mentorPage.screenshot({path:screenshots+'/mentor-desktop.png',fullPage:true});
    assert.deepEqual(errors,[]);
    console.log('PASS: mentor preview, review and publication flow.');
} finally {
    await browser.close();
    await server.close();
}
