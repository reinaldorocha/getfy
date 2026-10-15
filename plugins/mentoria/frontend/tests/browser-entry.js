import { createApp } from 'vue';
import { MentoriaStudent } from '../src/student.js';
createApp(MentoriaStudent, { plugin_ui_page: window.fixture }).mount('#app');
