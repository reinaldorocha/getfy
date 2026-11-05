<?php

namespace Plugins\Mentoria2\Services;

use RuntimeException;
use ZipArchive;

class SpreadsheetParserService
{
    /**
     * Parse uploaded file (.csv, .tsv, .xlsx) into structured rows.
     *
     * @return array<int, array<string, mixed>>
     */
    public function parseFile(string $filePath, ?string $originalName = null): array
    {
        $extension = strtolower(pathinfo($originalName ?: $filePath, PATHINFO_EXTENSION));

        if ($extension === 'xlsx') {
            return $this->parseXlsx($filePath);
        }

        return $this->parseCsv($filePath);
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function parseCsv(string $filePath): array
    {
        if (! file_exists($filePath) || ! is_readable($filePath)) {
            throw new RuntimeException('Arquivo não encontrado ou ilegível.');
        }

        $content = file_get_contents($filePath);
        if ($content === false || trim($content) === '') {
            throw new RuntimeException('O arquivo de planilha está vazio.');
        }

        // Remove UTF-8 BOM if present
        if (str_starts_with($content, "\xEF\xBB\xBF")) {
            $content = substr($content, 3);
        }

        // Determine delimiter by inspecting the first line
        $firstLine = strtok($content, "\r\n") ?: '';
        $delimiter = ';';
        if (substr_count($firstLine, ',') > substr_count($firstLine, ';')) {
            $delimiter = ',';
        } elseif (substr_count($firstLine, "\t") > substr_count($firstLine, ';')) {
            $delimiter = "\t";
        }

        $lines = preg_split("/\r\n|\n|\r/", $content);
        $header = null;
        $rows = [];

        foreach ($lines as $line) {
            if (trim($line) === '') {
                continue;
            }

            $columns = str_getcsv($line, $delimiter, '"', "\\");
            if ($header === null) {
                $header = array_map([$this, 'normalizeHeader'], $columns);
                continue;
            }

            $row = [];
            foreach ($header as $idx => $key) {
                if ($key !== '') {
                    $row[$key] = isset($columns[$idx]) ? trim($columns[$idx]) : null;
                }
            }

            if (! empty(array_filter($row, fn ($v) => $v !== null && $v !== ''))) {
                $rows[] = $this->sanitizeRow($row);
            }
        }

        return $rows;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    public function parseXlsx(string $filePath): array
    {
        if (! class_exists(ZipArchive::class)) {
            return $this->parseCsv($filePath);
        }

        $zip = new ZipArchive();
        if ($zip->open($filePath) !== true) {
            throw new RuntimeException('Não foi possível abrir o arquivo XLSX.');
        }

        // Load shared strings
        $sharedStrings = [];
        $sharedStringsXml = $zip->getFromName('xl/sharedStrings.xml');
        if ($sharedStringsXml !== false) {
            $xml = @simplexml_load_string($sharedStringsXml);
            if ($xml) {
                foreach ($xml->si as $si) {
                    if (isset($si->t)) {
                        $sharedStrings[] = (string) $si->t;
                    } elseif (isset($si->r)) {
                        $t = '';
                        foreach ($si->r as $r) {
                            $t .= (string) $r->t;
                        }
                        $sharedStrings[] = $t;
                    } else {
                        $sharedStrings[] = '';
                    }
                }
            }
        }

        // Find first sheet
        $sheetXml = $zip->getFromName('xl/worksheets/sheet1.xml');
        if ($sheetXml === false) {
            $zip->close();
            throw new RuntimeException('Nenhuma planilha encontrada dentro do arquivo XLSX.');
        }

        $xml = @simplexml_load_string($sheetXml);
        $zip->close();

        if (! $xml || ! isset($xml->sheetData->row)) {
            return [];
        }

        $rawRows = [];
        foreach ($xml->sheetData->row as $row) {
            $rowValues = [];
            foreach ($row->c as $c) {
                $ref = (string) $c['r'];
                $colIndex = $this->columnCoordinateToIndex(preg_replace('/[0-9]/', '', $ref));
                $type = (string) $c['t'];
                $val = isset($c->v) ? (string) $c->v : '';

                if ($type === 's' && isset($sharedStrings[(int) $val])) {
                    $val = $sharedStrings[(int) $val];
                } elseif ($type === 'inlineStr' && isset($c->is->t)) {
                    $val = (string) $c->is->t;
                }

                $rowValues[$colIndex] = trim($val);
            }

            if (! empty($rowValues)) {
                $maxCol = max(array_keys($rowValues));
                $normalized = [];
                for ($i = 0; $i <= $maxCol; $i++) {
                    $normalized[$i] = $rowValues[$i] ?? '';
                }
                $rawRows[] = $normalized;
            }
        }

        if (empty($rawRows)) {
            return [];
        }

        $headerCols = array_shift($rawRows);
        $header = array_map([$this, 'normalizeHeader'], $headerCols);

        $result = [];
        foreach ($rawRows as $cols) {
            $row = [];
            foreach ($header as $idx => $key) {
                if ($key !== '') {
                    $row[$key] = isset($cols[$idx]) ? trim($cols[$idx]) : null;
                }
            }
            if (! empty(array_filter($row, fn ($v) => $v !== null && $v !== ''))) {
                $result[] = $this->sanitizeRow($row);
            }
        }

        return $result;
    }

    public function generateCsvTemplate(): string
    {
        $headers = [
            'Disciplina',
            'Tópico',
            'Subtópico',
            'Prioridade',
            'Tempo Estimado (min)',
            'Questões',
            'Peso',
        ];

        $sampleRows = [
            [
                'Direito Constitucional',
                'Direitos e Garantias Fundamentais',
                'Art. 5º - Direitos Individuais e Coletivos',
                'Alta',
                '60',
                '15',
                '2.0',
            ],
            [
                'Direito Constitucional',
                'Direitos e Garantias Fundamentais',
                'Remédios Constitucionais (Habeas Corpus, MS, HD)',
                'Alta',
                '50',
                '10',
                '2.0',
            ],
            [
                'Direito Administrativo',
                'Atos Administrativos',
                'Conceito, Requisitos e Atributos',
                'Alta',
                '60',
                '15',
                '1.5',
            ],
            [
                'Direito Administrativo',
                'Atos Administrativos',
                'Extinção, Anulação e Revogação',
                'Média',
                '45',
                '10',
                '1.5',
            ],
            [
                'Língua Portuguesa',
                'Morfossintaxe',
                'Crase',
                'Alta',
                '60',
                '20',
                '2.0',
            ],
            [
                'Língua Portuguesa',
                'Morfossintaxe',
                'Concordância Verbal e Nominal',
                'Média',
                '50',
                '15',
                '2.0',
            ],
        ];

        $output = "\xEF\xBB\xBF"; // UTF-8 BOM
        $output .= implode(';', array_map([$this, 'escapeCsv'], $headers)) . "\r\n";
        foreach ($sampleRows as $row) {
            $output .= implode(';', array_map([$this, 'escapeCsv'], $row)) . "\r\n";
        }

        return $output;
    }

    private function escapeCsv(string $val): string
    {
        if (str_contains($val, ';') || str_contains($val, '"') || str_contains($val, "\n") || str_contains($val, "\r")) {
            return '"' . str_replace('"', '""', $val) . '"';
        }
        return $val;
    }

    private function normalizeHeader(string $raw): string
    {
        $h = mb_strtolower(trim($raw), 'UTF-8');
        // Remove accents
        $h = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $h) ?: $h;
        $h = preg_replace('/[^a-z0-9]/', '', $h);

        if (str_contains($h, 'disciplina') || str_contains($h, 'materia')) {
            return 'subject';
        }
        if (str_contains($h, 'subtopico') || str_contains($h, 'subassunto')) {
            return 'subtopic';
        }
        if (str_contains($h, 'topico') || str_contains($h, 'assunto') || str_contains($h, 'conteudo')) {
            return 'topic';
        }
        if (str_contains($h, 'prioridade') || str_contains($h, 'relevancia')) {
            return 'priority';
        }
        if (str_contains($h, 'tempo') || str_contains($h, 'minuto') || str_contains($h, 'duracao') || str_contains($h, 'estimado')) {
            return 'estimated_minutes';
        }
        if (str_contains($h, 'questao') || str_contains($h, 'questoes') || str_contains($h, 'exercicio')) {
            return 'questions_target';
        }
        if (str_contains($h, 'peso')) {
            return 'weight';
        }

        return $h;
    }

    /**
     * @param  array<string, mixed>  $row
     * @return array<string, mixed>
     */
    private function sanitizeRow(array $row): array
    {
        $priorityRaw = (string) ($row['priority'] ?? '');
        $priorityVal = 50;
        if (is_numeric($priorityRaw)) {
            $priorityVal = max(1, min(100, (int) $priorityRaw));
        } else {
            $pLower = mb_strtolower($priorityRaw, 'UTF-8');
            if (str_contains($pLower, 'alt') || str_contains($pLower, 'urgent') || str_contains($pLower, 'max')) {
                $priorityVal = 85;
            } elseif (str_contains($pLower, 'baix') || str_contains($pLower, 'min')) {
                $priorityVal = 25;
            } else {
                $priorityVal = 50;
            }
        }

        $estimatedMinutes = null;
        if (isset($row['estimated_minutes']) && is_numeric($row['estimated_minutes'])) {
            $estimatedMinutes = max(10, min(480, (int) $row['estimated_minutes']));
        }

        $questionsTarget = null;
        if (isset($row['questions_target']) && is_numeric($row['questions_target'])) {
            $questionsTarget = max(0, min(200, (int) $row['questions_target']));
        }

        $weight = 1.0;
        if (isset($row['weight']) && is_numeric($row['weight'])) {
            $weight = max(0.1, min(10.0, (float) $row['weight']));
        }

        return [
            'subject' => trim((string) ($row['subject'] ?? '')),
            'topic' => trim((string) ($row['topic'] ?? '')),
            'subtopic' => trim((string) ($row['subtopic'] ?? '')),
            'priority' => $priorityVal,
            'estimated_minutes' => $estimatedMinutes,
            'questions_target' => $questionsTarget,
            'weight' => $weight,
        ];
    }

    private function columnCoordinateToIndex(string $col): int
    {
        $index = 0;
        $len = strlen($col);
        for ($i = 0; $i < $len; $i++) {
            $index = $index * 26 + (ord(strtoupper($col[$i])) - 64);
        }
        return max(0, $index - 1);
    }
}
