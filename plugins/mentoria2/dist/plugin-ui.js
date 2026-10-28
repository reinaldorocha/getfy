import { Mentoria2Index } from './admin.js?v=d6fd58c3ef81';
import { Mentoria2Student } from './student.js?v=d6fd58c3ef81';
import { Mentoria2CourseBuilder, Mentoria2LessonExercises } from './course.js?v=d6fd58c3ef81';

const styleId = 'mentoria2-plugin-style';

if (typeof document !== 'undefined') {
    const stylesheetHref = new URL('./plugin-ui.css?v=d6fd58c3ef81', import.meta.url).href;
    const link = document.getElementById(styleId) || document.createElement('link');
    link.id = styleId;
    link.rel = 'stylesheet';

    // Atualiza um link deixado por um bundle anterior: os assets do plugin
    // s?o versionados a cada build e n?o devem manter CSS antigo em mem?ria.
    if (link.href !== stylesheetHref) {
        link.href = stylesheetHref;
    }
    if (!link.parentNode) {
        document.head.appendChild(link);
    }
}

window.__GETFY_PLUGIN_UI__ = window.__GETFY_PLUGIN_UI__ || {};
window.__GETFY_PLUGIN_UI__.mentoria2 = {
    ...(window.__GETFY_PLUGIN_UI__.mentoria2 || {}),
    Mentoria2Index,
    Mentoria2Student,
    Mentoria2CourseBuilder,
    Mentoria2LessonExercises,
};

window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria2', 'Mentoria2Index', Mentoria2Index);
window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria2', 'Mentoria2Student', Mentoria2Student);
window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria2', 'Mentoria2CourseBuilder', Mentoria2CourseBuilder);
window.__GETFY_REGISTER_PLUGIN_UI__?.('mentoria2', 'Mentoria2LessonExercises', Mentoria2LessonExercises);

export {
    Mentoria2Index,
    Mentoria2Student,
    Mentoria2CourseBuilder,
    Mentoria2LessonExercises,
};

