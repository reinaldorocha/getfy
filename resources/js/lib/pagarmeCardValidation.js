function digits(value) {
    return String(value || '').replace(/\D/g, '');
}

function isLuhnValid(number) {
    let sum = 0;
    let doubleDigit = false;

    for (let index = number.length - 1; index >= 0; index -= 1) {
        let digit = Number(number[index]);
        if (doubleDigit) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        doubleDigit = !doubleDigit;
    }

    return sum % 10 === 0;
}

function normalizedExpiryYear(value) {
    const valueDigits = digits(value);
    if (valueDigits.length === 2) return 2000 + Number(valueDigits);
    if (valueDigits.length === 4) return Number(valueDigits);
    return null;
}

/**
 * @param {{holderName?: string, number?: string, expMonth?: string, expYear?: string, cvv?: string}} card
 * @param {Date} [now]
 * @returns {Record<'holderName'|'number'|'expiry'|'cvv', string>}
 */
export function validatePagarmeCard(card, now = new Date()) {
    const errors = {};
    const holderName = String(card?.holderName || '').trim();
    const number = digits(card?.number);
    const month = Number(digits(card?.expMonth));
    const year = normalizedExpiryYear(card?.expYear);
    const cvv = digits(card?.cvv);

    if (holderName.length < 3) {
        errors.holderName = 'Informe o nome como está impresso no cartão.';
    }

    if (number.length < 13 || number.length > 19 || !isLuhnValid(number)) {
        errors.number = 'Informe um número de cartão válido.';
    }

    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    if (!Number.isInteger(month) || month < 1 || month > 12 || !year || year < currentYear || (year === currentYear && month < currentMonth)) {
        errors.expiry = 'Informe uma validade futura.';
    }

    if (cvv.length < 3 || cvv.length > 4) {
        errors.cvv = 'Informe o código de segurança do cartão.';
    }

    return errors;
}

/**
 * @param {Record<string, string>} errors
 * @returns {'holderName'|'number'|'expiry'|'cvv'|null}
 */
export function firstPagarmeCardErrorField(errors) {
    return ['holderName', 'number', 'expiry', 'cvv'].find((field) => errors[field]) || null;
}
