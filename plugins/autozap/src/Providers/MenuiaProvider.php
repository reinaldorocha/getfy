<?php

namespace Plugins\AutoZap\Providers;

use Illuminate\Support\Facades\Http;

require_once __DIR__ . '/AutoZapProviderInterface.php';

class MenuiaProvider implements AutoZapProviderInterface
{
    /**
     * @param  array{appkey?: string, authkey?: string, device?: string}  $credentials
     */
    public function __construct(private array $credentials)
    {
    }

    private function appKey(): string
    {
        $k = trim((string) ($this->credentials['appkey'] ?? ''));
        if ($k === '') {
            throw new \RuntimeException('MenuIA: informe a AppKey.');
        }
        return $k;
    }

    private function authKey(): string
    {
        $k = trim((string) ($this->credentials['authkey'] ?? ''));
        if ($k === '') {
            throw new \RuntimeException('MenuIA: informe a AuthKey.');
        }
        return $k;
    }

    private function deviceIdOrName(): string
    {
        $d = trim((string) ($this->credentials['device'] ?? ''));
        if ($d === '') {
            throw new \RuntimeException('MenuIA: informe o ID/Nome do dispositivo.');
        }
        return $d;
    }

    private function apiBaseUrl(): string
    {
        return 'https://chatbot.menuia.com/api';
    }

    private function client()
    {
        return Http::timeout(20)->connectTimeout(5)->asJson();
    }

    public function testConnection(): void
    {
        $url = $this->apiBaseUrl() . '/developer';
        // A doc mostra body JSON, mas também exemplifica uso via querystring em outros endpoints.
        // Para compatibilidade, enviamos authkey tanto no body quanto na query.
        $auth = $this->authKey();
        $res = $this->client()
            ->withQueryParameters(['authkey' => $auth])
            ->post($url, [
                'authkey' => $auth,
                'message' => $this->deviceIdOrName(),
                'checkDispositivo' => true,
            ]);

        if (! $res->successful()) {
            $json = (array) ($res->json() ?? []);
            $msg = (string) ($json['message'] ?? '');
            throw new \RuntimeException('MenuIA: falha ao conectar (HTTP ' . $res->status() . ')' . ($msg !== '' ? (': ' . $msg) : '') . '.');
        }

        $json = (array) ($res->json() ?? []);
        $status = (int) ($json['status'] ?? 0);
        if ($status !== 200) {
            $msg = (string) ($json['message'] ?? 'Falha ao validar dispositivo.');
            throw new \RuntimeException('MenuIA: ' . $msg);
        }

        $connected = $json['dispositivo']['conectado'] ?? null;
        if ($connected === false) {
            throw new \RuntimeException('MenuIA: dispositivo não está conectado.');
        }
    }

    public function sendText(string $toE164OrDigits, string $text, array $payload = []): array
    {
        $url = $this->apiBaseUrl() . '/create-message';
        $res = $this->client()->post($url, [
            'appkey' => $this->appKey(),
            'authkey' => $this->authKey(),
            'to' => $toE164OrDigits,
            'message' => $text,
        ]);

        if (! $res->successful()) {
            throw new \RuntimeException('MenuIA: erro ao enviar mensagem (HTTP ' . $res->status() . ').');
        }
        return (array) ($res->json() ?? []);
    }

    public function sendMedia(string $toE164OrDigits, string $caption, string $mediaUrl, string $mimeType, array $payload = [], ?string $fileName = null): array
    {
        $url = $this->apiBaseUrl() . '/create-message';

        $resolvedFileName = $fileName ?: $this->guessFileName($mediaUrl, $mimeType);
        $format = $this->guessFormat($mediaUrl, $mimeType);

        $res = $this->client()->post($url, [
            'appkey' => $this->appKey(),
            'authkey' => $this->authKey(),
            'to' => $toE164OrDigits,
            'message' => $resolvedFileName, // MenuIA espera o nome do arquivo aqui no envio multimídia
            'descricao' => $caption,
            'file' => $mediaUrl,
            'format' => $format,
        ]);

        if (! $res->successful()) {
            throw new \RuntimeException('MenuIA: erro ao enviar mídia (HTTP ' . $res->status() . ').');
        }
        return (array) ($res->json() ?? []);
    }

