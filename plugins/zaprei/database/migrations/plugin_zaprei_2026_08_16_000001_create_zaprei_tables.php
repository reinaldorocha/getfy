<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabelas do ZapRei. Todas prefixadas com plugin_zaprei_ e escopadas por tenant.
 *
 * Plugin ainda em desenvolvimento/teste, sem dados reais em produção: o
 * schema inteiro fica numa única migration, editada diretamente quando algo
 * muda, em vez de acumular migrations incrementais.
 */
return new class extends Migration
{
    /** @var list<string> ordem de criação; a remoção usa o inverso. */
    private array $tables = [
        'plugin_zaprei_flows',
        'plugin_zaprei_flow_runs',
        'plugin_zaprei_contacts',
        'plugin_zaprei_campaigns',
        'plugin_zaprei_campaign_sends',
    ];

    public function up(): void
    {
        Schema::create('plugin_zaprei_flows', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->string('name');
            $table->string('trigger_event');
            // Produtos usam UUID (products.id é CHAR(36) desde 2025_02_26_000001_change_products_id_to_uuid).
            // Lista de produtos (checkbox no editor); null = todos os produtos.
            $table->json('product_ids')->nullable();
            $table->json('graph_json');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->index(['tenant_id', 'trigger_event', 'is_active']);
        });

        Schema::create('plugin_zaprei_flow_runs', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->unsignedBigInteger('flow_id')->index();
            $table->string('event_class');
            $table->string('status', 24)->default('running')->index();
            $table->json('context')->nullable();
            // Retomada de blocos "Aguardar": não dependemos de Queue::later()/
            // ->delay(), pois em QUEUE_CONNECTION=sync (comum em hospedagens
            // compartilhadas, sem worker persistente) o Laravel ignora o delay
            // e roda o job na hora. Em vez disso, gravamos quando a execução
            // deve ser retomada e um comando agendado (a cada minuto) busca o
            // que está vencido.
            $table->string('resume_node_id')->nullable();
            $table->timestamp('resume_at')->nullable()->index();
            // Bloco "Aguardar resposta": para onde ir se o cliente responder
            // antes do tempo esgotar (resume_node_id continua sendo o destino
            // do timeout — mesmo mecanismo de retomada agendada acima).
            $table->string('reply_node_id')->nullable();
            $table->text('last_error')->nullable();
            $table->timestamps();
        });

        Schema::create('plugin_zaprei_contacts', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->string('source', 24);
            $table->string('source_key', 128);
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone', 32)->index();
            $table->json('products')->nullable();
            $table->timestamps();
            $table->unique(['tenant_id', 'source', 'source_key']);
        });

        Schema::create('plugin_zaprei_campaigns', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->string('name');
            // Resumo em texto só para leitura (listagens/relatórios).
            $table->longText('message');
            // Payload estruturado do bloco de mensagem (mode, text, buttons,
            // sections, ...) — mesmo formato do editor de fluxo, usado pelo
            // envio real via MessageDispatcher. Suporta os 12 tipos de mensagem.
            $table->json('message_data')->nullable();
            $table->json('audience_filter')->nullable();
            $table->string('status', 24)->default('processing')->index();
            $table->timestamp('scheduled_at')->nullable();
            $table->unsignedInteger('total_recipients')->default(0);
            $table->unsignedInteger('sent_count')->default(0);
            $table->unsignedInteger('error_count')->default(0);
            $table->timestamps();
        });

        Schema::create('plugin_zaprei_campaign_sends', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id')->index();
            $table->unsignedBigInteger('campaign_id')->index();
            $table->string('phone', 32);
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->longText('message_sent')->nullable();
            $table->string('status', 24)->default('pending')->index();
            $table->text('error_message')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        foreach (array_reverse($this->tables) as $table) {
            Schema::dropIfExists($table);
        }
    }
};
