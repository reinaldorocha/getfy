<?php

namespace Plugins\AutoZap\Providers;

use Illuminate\Support\Facades\Http;

require_once __DIR__ . '/AutoZapProviderInterface.php';

class ZApiProvider implements AutoZapProviderInterface
{
    /**
     * @param  array{instance_id?: string, token?: string, client_token?: string, base_url?: string}  $credentials
     */
    public function __construct(private array $credentials)
    {
    }

    private function baseUrl(): string
    {
        $base = trim((string) ($this->credentials['base_url'] ?? 'https://api.z-api.io'));
        return rtrim($base, '/');
    }

    private function instanceId(): string
    {
        return trim((string) ($this->credentials['instance_id'] ?? ''));
    }

    private function token(): string
    {
        return trim((string) ($this->credentials['token'] ?? ''));
    }

    private function withSecurityHeader($req)
    {
        $clientToken = trim((string) ($this->credentials['client_token'] ?? ''));
        return $clientToken !== '' ? $req->withHeaders(['Client-Token' => $clientToken]) : $req;
    }

    public function testConnection(): void
    {
        // Minimal check: hit a lightweight endpoint (instance status is documented in Z-API; when not available, fallback to send-text dry-run is not safe).
        $instance = $this->instanceId();
        $token = $this->token();
        if ($instance === '' || $token === '') {
            throw new \RuntimeException('Z-API: informe instance_id e token.');
        }

        $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/status";
        $req = Http::timeout(10)->connectTimeout(5);
        $req = $this->withSecurityHeader($req);
        $res = $req->get($url);

        if (! $res->successful()) {
            throw new \RuntimeException('Z-API: falha ao conectar (HTTP ' . $res->status() . ').');
        }
    }

    public function sendText(string $toE164OrDigits, string $text, array $payload = []): array
    {
        $instance = $this->instanceId();
        $token = $this->token();
        if ($instance === '' || $token === '') {
            throw new \RuntimeException('Z-API: credenciais ausentes.');
        }

        $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/send-text";
        $body = [
            'phone' => $toE164OrDigits,
            'message' => $text,
        ];
        $req = Http::timeout(20)->connectTimeout(5);
        $req = $this->withSecurityHeader($req);
        $res = $req->post($url, $body);

        if (! $res->successful()) {
            throw new \RuntimeException('Z-API: erro ao enviar mensagem (HTTP ' . $res->status() . ').');
        }
        return (array) ($res->json() ?? []);
    }

    public function sendMedia(string $toE164OrDigits, string $caption, string $mediaUrl, string $mimeType, array $payload = [], ?string $fileName = null): array
    {
        $instance = $this->instanceId();
        $token = $this->token();
        if ($instance === '' || $token === '') {
            throw new \RuntimeException('Z-API: credenciais ausentes.');
        }

        $phone = preg_replace('/\D+/', '', $toE164OrDigits) ?: $toE164OrDigits;
        if (strlen($phone) === 10 || strlen($phone) === 11) {
            $phone = '55' . $phone;
        }

        if (str_starts_with($mimeType, 'image/')) {
            $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/send-image";
            $body = [
                'phone' => $phone,
                'image' => $mediaUrl,
                'caption' => $caption,
            ];
        } elseif (str_starts_with($mimeType, 'video/')) {
            $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/send-video";
            $body = [
                'phone' => $phone,
                'video' => $mediaUrl,
                'caption' => $caption,
            ];
        } elseif (str_starts_with($mimeType, 'audio/')) {
            $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/send-audio";
            $body = [
                'phone' => $phone,
                'audio' => $mediaUrl,
            ];
        } else {
            $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/send-document";
            $body = [
                'phone' => $phone,
                'document' => $mediaUrl,
                'fileName' => $fileName ?: 'documento.pdf',
                'caption' => $caption,
            ];
        }

        $req = Http::timeout(25)->connectTimeout(5);
        $req = $this->withSecurityHeader($req);
        $res = $req->post($url, $body);

        if (! $res->successful()) {
            throw new \RuntimeException('Z-API: erro ao enviar mídia (HTTP ' . $res->status() . ').');
        }
        return (array) ($res->json() ?? []);
    }

    public function sendAudio(string $toE164OrDigits, string $audioUrl, bool $isPtt = true, array $payload = []): array
    {
        $instance = $this->instanceId();
        $token = $this->token();
        if ($instance === '' || $token === '') {
            throw new \RuntimeException('Z-API: credenciais ausentes.');
        }

        $phone = preg_replace('/\D+/', '', $toE164OrDigits) ?: $toE164OrDigits;
        if (strlen($phone) === 10 || strlen($phone) === 11) {
            $phone = '55' . $phone;
        }

        $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/send-audio";
        $body = [
            'phone' => $phone,
            'audio' => $audioUrl,
        ];

        $req = Http::timeout(25)->connectTimeout(5);
        $req = $this->withSecurityHeader($req);
        $res = $req->post($url, $body);

        if (! $res->successful()) {
            throw new \RuntimeException('Z-API: erro ao enviar áudio (HTTP ' . $res->status() . ').');
        }
        return (array) ($res->json() ?? []);
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

    /**
     * @return array<int, array{id: string, name: string}>
     */
    public function fetchGroups(): array
    {
        $instance = $this->instanceId();
        $token = $this->token();
        if ($instance === '' || $token === '') return [];

        $url = $this->baseUrl() . "/instances/{$instance}/token/{$token}/chats";
        try {
            $req = Http::timeout(15)->connectTimeout(5);
            $req = $this->withSecurityHeader($req);
            $res = $req->get($url);
            if ($res->successful()) {
                $data = $res->json();
                $items = is_array($data) ? $data : [];
                $groups = [];
                foreach ($items as $item) {
                    if (! is_array($item)) continue;
                    $phone = (string) ($item['phone'] ?? $item['id'] ?? '');
                    $isGroup = (bool) ($item['isGroup'] ?? false) || str_contains($phone, '-group') || str_contains($phone, '@g.us');
                    if ($isGroup && $phone !== '') {
                        $name = (string) ($item['name'] ?? $item['subject'] ?? $phone);
                        $groups[] = [
                            'id' => $phone,
                            'name' => $name ?: $phone,
                        ];
                    }
                }
                return $groups;
            }
        } catch (\Throwable $e) {
            \Log::warning('Z-API fetchGroups failed: ' . $e->getMessage());
        }
        return [];
    }
}

