import { Mentoria2Index } from './admin.js';
import { Mentoria2Student } from './student.js';
import { Mentoria2CourseBuilder, Mentoria2LessonExercises } from './course.js';

const styleId = 'mentoria2-plugin-style';

if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
    const link = document.createElement('link');
    link.id = styleId;
    link.rel = 'stylesheet';
    link.href = new URL('./plugin-ui.css', import.meta.url).href;
    document.head.appendChild(link);
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

