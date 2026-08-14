<?php

namespace Plugins\AutoZap\Services;

class AutoZapTemplate
{
    /**
     * Render template with {{path.to.value}}, {{variable_alias}}, and legacy {tag}.
     *
     * @param  array<string, mixed>  $payload
     */
    public static function render(string $template, array $payload): string
    {
        $out = $template;

        // Legacy / Flat aliases for convenience
        $aliases = [
            '{nome_cliente}' => (string) ($payload['customer']['name'] ?? ''),
            '{primeiro_nome}' => (string) ($payload['customer']['first_name'] ?? ''),
            '{email_cliente}' => (string) ($payload['customer']['email'] ?? ''),
            '{telefone_cliente}' => (string) ($payload['customer']['phone'] ?? ''),
            '{link_checkout}' => (string) ($payload['checkout_link'] ?? ''),
            '{link_acesso}' => (string) ($payload['access']['link'] ?? $payload['checkout_link'] ?? ''),
            '{nome_produto}' => (string) ($payload['order']['product']['name'] ?? $payload['subscription']['product']['name'] ?? ''),
            '{valor_pedido}' => (string) ($payload['order']['total_amount_formatted'] ?? ''),
            '{codigo_pix}' => (string) ($payload['pix']['copy_paste'] ?? ''),
            '{pix_copia_cola}' => (string) ($payload['pix']['copy_paste'] ?? ''),
            '{linha_digitavel}' => (string) ($payload['boleto']['barcode'] ?? ''),

            // {{flat_tags}}
            '{{nome_cliente}}' => (string) ($payload['customer']['name'] ?? ''),
            '{{primeiro_nome}}' => (string) ($payload['customer']['first_name'] ?? ''),
            '{{customer_name}}' => (string) ($payload['customer']['name'] ?? ''),
            '{{customer_firstname}}' => (string) ($payload['customer']['first_name'] ?? ''),
            '{{customer_first_name}}' => (string) ($payload['customer']['first_name'] ?? ''),
            '{{customer_email}}' => (string) ($payload['customer']['email'] ?? ''),
            '{{customer_phone}}' => (string) ($payload['customer']['phone'] ?? ''),
            '{{product_name}}' => (string) ($payload['order']['product']['name'] ?? $payload['subscription']['product']['name'] ?? ''),
            '{{order_amount}}' => (string) ($payload['order']['total_amount_formatted'] ?? ''),
            '{{pix_code}}' => (string) ($payload['pix']['copy_paste'] ?? ''),
            '{{pix_copy_paste}}' => (string) ($payload['pix']['copy_paste'] ?? ''),
            '{{pix_qrcode}}' => (string) ($payload['pix']['qrcode'] ?? ''),
            '{{boleto_barcode}}' => (string) ($payload['boleto']['barcode'] ?? ''),
            '{{boleto_url}}' => (string) ($payload['boleto']['pdf_url'] ?? ''),
            '{{access_link}}' => (string) ($payload['access']['link'] ?? $payload['checkout_link'] ?? ''),
            '{{access_email}}' => (string) ($payload['access']['email'] ?? $payload['customer']['email'] ?? ''),
            '{{access_password}}' => (string) ($payload['access']['password'] ?? ''),
        ];
        $out = strtr($out, $aliases);

        // {{a.b.c}} placeholders
        $out = preg_replace_callback('/\\{\\{\\s*([a-zA-Z0-9_\\.]+)\\s*\\}\\}/', function ($m) use ($payload) {
            $path = $m[1] ?? '';
            $val = self::getByPath($payload, $path);
            if (is_array($val) || is_object($val)) return '';
            return $val === null ? '' : (string) $val;
        }, $out) ?? $out;

        return $out;
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    private static function getByPath(array $payload, string $path): mixed
    {
        $cur = $payload;
        foreach (explode('.', $path) as $k) {
            if (is_array($cur) && array_key_exists($k, $cur)) {
                $cur = $cur[$k];
            } else {
                return null;
            }
        }
        return $cur;
    }
}
