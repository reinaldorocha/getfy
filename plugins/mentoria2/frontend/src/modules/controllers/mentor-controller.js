/**
 * Mentor Controller - Mentoria 2.0
 * Handles all mentor operational actions, cohort & contest management,
 * syllabus & question curation, materials, flashcards, official mocks,
 * branding & theme customization, announcements, feedback, and student administration.
 */

export const THEME_PRESETS = {
  rota_da_farda: {
    dark: {
      theme_preset: 'rota_da_farda',
      primary: '#D7192A',
      secondary: '#E8A332',
      sidebar: '#1B1B1E',
      sidebar_text: '#A1A1AA',
      bg_app: '#0B0B0C',
      bg_card: '#1B1B1E',
      border_color: '#2E2E33',
      text_main: '#F4F4F5',
      text_muted: '#A1A1AA',
      accent_green: '#10b981',
      accent_amber: '#E8A332',
      accent_rose: '#E5313F'
    },
    light: {
      theme_preset: 'rota_da_farda',
      primary: '#D7192A',
      secondary: '#C27803',
      sidebar: '#F4F4F5',
      sidebar_text: '#2E2E33',
      bg_app: '#F4F4F5',
      bg_card: '#FFFFFF',
      border_color: '#D9D9DE',
      text_main: '#0B0B0C',
      text_muted: '#6B6B73',
      accent_green: '#10b981',
      accent_amber: '#E8A332',
      accent_rose: '#D7192A'
    }
  },
  midnight: {
    dark: {
      theme_preset: 'midnight',
      primary: '#0f766e',
      secondary: '#7c3aed',
      sidebar: '#0f172a',
      sidebar_text: '#94a3b8',
      bg_app: '#090d16',
      bg_card: '#111827',
      border_color: '#1e293b',
      text_main: '#f8fafc',
      text_muted: '#94a3b8',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    },
    light: {
      theme_preset: 'midnight',
      primary: '#0f766e',
      secondary: '#7c3aed',
      sidebar: '#f8fafc',
      sidebar_text: '#475569',
      bg_app: '#f1f5f9',
      bg_card: '#ffffff',
      border_color: '#e2e8f0',
      text_main: '#0f172a',
      text_muted: '#64748b',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    }
  },
  emerald: {
    dark: {
      theme_preset: 'emerald',
      primary: '#059669',
      secondary: '#d97706',
      sidebar: '#064e3b',
      sidebar_text: '#a7f3d0',
      bg_app: '#022c22',
      bg_card: '#064e3b',
      border_color: '#047857',
      text_main: '#f0fdf4',
      text_muted: '#a7f3d0',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    },
    light: {
      theme_preset: 'emerald',
      primary: '#059669',
      secondary: '#d97706',
      sidebar: '#ecfdf5',
      sidebar_text: '#065f46',
      bg_app: '#f0fdf4',
      bg_card: '#ffffff',
      border_color: '#a7f3d0',
      text_main: '#064e3b',
      text_muted: '#047857',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    }
  },
  police: {
    dark: {
      theme_preset: 'police',
      primary: '#2563eb',
      secondary: '#06b6d4',
      sidebar: '#0f172a',
      sidebar_text: '#94a3b8',
      bg_app: '#0a0f1d',
      bg_card: '#131b2e',
      border_color: '#1e293b',
      text_main: '#f8fafc',
      text_muted: '#94a3b8',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    },
    light: {
      theme_preset: 'police',
      primary: '#2563eb',
      secondary: '#06b6d4',
      sidebar: '#f0f4f8',
      sidebar_text: '#334155',
      bg_app: '#f8fafc',
      bg_card: '#ffffff',
      border_color: '#cbd5e1',
      text_main: '#0f172a',
      text_muted: '#64748b',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    }
  },
  clean_light: {
    dark: {
      theme_preset: 'clean_light',
      primary: '#3b82f6',
      secondary: '#6366f1',
      sidebar: '#0f172a',
      sidebar_text: '#94a3b8',
      bg_app: '#0f172a',
      bg_card: '#1e293b',
      border_color: '#334155',
      text_main: '#f8fafc',
      text_muted: '#94a3b8',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    },
    light: {
      theme_preset: 'clean_light',
      primary: '#2563eb',
      secondary: '#6366f1',
      sidebar: '#f8fafc',
      sidebar_text: '#475569',
      bg_app: '#f1f5f9',
      bg_card: '#ffffff',
      border_color: '#e2e8f0',
      text_main: '#0f172a',
      text_muted: '#64748b',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    }
  },
  violet: {
    dark: {
      theme_preset: 'violet',
      primary: '#7c3aed',
      secondary: '#ec4899',
      sidebar: '#1e1b4b',
      sidebar_text: '#c4b5fd',
      bg_app: '#0f0d24',
      bg_card: '#181534',
      border_color: '#2e295b',
      text_main: '#faf5ff',
      text_muted: '#a78bfa',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    },
    light: {
      theme_preset: 'violet',
      primary: '#7c3aed',
      secondary: '#ec4899',
      sidebar: '#faf5ff',
      sidebar_text: '#6b21a8',
      bg_app: '#fdf4ff',
      bg_card: '#ffffff',
      border_color: '#f0abfc',
      text_main: '#3b0764',
      text_muted: '#86198f',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    }
  },
  amber_focus: {
    dark: {
      theme_preset: 'amber_focus',
      primary: '#d97706',
      secondary: '#ea580c',
      sidebar: '#1c1917',
      sidebar_text: '#a8a29e',
      bg_app: '#0c0a09',
      bg_card: '#1c1917',
      border_color: '#292524',
      text_main: '#fafaf9',
      text_muted: '#a8a29e',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    },
    light: {
      theme_preset: 'amber_focus',
      primary: '#d97706',
      secondary: '#ea580c',
      sidebar: '#fefce8',
      sidebar_text: '#78350f',
      bg_app: '#fffbeb',
      bg_card: '#ffffff',
      border_color: '#fde68a',
      text_main: '#451a03',
      text_muted: '#92400e',
      accent_green: '#10b981',
      accent_amber: '#f59e0b',
      accent_rose: '#ef4444'
    }
  }
};

export function captureFormDrafts(state) {
  if (state.modal === 'question-form') {
    state.questionFormDraft = {
      subject: document.getElementById('m2-qf-subject')?.value || '',
      topic: document.getElementById('m2-qf-topic')?.value || '',
      board: document.getElementById('m2-qf-board')?.value || '',
      difficulty: document.getElementById('m2-qf-difficulty')?.value || 'Média',
      type: document.getElementById('m2-qf-type')?.value || 'multipla_escolha',
      prompt: document.getElementById('m2-qf-prompt')?.value || '',
      altA: document.getElementById('m2-qf-alt-a')?.value || '',
      altB: document.getElementById('m2-qf-alt-b')?.value || '',
      altC: document.getElementById('m2-qf-alt-c')?.value || '',
      altD: document.getElementById('m2-qf-alt-d')?.value || '',
      altE: document.getElementById('m2-qf-alt-e')?.value || '',
      correct: document.getElementById('m2-qf-correct')?.value || 'A',
      explanation: document.getElementById('m2-qf-explanation')?.value || '',
    };
  }
}

export function updateAudienceDOM(triggerElement, state, render, renderAudienceSelector) {
  captureFormDrafts(state);
  const card = (triggerElement && triggerElement.closest)
    ? triggerElement.closest('.m2-audience-selector-card')
    : document.querySelector('.m2-audience-selector-card');
  if (card && typeof renderAudienceSelector === 'function') {
    const titleEl = card.querySelector('span[style*="font-weight:700"]');
    const title = titleEl ? titleEl.textContent : 'Disponibilização / Público-Alvo';
    const temp = document.createElement('div');
    temp.innerHTML = renderAudienceSelector(state.currentTargets, title);
    const newCard = temp.firstElementChild;
    if (newCard) {
      card.replaceWith(newCard);
      return;
    }
  }
  render();
}

