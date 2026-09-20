<?php

namespace Tests\Feature;

use App\Models\Plugin;
use App\Plugins\PluginRegistry;
use Tests\TestCase;

class PluginSidebarMenuTest extends TestCase
{
    public function test_active_zaprei_is_exposed_in_the_sidebar_menu(): void
    {
        Plugin::query()->create([
            'slug' => 'zaprei',
            'name' => 'ZapRei',
            'version' => '1.0.0',
            'is_enabled' => true,
        ]);

        $item = collect(PluginRegistry::getMenuItems())->firstWhere('name', 'ZapRei');

        $this->assertNotNull($item);
        $this->assertSame('/zaprei', $item['href']);
        $this->assertSame('MessageCircle', $item['icon']);
    }
}
