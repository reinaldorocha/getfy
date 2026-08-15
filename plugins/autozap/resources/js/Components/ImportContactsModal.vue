<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { UploadCloud, FileText, AlertCircle, CheckCircle2, Loader2, X } from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';

const props = defineProps({
    open: { type: Boolean, default: false },
});

const emit = defineEmits(['close', 'imported']);

const file = ref(null);
const dragging = ref(false);
const importing = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const importStats = ref(null);

function onFileChange(e) {
    const selected = e.target.files?.[0];
    if (selected) {
        file.value = selected;
        errorMessage.value = '';
        successMessage.value = '';
    }
}

function onDrop(e) {
    dragging.value = false;
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) {
        file.value = dropped;
        errorMessage.value = '';
        successMessage.value = '';
    }
}

async function submitImport() {
    if (!file.value) {
        errorMessage.value = 'Selecione um arquivo CSV para importar.';
        return;
    }

    importing.value = true;
    errorMessage.value = '';
    successMessage.value = '';

    const formData = new FormData();
    formData.append('file', file.value);

    try {
        const response = await axios.post('/autozap/contacts/import', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        if (response.data.success) {
            successMessage.value = response.data.message;
            importStats.value = response.data.result;
            file.value = null;
            emit('imported');
        } else {
            errorMessage.value = response.data.message || 'Erro na importação.';
        }
    } catch (e) {
        errorMessage.value = e.response?.data?.message || 'Falha ao importar contatos.';
    } finally {
        importing.value = false;
    }
}

function handleClose() {
    file.value = null;
    errorMessage.value = '';
    successMessage.value = '';
    importStats.value = null;
    emit('close');
}

function downloadExampleCsv() {
    const csvContent = "nome,telefone,email,produtos\nJoão Silva,5511999998888,joao@email.com,Curso PMMA;Mentoria VIP\nMaria Santos,5521988887777,maria@email.com,Ebook Completo\n";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'modelo_importacao_contatos.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<template>
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <!-- Header -->
            <div class="px-6 py-5 border-b border-zinc-800 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <UploadCloud class="w-5 h-5" />
                    </div>
                    <div>
                        <h3 class="font-bold text-white text-base">Importar Contatos Externos</h3>
                        <p class="text-xs text-zinc-400">Adicione listas de contatos e leads via arquivo CSV</p>
                    </div>
                </div>
                <button @click="handleClose" class="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition">
                    <X class="w-5 h-5" />
                </button>
            </div>

            <!-- Body -->
            <div class="p-6 space-y-5">
                <!-- Instructions / Tip -->
                <div class="p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/60 flex items-start gap-3">
                    <AlertCircle class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div class="text-xs text-zinc-300 space-y-1">
                        <p class="font-medium text-white">Importação para tabela de contatos externos</p>
                        <p>Os compradores das suas vendas já são listados automaticamente. Utilize esta importação apenas para contatos adicionais.</p>
                        <button type="button" @click="downloadExampleCsv" class="text-emerald-400 hover:underline font-semibold mt-1 inline-block">
                            Baixar planilha modelo CSV (.csv)
                        </button>
                    </div>
                </div>

                <!-- Dropzone -->
                <div
                    @dragover.prevent="dragging = true"
                    @dragleave.prevent="dragging = false"
                    @drop.prevent="onDrop"
                    :class="[
                        'border-2 border-dashed rounded-xl p-8 text-center transition flex flex-col items-center justify-center cursor-pointer',
                        dragging ? 'border-emerald-500 bg-emerald-500/5' : 'border-zinc-700 hover:border-zinc-600 bg-zinc-800/30'
                    ]"
                    @click="$refs.fileInput.click()"
                >
                    <input
                        ref="fileInput"
                        type="file"
                        accept=".csv,text/csv,application/vnd.ms-excel"
                        class="hidden"
                        @change="onFileChange"
                    />

                    <div v-if="!file" class="space-y-2">
                        <div class="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 mx-auto flex items-center justify-center text-zinc-400">
                            <UploadCloud class="w-6 h-6 text-zinc-400" />
                        </div>
                        <div class="text-sm font-medium text-zinc-200">
                            Clique para selecionar ou arraste o arquivo CSV
                        </div>
                        <p class="text-xs text-zinc-400">Formato aceito: .csv (máximo 10MB)</p>
                    </div>

                    <div v-else class="space-y-1">
                        <FileText class="w-10 h-10 text-emerald-400 mx-auto" />
                        <p class="text-sm font-semibold text-white">{{ file.name }}</p>
                        <p class="text-xs text-zinc-400">{{ (file.size / 1024).toFixed(1) }} KB</p>
                        <button type="button" @click.stop="file = null" class="text-xs text-red-400 hover:underline mt-2">
                            Remover arquivo
                        </button>
                    </div>
                </div>

                <!-- Success State -->
                <div v-if="successMessage" class="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-xs font-medium">
                    <CheckCircle2 class="w-5 h-5 shrink-0" />
                    <span>{{ successMessage }}</span>
                </div>

                <!-- Error State -->
                <div v-if="errorMessage" class="p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-xs font-medium">
                    <AlertCircle class="w-5 h-5 shrink-0" />
                    <span>{{ errorMessage }}</span>
                </div>
            </div>

            <!-- Footer -->
            <div class="px-6 py-4 bg-zinc-950/60 border-t border-zinc-800 flex items-center justify-end gap-3">
                <Button variant="ghost" type="button" @click="handleClose" class="text-zinc-400 hover:text-white">
                    Fechar
                </Button>
                <Button
                    type="button"
                    :disabled="!file || importing"
                    @click="submitImport"
                    class="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-5"
                >
                    <Loader2 v-if="importing" class="w-4 h-4 mr-2 animate-spin" />
                    <UploadCloud v-else class="w-4 h-4 mr-2" />
                    {{ importing ? 'Importando...' : 'Iniciar Importação' }}
                </Button>
            </div>
        </div>
    </div>
</template>
