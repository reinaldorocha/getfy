import { h, ref, computed, onUnmounted } from 'vue';
import {
    api, alertBox, badge, btn, card, checkbox, choiceCard, cn, countdown, empty, field, fmtDate, fmtDateTime,
    fmtHours, input, jsonBody, modal, optionize, progressBar, safeJson, sectionTitle, select,
    stat, textarea, mentoriaShell, useMentoriaShell, svgIcon, renderIcon, renderRadarChart,
} from './shared.js?v=2315fc17bb77';
import { displayAlternative } from './question-alternatives.js?v=2315fc17bb77';

const MODULES = [
    ['dashboard', 'Dashboard', 'dashboard', 'dashboard'],
    ['edict', 'Edital verticalizado', 'edital', 'edicts'],
    ['materials', 'Materiais', 'materiais', 'materials'],
    ['schedule', 'Cronograma', 'cronograma', 'schedule'],
    ['reviews', 'Revisões', 'revisoes', 'reviews'],
    ['flashcards', 'Flashcards', 'flashcards', 'flashcards'],
    ['questions', 'Questões', 'questoes', 'questions'],
    ['mocks', 'Simulados', 'simulados', 'mocks'],
    ['notebooks', 'Cadernos', 'cadernos', 'notebooks'],
    ['metrics', 'Métricas', 'metricas', 'metrics'],
    ['courses', 'Cursos', 'cursos', 'courses'],
    ['history', 'Histórico', 'metricas', 'history'],
];

function availableModules(capabilities = []) {
    return MODULES.filter(([id, , capability]) => {
        if (id === 'schedule') {
            return capabilities.includes('cronograma') || capabilities.includes('cronograma_inteligente');
        }
        return !capability || capabilities.includes(capability);
    });
}

function firstAllowedModule(capabilities = []) {
    return availableModules(capabilities)[0]?.[0] || 'dashboard';
}

