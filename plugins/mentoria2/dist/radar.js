const number = (value) => Number(value) || 0;

export function radarAlerts(metrics = {}) {
    const alerts = [];
    const currentAccuracy = number(metrics.accuracy_7d);
    const previousAccuracy = number(metrics.accuracy_previous_7d);
    const accuracyDrop = previousAccuracy - currentAccuracy;
    const edictProgress = number(metrics.edict_pace_percentage ?? metrics.edict_percentage);
    const edictTarget = number(metrics.edict_target_percentage);
    const pendingReviews = number(metrics.pending_reviews);

    if (number(metrics.study_hours_7d) === 0) {
        alerts.push({
            type: 'low_frequency',
            label: 'Baixa frequência',
            detail: 'Sem estudo registrado nos últimos 7 dias.',
            tone: 'red',
        });
    }

    if (number(metrics.questions_7d) >= 10
        && number(metrics.questions_previous_7d) >= 10
        && accuracyDrop >= 10) {
        alerts.push({
            type: 'accuracy_drop',
            label: 'Queda de acerto',
            detail: `${Math.round(accuracyDrop)} pontos abaixo da semana anterior.`,
            tone: 'amber',
        });
    }

    if (edictTarget > 0 && edictProgress < edictTarget) {
        alerts.push({
            type: 'edict_behind',
            label: 'Edital atrasado',
            detail: `${Math.round(edictProgress)}% concluído; ritmo esperado: ${Math.round(edictTarget)}%.`,
            tone: 'amber',
        });
    }

    if (pendingReviews > 0) {
        alerts.push({
            type: 'pending_reviews',
            label: 'Revisão pendente',
            detail: `${pendingReviews} revis${pendingReviews === 1 ? 'ão pendente.' : 'ões pendentes.'}`,
            tone: pendingReviews >= 5 ? 'red' : 'amber',
        });
    }

    return alerts;
}
