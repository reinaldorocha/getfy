<?php

namespace Plugins\Zaprei\Exceptions;

use RuntimeException;

/**
 * Erro de domínio do ZapRei, com mensagem já pronta para o painel.
 */
class ZapreiException extends RuntimeException
{
    public static function notConfigured(): self
    {
        return new self('Conecte a Evolution GO em Integrações › ZapRei antes de disparar mensagens.');
    }

    public static function inactive(): self
    {
        return new self('A conexão do ZapRei está desativada.');
    }

    public static function missingCredentials(): self
    {
        return new self('Informe a URL, a API key e o nome da instância da Evolution GO.');
    }

    public static function unauthorized(): self
    {
        return new self('A API key da Evolution GO foi recusada (não autorizada).');
    }

    public static function disconnected(): self
    {
        return new self('A instância existe na Evolution GO, mas não está conectada ao WhatsApp.');
    }

    public static function unreachable(string $detail): self
    {
        return new self('Não foi possível falar com a Evolution GO ('.$detail.').');
    }

    public static function rejected(string $detail): self
    {
        return new self('A Evolution GO recusou o envio ('.$detail.').');
    }
}
