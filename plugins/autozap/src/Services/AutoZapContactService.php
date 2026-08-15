<?php

namespace Plugins\AutoZap\Services;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Collection;
use Plugins\AutoZap\Models\AutoZapImportedContact;

class AutoZapContactService
{
    /**
     * Obter contatos unificados de Compradores (Order) e Importados (AutoZapImportedContact).
     */
    public function getUnifiedContacts(?int $tenantId = null, array $filters = []): array
    {
        $search = trim($filters['search'] ?? '');
        $originFilter = $filters['origin'] ?? 'all'; // 'all', 'buyers', 'imported'
        $productFilter = $filters['product_ids'] ?? []; // array de int/string
        if (!is_array($productFilter)) {
            $productFilter = !empty($productFilter) ? [(string) $productFilter] : [];
        }
        $productFilter = array_map('strval', array_filter($productFilter));

        $contacts = collect();

        // 1. Obter Compradores das tabelas nativas de Orders se a busca incluir 'all' ou 'buyers'
        if ($originFilter === 'all' || $originFilter === 'buyers' || $originFilter === 'Comprador') {
            $buyers = $this->getBuyerContactsFromOrders($tenantId);
            $contacts = $contacts->concat($buyers);
        }

        // 2. Obter Contatos Importados se a busca incluir 'all' ou 'imported'
        if ($originFilter === 'all' || $originFilter === 'imported' || $originFilter === 'Importado') {
            $imported = $this->getImportedContacts($tenantId);
            $contacts = $contacts->concat($imported);
        }

        // 3. Aplicar Filtro de Busca (Nome, Telefone, E-mail)
        if ($search !== '') {
            $term = mb_strtolower($search, 'UTF-8');
            $contacts = $contacts->filter(function ($c) use ($term) {
                $name = mb_strtolower($c['name'] ?? '', 'UTF-8');
                $email = mb_strtolower($c['email'] ?? '', 'UTF-8');
                $phone = preg_replace('/\D+/', '', $c['phone'] ?? '');
                $cleanTerm = preg_replace('/\D+/', '', $term);

                return str_contains($name, $term)
                    || str_contains($email, $term)
                    || ($cleanTerm !== '' && str_contains($phone, $cleanTerm))
                    || str_contains($c['phone'] ?? '', $term);
            });
        }

        // 4. Aplicar Filtro de Produtos
        if (!empty($productFilter)) {
            $contacts = $contacts->filter(function ($c) use ($productFilter) {
                $contactProducts = $c['products'] ?? [];
                foreach ($contactProducts as $prod) {
                    $prodId = (string) ($prod['id'] ?? '');
                    $prodName = mb_strtolower($prod['name'] ?? '', 'UTF-8');

                    if ($prodId !== '' && in_array($prodId, $productFilter, true)) {
                        return true;
                    }

                    foreach ($productFilter as $filterVal) {
                        if (mb_strtolower($filterVal, 'UTF-8') === $prodName) {
                            return true;
                        }
                    }
                }

                return false;
            });
        }

        // Ordenar por nome ou data
        $sorted = $contacts->sortByDesc(fn ($c) => $c['last_activity_at'] ?? $c['created_at'] ?? '')->values();

        return [
            'total' => $sorted->count(),
            'data' => $sorted->all(),
        ];
    }

