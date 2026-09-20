<?php

namespace Plugins\Zaprei\Support;

/**
 * Normalização de telefone para o formato aceito pela Evolution GO.
 */
final class PhoneNumber
{
    private const MIN_DIGITS = 10;

    private const BRAZIL_CODE = '55';

    /**
     * Devolve apenas dígitos, com DDI do Brasil quando o número vier local.
     * Retorna null quando não há número utilizável.
     */
    public static function normalize(?string $raw): ?string
    {
        $digits = preg_replace('/\D+/', '', (string) $raw) ?? '';
        if (strlen($digits) < self::MIN_DIGITS) {
            return null;
        }

        // 10 ou 11 dígitos = número brasileiro sem DDI (DDD + assinante).
        if (strlen($digits) <= 11) {
            return self::BRAZIL_CODE.$digits;
        }

        return $digits;
    }
}
