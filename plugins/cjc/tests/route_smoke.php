<?php

declare(strict_types=1);

$root = dirname(__DIR__, 3);
$autoload = $root.'/vendor/autoload.php';

if (! is_file($autoload)) {
    fwrite(STDERR, "vendor/autoload.php não encontrado.\n");
    exit(1);
}

/** @var Composer\Autoload\ClassLoader $loader */
$loader = require $autoload;
$loader->addPsr4('Plugins\\Cjc\\', $root.'/plugins/cjc/src');

$errors = [];
$checked = 0;

foreach ([
    $root.'/plugins/cjc/routes.php',
    $root.'/plugins/cjc/routes-student.php',
] as $routesFile) {
    if (! is_file($routesFile)) {
        $errors[] = "Arquivo de rotas ausente: {$routesFile}";
        continue;
    }

    $source = file_get_contents($routesFile);
    if ($source === false) {
        $errors[] = "Não foi possível ler {$routesFile}";
        continue;
    }

    preg_match_all('/^use\\s+([^;]+);/m', $source, $uses);
    $imports = [];
    foreach ($uses[1] ?? [] as $fqcn) {
        $fqcn = trim((string) $fqcn);
        if ($fqcn === '') {
            continue;
        }
        $short = substr($fqcn, (int) strrpos($fqcn, '\\') + 1);
        $imports[$short] = $fqcn;
    }

    preg_match_all(
        "/\\[([A-Za-z_][A-Za-z0-9_]*)::class,\\s*'([^']+)'\\]/",
        $source,
        $bindings,
        PREG_SET_ORDER
    );

    foreach ($bindings as $binding) {
        $short = $binding[1];
        $method = $binding[2];
        $fqcn = $imports[$short] ?? null;
        $checked++;

        if ($fqcn === null) {
            $errors[] = basename($routesFile).": import ausente para {$short}::{$method}";
            continue;
        }

        if (! class_exists($fqcn)) {
            $errors[] = basename($routesFile).": classe não encontrada {$fqcn}";
            continue;
        }

        if (! method_exists($fqcn, $method)) {
            $errors[] = basename($routesFile).": método não encontrado {$fqcn}::{$method}";
        }
    }
}

if ($errors !== []) {
    fwrite(STDERR, implode(PHP_EOL, $errors).PHP_EOL);
    exit(1);
}

echo "CJC route/controller smoke check OK ({$checked} bindings).".PHP_EOL;
