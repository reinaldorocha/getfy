<?php

namespace Plugins\Zaprei\Services;

use Plugins\Zaprei\Exceptions\ZapreiException;

/**
 * Converte a URL escolhida no editor em algo que a Evolution GO consiga buscar.
 *
 * Arquivos servidos pelo próprio Getfy (/storage/...) podem estar atrás de rede
 * privada ou autenticação, então são lidos do disco e enviados em base64.
 * Qualquer outra URL é repassada como está.
 */
final class MediaResolver
{
    private const LOCAL_PREFIX = '/storage/';

    public function __construct(private readonly ?string $storageRoot = null) {}

    /**
     * @throws ZapreiException
     */
    public function resolve(string $url, string $mimeType = ''): MediaSource
    {
        $path = parse_url($url, PHP_URL_PATH);
        $path = is_string($path) ? $path : '';
        $fileName = basename($path) ?: 'media';

        if (! str_starts_with($path, self::LOCAL_PREFIX)) {
            return new MediaSource(
                content: $this->stripDataUri($url),
                fileName: $fileName,
                mimeType: $this->mimeFor($fileName, $mimeType),
                isInline: false,
            );
        }

        $file = $this->localFile(substr($path, strlen(self::LOCAL_PREFIX)));
        $contents = file_get_contents($file);
        if ($contents === false) {
            throw new ZapreiException('Não foi possível ler o arquivo de mídia do ZapRei.');
        }

        return new MediaSource(
            content: base64_encode($contents),
            fileName: basename($file),
            mimeType: $this->mimeFor($file, $mimeType),
            isInline: true,
        );
    }

    /**
     * Resolve o caminho real garantindo que ele não escape da raiz pública.
     *
     * @throws ZapreiException
     */
    private function localFile(string $relativePath): string
    {
        $root = realpath($this->storageRoot ?? storage_path('app/public'));
        $relative = ltrim(rawurldecode($relativePath), '/\\');
        $file = $root === false ? false : realpath($root.DIRECTORY_SEPARATOR.$relative);

        $insideRoot = $root !== false
            && $file !== false
            && str_starts_with(
                strtolower($file),
                rtrim(strtolower($root), '/\\').DIRECTORY_SEPARATOR
            );

        if (! $insideRoot || ! is_file((string) $file)) {
            throw new ZapreiException('Arquivo de mídia do ZapRei não encontrado no armazenamento local.');
        }

        return (string) $file;
    }

    private function stripDataUri(string $value): string
    {
        return preg_replace('#^data:[^;]+;base64,#i', '', $value) ?? $value;
    }

    private function mimeFor(string $file, string $providedMime): string
    {
        if (trim($providedMime) !== '') {
            return trim($providedMime);
        }

        return match (strtolower(pathinfo($file, PATHINFO_EXTENSION))) {
            'mp3' => 'audio/mpeg',
            'ogg', 'opus' => 'audio/ogg',
            'wav' => 'audio/wav',
            'm4a' => 'audio/mp4',
            'jpg', 'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'webp' => 'image/webp',
            'gif' => 'image/gif',
            'mp4' => 'video/mp4',
            'pdf' => 'application/pdf',
            default => $this->detectMime($file),
        };
    }

    private function detectMime(string $file): string
    {
        if (is_file($file) && function_exists('mime_content_type')) {
            $detected = mime_content_type($file);
            if (is_string($detected) && $detected !== '') {
                return $detected;
            }
        }

        return 'application/octet-stream';
    }
}
