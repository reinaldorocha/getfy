<?php

namespace Plugins\AutoZap\Providers;

use Illuminate\Support\Facades\Http;

require_once __DIR__ . '/AutoZapProviderInterface.php';

class EvolutionApiProvider implements AutoZapProviderInterface
{
    /**
     * @param  array{base_url?: string, apikey?: string, instance?: string}  $credentials
     */
    public function __construct(private array $credentials)
    {
    }

    private function baseUrl(): string
    {
        $base = trim((string) ($this->credentials['base_url'] ?? ''));
        if ($base === '') {
            throw new \RuntimeException('Evolution API: informe a base_url.');
        }
        return rtrim($base, '/');
    }

    private function apiKey(): string
    {
        $key = trim((string) ($this->credentials['apikey'] ?? $this->credentials['api_key'] ?? ''));
        if ($key === '') {
            throw new \RuntimeException('Evolution API: informe a apikey.');
        }
        return $key;
    }

    private function instance(): string
    {
        $instance = trim((string) ($this->credentials['instance'] ?? ''));
        if ($instance === '') {
            throw new \RuntimeException('Evolution API: informe a instance.');
        }
        return $instance;
    }

    private function client()
    {
        return Http::withoutVerifying()
            ->timeout(15)
            ->connectTimeout(5)
            ->withHeaders([
                'apikey' => $this->apiKey(),
                'Content-Type' => 'application/json',
            ]);
    }

    /**
     * Normalize destination phone number for Evolution API.
     */
    private function formatNumber(string $number): string
    {
        $trimmed = trim($number);
        if (str_contains($trimmed, '@g.us') || str_contains($trimmed, '@s.whatsapp.net')) {
            return $trimmed;
        }
        $digits = preg_replace('/\D+/', '', $trimmed) ?: '';
        // If BR number without country code (10 or 11 digits, e.g. 11999998888 or 1188887777)
        if (strlen($digits) === 10 || strlen($digits) === 11) {
            $digits = '55' . $digits;
        }
        return $digits;
    }

    public function testConnection(): void
    {
        $instanceName = $this->instance();
        $endpoints = [
            $this->baseUrl() . '/instance/connectionState/' . rawurlencode($instanceName),
            $this->baseUrl() . '/instance/connect/' . rawurlencode($instanceName),
            $this->baseUrl() . '/chat/findStatusMessage/' . rawurlencode($instanceName),
        ];

        $lastError = '';
        $lastStatus = 0;
        $lastBody = '';

        foreach ($endpoints as $url) {
            try {
                $res = $this->client()->get($url);
                $lastStatus = $res->status();
                $lastBody = $res->body();

                if ($res->successful()) {
                    $json = $res->json();
                    $state = strtolower((string) ($json['instance']['state'] ?? $json['state'] ?? $json['connectionStatus'] ?? 'open'));
                    if ($state === 'close' || $state === 'connecting') {
                        throw new \RuntimeException("Evolution API: A instância \"{$instanceName}\" existe, mas está desconectada (status: {$state}). Escaneie o QR Code no painel da Evolution API.");
                    }
                    return;
                }

                if ($res->status() === 401 || $res->status() === 403) {
                    throw new \RuntimeException('Evolution API: Chave de API (apikey / Token) inválida ou não autorizada (HTTP ' . $res->status() . '). Verifique o Token da Instância ou a Global API Key.');
                }
            } catch (\RuntimeException $e) {
                throw $e;
            } catch (\Throwable $e) {
                $lastError = $e->getMessage();
            }
        }

        // Tenta também listar instâncias com GET /instance/fetchInstances
        try {
            $fetchRes = $this->client()->get($this->baseUrl() . '/instance/fetchInstances');
            if ($fetchRes->successful()) {
                $instances = $fetchRes->json();
                $names = [];
                if (is_array($instances)) {
                    foreach ($instances as $inst) {
                        if (isset($inst['name'])) $names[] = $inst['name'];
                        elseif (isset($inst['instance']['instanceName'])) $names[] = $inst['instance']['instanceName'];
                        elseif (isset($inst['instanceName'])) $names[] = $inst['instanceName'];
                    }
                }
                $available = $names ? implode(', ', $names) : 'nenhuma';
                throw new \RuntimeException("Evolution API: Conectou no servidor, mas a instância \"{$instanceName}\" não foi encontrada. Instâncias disponíveis no servidor: [{$available}].");
            }
        } catch (\RuntimeException $e) {
            throw $e;
        } catch (\Throwable) {
            // Segue para a mensagem padrão
        }

        $detail = $lastBody ? " Resposta da Evolution API: " . substr($lastBody, 0, 150) : ($lastError ? " Detalhe: {$lastError}" : "");
        throw new \RuntimeException("Evolution API: Falha ao validar instância \"{$instanceName}\" (HTTP {$lastStatus}).{$detail}");
    }



    public function sendText(string $toE164OrDigits, string $text, array $payload = []): array
    {
        $url = $this->baseUrl() . '/message/sendText/' . rawurlencode($this->instance());
        $body = [
            'number' => $this->formatNumber($toE164OrDigits),
            'text' => $text,
            'linkPreview' => true,
            'delay' => 1200,
        ];

        $res = $this->client()->post($url, $body);
        if (! $res->successful()) {
            $err = $res->json('message') ?: ('HTTP ' . $res->status());
            throw new \RuntimeException('Evolution API: erro ao enviar mensagem (' . $err . ').');
        }
        return (array) ($res->json() ?? []);
    }

