<?php

namespace Plugins\Zaprei\Services;

use InvalidArgumentException;
use Plugins\Zaprei\Models\Contact;
use Plugins\Zaprei\Support\OrderReader;
use Plugins\Zaprei\Support\PhoneNumber;

/**
 * Base unificada de contatos: compradores sincronizados das vendas + CSV importado.
 */
final class ContactRepository
{
    /** Cabeçalhos aceitos no CSV, em português e inglês. */
    private const COLUMNS = [
        'name' => ['nome', 'name'],
        'email' => ['email', 'e-mail'],
        'phone' => ['telefone', 'celular', 'whatsapp', 'phone'],
        'products' => ['produtos', 'products'],
    ];

    /**
     * @return list<Contact>
     */
    public function all(int $tenantId): array
    {
        $this->syncBuyers($tenantId);

        return Contact::forTenant($tenantId)->orderBy('name')->get()->all();
    }

    /**
     * @param  list<Contact>  $contacts
     * @return list<Contact>
     */
    public function filterBySource(array $contacts, ?string $source): array
    {
        if ($source === null || $source === '' || $source === 'all') {
            return $contacts;
        }

        return array_values(array_filter($contacts, static fn (Contact $c): bool => $c->source === $source));
    }

    /**
     * Importa um CSV e devolve quantos contatos foram gravados.
     *
     * @throws InvalidArgumentException
     */
    public function importCsv(int $tenantId, string $path): int
    {
        $handle = fopen($path, 'r');
        if ($handle === false) {
            throw new InvalidArgumentException('Não foi possível ler o arquivo enviado.');
        }

        try {
            $header = $this->readHeader($handle);
            $imported = 0;

            while (($row = fgetcsv($handle)) !== false) {
                if ($this->importRow($tenantId, $header, $row)) {
                    $imported++;
                }
            }

            return $imported;
        } finally {
            fclose($handle);
        }
    }

    public function deleteImported(int $tenantId, int $contactId): void
    {
        Contact::forTenant($tenantId)
            ->where('source', Contact::SOURCE_IMPORTED)
            ->findOrFail($contactId)
            ->delete();
    }

    /**
     * @param  resource  $handle
     * @return list<string>
     */
    private function readHeader($handle): array
    {
        $header = fgetcsv($handle);
        if ($header === false || $header === [null]) {
            throw new InvalidArgumentException('O arquivo está vazio ou não é um CSV válido.');
        }

        // Excel salva CSV UTF-8 com um BOM no início do arquivo; sem isso, ele
        // gruda no primeiro cabeçalho ("nome" vira "\xEF\xBB\xBFnome") e a
        // coluna nunca é reconhecida.
        if (isset($header[0])) {
            $header[0] = preg_replace('/^\xEF\xBB\xBF/', '', (string) $header[0]);
        }

        return array_map(static fn ($value): string => mb_strtolower(trim((string) $value)), $header);
    }

    /**
     * @param  list<string>  $header
     * @param  list<string|null>  $row
     */
    private function importRow(int $tenantId, array $header, array $row): bool
    {
        $values = array_combine($header, array_pad(array_slice($row, 0, count($header)), count($header), ''));

        $phone = PhoneNumber::normalize($this->column($values, 'phone'));
        if ($phone === null) {
            return false;
        }

        Contact::updateOrCreate(
            ['tenant_id' => $tenantId, 'source' => Contact::SOURCE_IMPORTED, 'source_key' => $phone],
            [
                'name' => $this->column($values, 'name') ?: null,
                'email' => $this->column($values, 'email') ?: null,
                'phone' => $phone,
                'products' => array_values(array_filter(array_map(
                    'trim',
                    preg_split('/[,;|]/', $this->column($values, 'products')) ?: []
                ))),
            ]
        );

        return true;
    }

    /**
     * @param  array<string, string|null>  $values
     */
    private function column(array $values, string $field): string
    {
        foreach (self::COLUMNS[$field] as $alias) {
            $value = trim((string) ($values[$alias] ?? ''));
            if ($value !== '') {
                return $value;
            }
        }

        return '';
    }

    /**
     * Espelha compradores das vendas na tabela de contatos (idempotente).
     */
    private function syncBuyers(int $tenantId): void
    {
        foreach (OrderReader::buyerContacts($tenantId) as $buyer) {
            Contact::updateOrCreate(
                ['tenant_id' => $tenantId, 'source' => $buyer['source'], 'source_key' => $buyer['source_key']],
                $buyer + ['tenant_id' => $tenantId]
            );
        }
    }
}
