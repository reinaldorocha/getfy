<?php

namespace Plugins\Mentoria2\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Plugins\Mentoria2\Services\AccessService;
use Plugins\Mentoria2\Services\AuditService;
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
        $guard = Auth::guard();
        $originalGuardUser = $guard->user();
        $request->attributes->set('mentoria2.workspace', true);
        $request->attributes->set('mentoria2.workspace_actor', $actor);
        $request->attributes->set('mentoria2.workspace_student', $student);
        $request->attributes->set('mentoria2.workspace_base', url('/mentoria2/students/'.$student->id.'/workspace/'.$tenantId));
        $request->setUserResolver(static fn () => $student);
        $guard->setUser($student);

        // Os métodos reutilizados pela área do aluno recebem {tenant} como o
        // primeiro parâmetro escalar. Depois de validar e guardar o aluno-alvo
        // acima, removemos {student} da lista de parâmetros despachados, para
        // evitar que o Laravel o injete no lugar de {tenant}.
        $request->route()?->forgetParameter('student');

        try {
            $response = $next($request);
        } finally {
            $request->setUserResolver($originalResolver);
            $guard->setUser($originalGuardUser);
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
