<?php

namespace Plugins\AutoZap\Services;

use Plugins\AutoZap\Jobs\AutoZapSendCampaignJob;
use Plugins\AutoZap\Models\AutoZapCampaign;
use Plugins\AutoZap\Models\AutoZapCampaignSend;

class AutoZapCampaignService
{
    public function __construct(
        protected AutoZapContactService $contactService
    ) {}

    /**
     * Criar e iniciar o disparo de uma nova campanha.
     */
    public function createAndDispatchCampaign(?int $tenantId, array $data): AutoZapCampaign
    {
        $name = trim($data['name'] ?? 'Nova Campanha');
        $message = trim($data['message'] ?? '');
        $connectionId = $data['autozap_connection_id'] ?? null;
        $productIds = $data['product_ids'] ?? [];
        $selectedKeys = $data['selected_contact_keys'] ?? []; // array de chaves selecionadas
        $audienceFilter = $data['audience_filter'] ?? [];
        $throttleSeconds = (int) ($data['throttle_seconds'] ?? 5); // intervalo médio entre disparos (5-15s)

        // 1. Obter os contatos correspondentes aos filtros
        $contactsResult = $this->contactService->getUnifiedContacts($tenantId, [
            'product_ids' => $productIds,
            'origin' => $audienceFilter['origin'] ?? 'all',
            'search' => $audienceFilter['search'] ?? '',
        ]);

        $allContacts = collect($contactsResult['data']);

        // Se houver seleção explícita de chaves, filtrar
        if (!empty($selectedKeys) && is_array($selectedKeys)) {
            $keyMap = array_flip($selectedKeys);
            $selectedContacts = $allContacts->filter(fn ($c) => isset($keyMap[$c['key']]) || isset($keyMap[$c['id']]));
        } else {
            $selectedContacts = $allContacts;
        }

        $totalRecipients = $selectedContacts->count();
        if ($totalRecipients === 0) {
            throw new \InvalidArgumentException('Nenhum destinatário encontrado com os filtros e seleção especificados.');
        }

        // 2. Criar registro da campanha
        $campaign = AutoZapCampaign::create([
            'tenant_id' => $tenantId,
            'autozap_connection_id' => $connectionId,
            'name' => $name,
            'message' => $message,
            'product_ids' => $productIds,
            'audience_filter' => $audienceFilter,
            'total_recipients' => $totalRecipients,
            'pending_count' => $totalRecipients,
            'sent_count' => 0,
            'delivered_count' => 0,
            'error_count' => 0,
            'status' => 'processing',
            'started_at' => now(),
        ]);

        // 3. Criar os registros individuais de envio e enfileirar com delay escalonado
        $currentDelay = 0;

        foreach ($selectedContacts as $contact) {
            $productNames = collect($contact['products'] ?? [])->pluck('name')->filter()->implode(', ');
            $recipientType = ($contact['origin'] ?? '') === 'Importado' ? 'imported' : 'buyer';
            $recipientId = $contact['imported_contact_id'] ?? null;

            $send = AutoZapCampaignSend::create([
                'autozap_campaign_id' => $campaign->id,
                'tenant_id' => $tenantId,
                'recipient_type' => $recipientType,
                'recipient_id' => $recipientId,
                'name' => $contact['name'] ?? null,
                'email' => $contact['email'] ?? null,
                'phone' => $contact['phone'],
                'product_name' => $productNames ?: null,
                'status' => 'pending',
            ]);

            // Enfileirar o job de disparo com delay escalonado (ex: a cada 5 segundos)
            // Se o queue worker não estiver rodando no modo síncrono, dispatchAfterResponse ou delay normal
            if ($currentDelay === 0) {
                AutoZapSendCampaignJob::dispatch($send->id, 0);
            } else {
                AutoZapSendCampaignJob::dispatch($send->id, $currentDelay)->delay(now()->addSeconds($currentDelay));
            }

            // Adiciona variação aleatória de 3 a 8 segundos para evitar padrões fixos de envio
            $currentDelay += max(2, $throttleSeconds + rand(-1, 3));
        }

        return $campaign;
    }

    /**
     * Cancelar disparos pendentes de uma campanha.
     */
    public function cancelCampaign(AutoZapCampaign $campaign): void
    {
        $campaign->update(['status' => 'cancelled']);

        AutoZapCampaignSend::query()
            ->where('autozap_campaign_id', $campaign->id)
            ->where('status', 'pending')
            ->update([
                'status' => 'error',
                'error_message' => 'Disparo cancelado pelo usuário.',
            ]);
    }
}