export const MentoriaStudent = {
    name: 'MentoriaStudent',
    props: { plugin_ui_page: { type: Object, default: () => ({}) } },
    setup(props) {
        const state = ref(props.plugin_ui_page || {});
        const activeTab = ref(firstAllowedModule(state.value.capabilities || []));
        const modalState = ref(null);
        const busy = ref(false);
        const message = ref('');
        const success = ref('');
        const questionQuery = ref('');
        const questionSubject = ref('');
        const deckFilter = ref('');
        const flashcardIndex = ref(0);
        const flashcardRevealed = ref(false);
        const answerDrafts = ref({});
        const questionStats = ref(null);
        const questionResults = ref({});
        const questionHistory = ref({});
        const questionTopic = ref('');
        const questionType = ref('');
        const questionSituation = ref('');
        const questionPage = ref(1);
        const questionIndex = ref(0);
        const helpQuery = ref('');
        const edictQuery = ref('');
        const materialType = ref('');
        const materialFolder = ref('');
        const materialPage = ref(1);
        const notebookQuery = ref('');
        const notebookFolder = ref('');
        const notebookFilterType = ref('todos');
        const scheduleView = ref('calendar');
        const scheduleStatus = ref('todos');
        const scheduleMonthOffset = ref(0);
        const shell = useMentoriaShell();
        const reviewContestFilter = ref('todos');
        const metricsPeriod = ref('30d');
        const metricsYear = ref(new Date().getFullYear());
        const metricsData = ref({
            summary: state.value.metrics_summary || {},
            timeline: state.value.metrics_timeline || [],
            subjects: state.value.metrics_subjects || [],
        });
        const zenMode = ref(false);

        const tenant = computed(() => Number(state.value.tenant_id || 0));
        const base = computed(() => state.value.workspace_base || '/mentoria-estudos/' + tenant.value);
        const actingAsMentor = computed(() => Boolean(state.value.acting_as_mentor));
        const capabilities = computed(() => state.value.capabilities || []);

        const aiWidget = computed(() => state.value.ai_widget || { enabled: false });
        const aiWidgetVisible = computed(() => Boolean(aiWidget.value.enabled && aiWidget.value.product_id));
        const aiChatOpen = ref(false);
        const aiChatMessages = ref([]);
        const aiChatConversationId = ref('');
        const aiChatInput = ref('');
        const aiChatSending = ref(false);
        const aiChatLoading = ref(false);
        const aiChatLoaded = ref(false);
        const contests = computed(() => state.value.contests || []);
        const activeContestId = ref(
            localStorage.getItem('mentoria_active_contest_'+(props.plugin_ui_page?.tenant_id || ''))
            || state.value.active_contest_id
            || '',
        );

        const activeContest = computed(() => contests.value.find(c => String(c.id) === String(activeContestId.value)) || contests.value[0] || null);
        const activeEdicts = computed(() => (state.value.edicts || []).filter(e => !activeContestId.value || e.contest_id === activeContestId.value));
        const activeSubjects = computed(() => (state.value.subjects || []).filter(s => activeEdicts.value.some(e => e.id === s.edict_id)));
        const activeTopics = computed(() => (state.value.topics || []).filter(t => activeSubjects.value.some(s => s.id === t.subject_id)));
        const activeSubtopics = computed(() => (state.value.subtopics || []).filter(st => activeTopics.value.some(t => t.id === st.topic_id)));
        const progressMap = computed(() => new Map((state.value.progress || []).map(p => [p.item_type+':'+p.item_id, p])));

        let timerInterval = null;
        const timer = ref({
            running: false,
            elapsed: 0,
            startedAt: null,
            pomodoro: false,
            pomodoro_minutes: 25,
            pomodoro_cycles: 0,
            form: {
                subject_id: '',
                topic_id: '',
                subtopic_id: '',
                mode: 'estudo',
                notes: '',
                solved: '',
                correct: '',
                mark_studied: false,
            },
        });

        onUnmounted(() => {
            if (timerInterval) clearInterval(timerInterval);
        });

        async function refresh(contestId = activeContestId.value) {
            const url = base.value + '/data' + (contestId ? '?contest_id='+encodeURIComponent(contestId) : '');
            state.value = await api(url);
            metricsData.value = {
                summary: state.value.metrics_summary || {},
                timeline: state.value.metrics_timeline || [],
                subjects: state.value.metrics_subjects || [],
            };
            if (!activeContestId.value && state.value.active_contest_id) activeContestId.value = state.value.active_contest_id;

            const allowedIds = availableModules(state.value.capabilities || []).map(([id]) => id);
            if (!allowedIds.includes(activeTab.value)) {
                activeTab.value = firstAllowedModule(state.value.capabilities || []);
            }
        }

        async function run(fn, ok = '', doRefresh = true) {
            busy.value = true;
            message.value = '';
            success.value = '';
            try {
                const result = await fn();
                if (doRefresh) await refresh();
                if (ok) success.value = ok;
                return result;
            } catch (e) {
                message.value = e.message || String(e);
                throw e;
            } finally {
                busy.value = false;
            }
        }

        function setContest(id) {
            activeContestId.value = id;
            localStorage.setItem('mentoria_active_contest_'+tenant.value, id);
            refresh(id).catch(e => message.value=e.message);
        }

        function closeModal() { modalState.value = null; }

        function formGrid(children, cols='md:grid-cols-2') {
            return h('div',{class:'grid gap-4 '+cols},children);
        }

        function formatTimer(seconds) {
            const total=Math.max(0,Math.floor(Number(seconds)||0));
            const hours=Math.floor(total/3600);
            const minutes=Math.floor((total%3600)/60);
            const secs=total%60;
            return (hours?String(hours).padStart(2,'0')+':':'')+String(minutes).padStart(2,'0')+':'+String(secs).padStart(2,'0');
        }

        function timerBeep() {
            try {
                const AudioCtx=window.AudioContext||window.webkitAudioContext;
                if(!AudioCtx)return;
                const ctx=new AudioCtx();
                const gain=ctx.createGain();
                const osc=ctx.createOscillator();
                osc.frequency.value=880;
                gain.gain.setValueAtTime(.12,ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.7);
                osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.7);
            } catch {}
        }

        function startTimer() {
            if (timer.value.running) return;
            timer.value.running = true;
            timer.value.startedAt = Date.now() - timer.value.elapsed * 1000;
            timerInterval = setInterval(() => {
                timer.value.elapsed = Math.floor((Date.now() - timer.value.startedAt) / 1000);
                const target = timer.value.pomodoro ? Math.max(1, Number(timer.value.pomodoro_minutes || 25)) * 60 : 0;
                if (target && timer.value.elapsed >= target) {
                    timer.value.elapsed = target;
                    timer.value.pomodoro_cycles = Number(timer.value.pomodoro_cycles||0)+1;
                    pauseTimer();
                    timerBeep();
                    success.value = 'Pomodoro concluído. Registre a sessão quando quiser.';
                }
            }, 1000);
        }

        function pauseTimer() {
            timer.value.running = false;
            if (timerInterval) clearInterval(timerInterval);
            timerInterval = null;
        }

        function resetTimer() {
            pauseTimer();
            timer.value.elapsed = 0;
            timer.value.startedAt = null;
        }

        async function finishTimer() {
            pauseTimer();
            if (timer.value.elapsed < 1) {
                message.value = 'Inicie o timer antes de registrar.';
                return;
            }

            const f = timer.value.form;
            await run(async () => {
                await api(base.value + '/study-sessions', {
                    method:'POST',
                    body:jsonBody({
                        contest_id: activeContestId.value || null,
                        subject_id: f.subject_id || null,
                        topic_id: f.topic_id || null,
                        subtopic_id: f.subtopic_id || null,
                        seconds: timer.value.elapsed,
                        mode: f.mode || 'estudo',
                        notes: f.notes || null,
                        origin:'timer',
                    }),
                });

                const solved = Number(f.solved || 0);
                const correct = Number(f.correct || 0);
                if (solved > 0) {
                    await api(base.value + '/question-logs', {
                        method:'POST',
                        body:jsonBody({
                            contest_id: activeContestId.value || null,
                            subject_id: f.subject_id || null,
                            topic_id: f.topic_id || null,
                            subtopic_id: f.subtopic_id || null,
                            solved,
                            correct: Math.min(solved,correct),
                            wrong: Math.max(0,solved-Math.min(solved,correct)),
                            origin:'timer',
                        }),
                    });
                }

                if (f.mark_studied && (f.subtopic_id || f.topic_id)) {
                    const item = f.subtopic_id || f.topic_id;
                    await api(base.value + '/edict-progress/' + item, {
                        method:'PATCH',
                        body:jsonBody({ item_type:f.subtopic_id?'subtopico':'topico', studied:true }),
                    });
                }
            },'Estudo registrado.');

            resetTimer();
            timer.value.form.notes='';
            timer.value.form.solved='';
            timer.value.form.correct='';
            timer.value.form.mark_studied=false;
        }

        function openTimer(target={}) {
            const f=timer.value.form;
            if(target.subject_id!==undefined)f.subject_id=target.subject_id||'';
            if(target.topic_id!==undefined)f.topic_id=target.topic_id||'';
            if(target.subtopic_id!==undefined)f.subtopic_id=target.subtopic_id||'';
            if(target.mode)f.mode=target.mode;
            modalState.value={type:'timer'};
        }

        function renderTimerLauncher() {
            const pomodoro=timer.value.pomodoro;
            const target=Math.max(1,Number(timer.value.pomodoro_minutes||25))*60;
            const displaySeconds=pomodoro?Math.max(0,target-timer.value.elapsed):timer.value.elapsed;
            const hasSession=timer.value.running||timer.value.elapsed>0;
            const label=timer.value.running
                ?(pomodoro?'Pomodoro em foco':'Cronômetro em andamento')
                :(pomodoro?'Pomodoro livre':'Cronômetro livre');

            return h('button',{
                type:'button',
                class:'mentoria-timer-launcher'+(timer.value.running?' mentoria-timer-launcher--running':'')+(aiWidgetVisible.value?' mentoria-timer-launcher--with-ai':''),
                title:'Abrir timer de estudo',
                'aria-label':label+(hasSession?', '+formatTimer(displaySeconds):''),
                onClick:()=>openTimer(),
            },[
                h('span',{class:'mentoria-timer-launcher__icon','aria-hidden':'true'},[
                    timer.value.running ? svgIcon('play', '', 14) : svgIcon('timer', '', 16),
                ]),
                h('span',{class:'mentoria-timer-launcher__content'},[
                    h('span',{class:'mentoria-timer-launcher__label'},label),
                    h('span',{class:'mentoria-timer-launcher__time'},hasSession?formatTimer(displaySeconds):(pomodoro?timer.value.pomodoro_minutes+' min':'Abrir timer')),
                ]),
            ]);
        }

        function openQuickStudy(subjectId='',topicId='',subtopicId='') {
            modalState.value={type:'historySession',item:null,form:{
                contest_id:activeContestId.value||'',
                subject_id:subjectId||'',
                topic_id:topicId||'',
                subtopic_id:subtopicId||'',
                minutes:30,
                mode:'estudo',
                studied_at:new Date().toISOString().slice(0,16),
                notes:'',
            }};
        }

        function itemStats(topicId,subtopicId=null){
            const sessions=(state.value.recent_sessions||[]).filter(x=>{
                if(subtopicId)return String(x.subtopic_id||'')===String(subtopicId);
                return String(x.topic_id||'')===String(topicId);
            });
            const logs=(state.value.question_logs||[]).filter(x=>{
                if(subtopicId)return String(x.subtopic_id||'')===String(subtopicId);
                return String(x.topic_id||'')===String(topicId);
            });
            const seconds=sessions.reduce((n,x)=>n+Number(x.seconds||0),0);
            const solved=logs.reduce((n,x)=>n+Number(x.solved||0),0);
            const correct=logs.reduce((n,x)=>n+Number(x.correct||0),0);
            return {seconds,solved,accuracy:solved?Math.round(correct/solved*100):null};
        }

        function subjectStats(subjectId) {
            const topics = (state.value.topics || []).filter(t => t.subject_id === subjectId);
            const topicIds = new Set(topics.map(t => String(t.id)));
            const sessions = (state.value.recent_sessions || []).filter(x => topicIds.has(String(x.topic_id || '')) || String(x.subject_id || '') === String(subjectId));
            const logs = (state.value.question_logs || []).filter(x => topicIds.has(String(x.topic_id || '')) || String(x.subject_id || '') === String(subjectId));
            const seconds = sessions.reduce((n, x) => n + Number(x.seconds || 0), 0);
            const solved = logs.reduce((n, x) => n + Number(x.solved || 0), 0);
            const correct = logs.reduce((n, x) => n + Number(x.correct || 0), 0);
            return { seconds, solved, accuracy: solved ? Math.round(correct / solved * 100) : null };
        }

        function openTopicQuestions(subjectName, topicName = '') {
            questionSubject.value = subjectName || '';
            questionTopic.value = topicName || '';
            questionSituation.value = '';
            questionIndex.value = 0;
            activeTab.value = 'questions';
        }

        function youtubeEmbed(url){
            try{
                const u=new URL(url);
                const host=u.hostname.replace(/^www\./,'');
                let id='';
                if(host==='youtu.be')id=u.pathname.replace(/^\//,'').split('/')[0];
                else if(host.endsWith('youtube.com')){
                    id=u.searchParams.get('v')||'';
                    if(!id&&u.pathname.startsWith('/shorts/'))id=u.pathname.split('/')[2]||'';
                    if(!id&&u.pathname.startsWith('/embed/'))id=u.pathname.split('/')[2]||'';
                }
                return id?'https://www.youtube.com/embed/'+encodeURIComponent(id):'';
            }catch{return '';}
        }

        async function postponeReview(review){
            const current=review.next_date||new Date().toISOString().slice(0,10);
            const suggested=new Date(current+'T12:00:00');
            suggested.setDate(suggested.getDate()+1);
            const next=prompt('Nova data da revisão (AAAA-MM-DD)',suggested.toISOString().slice(0,10));
            if(!next)return;
            await run(()=>api(base.value+'/reviews/'+review.id,{method:'PATCH',body:jsonBody({next_date:next,completed:false})}),'Revisão adiada.');
        }

        async function loadQuestionHistory(question){
            if(questionHistory.value[question.id]){
                const next={...questionHistory.value};delete next[question.id];questionHistory.value=next;return;
            }
            busy.value=true;
            try{
                const data=await api(base.value+'/questions/'+question.id+'/history'+(activeContestId.value?'?contest_id='+encodeURIComponent(activeContestId.value):''));
                questionHistory.value={...questionHistory.value,[question.id]:data.history||[]};
            }catch(e){message.value=e.message;}finally{busy.value=false;}
        }

        function insertNotebookFormatting(form,prefix){
            const current=String(form.content||'');
            form.content=current+(current&&!current.endsWith('\n')?'\n':'')+prefix;
        }

        function formatNotebookContent(text) {
            if (!text) return '<span class="text-zinc-400 italic">Sem conteúdo anotado.</span>';
            let html = String(text)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');

            // Law Highlights (Grifos de Lei)
            html = html.replace(/&lt;mark class="mentoria-grifo--amarelo"&gt;([\s\S]*?)&lt;\/mark&gt;/gi, '<mark class="mentoria-grifo mentoria-grifo--amarelo">$1</mark>');
            html = html.replace(/&lt;mark class="mentoria-grifo--verde"&gt;([\s\S]*?)&lt;\/mark&gt;/gi, '<mark class="mentoria-grifo mentoria-grifo--verde">$1</mark>');
            html = html.replace(/&lt;mark class="mentoria-grifo--vermelho"&gt;([\s\S]*?)&lt;\/mark&gt;/gi, '<mark class="mentoria-grifo mentoria-grifo--vermelho">$1</mark>');
            html = html.replace(/==y:([\s\S]*?)==/g, '<mark class="mentoria-grifo mentoria-grifo--amarelo">$1</mark>');
            html = html.replace(/==g:([\s\S]*?)==/g, '<mark class="mentoria-grifo mentoria-grifo--verde">$1</mark>');
            html = html.replace(/==v:([\s\S]*?)==/g, '<mark class="mentoria-grifo mentoria-grifo--verde">$1</mark>');
            html = html.replace(/==r:([\s\S]*?)==/g, '<mark class="mentoria-grifo mentoria-grifo--vermelho">$1</mark>');
            html = html.replace(/==([\s\S]*?)==/g, '<mark class="mentoria-grifo mentoria-grifo--amarelo">$1</mark>');

            // Law badges (Art., Súmula, §)
            html = html.replace(/\b(Art\.\s*\d+[º\w\.\-]*)/g, '<span class="mentoria-doc-law-badge">⚖️ $1</span>');
            html = html.replace(/\b(Súmula Vinculante\s*n?º?\s*\d+)/gi, '<span class="mentoria-doc-law-badge">📜 $1</span>');

            // Headings
            html = html.replace(/^### (.*$)/gim, '<h3 class="mentoria-doc-h3">$1</h3>');
            html = html.replace(/^## (.*$)/gim, '<h2 class="mentoria-doc-h2">$1</h2>');
            html = html.replace(/^# (.*$)/gim, '<h1 class="mentoria-doc-h1">$1</h1>');

            // Quotes
            html = html.replace(/^>\s*(.*$)/gim, '<blockquote class="mentoria-doc-quote">$1</blockquote>');

            // Lists
            html = html.replace(/^[•\-\*]\s+(.*$)/gim, '<li class="mentoria-doc-li">$1</li>');

            // Bold, italic, underline, strike
            html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
            html = html.replace(/__(.+?)__/g, '<span class="underline">$1</span>');
            html = html.replace(/~~(.+?)~~/g, '<span class="line-through">$1</span>');

            // Mind map placeholder badge in text reader
            html = html.replace(/\[mapa\][\s\S]*?\[\/mapa\]/gi, '<div class="my-2 rounded-lg bg-sky-500/10 border border-sky-500/20 p-2 text-xs text-sky-400 font-semibold flex items-center gap-1.5">🧠 Diagrama de Mapa Mental disponível na aba acima</div>');

            // Newlines
            html = html.replace(/\n/g, '<br>');

            return html;
        }

        function parseMindMap(content, defaultTitle = 'Mapa Mental') {
            if (!content) return null;
            let str = String(content).trim();
            const matchBlock = str.match(/\[mapa\]([\s\S]*?)\[\/mapa\]/i);
            if (matchBlock) {
                str = matchBlock[1].trim();
            }

            const lines = str.split('\n').map(l => l.trimEnd()).filter(l => l.trim().length > 0);
            if (!lines.length) return null;

            let root = defaultTitle;
            const branches = [];
            let currentBranch = null;
            const branchColors = ['cyan', 'emerald', 'purple', 'amber', 'rose'];
            let colorIdx = 0;

            for (let i = 0; i < lines.length; i++) {
                const rawLine = lines[i];
                const trimmed = rawLine.trim();

                // Check if root line (first line without dash/bullet/heading)
                if (i === 0 && !trimmed.startsWith('-') && !trimmed.startsWith('•') && !trimmed.startsWith('*')) {
                    root = trimmed.replace(/^#+\s*/, '');
                    continue;
                }

                const isChild = rawLine.match(/^(\s{2,}|\t|\-\-)/) || trimmed.startsWith('--');
                const isBranch = (!isChild && (trimmed.startsWith('-') || trimmed.startsWith('•') || trimmed.startsWith('*') || trimmed.startsWith('##'))) || trimmed.startsWith('#');

                if (isChild && currentBranch) {
                    const cleanText = trimmed.replace(/^(\-\-|\-|\*|•)\s*/, '');
                    if (cleanText) currentBranch.children.push(cleanText);
                } else if (isBranch) {
                    const cleanText = trimmed.replace(/^(##?|\-|\*|•)\s*/, '');
                    if (cleanText) {
                        currentBranch = {
                            title: cleanText,
                            color: branchColors[colorIdx % branchColors.length],
                            children: [],
                        };
                        colorIdx++;
                        branches.push(currentBranch);
                    }
                } else if (!currentBranch) {
                    root = trimmed;
                } else if (trimmed) {
                    currentBranch.children.push(trimmed);
                }
            }

            if (!branches.length && lines.length > 1) {
                branches.push({
                    title: 'Tópicos Principais',
                    color: 'cyan',
                    children: lines.slice(1).map(l => l.trim().replace(/^[\-\•\*#]+\s*/, '')),
                });
            }

            return branches.length ? { root, branches } : null;
        }

        function renderMindMapTree(mapData) {
            if (!mapData || !mapData.branches?.length) {
                return h('div', { class: 'mentoria-mindmap-canvas flex items-center justify-center text-center p-8 text-zinc-500' }, [
                    h('div', [
                        h('div', { class: 'text-3xl mb-2' }, '🧠'),
                        h('strong', { class: 'block text-sm' }, 'Nenhum mapa mental estruturado ainda'),
                        h('p', { class: 'text-xs text-zinc-400 mt-1 max-w-sm' },
                            'Adicione tópicos no editor usando "- Ramo Principal" e "-- Sub-item", ou insira um bloco [mapa] para visualizar a árvore interativa do INSANUS Planner.'
                        ),
                    ]),
                ]);
            }

            return h('div', { class: 'mentoria-mindmap-canvas' }, [
                h('div', { class: 'mentoria-mindmap-tree' }, [
                    h('div', { class: 'mentoria-mindmap-root' }, [
                        h('span', { class: 'mr-2' }, '🧠'),
                        h('span', mapData.root),
                    ]),
                    h('div', { class: 'mentoria-mindmap-branches' }, mapData.branches.map(branch => {
                        return h('div', { class: 'mentoria-mindmap-branch mentoria-mindmap-branch--' + branch.color }, [
                            h('div', { class: 'mentoria-mindmap-branch-header' }, [
                                h('span', branch.title),
                                h('span', { class: 'text-[11px] opacity-75' }, branch.children.length + ' item(s)'),
                            ]),
                            branch.children.length ? h('div', { class: 'mentoria-mindmap-children' }, branch.children.map(child => {
                                return h('div', { class: 'mentoria-mindmap-leaf' }, [
                                    h('span', { class: 'text-sky-500 shrink-0' }, '•'),
                                    h('span', child),
                                ]);
                            })) : null,
                        ]);
                    })),
                ]),
            ]);
        }

        function periodRange(period){
            const end=new Date();const start=new Date(end);
            if(period==='7d')start.setDate(end.getDate()-6);
            else if(period==='14d')start.setDate(end.getDate()-13);
            else if(period==='30d')start.setDate(end.getDate()-29);
            else start.setFullYear(2020,0,1);
            return {start:start.toISOString().slice(0,10),end:end.toISOString().slice(0,10)};
        }

        async function loadMetricsPeriod(period){
            metricsPeriod.value=period;
            const range=periodRange(period);
            const qs=new URLSearchParams({contest_id:activeContestId.value||'',start:range.start,end:range.end}).toString();
            busy.value=true;message.value='';
            try{
                const [summary,timelineResponse,subjectsResponse]=await Promise.all([
                    api(base.value+'/metrics/summary?'+qs),
                    api(base.value+'/metrics/timeline?'+qs),
                    activeContestId.value?api(base.value+'/metrics/subjects?'+qs):Promise.resolve({subjects:[]}),
                ]);
                metricsData.value={
                    summary,
                    timeline:timelineResponse.days||timelineResponse.timeline||timelineResponse||[],
                    subjects:subjectsResponse.subjects||subjectsResponse||[],
                };
            }catch(e){message.value=e.message;}finally{busy.value=false;}
        }

        function metricReportText(note=''){
            const m=metricsData.value.summary||{};
            const subjectLines=(metricsData.value.subjects||[]).slice().sort((a,b)=>Number(b.seconds||0)-Number(a.seconds||0)).slice(0,8)
                .map(s=>'• '+s.name+': '+fmtHours(s.seconds||0)+' · '+(s.accuracy??'—')+'%').join('\n');
            return [
                '📊 *RELATÓRIO DE DESEMPENHO — Mentoria*',
                activeContest.value?'🎯 *Concurso:* '+activeContest.value.name:'',
                '📅 *Período:* '+(m.period?.start?fmtDate(m.period.start)+' a '+fmtDate(m.period.end):metricsPeriod.value),
                '⏱️ *Tempo estudado:* '+fmtHours(m.seconds_studied||0),
                '📝 *Questões:* '+(m.questions_solved||0),
                '✅ *Taxa de acerto:* '+(m.accuracy??0)+'%',
                '📚 *Edital:* '+(m.edict_percentage||0)+'%',
                '🔥 *Sequência:* '+(m.current_streak||0)+' dias',
                '🎯 *Simulados:* média '+(m.mock_average??'—')+'%',
                subjectLines?'\n*Distribuição por matéria*\n'+subjectLines:'',
                note.trim()?'\n💬 *Parecer / observações:*\n'+note.trim():'',
            ].filter(Boolean).join('\n');
        }

        function printMetricsReport(note=''){
            const m=metricsData.value.summary||{};
            const subjects=metricsData.value.subjects||[];
            const w=window.open('','_blank','width=900,height=1000');
            if(!w){message.value='O navegador bloqueou a janela do relatório.';return;}
            const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
            const rows=subjects.map(s=>'<tr><td>'+esc(s.name)+'</td><td>'+esc(fmtHours(s.seconds||0))+'</td><td>'+esc(s.questions||0)+'</td><td>'+esc((s.accuracy??'—')+'%')+'</td><td>'+esc((s.coverage||0)+'%')+'</td></tr>').join('');
            w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Relatório Mentoria</title><style>body{font-family:Arial,sans-serif;color:#172033;padding:36px}h1{margin:0 0 6px}.muted{color:#667085}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:24px 0}.box{border:1px solid #ddd;border-radius:10px;padding:14px}.box b{display:block;font-size:22px;margin-top:6px}table{width:100%;border-collapse:collapse}th,td{padding:9px;border-bottom:1px solid #eee;text-align:left}.note{white-space:pre-wrap;background:#f6f7f9;padding:16px;border-radius:10px;margin-top:24px}</style></head><body>'
                +'<h1>Relatório de Desempenho — Mentoria</h1><div class="muted">'+esc(activeContest.value?.name||'Preparação')+' · '+esc(m.period?.start?fmtDate(m.period.start)+' a '+fmtDate(m.period.end):metricsPeriod.value)+'</div>'
                +'<div class="grid"><div class="box">Tempo<b>'+esc(fmtHours(m.seconds_studied||0))+'</b></div><div class="box">Questões<b>'+esc(m.questions_solved||0)+'</b></div><div class="box">Acerto<b>'+esc((m.accuracy??0)+'%')+'</b></div><div class="box">Edital<b>'+esc((m.edict_percentage||0)+'%')+'</b></div></div>'
                +'<h2>Desempenho por matéria</h2><table><thead><tr><th>Matéria</th><th>Tempo</th><th>Questões</th><th>Acerto</th><th>Edital</th></tr></thead><tbody>'+rows+'</tbody></table>'
                +(note.trim()?'<div class="note"><b>Parecer / observações</b><br>'+esc(note).replace(/\n/g,'<br>')+'</div>':'')
                +'<script>window.onload=()=>window.print()<\/script></body></html>');
            w.document.close();
        }

        async function copyMetricsImage(){
            const m=metricsData.value.summary||{};
            const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1350;
            const x=canvas.getContext('2d');x.fillStyle='#101217';x.fillRect(0,0,1080,1350);
            x.fillStyle='#fff';x.font='bold 48px Arial';x.fillText('Mentoria',60,90);
            x.font='bold 34px Arial';x.fillText(activeContest.value?.name||'Minhas métricas',60,145);
            const rows=[['Tempo',fmtHours(m.seconds_studied||0)],['Questões',String(m.questions_solved||0)],['Acerto',(m.accuracy??0)+'%'],['Edital',(m.edict_percentage||0)+'%']];
            rows.forEach((row,i)=>{const y=240+i*130;x.fillStyle='#242832';x.fillRect(60,y,960,95);x.fillStyle='#aaa';x.font='22px Arial';x.fillText(row[0],85,y+32);x.fillStyle='#fff';x.font='bold 38px Arial';x.fillText(row[1],85,y+75);});
            x.fillStyle='#fff';x.font='bold 28px Arial';x.fillText('Desempenho por matéria',60,800);
            (metricsData.value.subjects||[]).slice(0,6).forEach((s,i)=>{const y=850+i*70;x.fillStyle='#ccc';x.font='20px Arial';x.fillText(String(s.name).slice(0,42),60,y);x.fillStyle='#fff';x.fillText((s.accuracy??'—')+'%',880,y);});
            const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
            if(!blob)return;
            try{
                if(typeof ClipboardItem==='undefined')throw new Error();
                await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
                success.value='Imagem das métricas copiada.';
            }catch{
                const a=document.createElement('a');const url=URL.createObjectURL(blob);a.href=url;a.download='metricas-mentoria.png';a.click();URL.revokeObjectURL(url);
                success.value='Imagem das métricas baixada.';
            }
        }

        function openMetricsDetail(start,end,title) {
            modalState.value={type:'metricsDetail',start,end,title};
        }

        async function toggleProgress(type,item,studied) {
            await run(()=>api(base.value+'/edict-progress/'+item.id,{
                method:'PATCH',
                body:jsonBody({item_type:type,studied}),
            }),studied?'Conteúdo concluído e revisões agendadas.':'Conteúdo reaberto.');
        }

        async function toggleMaterial(material) {
            await run(()=>api(base.value+'/materials/'+material.id+'/progress',{
                method:'PATCH',
                body:jsonBody({completed:!material.completed}),
            }));
        }

        function openScheduleGenerator() {
            const selected={}; const affinity={}; const priorities={};
            activeSubjects.value.forEach(s=>{selected[s.id]=true;affinity[s.id]=50;priorities[s.id]='media';});
            modalState.value={
                type:'schedule',
                form:{
                    mode: capabilities.value.includes('cronograma_inteligente')?'ciclo_inteligente':'agendado',
                    minutes:60,max_topics:0,repetitions:1,goal:80,alert_goal:true,
                    hours:{seg:2,ter:2,qua:2,qui:2,sex:2,sab:0,dom:0},
                    selected,affinity,priorities,
                },
            };
        }

        async function generateSchedule(m) {
            if (!activeContestId.value) { message.value='Selecione um concurso.'; return; }
            const f=m.form;
            await run(()=>api(base.value+'/schedules/generate',{
                method:'POST',
                body:jsonBody({
                    contest_id:activeContestId.value,
                    mode:f.mode,
                    configuration:{
                        tipo:f.mode,
                        horas:f.hours,
                        minutosTopico:Number(f.minutes||60),
                        maxTopicosDia:Number(f.max_topics||0),
                        repeticoesEdital:Number(f.repetitions||1),
                        metaAcertos:Number(f.goal||80),
                        alertaMetaHabilitado:!!f.alert_goal,
                        materiasSelecionadas:f.selected,
                        materiaAfinidade:f.affinity,
                        materiaPrioridades:f.priorities,
                    },
                }),
            }),'Cronograma gerado.');
            closeModal();
        }

        function openOnboarding(step = 1) {
            const selected = {}; const affinity = {}; const priorities = {}; const levels = {};
            activeSubjects.value.forEach(s => {
                selected[s.id] = true;
                affinity[s.id] = 60;
                priorities[s.id] = 'media';
                levels[s.id] = 'intermediario';
            });
            modalState.value = {
                type: 'onboarding',
                step: step || 1,
                form: {
                    contest_id: activeContestId.value || (contests.value[0]?.id || ''),
                    mode: capabilities.value.includes('cronograma_inteligente') ? 'ciclo_inteligente' : 'agendado',
                    preset: 'moderado',
                    minutes: 60,
                    max_topics: 0,
                    repetitions: 1,
                    goal: 80,
                    alert_goal: true,
                    hours: { seg: 2, ter: 2, qua: 2, qui: 2, sex: 2, sab: 2, dom: 0 },
                    selected,
                    affinity,
                    priorities,
                    levels,
                },
            };
        }

        async function finishOnboarding(m) {
            const f = m.form;
            const cid = f.contest_id || activeContestId.value;
            if (!cid) { message.value = 'Selecione um concurso.'; return; }
            if (cid !== activeContestId.value) {
                await setContest(cid);
            }
            await run(() => api(base.value + '/schedules/generate', {
                method: 'POST',
                body: jsonBody({
                    contest_id: cid,
                    mode: f.mode,
                    configuration: {
                        tipo: f.mode,
                        horas: f.hours,
                        minutosTopico: Number(f.minutes || 60),
                        maxTopicosDia: Number(f.max_topics || 0),
                        repeticoesEdital: Number(f.repetitions || 1),
                        metaAcertos: Number(f.goal || 80),
                        alertaMetaHabilitado: !!f.alert_goal,
                        materiasSelecionadas: f.selected,
                        materiaAfinidade: f.affinity,
                        materiaPrioridades: f.priorities,
                    },
                }),
            }), 'Plano de estudos gerado com sucesso!');
            try {
                localStorage.setItem('mentoria_onboarded_' + cid, '1');
            } catch (e) {}
            closeModal();
            activeTab.value = 'schedule';
        }

        async function reprogramSchedule() {
            await run(()=>api(base.value+'/schedules/reprogram',{
                method:'POST',
                body:jsonBody({contest_id:activeContestId.value||null}),
            }),'Pendências reprogramadas.');
        }

        function dateFromToday(days=0) {
            const date=new Date();
            date.setHours(12,0,0,0);
            date.setDate(date.getDate()+days);
            return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');
        }

        function openScheduleCompletion(item) {
            modalState.value={type:'scheduleCompletion',item,form:{
                minutes:Math.max(1,Number(item.duration_minutes||60)),
                solved:'',correct:'',notes:'',
            }};
        }

        async function saveScheduleCompletion(m, completed) {
            const item=m.item;
            const f=m.form;
            const minutes=Math.max(1,Number(f.minutes||0));
            const solved=Math.max(0,Number(f.solved||0));
            const correct=Math.min(solved,Math.max(0,Number(f.correct||0)));
            const tomorrow=dateFromToday(1);

            await run(async()=>{
                await api(base.value+'/study-sessions',{
                    method:'POST',
                    body:jsonBody({
                        contest_id:activeContestId.value||null,
                        subject_id:item.subject_id||null,
                        topic_id:item.topic_id||null,
                        subtopic_id:item.subtopic_id||null,
                        schedule_item_id:item.id,
                        seconds:minutes*60,
                        mode:'cronograma',
                        notes:f.notes||null,
                        origin:'cronograma',
                    }),
                });
                if(solved>0){
                    await api(base.value+'/question-logs',{
                        method:'POST',
                        body:jsonBody({
                            contest_id:activeContestId.value||null,
                            subject_id:item.subject_id||null,
                            topic_id:item.topic_id||null,
                            subtopic_id:item.subtopic_id||null,
                            solved,correct,wrong:Math.max(0,solved-correct),origin:'cronograma',
                        }),
                    });
                }

                await api(base.value+'/schedule-items/'+item.id,{
                    method:'PATCH',body:jsonBody({status:'concluido',create_session:false}),
                });

                if(completed){
                    const targetId=item.subtopic_id||item.topic_id;
                    if(targetId){
                        await api(base.value+'/edict-progress/'+targetId,{
                            method:'PATCH',body:jsonBody({item_type:item.subtopic_id?'subtopico':'topico',studied:true}),
                        });
                    }
                    return;
                }

                const schedule=state.value.schedule;
                if(!schedule?.id)throw new Error('Cronograma ativo não encontrado.');
                await api(base.value+'/schedules/'+schedule.id+'/items',{
                    method:'POST',body:jsonBody({
                        planned_date:tomorrow,
                        cycle_position:item.cycle_position||null,
                        subject_id:item.subject_id||null,
                        topic_id:item.topic_id||null,
                        subtopic_id:item.subtopic_id||null,
                        duration_minutes:Math.max(1,Number(item.duration_minutes||minutes)),
                        priority:item.priority||0,
                        position:item.position||0,
                        status:'pendente',
                    }),
                });
                await api(base.value+'/schedules/reprogram',{
                    method:'POST',body:jsonBody({contest_id:activeContestId.value||null,from_date:tomorrow}),
                });
            },completed?'Assunto concluído e estudo registrado.':'Estudo registrado; o restante foi adiado.');
            closeModal();
        }

        async function toggleScheduleItem(item) {
            if(item.status!=='concluido'){
                openScheduleCompletion(item);
                return;
            }
            await run(()=>api(base.value+'/schedule-items/'+item.id,{
                method:'PATCH',body:jsonBody({status:'pendente',create_session:false}),
            }));
        }

        function openReview(item=null) {
            modalState.value={type:'review',item,form:{
                contest_id:item?.contest_id||activeContestId.value||'',
                subject_id:item?.subject_id||activeSubjects.value[0]?.id||'',
                topic_id:item?.topic_id||'',
                subtopic_id:item?.subtopic_id||'',
                current_cycle:item?.current_cycle??0,
                next_date:item?.next_date||'',
                previous_percentage:item?.previous_percentage??'',
                notes:item?.notes||'',
                completed:!!item?.completed,
            }};
        }

        async function saveReview(m) {
            const f=m.form;
            const payload={
                contest_id:f.contest_id,
                subject_id:f.subject_id,
                topic_id:f.topic_id||null,
                subtopic_id:f.subtopic_id||null,
                current_cycle:Number(f.current_cycle||0),
                next_date:f.next_date||null,
                previous_percentage:f.previous_percentage===''?null:Number(f.previous_percentage),
                notes:f.notes||null,
                completed:!!f.completed,
            };
            await run(()=>api(m.item?base.value+'/reviews/'+m.item.id:base.value+'/reviews',{
                method:m.item?'PATCH':'POST',body:jsonBody(payload),
            }),'Revisão salva.');
            closeModal();
        }

        async function completeReview(review) {
            const percentage=prompt('Percentual de acertos na revisão (opcional)',review.previous_percentage??'');
            await run(()=>api(base.value+'/reviews/'+review.id,{
                method:'PATCH',
                body:jsonBody({completed:true,previous_percentage:percentage===''?null:Number(percentage)}),
            }),'Revisão concluída.');
        }

        async function deleteReview(review) {
            if(!confirm('Excluir esta revisão?'))return;
            await run(()=>api(base.value+'/reviews/'+review.id,{method:'DELETE'}));
        }

        async function rateFlashcard(card,quality){
            const result=await run(()=>api(base.value+'/flashcards/'+card.id+'/review',{
                method:'POST',body:jsonBody({quality,contest_id:activeContestId.value||null}),
            }),'Revisão registrada.',false);
            state.value={...state.value,cards:(state.value.cards||[]).map(item=>item.id===card.id?{...item,next_review:result?.next_review||new Date(Date.now()+86400000).toISOString().slice(0,10)}:item)};
            flashcardRevealed.value=false;
        }

        function openOwnDeck(item=null) {
            modalState.value={type:'ownDeck',item,form:{
                name:item?.name||'',description:item?.description||'',icon:item?.icon||'📚',position:item?.position??0,parent_deck_id:item?.parent_deck_id||'',
            }};
        }

        async function saveOwnDeck(m) {
            await run(()=>api(m.item?base.value+'/flashcard-decks/'+m.item.id:base.value+'/flashcard-decks',{
                method:m.item?'PATCH':'POST',
                body:jsonBody({...m.form,parent_deck_id:m.form.parent_deck_id||null}),
            }),'Baralho salvo.');
            closeModal();
        }

        async function deleteOwnDeck(deck) {
            if(!confirm('Excluir seu baralho e cartões?'))return;
            await run(()=>api(base.value+'/flashcard-decks/'+deck.id,{method:'DELETE'}));
        }

        function openOwnCard(deck,item=null) {
            modalState.value={type:'ownCard',deck,item,form:{
                front:item?.front||'',back:item?.back||'',hint:item?.hint||'',
                tags:Array.isArray(item?.tags)?item.tags.join(', '):'',
            }};
        }

        async function saveOwnCard(m) {
            const f=m.form;
            const payload={
                front:f.front,back:f.back,hint:f.hint||null,
                tags:f.tags.split(',').map(x=>x.trim()).filter(Boolean),
            };
            const url=m.item?base.value+'/flashcards/'+m.item.id:base.value+'/flashcard-decks/'+m.deck.id+'/cards';
            await run(()=>api(url,{method:m.item?'PATCH':'POST',body:jsonBody(payload)}),'Flashcard salvo.');
            closeModal();
        }

        async function deleteOwnCard(card) {
            if(!confirm('Excluir este flashcard?'))return;
            await run(()=>api(base.value+'/flashcards/'+card.id,{method:'DELETE'}));
        }

        async function answerQuestion(question) {
            const answer=answerDrafts.value[question.id];
            if(!answer){message.value='Escolha/digite uma resposta.';return;}
            const result=await run(()=>api(base.value+'/questions/'+question.id+'/answer',{
                method:'POST',body:jsonBody({answer,contest_id:activeContestId.value||question.contest_id||null}),
            }),'',false);
            questionResults.value={...questionResults.value,[question.id]:result};
        }

        function resetFlashcardSession() {
            flashcardIndex.value=0;
            flashcardRevealed.value=false;
        }

        function resetQuestionSession() {
            questionIndex.value=0;
            answerDrafts.value={};
            questionResults.value={};
            questionHistory.value={};
        }

        function nextQuestion(total) {
            questionIndex.value=Math.min(total,questionIndex.value+1);
        }

        function prevQuestion() {
            questionIndex.value=Math.max(0,questionIndex.value-1);
        }

        async function loadQuestionStats() {
            const url=base.value+'/questions/statistics'+(activeContestId.value?'?contest_id='+encodeURIComponent(activeContestId.value):'');
            busy.value=true;
            try{questionStats.value=await api(url);}catch(e){message.value=e.message;}finally{busy.value=false;}
        }

        function openMock(item=null) {
            modalState.value={type:'mock',item,form:{
                contest_id:item?.contest_id||activeContestId.value||'',name:item?.name||'',
                type:item?.type||'realizado',performed_at:item?.performed_at||'',link:item?.link||'',
                notes:item?.notes||'',percentage:item?.percentage??'',time_minutes:item?.time_minutes??'',
                questions_done:item?.questions_done??'',subject_results_json:'',
            }};
        }

        async function saveMock(m) {
            const f=m.form;
            let subjectResults=[];
            if(f.subject_results_json.trim()){
                try{subjectResults=JSON.parse(f.subject_results_json);}catch{message.value='JSON de resultados por matéria inválido.';return;}
            }
            const payload={
                contest_id:f.contest_id||null,name:f.name,type:f.type,performed_at:f.performed_at||null,
                link:f.link||null,notes:f.notes||null,percentage:f.percentage===''?null:Number(f.percentage),
                time_minutes:f.time_minutes===''?null:Number(f.time_minutes),
                questions_done:f.questions_done===''?null:Number(f.questions_done),
                ...(f.subject_results_json.trim()?{subject_results:subjectResults}:{}),
            };
            await run(()=>api(m.item?base.value+'/mock-exams/'+m.item.id:base.value+'/mock-exams',{
                method:m.item?'PATCH':'POST',body:jsonBody(payload),
            }),'Simulado salvo.');
            closeModal();
        }

        async function deleteMock(item) {
            if(!confirm('Excluir este simulado?'))return;
            await run(()=>api(base.value+'/mock-exams/'+item.id,{method:'DELETE'}));
        }

        function openNotebook(item = null, mode = 'editor') {
            modalState.value = {
                type: 'notebook',
                item,
                mode: mode || 'editor',
                form: {
                    title: item?.title || '',
                    folder: item?.folder || 'Geral',
                    content: item?.content || '',
                    color: item?.color || '#4f8ef7',
                    edict_id: item?.edict_id || '',
                    subject_id: item?.subject_id || '',
                    topic_id: item?.topic_id || '',
                },
            };
        }

        function openNewMindmap() {
            modalState.value = {
                type: 'notebook',
                item: null,
                mode: 'mindmap',
                form: {
                    title: 'Novo Mapa Mental',
                    folder: 'Mapas Mentais',
                    color: '#8b5cf6',
                    edict_id: '',
                    subject_id: '',
                    topic_id: '',
                    content: [
                        '# Tema Central',
                        '- 1. Conceito e Regra Geral',
                        '  -- Definição legal',
                        '  -- ==y:Regra geral aplicável==',
                        '- 2. Requisitos e Prazos',
                        '  -- Requisito formal',
                        '  -- ==g:Prazo legal: 15 dias==',
                        '- 3. Exceções e Pegadinhas',
                        '  -- ==r:CUIDADO: não se aplica a casos de urgência==',
                        '  -- Súmula Vinculante aplicável',
                    ].join('\n'),
                },
            };
        }

        async function saveNotebook(m) {
            const f=m.form;
            await run(()=>api(m.item?base.value+'/notebooks/'+m.item.id:base.value+'/notebooks',{
                method:m.item?'PATCH':'POST',
                body:jsonBody({...f,edict_id:f.edict_id||null,subject_id:f.subject_id||null,topic_id:f.topic_id||null}),
            }),'Caderno salvo.');
            closeModal();
        }

        async function deleteNotebook(item) {
            if(!confirm('Excluir este caderno?'))return;
            await run(()=>api(base.value+'/notebooks/'+item.id,{method:'DELETE'}));
        }

        function openHistorySession(item=null) {
            modalState.value={type:'historySession',item,form:{
                contest_id:item?.contest_id||activeContestId.value||'',subject_id:item?.subject_id||'',
                topic_id:item?.topic_id||'',subtopic_id:item?.subtopic_id||'',
                minutes:item?Math.round(Number(item.seconds||0)/60):30,mode:item?.mode||'estudo',notes:item?.notes||'',
                studied_at:item?.studied_at?String(item.studied_at).slice(0,16):'',
            }};
        }

        async function saveHistorySession(m) {
            const f=m.form;
            const payload={contest_id:f.contest_id||null,subject_id:f.subject_id||null,topic_id:f.topic_id||null,subtopic_id:f.subtopic_id||null,
                seconds:Math.max(60,Number(f.minutes||0)*60),mode:f.mode||'estudo',notes:f.notes||null,studied_at:f.studied_at||undefined,origin:'manual'};
            await run(()=>api(m.item?base.value+'/study-sessions/'+m.item.id:base.value+'/study-sessions',{
                method:m.item?'PATCH':'POST',body:jsonBody(payload),
            }),'Sessão salva.');
            closeModal();
        }

        async function deleteHistorySession(item) {
            if(!confirm('Excluir esta sessão?'))return;
            await run(()=>api(base.value+'/study-sessions/'+item.id,{method:'DELETE'}));
        }

        function openQuestionLog(item=null) {
            modalState.value={type:'questionLog',item,form:{
                contest_id:item?.contest_id||activeContestId.value||'',subject_id:item?.subject_id||'',
                topic_id:item?.topic_id||'',subtopic_id:item?.subtopic_id||'',
                solved:item?.solved??'',correct:item?.correct??'',recorded_at:item?.recorded_at?String(item.recorded_at).slice(0,16):'',
            }};
        }

        async function saveQuestionLog(m) {
            const f=m.form; const solved=Number(f.solved||0); const correct=Math.min(solved,Number(f.correct||0));
            await run(()=>api(m.item?base.value+'/question-logs/'+m.item.id:base.value+'/question-logs',{
                method:m.item?'PATCH':'POST',body:jsonBody({
                    contest_id:f.contest_id||null,subject_id:f.subject_id||null,topic_id:f.topic_id||null,subtopic_id:f.subtopic_id||null,
                    solved,correct,wrong:Math.max(0,solved-correct),recorded_at:f.recorded_at||undefined,origin:'manual',
                }),
            }),'Lançamento salvo.');
            closeModal();
        }

        async function deleteQuestionLog(item) {
            if(!confirm('Excluir este lançamento?'))return;
            await run(()=>api(base.value+'/question-logs/'+item.id,{method:'DELETE'}));
        }

        function renderContestSelector() {
            if(!contests.value.length)return null;
            return h('div',{class:'mentoria-contest-selector'},[
                h('span',{class:'text-xs font-semibold text-zinc-500'},'Concurso ativo:'),
                h('select',{
                    value:activeContestId.value,
                    class:'mentoria-contest-selector__control rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                    onChange:e=>setContest(e.target.value),
                },contests.value.map(c=>h('option',{value:c.id},c.name))),
            ]);
        }

        function renderStreakWidget() {
            const streak = Number(state.value.metrics_summary?.current_streak || 0);
            const todaySec = Number(state.value.metrics_summary?.seconds_today || 0);
            const todayKey = new Date().toISOString().slice(0, 10);
            const plannedToday = (state.value.schedule_items || state.value.all_schedule_items || [])
                .filter(i => String(i.planned_date || '').slice(0, 10) === todayKey)
                .reduce((acc, i) => acc + (Number(i.duration_minutes || 0) * 60), 0);
            const targetSec = plannedToday > 0 ? plannedToday : 7200;
            const pct = Math.min(100, Math.round((todaySec / targetSec) * 100));
            const goalDone = todaySec >= targetSec;

            return h('div', { class: 'mentoria-header-consistency' }, [
                h('div', {
                    class: cn('mentoria-streak-widget', streak > 0 ? 'mentoria-streak-widget--active' : ''),
                    title: streak > 0 ? `${streak} dia(s) seguidos de estudo! Mantenha a chama acesa.` : 'Estude hoje para iniciar sua sequência!',
                }, [
                    h('span', { class: 'mentoria-streak-widget__icon', 'aria-hidden': 'true' }, '🔥'),
                    h('span', { class: 'mentoria-streak-widget__count' }, streak > 0 ? `${streak} ${streak === 1 ? 'dia' : 'dias'}` : '0 dias'),
                    h('span', { class: 'mentoria-streak-widget__label' }, streak > 0 ? 'seguidos' : 'sequência'),
                ]),
                h('div', {
                    class: cn('mentoria-daily-goal-widget', goalDone && 'mentoria-daily-goal-widget--done'),
                    title: `Meta de hoje: ${fmtHours(todaySec)} de ${fmtHours(targetSec)} planejados (${pct}%)`,
                }, [
                    h('div', { class: 'mentoria-daily-goal-widget__header' }, [
                        h('span', { class: 'mentoria-daily-goal-widget__title' }, goalDone ? 'Meta batida! 🎉' : 'Meta de hoje:'),
                        h('strong', { class: 'mentoria-daily-goal-widget__numbers' }, `${fmtHours(todaySec)} / ${fmtHours(targetSec)}`),
                        h('span', { class: 'mentoria-daily-goal-widget__percent' }, `${pct}%`),
                    ]),
                    h('div', { class: 'mentoria-daily-goal-widget__track' }, [
                        h('div', { class: 'mentoria-daily-goal-widget__fill', style: { width: pct + '%' } }),
                    ]),
                ]),
            ]);
        }

        function renderMissionHero() {
            const todayKey = new Date().toISOString().slice(0, 10);
            const pendingSchedule = (state.value.schedule_items || []).filter(i => i.status === 'pendente');
            const pendingReviews = (state.value.reviews || []).filter(r => !r.completed && r.next_date && r.next_date <= todayKey);

            let mission = null;
            if (pendingReviews.length > 0) {
                const rev = pendingReviews[0];
                const sName = (state.value.subjects || []).find(s => s.id === rev.subject_id)?.name || 'Disciplina';
                const tName = (state.value.topics || []).find(t => t.id === rev.topic_id)?.name;
                const subName = (state.value.subtopics || []).find(st => st.id === rev.subtopic_id)?.name;
                mission = {
                    type: 'review',
                    badge: 'Revisão Prioritária',
                    title: [sName, tName, subName].filter(Boolean).join(' › '),
                    duration: 30,
                    hint: rev.next_date < todayKey ? 'Atrasada desde ' + fmtDate(rev.next_date) : 'Agendada para hoje',
                    actionLabel: 'Iniciar Revisão no Timer',
                    startTimer: () => openTimer({
                        subject_id: rev.subject_id || '',
                        topic_id: rev.topic_id || '',
                        subtopic_id: rev.subtopic_id || '',
                        mode: 'revisao',
                    }),
                    complete: () => completeReview(rev),
                };
            } else if (pendingSchedule.length > 0) {
                const item = pendingSchedule[0];
                const sName = (state.value.subjects || []).find(s => s.id === item.subject_id)?.name || 'Disciplina';
                const tName = (state.value.topics || []).find(t => t.id === item.topic_id)?.name;
                const subName = (state.value.subtopics || []).find(st => st.id === item.subtopic_id)?.name;
                const isRev = Boolean(item.scheduled_review_id);
                mission = {
                    type: 'schedule',
                    badge: isRev ? '↻ Revisão do Ciclo' : '⚡ Próxima Atividade do Ciclo',
                    title: [sName, tName, subName].filter(Boolean).join(' › '),
                    duration: item.duration_minutes || 45,
                    hint: item.planned_date ? 'Planejada para ' + fmtDate(item.planned_date) : 'Ciclo #' + (item.cycle_position || item.position),
                    actionLabel: 'Iniciar Missão Agora',
                    startTimer: () => openTimer({
                        subject_id: item.subject_id || '',
                        topic_id: item.topic_id || '',
                        subtopic_id: item.subtopic_id || '',
                        mode: isRev ? 'revisao' : 'estudo',
                    }),
                    complete: () => openScheduleCompletion(item),
                };
            }

            if (!mission) {
                const hasSchedule = (state.value.schedule_items || []).length > 0;
                if (!hasSchedule) {
                    return h('div', { class: 'mentoria-mission-hero' }, [
                        h('div', { class: 'mentoria-mission-hero__header' }, [
                            h('span', { class: 'mentoria-mission-hero__badge' }, [renderIcon('sparkles', '', 14), 'Diagnóstico Inicial']),
                        ]),
                        h('div', { class: 'mentoria-mission-hero__title' }, 'Vamos estruturar a sua rota de aprovação!'),
                        h('div', { class: 'mentoria-mission-hero__meta' }, [
                            h('span', {}, 'Você ainda não possui um cronograma ativo. Complete o diagnóstico guiado de 4 passos para calibrar seu ritmo, nível de cada matéria e metas semanais.'),
                        ]),
                        h('div', { class: 'mentoria-mission-hero__actions' }, [
                            btn('✨ Iniciar Diagnóstico do Aluno', () => openOnboarding(), 'primary', { icon: 'zap' }),
                            btn('Explorar Edital', () => activeTab.value = 'edict', 'ghost', { icon: 'target' }),
                        ]),
                    ]);
                }

                return h('div', { class: 'mentoria-mission-hero' }, [
                    h('div', { class: 'mentoria-mission-hero__header' }, [
                        h('span', { class: 'mentoria-mission-hero__badge' }, [renderIcon('sparkles', '', 14), 'Dia em Dia']),
                    ]),
                    h('div', { class: 'mentoria-mission-hero__title' }, 'Você está com todas as missões concluídas!'),
                    h('div', { class: 'mentoria-mission-hero__meta' }, [
                        h('span', {}, 'Nenhuma atividade ou revisão pendente no seu cronograma ativo.'),
                    ]),
                    h('div', { class: 'mentoria-mission-hero__actions' }, [
                        btn('Abrir Timer Livre', () => openTimer(), 'primary', { icon: 'timer' }),
                        btn('Revisar Questões', () => activeTab.value = 'questions', 'ghost', { icon: 'questions' }),
                        capabilities.value.includes('cronograma') || capabilities.value.includes('cronograma_inteligente')
                            ? btn('Ajustar Cronograma', () => activeTab.value = 'schedule', 'ghost', { icon: 'schedule' })
                            : null,
                    ]),
                ]);
            }

            return h('div', { class: 'mentoria-mission-hero' }, [
                h('div', { class: 'mentoria-mission-hero__header' }, [
                    h('span', { class: 'mentoria-mission-hero__badge' }, [renderIcon('target', '', 14), mission.badge]),
                    h('span', { class: 'text-xs text-sky-400 font-medium' }, mission.hint),
                ]),
                h('div', { class: 'mentoria-mission-hero__title' }, mission.title),
                h('div', { class: 'mentoria-mission-hero__meta' }, [
                    h('span', { class: 'flex items-center gap-1' }, [renderIcon('timer', '', 14), mission.duration + ' min sugeridos']),
                    h('span', { class: 'text-zinc-500' }, '·'),
                    h('span', {}, 'Foco recomendado: ' + (mission.type === 'review' ? 'Revisão ativa e fixação' : 'Estudo teórico e questões')),
                ]),
                h('div', { class: 'mentoria-mission-hero__actions' }, [
                    h('button', {
                        type: 'button',
                        class: 'mentoria-mission-hero__btn-main',
                        onClick: mission.startTimer,
                    }, [renderIcon('play', '', 16), mission.actionLabel]),
                    mission.complete ? btn('Registrar conclusão', mission.complete, 'ghost', { icon: 'check' }) : null,
                    btn('Ver cronograma', () => activeTab.value = 'schedule', 'ghost', { icon: 'schedule' }),
                ]),
            ]);
        }

        function renderDashboard() {
            const m=state.value.metrics_summary||{};
            const contest=activeContest.value;
            const cd=countdown(contest?.exam_date);
            const now=new Date();const day=now.getDay();const monday=new Date(now);monday.setDate(now.getDate()-(day===0?6:day-1));
            const todayKey=now.toISOString().slice(0,10);
            const week=Array.from({length:7},(_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);const key=d.toISOString().slice(0,10);const sec=(state.value.recent_sessions||[]).filter(s=>String(s.studied_at||'').slice(0,10)===key).reduce((n,s)=>n+Number(s.seconds||0),0);return {key,label:['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'][i],seconds:sec};});
            const subjectRows=(state.value.metrics_subjects||[]).slice(0,10);
            const radarSubjects=(state.value.metrics_subjects||[]).filter(s=>Number(s.questions||0)>0||s.accuracy!==null).slice(0,7).map(s=>({
                label:s.name,
                value:s.accuracy??0,
            }));
            return h('div',{class:'space-y-5'},[
                contest?card([h('div',{class:'flex flex-wrap items-center justify-between gap-4'},[
                    h('div',[h('div',{class:'text-xs font-semibold uppercase tracking-wide text-sky-500'},contest.group||'foco'),h('h2',{class:'mt-1 text-xl font-bold'},contest.name),h('p',{class:'text-xs text-zinc-400'},[contest.board,contest.position].filter(Boolean).join(' · '))]),
                    cd?h('div',{class:'grid grid-cols-3 gap-2 text-center'},[stat('Dias',cd.days,'','blue'),stat('Horas',cd.hours,'','indigo'),stat('Min',cd.minutes,'','cyan')]):contest.pre_notice?badge('Pré-edital','amber'):null,
                ])]):null,
                renderMissionHero(),
                h('div',{class:'grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8'},[
                    stat('Hoje',fmtHours(m.seconds_today||0), '', 'blue', 'history'),
                    stat('Questões hoje',m.questions_today||0, '', 'cyan', 'questions'),
                    stat('30 dias',fmtHours(m.seconds_studied||0), '', 'indigo', 'schedule'),
                    stat('Acerto',(m.accuracy??0)+'%', '', (m.accuracy>=75?'emerald':m.accuracy>=50?'amber':'rose'), 'check', { meter: m.accuracy ?? 0 }),
                    stat('Sequência',(m.current_streak||0)+' dias', '', 'flame', 'flame'),
                    stat('Edital',(m.edict_percentage||0)+'%', '', 'purple', 'edicts', { meter: m.edict_percentage ?? 0 }),
                    stat('Simulados',m.mocks_completed||0, '', 'blue', 'mocks'),
                    stat('Média',m.mock_average===null?'—':m.mock_average+'%', '', 'teal', 'metrics', { meter: m.mock_average }),
                ]),
                card([sectionTitle('Ações rápidas','Registre estudo ou abra os módulos principais.'),h('div',{class:'flex flex-wrap gap-2'},[
                    btn('Abrir timer',()=>openTimer(),'primary',{icon:'timer'}),
                    capabilities.value.includes('cronograma')||capabilities.value.includes('cronograma_inteligente')?btn('Cronograma',()=>activeTab.value='schedule','ghost',{icon:'schedule'}):null,
                    capabilities.value.includes('revisoes')?btn('Revisões',()=>activeTab.value='reviews','ghost',{icon:'reviews'}):null,
                    capabilities.value.includes('questoes')?btn('Questões',()=>activeTab.value='questions','ghost',{icon:'questions'}):null,
                    capabilities.value.includes('flashcards')?btn('Flashcards',()=>activeTab.value='flashcards','ghost',{icon:'flashcards'}):null,
                ])]),
                radarSubjects.length>=3?h('div',{class:'grid gap-4 lg:grid-cols-2'},[
                    card([sectionTitle('Estudo semanal','Tempo registrado de segunda a domingo.'),h('div',{class:'grid grid-cols-7 gap-2'},week.map(d=>{
                        const pct=Math.min(100,d.seconds/7200*100);
                        const isToday = d.key === todayKey;
                        return h('div',{class:'mentoria-week-col'+(isToday?' border-sky-500/50 bg-sky-500/5': '')},[
                            h('div',{class:'font-semibold text-xs'},d.label),
                            h('div',{class:'mentoria-week-bar-container'},[
                                h('div',{class:'mentoria-week-bar-fill',style:{height:Math.max(d.seconds > 0 ? 6 : 0, pct)+'%'}}),
                            ]),
                            h('div',{class:'text-[11px] text-zinc-400'},fmtHours(d.seconds)),
                        ]);
                    }))]),
                    card([sectionTitle('Radar de disciplinas','Equilíbrio e rendimento nas matérias com questões.'),renderRadarChart(radarSubjects,{size:280})]),
                ]):card([sectionTitle('Estudo semanal','Tempo registrado de segunda a domingo.'),h('div',{class:'grid grid-cols-7 gap-2'},week.map(d=>{
                    const pct=Math.min(100,d.seconds/7200*100);
                    const isToday = d.key === todayKey;
                    return h('div',{class:'mentoria-week-col'+(isToday?' border-sky-500/50 bg-sky-500/5': '')},[
                        h('div',{class:'font-semibold text-xs'},d.label),
                        h('div',{class:'mentoria-week-bar-container'},[
                            h('div',{class:'mentoria-week-bar-fill',style:{height:Math.max(d.seconds > 0 ? 6 : 0, pct)+'%'}}),
                        ]),
                        h('div',{class:'text-[11px] text-zinc-400'},fmtHours(d.seconds)),
                    ]);
                }))]),
                card([sectionTitle('Matérias do edital','Cobertura e desempenho por disciplina.'),subjectRows.length?h('div',{class:'space-y-2'},subjectRows.map(s=>h('div',{class:'grid gap-2 rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800 md:grid-cols-[1fr_120px_90px_180px]'},[
                    h('strong',s.name),h('span','Tempo: '+fmtHours(s.seconds||0)),h('span','Acerto: '+(s.accuracy??'—')+'%'),progressBar(s.coverage||0,'Edital'),
                ]))):empty('Estude e resolva questões para preencher as métricas por matéria.')]),
            ]);
        }

        function renderInlineMaterials(items) {
            const arr=safeJson(items,[]);
            if(!Array.isArray(arr)||!arr.length)return null;
            return h('div',{class:'mt-2 flex flex-wrap gap-1'},arr.map((mat,i)=>{
                const label=typeof mat==='string'?mat:(mat.nome||mat.name||mat.titulo||mat.url||'Material '+(i+1));
                const url=typeof mat==='object'?(mat.url||mat.link):null;
                return url?h('a',{href:url,target:'_blank',rel:'noopener',class:'text-xs text-sky-600 underline'},label):badge(label);
            }));
        }

        function renderEdict() {
            if(!activeEdicts.value.length)return card([sectionTitle('Edital verticalizado'),empty('Nenhum edital atribuído para este concurso.')]);
            const query=edictQuery.value.trim().toLowerCase();
            const allUnits=activeTopics.value.flatMap(topic=>{
                const subs=activeSubtopics.value.filter(sub=>sub.topic_id===topic.id);
                return subs.length?subs.map(sub=>progressMap.value.get('subtopico:'+sub.id)): [progressMap.value.get('topico:'+topic.id)];
            });
            const completedUnits=allUnits.filter(unit=>unit?.studied).length;
            const edictProgress=allUnits.length?Math.round(completedUnits/allUnits.length*100):0;
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Edital verticalizado','Acompanhe cada matéria, tópico e subtópico em uma única trilha.'),
                    h('div',{class:'mb-4 grid gap-3 sm:grid-cols-3'},[
                        stat('Progresso do edital',edictProgress+'%','','purple','edicts',{meter:edictProgress}),
                        stat('Conteúdos concluídos',completedUnits+' de '+allUnits.length,'','emerald','check'),
                        stat('Disciplinas ativas',activeSubjects.value.length,'','blue','products'),
                    ]),
                    progressBar(edictProgress,'Edital concluído'),
                    h('input',{value:edictQuery.value,placeholder:'🔍 Buscar tópico ou subtópico…',class:'mt-4 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onInput:e=>edictQuery.value=e.target.value}),
                ]),
                ...activeEdicts.value.map(edict=>card([
                    sectionTitle(edict.name,edict.version?'Versão '+edict.version:''),
                    h('div',{class:'space-y-4'},activeSubjects.value.filter(s=>s.edict_id===edict.id).map(subject=>{
                        const allSubjectTopics=activeTopics.value.filter(t=>t.subject_id===subject.id);
                        const ownTopics=allSubjectTopics.filter(t=>{
                            if(!query)return true;
                            if(String(t.name).toLowerCase().includes(query))return true;
                            return activeSubtopics.value.some(st=>st.topic_id===t.id&&String(st.name).toLowerCase().includes(query));
                        });
                        if(query&&!ownTopics.length&&!String(subject.name).toLowerCase().includes(query))return null;
                        const units=allSubjectTopics.flatMap(t=>{const subs=activeSubtopics.value.filter(st=>st.topic_id===t.id);return subs.length?subs.map(st=>!!progressMap.value.get('subtopico:'+st.id)?.studied):[!!progressMap.value.get('topico:'+t.id)?.studied];});
                        const pct=units.length?units.filter(Boolean).length/units.length*100:0;
                        const subStats=subjectStats(subject.id);
                        const completedCount=units.filter(Boolean).length;
                        const totalCount=units.length;
                        const masteryTier=pct>=100
                            ?{label:'🏆 Dominado',tone:'green'}
                            :pct>=70
                                ?{label:'⭐ Avançado',tone:'sky'}
                                :pct>=40
                                    ?{label:'📈 Em progresso',tone:'amber'}
                                    :{label:'🌱 Iniciando',tone:'zinc'};

                        return h('section',{class:'mentoria-mastery-card'},[
                            h('div',{class:'mentoria-mastery-card__header'},[
                                h('div',{class:'mentoria-mastery-card__info'},[
                                    h('div',{class:'flex flex-wrap items-center gap-2'},[
                                        h('span',{class:'mentoria-mastery-card__subject-badge'},[
                                            h('span',{},'📘'),
                                            h('span',{},'Disciplina'),
                                        ]),
                                        badge(masteryTier.label,masteryTier.tone),
                                    ]),
                                    h('h3',{class:'mentoria-mastery-card__title'},subject.name),
                                    renderInlineMaterials(subject.materials),
                                    h('div',{class:'mentoria-mastery-card__stats-bar'},[
                                        h('span',{class:'mentoria-mastery-pill mentoria-mastery-pill--highlight'},'✓ '+completedCount+' de '+totalCount+' concluídos'),
                                        h('span',{class:'mentoria-mastery-pill'},'⏱ '+fmtHours(subStats.seconds)+' estudados'),
                                        h('span',{class:'mentoria-mastery-pill'},'📝 '+subStats.solved+' questões'+(subStats.accuracy!==null?' ('+subStats.accuracy+'% acerto)':'')),
                                    ]),
                                ]),
                                h('div',{class:'mentoria-mastery-card__gauge'},[
                                    h('span',{class:'mentoria-mastery-card__gauge-number text-sky-600 dark:text-sky-400'},Math.round(pct)+'%'),
                                    h('div',{class:'w-36'},[progressBar(pct)]),
                                ]),
                            ]),
                            h('div',{class:'mentoria-mastery-card__body'},ownTopics.map(topic=>{
                                const allSubs=activeSubtopics.value.filter(st=>st.topic_id===topic.id);
                                const subs=allSubs.filter(st=>!query||String(topic.name).toLowerCase().includes(query)||String(st.name).toLowerCase().includes(query));
                                const p=progressMap.value.get('topico:'+topic.id);
                                const isCompleted=!!p?.studied;
                                const stats=itemStats(topic.id);
                                return h('div',{class:'mentoria-topic-card'},[
                                    h('div',{class:'mentoria-topic-row'},[
                                        !allSubs.length?h('button',{
                                            type:'button',
                                            title:isCompleted?'Reabrir tópico':'Concluir tópico',
                                            class:cn('mentoria-topic-check',isCompleted&&'mentoria-topic-check--completed'),
                                            onClick:()=>toggleProgress('topico',topic,!isCompleted),
                                        },[
                                            isCompleted?h('span',{class:'mentoria-topic-check__icon'},'✓'):null,
                                        ]):null,
                                        h('div',{class:'mentoria-topic-content'},[
                                            h('div',{class:cn('mentoria-topic-title',isCompleted&&'mentoria-topic-title--completed')},topic.name),
                                            renderInlineMaterials(topic.materials),
                                            h('div',{class:'mentoria-topic-meta'},[
                                                h('span',{class:'mentoria-topic-meta-pill'},'⏱ '+fmtHours(stats.seconds)),
                                                h('span',{class:'mentoria-topic-meta-pill'},'📝 '+stats.solved+' questões'+(stats.accuracy!==null?' · '+stats.accuracy+'% acerto':'')),
                                                isCompleted?badge('✓ Concluído','green'):null,
                                            ]),
                                            topic.notes?h('p',{class:'mt-1 text-xs text-zinc-500'},topic.notes):null,
                                        ]),
                                        h('div',{class:'mentoria-topic-actions'},[
                                            btn('⏱️ Timer',()=>openTimer({subject_id:subject.id,topic_id:topic.id,subtopic_id:'',mode:'estudo'}),'soft'),
                                            btn('📝 Questões',()=>openTopicQuestions(subject.name,topic.name),'ghost'),
                                            btn('+ Estudo',()=>openQuickStudy(subject.id,topic.id,''),'ghost'),
                                        ]),
                                    ]),
                                    subs.length?h('div',{class:'mentoria-subtopics-tree'},subs.map(sub=>{
                                        const sp=progressMap.value.get('subtopico:'+sub.id);
                                        const subCompleted=!!sp?.studied;
                                        const ss=itemStats(topic.id,sub.id);
                                        return h('div',{class:'mentoria-subtopic-row'},[
                                            h('button',{
                                                type:'button',
                                                title:subCompleted?'Reabrir subtópico':'Concluir subtópico',
                                                class:cn('mentoria-topic-check',subCompleted&&'mentoria-topic-check--completed'),
                                                onClick:()=>toggleProgress('subtopico',sub,!subCompleted),
                                            },[
                                                subCompleted?h('span',{class:'mentoria-topic-check__icon'},'✓'):null,
                                            ]),
                                            h('div',{class:'mentoria-topic-content'},[
                                                h('div',{class:cn('mentoria-topic-title',subCompleted&&'mentoria-topic-title--completed')},sub.name),
                                                h('div',{class:'mentoria-topic-meta'},[
                                                    h('span',{class:'mentoria-topic-meta-pill'},'⏱ '+fmtHours(ss.seconds)),
                                                    h('span',{class:'mentoria-topic-meta-pill'},'📝 '+ss.solved+(ss.accuracy!==null?' · '+ss.accuracy+'%':'')),
                                                    subCompleted?badge('✓','green'):null,
                                                ]),
                                                renderInlineMaterials(sub.materials),
                                            ]),
                                            h('div',{class:'mentoria-topic-actions'},[
                                                btn('⏱️',()=>openTimer({subject_id:subject.id,topic_id:topic.id,subtopic_id:sub.id,mode:'estudo'}),'soft'),
                                                btn('📝',()=>openTopicQuestions(subject.name,sub.name),'ghost'),
                                                btn('+ Estudo',()=>openQuickStudy(subject.id,topic.id,sub.id),'ghost'),
                                            ]),
                                        ]);
                                    })):null,
                                ]);
                            })),
                        ]);
                    }).filter(Boolean)),
                ])),
            ]);
        }

        function renderMaterials() {
            const list=state.value.materials||[];const types=[...new Set(list.map(m=>m.type))];
            if(!materialType.value&&types.length)materialType.value=types[0];
            const byType=materialType.value?list.filter(m=>m.type===materialType.value):list;
            const folders=[...new Set(byType.map(m=>m.folder||'Geral'))].sort();
            if(materialFolder.value&&!folders.includes(materialFolder.value))materialFolder.value='';
            const filtered=materialFolder.value?byType.filter(m=>(m.folder||'Geral')===materialFolder.value):byType;
            const perPage=12,total=Math.max(1,Math.ceil(filtered.length/perPage));materialPage.value=Math.min(materialPage.value,total);
            const pageItems=filtered.slice((materialPage.value-1)*perPage,materialPage.value*perPage);
            const labels={youtube:'Vídeos',arquivo:'Arquivos',texto:'Textos',link:'Links'};
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Materiais de apoio','Organizados por tipo e pasta. Seu progresso fica salvo individualmente.'),
                    h('div',{class:'flex flex-wrap gap-2'},types.map(t=>btn(labels[t]||t,()=>{materialType.value=t;materialFolder.value='';materialPage.value=1;},materialType.value===t?'primary':'ghost'))),
                    folders.length?h('div',{class:'mt-3 flex flex-wrap gap-2'},[btn('Todas as pastas',()=>{materialFolder.value='';materialPage.value=1;},!materialFolder.value?'soft':'ghost'),...folders.map(f=>btn('📁 '+f,()=>{materialFolder.value=f;materialPage.value=1;},materialFolder.value===f?'soft':'ghost'))]):null,
                ]),
                pageItems.length?h('div',{class:'grid gap-3 md:grid-cols-2 xl:grid-cols-3'},pageItems.map(mat=>h('div',{class:'rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900'},[
                    h('div',{class:'flex items-start justify-between gap-2'},[h('div',[h('strong',mat.title),h('div',{class:'text-xs text-zinc-500'},(mat.folder||'Geral')+' · '+(labels[mat.type]||mat.type))]),mat.completed?badge('Concluído','green'):badge('Pendente','amber')]),
                    mat.description?h('p',{class:'mt-2 text-xs text-zinc-500'},mat.description):null,
                    mat.type==='texto'&&mat.text?h('div',{class:'mt-3 max-h-40 overflow-auto whitespace-pre-wrap rounded-lg bg-zinc-50 p-3 text-sm dark:bg-zinc-800'},mat.text):null,
                    h('div',{class:'mt-4 flex flex-wrap gap-2'},[
                        mat.type==='youtube'&&youtubeEmbed(mat.url)?btn('▶ Assistir',()=>modalState.value={type:'video',title:mat.title,url:youtubeEmbed(mat.url)},'primary'):null,
                        mat.download_url?h('a',{href:mat.download_url,class:'rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white'},'Baixar'):mat.url&&mat.type!=='youtube'?h('a',{href:mat.url,target:'_blank',rel:'noopener',class:'rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white'},'Abrir'):null,
                        mat.type==='youtube'&&mat.url?h('a',{href:mat.url,target:'_blank',rel:'noopener',class:'rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold dark:border-zinc-700'},'YouTube'):null,
                        btn(mat.completed?'Marcar pendente':'Concluir',()=>toggleMaterial(mat),mat.completed?'ghost':'success'),
                    ]),
                ]))):empty('Nenhum material nesta pasta/tipo.'),
                filtered.length>perPage?card([h('div',{class:'flex items-center justify-center gap-2'},[btn('←',()=>materialPage.value=Math.max(1,materialPage.value-1),'ghost',{disabled:materialPage.value<=1}),h('span',{class:'text-xs'},'Página '+materialPage.value+' de '+total),btn('→',()=>materialPage.value=Math.min(total,materialPage.value+1),'ghost',{disabled:materialPage.value>=total})])]):null,
            ]);
        }

        function itemLabel(item) {
            const subject=(state.value.subjects||[]).find(s=>s.id===item.subject_id)?.name;
            const topic=(state.value.topics||[]).find(t=>t.id===item.topic_id)?.name;
            const sub=(state.value.subtopics||[]).find(st=>st.id===item.subtopic_id)?.name;
            return [subject,topic,sub].filter(Boolean).join(' › ')||'Estudo programado';
        }

        function renderSchedule() {
            const schedule=state.value.schedule;
            const items=(state.value.schedule_items||[]).filter(i=>scheduleStatus.value==='todos'||i.status===scheduleStatus.value);
            const reviewForItem=item=>(state.value.reviews||[]).find(review=>String(review.id)===String(item.scheduled_review_id));
            const renderItem=item=>{
                const review=reviewForItem(item);
                const isReview=Boolean(item.scheduled_review_id);
                return h('div',{class:'flex flex-wrap items-center justify-between gap-3 rounded-lg p-3 '+(isReview?'bg-violet-50 ring-1 ring-violet-200 dark:bg-violet-950 dark:ring-violet-800':'bg-zinc-50 dark:bg-zinc-800')},[
                    h('div',{class:'min-w-0'},[h('div',{class:'font-medium'},(isReview?'↻ Revisão · ':'')+itemLabel(item)),h('div',{class:'text-xs text-zinc-500'},(item.planned_date?fmtDate(item.planned_date):'Ciclo #'+(item.cycle_position||item.position))+' · '+(item.duration_minutes||0)+' min'+(isReview?' · ciclo '+(review?.current_cycle||0):' · prioridade '+(item.priority||0)))]),
                    h('div',{class:'flex items-center gap-1'},isReview?[
                        badge(item.status,item.status==='concluido'?'green':'violet'),
                        btn('⏱',()=>openTimer({subject_id:item.subject_id||'',topic_id:item.topic_id||'',subtopic_id:item.subtopic_id||'',mode:'revisao'}),'ghost'),
                        review&&!review.completed?btn('Revisar',()=>completeReview(review),'success'):null,
                        review&&!review.completed?btn('Adiar',()=>postponeReview(review),'warning'):null,
                    ]:[
                        badge(item.status,item.status==='concluido'?'green':item.status==='ignorado'?'zinc':'amber'),
                        btn('⏱',()=>openTimer({subject_id:item.subject_id||'',topic_id:item.topic_id||'',subtopic_id:item.subtopic_id||'',mode:'estudo'}),'ghost'),
                        btn(item.status==='concluido'?'Reabrir':'Concluir',()=>toggleScheduleItem(item),item.status==='concluido'?'ghost':'success'),
                    ]),
                ]);
            };
            const today=new Date();
            const baseMonth=new Date(today.getFullYear(),today.getMonth()+scheduleMonthOffset.value,1);
            const year=baseMonth.getFullYear(),month=baseMonth.getMonth(),days=new Date(year,month+1,0).getDate(),first=(new Date(year,month,1).getDay()+6)%7;
            const cells=[...Array(first).fill(null),...Array.from({length:days},(_,i)=>i+1)];
            const monthLabel=baseMonth.toLocaleDateString('pt-BR',{month:'long',year:'numeric'});
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Cronograma',schedule?'Versão '+schedule.version+' · '+schedule.type:'Nenhum cronograma ativo',h('div',{class:'flex flex-wrap gap-2'},[
                        schedule?btn('Reprogramar pendências',reprogramSchedule,'ghost'):null,
                        btn('✨ Assistente de Diagnóstico', () => openOnboarding(), 'primary'),
                        btn(schedule?'Gerador avançado':'Gerar cronograma',openScheduleGenerator,'ghost'),
                    ])),
                    schedule?h('div',{class:'flex flex-wrap items-center gap-2'},[
                        badge(schedule.state,'sky'),badge(schedule.type,'violet'),
                        btn('Lista',()=>scheduleView.value='list',scheduleView.value==='list'?'primary':'ghost'),
                        schedule.type!=='ciclo_inteligente'?btn('Calendário',()=>scheduleView.value='calendar',scheduleView.value==='calendar'?'primary':'ghost'):null,
                        ...['todos','pendente','concluido'].map(v=>btn(v==='todos'?'Todos':v==='pendente'?'Pendentes':'Concluídos',()=>scheduleStatus.value=v,scheduleStatus.value===v?'soft':'ghost')),
                    ]):empty('Gere seu cronograma a partir do edital e da carga horária semanal.'),
                ]),
                schedule&&scheduleView.value==='calendar'&&schedule.type!=='ciclo_inteligente'?card([
                    h('div',{class:'mb-4 flex items-center justify-between gap-2'},[
                        btn('◀',()=>scheduleMonthOffset.value--,'ghost'),
                        h('strong',{class:'capitalize'},monthLabel),
                        h('div',{class:'flex gap-2'},[btn('Hoje',()=>scheduleMonthOffset.value=0,'ghost'),btn('▶',()=>scheduleMonthOffset.value++,'ghost')]),
                    ]),
                    h('div',{class:'mb-2 flex gap-3 text-[11px] text-zinc-500'},[
                        h('span','■ Atividade'),h('span',{class:'text-violet-600'},'■ Revisão programada'),
                    ]),
                    h('div',{class:'grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-zinc-500'},['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'].map(d=>h('div',{class:'p-1'},d))),
                    h('div',{class:'mt-1 grid grid-cols-7 gap-1'},cells.map(day=>{
                        if(!day)return h('div',{class:'min-h-24'});
                        const key=year+'-'+String(month+1).padStart(2,'0')+'-'+String(day).padStart(2,'0');
                        const dayItems=items.filter(i=>String(i.planned_date||'').slice(0,10)===key);
                        const entries=dayItems.map(item=>{
                            const review=reviewForItem(item);
                            return {
                                kind:item.scheduled_review_id?'review':'study',
                                item,
                                review,
                                label:(item.scheduled_review_id?'↻ Revisão · ':'')+itemLabel(item),
                            };
                        });
                        return h('button',{
                            type:'button',
                            class:'min-h-24 rounded-lg border border-zinc-200 p-2 text-left dark:border-zinc-700 '+(key===new Date().toISOString().slice(0,10)?'ring-2 ring-sky-500':''),
                            onClick:()=>entries.length&&(modalState.value={type:'scheduleDay',date:key,entries}),
                        },[
                            h('div',{class:'text-xs font-semibold'},String(day)),
                            ...entries.slice(0,3).map(entry=>h('div',{
                                class:'mt-1 truncate rounded px-1 py-0.5 text-[10px] '+(entry.kind==='review'
                                    ?'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-200'
                                    :'bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-200'),
                            },entry.label)),
                            entries.length>3?h('div',{class:'mt-1 text-[10px] text-zinc-500'},'+'+(entries.length-3)+' itens'):null,
                        ]);
                    })),
                ]):schedule?card([
                    sectionTitle(schedule.type==='ciclo_inteligente'?'Ordem do ciclo':'Atividades',items.length+' item(ns)'),
                    schedule.type==='ciclo_inteligente'?h('div',{class:'mb-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3'},activeSubjects.value.map(subject=>{
                        const subjectItems=items.filter(i=>String(i.subject_id||'')===String(subject.id));
                        const done=subjectItems.filter(i=>i.status==='concluido').length;
                        const seconds=(state.value.recent_sessions||[]).filter(s=>String(s.subject_id||'')===String(subject.id)).reduce((n,s)=>n+Number(s.seconds||0),0);
                        return h('div',{class:'rounded-lg border border-zinc-200 p-3 text-xs dark:border-zinc-700'},[
                            h('div',{class:'flex justify-between gap-2'},[h('strong',subject.name),badge('Peso '+(subject.weight||1),(Number(subject.weight||1)>2?'red':'sky'))]),
                            h('div',{class:'mt-2 text-zinc-500'},done+'/'+subjectItems.length+' itens concluídos · '+fmtHours(seconds)),
                        ]);
                    })):null,
                    items.length?h('div',{class:'space-y-2'},items.map(renderItem)):empty('Nenhuma atividade com este filtro.'),
                ]):null,
            ]);
        }

        function renderReviews() {
            let list=state.value.reviews||[];
            if(reviewContestFilter.value!=='todos')list=list.filter(r=>String(r.contest_id||'')===String(reviewContestFilter.value));
            const todayKey=new Date().toISOString().slice(0,10);
            const groups=[
                ['Atrasadas',list.filter(r=>!r.completed&&r.next_date&&r.next_date<todayKey),'red'],
                ['Hoje',list.filter(r=>!r.completed&&r.next_date===todayKey),'amber'],
                ['Futuras',list.filter(r=>!r.completed&&(!r.next_date||r.next_date>todayKey)),'sky'],
                ['Concluídas',list.filter(r=>r.completed),'green'],
            ];

            const nextDays=Array.from({length:7},(_,i)=>{
                const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+i);
                const key=d.toISOString().slice(0,10);
                return {key,date:d,count:list.filter(r=>!r.completed&&String(r.next_date||'')===key).length};
            });

            const logs=(state.value.question_logs||[]).filter(log=>reviewContestFilter.value==='todos'||String(log.contest_id||'')===String(reviewContestFilter.value));
            const subjectPerformance=(state.value.subjects||[]).map(subject=>{
                const own=logs.filter(log=>String(log.subject_id||'')===String(subject.id));
                const solved=own.reduce((n,x)=>n+Number(x.solved||0),0);
                const correct=own.reduce((n,x)=>n+Number(x.correct||0),0);
                return {subject,solved,accuracy:solved?Math.round(correct/solved*100):null};
            }).filter(x=>x.solved>=10&&x.accuracy!==null&&x.accuracy<65).sort((a,b)=>a.accuracy-b.accuracy);

            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Revisões','Geradas pelos prazos configurados no concurso ou criadas manualmente.',btn('Nova revisão',()=>openReview())),
                    h('div',{class:'flex flex-wrap gap-2'},[
                        btn('Todos',()=>reviewContestFilter.value='todos',reviewContestFilter.value==='todos'?'primary':'ghost'),
                        ...contests.value.map(co=>btn(co.name,()=>reviewContestFilter.value=co.id,String(reviewContestFilter.value)===String(co.id)?'primary':'ghost')),
                    ]),
                ]),
                subjectPerformance.length?card([
                    sectionTitle('⚠ Rendimento baixo em questões','Matérias abaixo de 65% após pelo menos 10 questões.'),
                    h('div',{class:'space-y-2'},subjectPerformance.map(row=>h('div',{class:'flex flex-wrap items-center justify-between gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm dark:border-red-900 dark:bg-red-950'},[
                        h('div',[h('strong',row.subject.name),h('div',{class:'text-xs text-zinc-500'},row.solved+' questões resolvidas')]),
                        h('div',{class:'flex items-center gap-2'},[badge(row.accuracy+'%','red'),h('span',{class:'text-xs font-semibold text-red-600'},'REVISAR COM PRIORIDADE')]),
                    ]))),
                ]):null,
                card([
                    sectionTitle('Agenda — próximos 7 dias','Quantidade de revisões previstas.'),
                    h('div',{class:'grid grid-cols-7 gap-2'},nextDays.map((day,i)=>h('div',{class:'rounded-lg border p-2 text-center text-xs '+(i===0?'border-sky-400 bg-sky-50 dark:bg-sky-950':'border-zinc-200 dark:border-zinc-700')},[
                        h('div',{class:'font-semibold'},['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'][day.date.getDay()]),
                        h('div',{class:'mt-1 font-mono text-lg font-bold'},String(day.date.getDate())),
                        h('div',{class:'mt-1 text-zinc-500'},day.count?day.count+' revisão'+(day.count!==1?'ões':''):'·'),
                    ]))),
                ]),
                h('div',{class:'grid gap-3 sm:grid-cols-2 lg:grid-cols-4'},[
                    stat('Atrasadas',groups[0][1].length),stat('Hoje',groups[1][1].length),stat('Futuras',groups[2][1].length),stat('Concluídas',groups[3][1].length),
                ]),
                ...groups.map(([label,items])=>card([
                    sectionTitle(label,items.length+' revisão(ões)'),
                    items.length?h('div',{class:'space-y-2'},items.slice(0,150).map(r=>{
                        const subject=(state.value.subjects||[]).find(s=>s.id===r.subject_id)?.name||'Matéria';
                        const topic=(state.value.topics||[]).find(t=>t.id===r.topic_id)?.name;
                        const sub=(state.value.subtopics||[]).find(st=>st.id===r.subtopic_id)?.name;
                        return h('div',{class:'flex flex-wrap items-center justify-between gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800'},[
                            h('div',[h('strong',subject),h('div',{class:'text-xs text-zinc-500'},[topic,sub].filter(Boolean).join(' › ')+' · ciclo '+r.current_cycle+' · '+fmtDate(r.next_date)),r.previous_percentage!==null?h('div',{class:'text-[11px] text-zinc-500'},'Último desempenho: '+r.previous_percentage+'%'):null]),
                            h('div',{class:'flex flex-wrap gap-1'},[
                                !r.completed?btn('⏱',()=>openTimer({subject_id:r.subject_id||'',topic_id:r.topic_id||'',subtopic_id:r.subtopic_id||'',mode:'revisao'}),'ghost'):null,
                                !r.completed?btn('Revisar',()=>completeReview(r),'success'):null,
                                !r.completed?btn('Adiar',()=>postponeReview(r),'warning'):null,
                                btn('Abrir edital',()=>{if(r.contest_id)setContest(r.contest_id);activeTab.value='edict';},'ghost'),
                                btn('Editar',()=>openReview(r),'ghost'),btn('×',()=>deleteReview(r),'danger'),
                            ]),
                        ]);
                    })):empty('Nenhuma revisão nesta categoria.'),
                ])),
            ]);
        }

        function renderFlashcards() {
            const decks=state.value.decks||[];const cards=state.value.cards||[];const ownDecks=decks.filter(d=>d.owner_type==='aluno'&&Number(d.student_id)===Number(state.value.student?.id));const now=new Date().toISOString().slice(0,10);const due=cards.filter(c=>(!deckFilter.value||c.deck_id===deckFilter.value)&&(!c.next_review||c.next_review<=now));
            const currentIndex=Math.min(flashcardIndex.value,Math.max(0,due.length-1));
            const current=due[currentIndex]||null;
            return h('div',{class:'space-y-4'},[
                card([sectionTitle('Flashcards','Revele, avalie a dificuldade e siga para o próximo cartão.',btn('Meu novo baralho',()=>openOwnDeck(),'primary',{icon:'flashcards'})),field('Baralho',h('select',{value:deckFilter.value,class:'w-full max-w-md rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>{deckFilter.value=e.target.value;resetFlashcardSession();}},[h('option',{value:''},'Todos os baralhos'),...decks.map(d=>h('option',{value:d.id},(d.icon||'')+' '+d.name))]))]),
                card([sectionTitle('Sessão de revisão',due.length?'Restam '+due.length+' cartão(ões)':'Nenhum cartão pendente'),current?h('div',{class:'mx-auto max-w-2xl'},[
                    h('div',{class:'mb-3 flex items-center justify-between text-xs text-zinc-500'},[h('span',decks.find(d=>d.id===current.deck_id)?.name||'Baralho'),h('span','Cartão '+(currentIndex+1)+' de '+due.length)]),
                    h('button',{type:'button',class:'mentoria-flashcard',onClick:()=>flashcardRevealed.value=!flashcardRevealed.value},[
                        h('div',{class:'mentoria-flashcard__header'},[
                            h('span',{class:'mentoria-flashcard__tag'},[
                                renderIcon('flashcards', 'mr-1', 14),
                                flashcardRevealed.value?'Verso (Resposta)':'Frente (Pergunta)',
                            ]),
                            h('span',{class:'text-[11px] text-zinc-400'},flashcardRevealed.value?'Toque para ver a pergunta':'Toque para virar'),
                        ]),
                        h('p',{class:'mentoria-flashcard__content'},flashcardRevealed.value?current.back:current.front),
                        !flashcardRevealed.value&&current.hint?h('p',{class:'mentoria-flashcard__hint'},'💡 Dica: '+current.hint):null,
                        h('div',{class:'mentoria-flashcard__footer'},flashcardRevealed.value?'Avalie a dificuldade abaixo':'Clique para ver a resposta'),
                    ]),
                    !flashcardRevealed.value?btn('Revelar resposta',()=>flashcardRevealed.value=true,'primary',{class:'mt-4 w-full'}):h('div',{class:'mt-4'},[h('div',{class:'mb-2 text-center text-xs font-semibold text-zinc-400'},'Como foi a sua lembrança?'),h('div',{class:'grid grid-cols-2 gap-2 sm:grid-cols-4'},[btn('Errei',()=>rateFlashcard(current,1),'danger'),btn('Difícil',()=>rateFlashcard(current,2),'warning'),btn('Bom',()=>rateFlashcard(current,3),'ghost'),btn('Fácil',()=>rateFlashcard(current,4),'success')])]),
                ]):empty('Nenhum flashcard pendente agora.')]),
                card([sectionTitle('Meus baralhos','Você também pode criar flashcards pessoais.'),ownDecks.length?h('div',{class:'space-y-2'},ownDecks.map(d=>h('div',{class:'rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800'},[
                    h('div',{class:'flex flex-wrap items-center justify-between gap-2'},[h('strong',(d.icon||'📚')+' '+d.name),h('div',{class:'flex gap-2'},[btn('+ Cartão',()=>openOwnCard(d),'soft'),btn('Editar',()=>openOwnDeck(d),'ghost'),btn('Excluir',()=>deleteOwnDeck(d),'danger')])]),
                    h('div',{class:'mt-2 text-xs text-zinc-500'},cards.filter(c=>c.deck_id===d.id).length+' cartão(ões)'),
                ]))):empty('Você ainda não criou baralhos pessoais.')]),
            ]);
        }

        function renderQuestions() {
            const list=state.value.questions||[];
            const subjects=[...new Set(list.map(q=>q.subject))].sort();
            const topics=[...new Set(list.filter(q=>!questionSubject.value||q.subject===questionSubject.value).map(q=>q.topic).filter(Boolean))].sort();
            const search=questionQuery.value.toLowerCase();
            const filtered=list.filter(q=>
                (!questionSubject.value||q.subject===questionSubject.value)
                &&(!questionTopic.value||q.topic===questionTopic.value)
                &&(!questionType.value||q.type===questionType.value)
                &&(!questionSituation.value||(questionSituation.value==='nao_respondidas'?!q.answered:questionSituation.value==='acertei'?q.answered&&q.last_correct:q.answered&&!q.last_correct))
                &&(!search||q.prompt.toLowerCase().includes(search)||q.subject.toLowerCase().includes(search)||String(q.topic||'').toLowerCase().includes(search))
            );
            const totalPages=1;
            const currentQuestion=filtered[questionIndex.value]||null;
            const pageItems=currentQuestion?[currentQuestion]:[];
            const resetPage=()=>{questionPage.value=1;resetQuestionSession();};
            const totalCount=list.length;
            const wrongCount=list.filter(q=>q.answered&&!q.last_correct).length;
            const unansCount=list.filter(q=>!q.answered).length;
            const correctCount=list.filter(q=>q.answered&&q.last_correct).length;
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Banco de questões','Filtre, responda, refaça e consulte cada tentativa.',btn('Atualizar estatísticas',loadQuestionStats,'ghost')),
                    h('div',{class:'mentoria-question-tabs mb-4'},[
                        h('button',{
                            type:'button',
                            class:cn('mentoria-question-tab-btn',!questionSituation.value&&'mentoria-question-tab-btn--active'),
                            onClick:()=>{questionSituation.value='';resetPage();},
                        },['Todas as questões (',h('strong',totalCount),')']),
                        h('button',{
                            type:'button',
                            class:cn('mentoria-question-tab-btn mentoria-question-tab-btn--erros',questionSituation.value==='errei'&&'mentoria-question-tab-btn--active'),
                            onClick:()=>{questionSituation.value='errei';resetPage();},
                        },[
                            renderIcon('alertTriangle','',14),
                            'Caderno de Erros (',h('strong',wrongCount),')',
                        ]),
                        h('button',{
                            type:'button',
                            class:cn('mentoria-question-tab-btn',questionSituation.value==='nao_respondidas'&&'mentoria-question-tab-btn--active'),
                            onClick:()=>{questionSituation.value='nao_respondidas';resetPage();},
                        },['Não respondidas (',h('strong',unansCount),')']),
                        h('button',{
                            type:'button',
                            class:cn('mentoria-question-tab-btn',questionSituation.value==='acertei'&&'mentoria-question-tab-btn--active'),
                            onClick:()=>{questionSituation.value='acertei';resetPage();},
                        },['Acertos (',h('strong',correctCount),')']),
                    ]),
                    questionSituation.value==='errei'?h('div',{class:'mentoria-caderno-banner mb-4'},[
                        h('div',{class:'flex items-center gap-2'},[
                            renderIcon('alertTriangle','text-red-500',16),
                            h('span',{class:'mentoria-caderno-banner__text'},'Caderno de Erros ativo: Focado nas questões que você errou na última tentativa para fixar o conteúdo.'),
                        ]),
                        btn('Ver todas as questões',()=>{questionSituation.value='';resetPage();},'ghost'),
                    ]):null,
                    h('div',{class:'grid gap-3 md:grid-cols-2 xl:grid-cols-5'},[
                        field('Disciplina',h('select',{value:questionSubject.value,class:'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>{questionSubject.value=e.target.value;questionTopic.value='';resetPage();}},[h('option',{value:''},'Todas'),...subjects.map(s=>h('option',{value:s},s))])),
                        field('Assunto',h('select',{value:questionTopic.value,class:'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>{questionTopic.value=e.target.value;resetPage();}},[h('option',{value:''},'Todos'),...topics.map(t=>h('option',{value:t},t))])),
                        field('Tipo',h('select',{value:questionType.value,class:'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>{questionType.value=e.target.value;resetPage();}},[h('option',{value:''},'Todos'),h('option',{value:'multipla_escolha'},'Múltipla escolha'),h('option',{value:'certo_errado'},'Certo / Errado')])),
                        field('Situação',h('select',{value:questionSituation.value,class:'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>{questionSituation.value=e.target.value;resetPage();}},[h('option',{value:''},'Todas'),h('option',{value:'nao_respondidas'},'Não respondidas'),h('option',{value:'errei'},'Errei'),h('option',{value:'acertei'},'Acertei')])),
                        field('Buscar',h('input',{value:questionQuery.value,placeholder:'Enunciado…',class:'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onInput:e=>{questionQuery.value=e.target.value;resetPage();}})),
                    ]),
                    h('div',{class:'mt-3 text-xs text-zinc-500'},currentQuestion?'Questão '+(questionIndex.value+1)+' de '+filtered.length:'Sessão concluída.'),
                    questionStats.value?h('div',{class:'mt-4 grid gap-3 sm:grid-cols-4'},[stat('Respondidas',questionStats.value.total_answered),stat('Acertos',questionStats.value.correct),stat('Erros',questionStats.value.wrong),stat('Aproveitamento',(questionStats.value.accuracy||0)+'%')]):null,
                ]),
                pageItems.length?h('div',{class:'space-y-3'},pageItems.map((q,index)=>{
                    const result=questionResults.value[q.id];const history=questionHistory.value[q.id];
                    const number=questionIndex.value+1;
                    return card([
                        h('div',{class:'flex flex-wrap gap-1'},[badge(q.subject,'sky'),q.topic?badge(q.topic):null,badge(q.type==='certo_errado'?'C/E':'Múltipla'),q.answered?badge(q.last_correct?'Última: acerto':'Última: erro',q.last_correct?'green':'red'):badge('Não respondida')]),
                        h('p',{class:'mt-3 whitespace-pre-wrap text-sm font-medium'},number+'. '+q.prompt),
                        q.type==='multipla_escolha'&&Array.isArray(q.alternatives)&&q.alternatives.length?h('div',{class:'mt-3 space-y-2'},q.alternatives.map((a,i)=>{
                            const letter=String.fromCharCode(65+i);
                            const isSelected=answerDrafts.value[q.id]===letter;
                            const isCorrect=result&&result.correct_answer===letter;
                            const isWrong=result&&isSelected&&!result.correct;
                            return choiceCard({
                                letter,
                                text:displayAlternative(a),
                                selected:isSelected,
                                correct:isCorrect,
                                wrong:isWrong,
                                disabled:!!result,
                                onClick:()=>{if(!result)answerDrafts.value[q.id]=letter;},
                            });
                        })):q.type==='certo_errado'?h('div',{class:'mt-3 grid grid-cols-2 gap-3'},['Certo','Errado'].map(a=>{
                            const isSelected=answerDrafts.value[q.id]===a;
                            const isCorrect=result&&result.correct_answer===a;
                            const isWrong=result&&isSelected&&!result.correct;
                            return choiceCard({
                                letter:a==='Certo'?'C':'E',
                                text:a,
                                selected:isSelected,
                                correct:isCorrect,
                                wrong:isWrong,
                                disabled:!!result,
                                onClick:()=>{if(!result)answerDrafts.value[q.id]=a;},
                            });
                        })):h('input',{value:answerDrafts.value[q.id]||'',class:'mt-3 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onInput:e=>answerDrafts.value[q.id]=e.target.value}),
                        result?h('div',{class:'mentoria-question-feedback '+(result.correct?'mentoria-question-feedback--correct':'mentoria-question-feedback--incorrect')},[
                            h('strong',{class:'mentoria-question-feedback__title'},result.correct?'✓ Acerto':'✕ Erro'),!result.correct?h('div',{class:'mentoria-question-feedback__answer'},'Resposta correta: '+result.correct_answer):null,result.explanation?h('p',{class:'mentoria-question-feedback__explanation'},result.explanation):null,
                        ]):null,
                        h('div',{class:'mt-3 flex flex-wrap gap-2'},[
                            !result?btn('Responder',()=>answerQuestion(q),'primary'):null,
                            questionIndex.value>0?btn('Anterior',()=>prevQuestion(),'ghost'):null,
                            !result?btn(questionIndex.value+1<filtered.length?'Próxima':'Concluir sessão',()=>nextQuestion(filtered.length),'secondary'):null,
                            result?btn(questionIndex.value+1<filtered.length?'Próxima questão':'Concluir sessão',()=>nextQuestion(filtered.length),'primary'):null,
                            result?btn('Refazer',()=>{const nr={...questionResults.value};delete nr[q.id];questionResults.value=nr;answerDrafts.value[q.id]='';},'soft'):null,
                            btn(history?'Ocultar histórico':'Histórico',()=>loadQuestionHistory(q),'ghost'),
                        ]),
                        history?h('div',{class:'mt-3 space-y-1 rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800'},history.length?history.map(a=>h('div',{class:'flex justify-between gap-2 border-b border-zinc-200 py-1 last:border-0 dark:border-zinc-700'},[
                            h('span',(a.is_correct?'✓ Acerto':'✕ Erro')+' · '+a.answer),h('span',{class:'text-zinc-500'},fmtDateTime(a.answered_at)),
                        ])):h('span',{class:'text-zinc-500'},'Nenhuma tentativa registrada.')):null,
                    ]);
                })):filtered.length?h('div',{class:'space-y-3'},[empty('Sessão concluída. Você respondeu todas as questões deste filtro.'),btn('Reiniciar sessão',resetQuestionSession,'primary')]):empty(questionSituation.value==='errei'?'Você não possui nenhuma questão com histórico de erro neste filtro. Excelente!':'Nenhuma questão encontrada com os filtros.'),
                totalPages>1?card([h('div',{class:'flex items-center justify-center gap-2'},[
                    btn('← Anterior',()=>questionPage.value=Math.max(1,questionPage.value-1),'ghost',{disabled:questionPage.value<=1}),
                    h('span',{class:'text-xs'},'Página '+questionPage.value+' de '+totalPages),
                    btn('Próxima →',()=>questionPage.value=Math.min(totalPages,questionPage.value+1),'ghost',{disabled:questionPage.value>=totalPages}),
                ])]):null,
            ]);
        }

        function renderMocks() {
            const list=(state.value.mock_exams||[]).filter(m=>!activeContestId.value||m.contest_id===activeContestId.value);
            return card([
                sectionTitle('Simulados / Raio-X','Registre nota, tempo, questões e resultados por matéria.',btn('Novo simulado',()=>openMock())),
                list.length?h('div',{class:'space-y-3'},list.map(m=>{
                    const results=(state.value.mock_subject_results||[]).filter(r=>r.mock_exam_id===m.id);
                    return h('div',{class:'rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900'},[
                        h('div',{class:'flex flex-wrap items-start justify-between gap-3'},[
                            h('div',[h('strong',m.name),h('div',{class:'text-xs text-zinc-500'},(m.type==='realizado'?fmtDate(m.performed_at):'Pendente')+(m.time_minutes?' · '+m.time_minutes+' min':''))]),
                            h('div',{class:'flex items-center gap-2'},[m.percentage!==null?badge(m.percentage+'%','sky'):null,btn('Editar',()=>openMock(m),'ghost'),btn('×',()=>deleteMock(m),'danger')]),
                        ]),
                        m.link?h('a',{href:m.link,target:'_blank',rel:'noopener',class:'mt-2 inline-block text-xs text-sky-600 underline'},'Abrir simulado'):null,
                        results.length?h('div',{class:'mt-3 grid gap-2 md:grid-cols-2'},results.map(r=>h('div',{class:'rounded-lg bg-zinc-50 p-2 text-xs dark:bg-zinc-800'},r.name+' · '+(r.percentage??'—')+'% · '+(r.correct??0)+' acertos'))):null,
                    ]);
                })):empty('Nenhum simulado registrado.'),
            ]);
        }

        function renderNotebooks() {
            const list = state.value.notebooks || [];
            const folders = [...new Set(list.map(n => n.folder || 'Geral'))].sort();
            const query = notebookQuery.value.toLowerCase();
            const filtered = list.filter(n => {
                const matchFolder = !notebookFolder.value || (n.folder || 'Geral') === notebookFolder.value;
                const matchQuery = !query || String(n.title).toLowerCase().includes(query) || String(n.content || '').toLowerCase().includes(query);
                if (notebookFilterType.value === 'grifos') {
                    return matchFolder && matchQuery && (n.content?.includes('==') || n.content?.includes('<mark'));
                }
                if (notebookFilterType.value === 'mapas') {
                    return matchFolder && matchQuery && (n.content?.includes('[mapa]') || n.folder === 'Mapas Mentais' || n.content?.includes('--'));
                }
                return matchFolder && matchQuery;
            });

            return h('div', { class: 'space-y-4' }, [
                card([
                    sectionTitle('Cadernos, Resumos & Mapas Mentais', 'Anotações estruturadas com grifos de lei (amarelo, verde e vermelho) e diagramas de mapa mental.', h('div', { class: 'flex flex-wrap gap-2' }, [
                        btn('🧠 Novo Mapa Mental', openNewMindmap, 'soft'),
                        btn('Novo Caderno / Resumo', () => openNotebook(), 'primary'),
                    ])),
                    h('div', { class: 'grid gap-3 md:grid-cols-3' }, [
                        h('input', {
                            value: notebookQuery.value,
                            placeholder: '🔍 Buscar resumo, artigo ou conceito…',
                            class: 'w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                            onInput: e => notebookQuery.value = e.target.value,
                        }),
                        h('select', {
                            value: notebookFolder.value,
                            class: 'w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                            onChange: e => notebookFolder.value = e.target.value,
                        }, [
                            h('option', { value: '' }, 'Todas as pastas'),
                            ...folders.map(f => h('option', { value: f }, '📁 ' + f)),
                        ]),
                        h('div', { class: 'flex items-center gap-1' }, [
                            btn('Todos (' + list.length + ')', () => notebookFilterType.value = 'todos', notebookFilterType.value === 'todos' ? 'primary' : 'ghost'),
                            btn('🟡 Grifados', () => notebookFilterType.value = 'grifos', notebookFilterType.value === 'grifos' ? 'primary' : 'ghost'),
                            btn('🧠 Mapas', () => notebookFilterType.value = 'mapas', notebookFilterType.value === 'mapas' ? 'primary' : 'ghost'),
                        ]),
                    ]),
                ]),
                filtered.length ? h('div', { class: 'grid gap-4 md:grid-cols-2 xl:grid-cols-3' }, filtered.map(n => {
                    const hasGrifos = n.content?.includes('==') || n.content?.includes('<mark');
                    const hasMindmap = n.content?.includes('[mapa]') || n.folder === 'Mapas Mentais' || n.content?.includes('--');
                    const subName = (state.value.subjects || []).find(s => s.id === n.subject_id)?.name;

                    return h('article', {
                        class: 'rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 flex flex-col justify-between transition hover:shadow-md',
                        style: { borderTopColor: n.color || '#4f8ef7', borderTopWidth: '4px' },
                    }, [
                        h('div', [
                            h('div', { class: 'flex items-start justify-between gap-2' }, [
                                h('div', [
                                    h('strong', { class: 'text-base font-semibold block' }, n.title),
                                    h('div', { class: 'mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-zinc-500' }, [
                                        h('span', '📁 ' + (n.folder || 'Geral')),
                                        subName ? badge(subName, 'sky') : null,
                                        hasGrifos ? badge('🟡 Grifado', 'amber') : null,
                                        hasMindmap ? badge('🧠 Mapa Mental', 'violet') : null,
                                    ]),
                                ]),
                            ]),
                            h('div', {
                                class: 'mt-3 max-h-48 overflow-hidden rounded-lg bg-zinc-50/50 p-2.5 text-xs text-zinc-600 dark:bg-zinc-800/40 dark:text-zinc-300 relative',
                            }, [
                                h('div', { innerHTML: formatNotebookContent(n.content ? n.content.slice(0, 320) + (n.content.length > 320 ? '…' : '') : 'Sem conteúdo.') }),
                            ]),
                        ]),
                        h('div', { class: 'mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2' }, [
                            h('div', { class: 'text-[11px] text-zinc-400' }, fmtDate(n.updated_at)),
                            h('div', { class: 'flex items-center gap-1' }, [
                                btn('👁️ Ler', () => openNotebook(n, 'preview'), 'soft'),
                                hasMindmap ? btn('🧠 Mapa', () => openNotebook(n, 'mindmap'), 'ghost') : null,
                                btn('Editar', () => openNotebook(n, 'editor'), 'ghost'),
                                btn('×', () => deleteNotebook(n), 'danger'),
                            ]),
                        ]),
                    ]);
                })) : empty('Nenhum caderno ou mapa mental encontrado.'),
            ]);
        }

        function renderMetrics() {
            const m=metricsData.value.summary||{};const timeline=metricsData.value.timeline||[];const subjects=metricsData.value.subjects||[];
            const easiest=subjects.filter(s=>Number(s.questions||0)>0&&s.accuracy!==null).slice().sort((a,b)=>Number(b.accuracy)-Number(a.accuracy)).slice(0,5);
            const hardest=subjects.filter(s=>Number(s.questions||0)>0&&s.accuracy!==null).slice().sort((a,b)=>Number(a.accuracy)-Number(b.accuracy)).slice(0,5);const maxSec=Math.max(1,...subjects.map(s=>Number(s.seconds||0)));const activeTimeline=timeline.filter(d=>Number(d.seconds||0)||Number(d.questions||0));
            const year=metricsYear.value;const sessions=state.value.recent_sessions||[],logs=state.value.question_logs||[];
            const months=Array.from({length:12},(_,month)=>{const prefix=year+'-'+String(month+1).padStart(2,'0');const ss=sessions.filter(x=>String(x.studied_at||'').startsWith(prefix));const qs=logs.filter(x=>String(x.recorded_at||'').startsWith(prefix));return {name:new Date(year,month,1).toLocaleDateString('pt-BR',{month:'short'}),seconds:ss.reduce((n,x)=>n+Number(x.seconds||0),0),questions:qs.reduce((n,x)=>n+Number(x.solved||0),0),days:new Set([...ss.map(x=>String(x.studied_at).slice(0,10)),...qs.map(x=>String(x.recorded_at).slice(0,10))]).size};});
            const heatDays=[];for(let i=89;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const key=d.toISOString().slice(0,10);const row=timeline.find(x=>x.date===key)||{};heatDays.push({key,seconds:Number(row.seconds||0),questions:Number(row.questions||0)});}const heatMax=Math.max(1,...heatDays.map(d=>d.seconds));
            const range=m.period||periodRange(metricsPeriod.value);const planned=(state.value.all_schedule_items||[]).filter(i=>i.planned_date&&String(i.planned_date)>=range.start&&String(i.planned_date)<=range.end).reduce((n,i)=>n+Number(i.duration_minutes||0)*60,0);const studied=Number(m.seconds_studied||0);
            const maxDay=Math.max(1,...activeTimeline.map(x=>Number(x.seconds||0)));
            return h('div',{class:'space-y-4'},[
                card([sectionTitle('Métricas',m.period?'Período '+fmtDate(m.period.start)+' → '+fmtDate(m.period.end):'',h('div',{class:'flex flex-wrap gap-2'},[btn('📄 Relatório',()=>modalState.value={type:'report',form:{note:''}},'ghost'),btn('📷 Copiar imagem',copyMetricsImage,'ghost')])),h('div',{class:'mb-4 flex flex-wrap gap-2'},[...['7d','14d','30d','all'].map(p=>btn(p==='all'?'Desde o início':p.replace('d',' dias'),()=>loadMetricsPeriod(p),metricsPeriod.value===p?'primary':'ghost'))]),h('div',{class:'grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8'},[
                    stat('Tempo',fmtHours(m.seconds_studied||0), '', 'indigo', 'schedule'),
                    stat('Questões',m.questions_solved||0, '', 'cyan', 'questions'),
                    stat('Acerto',(m.accuracy??0)+'%', '', (m.accuracy>=75?'emerald':m.accuracy>=50?'amber':'rose'), 'check', { meter: m.accuracy ?? 0 }),
                    stat('Dias ativos',m.active_days||0, '', 'blue', 'target'),
                    stat('Sequência',(m.current_streak||0)+'d', '', 'flame', 'flame'),
                    stat('Edital',(m.edict_percentage||0)+'%', '', 'purple', 'edicts', { meter: m.edict_percentage ?? 0 }),
                    stat('Média simulado',m.mock_average===null?'—':m.mock_average+'%', '', 'teal', 'metrics', { meter: m.mock_average }),
                    stat('Hoje',fmtHours(m.seconds_today||0), '', 'blue', 'history'),
                ])]),
                card([sectionTitle('Atividade por dia','Tempo e questões no período selecionado.'),activeTimeline.length?h('div',{class:'space-y-2'},activeTimeline.slice(-60).map(d=>h('div',{class:'grid grid-cols-[90px_1fr_110px] items-center gap-2 text-xs'},[h('span',fmtDate(d.date)),h('div',{class:'h-5 overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800'},[h('div',{class:'h-full bg-sky-500',style:{width:Math.min(100,Number(d.seconds||0)/maxDay*100)+'%'}})]),h('span',{class:'text-right'},fmtHours(d.seconds||0)+' · '+(d.questions||0)+'q')]))):empty('Sem atividade no período.')]),
                h('div',{class:'grid gap-4 lg:grid-cols-2'},[
                    card([sectionTitle('Desempenho por matéria'),subjects.length?h('div',{class:'space-y-2'},subjects.map(s=>h('div',[h('div',{class:'flex justify-between text-xs'},[h('strong',s.name),h('span',(s.accuracy??'—')+'% · '+fmtHours(s.seconds||0))]),h('div',{class:'mt-1 h-2 rounded bg-zinc-200 dark:bg-zinc-800'},[h('div',{class:'h-2 rounded bg-sky-500',style:{width:Math.max(2,Math.min(100,Number(s.accuracy||0)))+'%'}})])]))):empty('Sem dados por matéria.')]),
                    card([sectionTitle('Distribuição do tempo'),subjects.length?h('div',{class:'space-y-2'},subjects.slice().sort((a,b)=>Number(b.seconds||0)-Number(a.seconds||0)).map(s=>h('div',{class:'grid grid-cols-[1fr_120px] items-center gap-2 text-xs'},[h('div',[h('div',{class:'mb-1 truncate'},s.name),h('div',{class:'h-2 rounded bg-zinc-200 dark:bg-zinc-800'},[h('div',{class:'h-2 rounded bg-violet-500',style:{width:Number(s.seconds||0)/maxSec*100+'%'}})])]),h('span',{class:'text-right'},fmtHours(s.seconds||0))]))):empty('Sem tempo registrado.')]),
                ]),
                subjects.filter(s=>Number(s.questions||0)>0||s.accuracy!==null).length>=3?card([
                    sectionTitle('Radar de Aproveitamento por Disciplina','Mapeamento poligonal do nível de acerto em cada matéria.'),
                    renderRadarChart(subjects.filter(s=>Number(s.questions||0)>0||s.accuracy!==null).slice(0,8).map(s=>({label:s.name,value:s.accuracy??0})),{size:320}),
                ]):null,
                h('div',{class:'grid gap-4 lg:grid-cols-2'},[
                    card([sectionTitle('✅ Maior facilidade'),easiest.length?h('div',{class:'space-y-2'},easiest.map((s,i)=>h('div',{class:'flex justify-between rounded-lg bg-zinc-50 p-2 text-sm dark:bg-zinc-800'},[h('span',(i+1)+'. '+s.name),h('strong',s.accuracy+'%')]))):empty('Resolva questões para gerar o ranking.')]),
                    card([sectionTitle('⚠ Maior dificuldade'),hardest.length?h('div',{class:'space-y-2'},hardest.map((s,i)=>h('div',{class:'flex justify-between rounded-lg bg-zinc-50 p-2 text-sm dark:bg-zinc-800'},[h('span',(i+1)+'. '+s.name),h('strong',s.accuracy+'%')]))):empty('Resolva questões para gerar o ranking.')]),
                ]),
                card([sectionTitle('Meta do ciclo x realizado','Compara o tempo planejado no cronograma com o tempo estudado no período.'),h('div',{class:'grid gap-3 sm:grid-cols-3'},[stat('Planejado',fmtHours(planned),'','indigo','schedule'),stat('Estudado',fmtHours(studied),'','blue','history'),stat('Saldo',(studied>=planned?'+':'-')+fmtHours(Math.abs(studied-planned)),'',studied>=planned?'emerald':'rose',studied>=planned?'check':'alertTriangle')])]),
                card([sectionTitle('Mapa de atividade','Últimos 90 dias.'),h('div',{class:'grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1'},heatDays.map(d=>h('button',{type:'button',title:fmtDate(d.key)+' · '+fmtHours(d.seconds)+' · '+d.questions+' questões',class:'aspect-square rounded-sm bg-emerald-500',style:{opacity:d.seconds?Math.max(.2,d.seconds/heatMax):.06},onClick:()=>openMetricsDetail(d.key,d.key,'Detalhes · '+fmtDate(d.key))})))]),
                card([sectionTitle('Retrospectiva anual','Resumo mensal dos registros disponíveis.',h('select',{value:metricsYear.value,class:'rounded-lg border border-zinc-300 px-2 py-1 text-xs dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>metricsYear.value=Number(e.target.value)},[...new Set([new Date().getFullYear(),...sessions.map(s=>Number(String(s.studied_at||'').slice(0,4))).filter(Boolean),...logs.map(s=>Number(String(s.recorded_at||'').slice(0,4))).filter(Boolean)])].sort((a,b)=>b-a).map(y=>h('option',{value:y},String(y))))),h('div',{class:'grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'},months.map(month=>h('button',{type:'button',class:'rounded-lg bg-zinc-50 p-3 text-left text-xs hover:ring-1 hover:ring-sky-400 dark:bg-zinc-800',onClick:()=>{const monthIndex=months.indexOf(month);const start=metricsYear.value+'-'+String(monthIndex+1).padStart(2,'0')+'-01';const end=new Date(metricsYear.value,monthIndex+1,0).toISOString().slice(0,10);openMetricsDetail(start,end,'Detalhes · '+month.name+' '+metricsYear.value);}},[h('strong',{class:'capitalize'},month.name),h('div',{class:'mt-1'},fmtHours(month.seconds)),h('div',{class:'text-zinc-500'},month.questions+' questões · '+month.days+' dias')])))]),
            ]);
        }

        function renderCourses() {
            const list=state.value.courses||[];
            return card([
                sectionTitle('Cursos e aulas','Conteúdo audiovisual servido pela área de membros do Getfy.'),
                list.length?h('div',{class:'mentoria-course-grid'},list.map(c=>h('article',{class:'mentoria-course-card'},[
                    c.image_url
                        ?h('img',{class:'mentoria-course-card__cover',src:c.image_url,alt:'Capa do curso '+c.name,loading:'lazy'})
                        :h('div',{class:'mentoria-course-card__cover mentoria-course-card__cover--fallback',role:'img','aria-label':'Curso sem capa'},[
                            h('span',{class:'mentoria-course-card__fallback-icon','aria-hidden':'true'},'▶'),
                            h('span',{class:'mentoria-course-card__fallback-label'},'Curso'),
                        ]),
                    h('div',{class:'mentoria-course-card__content'},[
                        h('h3',{class:'mentoria-course-card__title'},c.name),
                        c.description?h('p',{class:'mentoria-course-card__description'},c.description):h('p',{class:'mentoria-course-card__description mentoria-course-card__description--empty'},'Aulas e materiais disponíveis na sua área de membros.'),
                        h('a',{href:c.access_url,class:'mentoria-course-card__action'},['Acessar curso ',h('span',{'aria-hidden':'true'},'→')]),
                    ]),
                ]))):empty('Nenhum curso da área de membros está liberado para sua conta neste produtor.'),
            ]);
        }

        function renderHistory() {
            const sessions=state.value.recent_sessions||[];
            const logs=state.value.question_logs||[];
            return h('div',{class:'grid gap-4 xl:grid-cols-2'},[
                card([
                    sectionTitle('Sessões de estudo','Você pode corrigir lançamentos manuais.',btn('Adicionar sessão',()=>openHistorySession())),
                    sessions.length?h('div',{class:'space-y-2'},sessions.slice(0,200).map(s=>h('div',{class:'flex items-center justify-between gap-3 rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800'},[
                        h('div',[h('strong',fmtHours(s.seconds)),h('div',{class:'text-zinc-500'},fmtDateTime(s.studied_at)+' · '+(s.mode||s.origin||'estudo'))]),
                        h('div',{class:'flex gap-1'},[btn('Editar',()=>openHistorySession(s),'ghost'),btn('×',()=>deleteHistorySession(s),'danger')]),
                    ]))):empty('Sem sessões registradas.'),
                ]),
                card([
                    sectionTitle('Lançamentos de questões','Além das questões do banco, registre blocos externos.',btn('Adicionar questões',()=>openQuestionLog())),
                    logs.length?h('div',{class:'space-y-2'},logs.slice(0,200).map(q=>h('div',{class:'flex items-center justify-between gap-3 rounded-lg bg-zinc-50 p-3 text-xs dark:bg-zinc-800'},[
                        h('div',[h('strong',q.solved+' questões · '+q.correct+' acertos'),h('div',{class:'text-zinc-500'},fmtDateTime(q.recorded_at)+' · '+(q.origin||'manual'))]),
                        h('div',{class:'flex gap-1'},[btn('Editar',()=>openQuestionLog(q),'ghost'),btn('×',()=>deleteQuestionLog(q),'danger')]),
                    ]))):empty('Sem lançamentos de questões.'),
                ]),
            ]);
        }

        function renderHelp() {
            const topics=[
                {icon:'⏱',title:'Cronômetro e Pomodoro',text:'Use o Timer para registrar tempo, questões, acertos e observações até o nível de subtópico.',items:['Pomodoro com blocos de 15, 25, 45 ou 60 minutos ou duração personalizada.','O alerta sonoro avisa quando o bloco termina.','Os lançamentos alimentam histórico e métricas.']},
                {icon:'📝',title:'Edital e subtópicos',text:'O edital organiza matérias, tópicos e subtópicos com progresso e desempenho.',items:['Marcar conteúdo como estudado gera revisões conforme os prazos do concurso.','Registre estudo e abra o Timer diretamente no item.','Use a busca para localizar conteúdos.']},
                {icon:'✨',title:'Importação por IA',text:'Editais, questões e flashcards possuem prompt pronto para copiar e JSON para importar.',items:['Revise o JSON antes de importar.','Flashcards usam frente e verso.','Questões podem ser vinculadas a produtos específicos.']},
                {icon:'📚',title:'Cronograma',text:'Use agenda por dias ou ciclo inteligente com disponibilidade semanal, afinidade e prioridades.',items:['O calendário reúne atividades e revisões programadas.','Pendências podem ser reprogramadas em cascata.','O ciclo inteligente prioriza cobertura e desempenho.']},
                {icon:'🔄',title:'Revisões',text:'Acompanhe atrasadas, hoje, futuras e concluídas.',items:['Veja a agenda dos próximos 7 dias.','Matérias com baixo rendimento recebem alerta de prioridade.','Use Timer, adie ou abra o conteúdo no edital.']},
                {icon:'🎴',title:'Flashcards',text:'Responda Certo ou Errado e avalie a dificuldade para o SM-2.',items:['Errei, Difícil, Bom e Fácil ajustam a próxima revisão.','Você pode criar baralhos pessoais.','O mentor pode importar baralhos por IA/JSON.']},
                {icon:'❓',title:'Banco de Questões',text:'Filtre por matéria, assunto, tipo e situação.',items:['Consulte o histórico de cada questão.','Refaça questões erradas.','Respostas feitas dentro dos cursos também entram nas métricas.']},
                {icon:'📊',title:'Métricas e relatórios',text:'Acompanhe tempo, questões, acerto, edital, heatmap e retrospectiva anual.',items:['Gere relatório para impressão/PDF.','Copie relatório formatado para WhatsApp.','Abra dias e meses para conferir os lançamentos.']},
                {icon:'🎓',title:'Cursos',text:'Cursos e aulas usam a área de membros nativa do Getfy.',items:['O produtor pode vincular questões do Mentoria às aulas.','O aluno responde dentro da própria aula.','Acertos e erros alimentam o Mentoria.']},
            ];
            const q=helpQuery.value.trim().toLowerCase();
            const filtered=topics.filter(topic=>!q||[topic.title,topic.text,...topic.items].join(' ').toLowerCase().includes(q));
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Ajuda Mentoria','Busque os fluxos principais da sua preparação.'),
                    h('input',{type:'search',value:helpQuery.value,placeholder:'Buscar na ajuda…',class:'w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onInput:e=>helpQuery.value=e.target.value}),
                ]),
                filtered.length?h('div',{class:'grid gap-3 md:grid-cols-2 xl:grid-cols-3'},filtered.map(topic=>card([
                    h('div',{class:'text-2xl'},topic.icon),h('h3',{class:'mt-2 font-bold'},topic.title),h('p',{class:'mt-1 text-sm text-zinc-500'},topic.text),
                    h('ul',{class:'mt-3 list-disc space-y-1 pl-5 text-xs text-zinc-500'},topic.items.map(item=>h('li',item))),
                ]))):empty('Nenhum tópico encontrado na ajuda.'),
            ]);
        }

        function renderTab() {
            if(activeTab.value==='edict')return renderEdict();
            if(activeTab.value==='materials')return renderMaterials();
            if(activeTab.value==='schedule')return renderSchedule();
            if(activeTab.value==='reviews')return renderReviews();
            if(activeTab.value==='flashcards')return renderFlashcards();
            if(activeTab.value==='questions')return renderQuestions();
            if(activeTab.value==='mocks')return renderMocks();
            if(activeTab.value==='notebooks')return renderNotebooks();
            if(activeTab.value==='metrics')return renderMetrics();
            if(activeTab.value==='courses')return renderCourses();
            if(activeTab.value==='history')return renderHistory();
            if(activeTab.value==='help')return renderHelp();
            return renderDashboard();
        }

        function renderModal() {
            const m=modalState.value;
            if(!m)return null;

            if(m.type==='video'){
                return modal(m.title||'Vídeo',h('div',{class:'aspect-video overflow-hidden rounded-xl bg-black'},[
                    h('iframe',{src:m.url,class:'h-full w-full',allow:'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',allowfullscreen:true}),
                ]),closeModal,null,'max-w-5xl');
            }

            if(m.type==='scheduleDay'){
                const entries=m.entries||[];
                return modal('Atividades · '+fmtDate(m.date),h('div',{class:'space-y-2'},entries.map(entry=>{
                    const item=entry.item;
                    if(entry.kind==='review'){
                        const review=entry.review;
                        return h('div',{class:'flex flex-wrap items-center justify-between gap-2 rounded-lg bg-violet-50 p-3 text-sm dark:bg-violet-950'},[
                            h('div',[h('strong','↻ Revisão · '+itemLabel(item)),h('div',{class:'text-xs text-zinc-500'},'30 min · ciclo '+(review?.current_cycle||0))]),
                            h('div',{class:'flex gap-1'},[
                                btn('⏱ Timer',()=>{closeModal();openTimer({subject_id:item.subject_id||'',topic_id:item.topic_id||'',subtopic_id:item.subtopic_id||'',mode:'revisao'});},'ghost'),
                                review&&!review.completed?btn('Revisar',async()=>{await completeReview(review);closeModal();},'success'):null,
                                review&&!review.completed?btn('Adiar',async()=>{await postponeReview(review);closeModal();},'warning'):null,
                            ]),
                        ]);
                    }
                    return h('div',{class:'flex flex-wrap items-center justify-between gap-2 rounded-lg bg-zinc-50 p-3 text-sm dark:bg-zinc-800'},[
                        h('div',[h('strong',itemLabel(item)),h('div',{class:'text-xs text-zinc-500'},(item.duration_minutes||0)+' min · '+item.status)]),
                        h('div',{class:'flex gap-1'},[
                            btn('⏱ Timer',()=>{closeModal();openTimer({subject_id:item.subject_id||'',topic_id:item.topic_id||'',subtopic_id:item.subtopic_id||'',mode:'estudo'});},'ghost'),
                            btn(item.status==='concluido'?'Reabrir':'Concluir',async()=>{await toggleScheduleItem(item);if(item.status==='concluido')closeModal();},item.status==='concluido'?'ghost':'success'),
                        ]),
                    ]);
                })),closeModal);
            }

            if(m.type==='metricsDetail'){
                const inRange=value=>{const key=String(value||'').slice(0,10);return key>=m.start&&key<=m.end;};
                const sessions=(state.value.recent_sessions||[]).filter(s=>inRange(s.studied_at));
                const logs=(state.value.question_logs||[]).filter(q=>inRange(q.recorded_at));
                const seconds=sessions.reduce((n,s)=>n+Number(s.seconds||0),0);
                const solved=logs.reduce((n,q)=>n+Number(q.solved||0),0);
                const correct=logs.reduce((n,q)=>n+Number(q.correct||0),0);
                return modal(m.title||'Detalhes',h('div',{class:'space-y-4'},[
                    h('div',{class:'grid gap-3 sm:grid-cols-3'},[stat('Tempo',fmtHours(seconds)),stat('Questões',solved),stat('Acerto',solved?Math.round(correct/solved*100)+'%':'—')]),
                    card([
                        sectionTitle('Sessões de estudo'),
                        sessions.length?h('div',{class:'space-y-2'},sessions.map(s=>h('div',{class:'flex items-center justify-between gap-2 rounded-lg bg-zinc-50 p-2 text-xs dark:bg-zinc-800'},[
                            h('div',[h('strong',fmtHours(s.seconds||0)),h('div',{class:'text-zinc-500'},fmtDateTime(s.studied_at)+' · '+(s.mode||s.origin||'estudo'))]),
                            btn('Editar',()=>openHistorySession(s),'ghost'),
                        ]))):empty('Nenhuma sessão neste período.'),
                    ]),
                    card([
                        sectionTitle('Lançamentos de questões'),
                        logs.length?h('div',{class:'space-y-2'},logs.map(q=>h('div',{class:'flex items-center justify-between gap-2 rounded-lg bg-zinc-50 p-2 text-xs dark:bg-zinc-800'},[
                            h('div',[h('strong',(q.solved||0)+' questões · '+(q.correct||0)+' acertos'),h('div',{class:'text-zinc-500'},fmtDateTime(q.recorded_at)+' · '+(q.origin||'manual'))]),
                            btn('Editar',()=>openQuestionLog(q),'ghost'),
                        ]))):empty('Nenhum lançamento neste período.'),
                    ]),
                ]),closeModal,null,'max-w-5xl');
            }

            if(m.type==='report'){
                const f=m.form;
                return modal('Relatório de desempenho',h('div',{class:'space-y-4'},[
                    h('pre',{class:'whitespace-pre-wrap rounded-xl bg-zinc-50 p-4 text-sm font-sans dark:bg-zinc-800'},metricReportText(f.note)),
                    field('Parecer / observações (opcional)',textarea(f,'note',{rows:5,placeholder:'Orientações, próximos passos ou observações…'})),
                ]),closeModal,[
                    btn('📱 Copiar p/ WhatsApp',async()=>{await navigator.clipboard.writeText(metricReportText(f.note));success.value='Relatório formatado copiado.';},'ghost'),
                    btn('Imprimir / PDF',()=>printMetricsReport(f.note),'primary'),
                ],'max-w-4xl');
            }

                if(m.type==='timer'){
                    const f=timer.value.form;
                    const topicOptions=activeTopics.value.filter(t=>!f.subject_id||t.subject_id===f.subject_id);
                    const subOptions=activeSubtopics.value.filter(st=>!f.topic_id||st.topic_id===f.topic_id);
                    const curSubject=(state.value.subjects||[]).find(s=>s.id===f.subject_id)?.name||'Estudo livre';
                    const curTopic=(state.value.topics||[]).find(t=>t.id===f.topic_id)?.name;
                    const curSub=(state.value.subtopics||[]).find(st=>st.id===f.subtopic_id)?.name;
                    const fullTopicLabel=[curSubject,curTopic,curSub].filter(Boolean).join(' › ');
                    const displaySec=timer.value.pomodoro?Math.max(0,Number(timer.value.pomodoro_minutes||25)*60-timer.value.elapsed):timer.value.elapsed;

                    if (zenMode.value) {
                        return modal('Player de Estudo · Modo Zen', h('div', { class: 'mentoria-zen-container' }, [
                            h('div', { class: 'mentoria-zen-header' }, [
                                h('div', { class: 'mentoria-zen-subject-tag' }, f.mode ? f.mode.toUpperCase() : 'FOCO'),
                                h('h3', { class: 'mentoria-zen-topic-title' }, fullTopicLabel),
                            ]),
                            h('div', { class: 'mentoria-zen-clock-card' }, [
                                h('div', { class: 'text-xs uppercase tracking-wider text-sky-400 font-semibold mb-2' }, timer.value.pomodoro ? 'Bloco Pomodoro em Andamento' : 'Cronômetro Contínuo'),
                                h('div', { class: 'mentoria-zen-time-display' }, formatTimer(displaySec)),
                                timer.value.pomodoro && timer.value.pomodoro_cycles
                                    ? h('div', { class: 'mt-3 text-xs text-zinc-400 font-medium' }, '🔥 ' + timer.value.pomodoro_cycles + ' ciclo(s) concluído(s)')
                                    : null,
                                h('div', { class: 'mentoria-zen-controls' }, [
                                    timer.value.running
                                        ? btn('Pausar', pauseTimer, 'warning', { icon: 'pause' })
                                        : btn(timer.value.elapsed ? 'Continuar' : 'Iniciar', startTimer, 'success', { icon: 'play' }),
                                    btn('Zerar', resetTimer, 'ghost'),
                                    timer.value.pomodoro ? btn('+5 min', () => { timer.value.pomodoro_minutes = Number(timer.value.pomodoro_minutes || 25) + 5; }, 'soft') : null,
                                ]),
                            ]),
                            h('div', { class: 'mentoria-zen-notes-box' }, [
                                h('div', { class: 'grid gap-3 sm:grid-cols-2 mb-3' }, [
                                    field('Questões resolvidas', input(f, 'solved', { type: 'number', number: true, min: 0, placeholder: '0' })),
                                    field('Acertos', input(f, 'correct', { type: 'number', number: true, min: 0, placeholder: '0' })),
                                ]),
                                field('Anotações rápidas durante o estudo', textarea(f, 'notes', { rows: 2, placeholder: 'Dúvidas, bizus ou observações da sessão…' })),
                            ]),
                        ]), closeModal, [
                            btn('⛶ Formulário completo', () => zenMode.value = false, 'ghost', { icon: 'minimize' }),
                            btn('Registrar e finalizar', finishTimer, 'primary', { disabled: timer.value.elapsed < 1 }),
                        ], 'mentoria-zen-dialog');
                    }

                    return modal('Timer de estudo', h('div', { class: 'space-y-5' }, [
                        h('div', { class: 'flex items-center justify-between pb-2 border-b border-zinc-200 dark:border-zinc-800' }, [
                            h('div', { class: 'text-xs text-zinc-500 truncate max-w-md' }, 'Sessão em andamento: ' + fullTopicLabel),
                            btn('⛶ Modo Zen Foco', () => zenMode.value = true, 'soft', { icon: 'maximize' }),
                        ]),
                        h('div', { class: 'text-center' }, [
                            h('div', { class: 'text-xs font-semibold uppercase tracking-wide text-zinc-500' }, timer.value.pomodoro ? 'Pomodoro · restante' : 'Cronômetro'),
                            h('div', { class: 'mt-1 font-mono text-5xl font-bold' }, formatTimer(displaySec)),
                            timer.value.pomodoro && timer.value.pomodoro_cycles ? h('div', { class: 'mt-2 text-xs text-zinc-500' }, timer.value.pomodoro_cycles + ' pomodoro(s) concluído(s) nesta sessão') : null,
                            h('div', { class: 'mt-3 flex justify-center gap-2' }, [
                                timer.value.running ? btn('Pausar', pauseTimer, 'warning') : btn(timer.value.elapsed ? 'Continuar' : 'Iniciar', startTimer, 'success'),
                                btn('Zerar', resetTimer, 'ghost'),
                            ]),
                        ]),
                        formGrid([
                            checkbox(timer.value, 'pomodoro', 'Usar Pomodoro'),
                            timer.value.pomodoro ? h('div', { class: 'md:col-span-2' }, [
                                h('div', { class: 'mb-1 text-xs font-semibold' }, 'Bloco de foco'),
                                h('div', { class: 'flex flex-wrap gap-1' }, [15, 25, 45, 60].map(value => btn(value + ' min', () => {
                                    if (timer.value.running) return;
                                    timer.value.pomodoro_minutes = value; timer.value.elapsed = 0; timer.value.startedAt = null;
                                }, Number(timer.value.pomodoro_minutes) === value ? 'primary' : 'ghost', { disabled: timer.value.running }))),
                            ]) : null,
                            timer.value.pomodoro ? field('Minutos personalizados', input(timer.value, 'pomodoro_minutes', { type: 'number', number: true, min: 1, max: 180 })) : null,
                            field('Matéria', select(f, 'subject_id', optionize(activeSubjects.value), { placeholder: '—', onChange: () => { f.topic_id = ''; f.subtopic_id = ''; } })),
                            field('Tópico', select(f, 'topic_id', optionize(topicOptions), { placeholder: '—', onChange: () => f.subtopic_id = '' })),
                            field('Subtópico', select(f, 'subtopic_id', optionize(subOptions), { placeholder: '—' })),
                            field('Modo', select(f, 'mode', [{ value: 'estudo', label: 'Estudo' }, { value: 'revisao', label: 'Revisão' }, { value: 'questoes', label: 'Questões' }, { value: 'lei_seca', label: 'Lei seca' }])),
                            field('Questões resolvidas', input(f, 'solved', { type: 'number', number: true, min: 0 })),
                            field('Acertos', input(f, 'correct', { type: 'number', number: true, min: 0 })),
                        ]),
                        field('Observações', textarea(f, 'notes', { rows: 3 })),
                        (f.topic_id || f.subtopic_id) ? checkbox(f, 'mark_studied', 'Marcar este conteúdo como estudado ao finalizar') : null,
                    ]), closeModal, [btn('Registrar e finalizar', finishTimer, 'primary', { disabled: timer.value.elapsed < 1 })]);
                }

                if(m.type==='scheduleCompletion'){
                    const item=m.item;
                    const f=m.form;
                    const subject=(state.value.subjects||[]).find(s=>String(s.id)===String(item.subject_id))?.name||'Matéria';
                    const topic=(state.value.topics||[]).find(t=>String(t.id)===String(item.topic_id))?.name;
                    const subtopic=(state.value.subtopics||[]).find(s=>String(s.id)===String(item.subtopic_id))?.name;
                    const planned=String(item.planned_date||'').slice(0,10);
                    const isLate=planned&&planned!==dateFromToday();
                    return modal('Registrar estudo',h('div',{class:'space-y-4'},[
                        h('div',{class:'rounded-lg bg-sky-50 p-3 text-sm dark:bg-sky-950'},[
                            h('strong',subject),h('div',{class:'mt-1 text-xs text-zinc-500'},[topic,subtopic].filter(Boolean).join(' › ')||'Atividade de estudo'),
                        ]),
                        isLate?h('div',{class:'rounded-lg border border-sky-200 bg-sky-50 p-3 text-xs text-sky-800 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-100'},'Esta atividade estava programada para '+fmtDate(planned)+'. O estudo será registrado hoje.'):null,
                        formGrid([
                            field('Tempo estudado (minutos)',input(f,'minutes',{type:'number',number:true,min:1,max:1440})),
                            field('Questões resolvidas',input(f,'solved',{type:'number',number:true,min:0})),
                            field('Acertos',input(f,'correct',{type:'number',number:true,min:0,max:Number(f.solved||0)})),
                        ]),
                        field('Anotações / observações',textarea(f,'notes',{rows:3,placeholder:'Observações sobre o estudo (opcional)…'})),
                        h('p',{class:'text-center text-xs text-zinc-500'},'O assunto foi totalmente concluído?'),
                    ]),closeModal,[
                        btn('Estudo parcial',()=>saveScheduleCompletion(m,false),'warning',{disabled:busy.value}),
                        btn('Concluir assunto',()=>saveScheduleCompletion(m,true),'primary',{disabled:busy.value}),
                    ]);
                }

                if (m.type === 'onboarding') {
                    const f = m.form;
                    const step = m.step || 1;
                    const weeklyTotal = Object.values(f.hours || {}).reduce((acc, v) => acc + Number(v || 0), 0);

                    const stepTitles = [
                        '1. Concurso e Método',
                        '2. Nível por Matéria',
                        '3. Carga Horária',
                        '4. Revisão e Ativação',
                    ];

                    const stepIndicators = h('div', { class: 'mentoria-onboarding-steps' }, [1, 2, 3, 4].map(sNum => {
                        const isDone = sNum < step;
                        const isActive = sNum === step;
                        return h('div', {
                            class: 'mentoria-onboarding-step-indicator ' + (isActive ? 'mentoria-onboarding-step-indicator--active' : isDone ? 'mentoria-onboarding-step-indicator--done' : ''),
                            title: stepTitles[sNum - 1],
                        }, isDone ? '✓' : String(sNum));
                    }));

                    let bodyContent = null;

                    if (step === 1) {
                        bodyContent = h('div', { class: 'space-y-5' }, [
                            h('div', [
                                h('h3', { class: 'text-base font-bold' }, 'Qual concurso é o seu foco principal?'),
                                h('p', { class: 'text-xs text-zinc-500' }, 'O cronograma será estruturado em cima das disciplinas e edital deste concurso.'),
                            ]),
                            contests.value.length ? h('div', { class: 'grid gap-3 sm:grid-cols-2' }, contests.value.map(c => {
                                const isSelected = f.contest_id === c.id;
                                return h('div', {
                                    class: 'mentoria-onboarding-card ' + (isSelected ? 'mentoria-onboarding-card--selected' : ''),
                                    onClick: () => {
                                        f.contest_id = c.id;
                                        if (c.id !== activeContestId.value) {
                                            setContest(c.id);
                                        }
                                    },
                                }, [
                                    h('div', { class: 'flex items-center justify-between' }, [
                                        h('strong', { class: 'text-sm font-semibold' }, c.name),
                                        isSelected ? h('span', { class: 'text-xs font-bold text-sky-500' }, '● Ativo') : null,
                                    ]),
                                    h('div', { class: 'mt-1 text-xs text-zinc-500' }, [c.board, c.position].filter(Boolean).join(' · ') || 'Concurso cadastrado'),
                                    c.exam_date ? h('div', { class: 'mt-2 text-[11px] text-zinc-400' }, '📅 Prova: ' + fmtDate(c.exam_date)) : null,
                                ]);
                            })) : h('div', { class: 'text-xs text-zinc-500' }, 'Nenhum concurso vinculado ainda.'),

                            h('div', { class: 'pt-2' }, [
                                h('h3', { class: 'text-base font-bold' }, 'Como você prefere organizar seus estudos?'),
                                h('p', { class: 'text-xs text-zinc-500 mb-3' }, 'Escolha o formato que melhor se adapta à sua rotina:'),
                                h('div', { class: 'grid gap-3 sm:grid-cols-2' }, [
                                    h('div', {
                                        class: 'mentoria-onboarding-card ' + (f.mode === 'ciclo_inteligente' ? 'mentoria-onboarding-card--selected' : ''),
                                        onClick: () => f.mode = 'ciclo_inteligente',
                                    }, [
                                        h('div', { class: 'flex items-center gap-2 font-bold text-sm text-sky-600 dark:text-sky-400' }, [
                                            renderIcon('zap', '', 16),
                                            h('span', 'Ciclo Inteligente (Recomendado)'),
                                        ]),
                                        h('p', { class: 'mt-1.5 text-xs text-zinc-600 dark:text-zinc-400' },
                                            'Alterna disciplinas continuamente baseado na dificuldade e peso. Se imprevistos acontecerem, você não perde o calendário — apenas continua de onde parou.'
                                        ),
                                    ]),
                                    h('div', {
                                        class: 'mentoria-onboarding-card ' + (f.mode === 'agendado' ? 'mentoria-onboarding-card--selected' : ''),
                                        onClick: () => f.mode = 'agendado',
                                    }, [
                                        h('div', { class: 'flex items-center gap-2 font-bold text-sm text-purple-600 dark:text-purple-400' }, [
                                            renderIcon('schedule', '', 16),
                                            h('span', 'Cronograma Fixo Semanal'),
                                        ]),
                                        h('p', { class: 'mt-1.5 text-xs text-zinc-600 dark:text-zinc-400' },
                                            'Grade semanal com matérias agendadas em dias específicos (ex: Segundas = Constitucional). Indicado para quem tem horários 100% rígidos.'
                                        ),
                                    ]),
                                ]),
                            ]),
                        ]);
                    } else if (step === 2) {
                        const subs = activeSubjects.value;
                        const setAll = (level) => {
                            subs.forEach(s => {
                                f.levels[s.id] = level;
                                if (level === 'iniciante') { f.affinity[s.id] = 30; f.priorities[s.id] = 'alta'; }
                                else if (level === 'intermediario') { f.affinity[s.id] = 60; f.priorities[s.id] = 'media'; }
                                else if (level === 'avancado') { f.affinity[s.id] = 90; f.priorities[s.id] = 'baixa'; }
                            });
                        };

                        bodyContent = h('div', { class: 'space-y-4' }, [
                            h('div', { class: 'flex flex-wrap items-center justify-between gap-2' }, [
                                h('div', [
                                    h('h3', { class: 'text-base font-bold' }, 'Diagnóstico de Domínio por Disciplina'),
                                    h('p', { class: 'text-xs text-zinc-500' }, 'Classifique seu nível. O algoritmo dedicará mais tempo para matérias onde você tem mais dificuldade.'),
                                ]),
                                h('div', { class: 'flex items-center gap-1.5 text-xs' }, [
                                    h('span', { class: 'text-zinc-500' }, 'Definir todas:'),
                                    btn('Iniciante', () => setAll('iniciante'), 'ghost'),
                                    btn('Intermediário', () => setAll('intermediario'), 'ghost'),
                                    btn('Avançado', () => setAll('avancado'), 'ghost'),
                                ]),
                            ]),
                            subs.length ? h('div', { class: 'max-h-96 space-y-2.5 overflow-y-auto pr-1' }, subs.map(s => {
                                const curLevel = f.levels[s.id] || 'intermediario';
                                const isSelected = f.selected[s.id] !== false;
                                return h('div', { class: 'rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 dark:border-zinc-800 dark:bg-zinc-900/50' }, [
                                    h('div', { class: 'flex flex-wrap items-center justify-between gap-2' }, [
                                        h('label', { class: 'flex items-center gap-2 cursor-pointer' }, [
                                            h('input', {
                                                type: 'checkbox',
                                                checked: isSelected,
                                                class: 'rounded text-sky-600',
                                                onChange: e => f.selected[s.id] = e.target.checked,
                                            }),
                                            h('span', { class: 'text-sm font-semibold' + (!isSelected ? ' line-through text-zinc-400' : '') }, s.name),
                                        ]),
                                        isSelected ? h('div', { class: 'flex flex-wrap gap-1' }, [
                                            h('button', {
                                                type: 'button',
                                                class: 'mentoria-level-pill ' + (curLevel === 'iniciante' ? 'mentoria-level-pill--active-iniciante' : ''),
                                                onClick: () => { f.levels[s.id] = 'iniciante'; f.affinity[s.id] = 30; f.priorities[s.id] = 'alta'; },
                                            }, '🔴 Iniciante (Alta Prioridade)'),
                                            h('button', {
                                                type: 'button',
                                                class: 'mentoria-level-pill ' + (curLevel === 'intermediario' ? 'mentoria-level-pill--active-intermediario' : ''),
                                                onClick: () => { f.levels[s.id] = 'intermediario'; f.affinity[s.id] = 60; f.priorities[s.id] = 'media'; },
                                            }, '🟡 Intermediário (Média)'),
                                            h('button', {
                                                type: 'button',
                                                class: 'mentoria-level-pill ' + (curLevel === 'avancado' ? 'mentoria-level-pill--active-avancado' : ''),
                                                onClick: () => { f.levels[s.id] = 'avancado'; f.affinity[s.id] = 90; f.priorities[s.id] = 'baixa'; },
                                            }, '🟢 Avançado (Manutenção)'),
                                        ]) : h('span', { class: 'text-xs text-zinc-400 italic' }, 'Disciplina ignorada'),
                                    ]),
                                ]);
                            })) : h('div', { class: 'text-xs text-zinc-500' }, 'Nenhuma disciplina encontrada no edital verticalizado.'),
                        ]);
                    } else if (step === 3) {
                        bodyContent = h('div', { class: 'space-y-5' }, [
                            h('div', [
                                h('h3', { class: 'text-base font-bold' }, 'Disponibilidade Real de Horas'),
                                h('p', { class: 'text-xs text-zinc-500' }, 'Selecione um ritmo predefinido ou ajuste os horários por dia da semana:'),
                            ]),
                            h('div', { class: 'grid gap-3 sm:grid-cols-3' }, [
                                h('div', {
                                    class: 'mentoria-onboarding-card ' + (f.preset === 'moderado' ? 'mentoria-onboarding-card--selected' : ''),
                                    onClick: () => {
                                        f.preset = 'moderado';
                                        f.hours = { seg: 2, ter: 2, qua: 2, qui: 2, sex: 2, sab: 2, dom: 0 };
                                    },
                                }, [
                                    h('strong', { class: 'text-sm font-semibold' }, '🌱 Moderado'),
                                    h('div', { class: 'mt-1 text-xs text-zinc-500' }, '2h/dia útil + sáb (12h/sem)'),
                                    h('div', { class: 'mt-2 text-[11px] text-zinc-400' }, 'Trabalho em período integral.'),
                                ]),
                                h('div', {
                                    class: 'mentoria-onboarding-card ' + (f.preset === 'foco' ? 'mentoria-onboarding-card--selected' : ''),
                                    onClick: () => {
                                        f.preset = 'foco';
                                        f.hours = { seg: 3.5, ter: 3.5, qua: 3.5, qui: 3.5, sex: 3.5, sab: 4, dom: 1 };
                                    },
                                }, [
                                    h('strong', { class: 'text-sm font-semibold' }, '⚡ Foco Total'),
                                    h('div', { class: 'mt-1 text-xs text-zinc-500' }, '3.5h/dia útil + fds (~22h/sem)'),
                                    h('div', { class: 'mt-2 text-[11px] text-zinc-400' }, 'Alta intensidade e constância.'),
                                ]),
                                h('div', {
                                    class: 'mentoria-onboarding-card ' + (f.preset === 'exclusivo' ? 'mentoria-onboarding-card--selected' : ''),
                                    onClick: () => {
                                        f.preset = 'exclusivo';
                                        f.hours = { seg: 6, ter: 6, qua: 6, qui: 6, sex: 6, sab: 6, dom: 0 };
                                    },
                                }, [
                                    h('strong', { class: 'text-sm font-semibold' }, '🚀 Exclusivo'),
                                    h('div', { class: 'mt-1 text-xs text-zinc-500' }, '6h/dia seg a sáb (36h/sem)'),
                                    h('div', { class: 'mt-2 text-[11px] text-zinc-400' }, 'Dedicação total aos estudos.'),
                                ]),
                            ]),
                            h('div', [
                                h('div', { class: 'mb-2 flex items-center justify-between' }, [
                                    h('div', { class: 'text-xs font-semibold' }, 'Horas disponíveis por dia'),
                                    h('div', { class: 'text-xs font-bold text-sky-600 dark:text-sky-400' }, 'Total: ' + weeklyTotal + 'h semanais'),
                                ]),
                                h('div', { class: 'grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7' }, [
                                    ['seg', 'Segunda'], ['ter', 'Terça'], ['qua', 'Quarta'], ['qui', 'Quinta'],
                                    ['sex', 'Sexta'], ['sab', 'Sábado'], ['dom', 'Domingo'],
                                ].map(([k, label]) => field(label, input(f.hours, k, { type: 'number', number: true, min: 0, max: 24, step: '0.5' })))),
                            ]),
                            formGrid([
                                field('Duração do bloco de estudo', select(f, 'minutes', [
                                    { value: 45, label: '45 minutos (foco ágil)' },
                                    { value: 50, label: '50 minutos (Pomodoro padrão)' },
                                    { value: 60, label: '60 minutos (1 hora completa)' },
                                    { value: 90, label: '90 minutos (aprofundamento)' },
                                ])),
                                field('Meta de acertos em questões', select(f, 'goal', [
                                    { value: 70, label: '70% (construção de base)' },
                                    { value: 80, label: '80% (padrão competitivo)' },
                                    { value: 85, label: '85% (alto rendimento)' },
                                    { value: 90, label: '90% (elite de concurso)' },
                                ])),
                            ]),
                        ]);
                    } else if (step === 4) {
                        const targetContest = contests.value.find(c => c.id === f.contest_id) || contests.value[0];
                        const activeSubsCount = activeSubjects.value.filter(s => f.selected[s.id] !== false).length;
                        const iniciantes = activeSubjects.value.filter(s => f.selected[s.id] !== false && (f.levels[s.id] === 'iniciante')).length;
                        const intermediarios = activeSubjects.value.filter(s => f.selected[s.id] !== false && (!f.levels[s.id] || f.levels[s.id] === 'intermediario')).length;
                        const avancados = activeSubjects.value.filter(s => f.selected[s.id] !== false && (f.levels[s.id] === 'avancado')).length;

                        bodyContent = h('div', { class: 'space-y-5' }, [
                            h('div', [
                                h('h3', { class: 'text-base font-bold' }, '🎉 Tudo pronto para gerar seu Plano de Estudos!'),
                                h('p', { class: 'text-xs text-zinc-500' }, 'Revise o diagnóstico abaixo. Ao confirmar, o motor do Mentoria gerará seu ciclo personalizado.'),
                            ]),
                            h('div', { class: 'grid gap-3 sm:grid-cols-2' }, [
                                h('div', { class: 'rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900' }, [
                                    h('div', { class: 'text-xs font-semibold text-zinc-500' }, 'CONCURSO ALVO'),
                                    h('div', { class: 'mt-1 text-base font-bold' }, targetContest?.name || 'Não selecionado'),
                                    h('div', { class: 'mt-1 text-xs text-zinc-400' }, [targetContest?.board, targetContest?.position].filter(Boolean).join(' · ')),
                                ]),
                                h('div', { class: 'rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900' }, [
                                    h('div', { class: 'text-xs font-semibold text-zinc-500' }, 'MODALIDADE & CARGA'),
                                    h('div', { class: 'mt-1 text-base font-bold' }, f.mode === 'ciclo_inteligente' ? '⚡ Ciclo Inteligente' : '📅 Cronograma Semanal'),
                                    h('div', { class: 'mt-1 text-xs text-zinc-400' }, weeklyTotal + ' horas semanais · ' + f.minutes + ' min / bloco'),
                                ]),
                                h('div', { class: 'rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900' }, [
                                    h('div', { class: 'text-xs font-semibold text-zinc-500' }, 'MATÉRIAS ATIVAS'),
                                    h('div', { class: 'mt-1 text-base font-bold' }, activeSubsCount + ' disciplinas selecionadas'),
                                    h('div', { class: 'mt-1 flex flex-wrap gap-1 text-xs' }, [
                                        badge(iniciantes + ' Iniciantes', 'rose'),
                                        badge(intermediarios + ' Intermediárias', 'amber'),
                                        badge(avancados + ' Avançadas', 'green'),
                                    ]),
                                ]),
                                h('div', { class: 'rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900' }, [
                                    h('div', { class: 'text-xs font-semibold text-zinc-500' }, 'METAS E REPETIÇÃO'),
                                    h('div', { class: 'mt-1 text-base font-bold' }, f.goal + '% de acerto alvo'),
                                    h('div', { class: 'mt-1 text-xs text-zinc-400' }, 'Repetições espaçadas automatizadas ativas'),
                                ]),
                            ]),
                        ]);
                    }

                    const footerActions = [
                        btn('Cancelar', closeModal, 'ghost'),
                        step > 1 ? btn('← Voltar', () => m.step--, 'ghost') : null,
                        step < 4
                            ? btn('Avançar →', () => m.step++, 'primary')
                            : btn('🚀 Gerar Meu Plano de Estudos', () => finishOnboarding(m), 'primary', { disabled: busy.value }),
                    ].filter(Boolean);

                    return modal(
                        'Diagnóstico Inicial & Plano de Estudos',
                        h('div', { class: 'space-y-4' }, [stepIndicators, bodyContent]),
                        closeModal,
                        footerActions,
                        'mentoria-onboarding-dialog max-w-4xl'
                    );
                }

                if(m.type==='schedule'){
                const f=m.form;
                return modal('Gerar cronograma inteligente',h('div',{class:'space-y-5'},[
                    formGrid([
                        field('Modo',select(f,'mode',[
                            {value:'agendado',label:'Agenda por dias'},
                            ...(capabilities.value.includes('cronograma_inteligente')?[{value:'ciclo_inteligente',label:'Ciclo inteligente'}]:[]),
                        ])),
                        field('Minutos por tópico',input(f,'minutes',{type:'number',number:true,min:1})),
                        field('Máx. tópicos / dia (0 = livre)',input(f,'max_topics',{type:'number',number:true,min:0})),
                        field('Repetições do edital',input(f,'repetitions',{type:'number',number:true,min:1})),
                        field('Meta de acertos (%)',input(f,'goal',{type:'number',number:true,min:0,max:100})),
                        checkbox(f,'alert_goal','Usar meta como referência'),
                    ]),
                    h('div',[h('div',{class:'mb-2 text-xs font-semibold'},'Horas disponíveis por dia'),h('div',{class:'grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7'},[
                        ['seg','Seg'],['ter','Ter'],['qua','Qua'],['qui','Qui'],['sex','Sex'],['sab','Sáb'],['dom','Dom'],
                    ].map(([key,label])=>field(label,input(f.hours,key,{type:'number',number:true,min:0,max:24,step:'0.5'}))))]),
                    h('div',[h('div',{class:'mb-2 text-xs font-semibold'},'Matérias, afinidade e prioridade'),h('div',{class:'max-h-80 space-y-2 overflow-y-auto'},activeSubjects.value.map(s=>h('div',{class:'grid gap-2 rounded-lg bg-zinc-50 p-2 dark:bg-zinc-800 md:grid-cols-[1fr_100px_150px]'},[
                        h('label',{class:'flex items-center gap-2 text-sm'},[h('input',{type:'checkbox',checked:f.selected[s.id]!==false,onChange:e=>f.selected[s.id]=e.target.checked}),h('span',s.name)]),
                        input(f.affinity,s.id,{type:'number',number:true,min:0,max:100}),
                        select(f.priorities,s.id,[{value:'alta',label:'Alta'},{value:'media',label:'Média'},{value:'baixa',label:'Baixa'}]),
                    ])))]),
                ]),closeModal,[btn('Gerar',()=>generateSchedule(m),'primary',{disabled:busy.value})],'max-w-5xl');
            }

            if(m.type==='review'){
                const f=m.form;
                const topicOptions=activeTopics.value.filter(t=>!f.subject_id||t.subject_id===f.subject_id);
                const subOptions=activeSubtopics.value.filter(st=>!f.topic_id||st.topic_id===f.topic_id);
                return modal(m.item?'Editar revisão':'Nova revisão',h('div',{class:'space-y-4'},[
                    formGrid([
                        field('Concurso',select(f,'contest_id',optionize(contests.value),{placeholder:'Selecione...'})),
                        field('Matéria',select(f,'subject_id',optionize(activeSubjects.value),{placeholder:'Selecione...',onChange:()=>{f.topic_id='';f.subtopic_id='';}})),
                        field('Tópico',select(f,'topic_id',optionize(topicOptions),{placeholder:'—',onChange:()=>f.subtopic_id=''})),
                        field('Subtópico',select(f,'subtopic_id',optionize(subOptions),{placeholder:'—'})),
                        field('Ciclo',input(f,'current_cycle',{type:'number',number:true,min:0})),
                        field('Próxima data',input(f,'next_date',{type:'date'})),
                        field('% anterior',input(f,'previous_percentage',{type:'number',number:true,min:0,max:100})),
                    ]),
                    field('Observações',textarea(f,'notes',{rows:3})),checkbox(f,'completed','Concluída'),
                ]),closeModal,[btn('Salvar',()=>saveReview(m),'primary')]);
            }

            if(m.type==='ownDeck'){
                const f=m.form; const own=(state.value.decks||[]).filter(d=>d.owner_type==='aluno'&&d.id!==m.item?.id);
                return modal(m.item?'Editar meu baralho':'Novo baralho pessoal',h('div',{class:'space-y-4'},[
                    formGrid([field('Nome',input(f,'name',{required:true})),field('Ícone',input(f,'icon')),field('Ordem',input(f,'position',{type:'number',number:true,min:0}))]),
                    field('Descrição',textarea(f,'description',{rows:3})),field('Baralho pai',select(f,'parent_deck_id',optionize(own),{placeholder:'—'})),
                ]),closeModal,[btn('Salvar',()=>saveOwnDeck(m),'primary')]);
            }

            if(m.type==='ownCard'){
                const f=m.form;
                    return modal(m.item?'Editar meu flashcard':'Novo flashcard',h('div',{class:'space-y-4'},[
                        h('div',{class:'rounded-lg bg-zinc-50 p-3 text-xs text-zinc-500 dark:bg-zinc-800'},'Crie um cartão de frente e verso para sua revisão.'),
                        field('Frente',textarea(f,'front',{rows:5,required:true})),
                        field('Verso',textarea(f,'back',{rows:5,required:true})),
                    field('Dica (opcional)',textarea(f,'hint',{rows:2})),
                    field('Etiquetas',input(f,'tags',{placeholder:'lei seca, difícil, revisão'})),
                ]),closeModal,[btn('Salvar',()=>saveOwnCard(m),'primary')],'max-w-4xl');
            }

            if(m.type==='mock'){
                const f=m.form;
                return modal(m.item?'Editar simulado':'Novo simulado',h('div',{class:'space-y-4'},[
                    formGrid([
                        field('Concurso',select(f,'contest_id',optionize(contests.value),{placeholder:'—'})),field('Nome',input(f,'name',{required:true})),
                        field('Tipo',select(f,'type',[{value:'realizado',label:'Realizado'},{value:'pendente',label:'Pendente'}])),
                        f.type==='realizado'?field('Data',input(f,'performed_at',{type:'date'})):field('Link',input(f,'link')),
                        field('Percentual',input(f,'percentage',{type:'number',number:true,min:0,max:100})),field('Tempo (min)',input(f,'time_minutes',{type:'number',number:true,min:0})),
                        field('Questões feitas',input(f,'questions_done',{type:'number',number:true,min:0})),
                    ]),
                    field('Observações',textarea(f,'notes',{rows:3})),
                    field('Resultados por matéria (JSON opcional)',textarea(f,'subject_results_json',{rows:6,placeholder:'[{"subject_id":"...","name":"Português","questions":20,"correct":16,"wrong":4,"percentage":80}]'})),
                ]),closeModal,[btn('Salvar',()=>saveMock(m),'primary')],'max-w-4xl');
            }

            if(m.type==='notebook'){
                const f = m.form;
                const mode = m.mode || 'editor';

                const applyFormat = (tagBefore, tagAfter = '') => {
                    const el = document.getElementById('mentoria_notebook_content');
                    if (!el) {
                        insertNotebookFormatting(f, tagBefore + (tagAfter || ''));
                        return;
                    }
                    const start = el.selectionStart || 0;
                    const end = el.selectionEnd || 0;
                    const val = el.value || '';
                    const selected = val.substring(start, end);
                    const replacement = selected ? (tagBefore + selected + tagAfter) : (tagBefore + (tagAfter || ''));
                    f.content = val.substring(0, start) + replacement + val.substring(end);
                    setTimeout(() => {
                        el.focus();
                        const newPos = start + tagBefore.length + (selected ? selected.length : 0);
                        el.setSelectionRange(newPos, newPos);
                    }, 20);
                };

                const mapData = parseMindMap(f.content, f.title || 'Mapa Mental');

                const modeTabs = h('div', { class: 'flex items-center gap-1 border-b border-zinc-200 pb-2 dark:border-zinc-800' }, [
                    btn('✏️ Editor Formatado', () => m.mode = 'editor', mode === 'editor' ? 'primary' : 'ghost'),
                    btn('👁️ Leitura com Grifos', () => m.mode = 'preview', mode === 'preview' ? 'primary' : 'ghost'),
                    btn('🧠 Mapa Mental (' + (mapData?.branches?.length || 0) + ')', () => m.mode = 'mindmap', mode === 'mindmap' ? 'primary' : 'ghost'),
                ]);

                let mainArea = null;

                if (mode === 'preview') {
                    mainArea = h('div', { class: 'mentoria-editor-container' }, [
                        h('div', { class: 'mentoria-doc-preview', innerHTML: formatNotebookContent(f.content) }),
                    ]);
                } else if (mode === 'mindmap') {
                    mainArea = renderMindMapTree(mapData);
                } else {
                    mainArea = h('div', { class: 'mentoria-editor-container' }, [
                        h('div', { class: 'mentoria-editor-toolbar' }, [
                            h('div', { class: 'mentoria-editor-group' }, [
                                h('button', {
                                    type: 'button',
                                    class: 'mentoria-grifo-btn mentoria-grifo-btn--amarelo',
                                    title: 'Marca-texto Amarelo (Regra Geral / Conceito Chave)',
                                    onClick: () => applyFormat('==y:', '=='),
                                }, '🟡 Regra Geral'),
                                h('button', {
                                    type: 'button',
                                    class: 'mentoria-grifo-btn mentoria-grifo-btn--verde',
                                    title: 'Marca-texto Verde (Prazo / Jurisprudência / Permitido)',
                                    onClick: () => applyFormat('==g:', '=='),
                                }, '🟢 Prazo / Requisito'),
                                h('button', {
                                    type: 'button',
                                    class: 'mentoria-grifo-btn mentoria-grifo-btn--vermelho',
                                    title: 'Marca-texto Vermelho (Pegadinha / Exceção / Vedação)',
                                    onClick: () => applyFormat('==r:', '=='),
                                }, '🔴 Exceção / Pegadinha'),
                            ]),
                            h('div', { class: 'mentoria-editor-divider' }),
                            h('div', { class: 'mentoria-editor-group' }, [
                                btn('H1', () => applyFormat('\n# ', '\n'), 'ghost'),
                                btn('H2', () => applyFormat('\n## ', '\n'), 'ghost'),
                                btn('H3', () => applyFormat('\n### ', '\n'), 'ghost'),
                            ]),
                            h('div', { class: 'mentoria-editor-divider' }),
                            h('div', { class: 'mentoria-editor-group' }, [
                                btn('B', () => applyFormat('**', '**'), 'ghost'),
                                btn('I', () => applyFormat('*', '*'), 'ghost'),
                                btn('U', () => applyFormat('__', '__'), 'ghost'),
                                btn('• Lista', () => applyFormat('\n• ', ''), 'ghost'),
                                btn('> Citação', () => applyFormat('\n> ', ''), 'ghost'),
                            ]),
                            h('div', { class: 'mentoria-editor-divider' }),
                            h('div', { class: 'mentoria-editor-group' }, [
                                btn('⚖️ Artigo', () => applyFormat('Art. ', 'º, '), 'ghost'),
                                btn('📜 Súmula', () => applyFormat('Súmula Vinculante nº ', ''), 'ghost'),
                                btn('🧠 Bloco Mapa', () => applyFormat('\n[mapa]\nTema Central\n- Ramo 1 (Conceito)\n-- Item A\n-- Item B\n- Ramo 2 (Requisitos)\n-- Item C\n[/mapa]\n'), 'soft'),
                            ]),
                        ]),
                        h('textarea', {
                            id: 'mentoria_notebook_content',
                            value: f.content,
                            rows: 15,
                            placeholder: 'Digite seu resumo, cole trechos de lei seca e use a barra de ferramentas para aplicar grifos amarelo, verde e vermelho…',
                            class: 'w-full resize-y bg-transparent p-4 text-sm font-mono leading-relaxed outline-none focus:ring-0 dark:text-zinc-100',
                            onInput: (e) => f.content = e.target.value,
                        }),
                    ]);
                }

                return modal(m.item ? 'Editar Caderno & Resumo' : 'Novo Caderno & Resumo', h('div', { class: 'space-y-4' }, [
                    formGrid([
                        field('Título do Resumo', input(f, 'title', { required: true, placeholder: 'Ex: Atos Administrativos - Resumo e Grifos' })),
                        field('Pasta / Matéria', input(f, 'folder', { placeholder: 'Geral, Direito Constitucional…' })),
                        field('Cor do Caderno', input(f, 'color', { type: 'color' })),
                    ]),
                    modeTabs,
                    mainArea,
                    h('div', { class: 'flex items-center justify-between text-[11px] text-zinc-500' }, [
                        h('span', (String(f.content || '').length) + ' caracteres · ' + (String(f.content || '').trim() ? String(f.content).trim().split(/\s+/).length : 0) + ' palavras'),
                        h('span', 'Dica: selecione qualquer trecho de texto e clique nos botões de grifo para marcar instantaneamente.'),
                    ]),
                    formGrid([
                        field('Edital', select(f, 'edict_id', activeEdicts.value.map(e => ({ value: e.id, label: e.name })), { placeholder: '—' })),
                        field('Matéria', select(f, 'subject_id', optionize(activeSubjects.value), { placeholder: '—' })),
                        field('Tópico', select(f, 'topic_id', optionize(activeTopics.value), { placeholder: '—' })),
                    ]),
                ]), closeModal, [
                    btn('Salvar Caderno', () => saveNotebook(m), 'primary', { disabled: busy.value }),
                ], 'max-w-5xl');
            }

            if(m.type==='historySession'){
                const f=m.form;
                return modal(m.item?'Editar sessão':'Adicionar sessão',h('div',{class:'space-y-4'},[
                    formGrid([field('Concurso',select(f,'contest_id',optionize(contests.value),{placeholder:'—'})),field('Matéria',select(f,'subject_id',optionize(activeSubjects.value),{placeholder:'—'})),field('Minutos',input(f,'minutes',{type:'number',number:true,min:1})),field('Modo',input(f,'mode')),field('Data/hora',input(f,'studied_at',{type:'datetime-local'}))]),
                    field('Observações',textarea(f,'notes',{rows:3})),
                ]),closeModal,[btn('Salvar',()=>saveHistorySession(m),'primary')]);
            }

            if(m.type==='questionLog'){
                const f=m.form;
                return modal(m.item?'Editar lançamento':'Lançar questões',h('div',{class:'space-y-4'},[
                    formGrid([field('Concurso',select(f,'contest_id',optionize(contests.value),{placeholder:'—'})),field('Matéria',select(f,'subject_id',optionize(activeSubjects.value),{placeholder:'—'})),field('Questões',input(f,'solved',{type:'number',number:true,min:0})),field('Acertos',input(f,'correct',{type:'number',number:true,min:0})),field('Data/hora',input(f,'recorded_at',{type:'datetime-local'}))]),
                ]),closeModal,[btn('Salvar',()=>saveQuestionLog(m),'primary')]);
            }

            return null;
        }

        async function loadAiHistory() {
            if (!aiWidget.value.product_id) return;
            aiChatLoading.value = true;
            try {
                const data = await api(`/api/ai-member/history?product_id=${encodeURIComponent(aiWidget.value.product_id)}`);
                aiChatMessages.value = data.messages || [];
                aiChatConversationId.value = data.conversation_id || '';
                aiChatLoaded.value = true;
            } catch (e) {
                console.warn('Não foi possível carregar o histórico do chat IA', e);
            } finally {
                aiChatLoading.value = false;
                scrollAiToBottom();
            }
        }

        function toggleAiChat() {
            aiChatOpen.value = !aiChatOpen.value;
            if (aiChatOpen.value && !aiChatLoaded.value) {
                loadAiHistory();
            } else if (aiChatOpen.value) {
                scrollAiToBottom();
            }
        }

        function scrollAiToBottom() {
            const doScroll = () => {
                const el = document.getElementById('mentoria-ai-chat-body');
                if (el) {
                    el.scrollTop = el.scrollHeight;
                }
            };
            requestAnimationFrame(doScroll);
            setTimeout(doScroll, 60);
            setTimeout(doScroll, 200);
        }

        async function sendAiMessage(customText = null) {
            const text = (customText !== null ? customText : aiChatInput.value).trim();
            if (!text || aiChatSending.value) return;
            aiChatInput.value = '';

            aiChatMessages.value.push({
                id: 'temp-' + Date.now(),
                role: 'user',
                content: text,
                created_at: new Date().toISOString(),
            });
            aiChatSending.value = true;
            scrollAiToBottom();

            try {
                const data = await api('/api/ai-member/chat', {
                    method: 'POST',
                    body: JSON.stringify({
                        product_id: aiWidget.value.product_id,
                        message: text,
                        conversation_id: aiChatConversationId.value || undefined,
                    }),
                });

                if (data?.conversation_id) {
                    aiChatConversationId.value = data.conversation_id;
                }
                if (data?.reply) {
                    aiChatMessages.value.push({
                        id: data.reply.id || ('reply-' + Date.now()),
                        role: 'assistant',
                        content: data.reply.content || '',
                        created_at: data.reply.created_at || new Date().toISOString(),
                    });
                }
            } catch (err) {
                aiChatMessages.value.push({
                    id: 'err-' + Date.now(),
                    role: 'assistant',
                    content: 'Desculpe, ocorreu uma falha ao consultar o Mentor IA: ' + (err.message || 'Erro de conexão') + '. Por favor, tente novamente.',
                    created_at: new Date().toISOString(),
                });
            } finally {
                aiChatSending.value = false;
                scrollAiToBottom();
            }
        }

        async function resetAiConversation() {
            if (aiChatSending.value) return;
            aiChatLoading.value = true;
            try {
                const data = await api('/api/ai-member/conversations/new', {
                    method: 'POST',
                    body: JSON.stringify({ product_id: aiWidget.value.product_id }),
                });
                aiChatConversationId.value = data.conversation_id || '';
                aiChatMessages.value = [];
            } catch (e) {
                console.warn('Falha ao reiniciar conversa', e);
            } finally {
                aiChatLoading.value = false;
            }
        }

        function formatAiMessage(text) {
            if (!text) return '';
            return text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.+?)\*/g, '<em>$1</em>')
                .replace(/`(.+?)`/g, '<code class="bg-zinc-800 text-sky-300 px-1 py-0.5 rounded text-xs">$1</code>')
                .replace(/\n/g, '<br>');
        }

        function renderAiFloatingWidget() {
            if (!aiWidgetVisible.value) return null;

            const agentName = aiWidget.value.agent_name || 'Mentor IA';
            const welcomeMsg = aiWidget.value.welcome_message || 'Olá! Sou seu Mentor IA. Posso tirar dúvidas teóricas ou consultar suas questões resolvidas, tópicos concluídos do edital e cronograma!';
            const primaryColor = aiWidget.value.theme_primary || '#0284c7';

            const fab = h('button', {
                type: 'button',
                class: 'mentoria-ai-fab text-white group',
                style: { backgroundColor: primaryColor },
                title: aiChatOpen.value ? 'Fechar Mentor IA' : 'Abrir Mentor IA',
                'aria-label': aiChatOpen.value ? 'Fechar chat' : 'Abrir chat com Mentor IA',
                onClick: toggleAiChat,
            }, [
                aiChatOpen.value
                    ? svgIcon('x', 'h-6 w-6 text-white transition-transform duration-200 rotate-90 group-hover:rotate-0')
                    : h('div', { class: 'relative flex items-center justify-center' }, [
                        svgIcon('messageCircle', 'h-7 w-7 text-white'),
                        h('span', { class: 'absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-400 text-[9px] text-zinc-950 font-bold shadow animate-pulse' }, '✦'),
                    ]),
            ]);

            if (!aiChatOpen.value) {
                return fab;
            }

            const panel = h('div', {
                class: 'mentoria-ai-panel text-zinc-100',
            }, [
                h('header', { class: 'mentoria-ai-header' }, [
                    h('div', { class: 'flex items-center gap-3' }, [
                        h('div', { class: 'flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-sky-600 to-indigo-600 text-white shadow-md shrink-0' }, [
                            svgIcon('sparkles', 'h-5 w-5'),
                        ]),
                        h('div', { class: 'min-w-0' }, [
                            h('div', { class: 'flex items-center gap-2' }, [
                                h('h3', { class: 'text-sm font-semibold text-white truncate' }, agentName),
                                h('span', { class: 'inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 shrink-0' }, [
                                    h('span', { class: 'h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse' }),
                                    'Online',
                                ]),
                            ]),
                            h('p', { class: 'text-[11px] text-zinc-400 truncate' }, 'Conectado aos seus estudos e edital'),
                        ]),
                    ]),
                    h('div', { class: 'flex items-center gap-1 shrink-0' }, [
                        h('button', {
                            type: 'button',
                            class: 'rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition',
                            title: 'Nova conversa',
                            onClick: resetAiConversation,
                        }, [svgIcon('plus', 'h-4 w-4')]),
                        h('button', {
                            type: 'button',
                            class: 'rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition',
                            title: 'Fechar chat',
                            onClick: toggleAiChat,
                        }, [svgIcon('x', 'h-4 w-4')]),
                    ]),
                ]),

                h('div', {
                    id: 'mentoria-ai-chat-body',
                    class: 'mentoria-ai-body text-sm',
                }, [
                    aiChatLoading.value && aiChatMessages.value.length === 0
                        ? h('div', { class: 'flex flex-col items-center justify-center py-16 text-zinc-500 gap-3 shrink-0' }, [
                            h('div', { class: 'h-6 w-6 animate-spin rounded-full border-2 border-sky-500 border-t-transparent' }),
                            h('span', { class: 'text-xs' }, 'Carregando conversa…'),
                        ])
                        : aiChatMessages.value.length === 0
                            ? h('div', { class: 'flex flex-col items-center text-center py-4 px-2 space-y-4 shrink-0' }, [
                                h('div', { class: 'flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20 shadow-inner shrink-0' }, [
                                    svgIcon('bot', 'h-8 w-8'),
                                ]),
                                h('div', { class: 'space-y-1' }, [
                                    h('h4', { class: 'text-base font-bold text-white' }, 'Olá! Como posso ajudar?'),
                                    h('p', { class: 'text-xs text-zinc-400 leading-relaxed max-w-[320px]' }, welcomeMsg),
                                ]),
                                h('div', { class: 'w-full pt-2 space-y-2 text-left' }, [
                                    h('p', { class: 'text-[11px] font-semibold uppercase tracking-wider text-zinc-400' }, 'Perguntas sugeridas'),
                                    h('button', {
                                        type: 'button',
                                        class: 'w-full text-left rounded-xl border border-zinc-800/80 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 p-2.5 text-xs text-zinc-300 transition flex items-center justify-between group',
                                        onClick: () => sendAiMessage('Quantas questões resolvi hoje e qual foi meu percentual?'),
                                    }, [
                                        h('span', {}, '🎯 Quantas questões resolvi hoje?'),
                                        h('span', { class: 'text-zinc-400 group-hover:text-sky-400 transition' }, '→'),
                                    ]),
                                    h('button', {
                                        type: 'button',
                                        class: 'w-full text-left rounded-xl border border-zinc-800/80 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 p-2.5 text-xs text-zinc-300 transition flex items-center justify-between group',
                                        onClick: () => sendAiMessage('Quantos tópicos do edital já concluí?'),
                                    }, [
                                        h('span', {}, '📊 Quantos tópicos do edital já concluí?'),
                                        h('span', { class: 'text-zinc-400 group-hover:text-sky-400 transition' }, '→'),
                                    ]),
                                    h('button', {
                                        type: 'button',
                                        class: 'w-full text-left rounded-xl border border-zinc-800/80 bg-zinc-900/60 hover:bg-zinc-800 hover:border-zinc-700 p-2.5 text-xs text-zinc-300 transition flex items-center justify-between group',
                                        onClick: () => sendAiMessage('Explique a diferença entre ato discricionário e vinculado no Direito Administrativo.'),
                                    }, [
                                        h('span', {}, '💡 Explique ato discricionário vs vinculado'),
                                        h('span', { class: 'text-zinc-400 group-hover:text-sky-400 transition' }, '→'),
                                    ]),
                                ]),
                            ])
                            : aiChatMessages.value.map((msg) => {
                                const isUser = msg.role === 'user';
                                return h('div', {
                                    key: msg.id || msg.created_at,
                                    class: 'flex flex-col shrink-0 ' + (isUser ? 'items-end' : 'items-start'),
                                }, [
                                    h('div', {
                                        class: isUser
                                            ? 'max-w-[85%] rounded-2xl rounded-tr-xs bg-sky-600 px-4 py-2.5 text-sm text-white shadow-sm break-words'
                                            : 'max-w-[90%] rounded-2xl rounded-tl-xs bg-zinc-900 border border-zinc-800 px-4 py-3 text-sm text-zinc-200 shadow-sm leading-relaxed break-words',
                                        innerHTML: formatAiMessage(msg.content),
                                    }),
                                    h('span', { class: 'mt-1 text-[10px] text-zinc-400 ' + (isUser ? 'pr-1' : 'pl-1') },
                                        msg.created_at ? new Date(msg.created_at).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : ''
                                    ),
                                ]);
                            }),

                    aiChatSending.value ? h('div', { class: 'flex items-start gap-2.5 shrink-0' }, [
                        h('div', { class: 'flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600/20 text-sky-400 text-xs' }, [
                            svgIcon('sparkles', 'h-3.5 w-3.5 animate-spin'),
                        ]),
                        h('div', { class: 'rounded-2xl rounded-tl-xs bg-zinc-900 border border-zinc-800 px-4 py-2.5 text-xs text-zinc-400 flex items-center gap-2' }, [
                            h('div', { class: 'h-3 w-3 animate-spin rounded-full border border-sky-500 border-t-transparent' }),
                            h('span', {}, 'Consultando dados e formulando resposta…'),
                        ]),
                    ]) : null,
                ]),

                h('footer', { class: 'mentoria-ai-footer' }, [
                    h('form', {
                        class: 'flex items-center gap-2',
                        onSubmit: (e) => {
                            e.preventDefault();
                            sendAiMessage();
                        },
                    }, [
                        h('input', {
                            type: 'text',
                            class: 'flex-1 rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 disabled:opacity-50',
                            placeholder: 'Tire uma dúvida ou consulte seus dados…',
                            value: aiChatInput.value,
                            disabled: aiChatSending.value,
                            onInput: (e) => aiChatInput.value = e.target.value,
                            onKeydown: (e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    sendAiMessage();
                                }
                            },
                        }),
                        h('button', {
                            type: 'submit',
                            class: 'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white transition hover:bg-sky-500 active:scale-95 disabled:opacity-40 disabled:pointer-events-none shadow-md',
                            disabled: aiChatSending.value || !aiChatInput.value.trim(),
                            title: 'Enviar mensagem',
                        }, [
                            svgIcon('send', 'h-4 w-4'),
                        ]),
                    ]),
                    h('p', { class: 'mt-2 text-center text-[10px] text-zinc-400' }, 'Mentor IA · Conectado ao seu histórico de estudos'),
                ]),
            ]);

            return h('div', {}, [fab, panel]);
        }

        const availableTabs = computed(() => availableModules(capabilities.value)
            .map(([id,label,,icon])=>({id,label,icon})));

        return () => mentoriaShell({
            shell,
            rootClass: 'mentoria-app--student'+(actingAsMentor.value?' mentoria-app--mentor-workspace':''),
            items: availableTabs.value,
            active: activeTab.value,
            onSelect: (id) => activeTab.value = id,
            eyebrow: actingAsMentor.value ? 'Área do aluno pelo mentor' : 'Minha trilha de estudos',
            title: actingAsMentor.value ? (state.value.previewed_student_name || 'Área do aluno') : 'Minha preparação',
            subtitle: actingAsMentor.value ? 'Ações registradas em auditoria.' : 'Mentoria',
            actions: [
                renderStreakWidget(),
                h('a',{href:actingAsMentor.value?(state.value.preview_return_url||'/mentoria'):'/meus-produtos',class:'mentoria-return-link'},actingAsMentor.value?'Voltar ao painel do produtor':'Meus cursos'),
                renderContestSelector(),
            ],
            notices: [
                actingAsMentor.value ? h('div',{class:'mentoria-mentor-workspace-notice'},'Você está na área de '+(state.value.previewed_student_name||'um aluno')+'. As ações ficam registradas para acompanhamento.') : null,
                alertBox(message.value),
                alertBox(success.value,'success'),
            ],
            content: renderTab(),
            extras: [
                busy.value?h('div',{class:'fixed bottom-5 right-5 z-[100001] rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white shadow-xl'},'Atualizando…'):null,
                renderTimerLauncher(),
                renderAiFloatingWidget(),
                renderModal(),
            ],
        });
    },
};
