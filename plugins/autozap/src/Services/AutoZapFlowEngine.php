<?php

namespace Plugins\AutoZap\Services;

use Plugins\AutoZap\Jobs\AutoZapRunFlowJob;
use Plugins\AutoZap\Models\AutoZapConnection;
use Plugins\AutoZap\Models\AutoZapFlow;
use Plugins\AutoZap\Models\AutoZapFlowRun;
use Plugins\AutoZap\Providers\EvolutionApiProvider;
use Plugins\AutoZap\Providers\MenuiaProvider;
use Plugins\AutoZap\Providers\ZApiProvider;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

require_once __DIR__ . '/../Jobs/AutoZapRunFlowJob.php';
require_once __DIR__ . '/../Models/AutoZapConnection.php';
require_once __DIR__ . '/../Models/AutoZapFlow.php';
require_once __DIR__ . '/../Models/AutoZapFlowRun.php';
require_once __DIR__ . '/../Providers/ZApiProvider.php';
require_once __DIR__ . '/../Providers/EvolutionApiProvider.php';
require_once __DIR__ . '/../Providers/MenuiaProvider.php';
require_once __DIR__ . '/AutoZapPayload.php';
require_once __DIR__ . '/AutoZapTemplate.php';

class AutoZapFlowEngine
{
    /**
     * Execute a flow graph starting from Trigger (or an explicit node).
     *
     * Graph format (MVP):
     * - graph_json.nodes: [{ id, type, data }]
     * - graph_json.edges: [{ from, to, data?: { condition?: 'true'|'false' } }]
     *
     * @param  array{tenant_id:?int, run_id:int, entity_refs:array<string,mixed>, start_node_id?:?string}  $context
     */
    public function run(AutoZapFlow $flow, object $event, array $context): void
    {
        $tenantId = $context['tenant_id'] ?? null;
        $runId = (int) ($context['run_id'] ?? 0);
        $startNodeId = $context['start_node_id'] ?? null;

        $graph = is_array($flow->graph_json) ? $flow->graph_json : [];
        $nodes = is_array($graph['nodes'] ?? null) ? $graph['nodes'] : [];
        $edges = is_array($graph['edges'] ?? null) ? $graph['edges'] : [];

        $nodeById = [];
        foreach ($nodes as $n) {
            if (is_array($n) && isset($n['id'])) {
                $nodeById[(string) $n['id']] = $n;
            }
        }

        $nextByFrom = [];
        foreach ($edges as $e) {
            if (! is_array($e)) continue;
            $from = (string) ($e['from'] ?? '');
            $to = (string) ($e['to'] ?? '');
            if ($from === '' || $to === '') continue;
            $nextByFrom[$from] = $nextByFrom[$from] ?? [];
            $nextByFrom[$from][] = $e;
        }

        $triggerId = null;
        if ($startNodeId !== null && $startNodeId !== '' && isset($nodeById[$startNodeId])) {
            $triggerId = $startNodeId;
        } else {
            foreach ($nodeById as $id => $n) {
                if (($n['type'] ?? null) === 'trigger') {
                    $triggerId = $id;
                    break;
                }
            }
        }
        if ($triggerId === null) {
            return;
        }

        $payload = AutoZapPayload::fromEvent($event);

        $conn = AutoZapConnection::forTenant($tenantId)->first();
        if (! $conn || ! $conn->is_active || ! $conn->hasCredentials($conn->provider)) {
            throw new \RuntimeException('AutoZap não está conectado.');
        }
        $cred = $conn->credentialsForProvider($conn->provider);
        $provider = match ($conn->provider) {
            'zapi' => new ZApiProvider($cred),
            'evolution' => new EvolutionApiProvider($cred),
            'menuia' => new MenuiaProvider($cred),
            default => throw new \RuntimeException('Provedor AutoZap inválido.'),
        };

        $currentId = $triggerId;
        $safety = 0;
        while ($currentId && $safety++ < 200) {
            $node = $nodeById[$currentId] ?? null;
            if (! is_array($node)) break;
            $type = (string) ($node['type'] ?? '');
            $data = is_array($node['data'] ?? null) ? $node['data'] : [];

            if ($type === 'trigger') {
                $currentId = $this->pickNext($nextByFrom, $currentId);
                continue;
            }
            if ($type === 'end') {
                AutoZapFlowRun::where('id', $runId)->update(['status' => 'completed', 'last_error' => null]);
                return;
            }
            if ($type === 'condition') {
                $result = $this->evalCondition($data, $payload, $event);
                $currentId = $this->pickNext($nextByFrom, $currentId, $result ? 'true' : 'false');
                continue;
            }
            if ($type === 'delay') {
                $seconds = (int) ($data['seconds'] ?? 0);
                $seconds = max(0, min(86400, $seconds));
                $next = $this->pickNext($nextByFrom, $currentId);
                if ($next === null) {
                    AutoZapFlowRun::where('id', $runId)->update(['status' => 'completed', 'last_error' => null]);
                    return;
                }
                AutoZapFlowRun::where('id', $runId)->update(['status' => 'delayed']);
                AutoZapRunFlowJob::dispatch($tenantId, (int) $flow->id, $event::class, $event, $context['entity_refs'] ?? [], $runId, $next)
                    ->delay(now()->addSeconds($seconds));
                return;
            }
            if ($type === 'send_message') {
                $rateKey = 'autozap:rate:' . ($tenantId ?? 'null') . ':' . $flow->id . ':' . now()->format('YmdHi');
                try {
                    $count = Cache::increment($rateKey);
                    if ($count === 1) {
                        Cache::put($rateKey, $count, now()->addMinutes(2));
                    }
                    if ($count > 60) {
                        Log::warning('AutoZap: rate limit reached', ['tenant_id' => $tenantId, 'flow_id' => $flow->id, 'count' => $count]);
                        throw new \RuntimeException('Limite de disparos do AutoZap atingido. Tente novamente em instantes.');
                    }
                } catch (\Throwable) {
                    // If cache is unavailable, do not block execution.
                }

                $recipientType = (string) ($data['recipient_type'] ?? 'customer');
                if ($recipientType === 'custom' || $recipientType === 'custom_number' || $recipientType === 'partner') {
                    $customTarget = (string) ($data['custom_phone'] ?? $data['custom_number'] ?? $data['phone'] ?? '');
                    $customTarget = AutoZapTemplate::render($customTarget, $payload);
                    $to = trim($customTarget);
                    if (! str_contains($to, '@g.us')) {
                        $to = preg_replace('/\D+/', '', $to) ?: '';
                    }
                    if ($to === '') {
                        throw new \RuntimeException('Número de WhatsApp do sócio/personalizado não informado.');
                    }
                } elseif ($recipientType === 'group') {
                    $groupId = (string) ($data['group_id'] ?? $data['custom_phone'] ?? '');
                    $groupId = AutoZapTemplate::render($groupId, $payload);
                    $to = trim($groupId);
                    if ($to === '') {
                        throw new \RuntimeException('ID do Grupo de WhatsApp não informado.');
                    }
                } else {
                    $to = AutoZapPayload::resolvePhone($payload);
                    if ($to === '') {
                        throw new \RuntimeException('Cliente sem telefone para WhatsApp.');
                    }
                }
                $mode = (string) ($data['mode'] ?? 'text');
                $textTpl = (string) ($data['text'] ?? $data['caption'] ?? '');
                $text = AutoZapTemplate::render($textTpl, $payload);
                $mediaUrlRaw = (string) ($data['media_url'] ?? $data['url'] ?? '');
                $mediaUrl = AutoZapTemplate::render($mediaUrlRaw, $payload);
                if ($mediaUrl !== '' && str_starts_with($mediaUrl, '/storage/')) {
                    $mediaUrl = url($mediaUrl);
                }

                if ($mode === 'audio' && $mediaUrl !== '') {
                    $isPtt = (bool) ($data['is_ptt'] ?? true);
                    if (method_exists($provider, 'sendAudio')) {
                        $provider->sendAudio($to, $mediaUrl, $isPtt, $payload);
                    } else {
                        $provider->sendMedia($to, '', $mediaUrl, 'audio/mp3', $payload);
                    }
                } elseif (in_array($mode, ['image', 'video', 'document', 'media'], true) && $mediaUrl !== '') {
                    $mime = (string) ($data['mime_type'] ?? match ($mode) {
                        'image' => 'image/jpeg',
                        'video' => 'video/mp4',
                        'document' => 'application/pdf',
                        default => 'application/octet-stream',
                    });
                    $fileName = (string) ($data['document_name'] ?? $data['file_name'] ?? '');
                    if ($fileName !== '') {
                        $fileName = AutoZapTemplate::render($fileName, $payload);
                    }
                    if (method_exists($provider, 'sendMedia')) {
                        $provider->sendMedia($to, $text, $mediaUrl, $mime, $payload, $fileName ?: null);
                    } else {
                        $provider->sendMedia($to, $text, $mediaUrl, $mime, $payload);
                    }
                } elseif ($mode === 'buttons' || $mode === 'interactive') {
                    $buttonsRaw = (array) ($data['buttons'] ?? $data['interactive']['buttons'] ?? []);
                    $buttons = [];
                    foreach ($buttonsRaw as $b) {
                        $bText = AutoZapTemplate::render((string) ($b['text'] ?? $b['title'] ?? ''), $payload);
                        $bUrl = AutoZapTemplate::render((string) ($b['url'] ?? ''), $payload);
                        $buttons[] = [
                            'type' => (string) ($b['type'] ?? ($bUrl !== '' ? 'url' : 'reply')),
                            'text' => $bText,
                            'url' => $bUrl,
                        ];
                    }
                    $title = AutoZapTemplate::render((string) ($data['title'] ?? ''), $payload);
                    $footer = AutoZapTemplate::render((string) ($data['footer'] ?? ''), $payload);
                    $interactive = [
                        'title' => $title,
                        'text' => $text,
                        'buttons' => $buttons,
                        'footer' => $footer,
                    ];
                    $provider->sendInteractive($to, $interactive, $payload);
                } else {
                    $provider->sendText($to, $text, $payload);
                }

                Log::info('AutoZap: message sent', [
                    'tenant_id' => $tenantId,
                    'flow_id' => $flow->id,
                    'run_id' => $runId,
                    'to' => substr($to, 0, 6) . '***',
                    'mode' => $mode,
                    'event_class' => $event::class,
                ]);

                $currentId = $this->pickNext($nextByFrom, $currentId);
                continue;
            }

            // Unknown node: stop.
            break;
        }

        AutoZapFlowRun::where('id', $runId)->update(['status' => 'completed', 'last_error' => null]);
    }

