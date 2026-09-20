<?php

namespace Plugins\Zaprei\Services;

use Stringable;

/**
 * Interpola `{{ caminho.da.variavel }}` com o contexto do evento.
 *
 * Chaves inexistentes viram string vazia — uma mensagem nunca deve vazar o
 * placeholder cru para o cliente final.
 */
final class TemplateRenderer
{
    private const PLACEHOLDER = '/\{\{\s*([a-zA-Z][a-zA-Z0-9_.-]*)\s*\}\}/';

    /**
     * @param  array<string, mixed>  $context
     */
    public function render(string $template, array $context): string
    {
        if (! str_contains($template, '{{')) {
            return $template;
        }

        $rendered = preg_replace_callback(self::PLACEHOLDER, function (array $match) use ($context): string {
            $value = $this->valueAtPath($context, $match[1]);

            return is_scalar($value) || $value instanceof Stringable ? (string) $value : '';
        }, $template);

        return $rendered ?? $template;
    }

    /**
     * Renderiza recursivamente strings dentro de arrays (ex.: botões do editor).
     *
     * @param  array<string, mixed>  $context
     */
    public function renderValue(mixed $value, array $context): mixed
    {
        if (is_string($value)) {
            return $this->render($value, $context);
        }

        if (is_array($value)) {
            foreach ($value as $key => $item) {
                $value[$key] = $this->renderValue($item, $context);
            }
        }

        return $value;
    }

    /**
     * @param  array<string, mixed>  $context
     */
    private function valueAtPath(array $context, string $path): mixed
    {
        $value = $context;
        foreach (explode('.', $path) as $segment) {
            if (is_array($value) && array_key_exists($segment, $value)) {
                $value = $value[$segment];

                continue;
            }

            if (is_object($value) && isset($value->{$segment})) {
                $value = $value->{$segment};

                continue;
            }

            return null;
        }

        return $value;
    }
}
