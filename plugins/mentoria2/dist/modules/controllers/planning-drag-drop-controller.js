export function setupPlanningDragDrop({ state, api, render, showToast, planningBase }) {
  let draggingCard = null;
  let draggingItemId = null;

  document.addEventListener('dragstart', (event) => {
    const card = event.target.closest('[draggable="true"][data-item-id]');
    if (!card) return;
    draggingCard = card;
    draggingItemId = card.dataset.itemId;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', draggingItemId);
    }
    card.classList.add('is-dragging');
  });

  document.addEventListener('dragend', () => {
    if (draggingCard) draggingCard.classList.remove('is-dragging');
    draggingCard = null;
    draggingItemId = null;
    document.querySelectorAll('.is-dragover').forEach((element) => element.classList.remove('is-dragover'));
  });

  document.addEventListener('dragover', (event) => {
    const dropTarget = event.target.closest('[data-drop-date]');
    if (!dropTarget || !draggingItemId) return;
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
  });

  document.addEventListener('dragenter', (event) => {
    const dropTarget = event.target.closest('[data-drop-date]');
    if (!dropTarget || !draggingItemId) return;
    dropTarget.classList.add('is-dragover');
    dropTarget.closest('.m2-cal-col')?.classList.add('is-dragover');
  });

  document.addEventListener('dragleave', (event) => {
    const dropTarget = event.target.closest('[data-drop-date]');
    if (!dropTarget || dropTarget.contains(event.relatedTarget)) return;
    dropTarget.classList.remove('is-dragover');
    const column = dropTarget.closest('.m2-cal-col');
    if (column && !column.contains(event.relatedTarget)) column.classList.remove('is-dragover');
  });

  document.addEventListener('drop', (event) => {
    const dropTarget = event.target.closest('[data-drop-date]');
    let itemId = null;
    try { itemId = event.dataTransfer?.getData('text/plain'); } catch (_) { /* Browser data transfer may be unavailable. */ }
    if (!itemId) itemId = draggingItemId;
    if (!dropTarget || !itemId) return;

    event.preventDefault();
    document.querySelectorAll('.is-dragover').forEach((element) => element.classList.remove('is-dragover'));
    const targetDate = dropTarget.dataset.dropDate;
    if (draggingCard) draggingCard.classList.remove('is-dragging');
    draggingCard = null;
    draggingItemId = null;
    if (!targetDate) return;

    const calendarItem = (state.calendarItems || []).find((item) => String(item.id) === String(itemId));
    const scheduleItem = (window.M2Data.scheduleItems || []).find((item) => String(item.id) === String(itemId));
    const item = calendarItem || scheduleItem;
    if (!item) return;

    const oldDate = item.planned_date ? String(item.planned_date).slice(0, 10) : '';
    if (oldDate === targetDate) return;
    if (calendarItem) calendarItem.planned_date = targetDate;
    if (scheduleItem) scheduleItem.planned_date = targetDate;
    render();

    api(`${planningBase()}/schedule-items/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ planned_date: targetDate }),
    }).then(() => {
      const [year, month, day] = targetDate.split('-').map(Number);
      const date = new Date(year, month - 1, day, 12, 0, 0);
      const label = new Intl.DateTimeFormat('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
      showToast(`Atividade movida para ${label}!`, 'success');
    }).catch(() => {
      if (calendarItem) calendarItem.planned_date = oldDate;
      if (scheduleItem) scheduleItem.planned_date = oldDate;
      render();
      showToast('Não foi possível mover a atividade.', 'error');
    });
  });
}
