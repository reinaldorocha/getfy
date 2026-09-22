<?php

namespace Plugins\Vitrine\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

class VitrineApproval extends Model
{
    protected $table = 'plugin_vitrine_approvals';

    protected $guarded = ['id'];

    protected $appends = ['display_thumbnail', 'is_video', 'video_embed_url'];

    public static function ensureSchema(): void
    {
        try {
            if (Schema::hasTable('plugin_vitrine_approvals')) {
                if (! Schema::hasColumn('plugin_vitrine_approvals', 'media_type')) {
                    Schema::table('plugin_vitrine_approvals', function (\Illuminate\Database\Schema\Blueprint $table) {
                        $table->string('media_type', 50)->default('image');
                        $table->text('video_url')->nullable();
                        $table->string('title', 255)->nullable();
                        $table->integer('order_position')->default(0);
                    });
                }
            }
            if (Schema::hasTable('plugin_vitrine_faqs')) {
                if (! Schema::hasColumn('plugin_vitrine_faqs', 'order_position')) {
                    Schema::table('plugin_vitrine_faqs', function (\Illuminate\Database\Schema\Blueprint $table) {
                        $table->integer('order_position')->default(0);
                    });
                }
            }
        } catch (\Throwable) {}
    }

    public static function extractYoutubeId(?string $url): ?string
    {
        if (! $url) {
            return null;
        }

        if (preg_match('/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|live\/|watch\?.+&v=))([\w-]{11})/', $url, $matches)) {
            return $matches[1];
        }

        return null;
    }

    public static function extractVimeoId(?string $url): ?string
    {
        if (! $url) {
            return null;
        }

        if (preg_match('/vimeo\.com\/(?:video\/)?([0-9]+)/', $url, $matches)) {
            return $matches[1];
        }

        return null;
    }

    public function getIsVideoAttribute(): bool
    {
        return ($this->media_type === 'video' || ! empty($this->video_url));
    }

    public function getDisplayThumbnailAttribute(): string
    {
        if (! empty($this->imageUrl)) {
            return $this->imageUrl;
        }

        if ($this->video_url) {
            $ytId = static::extractYoutubeId($this->video_url);
            if ($ytId) {
                return "https://img.youtube.com/vi/{$ytId}/hqdefault.jpg";
            }
        }

        return 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400';
    }

    public function getVideoEmbedUrlAttribute(): ?string
    {
        if (! $this->video_url) {
            return null;
        }

        $ytId = static::extractYoutubeId($this->video_url);
        if ($ytId) {
            return "https://www.youtube.com/embed/{$ytId}?autoplay=1&rel=0";
        }

        $vimeoId = static::extractVimeoId($this->video_url);
        if ($vimeoId) {
            return "https://player.vimeo.com/video/{$vimeoId}?autoplay=1";
        }

        return $this->video_url;
    }
}
