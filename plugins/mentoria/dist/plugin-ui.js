import { MentoriaIndex } from './admin.js?v=2315fc17bb77';
import { MentoriaStudent } from './student.js?v=2315fc17bb77';
import { MentoriaCourseBuilder, MentoriaLessonExercises } from './course.js?v=2315fc17bb77';

const styleId = 'mentoria-plugin-style';

if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
    const link = document.createElement('link');
    link.id = styleId;
    link.rel = 'stylesheet';
    link.href = new URL('./plugin-ui.css?v=2315fc17bb77', import.meta.url).href;
    document.head.appendChild(link);
}

window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__.mentoria = {
    ...(window.__GETFY_PLUGIN_UI__.mentoria || {}),
    MentoriaIndex,
    MentoriaStudent,
    MentoriaCourseBuilder,
    MentoriaLessonExercises,
};

window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria', 'MentoriaIndex', MentoriaIndex);
window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria', 'MentoriaStudent', MentoriaStudent);
window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria', 'MentoriaCourseBuilder', MentoriaCourseBuilder);
window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria', 'MentoriaLessonExercises', MentoriaLessonExercises);
