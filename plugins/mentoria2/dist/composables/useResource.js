import { ref, onUnmounted } from 'vue';
import { requestJson } from '../api/client.js?v=d6fd58c3ef81';

/**
 * Composable para carregar recursos com controle de estado,
 * cancelamento de requisições anteriores e limpeza de ciclo de vida.
 */
export function useResource(urlOrFetcher, options = {}) {
    const data = ref(options.initialData ?? null);
    const loading = ref(false);
    const error = ref(null);
    let abortController = null;

    async function load(overrideUrl = null, fetchOptions = {}) {
        if (abortController) {
            abortController.abort();
        }
        abortController = typeof AbortController !== 'undefined' ? new AbortController() : null;

        loading.value = true;
        error.value = null;

        try {
            let result;
            if (typeof urlOrFetcher === 'function') {
                result = await urlOrFetcher({ signal: abortController?.signal, ...fetchOptions });
            } else {
                const targetUrl = overrideUrl || urlOrFetcher;
                result = await requestJson(targetUrl, { signal: abortController?.signal, ...fetchOptions });
            }
            data.value = result;
            return result;
        } catch (err) {
            if (err?.name === 'AbortError') {
                return null;
            }
            error.value = err?.message || 'Erro ao carregar dados.';
            throw err;
        } finally {
            loading.value = false;
        }
    }

    onUnmounted(() => {
        if (abortController) {
            abortController.abort();
        }
    });

    return {
        data,
        loading,
        error,
        load,
        cancel: () => abortController?.abort(),
    };
}

