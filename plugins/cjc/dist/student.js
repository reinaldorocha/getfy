import { h, ref, computed, onUnmounted } from 'vue';
import {
    api, alertBox, badge, btn, card, checkbox, countdown, empty, field, fmtDate, fmtDateTime,
    fmtHours, input, jsonBody, modal, optionize, progressBar, safeJson, sectionTitle, select,
    stat, tabs, textarea,
} from './shared.js';

const MODULES = [
    ['dashboard', 'Dashboard', 'dashboard'],
    ['edict', 'Edital', 'edital'],
    ['materials', 'Materiais', 'materiais'],
    ['schedule', 'Cronograma', 'cronograma'],
    ['reviews', 'Revisões', 'revisoes'],
    ['flashcards', 'Flashcards', 'flashcards'],
    ['questions', 'Questões', 'questoes'],
    ['mocks', 'Simulados', 'simulados'],
    ['notebooks', 'Cadernos', 'cadernos'],
    ['metrics', 'Métricas', 'metricas'],
    ['courses', 'Cursos', 'cursos'],
    ['history', 'Histórico', 'metricas'],
    ['help', 'Ajuda', null],
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
    return availableModules(capabilities)[0]?.[0] || 'help';
}

export const CjcStudent = {
    name: 'CjcStudent',
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
        const answerDrafts = ref({});
        const questionStats = ref(null);
        const flashcardFeedback = ref({});

        const tenant = computed(() => Number(state.value.tenant_id || 0));
        const base = computed(() => '/cjc-estudos/' + tenant.value);
        const capabilities = computed(() => state.value.capabilities || []);
        const contests = computed(() => state.value.contests || []);
        const activeContestId = ref(
            localStorage.getItem('cjc_active_contest_'+(props.plugin_ui_page?.tenant_id || ''))
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
            localStorage.setItem('cjc_active_contest_'+tenant.value, id);
            refresh(id).catch(e => message.value=e.message);
        }

        function closeModal() { modalState.value = null; }

        function formGrid(children, cols='md:grid-cols-2') {
            return h('div',{class:'grid gap-4 '+cols},children);
        }

        function startTimer() {
            if (timer.value.running) return;
            timer.value.running = true;
            timer.value.startedAt = Date.now() - timer.value.elapsed * 1000;
            timerInterval = setInterval(() => {
                timer.value.elapsed = Math.floor((Date.now() - timer.value.startedAt) / 1000);
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

        function openTimer() {
            modalState.value={type:'timer'};
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

        async function reprogramSchedule() {
            await run(()=>api(base.value+'/schedules/reprogram',{
                method:'POST',
                body:jsonBody({contest_id:activeContestId.value||null}),
            }),'Pendências reprogramadas.');
        }

        async function toggleScheduleItem(item) {
            await run(()=>api(base.value+'/schedule-items/'+item.id,{
                method:'PATCH',
                body:jsonBody({status:item.status==='concluido'?'pendente':'concluido',create_session:true}),
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

        async function answerFlashcard(card, answer) {
            const expected=String(card.correct_answer||'').trim().toLowerCase();
            const chosen=String(answer).trim().toLowerCase();
            const correct=expected===chosen;
            const result=await run(()=>api(base.value+'/flashcards/'+card.id+'/review',{
                method:'POST',body:jsonBody({quality:correct?4:1,contest_id:activeContestId.value||null}),
            }),'',false);
            flashcardFeedback.value={
                ...flashcardFeedback.value,
                [card.id]:{
                    correct,
                    chosen:answer,
                    expected:card.correct_answer,
                    explanation:card.explanation||'',
                    next_review:result?.next_review||null,
                },
            };
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
                type:'certo_errado',front:item?.front||'',hint:item?.hint||'',
                correct_answer:item?.correct_answer||'Certo',explanation:item?.explanation||'',
                tags:Array.isArray(item?.tags)?item.tags.join(', '):'',
            }};
        }

        async function saveOwnCard(m) {
            const f=m.form;
            const payload={
                type:'certo_errado',front:f.front,hint:f.hint||null,
                correct_answer:f.correct_answer,explanation:f.explanation||null,
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
            }),'',true);
            success.value=result.correct?'Resposta correta!':'Resposta incorreta. Correta: '+result.correct_answer+(result.explanation?' · '+result.explanation:'');
            answerDrafts.value[question.id]='';
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

        function openNotebook(item=null) {
            modalState.value={type:'notebook',item,form:{
                title:item?.title||'',folder:item?.folder||'Geral',content:item?.content||'',
                color:item?.color||'#4f8ef7',edict_id:item?.edict_id||'',subject_id:item?.subject_id||'',topic_id:item?.topic_id||'',
            }};
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
            return h('div',{class:'flex flex-wrap items-center gap-2'},[
                h('span',{class:'text-xs font-semibold text-zinc-500'},'Concurso ativo:'),
                h('select',{
                    value:activeContestId.value,
                    class:'rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',
                    onChange:e=>setContest(e.target.value),
                },contests.value.map(c=>h('option',{value:c.id},c.name))),
            ]);
        }

        function renderDashboard() {
            const m=state.value.metrics_summary||{};
            const contest=activeContest.value;
            const cd=countdown(contest?.exam_date);
            return h('div',{class:'space-y-5'},[
                contest?card([
                    h('div',{class:'flex flex-wrap items-center justify-between gap-4'},[
                        h('div',[h('div',{class:'text-xs font-semibold uppercase tracking-wide text-sky-600'},contest.group||'foco'),h('h2',{class:'mt-1 text-xl font-bold'},contest.name),h('p',{class:'text-xs text-zinc-500'},[contest.board,contest.position].filter(Boolean).join(' · '))]),
                        cd?h('div',{class:'grid grid-cols-3 gap-2 text-center'},[
                            stat('Dias',cd.days),stat('Horas',cd.hours),stat('Min',cd.minutes),
                        ]):contest.pre_notice?badge('Pré-edital','amber'):null,
                    ]),
                ]):null,
                h('div',{class:'grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8'},[
                    stat('Hoje',fmtHours(m.seconds_today||0)),stat('Questões hoje',m.questions_today||0),
                    stat('30 dias',fmtHours(m.seconds_studied||0)),stat('Acerto',(m.accuracy??0)+'%'),
                    stat('Sequência',(m.current_streak||0)+' dias'),stat('Edital',(m.edict_percentage||0)+'%'),
                    stat('Simulados',m.mocks_completed||0),stat('Média',m.mock_average===null?'—':m.mock_average+'%'),
                ]),
                card([
                    sectionTitle('Ações rápidas','Registre estudo ou abra os módulos principais.'),
                    h('div',{class:'flex flex-wrap gap-2'},[
                        btn('⏱ Abrir timer',openTimer,'primary'),
                        capabilities.value.includes('cronograma')?btn('Cronograma',()=>activeTab.value='schedule','ghost'):null,
                        capabilities.value.includes('revisoes')?btn('Revisões',()=>activeTab.value='reviews','ghost'):null,
                        capabilities.value.includes('questoes')?btn('Questões',()=>activeTab.value='questions','ghost'):null,
                        capabilities.value.includes('flashcards')?btn('Flashcards',()=>activeTab.value='flashcards','ghost'):null,
                    ]),
                ]),
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
            if(!activeEdicts.value.length)return card([sectionTitle('Edital'),empty('Nenhum edital atribuído para este concurso.')]);
            return h('div',{class:'space-y-4'},activeEdicts.value.map(edict=>card([
                sectionTitle(edict.name,edict.version?'Versão '+edict.version:''),
                h('div',{class:'space-y-4'},activeSubjects.value.filter(s=>s.edict_id===edict.id).map(subject=>{
                    const ownTopics=activeTopics.value.filter(t=>t.subject_id===subject.id);
                    const completedUnits=[];
                    ownTopics.forEach(t=>{
                        const subs=activeSubtopics.value.filter(st=>st.topic_id===t.id);
                        if(subs.length)subs.forEach(st=>completedUnits.push(!!progressMap.value.get('subtopico:'+st.id)?.studied));
                        else completedUnits.push(!!progressMap.value.get('topico:'+t.id)?.studied);
                    });
                    const pct=completedUnits.length?completedUnits.filter(Boolean).length/completedUnits.length*100:0;
                    return h('div',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700'},[
                        h('div',{class:'flex items-start justify-between gap-3'},[
                            h('div',[h('strong',subject.name),renderInlineMaterials(subject.materials)]),
                            h('div',{class:'w-36'},progressBar(pct)),
                        ]),
                        h('div',{class:'mt-4 space-y-3'},ownTopics.map(topic=>{
                            const subs=activeSubtopics.value.filter(st=>st.topic_id===topic.id);
                            const topicProgress=progressMap.value.get('topico:'+topic.id);
                            return h('div',{class:'rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800'},[
                                h('div',{class:'flex items-start gap-3'},[
                                    !subs.length?h('input',{type:'checkbox',checked:!!topicProgress?.studied,onChange:e=>toggleProgress('topico',topic,e.target.checked)}):null,
                                    h('div',{class:'min-w-0 flex-1'},[
                                        h('div',{class:'font-medium'},topic.name),renderInlineMaterials(topic.materials),
                                        topic.notes?h('p',{class:'mt-1 text-xs text-zinc-500'},topic.notes):null,
                                        subs.length?h('div',{class:'mt-3 space-y-2'},subs.map(sub=>{
                                            const p=progressMap.value.get('subtopico:'+sub.id);
                                            return h('label',{class:'flex items-start gap-2 text-sm'},[
                                                h('input',{type:'checkbox',checked:!!p?.studied,onChange:e=>toggleProgress('subtopico',sub,e.target.checked)}),
                                                h('span',[sub.name,renderInlineMaterials(sub.materials)]),
                                            ]);
                                        })):null,
                                    ]),
                                ]),
                            ]);
                        })),
                    ]);
                })),
            ])));
        }

        function renderMaterials() {
            const list=state.value.materials||[];
            return card([
                sectionTitle('Materiais de apoio','Seu progresso fica salvo individualmente.'),
                list.length?h('div',{class:'grid gap-3 md:grid-cols-2 xl:grid-cols-3'},list.map(mat=>h('div',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700'},[
                    h('div',{class:'flex items-start justify-between gap-2'},[h('div',[h('strong',mat.title),h('div',{class:'text-xs text-zinc-500'},(mat.folder||'Geral')+' · '+mat.type)]),mat.completed?badge('Concluído','green'):badge('Pendente','amber')]),
                    mat.description?h('p',{class:'mt-2 text-xs text-zinc-500'},mat.description):null,
                    mat.type==='texto'&&mat.text?h('details',{class:'mt-3 text-sm'},[h('summary',{class:'cursor-pointer font-semibold'},'Ler material'),h('div',{class:'mt-2 whitespace-pre-wrap'},mat.text)]):null,
                    h('div',{class:'mt-4 flex flex-wrap gap-2'},[
                        mat.download_url?h('a',{href:mat.download_url,class:'rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white'},'Baixar'):mat.url?h('a',{href:mat.url,target:'_blank',rel:'noopener',class:'rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white'},'Abrir'):null,
                        btn(mat.completed?'Marcar pendente':'Concluir',()=>toggleMaterial(mat),mat.completed?'ghost':'success'),
                    ]),
                ]))):empty('Nenhum material disponível.'),
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
            const items=state.value.schedule_items||[];
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Cronograma',schedule?'Versão '+schedule.version+' · '+schedule.type:'Nenhum cronograma ativo',h('div',{class:'flex flex-wrap gap-2'},[
                        schedule?btn('Reprogramar pendências',reprogramSchedule,'ghost'):null,
                        btn(schedule?'Gerar novo':'Gerar cronograma',openScheduleGenerator),
                    ])),
                    schedule?h('div',{class:'flex flex-wrap gap-2'},[
                        badge(schedule.state,'sky'),badge(schedule.type,'violet'),
                    ]):empty('Gere seu cronograma a partir do edital e da carga horária semanal.'),
                ]),
                schedule?card([
                    sectionTitle('Atividades',items.length+' item(ns)'),
                    items.length?h('div',{class:'space-y-2'},items.map(item=>h('div',{class:'flex flex-wrap items-center justify-between gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800'},[
                        h('div',{class:'min-w-0'},[
                            h('div',{class:'font-medium'},itemLabel(item)),
                            h('div',{class:'text-xs text-zinc-500'},(item.planned_date?fmtDate(item.planned_date):'Ciclo #'+(item.cycle_position||item.position))+' · '+(item.duration_minutes||0)+' min · prioridade '+(item.priority||0)),
                        ]),
                        h('div',{class:'flex items-center gap-2'},[
                            badge(item.status,item.status==='concluido'?'green':item.status==='ignorado'?'zinc':'amber'),
                            btn(item.status==='concluido'?'Reabrir':'Concluir',()=>toggleScheduleItem(item),item.status==='concluido'?'ghost':'success'),
                        ]),
                    ]))):empty('Cronograma sem itens.'),
                ]):null,
            ]);
        }

        function renderReviews() {
            const list=state.value.reviews||[];
            const today=new Date().toISOString().slice(0,10);
            const groups=[
                ['Atrasadas',list.filter(r=>!r.completed&&r.next_date&&r.next_date<today),'red'],
                ['Hoje',list.filter(r=>!r.completed&&r.next_date===today),'amber'],
                ['Futuras',list.filter(r=>!r.completed&&(!r.next_date||r.next_date>today)),'sky'],
                ['Concluídas',list.filter(r=>r.completed),'green'],
            ];
            return h('div',{class:'space-y-4'},[
                card([sectionTitle('Revisões','Geradas automaticamente pelos prazos do concurso ou criadas manualmente.',btn('Nova revisão',()=>openReview()))]),
                ...groups.map(([label,items,tone])=>card([
                    sectionTitle(label,items.length+' revisão(ões)'),
                    items.length?h('div',{class:'space-y-2'},items.slice(0,150).map(r=>{
                        const subject=(state.value.subjects||[]).find(s=>s.id===r.subject_id)?.name||'Matéria';
                        const topic=(state.value.topics||[]).find(t=>t.id===r.topic_id)?.name;
                        const sub=(state.value.subtopics||[]).find(st=>st.id===r.subtopic_id)?.name;
                        return h('div',{class:'flex flex-wrap items-center justify-between gap-3 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800'},[
                            h('div',[h('strong',subject),h('div',{class:'text-xs text-zinc-500'},[topic,sub].filter(Boolean).join(' › ')+' · ciclo '+r.current_cycle+' · '+fmtDate(r.next_date))]),
                            h('div',{class:'flex gap-2'},[
                                !r.completed?btn('Concluir',()=>completeReview(r),'success'):null,
                                btn('Editar',()=>openReview(r),'ghost'),btn('×',()=>deleteReview(r),'danger'),
                            ]),
                        ]);
                    })):empty('Nenhuma revisão nesta categoria.'),
                ])),
            ]);
        }

        function renderFlashcards() {
            const decks=state.value.decks||[];
            const cards=state.value.cards||[];
            const visibleDecks=deckFilter.value?decks.filter(d=>d.id===deckFilter.value):decks;
            const ownDecks=decks.filter(d=>d.owner_type==='aluno'&&Number(d.student_id)===Number(state.value.student?.id));
            const now=new Date().toISOString().slice(0,10);
            const due=cards.filter(c=>(!deckFilter.value||c.deck_id===deckFilter.value)&&(!c.next_review||c.next_review<=now));
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Flashcards','Responda Certo ou Errado. O resultado alimenta automaticamente a repetição espaçada SM-2.',btn('Meu novo baralho',()=>openOwnDeck())),
                    field('Baralho',h('select',{value:deckFilter.value,class:'w-full max-w-md rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>deckFilter.value=e.target.value},[
                        h('option',{value:''},'Todos os baralhos'),...decks.map(d=>h('option',{value:d.id},(d.icon||'')+' '+d.name)),
                    ])),
                ]),
                card([
                    sectionTitle('Pendentes para revisão',due.length+' cartão(ões)'),
                    due.length?h('div',{class:'grid gap-3 md:grid-cols-2'},due.slice(0,100).map(c=>{
                        const feedback=flashcardFeedback.value[c.id];
                        return h('div',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700'},[
                            h('div',{class:'text-xs text-zinc-500'},decks.find(d=>d.id===c.deck_id)?.name||'Baralho'),
                            h('div',{class:'mt-2 font-semibold'},c.front),
                            c.hint&&!feedback?h('details',{class:'mt-2 text-xs'},[h('summary','Dica'),h('p',{class:'mt-1'},c.hint)]):null,
                            !feedback?h('div',{class:'mt-4 grid grid-cols-2 gap-2'},[
                                btn('Certo',()=>answerFlashcard(c,'Certo'),'success'),
                                btn('Errado',()=>answerFlashcard(c,'Errado'),'danger'),
                            ]):h('div',{class:'mt-4 rounded-lg border p-3 '+(feedback.correct?'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950':'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950')},[
                                h('strong',{class:'text-sm'},feedback.correct?'✓ Você acertou':'✗ Você errou'),
                                h('div',{class:'mt-1 text-sm'},'Resposta correta: '+feedback.expected),
                                feedback.explanation?h('p',{class:'mt-2 text-xs'},feedback.explanation):null,
                                feedback.next_review?h('p',{class:'mt-2 text-[11px] text-zinc-500'},'Próxima revisão: '+fmtDate(feedback.next_review)):null,
                            ]),
                        ]);
                    })):empty('Nenhum flashcard pendente agora.'),
                ]),
                card([
                    sectionTitle('Meus baralhos','Você também pode criar flashcards pessoais.'),
                    ownDecks.length?h('div',{class:'space-y-2'},ownDecks.map(d=>h('div',{class:'rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800'},[
                        h('div',{class:'flex flex-wrap items-center justify-between gap-2'},[
                            h('strong',(d.icon||'📚')+' '+d.name),
                            h('div',{class:'flex gap-2'},[btn('+ Cartão',()=>openOwnCard(d),'soft'),btn('Editar',()=>openOwnDeck(d),'ghost'),btn('Excluir',()=>deleteOwnDeck(d),'danger')]),
                        ]),
                        h('div',{class:'mt-2 space-y-1'},cards.filter(c=>c.deck_id===d.id).map(c=>h('div',{class:'flex items-center justify-between gap-2 text-xs'},[
                            h('span',c.front),h('div',{class:'flex gap-1'},[btn('Editar',()=>openOwnCard(d,c),'ghost'),btn('×',()=>deleteOwnCard(c),'danger')]),
                        ]))),
                    ]))):empty('Você ainda não criou baralhos pessoais.'),
                ]),
            ]);
        }

        function renderQuestions() {
            const list=state.value.questions||[];
            const subjects=[...new Set(list.map(q=>q.subject))].sort();
            const search=questionQuery.value.toLowerCase();
            const filtered=list.filter(q=>(!questionSubject.value||q.subject===questionSubject.value)&&(!search||q.prompt.toLowerCase().includes(search)||q.subject.toLowerCase().includes(search)||String(q.topic||'').toLowerCase().includes(search)));
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Banco de questões','Responda e acompanhe histórico e desempenho.',btn('Atualizar estatísticas',loadQuestionStats,'ghost')),
                    formGrid([
                        field('Disciplina',h('select',{value:questionSubject.value,class:'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onChange:e=>questionSubject.value=e.target.value},[
                            h('option',{value:''},'Todas'),...subjects.map(s=>h('option',{value:s},s)),
                        ])),
                        field('Buscar',h('input',{value:questionQuery.value,placeholder:'Enunciado ou assunto...',class:'w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onInput:e=>questionQuery.value=e.target.value})),
                    ]),
                    questionStats.value?h('div',{class:'mt-4 grid gap-3 sm:grid-cols-4'},[
                        stat('Respondidas',questionStats.value.total_answered),stat('Acertos',questionStats.value.correct),stat('Erros',questionStats.value.wrong),stat('Aproveitamento',(questionStats.value.accuracy||0)+'%'),
                    ]):null,
                ]),
                filtered.length?h('div',{class:'space-y-3'},filtered.slice(0,200).map((q,index)=>card([
                    h('div',{class:'flex flex-wrap gap-1'},[badge(q.subject,'sky'),q.topic?badge(q.topic):null,q.answered?badge(q.last_correct?'Última: acerto':'Última: erro',q.last_correct?'green':'red'):null]),
                    h('p',{class:'mt-3 whitespace-pre-wrap text-sm font-medium'},(index+1)+'. '+q.prompt),
                    q.type==='multipla_escolha'&&Array.isArray(q.alternatives)&&q.alternatives.length?h('div',{class:'mt-3 space-y-2'},q.alternatives.map(a=>h('label',{class:'flex items-start gap-2 rounded-lg border border-zinc-200 p-2 text-sm dark:border-zinc-700'},[
                        h('input',{type:'radio',name:'q-'+q.id,value:a,checked:answerDrafts.value[q.id]===a,onChange:e=>answerDrafts.value[q.id]=e.target.value}),h('span',a),
                    ]))):q.type==='certo_errado'?h('div',{class:'mt-3 flex gap-2'},['Certo','Errado'].map(a=>btn(a,()=>answerDrafts.value[q.id]=a,answerDrafts.value[q.id]===a?'primary':'ghost'))):h('input',{value:answerDrafts.value[q.id]||'',class:'mt-3 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950',onInput:e=>answerDrafts.value[q.id]=e.target.value}),
                    h('div',{class:'mt-3'},btn('Responder',()=>answerQuestion(q),'primary')),
                ]))):empty('Nenhuma questão encontrada com os filtros.'),
            ]);
        }

        function renderMocks() {
            const list=(state.value.mock_exams||[]).filter(m=>!activeContestId.value||m.contest_id===activeContestId.value);
            return card([
                sectionTitle('Simulados / Raio-X','Registre nota, tempo, questões e resultados por matéria.',btn('Novo simulado',()=>openMock())),
                list.length?h('div',{class:'space-y-3'},list.map(m=>{
                    const results=(state.value.mock_subject_results||[]).filter(r=>r.mock_exam_id===m.id);
                    return h('div',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700'},[
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
            const list=state.value.notebooks||[];
            return card([
                sectionTitle('Cadernos & Resumos','Anotações privadas vinculáveis ao edital.',btn('Novo caderno',()=>openNotebook())),
                list.length?h('div',{class:'grid gap-3 md:grid-cols-2 xl:grid-cols-3'},list.map(n=>h('article',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700',style:{borderTopColor:n.color||'#4f8ef7',borderTopWidth:'4px'}},[
                    h('div',{class:'flex items-start justify-between gap-2'},[h('div',[h('strong',n.title),h('div',{class:'text-xs text-zinc-500'},n.folder||'Geral')]),h('div',{class:'flex gap-1'},[btn('Editar',()=>openNotebook(n),'ghost'),btn('×',()=>deleteNotebook(n),'danger')])]),
                    h('div',{class:'mt-3 max-h-40 overflow-hidden whitespace-pre-wrap text-sm text-zinc-600 dark:text-zinc-300'},n.content||'Sem conteúdo.'),
                    h('div',{class:'mt-2 text-[11px] text-zinc-500'},'Atualizado '+fmtDateTime(n.updated_at)),
                ]))):empty('Nenhum caderno criado.'),
            ]);
        }

        function renderMetrics() {
            const m=state.value.metrics_summary||{};
            const timeline=state.value.metrics_timeline||[];
            const subjects=state.value.metrics_subjects||[];
            const report=[
                'Relatório CJC - '+(activeContest.value?.name||'Preparação'),
                'Período: '+(m.period?.start||'')+' a '+(m.period?.end||''),
                'Tempo estudado: '+fmtHours(m.seconds_studied||0),
                'Questões: '+(m.questions_solved||0)+' | Acerto: '+(m.accuracy??0)+'%',
                'Edital: '+(m.edict_percentage||0)+'%',
                'Sequência: '+(m.current_streak||0)+' dias',
                'Simulados: média '+(m.mock_average??'—')+'% | melhor '+(m.mock_best??'—')+'%',
            ].join('\n');
            return h('div',{class:'space-y-4'},[
                card([
                    sectionTitle('Métricas',m.period?'Período '+fmtDate(m.period.start)+' → '+fmtDate(m.period.end):'',h('div',{class:'flex gap-2'},[
                        btn('Copiar relatório',async()=>{await navigator.clipboard.writeText(report);success.value='Relatório copiado.';},'ghost'),
                        btn('Imprimir / PDF',()=>window.print(),'ghost'),
                    ])),
                    h('div',{class:'grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8'},[
                        stat('Tempo',fmtHours(m.seconds_studied||0)),stat('Questões',m.questions_solved||0),stat('Acerto',(m.accuracy??0)+'%'),stat('Dias ativos',m.active_days||0),
                        stat('Sequência',(m.current_streak||0)+'d'),stat('Edital',(m.edict_percentage||0)+'%'),stat('Média simulado',m.mock_average===null?'—':m.mock_average+'%'),stat('Hoje',fmtHours(m.seconds_today||0)),
                    ]),
                ]),
                card([
                    sectionTitle('Atividade diária','Tempo e questões por dia.'),
                    timeline.length?h('div',{class:'space-y-1'},timeline.filter(d=>d.active).slice(-60).map(d=>h('div',{class:'grid grid-cols-[90px_1fr_90px] items-center gap-2 text-xs'},[
                        h('span',fmtDate(d.date)),progressBar(Math.min(100,(Number(d.seconds||0)/7200)*100),fmtHours(d.seconds||0)),h('span',{class:'text-right'},d.questions+' q.'),
                    ]))):empty('Sem atividade no período.'),
                ]),
                card([
                    sectionTitle('Desempenho por matéria'),
                    subjects.length?h('div',{class:'overflow-x-auto'},[h('table',{class:'w-full text-left text-xs'},[
                        h('thead',[h('tr',[h('th',{class:'p-2'},'Matéria'),h('th',{class:'p-2'},'Tempo'),h('th',{class:'p-2'},'Questões'),h('th',{class:'p-2'},'Acerto'),h('th',{class:'p-2'},'Edital'),h('th',{class:'p-2'},'Simulados')])]),
                        h('tbody',subjects.map(s=>h('tr',{class:'border-t border-zinc-200 dark:border-zinc-800'},[
                            h('td',{class:'p-2 font-semibold'},s.name),h('td',{class:'p-2'},fmtHours(s.seconds)),h('td',{class:'p-2'},s.questions),h('td',{class:'p-2'},(s.accuracy??'—')+'%'),h('td',{class:'min-w-36 p-2'},progressBar(s.coverage||0)),h('td',{class:'p-2'},s.mock_average===null?'—':s.mock_average+'%'),
                        ]))),
                    ])]):empty('Sem dados por matéria.'),
                ]),
            ]);
        }

        function renderCourses() {
            const list=state.value.courses||[];
            return card([
                sectionTitle('Cursos e aulas','Conteúdo audiovisual servido pela área de membros do Getfy.'),
                list.length?h('div',{class:'grid gap-3 md:grid-cols-2 xl:grid-cols-3'},list.map(c=>h('div',{class:'rounded-xl border border-zinc-200 p-4 dark:border-zinc-700'},[
                    h('strong',c.name),c.description?h('p',{class:'mt-2 text-xs text-zinc-500'},c.description):null,
                    h('a',{href:c.access_url,class:'mt-4 inline-flex rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white'},'Acessar curso'),
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
            return card([
                sectionTitle('Ajuda CJC','Como sua preparação funciona.'),
                h('div',{class:'prose prose-sm max-w-none dark:prose-invert'},[
                    h('p','Escolha o concurso ativo no topo. O conteúdo exibido respeita seu produto, concursos e editais atribuídos.'),
                    h('ul',[
                        h('li','Use o Timer para registrar tempo e questões no mesmo lançamento.'),
                        h('li','Ao concluir tópicos do edital, o CJC cria revisões automaticamente conforme os prazos do concurso.'),
                        h('li','O cronograma inteligente prioriza matérias com baixa cobertura/desempenho e respeita sua carga horária.'),
                        h('li','Flashcards usam repetição espaçada SM-2.'),
                        h('li','Cursos e aulas usam a área de membros completa do Getfy.'),
                    ]),
                ]),
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

            if(m.type==='timer'){
                const f=timer.value.form;
                const topicOptions=activeTopics.value.filter(t=>!f.subject_id||t.subject_id===f.subject_id);
                const subOptions=activeSubtopics.value.filter(st=>!f.topic_id||st.topic_id===f.topic_id);
                return modal('Timer de estudo',h('div',{class:'space-y-5'},[
                    h('div',{class:'text-center'},[
                        h('div',{class:'font-mono text-5xl font-bold'},fmtHours(timer.value.elapsed)),
                        h('div',{class:'mt-3 flex justify-center gap-2'},[
                            timer.value.running?btn('Pausar',pauseTimer,'warning'):btn(timer.value.elapsed?'Continuar':'Iniciar',startTimer,'success'),
                            btn('Zerar',resetTimer,'ghost'),
                        ]),
                    ]),
                    formGrid([
                        field('Matéria',select(f,'subject_id',optionize(activeSubjects.value),{placeholder:'—',onChange:()=>{f.topic_id='';f.subtopic_id='';}})),
                        field('Tópico',select(f,'topic_id',optionize(topicOptions),{placeholder:'—',onChange:()=>f.subtopic_id=''})),
                        field('Subtópico',select(f,'subtopic_id',optionize(subOptions),{placeholder:'—'})),
                        field('Modo',select(f,'mode',[{value:'estudo',label:'Estudo'},{value:'revisao',label:'Revisão'},{value:'questoes',label:'Questões'},{value:'lei_seca',label:'Lei seca'}])),
                        field('Questões resolvidas',input(f,'solved',{type:'number',number:true,min:0})),
                        field('Acertos',input(f,'correct',{type:'number',number:true,min:0})),
                    ]),
                    field('Observações',textarea(f,'notes',{rows:3})),
                    (f.topic_id||f.subtopic_id)?checkbox(f,'mark_studied','Marcar este conteúdo como estudado ao finalizar'):null,
                ]),closeModal,[btn('Registrar e finalizar',finishTimer,'primary',{disabled:timer.value.elapsed<1})]);
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
                return modal(m.item?'Editar meu flashcard':'Novo flashcard Certo/Errado',h('div',{class:'space-y-4'},[
                    h('div',{class:'rounded-lg bg-zinc-50 p-3 text-xs text-zinc-500 dark:bg-zinc-800'},'Crie uma afirmação e defina se ela está certa ou errada.'),
                    field('Afirmação',textarea(f,'front',{rows:5})),
                    field('Resposta correta',select(f,'correct_answer',[{value:'Certo',label:'Certo'},{value:'Errado',label:'Errado'}])),
                    field('Explicação / fundamento',textarea(f,'explanation',{rows:4})),
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
                const f=m.form;
                return modal(m.item?'Editar caderno':'Novo caderno',h('div',{class:'space-y-4'},[
                    formGrid([field('Título',input(f,'title',{required:true})),field('Pasta',input(f,'folder')),field('Cor',input(f,'color',{type:'color'}))]),
                    field('Conteúdo',textarea(f,'content',{rows:16})),
                    formGrid([field('Edital',select(f,'edict_id',activeEdicts.value.map(e=>({value:e.id,label:e.name})),{placeholder:'—'})),field('Matéria',select(f,'subject_id',optionize(activeSubjects.value),{placeholder:'—'})),field('Tópico',select(f,'topic_id',optionize(activeTopics.value),{placeholder:'—'}))]),
                ]),closeModal,[btn('Salvar',()=>saveNotebook(m),'primary')],'max-w-4xl');
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

        const availableTabs = computed(() => availableModules(capabilities.value)
            .map(([id,label])=>({id,label})));

        return () => h('div',{class:'space-y-5'},[
            h('div',{class:'flex flex-wrap items-start justify-between gap-4'},[
                h('div',[h('h1',{class:'text-2xl font-bold text-zinc-900 dark:text-white'},'Minha preparação'),h('p',{class:'mt-1 text-sm text-zinc-500'},'CJC · Chega Junto Concurseiro')]),
                renderContestSelector(),
            ]),
            alertBox(message.value),alertBox(success.value,'success'),
            tabs(availableTabs.value,activeTab.value,id=>activeTab.value=id),
            renderTab(),
            busy.value?h('div',{class:'fixed bottom-5 right-5 z-[100001] rounded-xl bg-zinc-950 px-4 py-3 text-sm font-semibold text-white shadow-xl'},'Atualizando…'):null,
            renderModal(),
        ]);
    },
};
