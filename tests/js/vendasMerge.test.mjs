import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { parse, compileScript, compileTemplate } from '@vue/compiler-sfc';

for (const filename of [
    'resources/js/Pages/Vendas/Index.vue',
    'resources/js/components/vendas/VendaDetailSidebar.vue',
]) {
    test(`${filename} compiles with both financial displays`, () => {
        const source = fs.readFileSync(filename, 'utf8');
        const { descriptor, errors } = parse(source, { filename });
        assert.deepEqual(errors, []);
        const script = compileScript(descriptor, { id: filename });
        const result = compileTemplate({
            source: descriptor.template.content,
            filename,
            id: filename,
            compilerOptions: { bindingMetadata: script.bindings },
        });
        assert.deepEqual(result.errors, []);
        assert.match(source, /gateway_fee/);
        assert.match(source, /net_profit_amount/);
        if (filename.includes('/Pages/')) {
            assert.ok(script.bindings.vendaDisplayAmount);
            assert.ok(script.bindings.vendaBilledAmount);
            assert.ok(script.bindings.displayNetProfit);
        } else {
            assert.ok(script.bindings.saveManualNetAmount);
            assert.ok(script.bindings.vendaGrossAmount);
        }
    });
}
