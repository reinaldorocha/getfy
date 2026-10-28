import { Mentoria2Index } from './admin.js?v=10e94e945bc8';
import { Mentoria2Student } from './student.js?v=10e94e945bc8';
import { Mentoria2CourseBuilder, Mentoria2LessonExercises } from './course.js?v=10e94e945bc8';

const styleId = 'mentoria2-plugin-style';

if (typeof document !== 'undefined' && !document.getElementById(styleId)) {
    const link = document.createElement('link');
    link.id = styleId;
    link.rel = 'stylesheet';
    link.href = new URL('./plugin-ui.css?v=10e94e945bc8', import.meta.url).href;
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

