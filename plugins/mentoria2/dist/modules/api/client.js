/**
 * Unified HTTP Client & API Contracts - Mentoria 2.0
 * Provides centralized request handling, CSRF protection, timeout,
 * safe error normalization (no technical stack/SQL leaks), and helper utilities.
 */

export class MentoriaApiError extends Error {
  constructor(message, { status = 0, body = {}, url = '' } = {}) {
    super(message);
    this.name = 'MentoriaApiError';
    this.status = status;
    this.body = body;
    this.url = url;
  }

  get isValidationError() {
    return this.status === 422;
  }

  get isForbidden() {
    return this.status === 401 || this.status === 403;
  }

  get isNotFound() {
    return this.status === 404;
  }

  get isServerError() {
    return this.status >= 500;
  }
}

/**
 * Retrieves the CSRF token from meta tags or cookies.
 */
export function csrfToken() {
  if (typeof document === 'undefined') return '';
  const meta = document.querySelector('meta[name="csrf-token"]')?.content;
  if (meta) return meta;

  // Fallback to cookie
  const cookieMatch = document.cookie?.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);
  if (cookieMatch && cookieMatch[1]) {
    try {
      return decodeURIComponent(cookieMatch[1]);
    } catch (_) {
      return cookieMatch[1];
    }
  }

  return '';
}

function isFormData(body) {
  return typeof FormData !== 'undefined' && body instanceof FormData;
}

/**
 * Sanitizes and extracts user-facing friendly error messages.
 * Never leaks raw SQL, PDOException, MySQL syntax or internal traces.
 */
export function sanitizeErrorMessage(body, status = 0) {
  // 1. Validation errors (Laravel format)
  if (body?.errors && typeof body.errors === 'object') {
    const messages = Object.values(body.errors).flat().filter(Boolean);
    if (messages.length) return messages.join(' ');
  }

  const raw = String(body?.message || '');

  // 2. Filter out raw technical diagnostics or database errors
  const isTechnical = /SQLSTATE|syntax error|PDOException|QueryException|connection refused|table or view not found|at line \d+/i.test(raw);
  if (isTechnical || status >= 500) {
    return 'Não foi possível concluir a operação no momento. Tente novamente mais tarde.';
  }

  if (status === 403) {
    return raw || 'Acesso não autorizado para esta funcionalidade.';
  }

  if (status === 404) {
    return raw || 'O recurso solicitado não foi encontrado.';
  }

  return raw || 'Não foi possível concluir a operação.';
}

/**
 * Helper to build clean query strings without null/undefined values.
 */
export function buildQuery(params = {}) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined || value === '') continue;
    if (Array.isArray(value)) {
      value.forEach(item => {
        if (item !== null && item !== undefined && item !== '') {
          query.append(`${key}[]`, String(item));
        }
      });
    } else {
      query.set(key, String(value));
    }
  }
  const str = query.toString();
  return str ? `?${str}` : '';
}

/**
 * Central HTTP client for Mentoria 2.0.
 */
export async function requestJson(url, options = {}) {
  const {
    timeout = 35000,
    headers: customHeaders = {},
    signal: userSignal,
    ...restOptions
  } = options;

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timeoutId = controller ? setTimeout(() => controller.abort(), timeout) : null;
  const signal = userSignal || (controller ? controller.signal : undefined);

  const headers = {
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': csrfToken(),
    ...(isFormData(restOptions.body) ? {} : { 'Content-Type': 'application/json' }),
    ...customHeaders,
  };

  let response;
  try {
    response = await fetch(url, {
      credentials: 'same-origin',
      signal,
      ...restOptions,
      headers,
    });
  } catch (cause) {
    if (timeoutId) clearTimeout(timeoutId);
    if (cause?.name === 'AbortError') {
      throw new MentoriaApiError('A requisição expirou o tempo limite. Verifique sua conexão e tente novamente.', { url, status: 408 });
    }
    throw new MentoriaApiError('Não foi possível conectar ao servidor. Tente novamente.', { url, body: { cause } });
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }

  const contentType = response.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await response.json().catch(() => ({}))
    : { message: await response.text().catch(() => '') };

  if (!response.ok) {
    const message = sanitizeErrorMessage(body, response.status);
    throw new MentoriaApiError(message, {
      status: response.status,
      body,
      url,
    });
  }

  return body;
}

/**
 * Convenience aliases
 */
export const api = requestJson;

export const http = {
  get: (url, query = {}, options = {}) => requestJson(`${url}${buildQuery(query)}`, { method: 'GET', ...options }),
  post: (url, body, options = {}) => requestJson(url, {
    method: 'POST',
    body: isFormData(body) ? body : JSON.stringify(body),
    ...options
  }),
  put: (url, body, options = {}) => requestJson(url, {
    method: 'PUT',
    body: isFormData(body) ? body : JSON.stringify(body),
    ...options
  }),
  patch: (url, body, options = {}) => requestJson(url, {
    method: 'PATCH',
    body: isFormData(body) ? body : JSON.stringify(body),
    ...options
  }),
  delete: (url, options = {}) => requestJson(url, { method: 'DELETE', ...options }),
};

/**
 * Helper to unwrap standardized responses `{ data, meta, message }`.
 */
export function unwrap(response) {
  if (response && typeof response === 'object' && response.data !== undefined) {
    return response.data;
  }
  return response;
}

