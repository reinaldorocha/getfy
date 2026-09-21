/**
 * Normaliza a definição de uma página de plugin para a UI em runtime.
 * Páginas existentes, declaradas apenas como string, preservam o layout padrão.
 */
export function resolvePluginPageDefinition(pages, page) {
    const definition = pages?.[page];
    if (typeof definition === 'string' && definition.trim() !== '') {
        return { exportName: definition, layout: 'producer' };
    }
    if (!definition || typeof definition !== 'object') {
        return null;
    }

    const exportName = typeof definition.export === 'string' ? definition.export.trim() : '';
    if (exportName === '') {
        return null;
    }

    return {
        exportName,
        layout: definition.layout === 'standalone' ? 'standalone' : 'producer',
    };
}
