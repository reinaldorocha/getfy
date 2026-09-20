<script setup>
import { computed } from 'vue';
import { CheckCheck } from 'lucide-vue-next';
import { renderPreview } from '../preview';

const props = defineProps({
    text: { type: String, default: '' },
    recipientName: { type: String, default: 'Cliente' },
    caption: { type: String, default: '' },
    /** '' | image | video | audio | document | buttons */
    mode: { type: String, default: '' },
});

const initial = computed(() => (props.recipientName || 'C').trim().charAt(0).toUpperCase());
const body = computed(() => {
    const value = props.mode && props.mode !== 'text' ? (props.caption || props.text) : props.text;

    return value?.trim() ? renderPreview(value) : 'Sua mensagem aparece aqui…';
});
const attachmentLabel = computed(() => ({
    image: '🖼️ Imagem', video: '🎬 Vídeo', audio: '🎤 Áudio', document: '📄 Documento',
}[props.mode] || ''));
</script>

<template>
    <div class="flex min-h-[220px] flex-col justify-between rounded-2xl border border-zinc-800 bg-[#0b141a] p-4 shadow-xl">
        <div class="flex items-center gap-2.5 border-b border-zinc-800 pb-3">
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                {{ initial }}
            </div>
            <div class="text-xs">
                <div class="font-bold text-white">{{ recipientName || 'Cliente' }}</div>
                <div class="text-[10px] text-emerald-400">online</div>
            </div>
        </div>
        <div class="my-4 flex justify-end">
            <div class="relative max-w-[90%] rounded-2xl rounded-tr-none bg-[#005c4b] px-4 py-2.5 text-xs leading-relaxed whitespace-pre-wrap text-[#e9edef] shadow">
                <span v-if="attachmentLabel" class="mb-1 block rounded-lg bg-white/10 px-2 py-1 text-[11px]">{{ attachmentLabel }}</span>
                {{ body }}
                <div class="mt-1.5 flex items-center justify-end gap-1 text-[9px] text-zinc-300">
                    <span>12:00</span>
                    <CheckCheck class="h-3 w-3 text-sky-400" />
                </div>
            </div>
        </div>
        <p class="text-center text-[10px] text-zinc-500">Exibindo simulação com o primeiro destinatário da lista</p>
    </div>
</template>