    public function sendMedia(string $toE164OrDigits, string $caption, string $mediaUrl, string $mimeType, array $payload = [], ?string $fileName = null): array
    {
        $url = $this->baseUrl() . '/message/sendMedia/' . rawurlencode($this->instance());
        
        $mediaType = 'document';
        if (str_starts_with($mimeType, 'image/')) {
            $mediaType = 'image';
        } elseif (str_starts_with($mimeType, 'video/')) {
            $mediaType = 'video';
        } elseif (str_starts_with($mimeType, 'audio/')) {
            $mediaType = 'audio';
        }

        $body = [
            'number' => $this->formatNumber($toE164OrDigits),
            'mediatype' => $mediaType,
            'mimetype' => $mimeType,
            'caption' => $caption,
            'media' => $mediaUrl,
            'delay' => 1200,
        ];
        if ($fileName) {
            $body['fileName'] = $fileName;
        }

        $res = $this->client()->post($url, $body);
        if (! $res->successful()) {
            $err = $res->json('message') ?: ('HTTP ' . $res->status());
            throw new \RuntimeException('Evolution API: erro ao enviar mídia (' . $err . ').');
        }
        return (array) ($res->json() ?? []);
    }

    public function sendAudio(string $toE164OrDigits, string $audioUrl, bool $isPtt = true, array $payload = []): array
    {
        // Se for gravação simulada (nota de voz WhatsApp / PTT)
        if ($isPtt) {
            $url = $this->baseUrl() . '/message/sendWhatsAppAudio/' . rawurlencode($this->instance());
            $body = [
                'number' => $this->formatNumber($toE164OrDigits),
                'audio' => $audioUrl,
                'delay' => 1200,
                'encoding' => true,
            ];
            $res = $this->client()->post($url, $body);
            if ($res->successful()) {
                return (array) ($res->json() ?? []);
            }
        }

        // Fallback para sendMedia como áudio
        return $this->sendMedia($toE164OrDigits, '', $audioUrl, 'audio/mp3', $payload);
    }

    public function sendButtons(string $toE164OrDigits, string $title, string $description, array $buttons, string $footer = '', array $payload = []): array
    {
        $url = $this->baseUrl() . '/message/sendButtons/' . rawurlencode($this->instance());
        
        $formattedButtons = [];
        foreach ($buttons as $idx => $btn) {
            $btnText = is_array($btn) ? ($btn['text'] ?? $btn['title'] ?? 'Botão ' . ($idx + 1)) : (string) $btn;
            $btnType = is_array($btn) ? ($btn['type'] ?? 'reply') : 'reply';
            $btnUrl = is_array($btn) ? ($btn['url'] ?? '') : '';

            if ($btnType === 'url' && $btnUrl !== '') {
                $formattedButtons[] = [
                    'type' => 'url',
                    'displayText' => $btnText,
                    'url' => $btnUrl,
                ];
            } else {
                $formattedButtons[] = [
                    'type' => 'reply',
                    'displayText' => $btnText,
                    'id' => 'btn_' . ($idx + 1),
                ];
            }
        }

        $body = [
            'number' => $this->formatNumber($toE164OrDigits),
            'title' => $title,
            'description' => $description,
            'footer' => $footer,
            'buttons' => $formattedButtons,
            'delay' => 1200,
        ];

        try {
            $res = $this->client()->post($url, $body);
            if ($res->successful()) {
                return (array) ($res->json() ?? []);
            }
        } catch (\Throwable) {
            // Fallback para texto formatado abaixo
        }

        // Fallback em caso do endpoint de botões não estar disponível
        $fallbackText = ($title !== '' ? "*{$title}*\n\n" : '') . $description;
        if (! empty($buttons)) {
            $fallbackText .= "\n\nOpções:";
            foreach ($buttons as $btn) {
                $btnText = is_array($btn) ? ($btn['text'] ?? $btn['title'] ?? '') : (string) $btn;
                $btnUrl = is_array($btn) ? ($btn['url'] ?? '') : '';
                if ($btnUrl !== '') {
                    $fallbackText .= "\n👉 {$btnText}: {$btnUrl}";
                } else {
                    $fallbackText .= "\n👉 {$btnText}";
                }
            }
        }
        return $this->sendText($toE164OrDigits, $fallbackText, $payload);
    }

    public function sendInteractive(string $toE164OrDigits, array $interactive, array $payload = []): array
    {
        $title = (string) ($interactive['title'] ?? '');
        $text = (string) ($interactive['text'] ?? $interactive['description'] ?? '');
        $buttons = (array) ($interactive['buttons'] ?? []);
        $footer = (string) ($interactive['footer'] ?? '');

        if (! empty($buttons)) {
            return $this->sendButtons($toE164OrDigits, $title, $text, $buttons, $footer, $payload);
        }

        return $this->sendText($toE164OrDigits, $text, $payload);
    }

    /**
     * @return array<int, array{id: string, name: string, participants_count?: int}>
     */
    public function fetchGroups(): array
    {
        $url = $this->baseUrl() . '/group/fetchAllGroups/' . rawurlencode($this->instance()) . '?getParticipants=false';
        try {
            $res = $this->client()->get($url);
            if ($res->successful()) {
                $data = $res->json();
                $items = is_array($data) ? (isset($data['response']) && is_array($data['response']) ? $data['response'] : $data) : [];
                $groups = [];
                foreach ($items as $item) {
                    if (! is_array($item)) continue;
                    $id = (string) ($item['id'] ?? $item['jid'] ?? '');
                    $name = (string) ($item['subject'] ?? $item['name'] ?? $item['title'] ?? $id);
                    if ($id !== '') {
                        $groups[] = [
                            'id' => $id,
                            'name' => $name ?: $id,
                            'participants_count' => count((array) ($item['participants'] ?? [])),
                        ];
                    }
                }
                return $groups;
            }
        } catch (\Throwable $e) {
            \Log::warning('Evolution API fetchGroups failed: ' . $e->getMessage());
        }
        return [];
    }
}
