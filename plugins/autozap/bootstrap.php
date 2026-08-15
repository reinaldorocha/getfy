<?php

require_once __DIR__ . '/src/AutoZapEventSubscriber.php';
require_once __DIR__ . '/src/Providers/AutoZapProviderInterface.php';
require_once __DIR__ . '/src/Providers/ZApiProvider.php';
require_once __DIR__ . '/src/Providers/EvolutionApiProvider.php';
require_once __DIR__ . '/src/Providers/MenuiaProvider.php';
require_once __DIR__ . '/src/Models/AutoZapConnection.php';
require_once __DIR__ . '/src/Models/AutoZapFlow.php';
require_once __DIR__ . '/src/Models/AutoZapFlowRun.php';
require_once __DIR__ . '/src/Models/AutoZapImportedContact.php';
require_once __DIR__ . '/src/Models/AutoZapCampaign.php';
require_once __DIR__ . '/src/Models/AutoZapCampaignSend.php';
require_once __DIR__ . '/src/Jobs/AutoZapSendCampaignJob.php';
require_once __DIR__ . '/src/Services/AutoZapContactService.php';
require_once __DIR__ . '/src/Services/AutoZapCampaignService.php';
require_once __DIR__ . '/src/Services/AutoZapFlowEngine.php';

return function ($app, \Illuminate\Contracts\Events\Dispatcher $events): void {
    // Register event subscriber when plugin is enabled.
    $events->subscribe(\Plugins\AutoZap\AutoZapEventSubscriber::class);
};


