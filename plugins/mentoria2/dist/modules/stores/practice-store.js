/**
 * Practice Store - Mentoria 2.0
 * Manages questions, active study sessions, mock exams, and error notebooks.
 */

import { state } from '../core.js?v=d7ba9846a45d';

class PracticeStore {
  get questions() {
    return window.M2Data?.questions || [];
  }

  setQuestions(questions) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.questions = Array.isArray(questions) ? questions : [];
  }

  get currentQuestionIndex() {
    return state.currentQuestionIndex || 0;
  }

  setCurrentQuestionIndex(index) {
    state.currentQuestionIndex = Number(index) || 0;
  }

  get selectedOption() {
    return state.selectedOption;
  }

  setSelectedOption(option) {
    state.selectedOption = option;
  }

  get mockExams() {
    return window.M2Data?.mockExams || [];
  }

  setMockExams(mocks) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.mockExams = Array.isArray(mocks) ? mocks : [];
  }

  addMockExam(mock) {
    const current = this.mockExams;
    this.setMockExams([mock, ...current]);
  }

  get errorNotebook() {
    return window.M2Data?.errorNotebook || [];
  }

  setErrorNotebook(items) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.errorNotebook = Array.isArray(items) ? items : [];
  }

  get reviews() {
    return window.M2Data?.reviews || [];
  }

  setReviews(reviews) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.reviews = Array.isArray(reviews) ? reviews : [];
  }
}

export const practiceStore = new PracticeStore();

