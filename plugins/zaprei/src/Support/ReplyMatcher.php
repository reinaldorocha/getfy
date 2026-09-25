<?php

namespace Plugins\Zaprei\Support;

use Illuminate\Support\Str;

/**
 * Utilitário de identificação e validação de respostas do cliente no ZapRei.
 */
final class ReplyMatcher
{
    /**
     * Verifica se a resposta enviada pelo cliente atende ao critério configurado.
     *
     * @param string $actual        Texto enviado pelo cliente
     * @param string $expected      Texto esperado
     * @param string $mode          'exact' ou 'contains' (padrão: 'contains')
     * @param bool   $caseSensitive Se deve diferenciar maiúsculas/minúsculas (padrão: false)
     * @param bool   $ignoreAccents Se deve ignorar acentos como "não" == "nao" (padrão: true)
     */
    public static function matches(
        string $actual,
        string $expected,
        string $mode = 'contains',
        bool $caseSensitive = false,
        bool $ignoreAccents = true
    ): bool {
        $actual = trim($actual);
        $expected = trim($expected);

        if ($expected === '') {
            return true;
        }

        if ($ignoreAccents) {
            $actual = Str::ascii($actual);
            $expected = Str::ascii($expected);
        }

        if (! $caseSensitive) {
            $actual = mb_strtolower($actual, 'UTF-8');
            $expected = mb_strtolower($expected, 'UTF-8');
        }

        if ($mode === 'exact') {
            return $actual === $expected;
        }

        return str_contains($actual, $expected);
    }
}