export function handleMentorAction({
  action,
  actionBtn,
  event,
  state,
  api,
  render,
  showToast,
  loadMentorResource,
  loadDeckCards,
  applyTheme,
  getAnnouncements,
  saveAnnouncements,
  renderAudienceSelector
}) {
  // Curation / Content Status
  if (action === 'set-content-status') {
    const type = actionBtn.dataset.contentType;
    const id = actionBtn.dataset.id;
    const status = actionBtn.dataset.status;
    const routes = {
      question: `/mentoria2/questions/${encodeURIComponent(id)}/curation`,
      flashcard_deck: `/mentoria2/flashcard-decks/${encodeURIComponent(id)}/curation`,
      flashcard: `/mentoria2/flashcards/${encodeURIComponent(id)}/curation`
    };
    const screens = { question: 'mentor-questions', flashcard_deck: 'mentor-flashcards' };
    if (!routes[type] || !status) return true;
    api(routes[type], { method: 'PATCH', body: JSON.stringify({ content_status: status }) })
      .then(() => loadMentorResource(screens[type] || 'mentor-flashcards', api).then(() => render()))
      .then(() => showToast(status === 'publicado' ? 'Conteúdo publicado para o público definido.' : 'Conteúdo enviado para revisão.', 'success'))
      .catch(() => showToast('Não foi possível atualizar a curadoria do conteúdo.', 'error'));
    return true;
  }

  // Mentor Paginated Resource Pages
  if (action === 'mentor-list-page') {
    const screen = actionBtn.dataset.screen;
    const page = Number(actionBtn.dataset.page);
    if (screen && Number.isInteger(page) && page > 0) {
      loadMentorResource(screen, api, page).then(() => render()).catch(error => showToast('Não foi possível carregar a página.', 'error'));
    }
    return true;
  }

  // Mentor Settings & Platform Branding / Themes
  if (action === 'switch-mentor-settings-tab') {
    state.mentorSettingsTab = actionBtn.dataset.tab || 'general';
    render();
    return true;
  }

  if (action === 'switch-color-edit-scheme') {
    state.colorEditScheme = actionBtn.dataset.scheme || 'dark';
    render();
    return true;
  }

  if (action === 'select-theme-preset') {
    const preset = actionBtn.dataset.preset;
    const scheme = state.colorEditScheme || 'dark';
    const selected = THEME_PRESETS[preset] || THEME_PRESETS.rota_da_farda || THEME_PRESETS.midnight;
    window.M2Data.mentorship = window.M2Data.mentorship || {};
    window.M2Data.mentorship.platform_colors = window.M2Data.mentorship.platform_colors || {};
    window.M2Data.mentorship.platform_colors.dark = { ...selected.dark };
    window.M2Data.mentorship.platform_colors.light = { ...selected.light };
    Object.assign(window.M2Data.mentorship.platform_colors, selected[scheme] || selected.dark);
    if (typeof applyTheme === 'function') applyTheme();
    render();
    showToast(`Tema ${selected[scheme]?.theme_preset === 'rota_da_farda' ? 'Rota da Farda Oficial' : 'pré-definido'} selecionado! Clique em "Salvar Tema & Paleta" para confirmar.`, 'info');
    return true;
  }

  if (action === 'save-platform-colors') {
    const scheme = state.colorEditScheme || 'dark';
    window.M2Data.mentorship = window.M2Data.mentorship || {};
    const currentPlatformColors = window.M2Data.mentorship.platform_colors || {};
    const existingDark = currentPlatformColors.dark || { ...currentPlatformColors };
    const existingLight = currentPlatformColors.light || { ...currentPlatformColors };

    const formColors = {
      theme_preset: document.getElementById('m2-platform-theme-preset')?.value || 'custom',
      primary: document.getElementById('m2-platform-color-primary')?.value || '#D7192A',
      secondary: document.getElementById('m2-platform-color-secondary')?.value || '#E8A332',
      sidebar: document.getElementById('m2-platform-color-sidebar')?.value || '#1B1B1E',
      sidebar_text: document.getElementById('m2-platform-color-sidebar_text')?.value || '#A1A1AA',
      bg_app: document.getElementById('m2-platform-color-bg_app')?.value || '#0B0B0C',
      bg_card: document.getElementById('m2-platform-color-bg_card')?.value || '#1B1B1E',
      border_color: document.getElementById('m2-platform-color-border_color')?.value || '#2E2E33',
      text_main: document.getElementById('m2-platform-color-text_main')?.value || '#F4F4F5',
      text_muted: document.getElementById('m2-platform-color-text_muted')?.value || '#A1A1AA',
      accent_green: document.getElementById('m2-platform-color-accent_green')?.value || '#10b981',
      accent_amber: document.getElementById('m2-platform-color-accent_amber')?.value || '#E8A332',
      accent_rose: document.getElementById('m2-platform-color-accent_rose')?.value || '#E5313F',
    };

    const darkPalette = scheme === 'dark' ? formColors : existingDark;
    const lightPalette = scheme === 'light' ? formColors : existingLight;

    const colors = {
      ...darkPalette,
      dark: darkPalette,
      light: lightPalette
    };

    api('/mentoria2/settings/platform-colors', { method: 'PUT', body: JSON.stringify({ colors }) }).then(result => {
      window.M2Data.mentorship = window.M2Data.mentorship || {};
      window.M2Data.mentorship.platform_colors = result.platform_colors || colors;
      if (typeof applyTheme === 'function') applyTheme();
      render();
      showToast('Tema e paleta de cores (Claro e Escuro) salvos com sucesso na plataforma!', 'success');
    }).catch(() => showToast('Não foi possível salvar as cores da plataforma.', 'error'));
    return true;
  }

  if (action === 'reset-platform-colors') {
    const defaultDark = { ...THEME_PRESETS.rota_da_farda.dark };
    const defaultLight = { ...THEME_PRESETS.rota_da_farda.light };
    window.M2Data.mentorship = window.M2Data.mentorship || {};
    window.M2Data.mentorship.platform_colors = {
      ...defaultDark,
      dark: defaultDark,
      light: defaultLight
    };
    if (typeof applyTheme === 'function') applyTheme();
    render();
    showToast('Cores restauradas para o tema oficial Rota da Farda (Claro e Escuro).', 'info');
    return true;
  }

  if (action === 'choose-platform-logo') {
    const input = document.getElementById('m2-platform-logo-input');
    if (!input) return true;
    input.value = '';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      if (!['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'].includes(file.type) || file.size > 5 * 1024 * 1024) {
        showToast('Envie uma imagem JPG, PNG, WebP ou SVG de até 5 MB.', 'error');
        return;
      }
      const formData = new FormData();
      formData.append('logo', file);
      showToast('Enviando logo...', 'info');
      api('/mentoria2/settings/logo', { method: 'POST', body: formData })
        .then(result => {
          window.M2Data.mentorship = { ...(window.M2Data.mentorship || {}), platform_logo: result.platform_logo || null };
          render();
          showToast('Logo da plataforma atualizada com sucesso.', 'success');
        })
        .catch(() => showToast('Não foi possível enviar a logo.', 'error'));
    };
    input.click();
    return true;
  }

  if (action === 'remove-platform-logo') {
    api('/mentoria2/settings/logo', { method: 'DELETE' })
      .then(() => {
        window.M2Data.mentorship = { ...(window.M2Data.mentorship || {}), platform_logo: null };
        render();
        showToast('Logo removida com sucesso.', 'success');
      })
      .catch(() => showToast('Não foi possível remover a logo.', 'error'));
    return true;
  }

  if (action === 'save-platform-branding') {
    const brandName = document.getElementById('m2-branding-brand-name')?.value?.trim();
    const studentLabel = document.getElementById('m2-branding-student-label')?.value?.trim();
    const mentorLabel = document.getElementById('m2-branding-mentor-label')?.value?.trim();
    const branding = {
      brand_name: brandName || 'Mentoria 2.0',
      student_area_label: studentLabel || 'Área do Aluno',
      mentor_panel_label: mentorLabel || 'Painel do Mentor',
    };
    api('/mentoria2/settings/branding', { method: 'PUT', body: JSON.stringify({ branding }) })
      .then(result => {
        window.M2Data.mentorship = { ...(window.M2Data.mentorship || {}), platform_branding: result.platform_branding || branding };
        render();
        showToast('Personalização salva com sucesso.', 'success');
      })
      .catch(() => showToast('Não foi possível salvar a personalização.', 'error'));
    return true;
  }

  if (action === 'choose-student-home-banner') {
    const input = document.getElementById('m2-student-banner-input');
    if (!input) return true;
    input.value = '';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) {
        showToast('Envie uma imagem JPG, PNG ou WebP de até 5 MB.', 'error');
        return;
      }
      const formData = new FormData();
      formData.append('banner', file);
      showToast('Enviando banner...', 'info');
      api('/mentoria2/settings/student-banner', { method: 'POST', body: formData })
        .then(result => {
          window.M2Data.mentorship = { ...(window.M2Data.mentorship || {}), student_home_banner: result.student_home_banner || null };
          render();
          showToast('Banner da tela inicial do aluno atualizado com sucesso.', 'success');
        })
        .catch(() => showToast('Não foi possível enviar o banner.', 'error'));
    };
    input.click();
    return true;
  }

  if (action === 'remove-student-home-banner') {
    api('/mentoria2/settings/student-banner', { method: 'DELETE' })
      .then(() => {
        window.M2Data.mentorship = { ...(window.M2Data.mentorship || {}), student_home_banner: null };
        render();
        showToast('Banner da tela inicial removido com sucesso.', 'success');
      })
      .catch(() => showToast('Não foi possível remover o banner.', 'error'));
    return true;
  }

  // Promotional Banners & Special Campaigns
  if (action === 'open-promotional-banner-modal') {
    state.editingPromoBanner = {
      id: '',
      title: '',
      image_url: '',
      link_url: '',
      link_text: 'Clique aqui',
      target: 'all',
      contest_id: '',
      is_active: true
    };
    state.modal = 'promotional-banner';
    render();
    return true;
  }

  if (action === 'edit-promotional-banner') {
    const bannerId = actionBtn.dataset.id;
    const banners = window.M2Data.mentorship?.promotional_banners || [];
    const banner = banners.find(b => String(b.id) === String(bannerId));
    if (banner) {
      state.editingPromoBanner = { ...banner };
      state.modal = 'promotional-banner';
      render();
    }
    return true;
  }

  if (action === 'choose-promo-banner-image') {
    const fileInput = document.getElementById('m2-pb-image-file');
    if (!fileInput) return true;
    fileInput.onchange = () => {
      const file = fileInput.files?.[0];
      if (!file) return;
      const formData = new FormData();
      formData.append('image', file);
      api('/mentoria2/settings/promotional-banners/upload', { method: 'POST', body: formData })
        .then(res => {
          if (res?.image?.url) {
            const urlInput = document.getElementById('m2-pb-image-url');
            if (urlInput) urlInput.value = res.image.url;
            if (state.editingPromoBanner) state.editingPromoBanner.image_url = res.image.url;
            showToast('Imagem do banner enviada com sucesso!', 'success');
          }
        })
        .catch(err => showToast(err.message || 'Erro ao enviar imagem do banner.', 'error'));
    };
    fileInput.click();
    return true;
  }

  if (action === 'toggle-promo-banner-active') {
    const bannerId = actionBtn.dataset.id;
    const currentBanners = (window.M2Data.mentorship?.promotional_banners || []).map(b => {
      if (String(b.id) === String(bannerId)) {
        return { ...b, is_active: !b.is_active };
      }
      return b;
    });

    api('/mentoria2/settings/promotional-banners', {
      method: 'PUT',
      body: JSON.stringify({ banners: currentBanners })
    }).then(res => {
      window.M2Data.mentorship = window.M2Data.mentorship || {};
      window.M2Data.mentorship.promotional_banners = res.promotional_banners || currentBanners;
      render();
      showToast('Status do banner atualizado com sucesso!', 'success');
    }).catch(err => showToast(err.message || 'Erro ao atualizar banner.', 'error'));
    return true;
  }

  if (action === 'delete-promotional-banner') {
    const bannerId = actionBtn.dataset.id;
    const currentBanners = (window.M2Data.mentorship?.promotional_banners || []).filter(b => String(b.id) !== String(bannerId));

    api('/mentoria2/settings/promotional-banners', {
      method: 'PUT',
      body: JSON.stringify({ banners: currentBanners })
    }).then(res => {
      window.M2Data.mentorship = window.M2Data.mentorship || {};
      window.M2Data.mentorship.promotional_banners = res.promotional_banners || currentBanners;
      render();
      showToast('Banner promocional excluído com sucesso.', 'info');
    }).catch(err => showToast(err.message || 'Erro ao excluir banner.', 'error'));
    return true;
  }

  if (action === 'save-promotional-banner') {
    const bannerId = actionBtn.dataset.id || state.editingPromoBanner?.id || null;
    const title = document.getElementById('m2-pb-title')?.value.trim();
    if (!title) {
      showToast('Informe o título / chamada do banner.', 'error');
      return true;
    }

    const imageUrl = document.getElementById('m2-pb-image-url')?.value.trim() || '';
    const linkUrl = document.getElementById('m2-pb-link-url')?.value.trim() || '';
    const linkText = document.getElementById('m2-pb-link-text')?.value.trim() || 'Clique aqui';
    const target = document.querySelector('input[name="m2-pb-target"]:checked')?.value || 'all';
    const contestId = target === 'contest' ? (document.getElementById('m2-pb-contest-id')?.value || null) : null;
    const isActive = Boolean(document.getElementById('m2-pb-is-active')?.checked);

    const bannerObj = {
      id: bannerId || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : ('banner-' + Date.now())),
      title,
      image_url: imageUrl,
      link_url: linkUrl,
      link_text: linkText,
      target,
      contest_id: contestId,
      is_active: isActive
    };

    let existingBanners = [...(window.M2Data.mentorship?.promotional_banners || [])];
    const existingIndex = existingBanners.findIndex(b => String(b.id) === String(bannerObj.id));
    if (existingIndex >= 0) {
      existingBanners[existingIndex] = bannerObj;
    } else {
      existingBanners.push(bannerObj);
    }

    api('/mentoria2/settings/promotional-banners', {
      method: 'PUT',
      body: JSON.stringify({ banners: existingBanners })
    }).then(res => {
      window.M2Data.mentorship = window.M2Data.mentorship || {};
      window.M2Data.mentorship.promotional_banners = res.promotional_banners || existingBanners;
      state.modal = null;
      state.editingPromoBanner = null;
      render();
      showToast('Banner promocional salvo com sucesso!', 'success');
    }).catch(err => showToast(err.message || 'Erro ao salvar banner promocional.', 'error'));

    return true;
  }

  // Official Mocks
  if (action === 'load-official-mocks') {
    api('/mentoria2/official-mock-exams').then(result => {
      state.officialMocks = result.data || [];
      render();
    }).catch(() => showToast('Não foi possível carregar os simulados oficiais.', 'error'));
    return true;
  }

  if (action === 'view-official-ranking') {
    const officialId = actionBtn.dataset.officialId;
    api(`/mentoria2/official-mock-exams/${encodeURIComponent(officialId)}/ranking`).then(result => {
      state.officialRanking = result.ranking || [];
      state.officialRankingTitle = actionBtn.dataset.name || 'Simulado oficial';
      state.modal = 'official-ranking';
      render();
    }).catch(() => showToast('Não foi possível carregar o ranking deste simulado.', 'error'));
    return true;
  }

  if (action === 'open-official-mock-modal') {
    api('/mentoria2/questions?per_page=100&content_status=publicado').then(result => {
      state.officialMockQuestions = result.data || [];
      state.modal = 'official-mock';
      render();
    }).catch(() => showToast('Não foi possível carregar as questões publicadas.', 'error'));
    return true;
  }

  if (action === 'publish-official-mock') {
    const questionIds = Array.from(document.querySelectorAll('input[name="m2-official-question"]:checked')).map(input => input.value);
    const name = document.getElementById('m2-official-mock-name')?.value?.trim();
    const cohortId = document.getElementById('m2-official-mock-cohort')?.value;
    if (!name || !cohortId || questionIds.length === 0) {
      showToast('Informe título, turma e pelo menos uma questão.', 'error');
      return true;
    }
    api('/mentoria2/official-mock-exams', {
      method: 'POST',
      body: JSON.stringify({
        name,
        cohort_id: cohortId,
        question_ids: questionIds,
        available_from: document.getElementById('m2-official-mock-from')?.value || null,
        available_until: document.getElementById('m2-official-mock-until')?.value || null,
        time_minutes: Number(document.getElementById('m2-official-mock-time')?.value || 120),
        max_attempts: Number(document.getElementById('m2-official-mock-attempts')?.value || 1)
      })
    })
      .then(result => api('/mentoria2/official-mock-exams').then(list => ({ result, list })))
      .then(({ result, list }) => {
        state.officialMocks = list.data || [];
        state.modal = null;
        render();
        showToast(`Simulado publicado para ${result.students} aluno(s).`, 'success');
      })
      .catch(() => showToast('Não foi possível publicar o simulado.', 'error'));
    return true;
  }

  // Student Workspace & Profile (Mentor)
  if (action === 'open-student-workspace') {
    const studentId = actionBtn.dataset.id;
    if (!studentId || !/^\d+$/.test(String(studentId))) {
      showToast('Aluno inválido para abertura do workspace.', 'error');
      return true;
    }
    window.location.assign(`/mentoria2/students/${encodeURIComponent(studentId)}/preview`);
    return true;
  }

  if (action === 'open-student-profile') {
    const studentId = actionBtn.dataset.id;
    const targetStudent = (window.M2Data.mentorStudents || []).find(s => String(s.id) === String(studentId))
      || (window.M2Data.students || []).find(s => String(s.id) === String(studentId));
    if (targetStudent) {
      window.M2Data.student.id = targetStudent.id;
      window.M2Data.student.name = targetStudent.name;
      window.M2Data.student.email = targetStudent.email;
      window.M2Data.student.cohort = targetStudent.cohort || 'Sem turma';
      window.M2Data.student.contest = targetStudent.contest || (window.M2Data.contests?.[0]?.name || 'Concurso Geral');
      const parts = (targetStudent.name || 'Aluno').trim().split(/\s+/);
      window.M2Data.student.initials = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
      window.M2Data.student.weekHours = targetStudent.hoursWeek || targetStudent.hours || 0;
      window.M2Data.student.questionsResolved = targetStudent.questionsResolved || 0;
      window.M2Data.student.questionsAccuracy = targetStudent.accuracy || 0;
      window.M2Data.student.accuracy = targetStudent.accuracy || 0;
    }
    state.mode = 'mentor';
    state.screen = 'mentor-student-profile';
    render();
    return true;
  }

  if (action === 'toggle-student-bonus') {
    const studentId = actionBtn.dataset.studentId;
    const studentName = actionBtn.dataset.studentName || 'o aluno';
    const isActive = actionBtn.dataset.active === '1';

    state.confirmation = {
      title: isActive ? 'Revogar bônus de acesso' : 'Liberar 7 dias de bônus',
      message: isActive
        ? `Deseja realmente revogar o bônus de acesso completo de ${studentName}?`
        : `Deseja liberar 7 dias de bônus com ACESSO COMPLETO a todos os módulos para ${studentName}?`,
      confirmAction: 'confirm-toggle-student-bonus',
      confirmText: isActive ? 'Revogar' : 'Liberar Bônus',
      studentId,
      isActive,
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-toggle-student-bonus') {
    const confirmation = state.confirmation || {};
    const studentId = confirmation.studentId;
    const isActive = confirmation.isActive;
    state.modal = null;
    state.confirmation = null;
    render();

    if (!studentId) return true;

    if (isActive) {
      api(`/mentoria2/students/${studentId}/bonus-access`, { method: 'DELETE' })
        .then(res => {
          showToast(res.message || 'Bônus revogado.');
          window.location.reload();
        })
        .catch(err => showToast(err.message || 'Erro ao revogar bônus.', 'error'));
    } else {
      api(`/mentoria2/students/${studentId}/bonus-access`, {
        method: 'POST',
        body: JSON.stringify({ days: 7 })
      })
        .then(res => {
          showToast(res.message || 'Bônus de 7 dias liberado com sucesso!');
          window.location.reload();
        })
        .catch(err => showToast(err.message || 'Erro ao liberar bônus.', 'error'));
    }
    return true;
  }

  // Announcements
  if (action === 'open-mentor-new-announcement') {
    state.modal = 'mentor-new-announcement';
    state.announcementTargetType = 'all';
    render();
    return true;
  }

  if (action === 'save-mentor-announcement') {
    const titleInput = document.getElementById('m2-input-ann-title');
    const contentInput = document.getElementById('m2-input-ann-content');
    const targetTypeInput = document.getElementById('m2-input-ann-target-type');
    const priorityInput = document.getElementById('m2-input-ann-priority');

    const title = titleInput?.value?.trim() || '';
    const content = contentInput?.value?.trim() || '';
    const targetType = targetTypeInput?.value || state.announcementTargetType || 'all';
    const priority = priorityInput?.value || 'normal';

    if (!title || !content) {
      showToast('Por favor, preencha o título e a mensagem do aviso.', 'warning');
      return true;
    }

    let targetId = null;
    let targetLabel = 'Todos os Alunos';

    if (targetType === 'contest') {
      const contestSelect = document.getElementById('m2-input-ann-contest-id');
      targetId = contestSelect ? contestSelect.value : null;
      const contestObj = (window.M2Data.contests || []).find(c => String(c.id) === String(targetId));
      targetLabel = contestObj?.name || 'Edital Foco';
    } else if (targetType === 'student') {
      const studentSelect = document.getElementById('m2-input-ann-student-id');
      targetId = studentSelect ? studentSelect.value : null;
      const studentObj = (window.M2Data.mentorStudents || window.M2Data.students || []).find(s => String(s.id) === String(targetId));
      targetLabel = studentObj?.name || 'Aluno Específico';
    }

    const list = typeof getAnnouncements === 'function' ? getAnnouncements() : [];
    const newAnn = {
      id: 'ann_' + Date.now(),
      title,
      content,
      target_type: targetType,
      target_id: targetId,
      target_label: targetLabel,
      priority,
      mentor_name: window.M2Data?.mentor?.name || 'Coordenação Pedagógica',
      created_at: new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date())
    };

    list.unshift(newAnn);
    if (typeof saveAnnouncements === 'function') saveAnnouncements(list);
    state.modal = null;
    render();
    showToast(`Aviso "${title}" publicado com sucesso!`, 'success');
    return true;
  }

  if (action === 'delete-mentor-announcement') {
    const annId = actionBtn.dataset.id;
    if (!annId) return true;
    const list = (typeof getAnnouncements === 'function' ? getAnnouncements() : []).filter(a => String(a.id) !== String(annId));
    if (typeof saveAnnouncements === 'function') saveAnnouncements(list);
    render();
    showToast('Aviso excluído com sucesso.');
    return true;
  }

  // Mentor Feedback & Plan Adjustments
  if (action === 'mentor-add-feedback') {
    const studentId = actionBtn.dataset.studentId || window.M2Data.student?.id || (window.M2Data.students && window.M2Data.students[0]?.id);
    const studentName = window.M2Data.student?.name || (window.M2Data.students && window.M2Data.students[0]?.name) || 'Aluno';
    if (!studentId) {
      showToast('Nenhum aluno selecionado para receber o feedback.', 'error');
      return true;
    }
    state.quickPrompt = {
      title: `Feedback Pedagógico — ${studentName}`,
      subtitle: 'Envie orientações e direcionamento de estudos para o aluno.',
      label: 'Mensagem Pedagógica:',
      inputType: 'textarea',
      placeholder: 'Escreva aqui o feedback pedagógico detalhado...',
      confirmAction: 'confirm-mentor-add-feedback',
      confirmText: 'Enviar Feedback',
      studentId,
      studentName
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-mentor-add-feedback') {
    const input = document.getElementById('m2-quick-prompt-input');
    const msg = input?.value?.trim();
    const { studentId, studentName } = state.quickPrompt || {};
    if (msg && studentId) {
      api(`/mentoria2/students/${studentId}/feedbacks`, {
        method: 'POST',
        body: JSON.stringify({ message: msg, category: 'pedagogical' })
      }).then(res => {
        const newFeedback = {
          id: res.id,
          studentId: studentId,
          studentName: studentName,
          mentorName: window.M2Data.mentor?.name || 'Não informado',
          message: msg,
          category: 'pedagogical',
          isRead: false,
          readAt: null,
          reply: null,
          repliedAt: null,
          createdAt: new Date().toLocaleDateString('pt-BR')
        };
        window.M2Data.mentorFeedbacks = window.M2Data.mentorFeedbacks || [];
        window.M2Data.mentorFeedbacks.unshift(newFeedback);
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Feedback enviado para ${studentName}!`, 'success');
      }).catch(err => {
        showToast('Erro ao enviar feedback.', 'error');
      });
    } else {
      showToast('Por favor, informe a mensagem de feedback.', 'error');
    }
    return true;
  }

  if (action === 'mentor-adjust-plan') {
    const studentId = window.M2Data.student?.id || (window.M2Data.students && window.M2Data.students[0]?.id);
    const studentName = window.M2Data.student?.name || 'Aluno';
    state.quickPrompt = {
      title: `Ajuste de Carga Horária — ${studentName}`,
      subtitle: `Meta atual: ${window.M2Data.student?.weekHoursGoal || 12}h semanais`,
      label: 'Nova Meta de Horas Líquidas Semanais:',
      inputType: 'number',
      value: String(window.M2Data.student?.weekHoursGoal || 15),
      placeholder: '15',
      confirmAction: 'confirm-mentor-adjust-plan',
      confirmText: 'Atualizar Meta',
      studentId,
      studentName
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-mentor-adjust-plan') {
    const input = document.getElementById('m2-quick-prompt-input');
    const newGoal = input?.value?.trim();
    const { studentId, studentName } = state.quickPrompt || {};
    if (newGoal && !isNaN(newGoal) && Number(newGoal) > 0) {
      const numGoal = Number(newGoal);
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase;
      const endpoint = base ? `${base}/preferences` : `/mentoria2/students/${studentId}/preferences`;

      api(endpoint, {
        method: 'PATCH',
        body: JSON.stringify({
          settings: {
            week_hours_goal: numGoal
          }
        })
      }).then(() => {
        if (window.M2Data.student) window.M2Data.student.weekHoursGoal = numGoal;
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Meta semanal de ${numGoal}h definida para ${studentName}!`, 'success');
      }).catch(err => {
        showToast('Não foi possível salvar a meta de horas.', 'error');
      });
    } else {
      showToast('Informe um número válido de horas semanais.', 'error');
    }
    return true;
  }

  if (action === 'open-shared-note') {
    const id = actionBtn.dataset.id;
    const fb = (window.M2Data.mentorFeedbacks || []).find(f => String(f.id) === String(id));
    state.quickPrompt = {
      title: 'Resposta Pedagógica ao Feedback',
      subtitle: fb ? `Aluno: ${fb.studentName || 'Aluno'}` : 'Canal pedagógico',
      label: 'Sua Orientação Pedagógica:',
      inputType: 'textarea',
      value: fb?.reply || '',
      placeholder: 'Escreva a orientação pedagógica para o aluno...',
      confirmAction: 'confirm-reply-feedback',
      confirmText: 'Enviar Resposta',
      feedbackId: id,
      feedback: fb
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-reply-feedback') {
    const input = document.getElementById('m2-quick-prompt-input');
    const reply = input?.value?.trim();
    const { feedbackId, feedback } = state.quickPrompt || {};
    if (reply && feedbackId) {
      const tenantId = state.tenantId || 1;
      const base = state.context?.resourceBase || state.workspaceBase || `/mentoria2-estudos/${tenantId}`;
      api(`${base}/feedbacks/${feedbackId}/reply`, {
        method: 'POST',
        body: JSON.stringify({ reply: reply })
      }).then(res => {
        if (feedback) {
          feedback.reply = reply;
          feedback.repliedAt = new Date().toISOString();
          feedback.isRead = true;
        }
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast('Resposta pedagógica registrada com sucesso no servidor!', 'success');
      }).catch(err => {
        showToast('Erro ao enviar resposta.', 'error');
      });
    } else {
      showToast('Por favor, informe a resposta pedagógica.', 'error');
    }
    return true;
  }

  // Cohorts
  if (action === 'create-cohort') {
    state.quickPrompt = {
      title: 'Criar Nova Turma de Mentoria',
      subtitle: 'Organize alunos por concurso ou data da prova.',
      label: 'Nome da Nova Turma:',
      inputType: 'text',
      placeholder: 'Ex: Turma Reta Final PC-SP',
      confirmAction: 'confirm-create-cohort',
      confirmText: 'Criar Turma'
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-create-cohort') {
    const input = document.getElementById('m2-quick-prompt-input');
    const name = input?.value?.trim();
    if (name) {
      api('/mentoria2/cohorts', {
        method: 'POST',
        body: JSON.stringify({ name: name, description: 'Turma cadastrada para mentoria e metas conjuntas.' })
      }).then(res => {
        const newCohort = {
          id: res.id,
          name: res.name || name,
          contest: (window.M2Data.contests?.[0]?.name || ''),
          mentorName: window.M2Data.mentor?.name || '',
          status: res.is_active !== undefined ? (res.is_active ? 'Ativa' : 'Inativa') : 'Ativa',
          description: 'Turma cadastrada para mentoria e metas conjuntas.',
          studentsCount: 0,
          completionPct: 0
        };
        window.M2Data.cohorts.unshift(newCohort);
        if (window.M2Data.mentor) window.M2Data.mentor.activeCohorts = (window.M2Data.mentor.activeCohorts || 0) + 1;
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Turma "${name}" criada com sucesso!`, 'success');
      }).catch(err => {
        showToast('Erro ao salvar turma no servidor.', 'error');
      });
    } else {
      showToast('Informe o nome da turma.', 'error');
    }
    return true;
  }

  if (action === 'add-cohort-member') {
    const cohortId = actionBtn.dataset.cohortId || (window.M2Data.cohorts?.[0]?.id);
    const directStudentId = actionBtn.dataset.studentId;
    if (directStudentId && cohortId) {
      api(`/mentoria2/cohorts/${cohortId}/members`, {
        method: 'POST',
        body: JSON.stringify({ student_id: Number(directStudentId) })
      }).then(() => {
        const cohort = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
        if (cohort) cohort.studentsCount = (cohort.studentsCount || 0) + 1;
        render();
        showToast(`Aluno #${directStudentId} adicionado à turma com sucesso!`, 'success');
      }).catch(err => {
        showToast('Erro ao adicionar aluno à turma.', 'error');
      });
      return true;
    }
    state.quickPrompt = {
      title: 'Adicionar Aluno à Turma',
      subtitle: 'Vincule um aluno matriculado à turma selecionada.',
      label: 'ID Numérico do Aluno:',
      inputType: 'number',
      placeholder: 'Ex: 1',
      confirmAction: 'confirm-add-cohort-member',
      confirmText: 'Vincular Aluno',
      cohortId: cohortId
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-add-cohort-member') {
    const input = document.getElementById('m2-quick-prompt-input');
    const studentId = input?.value?.trim();
    const cohortId = state.quickPrompt?.cohortId || (window.M2Data.cohorts?.[0]?.id);
    if (studentId && cohortId) {
      api(`/mentoria2/cohorts/${cohortId}/members`, {
        method: 'POST',
        body: JSON.stringify({ student_id: Number(studentId) })
      }).then(() => {
        const cohort = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
        if (cohort) cohort.studentsCount = (cohort.studentsCount || 0) + 1;
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Aluno #${studentId} adicionado à turma com sucesso!`, 'success');
      }).catch(err => {
        showToast('Erro ao adicionar aluno à turma.', 'error');
      });
    } else {
      showToast('Informe o ID do aluno.', 'error');
    }
    return true;
  }

  if (action === 'remove-cohort-member') {
    const cohortId = actionBtn.dataset.cohortId || (window.M2Data.cohorts?.[0]?.id);
    const studentId = actionBtn.dataset.studentId;
    if (studentId && cohortId) {
      state.confirmation = {
        title: 'Remover aluno da turma?',
        message: 'O aluno deixará esta turma, mas continuará com a conta e demais acessos preservados.',
        confirmAction: 'confirm-remove-cohort-member',
        cohortId,
        studentId,
        confirmText: 'Remover aluno'
      };
      state.modal = 'confirmation';
      render();
    }
    return true;
  }

  if (action === 'confirm-remove-cohort-member') {
    const { cohortId, studentId } = state.confirmation || {};
    if (studentId && cohortId) {
      api(`/mentoria2/cohorts/${cohortId}/members/${studentId}`, {
        method: 'DELETE'
      }).then(() => {
        const cohort = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
        if (cohort && cohort.studentsCount > 0) cohort.studentsCount -= 1;
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Aluno removido da turma com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao remover aluno.', 'error');
      });
    }
    return true;
  }

  if (action === 'edit-cohort') {
    const cohortId = actionBtn.dataset.id;
    const cohort = (window.M2Data.cohorts || window.M2Data.mentorCohorts || []).find(c => String(c.id) === String(cohortId));
    state.quickPrompt = {
      title: 'Editar Nome da Turma',
      subtitle: cohort ? `Atual: ${cohort.name}` : '',
      label: 'Nome da Turma:',
      inputType: 'text',
      value: cohort?.name || '',
      confirmAction: 'confirm-edit-cohort',
      confirmText: 'Salvar Alterações',
      cohortId: cohortId,
      cohort: cohort
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-edit-cohort') {
    const input = document.getElementById('m2-quick-prompt-input');
    const name = input?.value?.trim();
    const { cohortId, cohort } = state.quickPrompt || {};
    if (name && cohortId) {
      api(`/mentoria2/cohorts/${cohortId}`, {
        method: 'PATCH',
        body: JSON.stringify({ name })
      }).then(() => {
        if (cohort) cohort.name = name;
        const c1 = (window.M2Data.cohorts || []).find(c => String(c.id) === String(cohortId));
        if (c1) c1.name = name;
        const c2 = (window.M2Data.mentorCohorts || []).find(c => String(c.id) === String(cohortId));
        if (c2) c2.name = name;
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast('Turma atualizada com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao atualizar turma.', 'error');
      });
    } else {
      showToast('Informe o nome da turma.', 'error');
    }
    return true;
  }

  if (action === 'delete-cohort') {
    const cohortId = actionBtn.dataset.id;
    const cohort = (window.M2Data.cohorts || window.M2Data.mentorCohorts || []).find(c => String(c.id) === String(cohortId));
    state.confirmation = {
      title: 'Excluir Turma?',
      message: `Tem certeza que deseja excluir a turma "${cohort?.name || cohortId}"? Os alunos não serão excluídos do sistema.`,
      confirmAction: 'confirm-delete-cohort',
      cohortId: cohortId,
      confirmText: 'Excluir Turma'
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-delete-cohort') {
    const cohortId = state.confirmation?.cohortId;
    if (cohortId) {
      api(`/mentoria2/cohorts/${cohortId}`, { method: 'DELETE' }).then(() => {
        window.M2Data.cohorts = (window.M2Data.cohorts || []).filter(c => String(c.id) !== String(cohortId));
        window.M2Data.mentorCohorts = (window.M2Data.mentorCohorts || []).filter(c => String(c.id) !== String(cohortId));
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Turma excluída com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir turma.', 'error');
      });
    }
    return true;
  }

  // Contests
  if (action === 'create-contest') {
    state.quickPrompt = {
      title: 'Cadastrar Novo Concurso',
      subtitle: 'Defina o concurso para vincular edital, matérias e simulados.',
      label: 'Nome do Concurso / Órgão:',
      inputType: 'text',
      placeholder: 'Ex: PC-SP Escrivão 2026',
      confirmAction: 'confirm-create-contest',
      confirmText: 'Cadastrar Concurso'
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-create-contest') {
    const input = document.getElementById('m2-quick-prompt-input');
    const name = input?.value?.trim();
    if (name) {
      api('/mentoria2/contests', {
        method: 'POST',
        body: JSON.stringify({ name: name, board: 'A definir', position: 'Geral' })
      }).then(res => {
        const newC = {
          id: res.id,
          name: name,
          role: 'Geral',
          organization: name,
          board: 'A definir',
          phase: 'Publicado',
          activeSyllabusUnits: 0,
          totalQuestions: 0
        };
        window.M2Data.contests.unshift(newC);
        state.contestId = newC.id;
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Concurso "${name}" cadastrado com sucesso!`, 'success');
      }).catch(err => {
        showToast('Erro ao cadastrar concurso no servidor.', 'error');
      });
    } else {
      showToast('Informe o nome do concurso.', 'error');
    }
    return true;
  }

  if (action === 'duplicate-contest') {
    const id = actionBtn.dataset.id;
    const target = window.M2Data.contests.find(c => String(c.id) === String(id));
    if (target) {
      state.quickPrompt = {
        title: 'Duplicar Concurso',
        subtitle: `Copiar estrutura e edital de "${target.name}".`,
        label: 'Nome do Concurso Duplicado:',
        inputType: 'text',
        value: `${target.name} (Cópia)`,
        confirmAction: 'confirm-duplicate-contest',
        confirmText: 'Duplicar Concurso',
        targetId: id,
        target: target
      };
      state.modal = 'quick-prompt';
      render();
    }
    return true;
  }

  if (action === 'confirm-duplicate-contest') {
    const input = document.getElementById('m2-quick-prompt-input');
    const cloneName = input?.value?.trim() || `${state.quickPrompt?.target?.name || 'Concurso'} (Cópia)`;
    const targetId = state.quickPrompt?.targetId;
    const target = state.quickPrompt?.target;
    if (targetId && target) {
      api(`/mentoria2/contests/${targetId}/duplicate`, {
        method: 'POST',
        body: JSON.stringify({ name: cloneName })
      }).then(res => {
        const newContest = { ...target, id: res.id, name: res.name || cloneName };
        window.M2Data.contests.unshift(newContest);
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Concurso "${newContest.name}" duplicado com sucesso!`, 'success');
      }).catch(err => {
        showToast('Erro ao duplicar concurso no servidor.', 'error');
      });
    }
    return true;
  }

  if (action === 'edit-contest') {
    const contestId = actionBtn.dataset.id;
    const contest = (window.M2Data.contests || []).find(c => String(c.id) === String(contestId));
    state.quickPrompt = {
      title: 'Editar Nome do Concurso',
      subtitle: contest ? `Atual: ${contest.name || contest.title}` : '',
      label: 'Nome do Concurso / Órgão / Cargo:',
      inputType: 'text',
      value: contest?.name || contest?.title || '',
      confirmAction: 'confirm-edit-contest',
      confirmText: 'Salvar Alterações',
      contestId: contestId,
      contest: contest
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-edit-contest') {
    const input = document.getElementById('m2-quick-prompt-input');
    const name = input?.value?.trim();
    const { contestId, contest } = state.quickPrompt || {};
    if (name && contestId) {
      api(`/mentoria2/contests/${contestId}`, {
        method: 'PATCH',
        body: JSON.stringify({ name })
      }).then(() => {
        if (contest) { contest.name = name; contest.title = name; }
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast('Concurso atualizado com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao atualizar concurso.', 'error');
      });
    } else {
      showToast('Informe o nome do concurso.', 'error');
    }
    return true;
  }

  if (action === 'delete-contest') {
    const contestId = actionBtn.dataset.id;
    const contest = (window.M2Data.contests || []).find(c => String(c.id) === String(contestId));
    state.confirmation = {
      title: 'Excluir Concurso?',
      message: `Tem certeza que deseja excluir o concurso "${contest?.name || contest?.title || contestId}"? Os editais e vinculações associados serão desativados.`,
      confirmAction: 'confirm-delete-contest',
      contestId: contestId,
      confirmText: 'Excluir Concurso'
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-delete-contest') {
    const contestId = state.confirmation?.contestId;
    if (contestId) {
      api(`/mentoria2/contests/${contestId}`, { method: 'DELETE' }).then(() => {
        window.M2Data.contests = (window.M2Data.contests || []).filter(c => String(c.id) !== String(contestId));
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Concurso excluído com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir concurso.', 'error');
      });
    }
    return true;
  }

  if (action === 'open-assign-contest-modal') {
    const studentId = actionBtn.dataset.studentId;
    const student = (window.M2Data.students || window.M2Data.mentorStudents || []).find(s => String(s.id) === String(studentId)) || state.studentProfile || { id: studentId };
    state.assigningStudent = student;
    state.modal = 'assign-contest';
    render();
    return true;
  }

  if (action === 'submit-assign-contest') {
    const studentId = actionBtn.dataset.studentId || state.assigningStudent?.id;
    const contestId = document.getElementById('m2-assign-contest-id')?.value;
    const group = document.getElementById('m2-assign-contest-group')?.value || 'foco';
    const includeStats = document.getElementById('m2-assign-contest-stats')?.checked ?? true;
    if (!contestId || !studentId) {
      showToast('Selecione um concurso válido.', 'error');
      return true;
    }
    api(`/mentoria2/contests/${encodeURIComponent(contestId)}/students/${encodeURIComponent(studentId)}`, {
      method: 'POST',
      body: JSON.stringify({ group, include_in_stats: includeStats })
    }).then(() => {
      state.modal = null;
      state.assigningStudent = null;
      render();
      showToast('Concurso atribuído ao aluno com sucesso!', 'success');
    }).catch(err => {
      showToast('Erro ao atribuir concurso ao aluno.', 'error');
    });
    return true;
  }

  // Subjects & Topics
  if (action === 'add-subject') {
    state.quickPrompt = {
      title: 'Adicionar Disciplina ao Edital',
      subtitle: 'Insira a matéria no edital verticalizado do concurso.',
      label: 'Nome da Disciplina:',
      inputType: 'text',
      placeholder: 'Ex: Direito Administrativo',
      confirmAction: 'confirm-add-subject',
      confirmText: 'Adicionar Disciplina'
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-add-subject') {
    const input = document.getElementById('m2-quick-prompt-input');
    const name = input?.value?.trim();
    if (name) {
      const activeContestId = state.contestId || (window.M2Data.contests?.[0]?.id);
      const edicts = window.M2Data.edicts || [];
      let targetEdict = edicts.find(e => String(e.contest_id) === String(activeContestId)) || edicts[0];

      const proceedAddSubject = (edictId) => {
        api(`/mentoria2/edicts/${edictId}/subjects`, {
          method: 'POST',
          body: JSON.stringify({ name: name, weight: 1, relevance: 3 })
        }).then(res => {
          const newSub = {
            id: res.id,
            name: name,
            weight: 1,
            relevance: 'Alta',
            coveredPct: 0,
            masteryPct: 0,
            topics: []
          };
          window.M2Data.syllabus = window.M2Data.syllabus || [];
          window.M2Data.subjects = window.M2Data.subjects || [];
          window.M2Data.syllabus.push(newSub);
          window.M2Data.subjects.push({
            id: newSub.id,
            name: newSub.name,
            weight: 1,
            relevance: 'Alta',
            progress: 0,
            hours: 0,
            questionsCount: 0,
            accuracy: 0,
            topics: []
          });
          state.modal = null;
          state.quickPrompt = null;
          render();
          showToast(`Disciplina "${name}" salva com sucesso!`, 'success');
        }).catch(err => {
          showToast('Erro ao salvar disciplina no servidor.', 'error');
        });
      };

      if (!targetEdict && activeContestId) {
        api('/mentoria2/edicts', {
          method: 'POST',
          body: JSON.stringify({ contest_id: activeContestId, name: 'Edital Geral' })
        }).then(edictRes => {
          targetEdict = { id: edictRes.id, contest_id: activeContestId, name: 'Edital Geral' };
          window.M2Data.edicts = window.M2Data.edicts || [];
          window.M2Data.edicts.push(targetEdict);
          proceedAddSubject(targetEdict.id);
        }).catch(err => {
          showToast('Erro ao criar edital base para o concurso.', 'error');
        });
      } else if (targetEdict) {
        proceedAddSubject(targetEdict.id);
      } else {
        showToast('Cadastre um concurso antes de adicionar disciplinas ao edital.', 'error');
      }
    } else {
      showToast('Informe o nome da disciplina.', 'error');
    }
    return true;
  }

  if (action === 'edit-subject') {
    const id = actionBtn.dataset.id;
    const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(id)) || (window.M2Data.syllabus || [])[0];
    if (sub) {
      state.quickPrompt = {
        title: 'Editar Nome da Disciplina',
        label: 'Nome da Disciplina:',
        inputType: 'text',
        value: sub.name,
        confirmAction: 'confirm-edit-subject',
        confirmText: 'Salvar Alteração',
        subjectId: sub.id
      };
      state.modal = 'quick-prompt';
      render();
    }
    return true;
  }

  if (action === 'confirm-edit-subject') {
    const input = document.getElementById('m2-quick-prompt-input');
    const newName = input?.value?.trim();
    const subjectId = state.quickPrompt?.subjectId;
    if (newName && subjectId) {
      api(`/mentoria2/subjects/${subjectId}`, {
        method: 'PATCH',
        body: JSON.stringify({ name: newName })
      }).then(() => {
        const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(subjectId));
        if (sub) sub.name = newName;
        const matchingSub = (window.M2Data.subjects || []).find(s => String(s.id) === String(subjectId));
        if (matchingSub) matchingSub.name = newName;
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast('Disciplina atualizada no servidor!', 'success');
      }).catch(err => {
        showToast('Erro ao atualizar disciplina.', 'error');
      });
    } else {
      showToast('Informe o nome da disciplina.', 'error');
    }
    return true;
  }

  if (action === 'add-topic') {
    const id = actionBtn.dataset.id;
    const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(id)) || (window.M2Data.syllabus || [])[0];
    if (sub) {
      state.quickPrompt = {
        title: `Novo Tópico em ${sub.name}`,
        label: 'Nome do Tópico:',
        inputType: 'text',
        placeholder: 'Ex: Atos Administrativos',
        confirmAction: 'confirm-add-topic',
        confirmText: 'Adicionar Tópico',
        subjectId: sub.id,
        subjectName: sub.name
      };
      state.modal = 'quick-prompt';
      render();
    }
    return true;
  }

  if (action === 'confirm-add-topic') {
    const input = document.getElementById('m2-quick-prompt-input');
    const topName = input?.value?.trim();
    const subjectId = state.quickPrompt?.subjectId;
    const subjectName = state.quickPrompt?.subjectName || 'Disciplina';
    if (topName && subjectId) {
      api(`/mentoria2/subjects/${subjectId}/topics`, {
        method: 'POST',
        body: JSON.stringify({ name: topName, weight: 1, relevance: 2 })
      }).then(res => {
        const sub = (window.M2Data.syllabus || []).find(s => String(s.id) === String(subjectId));
        if (sub) {
          sub.topics = sub.topics || [];
          sub.topics.push({
            id: res.id,
            name: topName,
            completed: false,
            subtopics: []
          });
        }
        const matchingSub = (window.M2Data.subjects || []).find(s => String(s.id) === String(subjectId));
        if (matchingSub) {
          matchingSub.topics = matchingSub.topics || [];
          matchingSub.topics.push({
            id: res.id,
            name: topName,
            status: 'pending',
            accuracy: 0,
            theoryDone: false,
            lawDone: false,
            flashcardsCount: 0,
            questionsCount: 0
          });
        }
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Tópico adicionado em ${subjectName} e salvo no servidor!`, 'success');
      }).catch(err => {
        showToast('Erro ao criar tópico no servidor.', 'error');
      });
    } else {
      showToast('Informe o nome do tópico.', 'error');
    }
    return true;
  }

  // Audience & Access Targets
  if (action === 'open-manage-audience' || action === 'manage-content-audience') {
    const id = actionBtn.dataset.id;
    const type = actionBtn.dataset.type || 'material';
    let currentItem = null;
    let targets = [{ type: 'global', id: null }];

    if (type === 'question') {
      currentItem = (window.M2Data.questions || []).find(q => String(q.id) === String(id));
    } else if (type === 'flashcard_deck' || type === 'deck') {
      currentItem = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(id));
    } else {
      currentItem = (window.M2Data.mentorContents || window.M2Data.materials || []).find(m => String(m.id) === String(id));
    }

    if (currentItem && Array.isArray(currentItem.targets) && currentItem.targets.length > 0) {
      targets = JSON.parse(JSON.stringify(currentItem.targets));
    }

    let itemTitle = '#' + id;
    if (currentItem) {
      itemTitle = currentItem.title || currentItem.name || currentItem.prompt || ('#' + id);
    }

    state.managingAudienceItem = {
      id,
      type,
      title: itemTitle,
      item: currentItem
    };
    state.currentTargets = targets;
    state.modal = 'manage-audience';
    render();
    return true;
  }

  if (action === 'confirm-manage-content-audience' || action === 'submit-manage-audience') {
    const { id, type, item } = state.managingAudienceItem || {};
    if (!id) {
      showToast('Nenhum item selecionado para salvar público.', 'error');
      return true;
    }
    const targets = (state.currentTargets && state.currentTargets.length > 0)
      ? state.currentTargets
      : [{ type: 'global', id: null }];

    const endpoint = (type === 'deck' || type === 'flashcard_deck')
      ? `/mentoria2/flashcard-decks/${encodeURIComponent(id)}`
      : (type === 'question' ? `/mentoria2/questions/${encodeURIComponent(id)}` : `/mentoria2/materials/${encodeURIComponent(id)}`);

    api(endpoint, {
      method: 'PATCH',
      body: JSON.stringify({ targets })
    }).then(() => {
      if (item) {
        item.targets = targets;
      }
      state.modal = null;
      state.managingAudienceItem = null;
      render();
      showToast('Público de acesso atualizado com sucesso!', 'success');
    }).catch(err => {
      showToast('Erro ao salvar público.', 'error');
    });
    return true;
  }

  if (action === 'add-audience-target') {
    state.currentTargets = state.currentTargets || [];
    if (state.currentTargets.some(t => (t.type || t.target_type) === 'global')) {
      state.currentTargets = [];
    }
    state.currentTargets.push({ type: 'contest', id: '' });
    updateAudienceDOM(actionBtn, state, render, renderAudienceSelector);
    return true;
  }

  if (action === 'remove-audience-target') {
    const idx = Number(actionBtn.dataset.index);
    state.currentTargets = state.currentTargets || [];
    if (!isNaN(idx) && state.currentTargets[idx] !== undefined) {
      state.currentTargets.splice(idx, 1);
    }
    if (state.currentTargets.length === 0) {
      state.currentTargets = [{ type: 'global', id: null }];
    }
    updateAudienceDOM(actionBtn, state, render, renderAudienceSelector);
    return true;
  }

  // Mentor Questions Management
  if (action === 'create-question') {
    state.editingQuestion = null;
    state.questionFormDraft = null;
    state.currentTargets = [{ type: 'global', id: null }];
    state.modal = 'question-form';
    render();
    return true;
  }

  if (action === 'edit-question') {
    const id = actionBtn.dataset.id;
    const q = (window.M2Data.questions || []).find(item => String(item.id) === String(id));
    if (q) {
      state.editingQuestion = q;
      state.questionFormDraft = null;
      state.currentTargets = (q.targets && q.targets.length > 0) ? JSON.parse(JSON.stringify(q.targets)) : [{ type: 'global', id: null }];
      state.modal = 'question-form';
      render();
    } else {
      showToast('Questão não encontrada.', 'error');
    }
    return true;
  }

  if (action === 'submit-create-question') {
    const subject = document.getElementById('m2-qf-subject')?.value?.trim();
    const topic = document.getElementById('m2-qf-topic')?.value?.trim() || null;
    const board = document.getElementById('m2-qf-board')?.value?.trim() || null;
    const difficulty = document.getElementById('m2-qf-difficulty')?.value || 'Média';
    const type = document.getElementById('m2-qf-type')?.value || 'multipla_escolha';
    const prompt = document.getElementById('m2-qf-prompt')?.value?.trim();
    const correct_answer = document.getElementById('m2-qf-correct')?.value || 'A';
    const explanation = document.getElementById('m2-qf-explanation')?.value?.trim() || null;

    if (!subject || !prompt) {
      showToast('Preencha a disciplina e o enunciado da questão.', 'error');
      return true;
    }

    let alternatives = [];
    if (type === 'multipla_escolha') {
      const altA = document.getElementById('m2-qf-alt-a')?.value?.trim();
      const altB = document.getElementById('m2-qf-alt-b')?.value?.trim();
      const altC = document.getElementById('m2-qf-alt-c')?.value?.trim();
      const altD = document.getElementById('m2-qf-alt-d')?.value?.trim();
      const altE = document.getElementById('m2-qf-alt-e')?.value?.trim();
      if (!altA || !altB) {
        showToast('Informe ao menos as alternativas A e B.', 'error');
        return true;
      }
      alternatives = [altA, altB];
      if (altC) alternatives.push(altC);
      if (altD) alternatives.push(altD);
      if (altE) alternatives.push(altE);
    }

    const targets = (state.currentTargets && state.currentTargets.length > 0) ? state.currentTargets : [{ type: 'global', id: null }];
    const isEditing = Boolean(state.editingQuestion?.id);
    const endpoint = isEditing ? `/mentoria2/questions/${state.editingQuestion.id}` : '/mentoria2/questions';
    const method = isEditing ? 'PATCH' : 'POST';
    const payload = {
      subject,
      topic,
      board,
      difficulty,
      type,
      prompt,
      alternatives,
      correct_answer,
      explanation,
      targets,
      scope: 'global'
    };

    api(endpoint, {
      method,
      body: JSON.stringify(payload)
    }).then(res => {
      if (isEditing && state.editingQuestion) {
        Object.assign(state.editingQuestion, payload);
        const found = (window.M2Data.questions || []).find(q => String(q.id) === String(state.editingQuestion.id));
        if (found) Object.assign(found, payload);
      }
      state.modal = null;
      state.editingQuestion = null;
      state.questionFormDraft = null;
      showToast(isEditing ? 'Questão atualizada com sucesso!' : 'Questão cadastrada com sucesso!', 'success');
      loadMentorResource('mentor-questions', api).then(() => render());
    }).catch(err => {
      showToast('Erro ao salvar questão.', 'error');
    });
    return true;
  }

  if (action === 'delete-question') {
    const id = actionBtn.dataset.id;
    state.confirmation = {
      title: 'Excluir Questão?',
      message: `Tem certeza que deseja excluir a questão #${id}? Esta ação é permanente.`,
      confirmAction: 'confirm-delete-question',
      questionId: id,
      confirmText: 'Excluir Questão'
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-delete-question') {
    const id = state.confirmation?.questionId;
    if (id) {
      api(`/mentoria2/questions/${id}`, { method: 'DELETE' }).then(() => {
        window.M2Data.questions = (window.M2Data.questions || []).filter(item => String(item.id) !== String(id));
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Questão excluída com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir questão.', 'error');
      });
    }
    return true;
  }

  if (action === 'toggle-question-select') {
    const qId = String(actionBtn.value || actionBtn.dataset.id);
    state.selectedQuestions = state.selectedQuestions || [];
    if (state.selectedQuestions.includes(qId)) {
      state.selectedQuestions = state.selectedQuestions.filter(id => id !== qId);
    } else {
      state.selectedQuestions.push(qId);
    }
    render();
    return true;
  }

  if (action === 'toggle-all-questions') {
    state.selectedQuestions = state.selectedQuestions || [];
    const allIds = (window.M2Data.questions || []).map(q => String(q.id));
    if (state.selectedQuestions.length === allIds.length && allIds.length > 0) {
      state.selectedQuestions = [];
    } else {
      state.selectedQuestions = allIds;
    }
    render();
    return true;
  }

  if (action === 'clear-selected-questions') {
    state.selectedQuestions = [];
    render();
    return true;
  }

  if (action === 'bulk-delete-questions') {
    const ids = state.selectedQuestions || [];
    if (ids.length === 0) return true;
    state.confirmation = {
      title: 'Excluir Questões em Massa?',
      message: `Tem certeza que deseja excluir as ${ids.length} questões selecionadas? Esta ação removerá as questões selecionadas permanentemente.`,
      confirmAction: 'confirm-bulk-delete-questions',
      confirmText: `Excluir ${ids.length} Questões`
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-bulk-delete-questions') {
    const ids = state.selectedQuestions || [];
    if (ids.length === 0) return true;
    api('/mentoria2/questions/bulk-delete', {
      method: 'POST',
      body: JSON.stringify({ ids: ids.map(String) })
    }).then(() => {
      const idsSet = new Set(ids.map(String));
      window.M2Data.questions = (window.M2Data.questions || []).filter(q => !idsSet.has(String(q.id)));
      state.selectedQuestions = [];
      state.modal = null;
      state.confirmation = null;
      render();
      showToast(`${ids.length} questão(ões) excluída(s) em massa com sucesso!`, 'success');
    }).catch(err => {
      showToast('Erro ao excluir questões em massa.', 'error');
    });
    return true;
  }

  // Materials & Educational Content
  if (action === 'create-content' || action === 'upload-material') {
    state.editingMaterial = null;
    state.currentTargets = [{ type: 'global', id: null }];
    state.modal = 'material-form';
    render();
    return true;
  }

  if (action === 'edit-material') {
    const matId = actionBtn.dataset.id;
    const mat = (window.M2Data.mentorContents || window.M2Data.materials || []).find(m => String(m.id) === String(matId));
    state.editingMaterial = mat || { id: matId };
    state.currentTargets = (mat?.targets && mat.targets.length > 0) ? JSON.parse(JSON.stringify(mat.targets)) : [{ type: 'global', id: null }];
    state.modal = 'material-form';
    render();
    return true;
  }

  if (action === 'toggle-mf-type') {
    const typeSelect = document.getElementById('m2-mf-type');
    const urlGroup = document.getElementById('m2-mf-url-group');
    const textGroup = document.getElementById('m2-mf-text-group');
    const fileGroup = document.getElementById('m2-mf-file-group');
    const val = typeSelect?.value || 'arquivo';
    if (urlGroup && textGroup && fileGroup) {
      urlGroup.style.display = (val === 'youtube' || val === 'link') ? 'block' : 'none';
      textGroup.style.display = (val === 'texto') ? 'block' : 'none';
      fileGroup.style.display = (val === 'arquivo') ? 'block' : 'none';
    }
    return true;
  }

  if (action === 'submit-material-form' || action === 'confirm-edit-material') {
    const title = document.getElementById('m2-mf-title')?.value?.trim();
    const folder = document.getElementById('m2-mf-folder')?.value?.trim() || '';
    const type = document.getElementById('m2-mf-type')?.value || 'arquivo';
    const description = document.getElementById('m2-mf-description')?.value?.trim() || null;
    const url = document.getElementById('m2-mf-url')?.value?.trim() || null;
    const text = document.getElementById('m2-mf-text')?.value?.trim() || null;
    const fileInput = document.getElementById('m2-mf-file');
    const hasFile = fileInput && fileInput.files && fileInput.files.length > 0;
    const targets = (state.currentTargets && state.currentTargets.length > 0)
      ? state.currentTargets
      : [{ type: 'global', id: null }];

    if (!title) {
      showToast('Informe o título do material didático.', 'error');
      return true;
    }

    const isEditing = Boolean(state.editingMaterial?.id);
    const endpoint = isEditing
      ? `/mentoria2/materials/${encodeURIComponent(state.editingMaterial.id)}`
      : '/mentoria2/materials';

    let reqOptions;
    if (hasFile) {
      const formData = new FormData();
      formData.append('title', title);
      if (folder) formData.append('folder', folder);
      formData.append('type', type);
      if (description) formData.append('description', description);
      if (url) formData.append('url', url);
      if (text) formData.append('text', text);
      formData.append('file', fileInput.files[0]);
      formData.append('targets', JSON.stringify(targets));
      if (isEditing) {
        formData.append('_method', 'PATCH');
      }
      reqOptions = {
        method: 'POST',
        body: formData
      };
    } else {
      const payload = {
        title,
        folder,
        type,
        description,
        url,
        text,
        targets
      };
      reqOptions = {
        method: isEditing ? 'PATCH' : 'POST',
        body: JSON.stringify(payload)
      };
    }

    api(endpoint, reqOptions).then(res => {
      if (isEditing && state.editingMaterial) {
        Object.assign(state.editingMaterial, { title, folder, type, description, url, text, targets });
      }
      state.modal = null;
      state.editingMaterial = null;
      render();
      showToast(isEditing ? 'Material didático atualizado com sucesso!' : 'Material cadastrado com sucesso!', 'success');
      loadMentorResource('mentor-materials', api).then(() => render());
    }).catch(err => {
      showToast('Erro ao salvar material no servidor.', 'error');
    });
    return true;
  }

  if (action === 'delete-material') {
    const matId = actionBtn.dataset.id;
    const mat = (window.M2Data.mentorContents || window.M2Data.materials || []).find(m => String(m.id) === String(matId));
    state.confirmation = {
      title: 'Excluir Conteúdo Didático?',
      message: `Tem certeza que deseja excluir o material "${mat?.title || matId}"?`,
      confirmAction: 'confirm-delete-material',
      materialId: matId,
      confirmText: 'Excluir Material'
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-delete-material') {
    const matId = state.confirmation?.materialId;
    if (matId) {
      api(`/mentoria2/materials/${matId}`, { method: 'DELETE' }).then(() => {
        window.M2Data.mentorContents = (window.M2Data.mentorContents || []).filter(m => String(m.id) !== String(matId));
        window.M2Data.materials = (window.M2Data.materials || []).filter(m => String(m.id) !== String(matId));
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Material didático excluído com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir material.', 'error');
      });
    }
    return true;
  }

  if (action === 'confirm-upload-material') {
    const input = document.getElementById('m2-quick-prompt-input');
    const title = input?.value?.trim();
    if (title) {
      api('/mentoria2/materials', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          type: 'link',
          external_url: 'https://exemplo.com'
        })
      }).then(res => {
        const newMat = {
          id: res.id,
          title: title,
          topic: 'Geral',
          size: 'Link Externo',
          pages: 1,
          uploadedAt: new Date().toLocaleDateString('pt-BR')
        };
        window.M2Data.materials = window.M2Data.materials || [];
        window.M2Data.materials.unshift(newMat);
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast(`Material "${title}" salvo com sucesso!`, 'success');
      }).catch(err => {
        showToast('Erro ao cadastrar material no servidor.', 'error');
      });
    } else {
      showToast('Informe o título do material.', 'error');
    }
    return true;
  }

  // Flashcard Decks & Cards (Mentor)
  if (action === 'create-mentor-deck') {
    state.editingDeck = null;
    state.currentTargets = [{ type: 'global', id: null }];
    state.modal = 'deck-form';
    render();
    return true;
  }

  if (action === 'edit-mentor-deck') {
    const deckId = actionBtn.dataset.id;
    const deck = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(deckId));
    state.editingDeck = deck || { id: deckId };
    state.currentTargets = (deck?.targets && deck.targets.length > 0) ? JSON.parse(JSON.stringify(deck.targets)) : [{ type: 'global', id: null }];
    state.modal = 'deck-form';
    render();
    return true;
  }

  if (action === 'delete-mentor-deck') {
    const deckId = actionBtn.dataset.id;
    const deck = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(deckId));
    state.confirmation = {
      title: 'Excluir Baralho?',
      message: `Tem certeza que deseja excluir o baralho "${deck?.title || deckId}" e todos os seus cartões?`,
      confirmAction: 'confirm-delete-mentor-deck',
      deckId: deckId,
      confirmText: 'Excluir Baralho'
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-delete-mentor-deck') {
    const deckId = state.confirmation?.deckId;
    if (deckId) {
      api(`/mentoria2/flashcard-decks/${deckId}`, { method: 'DELETE' }).then(() => {
        window.M2Data.flashcardDecks = (window.M2Data.flashcardDecks || []).filter(d => String(d.id) !== String(deckId));
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Baralho excluído com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir baralho.', 'error');
      });
    }
    return true;
  }

  if (action === 'submit-deck-form' || action === 'confirm-create-mentor-deck') {
    const name = document.getElementById('m2-df-name')?.value?.trim();
    const subject = document.getElementById('m2-df-subject')?.value?.trim() || 'Geral';
    const description = document.getElementById('m2-df-description')?.value?.trim() || null;
    const contest_id = document.getElementById('m2-df-contest')?.value?.trim() || null;
    const edict_id = document.getElementById('m2-df-edict')?.value?.trim() || null;
    const targets = (state.currentTargets && state.currentTargets.length > 0)
      ? state.currentTargets
      : [{ type: 'global', id: null }];

    if (!name) {
      showToast('Informe o nome do baralho.', 'error');
      return true;
    }

    const isEditing = Boolean(state.editingDeck?.id);
    const endpoint = isEditing
      ? `/mentoria2/flashcard-decks/${encodeURIComponent(state.editingDeck.id)}`
      : '/mentoria2/flashcard-decks';
    const method = isEditing ? 'PATCH' : 'POST';

    const payload = {
      name,
      title: name,
      subject,
      description,
      contest_id,
      edict_id,
      targets
    };

    api(endpoint, {
      method,
      body: JSON.stringify(payload)
    }).then(res => {
      if (isEditing && state.editingDeck) {
        Object.assign(state.editingDeck, payload);
        const found = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(state.editingDeck.id));
        if (found) Object.assign(found, payload);
      } else {
        const newDeck = {
          id: res.id,
          title: name,
          name: name,
          subject,
          description,
          contest_id,
          edict_id,
          targets,
          author: window.M2Data.mentor?.name || 'Não informado',
          isShared: true,
          totalCards: 0,
          dueCards: 0,
          newCards: 0,
          masteredCards: 0,
          retentionRate: 0,
          cards: []
        };
        window.M2Data.flashcardDecks = window.M2Data.flashcardDecks || [];
        window.M2Data.flashcardDecks.unshift(newDeck);
      }
      state.modal = null;
      state.editingDeck = null;
      render();
      showToast(isEditing ? 'Baralho atualizado com sucesso!' : `Baralho "${name}" criado com sucesso!`, 'success');
      loadMentorResource('mentor-flashcards', api).then(() => render());
    }).catch(err => {
      showToast('Erro ao salvar baralho no servidor.', 'error');
    });
    return true;
  }

  if (action === 'open-deck-editor') {
    const deckId = actionBtn.dataset.id;
    state.activeDeckId = deckId;
    state.mode = 'mentor';
    state.screen = 'mentor-deck-editor';
    render();
    if (typeof loadDeckCards === 'function') {
      loadDeckCards(deckId, api).then(() => render()).catch(error => showToast('Não foi possível carregar os cartões.', 'error'));
    }
    return true;
  }

  if (action === 'create-mentor-card') {
    state.cardEditor = { deckId: actionBtn.dataset.deckId || state.activeDeckId, card: null };
    state.modal = 'mentor-card-form';
    render();
    return true;
  }

  if (action === 'edit-mentor-card') {
    const deckId = actionBtn.dataset.deckId || state.activeDeckId;
    const deck = (window.M2Data.flashcardDecks || []).find(item => String(item.id) === String(deckId));
    const card = deck?.cards?.find(item => String(item.id) === String(actionBtn.dataset.cardId));
    if (!card) {
      showToast('Cartão não encontrado. Atualize a lista e tente novamente.', 'error');
      return true;
    }
    state.cardEditor = { deckId, card };
    state.modal = 'mentor-card-form';
    render();
    return true;
  }

  if (action === 'save-mentor-card') {
    const editor = state.cardEditor || {};
    const front = document.getElementById('m2-card-front')?.value?.trim() || '';
    const back = document.getElementById('m2-card-back')?.value?.trim() || '';
    const hint = document.getElementById('m2-card-hint')?.value?.trim() || '';
    const tags = (document.getElementById('m2-card-tags')?.value || '')
      .split(',').map(tag => tag.trim()).filter(Boolean);
    if (!editor.deckId || !front || !back) {
      showToast('Preencha a frente e o verso do cartão.', 'error');
      return true;
    }
    const isEditing = Boolean(editor.card?.id);
    const endpoint = isEditing
      ? `/mentoria2/flashcards/${encodeURIComponent(editor.card.id)}`
      : `/mentoria2/flashcard-decks/${encodeURIComponent(editor.deckId)}/cards`;
    api(endpoint, {
      method: isEditing ? 'PATCH' : 'POST',
      body: JSON.stringify({ front, back, hint: hint || null, tags })
    }).then(response => {
      const deck = (window.M2Data.flashcardDecks || []).find(item => String(item.id) === String(editor.deckId));
      if (deck) {
        deck.cards = deck.cards || [];
        if (isEditing) {
          const index = deck.cards.findIndex(item => String(item.id) === String(editor.card.id));
          if (index >= 0) deck.cards[index] = { ...deck.cards[index], front, back, hint: hint || null, tags };
        } else {
          deck.cards.push({ id: response.id, front, back, hint: hint || null, tags });
          deck.totalCards = deck.cards.length;
        }
      }
      state.modal = null;
      state.cardEditor = null;
      render();
      showToast(isEditing ? 'Cartão atualizado.' : 'Cartão criado.', 'success');
    }).catch(error => showToast('Não foi possível salvar o cartão.', 'error'));
    return true;
  }

  if (action === 'delete-mentor-card') {
    const cardId = actionBtn.dataset.cardId;
    const deckId = actionBtn.dataset.deckId || state.activeDeckId;
    state.confirmation = {
      title: 'Excluir Cartão?',
      message: 'Tem certeza que deseja excluir este cartão do baralho?',
      confirmAction: 'confirm-delete-mentor-card',
      cardId: cardId,
      deckId: deckId,
      confirmText: 'Excluir Cartão'
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-delete-mentor-card') {
    const { cardId, deckId } = state.confirmation || {};
    if (cardId) {
      api(`/mentoria2/flashcards/${cardId}`, { method: 'DELETE' }).then(() => {
        const deck = (window.M2Data.flashcardDecks || []).find(d => String(d.id) === String(deckId));
        if (deck && deck.cards) {
          deck.cards = deck.cards.filter(c => String(c.id) !== String(cardId));
          deck.totalCards = deck.cards.length;
        }
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Cartão excluído com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir cartão.', 'error');
      });
    }
    return true;
  }

  // Mentor Mock Exam Editing/Deleting
  if (action === 'create-mock') {
    state.modal = 'manual-mock';
    render();
    showToast('Abra o assistente para registrar ou criar um novo simulado.', 'info');
    return true;
  }

  if (action === 'edit-mock') {
    const mockId = actionBtn.dataset.id;
    const mock = (window.M2Data.mockExams || []).find(m => String(m.id) === String(mockId));
    state.quickPrompt = {
      title: 'Editar Simulado',
      subtitle: mock ? `Simulado: ${mock.title || mock.name}` : '',
      label: 'Título do Simulado:',
      inputType: 'text',
      value: mock?.title || mock?.name || '',
      confirmAction: 'confirm-edit-mock',
      confirmText: 'Salvar Alterações',
      mockId: mockId,
      mock: mock
    };
    state.modal = 'quick-prompt';
    render();
    return true;
  }

  if (action === 'confirm-edit-mock') {
    const input = document.getElementById('m2-quick-prompt-input');
    const title = input?.value?.trim();
    const { mockId, mock } = state.quickPrompt || {};
    if (title && mockId) {
      const studentId = window.M2Data?.currentStudent?.id || 1;
      api(`/mentoria2/students/${studentId}/mock-exams/${mockId}`, {
        method: 'PATCH',
        body: JSON.stringify({ title: title })
      }).then(() => {
        if (mock) { mock.title = title; mock.name = title; }
        state.modal = null;
        state.quickPrompt = null;
        render();
        showToast('Simulado atualizado com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao atualizar simulado.', 'error');
      });
    } else {
      showToast('Informe o título do simulado.', 'error');
    }
    return true;
  }

  if (action === 'delete-mock') {
    const mockId = actionBtn.dataset.id;
    const mock = (window.M2Data.mockExams || []).find(m => String(m.id) === String(mockId));
    state.confirmation = {
      title: 'Excluir Simulado?',
      message: `Tem certeza que deseja excluir o simulado "${mock?.title || mock?.name || mockId}"?`,
      confirmAction: 'confirm-delete-mock',
      mockId: mockId,
      confirmText: 'Excluir Simulado'
    };
    state.modal = 'confirmation';
    render();
    return true;
  }

  if (action === 'confirm-delete-mock') {
    const mockId = state.confirmation?.mockId;
    if (mockId) {
      const studentId = window.M2Data?.currentStudent?.id || 1;
      api(`/mentoria2/students/${studentId}/mock-exams/${mockId}`, { method: 'DELETE' }).then(() => {
        window.M2Data.mockExams = (window.M2Data.mockExams || []).filter(m => String(m.id) !== String(mockId));
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Simulado excluído com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir simulado.', 'error');
      });
    }
    return true;
  }

  // Products & Access Configuration
  if (action === 'open-product-config') {
    const productId = actionBtn.dataset.productId;
    const product = (window.M2Data.mentorProducts || []).find(p => String(p.id) === String(productId));
    if (product) {
      state.configuringProduct = product;
      state.modal = 'product-config';
      render();
    }
    return true;
  }

  if (action === 'submit-product-config') {
    const productId = actionBtn.dataset.productId || state.configuringProduct?.id;
    if (!productId) return true;

    const accessMode = document.querySelector('input[name="m2-prod-access-mode"]:checked')?.value || 'full';
    const contestIds = Array.from(document.querySelectorAll('input[name="m2-prod-contest"]:checked')).map(el => el.value);
    const autoBonus7d = Boolean(document.getElementById('m2-prod-auto-bonus-7d')?.checked);
    const aiEnabled = Boolean(document.getElementById('m2-prod-ai-enabled')?.checked);
    const aiScheduleEnabled = Boolean(document.getElementById('m2-prod-ai-schedule-enabled')?.checked);

    let capabilities = null;
    if (accessMode === 'custom') {
      capabilities = Array.from(document.querySelectorAll('input[name="m2-custom-cap"]:checked')).map(el => el.value);
      if (capabilities.length === 0) {
        capabilities = ['dashboard', 'edital'];
      }
    } else if (accessMode === 'questions_only') {
      capabilities = ['questoes', 'cadernos', 'metricas'];
    } else if (accessMode === 'mock_only') {
      capabilities = ['simulados', 'metricas'];
    } else {
      capabilities = ['dashboard', 'edital', 'materiais', 'cronograma', 'cronograma_inteligente', 'revisoes', 'flashcards', 'questoes', 'simulados', 'redacao', 'cadernos', 'tutor_ia', 'metricas', 'cursos'];
    }

    const payload = {
      access_mode: accessMode,
      capabilities,
      settings: {
        access_mode: accessMode,
        contest_ids: contestIds,
        auto_bonus_7d: autoBonus7d,
        ai_enabled: aiEnabled,
        ai_schedule_enabled: aiScheduleEnabled
      }
    };

    api(`/mentoria2/products/${encodeURIComponent(productId)}/enable`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(res => {
      const prod = (window.M2Data.mentorProducts || []).find(p => String(p.id) === String(productId));
      if (prod) {
        prod.mentoria2_enabled = true;
        prod.capabilities = res.capabilities || payload.capabilities;
        prod.settings = res.settings || payload.settings;
      }
      state.modal = null;
      state.configuringProduct = null;
      showToast('Configurações de módulos e acesso do produto salvas com sucesso!', 'success');
      render();
    }).catch(err => {
      showToast('Erro ao salvar configuração do produto.', 'error');
    });
    return true;
  }

  if (action === 'enable-mentoria-product' || action === 'disable-mentoria-product') {
    const productId = actionBtn.dataset.productId;
    if (!productId) {
      showToast('Produto inválido.', 'error');
      return true;
    }
    const enabling = action === 'enable-mentoria-product';
    const endpoint = `/mentoria2/products/${encodeURIComponent(productId)}${enabling ? '/enable' : ''}`;
    api(endpoint, { method: enabling ? 'POST' : 'DELETE', body: enabling ? JSON.stringify({}) : undefined })
      .then(() => {
        const product = (window.M2Data.mentorProducts || []).find(item => String(item.id) === String(productId));
        if (product) product.mentoria2_enabled = enabling;
        render();
        showToast(enabling ? 'Produto vinculado à Mentoria 2.0.' : 'Produto desvinculado da Mentoria 2.0.', 'success');
      })
      .catch(error => showToast('Não foi possível atualizar o produto.', 'error'));
    return true;
  }

  // Mentor Goals
  if (action === 'create-goal') {
    state.modal = 'goal-form';
    render();
    return true;
  }

  if (action === 'save-goal') {
    const value = id => document.getElementById(id)?.value?.trim() || '';
    const scope = value('m2-goal-scope');
    const students = window.M2Data.mentorStudents || window.M2Data.students || [];
    const payload = {
      name: value('m2-goal-name'),
      metric: value('m2-goal-metric'),
      target: Number(value('m2-goal-target')),
      starts_on: value('m2-goal-start'),
      ends_on: value('m2-goal-end'),
      contest_id: value('m2-goal-contest') || null,
      is_challenge: Boolean(document.getElementById('m2-goal-challenge')?.checked)
    };
    if (scope === 'all') payload.student_ids = students.map(s => Number(s.id)).filter(Number.isFinite);
    if (scope === 'cohort') payload.cohort_id = value('m2-goal-cohort');
    if (scope === 'student') payload.student_ids = [Number(value('m2-goal-student'))].filter(Number.isFinite);
    if (!payload.name || !payload.target || !payload.starts_on || !payload.ends_on || (scope === 'cohort' && !payload.cohort_id) || (scope === 'student' && payload.student_ids.length === 0)) {
      showToast('Preencha os campos obrigatórios e o destinatário.', 'error');
      return true;
    }
    api('/mentoria2/goals', { method: 'POST', body: JSON.stringify(payload) })
      .then(result => {
        state.modal = null;
        render();
        showToast(`Meta atribuída a ${(result.goals || []).length} aluno(s) e salva no servidor.`, 'success');
      })
      .catch(error => showToast('Não foi possível criar a meta.', 'error'));
    return true;
  }

  if (action === 'delete-goal') {
    const id = actionBtn.dataset.id;
    if (id) {
      state.confirmation = {
        title: 'Excluir meta?',
        message: 'A meta deixará de aparecer para os alunos que a receberam.',
        confirmAction: 'confirm-delete-goal',
        goalId: id,
        confirmText: 'Excluir meta'
      };
      state.modal = 'confirmation';
      render();
    }
    return true;
  }

  if (action === 'confirm-delete-goal') {
    const id = state.confirmation?.goalId;
    if (id) {
      api(`/mentoria2/goals/${id}`, {
        method: 'DELETE'
      }).then(() => {
        window.M2Data.goals = (window.M2Data.goals || []).filter(g => String(g.id) !== String(id));
        state.modal = null;
        state.confirmation = null;
        render();
        showToast('Meta excluída com sucesso!', 'success');
      }).catch(err => {
        showToast('Erro ao excluir meta.', 'error');
      });
    }
    return true;
  }

  // Quick Prompt Confirmation Delegation
  if (action === 'submit-quick-prompt') {
    const confirmAction = state.quickPrompt?.confirmAction;
    if (confirmAction && confirmAction !== 'submit-quick-prompt') {
      const fakeBtn = document.createElement('button');
      fakeBtn.dataset.action = confirmAction;
      actionBtn.parentElement.appendChild(fakeBtn);
      fakeBtn.click();
      fakeBtn.remove();
    }
    return true;
  }

  // Essay Grading (Mentor)
  if (action === 'open-grade-essay') {
    const subId = actionBtn.dataset.id;
    const sub = (window.M2Data.mentorEssaySubmissions || []).find(s => String(s.id) === String(subId));
    if (sub) {
      state.gradingSubmission = sub;
      state.modal = 'grade-essay';
      render();
    } else {
      showToast('Redação não encontrada.', 'error');
    }
    return true;
  }

  if (action === 'submit-mentor-grade-essay') {
    const submissionId = actionBtn.dataset.id || state.gradingSubmission?.id;
    const tema = Number(document.getElementById('m2-grade-crit-tema')?.value || 0);
    const estrutura = Number(document.getElementById('m2-grade-crit-estrutura')?.value || 0);
    const gramatica = Number(document.getElementById('m2-grade-crit-gramatica')?.value || 0);
    const totalScore = Number(document.getElementById('m2-grade-total-score')?.value || 0);
    const feedback = document.getElementById('m2-grade-feedback')?.value?.trim() || '';

    if (!feedback || feedback.length < 10) {
      showToast('Por favor, informe um feedback pedagógico detalhado (mínimo 10 caracteres).', 'error');
      return true;
    }

    api(`/mentoria2/essays/submissions/${submissionId}/grade`, {
      method: 'POST',
      body: JSON.stringify({
        total_score: totalScore,
        criteria_scores: { tema, estrutura, gramatica },
        feedback: feedback
      })
    }).then(res => {
      state.modal = null;
      state.gradingSubmission = null;
      const sub = (window.M2Data.mentorEssaySubmissions || []).find(s => String(s.id) === String(submissionId));
      if (sub) {
        sub.status = 'graded';
        sub.total_score = totalScore;
        sub.criteria_scores = { tema, estrutura, gramatica };
        sub.feedback = feedback;
        sub.graded_at = new Date().toISOString();
      }
      render();
      showToast('Redação corrigida e nota registrada com sucesso!', 'success');
    }).catch(err => {
      showToast('Erro ao registrar correção da redação.', 'error');
    });
    return true;
  }

  // Mentor Performance Report Export
  if (action === 'export-report') {
    const students = window.M2Data.students || [];
    let csv = 'Aluno;Email;Turma;Concurso;Horas Estudadas;Questoes Resolvidas;Acuracia (%)\r\n';
    students.forEach(s => {
      csv += `"${s.name}";"${s.email}";"${s.cohort}";"${s.contest}";${s.hoursWeek || 0};${s.questionsResolved || 0};${s.accuracy || 0}%\r\n`;
    });
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-mentoria-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Relatório da mentoria exportado com sucesso em CSV!', 'success');
    return true;
  }

  return false;
}

export function handleMentorChange(e, { state, api, render, showToast, loadMentorResource, renderAudienceSelector }) {
  if (e.target.dataset.action === 'toggle-qf-type') {
    const altGroup = document.getElementById('m2-qf-alternatives-group');
    const correctSelect = document.getElementById('m2-qf-correct');
    if (altGroup && correctSelect) {
      if (e.target.value === 'certo_errado') {
        altGroup.style.display = 'none';
        correctSelect.innerHTML = '<option value="Certo">Certo</option><option value="Errado">Errado</option>';
      } else {
        altGroup.style.display = 'block';
        correctSelect.innerHTML = '<option value="A">Alternativa A</option><option value="B">Alternativa B</option><option value="C">Alternativa C</option><option value="D">Alternativa D</option><option value="E">Alternativa E</option>';
      }
    }
    return true;
  }

  if (e.target.dataset.action === 'toggle-mf-type') {
    const val = e.target.value;
    const urlGroup = document.getElementById('m2-mf-url-group');
    const textGroup = document.getElementById('m2-mf-text-group');
    const fileGroup = document.getElementById('m2-mf-file-group');
    if (urlGroup && textGroup && fileGroup) {
      urlGroup.style.display = (val === 'youtube' || val === 'link') ? 'block' : 'none';
      textGroup.style.display = (val === 'texto') ? 'block' : 'none';
      fileGroup.style.display = (val === 'arquivo') ? 'block' : 'none';
    }
    return true;
  }

  if (e.target.dataset.action === 'change-audience-target-type') {
    const idx = Number(e.target.dataset.index);
    if (state.currentTargets && state.currentTargets[idx]) {
      state.currentTargets[idx].type = e.target.value;
      state.currentTargets[idx].id = null;
      updateAudienceDOM(e.target, state, render, renderAudienceSelector);
    }
    return true;
  }

  if (e.target.dataset.action === 'change-audience-target-id') {
    const idx = Number(e.target.dataset.index);
    if (state.currentTargets && state.currentTargets[idx]) {
      state.currentTargets[idx].id = e.target.value;
    }
    return true;
  }

  if (e.target.dataset.action === 'change-product-access-mode') {
    const productId = e.target.dataset.productId;
    const mode = e.target.value;
    const capabilities = (mode === 'questions_only')
      ? ['questoes', 'cadernos', 'metricas']
      : ['dashboard', 'edital', 'materiais', 'cronograma', 'cronograma_inteligente', 'revisoes', 'flashcards', 'questoes', 'simulados', 'cadernos', 'metricas', 'cursos'];

    api(`/mentoria2/products/${encodeURIComponent(productId)}/enable`, {
      method: 'POST',
      body: JSON.stringify({ capabilities })
    }).then(() => {
      const prod = (window.M2Data.mentorProducts || []).find(p => String(p.id) === String(productId));
      if (prod) {
        prod.capabilities = capabilities;
      }
      showToast(mode === 'questions_only' ? 'Configurado para Apenas Caderno de Questões.' : 'Configurado para Mentoria Completa.', 'success');
      render();
    }).catch(err => {
      showToast('Erro ao atualizar nível de acesso do produto.', 'error');
    });
    return true;
  }

  if (['mentor-filter-subject', 'mentor-filter-difficulty', 'mentor-filter-status', 'mentor-filter-board', 'mentor-filter-format'].includes(e.target.dataset.action)) {
    const screen = e.target.dataset.screen || state.screen;
    const key = e.target.dataset.action === 'mentor-filter-subject' ? 'subject' : (
      e.target.dataset.action === 'mentor-filter-difficulty' ? 'difficulty' : (
        e.target.dataset.action === 'mentor-filter-status' ? 'content_status' : (
          e.target.dataset.action === 'mentor-filter-board' ? 'board' : 'format'
        )
      )
    );
    loadMentorResource(screen, api, 1, { [key]: e.target.value }).then(() => render()).catch(error => showToast('Erro ao filtrar.', 'error'));
    return true;
  }

  if (e.target.dataset.action === 'change-announcement-target-type') {
    state.announcementTargetType = e.target.value;
    render();
    return true;
  }

  return false;
}

export function handleMentorInput(e, { state, api, render, showToast, loadMentorResource, applyTheme }) {
  if (e.target.classList && e.target.classList.contains('m2-color-field-input')) {
    const key = e.target.dataset.colorKey;
    const scheme = state.colorEditScheme || 'dark';
    const val = e.target.value;
    window.M2Data.mentorship = window.M2Data.mentorship || {};
    window.M2Data.mentorship.platform_colors = window.M2Data.mentorship.platform_colors || {};
    window.M2Data.mentorship.platform_colors[scheme] = window.M2Data.mentorship.platform_colors[scheme] || {};
    window.M2Data.mentorship.platform_colors[scheme][key] = val;
    if (scheme === 'dark') {
      window.M2Data.mentorship.platform_colors[key] = val;
    }
    const previewEl = document.getElementById(`m2-color-hex-${key}`);
    if (previewEl) previewEl.textContent = val;
    if (typeof applyTheme === 'function') applyTheme();
    const previewCard = document.querySelector('.m2-theme-preview-card');
    if (previewCard) {
      if (key === 'bg_app') previewCard.style.background = val;
      if (key === 'border_color') previewCard.style.borderColor = val;
      if (key === 'text_main') previewCard.style.color = val;
    }
    return true;
  }

  if (e.target.dataset.action === 'mentor-filter-search' || e.target.dataset.action === 'mentor-filter-folder') {
    const screen = e.target.dataset.screen || state.screen;
    const key = e.target.dataset.action === 'mentor-filter-folder' ? 'folder' : 'search';
    clearTimeout(window.__m2FilterDebounce);
    window.__m2FilterDebounce = setTimeout(() => {
      loadMentorResource(screen, api, 1, { [key]: e.target.value }).then(() => render()).catch(error => showToast('Erro ao filtrar.', 'error'));
    }, 300);
    return true;
  }

  return false;
}