    /**
     * Consultar compradores diretamente das tabelas de vendas/pedidos (orders).
     */
    protected function getBuyerContactsFromOrders(?int $tenantId = null): Collection
    {
        $query = Order::query()
            ->whereNotNull('phone')
            ->where('phone', '!=', '')
            ->with(['product:id,name', 'user:id,name,email']);

        if ($tenantId) {
            $query->where('tenant_id', $tenantId);
        }

        $orders = $query->orderBy('created_at', 'desc')->get();

        // Agrupar por telefone normalizado
        $grouped = [];

        foreach ($orders as $order) {
            $rawPhone = $order->phone;
            $normalizedPhone = $this->normalizePhone($rawPhone);
            if (empty($normalizedPhone)) {
                continue;
            }

            $customerName = $order->user?->name
                ?? ($order->metadata['customer_name'] ?? null)
                ?? ($order->metadata['name'] ?? null)
                ?? 'Cliente';

            $customerEmail = $order->email ?? $order->user?->email ?? '';

            if (!isset($grouped[$normalizedPhone])) {
                $grouped[$normalizedPhone] = [
                    'id' => 'buyer_' . $normalizedPhone,
                    'key' => 'buyer_' . $normalizedPhone,
                    'name' => $customerName,
                    'email' => $customerEmail,
                    'phone' => $rawPhone,
                    'normalized_phone' => $normalizedPhone,
                    'origin' => 'Comprador',
                    'products' => [],
                    'total_spent' => 0.0,
                    'total_orders' => 0,
                    'last_activity_at' => $order->created_at?->toIso8601String(),
                    'created_at' => $order->created_at?->toIso8601String(),
                ];
            }

            // Atualizar nome/email se o registro atual tiver dados mais completos
            if ($customerName !== 'Cliente' && $grouped[$normalizedPhone]['name'] === 'Cliente') {
                $grouped[$normalizedPhone]['name'] = $customerName;
            }
            if (!empty($customerEmail) && empty($grouped[$normalizedPhone]['email'])) {
                $grouped[$normalizedPhone]['email'] = $customerEmail;
            }

            $grouped[$normalizedPhone]['total_spent'] += (float) ($order->amount ?? 0);
            $grouped[$normalizedPhone]['total_orders'] += 1;

            if ($order->product) {
                $exists = false;
                foreach ($grouped[$normalizedPhone]['products'] as $p) {
                    if ((int) ($p['id'] ?? 0) === (int) $order->product->id) {
                        $exists = true;
                        break;
                    }
                }

                if (!$exists) {
                    $grouped[$normalizedPhone]['products'][] = [
                        'id' => $order->product->id,
                        'name' => $order->product->name,
                        'status' => $order->status,
                        'bought_at' => $order->created_at?->toIso8601String(),
                    ];
                }
            }
        }

        return collect(array_values($grouped));
    }

    /**
     * Consultar contatos da tabela autozap_imported_contacts.
     */
    protected function getImportedContacts(?int $tenantId = null): Collection
    {
        $query = AutoZapImportedContact::query();
        if ($tenantId) {
            $query->where('tenant_id', $tenantId);
        }

        $records = $query->orderBy('created_at', 'desc')->get();

        return $records->map(function (AutoZapImportedContact $contact) {
            $rawProducts = $contact->products ?? [];
            $productsList = [];

            if (is_array($rawProducts)) {
                foreach ($rawProducts as $item) {
                    if (is_string($item)) {
                        $productsList[] = ['id' => null, 'name' => $item, 'status' => 'imported'];
                    } elseif (is_array($item)) {
                        $productsList[] = [
                            'id' => $item['id'] ?? null,
                            'name' => $item['name'] ?? ($item['title'] ?? 'Produto'),
                            'status' => 'imported',
                        ];
                    }
                }
            }

            $normalizedPhone = $this->normalizePhone($contact->phone);

            return [
                'id' => 'imported_' . $contact->id,
                'imported_contact_id' => $contact->id,
                'key' => 'imported_' . $contact->id,
                'name' => $contact->name ?: 'Contato Importado',
                'email' => $contact->email ?: '',
                'phone' => $contact->phone,
                'normalized_phone' => $normalizedPhone,
                'origin' => 'Importado',
                'products' => $productsList,
                'tags' => $contact->tags ?? [],
                'total_spent' => 0.0,
                'total_orders' => 0,
                'last_activity_at' => $contact->updated_at?->toIso8601String() ?? $contact->created_at?->toIso8601String(),
                'created_at' => $contact->created_at?->toIso8601String(),
            ];
        });
    }

