<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Services\Radar;

final class PoliceCareerClassifier
{
    /** @var array<string, array{label:string,family:string,patterns:list<string>}> */
    private const TRACKS = [
        'policia_rodoviaria_federal' => [
            'label' => 'Polícia Rodoviária Federal', 'family' => 'policial',
            'patterns' => ['polícia rodoviária federal', 'policia rodoviaria federal', '\bprf\b', 'policial rodoviário federal', 'policial rodoviario federal'],
        ],
        'policia_federal' => [
            'label' => 'Polícia Federal', 'family' => 'policial',
            'patterns' => ['polícia federal', 'policia federal', '\bpf\b', 'delegado federal', 'agente federal', 'escrivão federal', 'escrivao federal', 'papiloscopista federal'],
        ],
        'policia_penal' => [
            'label' => 'Polícia Penal', 'family' => 'policial',
            'patterns' => ['polícia penal', 'policia penal', 'policial penal', 'agente penitenciário', 'agente penitenciario', 'polícia prisional', 'policia prisional'],
        ],
        'policia_civil' => [
            'label' => 'Polícia Civil', 'family' => 'policial',
            'patterns' => ['polícia civil', 'policia civil', 'delegado de polícia', 'delegado de policia', 'investigador de polícia', 'investigador de policia', 'escrivão de polícia', 'escrivao de policia'],
        ],
        'policia_militar' => [
            'label' => 'Polícia Militar', 'family' => 'policial',
            'patterns' => ['polícia militar', 'policia militar', 'soldado pm', 'oficial pm', 'cadete pm', 'aluno soldado', 'praça policial militar', 'praca policial militar'],
        ],
        'policia_cientifica_pericia' => [
            'label' => 'Polícia Científica e Perícia Oficial', 'family' => 'policial',
            'patterns' => ['polícia científica', 'policia cientifica', 'perícia oficial', 'pericia oficial', 'perito criminal', 'médico legista', 'medico legista', 'odonto legista', 'papiloscopista'],
        ],
        'policia_legislativa' => [
            'label' => 'Polícia Legislativa', 'family' => 'policial',
            'patterns' => ['polícia legislativa', 'policia legislativa', 'agente de polícia legislativa', 'agente de policia legislativa'],
        ],
        'bombeiro_militar' => [
            'label' => 'Bombeiro Militar', 'family' => 'seguranca_correlata',
            'patterns' => ['corpo de bombeiros militar', 'bombeiro militar', 'soldado bombeiro', 'oficial bombeiro'],
        ],
        'guarda_municipal' => [
            'label' => 'Guarda Municipal', 'family' => 'seguranca_correlata',
            'patterns' => ['guarda municipal', 'guarda civil municipal', 'gcm'],
        ],
        'socioeducativo' => [
            'label' => 'Socioeducativo', 'family' => 'seguranca_correlata',
            'patterns' => ['agente socioeducativo', 'atendimento socioeducativo', 'sistema socioeducativo'],
        ],
    ];

    /** @return array<string, array{label:string,family:string}> */
    public static function tracks(): array
    {
        return array_map(
            static fn (array $track): array => ['label' => $track['label'], 'family' => $track['family']],
            self::TRACKS,
        );
    }

    /** @return array{is_candidate:bool,career_track:?string,career_family:?string,confidence:float,status:string,reason:string} */
    public function classify(string $text): array
    {
        $normalized = $this->normalize($text);
        foreach (self::TRACKS as $code => $track) {
            foreach ($track['patterns'] as $pattern) {
                if (str_contains($normalized, $this->normalize($pattern))) {
                    $status = $this->detectStatus($normalized);
                    return [
                        'is_candidate' => true,
                        'career_track' => $code,
                        'career_family' => $track['family'],
                        'confidence' => $this->confidenceFor($normalized, $status),
                        'status' => $status,
                        'reason' => $track['label'],
                    ];
                }
            }
        }

        return [
            'is_candidate' => false,
            'career_track' => null,
            'career_family' => null,
            'confidence' => 0.0,
            'status' => 'previsto',
            'reason' => 'Sem marcador de carreira policial ou correlata.',
        ];
    }

    private function detectStatus(string $text): string
    {
        if (str_contains($text, 'inscrições abertas') || str_contains($text, 'inscricoes abertas')) return 'edital_aberto';
        if (str_contains($text, 'edital') && (str_contains($text, 'publicado') || str_contains($text, 'publicação') || str_contains($text, 'publicacao'))) return 'edital_aberto';
        if (str_contains($text, 'banca organizadora') || str_contains($text, 'contratação de banca') || str_contains($text, 'contratacao de banca')) return 'banca_definida';
        if (str_contains($text, 'comissão') || str_contains($text, 'comissao')) return 'comissao_formada';
        if (str_contains($text, 'autoriz') || str_contains($text, 'provimento de vagas')) return 'previsto';

        return 'previsto';
    }

    private function confidenceFor(string $text, string $status): float
    {
        $confidence = 0.62;
        if (str_contains($text, 'concurso')) $confidence += 0.13;
        if ($status !== 'previsto') $confidence += 0.10;
        if (str_contains($text, 'edital')) $confidence += 0.08;

        return min($confidence, 0.95);
    }

    private function normalize(string $value): string
    {
        $value = mb_strtolower($value);
        $converted = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $value);

        return $converted === false ? $value : $converted;
    }
}
