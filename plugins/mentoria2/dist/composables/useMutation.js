import { ref } from 'vue';
import { requestJson } from '../api/client.js?v=d6fd58c3ef81';

/**
 * Composable para mutações (POST, PATCH, PUT, DELETE) com
 * proteção contra clique duplo, feedback de erro e confirmação do servidor.
 */
export function useMutation(mutationFnOrUrl, defaultOptions = {}) {
    const busy = ref(false);
    const error = ref(null);
    const success = ref(false);

    async function execute(payload = {}, callOptions = {}) {
        if (busy.value) return null; // Evita envio duplo acidental

        busy.value = true;
        error.value = null;
        success.value = false;

        try {
            let result;
            if (typeof mutationFnOrUrl === 'function') {
                result = await mutationFnOrUrl(payload, callOptions);
            } else {
                const method = callOptions.method || defaultOptions.method || 'POST';
                result = await requestJson(mutationFnOrUrl, {
                    method,
                    body: payload instanceof FormData ? payload : JSON.stringify(payload),
                    ...callOptions,
                });
            }
            success.value = true;
            if (typeof defaultOptions.onSuccess === 'function') {
                defaultOptions.onSuccess(result);
            }
            return result;
        } catch (err) {
            error.value = err?.message || 'Falha na operação.';
            if (typeof defaultOptions.onError === 'function') {
                defaultOptions.onError(err);
            }
            throw err;
        } finally {
            busy.value = false;
        }
    }

    return {
        busy,
        error,
        success,
        execute,
        reset: () => {
            busy.value = false;
            error.value = null;
            success.value = false;
        },
    };
}