    public function sendAudio(string $toE164OrDigits, string $audioUrl, bool $isPtt = true, array $payload = []): array
    {
        return $this->sendMedia($toE164OrDigits, '', $audioUrl, 'audio/mp3', $payload, 'audio.mp3');
    }

    public function sendInteractive(string $toE164OrDigits, array $interactive, array $payload = []): array
    {
        $title = (string) ($interactive['title'] ?? '');
        $text = (string) ($interactive['text'] ?? $interactive['description'] ?? '');
        $buttons = (array) ($interactive['buttons'] ?? []);

        $msg = ($title !== '' ? "*{$title}*\n\n" : '') . $text;
        if (! empty($buttons)) {
            $msg .= "\n\nOpções:";
            foreach ($buttons as $btn) {
                $btnText = is_array($btn) ? ($btn['text'] ?? $btn['title'] ?? '') : (string) $btn;
                $btnUrl = is_array($btn) ? ($btn['url'] ?? '') : '';
                if ($btnUrl !== '') {
                    $msg .= "\n👉 {$btnText}: {$btnUrl}";
                } else {
                    $msg .= "\n👉 {$btnText}";
                }
            }
        }
        return $this->sendText($toE164OrDigits, $msg, $payload);
    }

    private function guessFileName(string $mediaUrl, string $mimeType): string
    {
        $mediaUrl = trim($mediaUrl);
        if ($mediaUrl !== '') {
            $path = parse_url($mediaUrl, PHP_URL_PATH);
            if (is_string($path) && $path !== '') {
                $base = basename($path);
                if ($base !== '' && $base !== '/' && $base !== '.') {
                    return $base;
                }
            }
        }
        $ext = $this->guessFormat($mediaUrl, $mimeType);
        return $ext !== '' ? ('arquivo.' . $ext) : 'arquivo';
    }

    private function guessFormat(string $mediaUrl, string $mimeType): string
    {
        $mimeType = strtolower(trim((string) $mimeType));
        if ($mimeType !== '' && str_contains($mimeType, '/')) {
            $parts = explode('/', $mimeType, 2);
            $sub = trim((string) ($parts[1] ?? ''));
            if ($sub !== '') {
                $sub = explode(';', $sub, 2)[0];
                if ($sub === 'jpeg') return 'jpg';
                if ($sub === 'plain') return 'txt';
                if ($sub === 'octet-stream') {
                    // fallthrough to URL extension
                } else {
                    return $sub;
                }
            }
        }

        $path = parse_url($mediaUrl, PHP_URL_PATH);
        if (is_string($path) && $path !== '') {
            $ext = strtolower((string) pathinfo($path, PATHINFO_EXTENSION));
            if ($ext !== '') return $ext;
        }
        return '';
    }

    /**
     * @return array<int, array{id: string, name: string}>
     */
    public function fetchGroups(): array
    {
        $device = $this->device();
        $appKey = $this->appKey();
        $authKey = $this->authKey();
        if ($device === '' || $appKey === '' || $authKey === '') return [];

        $url = $this->baseUrl() . '/get_groups';
        try {
            $body = [
                'appkey' => $appKey,
                'authkey' => $authKey,
                'device' => $device,
            ];
            $res = Http::asForm()->timeout(15)->connectTimeout(5)->post($url, $body);
            if ($res->successful()) {
                $data = $res->json();
                $items = is_array($data) ? (isset($data['data']) && is_array($data['data']) ? $data['data'] : $data) : [];
                $groups = [];
                foreach ($items as $item) {
                    if (! is_array($item)) continue;
                    $id = (string) ($item['id'] ?? $item['jid'] ?? $item['group_id'] ?? '');
                    $name = (string) ($item['name'] ?? $item['subject'] ?? $id);
                    if ($id !== '') {
                        $groups[] = [
                            'id' => $id,
                            'name' => $name ?: $id,
                        ];
                    }
                }
                return $groups;
            }
        } catch (\Throwable $e) {
            \Log::warning('MenuIA fetchGroups failed: ' . $e->getMessage());
        }
        return [];
    }
}

