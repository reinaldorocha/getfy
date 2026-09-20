<?php

namespace Plugins\Zaprei;

/**
 * Constantes compartilhadas do plugin.
 *
 * O ZapRei fala exclusivamente com a Evolution GO API (evo-go); não há
 * seleção de provedor em nenhuma camada.
 */
final class Zaprei
{
    public const SLUG = 'zaprei';

    /** Provedor único — persistido junto da conexão para compatibilidade de leitura. */
    public const PROVIDER = 'evolution-go';

    /** Disco de armazenamento das mídias enviadas pelo painel. */
    public const MEDIA_DISK = 'public';

    /** Teto de nós percorridos em uma execução de fluxo (proteção contra ciclos). */
    public const MAX_FLOW_STEPS = 100;

    public static function mediaDirectory(int $tenantId): string
    {
        return self::SLUG.'/'.$tenantId;
    }

    public static function capability(string $capability): string
    {
        return 'plugin:'.self::SLUG.':'.$capability;
    }
}
