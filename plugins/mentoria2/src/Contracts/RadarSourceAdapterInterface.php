<?php

declare(strict_types=1);

namespace Plugins\Mentoria2\Contracts;

interface RadarSourceAdapterInterface
{
    public function key(): string;

    /**
     * @param object $source Row from mentoria2_radar_sources.
     * @return iterable<array{external_id:?string,canonical_url:string,title:?string,published_at:?string,excerpt:?string,payload:array}>
     */
    public function fetch(object $source): iterable;
}
