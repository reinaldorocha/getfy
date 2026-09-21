<?php

declare(strict_types=1);

$root = dirname(__DIR__, 3);
/** @var Composer\Autoload\ClassLoader $loader */
$loader = require $root.'/vendor/autoload.php';
$loader->addPsr4('Plugins\\Mentoria\\', $root.'/plugins/mentoria/src');

$controller = (new ReflectionClass(\Plugins\Mentoria\Http\Controllers\QuestionController::class))
    ->newInstanceWithoutConstructor();
$method = new ReflectionMethod(\Plugins\Mentoria\Http\Controllers\QuestionController::class, 'normalizeQuestionInput');
$method->setAccessible(true);

$question = $method->invoke($controller, [
    'disciplina' => 'Direito Penal',
    'enunciado' => 'Exemplo',
    'alternativas' => [
        'A) Primeira alternativa',
        'B. Segunda alternativa',
        '(C) Terceira alternativa',
        'D - Quarta alternativa',
    ],
    'respostaCorreta' => 'B',
]);

$expected = [
    'Primeira alternativa',
    'Segunda alternativa',
    'Terceira alternativa',
    'Quarta alternativa',
];

if ($question['alternatives'] !== $expected) {
    fwrite(STDERR, 'Alternativas devem ser armazenadas sem rótulo. '.json_encode($question['alternatives']).PHP_EOL);
    exit(1);
}

echo "Question alternative normalization OK.".PHP_EOL;
