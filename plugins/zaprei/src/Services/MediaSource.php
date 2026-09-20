<?php

namespace Plugins\Zaprei\Services;

/**
 * Mídia pronta para envio: uma URL pública ou o conteúdo em base64.
 */
final class MediaSource
{
    public function __construct(
        /** URL pública ou conteúdo base64, conforme $isInline. */
        public readonly string $content,
        public readonly string $fileName,
        public readonly string $mimeType,
        public readonly bool $isInline,
    ) {}

    /** Categoria esperada pela Evolution GO no campo `type`. */
    public function kind(): string
    {
        return match (true) {
            str_starts_with($this->mimeType, 'audio/') => 'audio',
            str_starts_with($this->mimeType, 'image/') => 'image',
            str_starts_with($this->mimeType, 'video/') => 'video',
            default => 'document',
        };
    }
}