    /**
     * @param  array<string, array<int, array<string, mixed>>>  $nextByFrom
     */
    private function pickNext(array $nextByFrom, string $fromId, ?string $condition = null): ?string
    {
        $edges = $nextByFrom[$fromId] ?? [];
        if ($edges === []) return null;
        if ($condition !== null) {
            foreach ($edges as $e) {
                $c = $e['data']['condition'] ?? $e['data']['branch'] ?? null;
                if ($c === $condition) {
                    return (string) ($e['to'] ?? '');
                }
            }
        }
        return (string) ($edges[0]['to'] ?? '');
    }

    /**
     * @param  array<string, mixed>  $data
     * @param  array<string, mixed>  $payload
     */
    private function evalCondition(array $data, array $payload, object $event): bool
    {
        $kind = (string) ($data['kind'] ?? 'has_phone');
        if ($kind === 'has_phone') {
            return AutoZapPayload::resolvePhone($payload) !== '';
        }
        if ($kind === 'order_is_paid') {
            $isPaid = $payload['order']['is_paid'] ?? false;
            $status = (string) ($payload['order']['status'] ?? '');
            return (bool) $isPaid || $status === 'completed';
        }
        if ($kind === 'order_status_is') {
            $expected = strtolower((string) ($data['value'] ?? ''));
            $status = strtolower((string) ($payload['order']['status'] ?? ''));
            return $expected !== '' && $status === $expected;
        }
        if ($kind === 'payment_method_is') {
            $expected = strtolower((string) ($data['value'] ?? ''));
            $method = strtolower((string) ($payload['order']['payment_method'] ?? $payload['order']['metadata']['checkout_payment_method'] ?? ''));
            return $expected !== '' && $method === $expected;
        }
        if ($kind === 'event_is') {
            $expected = (string) ($data['value'] ?? '');
            return $expected !== '' && $expected === $event::class;
        }
        if ($kind === 'custom_variable') {
            $var = (string) ($data['variable'] ?? '');
            $expected = (string) ($data['value'] ?? '');
            $op = (string) ($data['operator'] ?? 'equals');
            $val = (string) (AutoZapTemplate::render('{{' . $var . '}}', $payload));
            return match ($op) {
                'equals' => $val === $expected,
                'not_equals' => $val !== $expected,
                'contains' => str_contains($val, $expected),
                'not_empty' => trim($val) !== '',
                default => $val === $expected,
            };
        }
        return false;
    }
}


