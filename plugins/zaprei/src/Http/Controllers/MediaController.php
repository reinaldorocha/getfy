<?php

namespace Plugins\Zaprei\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Plugins\Zaprei\Zaprei;

/**
 * Upload das mídias usadas nos blocos de mensagem.
 */
final class MediaController extends Controller
{
    private const MAX_KILOBYTES = 20480;

    /** @var list<string> */
    private const ALLOWED = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'mp4', 'mp3', 'ogg', 'wav', 'm4a', 'pdf'];

    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:'.implode(',', self::ALLOWED), 'max:'.self::MAX_KILOBYTES],
        ]);

        $file = $request->file('file');
        $path = $file->store(Zaprei::mediaDirectory($this->tenantId($request)), Zaprei::MEDIA_DISK);

        return response()->json([
            'url' => Storage::disk(Zaprei::MEDIA_DISK)->url($path),
            'mime_type' => $file->getMimeType(),
            'name' => $file->getClientOriginalName(),
        ]);
    }
}
