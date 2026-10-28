function numericTenant(value) {
    const tenantId = Number(value);
    return Number.isInteger(tenantId) && tenantId > 0 ? tenantId : null;
}

function cleanBase(value) {
    if (typeof value !== 'string') return null;
    const trimmed = value.trim().replace(/\/+$/, '');
    if (trimmed.startsWith('/')) return trimmed;

    try {
        const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost';
        const url = new URL(trimmed, currentOrigin);
        if (typeof window !== 'undefined' && url.origin !== window.location.origin) return null;
        return `${url.pathname}${url.search}`.replace(/\/$/, '') || '/';
    } catch {
        return null;
    }
}

/**
 * Contexto imutável por montagem. A UI não pode transformar a área de um
 * mentor em workspace apenas trocando nome e ID no estado local.
 */
export function createMentoriaContext({ mode = 'student', payload = {} } = {}) {
    const tenantId = numericTenant(payload?.tenant_id);
    const workspaceBase = cleanBase(payload?.workspace_base);
    const actingAsMentor = Boolean(payload?.acting_as_mentor && workspaceBase);
    const resolvedMode = actingAsMentor ? 'workspace' : mode;

    return Object.freeze({
        mode: resolvedMode,
        tenantId,
        workspaceBase,
        actingAsMentor,
        studentId: actingAsMentor ? Number(payload?.student?.id) || null : null,
        studentBase: tenantId ? `/mentoria2-estudos/${tenantId}` : null,
        resourceBase: workspaceBase || (tenantId ? `/mentoria2-estudos/${tenantId}` : null),
    });
}
