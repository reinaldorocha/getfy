<?php

namespace Tests\Unit;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Plugins\AutoZap\Jobs\AutoZapSendCampaignJob;
use Plugins\AutoZap\Models\AutoZapCampaign;
use Plugins\AutoZap\Models\AutoZapCampaignSend;
use Plugins\AutoZap\Models\AutoZapConnection;
use Plugins\AutoZap\Models\AutoZapImportedContact;
use Plugins\AutoZap\Services\AutoZapCampaignService;
use Plugins\AutoZap\Services\AutoZapContactService;
use Tests\TestCase;

class AutoZapCampaignsAndContactsTest extends TestCase
{
    use RefreshDatabase;

    public function test_unified_contacts_aggregates_multiple_products_for_same_buyer(): void
    {
        $user = User::factory()->create(['name' => 'Carlos Silva', 'email' => 'carlos@example.com']);
        $product1 = Product::create([
            'name' => 'Curso de Tráfego',
            'slug' => 'curso-de-trafego',
            'type' => 'course',
            'price' => 197.00,
        ]);
        $product2 = Product::create([
            'name' => 'Mentoria VIP',
            'slug' => 'mentoria-vip',
            'type' => 'course',
            'price' => 997.00,
        ]);

        // 2 pedidos do mesmo comprador com produtos diferentes
        Order::create([
            'user_id' => $user->id,
            'product_id' => $product1->id,
            'phone' => '11999998888',
            'email' => 'carlos@example.com',
            'amount' => 197.00,
            'status' => 'paid',
        ]);

        Order::create([
            'user_id' => $user->id,
            'product_id' => $product2->id,
            'phone' => '5511999998888',
            'email' => 'carlos@example.com',
            'amount' => 997.00,
            'status' => 'paid',
        ]);

        $service = new AutoZapContactService();
        $result = $service->getUnifiedContacts(null, ['origin' => 'buyers']);

        $this->assertEquals(1, $result['total']);
        $contact = $result['data'][0];

        $this->assertEquals('Carlos Silva', $contact['name']);
        $this->assertEquals('Comprador', $contact['origin']);
        $this->assertCount(2, $contact['products']);
        $this->assertEquals(1194.00, $contact['total_spent']);
    }

    public function test_imported_contacts_are_listed_with_origin_and_product_list(): void
    {
        AutoZapImportedContact::create([
            'name' => 'Mariana Souza',
            'email' => 'mariana@example.com',
            'phone' => '21988887777',
            'products' => ['Ebook Básico', 'Planilha Financeira'],
        ]);

        $service = new AutoZapContactService();
        $result = $service->getUnifiedContacts(null, ['origin' => 'imported']);

        $this->assertEquals(1, $result['total']);
        $contact = $result['data'][0];

        $this->assertEquals('Mariana Souza', $contact['name']);
        $this->assertEquals('Importado', $contact['origin']);
        $this->assertCount(2, $contact['products']);
    }

    public function test_csv_import_sanitizes_phones_and_creates_imported_contacts(): void
    {
        $tempFile = tempnam(sys_get_temp_dir(), 'csv_test_');
        file_put_contents($tempFile, "nome,telefone,email,produtos\nLucas Lima,(31) 98765-4321,lucas@example.com,Curso PMMA;Mentoria\n");

        $service = new AutoZapContactService();
        $importResult = $service->importContactsFromFile(null, $tempFile);

        $this->assertEquals(1, $importResult['imported']);
        $this->assertDatabaseHas('autozap_imported_contacts', [
            'name' => 'Lucas Lima',
            'email' => 'lucas@example.com',
            'phone' => '5531987654321',
        ]);

        @unlink($tempFile);
    }

    public function test_campaign_service_creates_campaign_and_sends_queue_records(): void
    {
        Queue::fake();

        $connection = AutoZapConnection::create([
            'provider' => 'evolution',
            'credentials' => ['server_url' => 'https://api.test', 'api_key' => '123', 'instance_name' => 'test'],
            'is_active' => true,
        ]);

        AutoZapImportedContact::create([
            'name' => 'Roberto Rocha',
            'email' => 'roberto@example.com',
            'phone' => '5511977776666',
            'products' => ['Curso PMMA'],
        ]);

        $contactService = new AutoZapContactService();
        $campaignService = new AutoZapCampaignService($contactService);

        $campaign = $campaignService->createAndDispatchCampaign(null, [
            'name' => 'Campanha de Boas-Vindas',
            'message' => 'Olá {{primeiro_nome}}, bem-vindo ao {{produto}}!',
            'autozap_connection_id' => $connection->id,
            'throttle_seconds' => 5,
        ]);

        $this->assertInstanceOf(AutoZapCampaign::class, $campaign);
        $this->assertEquals(1, $campaign->total_recipients);
        $this->assertEquals('processing', $campaign->status);

        $this->assertDatabaseHas('autozap_campaign_sends', [
            'autozap_campaign_id' => $campaign->id,
            'name' => 'Roberto Rocha',
            'phone' => '5511977776666',
            'status' => 'pending',
        ]);

        Queue::assertPushed(AutoZapSendCampaignJob::class, 1);
    }

    public function test_campaign_service_schedules_campaign_for_future_datetime(): void
    {
        Queue::fake();

        $connection = AutoZapConnection::create([
            'provider' => 'evolution',
            'credentials' => ['server_url' => 'https://api.test', 'api_key' => '123', 'instance_name' => 'test'],
            'is_active' => true,
        ]);

        AutoZapImportedContact::create([
            'name' => 'Ana Beatriz',
            'email' => 'ana@example.com',
            'phone' => '5511988887777',
            'products' => ['Curso PMMA'],
        ]);

        $contactService = new AutoZapContactService();
        $campaignService = new AutoZapCampaignService($contactService);

        $futureDate = now()->addDays(2)->format('Y-m-d H:i:s');

        $campaign = $campaignService->createAndDispatchCampaign(null, [
            'name' => 'Campanha Black Friday Agendada',
            'message' => 'Olá {{primeiro_nome}}, sua oferta chegou!',
            'autozap_connection_id' => $connection->id,
            'schedule_mode' => 'scheduled',
            'scheduled_at' => $futureDate,
        ]);

        $this->assertEquals('scheduled', $campaign->status);
        $this->assertNotNull($campaign->scheduled_at);
        $this->assertNull($campaign->started_at);
        $this->assertEquals(1, $campaign->total_recipients);

        Queue::assertPushed(AutoZapSendCampaignJob::class, 1);
    }
}
