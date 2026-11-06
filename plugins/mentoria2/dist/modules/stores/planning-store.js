/**
 * Planning Store - Mentoria 2.0
 * Manages calendar, schedule items, cycles, and syllabus progress.
 */

import { state } from '../core.js?v=531b8a943e83';

class PlanningStore {
  get calendarItems() {
    return state.calendarItems || [];
  }

  setCalendarItems(items) {
    state.calendarItems = Array.isArray(items) ? items : [];
  }

  updateCalendarItem(id, patch) {
    const items = this.calendarItems.map(item => String(item.id) === String(id) ? { ...item, ...patch } : item);
    this.setCalendarItems(items);
  }

  get calendarCursor() {
    return state.calendarCursor;
  }

  setCalendarCursor(dateStr) {
    state.calendarCursor = dateStr;
  }

  get planningView() {
    return state.planningView || 'week';
  }

  setPlanningView(view) {
    state.planningView = view;
  }

  get syllabus() {
    return window.M2Data?.syllabus || [];
  }

  setSyllabus(syllabus) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.syllabus = Array.isArray(syllabus) ? syllabus : [];
  }

  get subjects() {
    return window.M2Data?.subjects || [];
  }

  setSubjects(subjects) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.subjects = Array.isArray(subjects) ? subjects : [];
  }
}

export const planningStore = new PlanningStore();

