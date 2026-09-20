<script setup>
import { computed, onMounted, ref } from 'vue';
import { Download, Loader2, Trash2, Upload, Users } from 'lucide-vue-next';
import MultiSelectDropdown from './MultiSelectDropdown.vue';
import { api } from '../api';

const SAMPLE_CSV_ROWS = [
    ['nome', 'email', 'telefone', 'produtos'],
    ['João Silva', 'joao@exemplo.com', '11999998888', 'Curso de Marketing;Curso de Vendas'],
    ['Maria Souza', 'maria@exemplo.com', '21988887777', 'Mentoria VIP'],
    ['Pedro Santos', 'pedro@exemplo.com', '31977776666', ''],
];

const contacts = ref([]);
const products = ref([]);
const counts = ref({ all: 0, buyers: 0, imported: 0 });
const loading = ref(true);
const error = ref('');
const notice = ref('');
const source = ref('all');
const productFilter = ref([]);
const productFilterMode = ref('or');
const excludeProductFilter = ref([]);
const search = ref('');
const importing = ref(false);

const productOptions = computed(() => products.value.map((product) => ({ value: product.name, label: product.name })));

const filtered = computed(() => {
    const term = search.value.trim().toLowerCase();

    return contacts.value.filter((contact) => {
        if (source.value === 'buyer' && contact.source !== 'buyer') return false;
        if (source.value === 'imported' && contact.source !== 'imported') return false;
        if (productFilter.value.length) {
            const matchesProduct = productFilterMode.value === 'and'
                ? productFilter.value.every((p) => contact.products.includes(p))
                : contact.products.some((p) => productFilter.value.includes(p));
            if (!matchesProduct) return false;
        }
        // "Comprou X e não comprou Y": exclui quem tem qualquer um dos produtos marcados aqui.
        if (excludeProductFilter.value.length && contact.products.some((p) => excludeProductFilter.value.includes(p))) return false;

        return !term || `${contact.name} ${contact.phone} ${contact.email}`.toLowerCase().includes(term);
    });
});

async function load() {
    loading.value = true;
    error.value = '';
    try {
        const [contactsResponse, productsResponse] = await Promise.all([api.contacts(), api.products()]);
        contacts.value = contactsResponse.contacts || [];
        counts.value = contactsResponse.counts || counts.value;
        products.value = productsResponse.products || [];
    } catch (e) {
        error.value = e.message;
    } finally {
        loading.value = false;
    }
}

onMounted(load);

const BOM = String.fromCharCode(0xfeff);

function downloadSample() {
    const csv = SAMPLE_CSV_ROWS.map((row) => row.join(',')).join('\r\n');
    const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'zaprei-modelo-importacao.csv';
    link.click();
    URL.revokeObjectURL(url);
}

async function importCsv(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    importing.value = true;
    error.value = '';
    notice.value = '';
    try {
        const { imported } = await api.importContacts(file);
        notice.value = `${imported} contato(s) importado(s).`;
        await load();
    } catch (e) {
        error.value = e.message;
    } finally {
        importing.value = false;
        event.target.value = '';
    }
}

async function remove(contact) {
    if (!window.confirm(`Remover ${contact.name}?`)) return;

    error.value = '';
    try {
        await api.deleteContact(contact.id);
        await load();
    } catch (e) {
        error.value = e.message;
    }
}
</script>

