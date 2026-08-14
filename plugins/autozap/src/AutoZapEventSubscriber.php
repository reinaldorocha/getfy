<?php

namespace Plugins\AutoZap;

use Illuminate\Contracts\Events\Dispatcher;
use Plugins\AutoZap\Jobs\AutoZapRunFlowJob;
use Plugins\AutoZap\Models\AutoZapFlow;

require_once __DIR__ . '/Jobs/AutoZapRunFlowJob.php';
require_once __DIR__ . '/Models/AutoZapFlow.php';
require_once __DIR__ . '/AutoZapEventUtils.php';

class AutoZapEventSubscriber
{
    /**
     * @return array<string, string>
     */
    public function subscribe(Dispatcher $events): array
    {
        // MVP: subscribe only to events configured in config/webhook_events.php to reuse existing catalogue.
        // We'll filter flows by trigger_event anyway.
        $eventClasses = array_keys(config('webhook_events.events', []));
        $map = [];
        foreach ($eventClasses as $class) {
            if (class_exists($class)) {
                $map[$class] = 'handleEvent';
            }
        }
        return $map;
    }

    public function handleEvent(object $event): void
    {
        $eventClass = $event::class;

        // Resolve tenant_id + product_id best-effort by inspecting model payload.
        [$tenantId, $productId, $entityRefs] = AutoZapEventUtils::resolveContext($event);
        if ($tenantId === null) {
            return;
        }

        $flows = AutoZapFlow::query()
            ->where('tenant_id', $tenantId)
            ->where('trigger_event', $eventClass)
            ->where('is_active', true)
            ->get();

        $matchingFlows = $flows->filter(function (AutoZapFlow $flow) use ($productId) {
            // If explicit all_products flag is set
            if ($flow->all_products) {
                return true;
            }
            // If array of product_ids is present
            if (! empty($flow->product_ids) && is_array($flow->product_ids)) {
                if ($productId === null || $productId === '') {
                    return true;
                }
                $strIds = array_map('strval', $flow->product_ids);
                return in_array((string) $productId, $strIds, true);
            }
            // Legacy single product_id check
            if (! empty($flow->product_id)) {
                return $productId !== null && (string) $flow->product_id === (string) $productId;
            }
            // If neither product_ids nor product_id is set, it defaults to all products
            return true;
        });

        foreach ($matchingFlows as $flow) {
            AutoZapRunFlowJob::dispatch($tenantId, (int) $flow->id, $eventClass, $event, $entityRefs);
        }
    }
}


