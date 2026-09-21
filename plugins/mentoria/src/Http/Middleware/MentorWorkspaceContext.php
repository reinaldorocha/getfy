<?php

namespace Plugins\Mentoria\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Plugins\Mentoria\Services\AccessService;
use Plugins\Mentoria\Services\AuditService;
use Symfony\Component\HttpFoundation\Response;

class MentorWorkspaceContext
{
    public function __construct(
        private readonly AccessService $access,
        private readonly AuditService $audit,
    ) {}

    public function handle(Request $request, Closure $next): Response
    {
        $actor = $request->user();
        $studentId = (int) $request->route('student');
        $tenantId = (int) $request->route('tenant');

        if (! $actor || $this->access->tenantId($actor) !== $tenantId) {
            abort(404);
        }

        $student = $this->access->assertStudentInTenant($actor, $studentId);
        $originalResolver = $request->getUserResolver();
        $request->attributes->set('mentoria.workspace', true);
        $request->attributes->set('mentoria.workspace_actor', $actor);
        $request->attributes->set('mentoria.workspace_student', $student);
        $request->attributes->set('mentoria.workspace_base', url('/mentoria/students/'.$student->id.'/workspace/'.$tenantId));
        $request->setUserResolver(static fn () => $student);

        try {
            $response = $next($request);
        } finally {
            $request->setUserResolver($originalResolver);
        }

        if (! in_array($request->method(), ['GET', 'HEAD', 'OPTIONS'], true) && $response->getStatusCode() < 400) {
            $routeName = (string) ($request->route()?->getName() ?? 'action');
            $this->audit->record(
                $tenantId,
                $actor,
                'mentor_workspace.'.str_replace('.', '_', $routeName),
                'mentor_workspace',
                null,
                (int) $student->id,
                ['source' => 'mentor_workspace', 'method' => $request->method(), 'route' => $routeName],
            );
        }

        return $response;
    }
}
