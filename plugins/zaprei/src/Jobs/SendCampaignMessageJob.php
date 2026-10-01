<?php

namespace Plugins\Zaprei\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Plugins\Zaprei\Models\Campaign;
use Plugins\Zaprei\Models\CampaignSend;
use Plugins\Zaprei\Services\GatewayFactory;
use Plugins\Zaprei\Services\MessageDispatcher;
use Plugins\Zaprei\Services\TemplateRenderer;
use Throwable;

/**
 * Envia a mensagem de campanha para um destinatário e registra o resultado.
 */
final class SendCampaignMessageJob implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public int $tries = 2;

    public int $backoff = 120;

    public function __construct(
        public readonly int $tenantId,
        public readonly int $sendId,
    ) {}

    public function handle(GatewayFactory $gateways, MessageDispatcher $dispatcher, TemplateRenderer $templates): void
    {
        $send = CampaignSend::forTenant($this->tenantId)->find($this->sendId);
        if ($send === null || $send->status !== CampaignSend::STATUS_PENDING) {
            return;
        }

        $campaign = Campaign::forTenant($this->tenantId)->find($send->campaign_id);
        if ($campaign === null || $campaign->isCancelled()) {
            $send->update(['status' => CampaignSend::STATUS_CANCELLED]);

            return;
        }

        $context = [
            'phone' => $send->phone,
            'customer' => ['name' => $send->name ?? '', 'email' => $send->email ?? '', 'phone' => $send->phone],
            'name' => $send->name ?? '',
        ];

        // Não marcamos o envio como falho aqui: deixamos a exceção propagar para
        // que o worker respeite $tries/$backoff. Se todas as tentativas se
        // esgotarem, failed() abaixo registra o resultado definitivo.
        $dispatcher->send($gateways->forTenant($this->tenantId), (array) $campaign->message_data, $context);

        $send->update([
            'status' => CampaignSend::STATUS_SENT,
            'message_sent' => $templates->render($campaign->message, $context),
            'sent_at' => now(),
        ]);
        $campaign->increment('sent_count');
        $this->closeIfFinished($campaign);
    }

    /** Chamado pelo worker quando a última tentativa também falhou. */
    public function failed(?Throwable $exception): void
    {
        $send = CampaignSend::forTenant($this->tenantId)->find($this->sendId);
        if ($send === null || $send->status !== CampaignSend::STATUS_PENDING) {
            return;
        }

        $send->update([
            'status' => CampaignSend::STATUS_FAILED,
            'error_message' => mb_substr($exception?->getMessage() ?? 'Falha desconhecida.', 0, 1000),
        ]);

        $campaign = Campaign::forTenant($this->tenantId)->find($send->campaign_id);
        if ($campaign !== null) {
            $campaign->increment('error_count');
            $this->closeIfFinished($campaign);
        }
    }

    /** Marca a campanha como concluída quando não restam envios pendentes. */
    private function closeIfFinished(Campaign $campaign): void
    {
        $pending = CampaignSend::forTenant((int) $campaign->tenant_id)
            ->where('campaign_id', $campaign->id)
            ->where('status', CampaignSend::STATUS_PENDING)
            ->exists();

        if (! $pending && ! $campaign->isCancelled()) {
            $campaign->update(['status' => Campaign::STATUS_COMPLETED]);
        }
    }
}
