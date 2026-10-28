import test from 'node:test';
import assert from 'node:assert/strict';
import { escapeHtml, plainTextWithBreaks, escapeRegExp, isSafeHtmlUrl } from '../src/utils/escape-html.js';

test('escapeHtml sanitizes XSS injection vectors like script tags and onerror handlers', () => {
    const malicious = '<script>alert("xss")</script><img src="x" onerror="evil()">&';
    const escaped = escapeHtml(malicious);

    assert.equal(escaped.includes('<script>'), false);
    assert.equal(escaped.includes('</script>'), false);
    assert.equal(escaped.includes('"'), false);
    assert.equal(escaped.includes('&amp;'), true);
    assert.equal(escaped, '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;&lt;img src=&quot;x&quot; onerror=&quot;evil()&quot;&gt;&amp;');
});

test('escapeHtml handles null, undefined and numbers safely', () => {
    assert.equal(escapeHtml(null), '');
    assert.equal(escapeHtml(undefined), '');
    assert.equal(escapeHtml(123), '123');
    assert.equal(escapeHtml(0), '0');
});

test('plainTextWithBreaks escapes HTML while converting line breaks to br tags', () => {
    const multiline = '<b>First Line</b>\nSecond Line\r\nThird Line';
    const result = plainTextWithBreaks(multiline);

    assert.equal(result.includes('<b>'), false);
    assert.equal(result.includes('<br>'), true);
    assert.equal(result, '&lt;b&gt;First Line&lt;/b&gt;<br>Second Line<br>Third Line');
});

test('escapeRegExp escapes special regex characters', () => {
    assert.equal(escapeRegExp('test.question[1]? (yes/no)'), 'test\\.question\\[1\\]\\? \\(yes/no\\)');
});

test('isSafeHtmlUrl rejects executable URL protocols even with whitespace controls', () => {
    assert.equal(isSafeHtmlUrl('javascript:alert(1)'), false);
    assert.equal(isSafeHtmlUrl(' \njava\tscript:alert(1)'), false);
    assert.equal(isSafeHtmlUrl('data:text/html,<script>alert(1)</script>'), false);
    assert.equal(isSafeHtmlUrl('data:image/svg+xml,<svg onload=alert(1)>'), false);
    assert.equal(isSafeHtmlUrl('/mentoria2/flashcard-decks'), true);
    assert.equal(isSafeHtmlUrl('https://getfy.com.br/material'), true);
});

