import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

/**
 * Bundle de UI do ZapRei.
 *
 * `vue` é externo: o Getfy publica um import map com escopo /plugins/, então o
 * bundle compartilha a mesma instância de Vue do painel (resources/views/app.blade.php).
 * Tailwind roda isolado aqui: o CSS gerado só contém as classes usadas neste
 * bundle, sem conflitar com o build do core.
 */
export default defineConfig({
    plugins: [vue(), tailwindcss()],
    build: {
        outDir: '../dist',
        emptyOutDir: false,
        cssCodeSplit: false,
        minify: 'esbuild',
        target: 'es2020',
        lib: {
            entry: 'src/main.js',
            formats: ['es'],
            fileName: () => 'plugin-ui.js',
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                assetFileNames: 'plugin-ui.[ext]',
            },
        },
    },
});
