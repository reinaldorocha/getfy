<?php

namespace Plugins\Zaprei\Evolution;

use Plugins\Zaprei\Exceptions\ZapreiException;
use Plugins\Zaprei\Services\MediaSource;

/**
 * Monta os corpos aceitos pelos endpoints /send/* da Evolution GO, espelhando
 * os structs documentados no Swagger da instância (TextStruct, MediaStruct,
 * ButtonStruct, ListStruct, LocationStruct, ContactStruct, PollStruct, LinkStruct).
 */
final class EvolutionGoPayload
{
    /** @return array{number: string, text: string} */
    public function text(string $number, string $text): array
    {
        return ['number' => $number, 'text' => $text];
    }

    /** @return array<string, string> */
    public function media(string $number, string $caption, MediaSource $media): array
    {
        return [
            'number' => $number,
            'url' => $media->content,
            'type' => $media->kind(),
            'caption' => $caption,
            'filename' => $media->fileName,
        ];
    }

    /** @return array{number: string, sticker: string} */
    public function sticker(string $number, MediaSource $media): array
    {
        return ['number' => $number, 'sticker' => $media->content];
    }

    /**
     * Botões: tipos reply/copy/url/call/pix, cada um com seus próprios campos
     * (a Evolution GO valida as regras de combinação no servidor).
     *
     * @param  list<array<string, mixed>>  $buttons
     * @return array<string, mixed>
     *
     * @throws ZapreiException quando nenhum botão é utilizável
     */
    public function buttons(string $number, string $title, string $description, string $footer, array $buttons): array
    {
        $normalized = array_values(array_filter(array_map(
            fn ($button): ?array => $this->button(is_array($button) ? $button : []),
            array_values($buttons)
        )));

        if ($normalized === []) {
            throw new ZapreiException('Mensagem de botões sem nenhuma opção válida.');
        }

        return [
            'number' => $number,
            'title' => $title,
            'description' => $description,
            'footer' => $footer,
            'buttons' => $normalized,
        ];
    }

    /**
     * @param  array<string, mixed>  $button
     * @return array<string, mixed>|null
     */
    private function button(array $button): ?array
    {
        $type = strtolower(trim((string) ($button['type'] ?? 'reply')));

        return match ($type) {
            'pix' => $this->pixButton($button),
            'copy' => $this->labelledButton($button, 'copy', 'copyCode', trim((string) ($button['copyCode'] ?? ''))),
            'url' => $this->labelledButton($button, 'url', 'url', trim((string) ($button['url'] ?? ''))),
            'call' => $this->labelledButton($button, 'call', 'phoneNumber', preg_replace('/\D+/', '', (string) ($button['phoneNumber'] ?? $button['phone'] ?? '')) ?? ''),
            default => $this->replyButton($button),
        };
    }

    /**
     * Botões copy/url/call: exigem o rótulo e um único campo extra obrigatório.
     *
     * @param  array<string, mixed>  $button
     * @return array<string, mixed>|null
     */
    private function labelledButton(array $button, string $type, string $extraKey, string $extraValue): ?array
    {
        $label = trim((string) ($button['displayText'] ?? $button['text'] ?? ''));
        if ($label === '' || $extraValue === '') {
            return null;
        }

        return ['type' => $type, 'displayText' => $label, $extraKey => $extraValue];
    }

    /**
     * @param  array<string, mixed>  $button
     * @return array<string, mixed>|null
     */
    private function replyButton(array $button): ?array
    {
        $label = trim((string) ($button['displayText'] ?? $button['text'] ?? ''));
        if ($label === '') {
            return null;
        }

        $id = trim((string) ($button['id'] ?? ''));

        return ['type' => 'reply', 'displayText' => $label, 'id' => $id !== '' ? $id : 'zaprei-'.substr(sha1($label), 0, 8)];
    }