    /**
     * Importar contatos a partir de arquivo CSV/XLSX.
     */
    public function importContactsFromFile(?int $tenantId, string $filePath, array $columnMapping = []): array
    {
        if (!file_exists($filePath) || !is_readable($filePath)) {
            throw new \InvalidArgumentException('Arquivo de importação não encontrado ou inacessível.');
        }

        $rows = [];
        $handle = fopen($filePath, 'r');
        if (!$handle) {
            throw new \RuntimeException('Falha ao abrir arquivo para leitura.');
        }

        $delimiter = $this->detectDelimiter($filePath);
        $header = null;
        $importedCount = 0;
        $skippedCount = 0;

        while (($data = fgetcsv($handle, 2000, $delimiter)) !== false) {
            if ($header === null) {
                $header = array_map(fn ($h) => mb_strtolower(trim($h), 'UTF-8'), $data);
                continue;
            }

            if (empty(array_filter($data))) {
                continue;
            }

            $row = [];
            foreach ($header as $idx => $colName) {
                $row[$colName] = $data[$idx] ?? '';
            }

            // Identificar colunas de nome, email, telefone e produto
            $name = $row[$columnMapping['name'] ?? 'nome']
                ?? $row['name'] ?? $row['nome completo'] ?? $row['cliente'] ?? '';
            $email = $row[$columnMapping['email'] ?? 'email']
                ?? $row['e-mail'] ?? $row['mail'] ?? '';
            $phone = $row[$columnMapping['phone'] ?? 'telefone']
                ?? $row['phone'] ?? $row['whatsapp'] ?? $row['celular'] ?? $row['tel'] ?? '';
            $productsRaw = $row[$columnMapping['products'] ?? 'produtos']
                ?? $row['produto'] ?? $row['products'] ?? $row['cursos'] ?? '';

            $normalizedPhone = $this->normalizePhone($phone);
            if (empty($normalizedPhone)) {
                $skippedCount++;
                continue;
            }

            // Processar lista de produtos
            $products = [];
            if (!empty($productsRaw)) {
                $parts = preg_split('/[,;|]+/', (string) $productsRaw);
                foreach ($parts as $p) {
                    $trimmed = trim($p);
                    if ($trimmed !== '') {
                        $products[] = $trimmed;
                    }
                }
            }

            // Upsert no banco
            AutoZapImportedContact::updateOrCreate(
                [
                    'tenant_id' => $tenantId,
                    'phone' => $normalizedPhone,
                ],
                [
                    'name' => trim($name) ?: null,
                    'email' => trim($email) ?: null,
                    'products' => !empty($products) ? array_values(array_unique($products)) : null,
                ]
            );

            $importedCount++;
        }

        fclose($handle);

        return [
            'imported' => $importedCount,
            'skipped' => $skippedCount,
        ];
    }

    /**
     * Normalizar telefone para formato padrão com DDI.
     */
    public function normalizePhone(?string $phone): string
    {
        if (empty($phone)) {
            return '';
        }

        // Manter JID de grupos se fornecido
        if (str_contains($phone, '@g.us') || str_contains($phone, '-group')) {
            return trim($phone);
        }

        $digits = preg_replace('/\D+/', '', $phone);
        if (empty($digits)) {
            return '';
        }

        // Se tiver 10 ou 11 dígitos, adicionar DDI 55 do Brasil
        if (strlen($digits) === 10 || strlen($digits) === 11) {
            $digits = '55' . $digits;
        }

        return $digits;
    }

    /**
     * Detectar delimitador de CSV (, ou ; ou \t).
     */
    protected function detectDelimiter(string $filePath): string
    {
        $handle = fopen($filePath, 'r');
        if (!$handle) {
            return ',';
        }

        $line = fgets($handle, 4096);
        fclose($handle);

        if (!$line) {
            return ',';
        }

        $delimiters = [',', ';', "\t", '|'];
        $counts = [];

        foreach ($delimiters as $d) {
            $counts[$d] = substr_count($line, $d);
        }

        arsort($counts);
        return key($counts);
    }
}
