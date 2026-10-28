const resources = {
  'mentor-questions': { url: '/mentoria2/questions', key: 'questions', map: q => ({ ...q, subjectName: q.subject || 'Geral', topicName: q.topic || '', statement: q.prompt || '', answer: q.correct_answer || 'A' }) },
  'mentor-flashcards': {
    url: '/mentoria2/flashcard-decks',
    key: 'flashcardDecks',
    map: d => {
      const existing = (window.M2Data.flashcardDecks || []).find(x => String(x.id).toLowerCase() === String(d.id).toLowerCase());
      const count = Number(d.cards_count !== undefined ? d.cards_count : (existing?.totalCards || existing?.cards?.length || 0));
      return {
        ...d,
        title: d.name || d.title || '',
        name: d.name || d.title || '',
        totalCards: count,
        cards_count: count,
        cards: (existing && Array.isArray(existing.cards) && existing.cards.length > 0) ? existing.cards : (d.cards || []),
        isShared: true
      };
    }
  },
  'mentor-materials': { url: '/mentoria2/materials', key: 'materials', map: m => ({ ...m, topic: m.folder || '', size: m.file_name || '' }) },
  'mentor-contests': { url: '/mentoria2/contests', key: 'contests', map: c => c },
};

export async function loadMentorResource(screen, request, page = 1, filters = null) {
  const resource = resources[screen];
  if (!resource) return false;
  window.M2Data = window.M2Data || {};
  window.M2Data.mentorListState = window.M2Data.mentorListState || {};
  const prevFilters = window.M2Data.mentorListState[screen]?.filters || {};
  const activeFilters = filters !== null ? { ...prevFilters, ...filters } : prevFilters;

  window.M2Data.mentorListState[screen] = {
    loading: true,
    page,
    filters: activeFilters,
    meta: window.M2Data.mentorListState[screen]?.meta || null
  };

  const params = new URLSearchParams({ page: String(page), per_page: '25' });
  for (const [key, val] of Object.entries(activeFilters)) {
    if (val !== undefined && val !== null && String(val).trim() !== '' && val !== 'all') {
      params.set(key, String(val).trim());
    }
  }

  const response = await request(`${resource.url}?${params.toString()}`);
  const items = Array.isArray(response.data) ? response.data.map(resource.map) : [];
  window.M2Data[resource.key] = items;
  window.M2Data.mentorListState[screen] = {
    loading: false,
    page: response.meta?.current_page || page,
    filters: activeFilters,
    meta: response.meta || { current_page: 1, last_page: 1, total: items.length }
  };
  return true;
}

export async function loadContestSyllabus(contestId, request) {
  const response = await request(`/mentoria2/contests/${encodeURIComponent(contestId)}/syllabus`);
  window.M2Data = window.M2Data || {};
  window.M2Data.syllabus = Array.isArray(response.subjects) ? response.subjects : [];
  window.M2Data.edicts = Array.isArray(response.edicts) ? response.edicts : [];
  window.M2Data.topics = Array.isArray(response.topics) ? response.topics : [];
}

export async function loadDeckCards(deckId, request) {
  const response = await request(`/mentoria2/flashcard-decks/${encodeURIComponent(deckId)}/cards?per_page=100`);
  window.M2Data = window.M2Data || {};
  let deck = (window.M2Data.flashcardDecks || []).find(item => String(item.id).toLowerCase() === String(deckId).toLowerCase());
  const rawCards = Array.isArray(response.data) ? response.data : [];
  const normalizedCards = rawCards.map(c => ({
    id: c.id,
    front: c.front,
    back: c.back,
    tip: c.tags?.[0] || '',
    interval: `${c.interval_days || 1} dia(s)`,
    repetitions: c.repetitions || 0,
    difficulty: 'Normal'
  }));

  if (!deck && response.deck) {
    deck = {
      id: response.deck.id,
      title: response.deck.name,
      name: response.deck.name,
      subject: response.deck.subject || '',
      isShared: true,
      totalCards: normalizedCards.length,
      cards: normalizedCards
    };
    window.M2Data.flashcardDecks.push(deck);
  } else if (deck) {
    deck.cards = normalizedCards;
    deck.totalCards = normalizedCards.length;
    deck.cards_count = normalizedCards.length;
  }
  return response.meta || {};
}
