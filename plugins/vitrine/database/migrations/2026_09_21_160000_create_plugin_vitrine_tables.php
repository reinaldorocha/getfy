<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('plugin_vitrine_settings')) {
            Schema::create('plugin_vitrine_settings', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->default(1)->index();
                $table->text('heroBannerUrl')->nullable();
                $table->string('heroBannerType', 50)->default('image');
                $table->text('logoUrl')->nullable();
                $table->text('headerTitle')->nullable();
                $table->text('adminTitle')->nullable();
                $table->text('adminSubtitle')->nullable();
                $table->text('footerText')->nullable();
                $table->string('globalWhatsapp', 50)->nullable();
                $table->text('whatsappMessage')->nullable();
                $table->text('siteName')->nullable();
                $table->text('heroTitle')->nullable();
                $table->text('heroSubtitle')->nullable();
                $table->string('heroBadge', 255)->nullable();
                $table->text('seoTitle')->nullable();
                $table->text('seoDescription')->nullable();
                $table->text('faviconUrl')->nullable();
                $table->text('aboutTitle')->nullable();
                $table->longText('aboutText')->nullable();
                $table->text('aboutImageUrl')->nullable();
                $table->text('catalogSubtitle')->nullable();
                $table->text('approvalsTitle')->nullable();
                $table->text('approvalsSubtitle')->nullable();
                $table->string('primaryColor', 50)->default('#ff00ff');
                $table->string('approvalsBadge', 255)->nullable()->default('Resultados Reais');
                $table->text('faqTitle')->nullable();
                $table->text('faqSubtitle')->nullable();
                $table->text('heroImageUrl')->nullable();
                $table->string('heroButtonText', 255)->nullable();
                $table->string('bgColor', 50)->nullable();
                $table->string('cardBgColor', 50)->nullable();
                $table->string('titleColor', 50)->nullable();
                $table->string('subtitleColor', 50)->nullable();
                $table->string('titleFontSize', 50)->default('normal');
                $table->string('sectionTitleFontSize', 50)->default('normal');
                $table->string('buttonStyle', 50)->default('pill');
                $table->string('priceLabel', 255)->nullable();
                $table->boolean('is_maintenance')->default(false);
                $table->string('maintenance_title')->nullable();
                $table->text('maintenance_message')->nullable();
                $table->json('excluded_products')->nullable();
                $table->json('payment_gateways')->nullable();
                $table->boolean('approvals_autoplay')->default(true);
                $table->integer('approvals_speed')->default(4);
                $table->timestamps();
            });
        } else {
            Schema::table('plugin_vitrine_settings', function (Blueprint $table) {
                if (! Schema::hasColumn('plugin_vitrine_settings', 'is_maintenance')) {
                    $table->boolean('is_maintenance')->default(false);
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'maintenance_title')) {
                    $table->string('maintenance_title')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'maintenance_message')) {
                    $table->text('maintenance_message')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'excluded_products')) {
                    $table->json('excluded_products')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'payment_gateways')) {
                    $table->json('payment_gateways')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'whatsappMessage')) {
                    $table->text('whatsappMessage')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'approvals_autoplay')) {
                    $table->boolean('approvals_autoplay')->default(true);
                }
                if (! Schema::hasColumn('plugin_vitrine_settings', 'approvals_speed')) {
                    $table->integer('approvals_speed')->default(4);
                }
            });

            try {
                \Illuminate\Support\Facades\DB::statement('ALTER TABLE plugin_vitrine_settings MODIFY approvalsBadge VARCHAR(255) NULL DEFAULT "Resultados Reais"');
            } catch (\Throwable) {}
        }

        if (! Schema::hasTable('plugin_vitrine_products')) {
            Schema::create('plugin_vitrine_products', function (Blueprint $table) {
                $table->string('id', 255)->primary();
                $table->string('getfy_product_id', 255)->nullable()->index();
                $table->unsignedBigInteger('tenant_id')->default(1)->index();
                $table->string('title', 255);
                $table->text('description')->nullable();
                $table->longText('longDescription')->nullable();
                $table->string('originalPrice', 50)->nullable();
                $table->string('promoPrice', 50);
                $table->string('category', 255);
                $table->string('badge', 255)->nullable();
                $table->text('imageUrl');
                $table->string('imageOrientation', 50)->default('square');
                $table->string('buttonText', 255)->default('QUERO COMEÇAR AGORA');
                $table->text('buttonLink')->nullable();
                $table->string('iconName', 255)->default('ShoppingCart');
                $table->string('priceLabel', 255)->nullable();
                $table->boolean('is_active')->default(true);
                $table->integer('order_position')->default(0);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('plugin_vitrine_categories')) {
            Schema::create('plugin_vitrine_categories', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->default(1)->index();
                $table->string('name', 255);
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('plugin_vitrine_approvals')) {
            Schema::create('plugin_vitrine_approvals', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->default(1)->index();
                $table->text('imageUrl')->nullable();
                $table->string('media_type', 50)->default('image');
                $table->text('video_url')->nullable();
                $table->string('title', 255)->nullable();
                $table->integer('order_position')->default(0);
                $table->timestamps();
            });
        } else {
            Schema::table('plugin_vitrine_approvals', function (Blueprint $table) {
                if (! Schema::hasColumn('plugin_vitrine_approvals', 'media_type')) {
                    $table->string('media_type', 50)->default('image');
                }
                if (! Schema::hasColumn('plugin_vitrine_approvals', 'video_url')) {
                    $table->text('video_url')->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_approvals', 'title')) {
                    $table->string('title', 255)->nullable();
                }
                if (! Schema::hasColumn('plugin_vitrine_approvals', 'order_position')) {
                    $table->integer('order_position')->default(0);
                }
            });
            try {
                \Illuminate\Support\Facades\DB::statement('ALTER TABLE plugin_vitrine_approvals MODIFY imageUrl TEXT NULL');
            } catch (\Throwable) {}
        }

        if (! Schema::hasTable('plugin_vitrine_faqs')) {
            Schema::create('plugin_vitrine_faqs', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->default(1)->index();
                $table->text('question');
                $table->text('answer');
                $table->integer('order_position')->default(0);
                $table->timestamps();
            });
        } else {
            Schema::table('plugin_vitrine_faqs', function (Blueprint $table) {
                if (! Schema::hasColumn('plugin_vitrine_faqs', 'order_position')) {
                    $table->integer('order_position')->default(0);
                }
            });
        }

        if (! Schema::hasTable('plugin_vitrine_orders')) {
            Schema::create('plugin_vitrine_orders', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('tenant_id')->default(1)->index();
                $table->unsignedBigInteger('getfy_order_id')->nullable()->index();
                $table->string('customer_name', 255)->nullable();
                $table->string('customer_email', 255);
                $table->string('customer_phone', 50)->nullable();
                $table->string('customer_cpf', 50)->nullable();
                $table->decimal('total_amount', 10, 2);
                $table->string('payment_method', 50)->default('pix');
                $table->string('status', 50)->default('pending');
                $table->json('items')->nullable();
                $table->text('pix_code')->nullable();
                $table->text('pix_qrcode')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('plugin_vitrine_orders');
        Schema::dropIfExists('plugin_vitrine_faqs');
        Schema::dropIfExists('plugin_vitrine_approvals');
        Schema::dropIfExists('plugin_vitrine_categories');
        Schema::dropIfExists('plugin_vitrine_products');
        Schema::dropIfExists('plugin_vitrine_settings');
    }
};
