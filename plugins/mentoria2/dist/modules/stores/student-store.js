/**
 * Student Store - Mentoria 2.0
 * Manages student domain state: student profile, gamification, notebooks, notifications, and announcements.
 */

import { state } from '../core.js?v=ab398a02b1f4';

class StudentStore {
  get student() {
    return window.M2Data?.student || {};
  }

  updateProfile(patch) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.student = { ...(window.M2Data.student || {}), ...patch };
  }

  get xp() {
    return window.M2Data?.student?.xp || 0;
  }

  setXp(amount) {
    if (!window.M2Data) window.M2Data = {};
    if (!window.M2Data.student) window.M2Data.student = {};
    window.M2Data.student.xp = Number(amount) || 0;
  }

  applyGamification(gamificationResult) {
    if (!gamificationResult) return;
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.gamification = gamificationResult;
    if (gamificationResult.total_xp !== undefined) {
      this.setXp(gamificationResult.total_xp);
    }
  }

  get notebooks() {
    return window.M2Data?.notebooks || [];
  }

  setNotebooks(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.notebooks = Array.isArray(list) ? list : [];
  }

  addNotebook(note) {
    const current = this.notebooks;
    this.setNotebooks([note, ...current]);
  }

  updateNotebook(id, patch) {
    const list = this.notebooks.map(n => String(n.id) === String(id) ? { ...n, ...patch } : n);
    this.setNotebooks(list);
  }

  removeNotebook(id) {
    const list = this.notebooks.filter(n => String(n.id) !== String(id));
    this.setNotebooks(list);
  }

  get notifications() {
    return window.M2Data?.notifications?.items || state.notifications || [];
  }

  setNotifications(items) {
    state.notifications = Array.isArray(items) ? items : [];
  }

  get announcements() {
    return window.M2Data?.announcements || [];
  }

  setAnnouncements(list) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.announcements = Array.isArray(list) ? list : [];
  }
}

export const studentStore = new StudentStore();

