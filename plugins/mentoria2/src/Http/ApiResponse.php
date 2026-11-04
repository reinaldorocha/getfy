<?php

namespace Plugins\Mentoria2\Http;

use Illuminate\Http\JsonResponse;

class ApiResponse
{
    /**
     * Standard success response format: { data: ..., meta: ..., message: ... }
     */
    public static function success(mixed $data = [], string $message = '', array $meta = [], int $status = 200): JsonResponse
    {
        return response()->json([
            'data' => $data,
            'meta' => $meta,
            'message' => $message,
        ], $status);
    }

    /**
     * Standard error response format: { message: ..., errors: ... }
     * Ensures clean user-facing errors without technical SQL leaks.
     */
    public static function error(string $message, int $status = 400, array $errors = []): JsonResponse
    {
        $payload = [
            'message' => $message,
        ];
        if (!empty($errors)) {
            $payload['errors'] = $errors;
        }

        return response()->json($payload, $status);
    }

    public static function notFound(string $message = 'Recurso não encontrado.'): JsonResponse
    {
        return self::error($message, 404);
    }

    public static function forbidden(string $message = 'Acesso não autorizado.'): JsonResponse
    {
        return self::error($message, 403);
    }

    public static function validation(array $errors, string $message = 'Os dados informados são inválidos.'): JsonResponse
    {
        return self::error($message, 422, $errors);
    }
}

