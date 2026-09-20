<?php

namespace Plugins\Zaprei\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use InvalidArgumentException;
use Plugins\Zaprei\Models\Contact;
use Plugins\Zaprei\Services\ContactRepository;

/**
 * Base de contatos: compradores sincronizados + importados por CSV.
 */
final class ContactController extends Controller
{
    private const MAX_CSV_KILOBYTES = 10240;

    public function __construct(private readonly ContactRepository $contacts) {}

    public function index(Request $request): JsonResponse
    {
        $all = $this->contacts->all($this->tenantId($request));
        $search = mb_strtolower(trim((string) $request->query('search', '')));
        $source = (string) $request->query('source', 'all');

        $filtered = array_values(array_filter(
            $this->contacts->filterBySource($all, $source),
            fn (Contact $contact): bool => $this->matches($contact, $search)
        ));

        return response()->json([
            'contacts' => array_map($this->present(...), $filtered),
            'counts' => [
                'all' => count($all),
                'buyers' => count($this->contacts->filterBySource($all, Contact::SOURCE_BUYER)),
                'imported' => count($this->contacts->filterBySource($all, Contact::SOURCE_IMPORTED)),
            ],
        ]);
    }

    public function import(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:csv,txt', 'max:'.self::MAX_CSV_KILOBYTES],
        ]);

        try {
            $imported = $this->contacts->importCsv(
                $this->tenantId($request),
                (string) $request->file('file')->getRealPath()
            );
        } catch (InvalidArgumentException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }

        return response()->json(['imported' => $imported]);
    }

    public function destroy(Request $request, int $contact): JsonResponse
    {
        $this->contacts->deleteImported($this->tenantId($request), $contact);

        return response()->json(['ok' => true]);
    }

    /**
     * @return array<string, mixed>
     */
    private function present(Contact $contact): array
    {
        $isBuyer = $contact->source === Contact::SOURCE_BUYER;

        return [
            'id' => $contact->id,
            'source' => $contact->source,
            'origin' => $isBuyer ? 'Comprador' : 'Importado',
            'can_delete' => ! $isBuyer,
            'name' => $contact->name ?: ($isBuyer ? 'Cliente' : 'Contato importado'),
            'email' => $contact->email ?: '',
            'phone' => $contact->phone,
            'products' => array_values(array_map(
                static fn ($product): string => is_array($product) ? (string) ($product['name'] ?? '') : (string) $product,
                (array) ($contact->products ?? [])
            )),
        ];
    }

    private function matches(Contact $contact, string $search): bool
    {
        if ($search === '') {
            return true;
        }

        $haystack = mb_strtolower($contact->name.' '.$contact->email.' '.$contact->phone);

        return str_contains($haystack, $search);
    }
}
