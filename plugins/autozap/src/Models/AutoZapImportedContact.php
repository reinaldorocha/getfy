<?php

namespace Plugins\AutoZap\Models;

use Illuminate\Database\Eloquent\Model;

class AutoZapImportedContact extends Model
{
    protected $table = 'autozap_imported_contacts';

    protected $fillable = [
        'tenant_id',
        'name',
        'email',
        'phone',
        'products',
        'tags',
    ];

    protected function casts(): array
    {
        return [
            'products' => 'array',
            'tags' => 'array',
        ];
    }
}
