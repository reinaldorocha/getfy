<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services\Radar;

use Plugins\Mentoria2\Services\AiUsageService;

/**
 * IA auxilia somente a estruturar uma publicação já coletada. Não busca nem inventa fontes.
 */
final class RadarAiClassificationService
{
    /** @param array{is_candidate:bool,career_track:?string,career_family:?string,confidence:float,status:string,reason:string} $baseline
     *  @return array{is_candidate:bool,career_track:?string,career_family:?string,confidence:float,status:string,reason:string,summary?:string,ai_used?:bool}
     */
    public function enrich(?int $tenantId, string $text, array $baseline): array
    {
        if (! $baseline['is_candidate'] || ! $tenantId || ! class_exists(\Plugins\AiMember\Services\OpenRouterClient::class)) return $baseline;

        try {
            $client = new \Plugins\AiMember\Services\OpenRouterClient($tenantId);
            $response = $client->chatCompletions([
                'model' => 'openai/gpt-4o-mini',
                'messages' => [
                    ['role' => 'system', 'content' => 'Você classifica publicações oficiais brasileiras. Use exclusivamente o texto fornecido. Não invente cargos, vagas, datas, banca ou concurso. Retorne apenas JSON válido.'],
                    ['role' => 'user', 'content' => "Classifique a publicação abaixo.\nCarreiras permitidas: ".implode(', ', array_keys(PoliceCareerClassifier::tracks())).".\nStatus permitidos: previsto, comissao_formada, banca_definida, edital_aberto, encerrado.\n\nRetorne {\"career_track\":\"...\",\"status\":\"...\",\"confidence\":0.0,\"summary\":\"resumo fiel de até 280 caracteres\"}.\n\nPublicação:\n".mb_substr($text, 0, 6000)],
                ],
                'response_format' => ['type' => 'json_object'],
                'temperature' => 0,
                'max_tokens' => 350,
            ]);
            $payload = json_decode((string) ($response['choices'][0]['message']['content'] ?? ''), true);
            if (! is_array($payload)) return $baseline;
            $track = (string) ($payload['career_track'] ?? '');
            $tracks = PoliceCareerClassifier::tracks();
            if (! isset($tracks[$track])) return $baseline;
            $status = (string) ($payload['status'] ?? $baseline['status']);
            if (! in_array($status, ['previsto', 'comissao_formada', 'banca_definida', 'edital_aberto', 'encerrado'], true)) $status = $baseline['status'];
            $confidence = min(0.99, max(0.0, (float) ($payload['confidence'] ?? $baseline['confidence'])));
            $summary = trim((string) ($payload['summary'] ?? ''));

            try {
                app(AiUsageService::class)->log($tenantId, null, null, 'radar_classification', 'openai/gpt-4o-mini', (int) ($response['usage']['prompt_tokens'] ?? 0), (int) ($response['usage']['completion_tokens'] ?? 0), ['career_track' => $track]);
            } catch (\Throwable) {
            }

            return [
                'is_candidate' => true, 'career_track' => $track, 'career_family' => $tracks[$track]['family'],
                'confidence' => $confidence, 'status' => $status, 'reason' => $tracks[$track]['label'],
                'summary' => $summary !== '' ? mb_substr($summary, 0, 280) : null, 'ai_used' => true,
            ];
        } catch (\Throwable) {
            return $baseline;
        }
    }
}
