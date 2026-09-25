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

    /**
     * Retorna as variações possíveis do número (com e sem o 9º dígito no Brasil).
     *
     * @return list<string>
     */
    public static function candidates(?string $raw): array
    {
        $normalized = self::normalize($raw);
        if ($normalized === null) {
            return [];
        }

        $candidates = [$normalized];

        if (str_starts_with($normalized, self::BRAZIL_CODE)) {
            if (strlen($normalized) === 13 && $normalized[4] === '9') {
                $candidates[] = substr($normalized, 0, 4).substr($normalized, 5);
            } elseif (strlen($normalized) === 12) {
                $candidates[] = substr($normalized, 0, 4).'9'.substr($normalized, 4);
            }
        }

        return array_values(array_unique($candidates));
    }
}
