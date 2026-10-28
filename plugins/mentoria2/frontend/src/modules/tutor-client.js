/**
 * Adaptador do Tutor IA para o serviço ai-member do Getfy.
 * Mantemos esta borda sem dependência de DOM para que a interface não
 * fabrique respostas locais e possa ser testada isoladamente.
 */
export async function sendTutorChat({ widget, message, request }) {
  const productId = String(widget?.productId || widget?.product_id || '').trim();
  const text = String(message || '').trim();

  if (!widget?.enabled || !productId) {
    throw new Error('O Tutor IA não está habilitado para este produto. Peça ao mentor para configurá-lo.');
  }
  if (!text) {
    throw new Error('Digite uma dúvida para conversar com o Tutor IA.');
  }

  const result = await request('/api/ai-member/chat', {
    method: 'POST',
    body: JSON.stringify({ product_id: productId, message: text }),
  });
  const reply = result?.reply;
  if (!reply || typeof reply.content !== 'string' || !reply.content.trim()) {
    throw new Error('O Tutor IA não retornou uma resposta válida. Tente novamente.');
  }

  return {
    id: reply.id || `tutor-${Date.now()}`,
    text: reply.content.trim(),
    time: reply.created_at || null,
    conversationId: result.conversation_id || null,
  };
}
