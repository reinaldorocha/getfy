export function displayAlternative(value) {
    return String(value || '')
        .trim()
        .replace(/^\(?[A-Z]\)?\s*[).\-:]\s*/i, '');
}
