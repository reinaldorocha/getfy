/**
 * Radar Store - Mentoria 2.0
 * Manages public notice radar data, filters, and mentor review queue.
 */

import { state } from '../core.js?v=778a843a35b2';

class RadarStore {
  get editais() {
    return window.M2Data?.radarEditais || [];
  }

  setEditais(items) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.radarEditais = Array.isArray(items) ? items : [];
  }

  get filters() {
    return state.radarFilters || { sphere: 'all', careerTrack: 'all' };
  }

  setFilters(filters) {
    state.radarFilters = { ...(state.radarFilters || {}), ...filters };
  }

  get isLoading() {
    return Boolean(state.radarLoading);
  }

  setLoading(loading) {
    state.radarLoading = Boolean(loading);
  }

  get sources() {
    return window.M2Data?.radarSources || [];
  }

  setSources(sources) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.radarSources = Array.isArray(sources) ? sources : [];
  }

  get reviewQueue() {
    return window.M2Data?.radarReviewQueue || [];
  }

  setReviewQueue(queue) {
    if (!window.M2Data) window.M2Data = {};
    window.M2Data.radarReviewQueue = Array.isArray(queue) ? queue : [];
  }
}

export const radarStore = new RadarStore();

