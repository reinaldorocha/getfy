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

    /**
     * @return array<int, string>
     */
    public function getTemplateHeaders(): array
    {
        return [
            'Disciplina',
            'Tópico',
            'Subtópico',
            'Prioridade',
            'Tempo Estimado (min)',
            'Questões',
            'Peso',
        ];
    }

    /**
     * @return array<int, array<int, mixed>>
     */
    public function getTemplateSampleRows(): array
    {
        return [
            [
                'Direito Constitucional',
                'Direitos e Garantias Fundamentais',
                'Art. 5º - Direitos Individuais e Coletivos',
                'Alta',
                60,
                15,
                2.0,
            ],
            [
                'Direito Constitucional',
                'Direitos e Garantias Fundamentais',
                'Remédios Constitucionais (Habeas Corpus, MS, HD)',
                'Alta',
                50,
                10,
                2.0,
            ],
            [
                'Direito Administrativo',
                'Atos Administrativos',
                'Conceito, Requisitos e Atributos',
                'Alta',
                60,
                15,
                1.5,
            ],
            [
                'Direito Administrativo',
                'Atos Administrativos',
                'Extinção, Anulação e Revogação',
                'Média',
                45,
                10,
                1.5,
            ],
            [
                'Língua Portuguesa',
                'Morfossintaxe',
                'Crase',
                'Alta',
                60,
                20,
                2.0,
            ],
            [
                'Língua Portuguesa',
                'Morfossintaxe',
                'Concordância Verbal e Nominal',
                'Média',
                50,
                15,
                2.0,
            ],
            [
                'Raciocínio Lógico',
                'Estruturas Lógicas e Tabela Verdade',
                'Conectivos, Negação e Equivalência',
                'Média',
                45,
                10,
                1.0,
            ],
            [
                'Legislação Especial',
                'Estatuto do Desarmamento (Lei 10.826)',
                'Posse, Porte e Crimes em Espécie',
                'Alta',
                50,
                12,
                2.0,
            ],
        ];
    }

    /**
     * Generates a native OpenXML spreadsheet (.xlsx) template.
     */
    public function generateXlsxTemplate(): string
    {
        $headers = $this->getTemplateHeaders();
        $sampleRows = $this->getTemplateSampleRows();

        $tempFile = tempnam(sys_get_temp_dir(), 'xlsx_tpl_');
        $zip = new ZipArchive();
        if ($zip->open($tempFile, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
            throw new RuntimeException('Não foi possível criar o arquivo XLSX de modelo.');
        }

        // 1. [Content_Types].xml
        $contentTypes = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n" .
            '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' .
            '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' .
            '<Default Extension="xml" ContentType="application/xml"/>' .
            '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' .
            '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' .
            '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' .
            '<Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>' .
            '</Types>';
        $zip->addFromString('[Content_Types].xml', $contentTypes);

        // 2. _rels/.rels
        $rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n" .
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' .
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' .
            '</Relationships>';
        $zip->addFromString('_rels/.rels', $rels);

        // 3. xl/_rels/workbook.xml.rels
        $wbRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n" .
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' .
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>' .
            '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' .
            '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/>' .
            '</Relationships>';
        $zip->addFromString('xl/_rels/workbook.xml.rels', $wbRels);

        // 4. xl/workbook.xml
        $workbook = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n" .
            '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' .
            '<sheets>' .
            '<sheet name="Edital Verticalizado" sheetId="1" r:id="rId1"/>' .
            '</sheets>' .
            '</workbook>';
        $zip->addFromString('xl/workbook.xml', $workbook);

        // 5. xl/styles.xml (Calibri 11pt bold, white text on #0D9488 teal fill)
        $styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n" .
            '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' .
            '<fonts count="2">' .
            '<font><sz val="11"/><name val="Calibri"/></font>' .
            '<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/></font>' .
            '</fonts>' .
            '<fills count="3">' .
            '<fill><patternFill patternType="none"/></fill>' .
            '<fill><patternFill patternType="gray125"/></fill>' .
            '<fill><patternFill patternType="solid"><fgColor rgb="FF0D9488"/></patternFill></fill>' .
            '</fills>' .
            '<borders count="1">' .
            '<border><left/><right/><top/><bottom/></border>' .
            '</borders>' .
            '<cellStyleXfs count="1">' .
            '<xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>' .
            '</cellStyleXfs>' .
            '<cellXfs count="2">' .
            '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>' .
            '<xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/>' .
            '</cellXfs>' .
            '</styleSheet>';
        $zip->addFromString('xl/styles.xml', $styles);

        // 6. Build sharedStrings and sheetData
        $sharedStrings = [];
        $stringIndexMap = [];

        $getStringIndex = function (string $str) use (&$sharedStrings, &$stringIndexMap): int {
            if (isset($stringIndexMap[$str])) {
                return $stringIndexMap[$str];
            }
            $idx = count($sharedStrings);
            $sharedStrings[] = $str;
            $stringIndexMap[$str] = $idx;
            return $idx;
        };

        $colLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

        $sheetRows = [];
        // Header row
        $headerCells = [];
        foreach ($headers as $colIdx => $headerText) {
            $cellRef = $colLetters[$colIdx] . '1';
            $strIdx = $getStringIndex((string) $headerText);
            $headerCells[] = '<c r="' . $cellRef . '" t="s" s="1"><v>' . $strIdx . '</v></c>';
        }
        $sheetRows[] = '<row r="1">' . implode('', $headerCells) . '</row>';

        // Data rows
        $rowNum = 2;
        foreach ($sampleRows as $row) {
            $cells = [];
            foreach ($row as $colIdx => $val) {
                $cellRef = $colLetters[$colIdx] . $rowNum;
                if ($val === null || $val === '') {
                    continue;
                }
                $headerName = $headers[$colIdx] ?? '';
                if (is_numeric($val) && in_array($headerName, ['Tempo Estimado (min)', 'Questões', 'Peso'])) {
                    $cells[] = '<c r="' . $cellRef . '"><v>' . (float) $val . '</v></c>';
                } else {
                    $strIdx = $getStringIndex((string) $val);
                    $cells[] = '<c r="' . $cellRef . '" t="s"><v>' . $strIdx . '</v></c>';
                }
            }
            $sheetRows[] = '<row r="' . $rowNum . '">' . implode('', $cells) . '</row>';
            $rowNum++;
        }

        // 7. xl/sharedStrings.xml
        $ssXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n" .
            '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' . count($sharedStrings) . '" uniqueCount="' . count($sharedStrings) . '">';
        foreach ($sharedStrings as $str) {
            $ssXml .= '<si><t>' . htmlspecialchars($str, ENT_XML1, 'UTF-8') . '</t></si>';
        }
        $ssXml .= '</sst>';
        $zip->addFromString('xl/sharedStrings.xml', $ssXml);

        // 8. xl/worksheets/sheet1.xml with custom column widths
        $sheetXml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n" .
            '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' .
            '<cols>' .
            '<col min="1" max="1" width="26" customWidth="1"/>' .
            '<col min="2" max="2" width="36" customWidth="1"/>' .
            '<col min="3" max="3" width="46" customWidth="1"/>' .
            '<col min="4" max="4" width="16" customWidth="1"/>' .
            '<col min="5" max="5" width="22" customWidth="1"/>' .
            '<col min="6" max="6" width="14" customWidth="1"/>' .
            '<col min="7" max="7" width="12" customWidth="1"/>' .
            '</cols>' .
            '<sheetData>' . implode('', $sheetRows) . '</sheetData>' .
            '</worksheet>';
        $zip->addFromString('xl/worksheets/sheet1.xml', $sheetXml);

        $zip->close();
        $content = file_get_contents($tempFile);
        @unlink($tempFile);

        return $content ?: '';
    }

    public function generateCsvTemplate(): string
    {
        $headers = $this->getTemplateHeaders();
        $sampleRows = $this->getTemplateSampleRows();

        $output = "\xEF\xBB\xBF"; // UTF-8 BOM
        $output .= implode(';', array_map([$this, 'escapeCsv'], $headers)) . "\r\n";
        foreach ($sampleRows as $row) {
            $output .= implode(';', array_map(fn ($v) => $this->escapeCsv((string) $v), $row)) . "\r\n";
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