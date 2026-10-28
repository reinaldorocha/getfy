import assert from 'node:assert/strict';
import test from 'node:test';
import { sendTutorChat } from '../src/modules/tutor-client.js';

test('tutor client sends the active product and returns only the server reply', async () => {
  let captured;
  const reply = await sendTutorChat({
    widget: { enabled: true, productId: 'product-uuid' },
    message: 'Como revisar direito constitucional?',
    request: async (url, options) => {
      captured = { url, options };
      return { conversation_id: 'conversation-uuid', reply: { id: 'reply-1', content: 'Faça questões e revise seus erros.', created_at: '2026-10-16T10:00:00Z' } };
    },
  });

  assert.equal(captured.url, '/api/ai-member/chat');
  assert.equal(captured.options.method, 'POST');
  assert.deepEqual(JSON.parse(captured.options.body), {
    product_id: 'product-uuid',
    message: 'Como revisar direito constitucional?',
  });
  assert.equal(reply.text, 'Faça questões e revise seus erros.');
  assert.equal(reply.conversationId, 'conversation-uuid');
});

test('tutor client refuses to fabricate replies when the product has no AI', async () => {
  await assert.rejects(
    () => sendTutorChat({ widget: { enabled: false }, message: 'Dúvida', request: async () => ({}) }),
    /não está habilitado/i,
  );
});