<template>
    <div class="rounded-3xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xs dark:border-zinc-800 dark:bg-zinc-950 dark:text-white">
        <div class="flex flex-col gap-3 border-b border-zinc-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
            <div>
                <h2 class="text-sm font-black tracking-wider text-zinc-900 uppercase dark:text-white">Base de Contatos</h2>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">Compradores extraídos das vendas + listas importadas por CSV.</p>
            </div>
            <div class="flex items-center gap-2">
                <button type="button" class="flex items-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800" @click="downloadSample">
                    <Download class="h-4 w-4" />
                    <span>Baixar exemplo</span>
                </button>
                <label class="flex cursor-pointer items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700" :class="{ 'opacity-60': importing }">
                    <Upload class="h-4 w-4" />
                    <span>{{ importing ? 'Importando…' : 'Importar CSV' }}</span>
                    <input type="file" accept=".csv,text/csv" hidden :disabled="importing" @change="importCsv">
                </label>
            </div>
        </div>

        <div class="mt-4 grid grid-cols-3 gap-3">
            <div class="rounded-xl border border-zinc-200/80 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div class="text-xl font-bold text-zinc-900 dark:text-white">{{ counts.all }}</div>
                <div class="text-xs text-zinc-500 dark:text-zinc-400">Total de contatos</div>
            </div>
            <div class="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3">
                <div class="text-xl font-bold text-emerald-700 dark:text-emerald-400">{{ counts.buyers }}</div>
                <div class="text-xs text-zinc-500 dark:text-zinc-400">Compradores</div>
            </div>
            <div class="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3">
                <div class="text-xl font-bold text-blue-700 dark:text-blue-400">{{ counts.imported }}</div>
                <div class="text-xs text-zinc-500 dark:text-zinc-400">Importados</div>
            </div>
        </div>

        <div class="mt-4 flex flex-wrap items-end gap-2">
            <div>
                <label class="mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Origem</label>
                <select v-model="source" class="w-48 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-800 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
                    <option value="all">Todas as origens</option>
                    <option value="buyer">Apenas compradores</option>
                    <option value="imported">Apenas importados</option>
                </select>
            </div>
            <div class="w-48">
                <label class="mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Comprou o produto</label>
                <MultiSelectDropdown v-model="productFilter" v-model:mode="productFilterMode" :options="productOptions" placeholder="Todos os produtos" match-mode />
            </div>
            <div class="w-48">
                <label class="mb-1 block text-[11px] font-medium text-zinc-500 dark:text-zinc-400">Exceto quem comprou</label>
                <MultiSelectDropdown v-model="excludeProductFilter" :options="productOptions" placeholder="Nenhuma exclusão" />
            </div>
            <input
                v-model="search"
                type="search"
                placeholder="Buscar por nome, telefone, e-mail..."
                class="w-64 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-900 transition focus:border-emerald-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
            >
            <span class="pb-1.5 text-[11px] text-zinc-500 dark:text-zinc-400">{{ filtered.length }} de {{ contacts.length }} contato(s)</span>
        </div>

        <p class="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            O CSV aceita as colunas <span class="font-mono">nome, email, telefone, produtos</span> (máximo de 10 MB).
        </p>

        <p v-if="error" class="mt-4 rounded-xl bg-rose-500/10 px-3 py-2 text-sm text-rose-600 dark:text-rose-400">{{ error }}</p>
        <p v-else-if="notice" class="mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm text-emerald-700 dark:text-emerald-400">{{ notice }}</p>

        <div v-if="loading" class="py-10 text-center text-zinc-400">
            <Loader2 class="mb-2 inline h-6 w-6 animate-spin text-emerald-500" />
            <p class="text-xs font-medium">Carregando contatos...</p>
        </div>

        <div v-else-if="!filtered.length" class="py-10 text-center">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 dark:bg-zinc-900">
                <Users class="h-6 w-6" />
            </div>
            <h3 class="mt-3 text-sm font-bold text-zinc-900 dark:text-white">Nenhum contato encontrado com esses filtros</h3>
        </div>

        <div v-else class="mt-4 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800">
            <table class="w-full text-left text-xs">
                <thead class="bg-zinc-50 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                    <tr>
                        <th class="px-3 py-2.5">Contato</th>
                        <th class="px-3 py-2.5">Telefone</th>
                        <th class="px-3 py-2.5">E-mail</th>
                        <th class="px-3 py-2.5">Origem</th>
                        <th class="px-3 py-2.5">Produtos</th>
                        <th class="px-3 py-2.5" />
                    </tr>
                </thead>
                <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                    <tr v-for="contact in filtered" :key="contact.id" class="transition hover:bg-zinc-50 dark:hover:bg-zinc-900/40">
                        <td class="px-3 py-2.5 font-medium text-zinc-900 dark:text-white">{{ contact.name }}</td>
                        <td class="px-3 py-2.5 font-mono text-zinc-600 dark:text-zinc-300">{{ contact.phone }}</td>
                        <td class="px-3 py-2.5 text-zinc-500 dark:text-zinc-400">{{ contact.email || '—' }}</td>
                        <td class="px-3 py-2.5">
                            <span
                                class="rounded-full border px-2 py-0.5 text-[10px] font-semibold"
                                :class="contact.source === 'buyer' ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-400'"
                            >
                                {{ contact.origin }}
                            </span>
                        </td>
                        <td class="px-3 py-2.5">
                            <div v-if="contact.products.length" class="flex max-w-[220px] flex-wrap gap-1">
                                <span v-for="name in contact.products.slice(0, 2)" :key="name" class="max-w-[100px] truncate rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300" :title="name">{{ name }}</span>
                                <span v-if="contact.products.length > 2" class="text-[10px] text-zinc-500 dark:text-zinc-400">+{{ contact.products.length - 2 }}</span>
                            </div>
                            <span v-else class="text-zinc-400 dark:text-zinc-500">—</span>
                        </td>
                        <td class="px-3 py-2.5">
                            <button
                                v-if="contact.can_delete"
                                type="button"
                                class="rounded-lg p-1.5 text-zinc-400 transition hover:bg-rose-500/10 hover:text-rose-600"
                                title="Remover"
                                @click="remove(contact)"
                            >
                                <Trash2 class="h-3.5 w-3.5" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
