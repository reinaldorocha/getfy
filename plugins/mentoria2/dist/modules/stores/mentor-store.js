/**
 * Mentor Store - Mentoria 2.0
 * Manages mentor domain state: students, cohorts, contests, feedback, branding, and curation.
 */

import { state } from '../core.js?v=d7ba9846a45d';

class MentorStore {
  get students() {
    return window.M2Data?.mentorStudents || window.M2Data?.students || [];
  }

  setStudents(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.mentorStudents = Array.isArray(list) ? list : [];
  }

  get cohorts() {
    return window.M2Data?.cohorts || [];
  }

  setCohorts(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.cohorts = Array.isArray(list) ? list : [];
  }

  addCohort(cohort) {
    const list = this.cohorts;
    this.setCohorts([cohort, ...list]);
  }

  removeCohort(cohortId) {
    const list = this.cohorts.filter(c => String(c.id) !== String(cohortId));
    this.setCohorts(list);
  }

  get contests() {
    return window.M2Data?.contests || [];
  }

  setContests(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.contests = Array.isArray(list) ? list : [];
  }

  addContest(contest) {
    const list = this.contests;
    this.setContests([contest, ...list]);
  }

  removeContest(contestId) {
    const list = this.contests.filter(c => String(c.id) !== String(contestId));
    this.setContests(list);
  }

  get feedbacks() {
    return window.M2Data?.mentorFeedbacks || [];
  }

  setFeedbacks(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.mentorFeedbacks = Array.isArray(list) ? list : [];
  }

  get platformColors() {
    return window.M2Data?.mentorship?.platform_colors || {};
  }

  setPlatformColors(colors) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.mentorship = window.M2Data.mentorship || {};
    window.M2Data.mentorship.platform_colors = colors;
  }

  get flashcardDecks() {
    return window.M2Data?.flashcardDecks || [];
  }

  setFlashcardDecks(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.flashcardDecks = Array.isArray(list) ? list : [];
  }

  get products() {
    return window.M2Data?.mentorProducts || [];
  }

  setProducts(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.mentorProducts = Array.isArray(list) ? list : [];
  }
}

export const mentorStore = new MentorStore();

