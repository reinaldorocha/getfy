<?php

namespace Tests\Unit;

use App\Plugins\PluginExtensionRegistry;
use PHPUnit\Framework\TestCase;

class NativeCheckoutTemplateTest extends TestCase
{
    public function test_native_catalog_exposes_ticto_without_a_plugin_dependency(): void
    {
        $templates = PluginExtensionRegistry::nativeCheckoutBuilderTemplates();
        $ticto = collect($templates)->firstWhere('id', 'ticto');

        $this->assertNotNull($ticto);
        $this->assertSame('ticto', $ticto['core_layout']);
        $this->assertSame('ticto', $ticto['ui_variant']);
        $this->assertNull($ticto['plugin_slug']);

        $resolved = PluginExtensionRegistry::resolveActiveCheckoutTemplate('ticto');

        $this->assertSame('ticto', $resolved['id']);
        $this->assertSame('ticto', $resolved['core_layout']);
        $this->assertSame('ticto', $resolved['ui_variant']);
        $this->assertNull($resolved['plugin_slug']);
        $this->assertNull($resolved['entry']);
    }
}
