import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
    firstPagarmeCardErrorField,
    validatePagarmeCard,
} from '../../resources/js/lib/pagarmeCardValidation.js';

const checkoutForm = readFileSync(
    new URL('../../resources/js/components/checkout/CheckoutForm.vue', import.meta.url),
    'utf8',
);

test('reports each missing Pagar.me card field independently', () => {
    const errors = validatePagarmeCard({
        holderName: '',
        number: '4111111111111111',
        expMonth: '',
        expYear: '',
        cvv: '',
    });

    assert.equal(errors.holderName, 'Informe o nome como está impresso no cartão.');
    assert.equal(errors.expiry, 'Informe uma validade futura.');
    assert.equal(errors.cvv, 'Informe o código de segurança do cartão.');
    assert.equal(firstPagarmeCardErrorField(errors), 'holderName');
});

test('rejects invalid number and expired Pagar.me card before tokenization', () => {
    const errors = validatePagarmeCard({
        holderName: 'Maria da Silva',
        number: '4111111111111112',
        expMonth: '01',
        expYear: '20',
        cvv: '123',
    }, new Date(2026, 7, 1));

    assert.equal(errors.number, 'Informe um número de cartão válido.');
    assert.equal(errors.expiry, 'Informe uma validade futura.');
    assert.equal(firstPagarmeCardErrorField(errors), 'number');
});

test('accepts a complete future Pagar.me card', () => {
    const errors = validatePagarmeCard({
        holderName: 'Maria da Silva',
        number: '4111111111111111',
        expMonth: '12',
        expYear: '2030',
        cvv: '123',
    }, new Date(2026, 7, 1));

    assert.deepEqual(errors, {});
});

test('Pagar.me template keeps expiry and CVV visible in dedicated fields', () => {
    const pagarmeStart = checkoutForm.indexOf('<!-- Pagar.me:');
    const pagarmeEnd = checkoutForm.indexOf('<!-- Efí:', pagarmeStart);
    const pagarmeSection = checkoutForm.slice(pagarmeStart, pagarmeEnd);

    assert.match(pagarmeSection, /data-checkout="pagarme-card-details"/);
    assert.match(pagarmeSection, /data-checkout="pagarme-expiry"/);
    assert.match(pagarmeSection, /data-checkout="pagarme-cvv"/);
    assert.match(pagarmeSection, /data-checkout="pagarme-card-number-error"/);
    assert.match(pagarmeSection, /data-checkout="pagarme-expiry-error"/);
    assert.match(pagarmeSection, /data-checkout="pagarme-cvv-error"/);
    assert.match(pagarmeSection, /id="card-exp-year-pagarme"[\s\S]*?placeholder="AA"/);
    assert.doesNotMatch(pagarmeSection, /v-if="!cardNumberComplete \|\| showFullCardNumber"/);
    assert.doesNotMatch(pagarmeSection, /class="w-9/);
    assert.doesNotMatch(pagarmeSection, /class="w-11/);
    assert.match(pagarmeSection, /v-model="pagarmeHolderName"/);
    assert.doesNotMatch(checkoutForm, /cardHolderName\.value = form\.name\.trim\(\)/);
});
