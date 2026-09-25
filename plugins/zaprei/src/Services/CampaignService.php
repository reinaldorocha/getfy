<?php

namespace Plugins\Zaprei\Services;

use Illuminate\Support\Carbon;
use Plugins\Zaprei\Jobs\SendCampaignMessageJob;
use Plugins\Zaprei\Models\Campaign;
use Plugins\Zaprei\Models\CampaignSend;
use Plugins\Zaprei\Models\Contact;

/**
 * Criação e cancelamento de campanhas em massa.
 */
final class CampaignService
{
    private const MIN_THROTTLE_SECONDS = 3;

    private const MAX_THROTTLE_SECONDS = 30;

    private const DEFAULT_THROTTLE_SECONDS = 8;

    public function __construct(private readonly ContactRepository $contacts) {}

    /**
     * @param  array{name: string, message_data: array<string, mixed>, contact_ids: list<int>, throttle_seconds?: int|null, scheduled_at?: string|null}  $data
     */
    public function create(int $tenantId, array $data): Campaign
    {
        // Garante que a base (compradores sincronizados) está em dia antes de resolver os ids escolhidos no assistente.
        $this->contacts->all($tenantId);

        $recipients = Contact::forTenant($tenantId)
            ->whereIn('id', array_map('intval', (array) ($data['contact_ids'] ?? [])))
            ->get();

        $scheduledAt = $this->scheduledAt($data['scheduled_at'] ?? null);
        $throttle = max(self::MIN_THROTTLE_SECONDS, min(self::MAX_THROTTLE_SECONDS, (int) ($data['throttle_seconds'] ?? self::DEFAULT_THROTTLE_SECONDS)));
        $flowId = !empty($data['flow_id']) ? (int) $data['flow_id'] : null;
        $messageData = (array) ($data['message_data'] ?? ['mode' => 'text', 'text' => '']);

        $summary = $flowId
            ? 'Fluxo: ' . (\Plugins\Zaprei\Models\Flow::forTenant($tenantId)->find($flowId)?->name ?? "Fluxo #{$flowId}")
            : $this->summarize($messageData);

        $campaign = Campaign::create([
            'tenant_id' => $tenantId,
            'name' => $data['name'],
            'flow_id' => $flowId,
            'message' => $summary,
            'message_data' => $messageData,
            'audience_filter' => ['contact_ids' => $recipients->pluck('id')->all(), 'throttle_seconds' => $throttle],
            'status' => $scheduledAt === null ? Campaign::STATUS_PROCESSING : Campaign::STATUS_SCHEDULED,
            'scheduled_at' => $scheduledAt,
            'total_recipients' => $recipients->count(),
        ]);

        $startAt = $scheduledAt ?? Carbon::now();
        foreach ($recipients->values() as $index => $contact) {
            $send = CampaignSend::create([
                'tenant_id' => $tenantId,
                'campaign_id' => $campaign->id,
                'phone' => $contact->phone,
                'name' => $contact->name,
                'email' => $contact->email,
                'status' => CampaignSend::STATUS_PENDING,
            ]);

            SendCampaignMessageJob::dispatch($tenantId, (int) $send->id)
                ->delay($startAt->copy()->addSeconds($index * $throttle));
        }

        return $campaign;
    }

    /**
     * Cancela a campanha e marca os envios ainda pendentes; os jobs em fila
     * conferem o status antes de disparar.
     */
    public function cancel(Campaign $campaign): Campaign
    {
        $campaign->update(['status' => Campaign::STATUS_CANCELLED]);

        CampaignSend::forTenant((int) $campaign->tenant_id)
            ->where('campaign_id', $campaign->id)
            ->where('status', CampaignSend::STATUS_PENDING)
            ->update(['status' => CampaignSend::STATUS_CANCELLED]);

        return $campaign->refresh();
    }

    private function scheduledAt(?string $value): ?Carbon
    {
        if ($value === null || trim($value) === '') {
            return null;
        }

        $date = Carbon::parse($value);

        return $date->isFuture() ? $date : null;
    }

    /**
     * Resumo em texto do bloco de mensagem, só para exibição (listagens,
     * relatórios) — o envio de verdade usa message_data via MessageDispatcher.
     *
     * @param  array<string, mixed>  $data
     */
    private function summarize(array $data): string
    {
        $text = trim((string) ($data['text'] ?? $data['caption'] ?? $data['title'] ?? $data['question'] ?? ''));

        return $text !== '' ? $text : '['.mb_strtoupper((string) ($data['mode'] ?? 'mensagem')).']';
    }
}
