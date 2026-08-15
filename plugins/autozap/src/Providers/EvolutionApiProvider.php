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
        $key = trim((string) ($this->credentials['apikey'] ?? $this->credentials['api_key'] ?? $this->credentials['token'] ?? ''));
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

    private function client(int $timeout = 10, int $connectTimeout = 4)
    {
        $key = $this->apiKey();
        return Http::withoutVerifying()
            ->timeout($timeout)
            ->connectTimeout($connectTimeout)
            ->withHeaders([
                'apikey' => $key,
                'token' => $key,
                'Authorization' => 'Bearer ' . $key,
                'Content-Type' => 'application/json',
            ]);
    }

    /**
     * Normalize destination phone number for Evolution API / Evo-Go.
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

        // 1. Tentar endpoint da Evolution API Node (v1 / v2)
        $endpoints = [
            $this->baseUrl() . '/instance/status', // Evo-Go (WhatsApp-Go)
            $this->baseUrl() . '/instance/connectionState/' . rawurlencode($instanceName), // Evolution Node v1/v2
            $this->baseUrl() . '/instance/info/' . rawurlencode($instanceName),
            $this->baseUrl() . '/instance/connect/' . rawurlencode($instanceName),
        ];

        $lastError = '';
        $lastStatus = 0;
        $lastBody = '';

        foreach ($endpoints as $url) {
            try {
                $res = $this->client(5, 3)->get($url);
                $lastStatus = $res->status();
                $lastBody = $res->body();

                if ($res->successful()) {
                    $json = $res->json();
                    
                    // Tratamento para Evo-Go (data: {Connected: true, LoggedIn: true})
                    if (isset($json['data']['Connected'])) {
                        if (!$json['data']['Connected']) {
                            throw new \RuntimeException("Evolution Go: A instância \"{$instanceName}\" está desconectada no WhatsApp. Escaneie o QR Code.");
                        }
                        return;
                    }

                    // Tratamento para Evolution Node (instance: {state: 'open'})
                    $state = strtolower((string) ($json['instance']['state'] ?? $json['state'] ?? $json['connectionStatus'] ?? 'open'));
                    if ($state === 'close' || $state === 'connecting') {
                        throw new \RuntimeException("Evolution API: A instância \"{$instanceName}\" existe, mas está desconectada (status: {$state}). Escaneie o QR Code.");
                    }
                    return;
                }

                if ($res->status() === 401 || $res->status() === 403) {
                    throw new \RuntimeException('Evolution API: Chave de API (apikey / Token) inválida ou não autorizada (HTTP ' . $res->status() . '). Verifique o Token da Instância.');
                }
            } catch (\RuntimeException $e) {
                throw $e;
            } catch (\Throwable $e) {
                $lastError = $e->getMessage();
            }
        }

        $detail = $lastBody ? " Resposta do servidor: " . substr($lastBody, 0, 150) : ($lastError ? " Detalhe: {$lastError}" : "");
        throw new \RuntimeException("Evolution API: Falha ao validar instância \"{$instanceName}\" (HTTP {$lastStatus}).{$detail}");
    }

    public function sendText(string $toE164OrDigits, string $text, array $payload = []): array
    {
        $number = $this->formatNumber($toE164OrDigits);

        // 1. Tentar rota padrão da Evolution Node (/message/sendText/{instance})
        $urlNode = $this->baseUrl() . '/message/sendText/' . rawurlencode($this->instance());
        $bodyNode = [
            'number' => $number,
            'text' => $text,
            'linkPreview' => true,
            'delay' => 1200,
        ];

        $res = $this->client()->post($urlNode, $bodyNode);
        if ($res->successful()) {
            return (array) ($res->json() ?? []);
        }

        // 2. Se deu 404, tentar rota do Evolution Go (/send/text)
        if ($res->status() === 404) {
            $urlGo = $this->baseUrl() . '/send/text';
            $bodyGo = [
                'number' => $number,
                'text' => $text,
            ];
            $resGo = $this->client()->post($urlGo, $bodyGo);
            if ($resGo->successful()) {
                return (array) ($resGo->json() ?? []);
            }
            $err = $resGo->json('error') ?: $resGo->json('message') ?: ('HTTP ' . $resGo->status());
            throw new \RuntimeException('Evolution API: erro ao enviar mensagem (' . $err . ').');
        }

        $err = $res->json('message') ?: $res->json('error') ?: ('HTTP ' . $res->status());
        throw new \RuntimeException('Evolution API: erro ao enviar mensagem (' . $err . ').');
    }

    public function sendMedia(string $toE164OrDigits, string $caption, string $mediaUrl, string $mimeType, array $payload = [], ?string $fileName = null): array
    {
        $number = $this->formatNumber($toE164OrDigits);
        $urlNode = $this->baseUrl() . '/message/sendMedia/' . rawurlencode($this->instance());
        
        $mediaType = 'document';
        if (str_starts_with($mimeType, 'image/')) {
            $mediaType = 'image';
        } elseif (str_starts_with($mimeType, 'video/')) {
            $mediaType = 'video';
        } elseif (str_starts_with($mimeType, 'audio/')) {
            $mediaType = 'audio';
        }

        $bodyNode = [
            'number' => $number,
            'mediatype' => $mediaType,
            'mimetype' => $mimeType,
            'caption' => $caption,
            'media' => $mediaUrl,
            'delay' => 1200,
        ];
        if ($fileName) {
            $bodyNode['fileName'] = $fileName;
        }

        $res = $this->client()->post($urlNode, $bodyNode);
        if ($res->successful()) {
            return (array) ($res->json() ?? []);
        }

        // Fallback Evo-Go
        if ($res->status() === 404) {
            $urlGo = $this->baseUrl() . '/send/media';
            $bodyGo = [
                'number' => $number,
                'url' => $mediaUrl,
                'caption' => $caption,
            ];
            $resGo = $this->client()->post($urlGo, $bodyGo);
            if ($resGo->successful()) {
                return (array) ($resGo->json() ?? []);
            }
            $err = $resGo->json('error') ?: $resGo->json('message') ?: ('HTTP ' . $resGo->status());
            throw new \RuntimeException('Evolution API: erro ao enviar mídia (' . $err . ').');
        }

        $err = $res->json('message') ?: $res->json('error') ?: ('HTTP ' . $res->status());
        throw new \RuntimeException('Evolution API: erro ao enviar mídia (' . $err . ').');
    }

    public function sendAudio(string $toE164OrDigits, string $audioUrl, bool $isPtt = true, array $payload = []): array
    {
        $number = $this->formatNumber($toE164OrDigits);

        if ($isPtt) {
            $urlNode = $this->baseUrl() . '/message/sendWhatsAppAudio/' . rawurlencode($this->instance());
            $bodyNode = [
                'number' => $number,
                'audio' => $audioUrl,
                'delay' => 1200,
                'encoding' => true,
            ];
            $res = $this->client()->post($urlNode, $bodyNode);
            if ($res->successful()) {
                return (array) ($res->json() ?? []);
            }
        }

        return $this->sendMedia($toE164OrDigits, '', $audioUrl, 'audio/mp3', $payload);
    }

    public function sendButtons(string $toE164OrDigits, string $title, string $description, array $buttons, string $footer = '', array $payload = []): array
    {
        $number = $this->formatNumber($toE164OrDigits);
        $urlNode = $this->baseUrl() . '/message/sendButtons/' . rawurlencode($this->instance());
        
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

        $bodyNode = [
            'number' => $number,
            'title' => $title,
            'description' => $description,
            'footer' => $footer,
            'buttons' => $formattedButtons,
            'delay' => 1200,
        ];

        $res = $this->client()->post($urlNode, $bodyNode);
        if ($res->successful()) {
            return (array) ($res->json() ?? []);
        }

        // Fallback Evo-Go button
        if ($res->status() === 404) {
            $urlGo = $this->baseUrl() . '/send/button';
            $bodyGo = [
                'number' => $number,
                'title' => $title,
                'description' => $description,
                'footer' => $footer,
                'buttons' => $formattedButtons,
            ];
            $resGo = $this->client()->post($urlGo, $bodyGo);
            if ($resGo->successful()) {
                return (array) ($resGo->json() ?? []);
            }
        }

        $err = $res->json('message') ?: $res->json('error') ?: ('HTTP ' . $res->status());
        throw new \RuntimeException('Evolution API: erro ao enviar botões (' . $err . ').');
    }

    public function sendList(string $toE164OrDigits, string $title, string $description, string $buttonText, array $sections, string $footer = '', array $payload = []): array
    {
        $url = $this->baseUrl() . '/message/sendList/' . rawurlencode($this->instance());
        
        $body = [
            'number' => $this->formatNumber($toE164OrDigits),
            'title' => $title,
            'description' => $description,
            'buttonText' => $buttonText,
            'footerText' => $footer,
            'sections' => $sections,
            'delay' => 1200,
        ];

        $res = $this->client()->post($url, $body);
        if (! $res->successful()) {
            $err = $res->json('message') ?: ('HTTP ' . $res->status());
            throw new \RuntimeException('Evolution API: erro ao enviar lista (' . $err . ').');
        }
        return (array) ($res->json() ?? []);
    }


    public function sendInteractive(string $toE164OrDigits, array $interactive, array $payload = []): array
    {

        $type = $interactive['type'] ?? 'button';
        if ($type === 'list') {
            return $this->sendList(
                $toE164OrDigits,
                (string) ($interactive['title'] ?? ''),
                (string) ($interactive['description'] ?? ''),
                (string) ($interactive['button_text'] ?? 'Opções'),
                (array) ($interactive['sections'] ?? []),
                (string) ($interactive['footer'] ?? ''),
                $payload
            );
        }

        return $this->sendButtons(
            $toE164OrDigits,
            (string) ($interactive['title'] ?? ''),
            (string) ($interactive['description'] ?? $interactive['body'] ?? ''),
            (array) ($interactive['buttons'] ?? []),
            (string) ($interactive['footer'] ?? ''),
            $payload
        );
    }
}