    /**
     * @param  array<string, mixed>  $button
     * @return array<string, mixed>|null
     */
    private function pixButton(array $button): ?array
    {
        $key = trim((string) ($button['key'] ?? ''));
        $keyType = trim((string) ($button['keyType'] ?? ''));
        if ($key === '' || ! in_array($keyType, ['phone', 'email', 'cpf', 'cnpj', 'random'], true)) {
            return null;
        }

        return array_filter([
            'type' => 'pix',
            'key' => $key,
            'keyType' => $keyType,
            'name' => trim((string) ($button['name'] ?? '')) ?: null,
            'currency' => trim((string) ($button['currency'] ?? 'BRL')) ?: 'BRL',
        ], static fn ($v): bool => $v !== null && $v !== '');
    }

    /**
     * @param  list<array<string, mixed>>  $sections
     * @return array<string, mixed>
     *
     * @throws ZapreiException
     */
    public function list(string $number, string $title, string $description, string $footerText, string $buttonText, array $sections): array
    {
        $normalized = [];
        foreach (array_values($sections) as $section) {
            $rows = array_values(array_filter(array_map(
                fn ($row): ?array => $this->row(is_array($row) ? $row : []),
                is_array($section['rows'] ?? null) ? $section['rows'] : []
            )));
            if ($rows === []) {
                continue;
            }
            $normalized[] = array_filter([
                'title' => trim((string) (is_array($section) ? ($section['title'] ?? '') : '')) ?: null,
                'rows' => $rows,
            ], static fn ($v): bool => $v !== null);
        }

        if ($normalized === []) {
            throw new ZapreiException('Mensagem de lista sem nenhuma opção válida.');
        }

        return [
            'number' => $number,
            'title' => $title,
            'description' => $description,
            'footerText' => $footerText,
            'buttonText' => $buttonText !== '' ? $buttonText : 'Ver Menu',
            'sections' => $normalized,
        ];
    }

    /**
     * @param  array<string, mixed>  $row
     * @return array<string, mixed>|null
     */
    private function row(array $row): ?array
    {
        $title = trim((string) ($row['title'] ?? ''));
        if ($title === '') {
            return null;
        }

        return array_filter([
            'title' => $title,
            'description' => trim((string) ($row['description'] ?? '')) ?: null,
            'rowId' => trim((string) ($row['rowId'] ?? '')) ?: null,
        ], static fn ($v): bool => $v !== null);
    }

    /** @return array<string, mixed> */
    public function location(string $number, float $latitude, float $longitude, string $name, string $address): array
    {
        return array_filter([
            'number' => $number,
            'latitude' => $latitude,
            'longitude' => $longitude,
            'name' => $name ?: null,
            'address' => $address ?: null,
        ], static fn ($v): bool => $v !== null);
    }

    /** @return array<string, mixed> */
    public function contact(string $number, string $fullName, string $phone, string $organization): array
    {
        return [
            'number' => $number,
            'vcard' => array_filter([
                'fullName' => $fullName,
                'phone' => $phone,
                'organization' => $organization ?: null,
            ], static fn ($v): bool => $v !== null),
        ];
    }

    /**
     * @param  list<string>  $options
     * @return array<string, mixed>
     *
     * @throws ZapreiException
     */
    public function poll(string $number, string $question, array $options, int $maxAnswers): array
    {
        $normalized = array_values(array_filter(array_map(
            static fn ($option): string => trim((string) $option),
            $options
        )));
        if ($question === '' || count($normalized) < 2) {
            throw new ZapreiException('Enquete precisa de uma pergunta e ao menos 2 opções.');
        }

        return [
            'number' => $number,
            'question' => $question,
            'options' => $normalized,
            'maxAnswer' => max(1, min(count($normalized), $maxAnswers)),
        ];
    }

    /** @return array<string, mixed> */
    public function link(string $number, string $url, string $title, string $description, string $text, string $imageUrl): array
    {
        return array_filter([
            'number' => $number,
            'url' => $url,
            'title' => $title ?: null,
            'description' => $description ?: null,
            'text' => $text ?: null,
            'imgUrl' => $imageUrl ?: null,
        ], static fn ($v): bool => $v !== null);
    }
}
