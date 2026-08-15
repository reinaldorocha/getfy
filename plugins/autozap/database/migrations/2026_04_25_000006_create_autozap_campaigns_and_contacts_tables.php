<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('autozap_imported_contacts')) {
            Schema::create('autozap_imported_contacts', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->string('name')->nullable();
                $table->string('email')->nullable();
                $table->string('phone')->index();
                $table->json('products')->nullable();
                $table->json('tags')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('autozap_campaigns')) {
            Schema::create('autozap_campaigns', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->unsignedBigInteger('autozap_connection_id')->nullable()->index();
                $table->string('name');
                $table->longText('message');
                $table->json('product_ids')->nullable();
                $table->json('audience_filter')->nullable();
                $table->integer('total_recipients')->default(0);
                $table->integer('sent_count')->default(0);
                $table->integer('delivered_count')->default(0);
                $table->integer('error_count')->default(0);
                $table->integer('pending_count')->default(0);
                $table->string('status')->default('draft')->index();
                $table->timestamp('scheduled_at')->nullable();
                $table->timestamp('started_at')->nullable();
                $table->timestamp('completed_at')->nullable();
                $table->timestamps();
            });
        }

        if (!Schema::hasTable('autozap_campaign_sends')) {
            Schema::create('autozap_campaign_sends', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('autozap_campaign_id')->index();
                $table->unsignedBigInteger('tenant_id')->nullable()->index();
                $table->string('recipient_type')->default('buyer')->index();
                $table->unsignedBigInteger('recipient_id')->nullable();
                $table->string('name')->nullable();
                $table->string('email')->nullable();
                $table->string('phone')->index();
                $table->string('product_name')->nullable();
                $table->longText('message_sent')->nullable();
                $table->string('status')->default('pending')->index();
                $table->json('api_response')->nullable();
                $table->text('error_message')->nullable();
                $table->timestamp('sent_at')->nullable();
                $table->timestamp('delivered_at')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('autozap_campaign_sends');
        Schema::dropIfExists('autozap_campaigns');
        Schema::dropIfExists('autozap_imported_contacts');
    }
};
