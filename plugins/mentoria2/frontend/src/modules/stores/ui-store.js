/**
 * UI Store - Mentoria 2.0
 * Manages presentation state: modals, confirmations, navigation screens,
 * themes, sidebar states, loading flags, and notifications.
 */

import { state } from '../core.js';

class UiStore {
  // Navigation & Screens
  get screen() {
    return state.screen;
  }

  setScreen(newScreen) {
    state.screen = newScreen;
  }

  get mode() {
    return state.mode;
  }

  setMode(mode) {
    state.mode = mode;
  }

  // Modals & Dialogs
  get modal() {
    return state.modal;
  }

  openModal(modalName, payload = null) {
    state.modal = modalName;
    if (payload) {
      if (modalName === 'confirmation') state.confirmation = payload;
      if (modalName === 'quick-prompt') state.quickPrompt = payload;
    }
  }

  closeModal() {
    state.modal = null;
    state.confirmation = null;
    state.quickPrompt = null;
    state.questionFormDraft = null;
    state.configuringProduct = null;
  }

  // Loading States
  isLoading(key) {
    return Boolean(state.loadingStates?.[key]);
  }

  setLoading(key, isLoading) {
    state.loadingStates = state.loadingStates || {};
    state.loadingStates[key] = Boolean(isLoading);
  }

  // Theme & Appearance
  get theme() {
    return state.theme || 'dark';
  }

  setTheme(theme) {
    state.theme = theme;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('m2_theme', theme);
    }
  }

  get sidebarCollapsed() {
    return Boolean(state.sidebarCollapsed);
  }

  toggleSidebarCollapse() {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('m2_sidebar_collapsed', String(state.sidebarCollapsed));
    }
    return state.sidebarCollapsed;
  }

  isSidebarSectionOpen(sectionId, defaultOpen = true) {
    state.sidebarSectionsOpen = state.sidebarSectionsOpen || {};
    return state.sidebarSectionsOpen[sectionId] !== undefined
      ? state.sidebarSectionsOpen[sectionId]
      : defaultOpen;
  }

  setSidebarSectionOpen(sectionId, isOpen) {
    state.sidebarSectionsOpen = state.sidebarSectionsOpen || {};
    state.sidebarSectionsOpen[sectionId] = Boolean(isOpen);
  }
}

export const uiStore = new UiStore();

