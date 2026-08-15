<?php

namespace Plugins\AutoZap\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Plugins\AutoZap\Models\AutoZapCampaign;
use Plugins\AutoZap\Models\AutoZapCampaignSend;
use Plugins\AutoZap\Models\AutoZapConnection;
use Plugins\AutoZap\Providers\EvolutionApiProvider;
use Plugins\AutoZap\Providers\MenuiaProvider;
use Plugins\AutoZap\Providers\ZApiProvider;

class AutoZapSendCampaignJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct(
        public int $campaignSendId,
        public int $delaySeconds = 0
    ) {}

    public function handle(): void
    {
        $send = AutoZapCampaignSend::find($this->campaignSendId);
        if (!$send || $send->status === 'sent' || $send->status === 'delivered') {
            return;
        }

        $campaign = AutoZapCampaign::find($send->autozap_campaign_id);
        if (!$campaign || in_array($campaign->status, ['paused', 'cancelled'], true)) {
            return;
        }

        // Marcar envio como processando
        $send->update(['status' => 'processing']);

        // Obter conexão WhatsApp
        $connection = AutoZapConnection::find($campaign->autozap_connection_id);
        if (!$connection || !$connection->is_active) {
            $this->recordFailure($send, $campaign, 'Instância de WhatsApp não configurada ou inativa.');
            return;
        }

        $provider = $this->resolveProvider($connection);
        if (!$provider) {
            $this->recordFailure($send, $campaign, 'Provedor de WhatsApp inválido (' . $connection->driver . ').');
            return;
        }

        // Renderizar mensagem com tags dinâmicas
        $renderedMessage = $this->renderMessage($campaign->message, $send);

        try {
            $response = $provider->sendTextMessage(
                $connection,
                $send->phone,
                $renderedMessage
            );

            if (!empty($response['success'])) {
                $send->update([
                    'status' => 'sent',
                    'message_sent' => $renderedMessage,
                    'api_response' => $response,
                    'error_message' => null,
                    'sent_at' => now(),
                ]);

                $campaign->increment('sent_count');
                if ($campaign->pending_count > 0) {
                    $campaign->decrement('pending_count');
                }
            } else {
                $errMsg = $response['error'] ?? 'Erro desconhecido retornado pela API do WhatsApp.';
                $this->recordFailure($send, $campaign, $errMsg, $response);
            }
        } catch (\Throwable $e) {
            $this->recordFailure($send, $campaign, $e->getMessage());
        }

        $this->checkCampaignCompletion($campaign);
    }

    protected function renderMessage(string $template, AutoZapCampaignSend $send): string
    {
        $name = $send->name ?: 'Cliente';
        $firstName = explode(' ', trim($name))[0] ?: $name;
        $email = $send->email ?: '';
        $phone = $send->phone ?: '';
        $productName = $send->product_name ?: 'Produto';

        $search = [
            '{{nome}}',
            '{{name}}',
            '{nome}',
            '{name}',
            '{{primeiro_nome}}',
            '{{first_name}}',
            '{primeiro_nome}',
            '{first_name}',
            '{{email}}',
            '{email}',
            '{{telefone}}',
            '{{phone}}',
            '{telefone}',
            '{phone}',
            '{{produto}}',
            '{{product}}',
            '{produto}',
            '{product}',
        ];

        $replace = [
            $name,
            $name,
            $name,
            $name,
            $firstName,
            $firstName,
            $firstName,
            $firstName,
            $email,
            $email,
            $phone,
            $phone,
            $productName,
            $productName,
            $productName,
            $productName,
        ];

        return str_replace($search, $replace, $template);
    }

    protected function recordFailure(AutoZapCampaignSend $send, AutoZapCampaign $campaign, string $errorMessage, ?array $apiResponse = null): void
    {
        Log::warning('AutoZapSendCampaignJob falhou:', [
            'send_id' => $send->id,
            'campaign_id' => $campaign->id,
            'phone' => $send->phone,
            'error' => $errorMessage,
        ]);

        $send->update([
            'status' => 'error',
            'error_message' => $errorMessage,
            'api_response' => $apiResponse,
        ]);

        $campaign->increment('error_count');
        if ($campaign->pending_count > 0) {
            $campaign->decrement('pending_count');
        }
    }

    protected function checkCampaignCompletion(AutoZapCampaign $campaign): void
    {
        $remainingPending = AutoZapCampaignSend::query()
            ->where('autozap_campaign_id', $campaign->id)
            ->whereIn('status', ['pending', 'processing'])
            ->count();

        if ($remainingPending === 0) {
            $campaign->update([
                'status' => 'completed',
                'completed_at' => now(),
            ]);
        }
    }

    protected function resolveProvider(AutoZapConnection $connection)
    {
        return match ($connection->driver) {
            'evolution' => new EvolutionApiProvider(),
            'zapi' => new ZApiProvider(),
            'menuia' => new MenuiaProvider(),
            default => null,
        };
    }
}
