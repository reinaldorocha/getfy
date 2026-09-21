import assert from 'node:assert/strict';
import test from 'node:test';
import { resolvePluginPageDefinition } from './pluginPageDefinition.js';

test('keeps string page declarations in the producer layout', () => {
    assert.deepEqual(resolvePluginPageDefinition({ Index: 'ExampleIndex' }, 'Index'), {
        exportName: 'ExampleIndex',
        layout: 'producer',
    });
});

test('allows a plugin page to opt into the standalone shell', () => {
    assert.deepEqual(resolvePluginPageDefinition({ Index: { export: 'CjcIndex', layout: 'standalone' } }, 'Index'), {
        exportName: 'CjcIndex',
        layout: 'standalone',
    });
});
