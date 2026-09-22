<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $settings->seoTitle ?: ($settings->siteName ?: 'Vitrine de Cursos') }}</title>
    <meta name="description" content="{{ $settings->seoDescription ?: 'Confira nossos cursos e materiais preparatórios com acesso imediato.' }}">
    
    @if($settings->faviconUrl)
        <link rel="icon" href="{{ $settings->faviconUrl }}">
    @endif

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN (v3.4) -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            magenta: '{{ $settings->primaryColor ?: "#dc2626" }}',
                            'light-magenta': '#fca5a5',
                            'dark-magenta': '#7f1d1d',
                            'gray-dark': '{{ $settings->cardBgColor ?: "#121212" }}',
                            'gray-light': '#e2e2e2',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <style>
        :root {
            --color-brand-magenta: {{ $settings->primaryColor ?: '#dc2626' }};
            --color-bg-site: {{ $settings->bgColor ?: '#0a0a0a' }};
            --color-card-bg: {{ $settings->cardBgColor ?: '#121212' }};
            --color-title: {{ $settings->titleColor ?: '#ffffff' }};
            --color-subtitle: {{ $settings->subtitleColor ?: '#e2e2e2' }};
        }

        body {
            background-color: var(--color-bg-site);
            color: #e2e2e2;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0d0d0d; }
        ::-webkit-scrollbar-thumb { background: #222222; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--color-brand-magenta); }

        .glass-card {
            background: rgba(18, 18, 18, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
            border-color: var(--color-brand-magenta);
            box-shadow: 0 0 25px rgba(220, 38, 38, 0.2);
            transform: translateY(-3px);
        }

        .gradient-text {
            background: linear-gradient(135deg, #fca5a5 0%, var(--color-brand-magenta) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .btn-magenta {
            background: var(--color-brand-magenta);
            color: #ffffff;
            font-weight: 800;
            transition: all 0.25s ease;
        }

        .btn-magenta:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 25px rgba(220, 38, 38, 0.45);
            filter: brightness(1.15);
        }

        .btn-radius {
            @if(($settings->buttonStyle ?? 'pill') === 'square')
                border-radius: 0.375rem;
            @elseif(($settings->buttonStyle ?? 'pill') === 'rounded')
                border-radius: 0.75rem;
            @else
                border-radius: 9999px;
            @endif
        }

        /* Ambient Glow Spheres */
        .ambient-glow {
            background: radial-gradient(circle, rgba(220, 38, 38, 0.14) 0%, rgba(0, 0, 0, 0) 70%);
        }
    </style>
</head>
<body class="bg-[#0a0a0a] text-[#e2e2e2] antialiased selection:bg-brand-magenta selection:text-white min-h-screen relative flex flex-col">

    <!-- Ambient Glow Background -->
    <div class="fixed top-0 left-0 w-full h-[800px] pointer-events-none -z-10 overflow-hidden">
        <div class="absolute -top-40 right-10 w-[600px] h-[600px] ambient-glow blur-[130px] rounded-full"></div>
        <div class="absolute top-80 -left-20 w-[500px] h-[500px] ambient-glow blur-[140px] rounded-full"></div>
    </div>

    <!-- HEADER -->
    <header class="fixed top-0 w-full z-40 bg-[#0c0c0c]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl">
        @if(!empty($isMaintenancePreview))
            <div class="bg-amber-500 text-black px-4 py-1.5 text-xs font-semibold shadow-inner border-b border-amber-600/30">
                <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        <span><strong>Modo Manutenção Ativo:</strong> A vitrine está oculta para visitantes públicos. Apenas administradores conseguem visualizar.</span>
                    </div>
                    <a href="{{ url('/vitrine/admin') }}" class="px-2.5 py-0.5 bg-black/90 hover:bg-black text-white text-[11px] rounded transition font-medium">
                        Painel Vitrine &rarr;
                    </a>
                </div>
            </div>
        @endif
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
            
            <!-- Logo & Brand Name -->
            <div 
                ondblclick="window.location.href='{{ url('/vitrine/admin') }}'" 
                onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
                title="Dica: Dê um duplo clique para acessar a área administrativa"
                class="flex items-center gap-3 cursor-pointer select-none group"
            >
                @if($settings->logoUrl)
                    <img 
                        src="{{ $settings->logoUrl }}" 
                        alt="{{ $settings->siteName ?: 'Logo' }}" 
                        class="h-10 md:h-12 w-auto object-contain max-w-[180px] transition-transform group-hover:scale-105"
                        onerror="this.style.display='none'; document.getElementById('logo-fallback-text').style.display='block';"
                    />
                @endif
                <span id="logo-fallback-text" class="{{ $settings->logoUrl ? 'hidden' : 'block' }} text-lg font-black text-white tracking-tight">
                    {{ $settings->siteName ?: config('app.name', 'Vitrine') }}
                </span>
            </div>

            <!-- Actions: WhatsApp & Cart -->
            <div class="flex items-center gap-3 sm:gap-4">
                @if($settings->globalWhatsapp)
                    @php
                        $cleanPhone = preg_replace('/[^0-9]/', '', $settings->globalWhatsapp);
                        $whatsappUrl = "https://wa.me/{$cleanPhone}?text=" . urlencode("Olá! Conheci sua vitrine e gostaria de mais informações.");
                    @endphp

                    <a 
                        href="{{ $whatsappUrl }}" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="px-3.5 sm:px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                    >
                        <i data-lucide="message-square" class="w-4 h-4"></i>
                        <span class="hidden sm:inline">WhatsApp</span>
                    </a>
                @endif

                <!-- Carrinho Button -->
                <button 
                    id="btn-open-cart"
                    onclick="openCartDrawer()"
                    class="relative px-4 py-2 rounded-full bg-brand-magenta/15 hover:bg-brand-magenta/25 border border-brand-magenta/30 hover:border-brand-magenta text-white transition-all flex items-center gap-2.5 text-xs font-black uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.2)]"
                >
                    <i data-lucide="shopping-cart" class="w-4 h-4 text-brand-magenta"></i>
                    <span class="hidden sm:inline">Carrinho</span>
                    <span id="cart-counter-badge" class="bg-brand-magenta text-white font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center">0</span>
                </button>
            </div>
        </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main class="flex-grow pt-24">

        @if($settings->heroTitle || $settings->heroBannerUrl || $settings->heroImageUrl)
        <!-- HERO SECTION -->
        <section class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
            
            <!-- Video/Image Full Banner if set -->
            @if($settings->heroBannerUrl)
                <div class="mb-10 w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-magenta/20 max-h-[480px]">
                    @if(($settings->heroBannerType ?? 'image') === 'video')
                        <video src="{{ $settings->heroBannerUrl }}" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
                    @else
                        <img src="{{ $settings->heroBannerUrl }}" alt="Banner Hero" class="w-full h-full object-cover">
                    @endif
                </div>
            @endif

            @if($settings->heroTitle || $settings->heroImageUrl)
            <div class="flex flex-col lg:flex-row items-center gap-12">
                
                <!-- Left info column -->
                <div class="{{ $settings->heroImageUrl ? 'lg:w-3/5' : 'w-full' }} space-y-6 text-center lg:text-left z-10">
                    @if($settings->heroBadge)
                        <span class="inline-block px-4 py-1.5 rounded-full bg-brand-magenta/10 border border-brand-magenta/30 text-brand-light-magenta text-[11px] font-black tracking-widest uppercase shadow-sm">
                            {{ $settings->heroBadge }}
                        </span>
                    @endif

                    @if($settings->heroTitle)
                    <h1 class="font-black leading-[1.1] text-white tracking-tight {{ ($settings->titleFontSize ?? 'normal') === 'xlarge' ? 'text-5xl sm:text-7xl md:text-8xl' : (($settings->titleFontSize ?? 'normal') === 'large' ? 'text-4xl sm:text-6xl md:text-7xl' : 'text-3xl sm:text-5xl md:text-6xl') }}">
                        @php
                            $titleWords = explode(' ', $settings->heroTitle);
                            $lastWord = count($titleWords) > 1 ? array_pop($titleWords) : '';
                            $firstPart = implode(' ', $titleWords);
                        @endphp
                        {{ $firstPart }} <span class="gradient-text">{{ $lastWord }}</span>
                    </h1>
                    @endif

                    @if($settings->heroSubtitle)
                    <p class="text-sm sm:text-base text-brand-gray-light/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                        {{ $settings->heroSubtitle }}
                    </p>
                    @endif

                    @if($settings->heroButtonText)
                    <div class="pt-2 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <button 
                            onclick="document.getElementById('catalog-section').scrollIntoView({ behavior: 'smooth' })"
                            class="btn-magenta btn-radius px-8 py-4 text-xs font-black uppercase tracking-widest cursor-pointer shadow-lg flex items-center justify-center gap-2"
                        >
                            <span>{{ $settings->heroButtonText }}</span>
                            <i data-lucide="arrow-down" class="w-4 h-4"></i>
                        </button>
                    </div>
                    @endif
                </div>

                <!-- Right visual hero image -->
                @if($settings->heroImageUrl)
                <div class="lg:w-2/5 w-full">
                    <div class="relative overflow-hidden max-w-[420px] mx-auto rounded-3xl shadow-2xl border border-white/10 shadow-[0_0_50px_rgba(220,38,38,0.15)] group">
                        <img 
                            src="{{ $settings->heroImageUrl }}" 
                            alt="Hero"
                            class="w-full h-auto max-h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
                @endif

            </div>
            @endif
        </section>
        @endif

        <!-- CATALOG & CATEGORIES SECTION -->
        <section id="catalog-section" class="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
            <div class="max-w-7xl mx-auto space-y-12">
                
                <!-- Section Title -->
                <div class="text-center space-y-3">
                    <h2 class="font-extrabold text-white tracking-tight {{ ($settings->sectionTitleFontSize ?? 'normal') === 'xlarge' ? 'text-4xl sm:text-6xl' : (($settings->sectionTitleFontSize ?? 'normal') === 'large' ? 'text-3xl sm:text-5xl' : 'text-2xl sm:text-4xl') }}">
                        {{ $settings->headerTitle ?: ($settings->siteName ?: 'Catálogo de Produtos') }}
                    </h2>
                    @if($settings->catalogSubtitle)
                        <p class="text-brand-gray-light/60 max-w-lg mx-auto text-xs sm:text-sm">
                            {{ $settings->catalogSubtitle }}
                        </p>
                    @endif
                </div>

                <!-- Instant Search Bar & Filter Controls -->
                <div class="max-w-xl mx-auto w-full space-y-3">
                    <div class="relative flex items-center group">
                        <div class="absolute left-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-brand-magenta transition-colors">
                            <i data-lucide="search" class="w-4 h-4"></i>
                        </div>
                        <input 
                            type="text" 
                            id="catalog-search-input" 
                            oninput="handleCatalogSearch(this.value)"
                            placeholder="Buscar curso por título, matéria ou concurso..." 
                            class="w-full bg-[#121212]/90 backdrop-blur-md border border-white/10 hover:border-white/20 focus:border-brand-magenta focus:ring-2 focus:ring-brand-magenta/25 rounded-2xl pl-11 pr-20 py-3.5 text-xs sm:text-sm text-white placeholder-white/40 outline-none transition-all shadow-inner"
                        />
                        <div class="absolute right-3.5 flex items-center gap-1.5">
                            <kbd class="hidden sm:inline-block text-[10px] text-white/30 border border-white/10 px-1.5 py-0.5 rounded bg-white/5 font-mono select-none" title="Pressione / para pesquisar">/</kbd>
                            <button 
                                id="catalog-search-clear" 
                                onclick="clearCatalogSearch()" 
                                class="hidden p-1 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                                title="Limpar busca"
                            >
                                <i data-lucide="x" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Search feedback / counter -->
                    <div class="flex items-center justify-between px-2 text-[11px] text-white/50">
                        <div id="search-results-counter" class="hidden text-brand-light-magenta font-semibold flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-brand-magenta animate-pulse"></span>
                            <span id="search-counter-text">0 cursos encontrados</span>
                        </div>
                        <div class="text-white/40 ml-auto flex items-center gap-1 text-[11px]">
                            <span>{{ count($products) }} cursos disponíveis</span>
                        </div>
                    </div>
                </div>

                <!-- Category Filter Pills -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <div class="text-xs font-bold text-white/40 flex items-center gap-1.5 uppercase tracking-wider shrink-0 mr-1">
                        <i data-lucide="filter" class="w-3.5 h-3.5 text-brand-magenta"></i> Categorias:
                    </div>

                    <div class="flex flex-wrap items-center justify-center gap-2 max-w-full overflow-x-auto pb-2" id="category-filters-container">
                        <button 
                            onclick="filterCategory('Todos', this)" 
                            class="category-btn active px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer bg-brand-magenta text-white border-brand-magenta shadow-[0_0_12px_rgba(220,38,38,0.3)]"
                        >
                            Todos
                        </button>
                        @foreach($categories as $cat)
                            <button 
                                onclick="filterCategory('{{ $cat }}', this)" 
                                class="category-btn px-4 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer bg-[#121212] text-brand-gray-light/70 border-white/10 hover:border-brand-magenta/40 hover:text-white"
                            >
                                {{ $cat }}
                            </button>
                        @endforeach
                    </div>
                </div>

                <!-- Products Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="products-grid">
                    @forelse($products as $product)
                        <div 
                            class="product-card glass-card p-5 rounded-2xl flex flex-col justify-between relative group cursor-pointer"
                            data-category="{{ $product->category }}"
                            data-title="{{ strtolower($product->title) }}"
                            data-desc="{{ strtolower($product->description . ' ' . $product->longDescription) }}"
                            data-product="{{ json_encode($product) }}"
                            onclick="openProductModal({{ json_encode($product) }})"
                        >
                            <!-- Badge -->
                            @if($product->badge)
                                <div class="absolute top-3.5 right-3.5 z-10 bg-brand-magenta text-white font-extrabold text-[9px] uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md">
                                    {{ $product->badge }}
                                </div>
                            @endif

                            <div>
                                <!-- Image with Orientation -->
                                <div class="w-full bg-[#070707] rounded-xl overflow-hidden mb-4 border border-white/5 flex items-center justify-center relative aspect-square">
                                    @if($product->imageUrl)
                                        <img 
                                            src="{{ $product->imageUrl }}" 
                                            alt="{{ $product->title }}" 
                                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';"
                                        />
                                        <div class="hidden flex-col items-center justify-center text-white/20 p-6">
                                            <i data-lucide="package" class="w-10 h-10 mb-2 text-brand-magenta/40"></i>
                                            <span class="text-[10px] font-bold uppercase tracking-wider">Curso</span>
                                        </div>
                                    @else
                                        <div class="flex flex-col items-center justify-center text-white/20 p-6">
                                            <i data-lucide="package" class="w-10 h-10 mb-2 text-brand-magenta/40"></i>
                                            <span class="text-[10px] font-bold uppercase tracking-wider">Curso</span>
                                        </div>
                                    @endif
                                </div>

                                <!-- Category Tag -->
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-brand-magenta/10 border border-brand-magenta/30 text-brand-light-magenta">
                                        {{ $product->category }}
                                    </span>
                                </div>

                                <!-- Title -->
                                <h3 class="text-base font-bold text-white leading-snug group-hover:text-brand-light-magenta transition-colors line-clamp-2 mb-2">
                                    {{ $product->title }}
                                </h3>

                                <!-- Description snippet -->
                                @if($product->description)
                                    <p class="text-xs text-brand-gray-light/60 line-clamp-2 leading-relaxed mb-4 font-light">
                                        {{ $product->description }}
                                    </p>
                                @endif
                            </div>

                            <!-- Footer Price & Buttons -->
                            <div class="pt-3 border-t border-white/5 space-y-3">
                                <div>
                                    <span class="text-[10px] uppercase font-bold text-white/40 tracking-wider block">
                                        {{ $product->priceLabel ?: ($settings->priceLabel ?: 'Investimento') }}
                                    </span>
                                    <div class="flex items-baseline gap-2 mt-0.5">
                                        @if($product->originalPrice)
                                            <span class="text-xs text-white/40 line-through font-medium">{{ $product->originalPrice }}</span>
                                        @endif
                                        <span class="text-brand-magenta font-black text-xl tracking-tight">{{ $product->promoPrice }}</span>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-2" onclick="event.stopPropagation()">
                                    <button 
                                        onclick="addToCart({{ json_encode($product) }})"
                                        class="py-2.5 px-2 bg-brand-magenta/10 hover:bg-brand-magenta/25 border border-brand-magenta/30 text-brand-light-magenta hover:text-white rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                                        title="Adicionar ao Carrinho"
                                    >
                                        <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
                                        <span>+ Carrinho</span>
                                    </button>

                                    <button 
                                        onclick="directBuy({{ json_encode($product) }})"
                                        class="btn-magenta py-2.5 px-2 rounded-lg text-[11px] font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer"
                                    >
                                        <span>Comprar</span>
                                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    @empty
                        <div class="col-span-full text-center py-16 bg-[#121212] border border-white/5 rounded-2xl max-w-md mx-auto space-y-4">
                            <i data-lucide="sparkles" class="w-10 h-10 text-brand-magenta/30 mx-auto"></i>
                            <h3 class="text-base font-bold text-white">Nenhum produto cadastrado nesta categoria</h3>
                            <p class="text-brand-gray-light/50 text-xs px-6">
                                Adicione produtos no painel de administração ou clique em Sincronizar com o Getfy.
                            </p>
                        </div>
                    @endforelse
                </div>

                <!-- Dynamic Empty State for Search / Filter -->
                <div id="catalog-empty-search" class="hidden flex-col items-center justify-center text-center py-16 px-4 bg-[#121212]/60 border border-white/5 rounded-2xl max-w-md mx-auto space-y-4">
                    <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
                        <i data-lucide="search-x" class="w-7 h-7 text-brand-magenta"></i>
                    </div>
                    <div class="space-y-1">
                        <h3 class="text-base font-bold text-white">Nenhum curso encontrado</h3>
                        <p class="text-xs text-white/50 max-w-sm">
                            Não encontramos resultados para <span id="empty-search-term" class="text-brand-light-magenta font-semibold"></span>.
                        </p>
                    </div>
                    <button onclick="resetAllCatalogFilters()" class="px-5 py-2.5 rounded-xl bg-brand-magenta/15 hover:bg-brand-magenta/25 border border-brand-magenta/30 text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer">
                        <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                        <span>Limpar Filtros e Ver Todos</span>
                    </button>
                </div>

            </div>
        </section>

        <!-- ABOUT SECTION ("QUEM SOU EU") -->
        @if($settings->aboutText || $settings->aboutTitle)
            <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
                <div class="max-w-5xl mx-auto">
                    <div class="flex flex-col md:flex-row items-center gap-12">
                        
                        @if($settings->aboutImageUrl)
                            <div class="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-[#121212] border border-brand-magenta/20 shadow-[0_0_30px_rgba(220,38,38,0.15)] shrink-0 group">
                                <img 
                                    src="{{ $settings->aboutImageUrl }}" 
                                    alt="{{ $settings->aboutTitle ?: 'Mentor' }}" 
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        @endif

                        <div class="flex-grow space-y-4 text-center md:text-left">
                            <span class="inline-block px-3.5 py-1 rounded-full bg-brand-magenta/10 border border-brand-magenta/30 text-brand-light-magenta text-[10px] font-black tracking-widest uppercase">
                                Conheça o Mentor
                            </span>
                            <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                                {{ $settings->aboutTitle ?: 'Quem Sou Eu' }}
                            </h2>
                            <div class="text-sm sm:text-base text-brand-gray-light/75 leading-relaxed font-light whitespace-pre-line">
                                {{ $settings->aboutText }}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        @endif

        <!-- APPROVALS & FEEDBACK SECTION -->
        @if(count($approvals) > 0)
            <section id="approvals" class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
                <div class="max-w-7xl mx-auto space-y-12">
                    
                    <div class="text-center space-y-3">
                        @if($settings->approvalsBadge)
                            <span class="inline-block px-3.5 py-1 rounded-full bg-brand-magenta/10 border border-brand-magenta/30 text-brand-light-magenta text-[10px] font-black tracking-widest uppercase">
                                {{ $settings->approvalsBadge }}
                            </span>
                        @endif
                        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                            {{ $settings->approvalsTitle ?: 'Aprovações & Depoimentos' }}
                        </h2>
                        @if($settings->approvalsSubtitle)
                            <p class="text-brand-gray-light/50 max-w-lg mx-auto text-xs sm:text-sm">
                                {{ $settings->approvalsSubtitle }}
                            </p>
                        @endif
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        @foreach($approvals as $approval)
                            <div 
                                onclick="openLightbox('{{ $approval->imageUrl }}')"
                                class="rounded-2xl overflow-hidden border border-white/10 bg-[#121212] aspect-[4/5] relative group cursor-pointer hover:border-brand-magenta/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                            >
                                <img 
                                    src="{{ $approval->imageUrl }}" 
                                    alt="Depoimento / Aprovado" 
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onerror="this.src='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=350'"
                                />
                                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <i data-lucide="zoom-in" class="w-8 h-8 text-brand-magenta"></i>
                                </div>
                            </div>
                        @endforeach
                    </div>

                </div>
            </section>
        @endif

        <!-- FAQ ACCORDION SECTION -->
        @if(count($faqs) > 0)
            <section id="faq" class="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
                <div class="max-w-3xl mx-auto space-y-10">
                    <div class="text-center space-y-2">
                        <span class="text-[10px] font-black tracking-widest uppercase text-brand-magenta">Dúvidas Frequentes</span>
                        <h2 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            {{ $settings->faqTitle ?: 'Perguntas Frequentes' }}
                        </h2>
                    </div>

                    <div class="space-y-3">
                        @foreach($faqs as $index => $faq)
                            <div class="border border-white/5 bg-[#121212] rounded-xl overflow-hidden transition-colors">
                                <button 
                                    onclick="toggleFaq({{ $index }})" 
                                    class="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 text-white font-bold text-sm sm:text-base hover:text-brand-light-magenta transition-colors cursor-pointer"
                                >
                                    <span>{{ $faq->question }}</span>
                                    <i data-lucide="chevron-down" id="faq-chevron-{{ $index }}" class="w-5 h-5 text-brand-magenta transition-transform duration-300"></i>
                                </button>
                                <div id="faq-answer-{{ $index }}" class="hidden px-4 sm:px-5 pb-5 text-xs sm:text-sm text-brand-gray-light/70 font-light leading-relaxed whitespace-pre-line border-t border-white/5 pt-3">
                                    {{ $faq->answer }}
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
        @endif

    </main>

    <!-- FOOTER -->
    <footer class="bg-[#0a0a0a] py-12 border-t border-white/5 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div class="flex flex-col md:flex-row items-center gap-4">
                @if($settings->logoUrl)
                    <img src="{{ $settings->logoUrl }}" alt="{{ $settings->siteName }}" class="h-8 md:h-10 w-auto object-contain">
                @endif
                <p class="text-brand-gray-light/50 font-medium max-w-sm">
                    {{ $settings->footerText ?: ('© ' . date('Y') . ' ' . ($settings->siteName ?: config('app.name')) . '. Todos os direitos reservados.') }}
                </p>
            </div>

            <div class="flex flex-wrap justify-center gap-6 text-brand-gray-light/50 font-semibold tracking-wider uppercase items-center">
                @if($settings->globalWhatsapp)
                    <a href="https://wa.me/{{ preg_replace('/[^0-9]/', '', $settings->globalWhatsapp) }}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-full border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center gap-1.5 text-xs font-bold">
                        <i data-lucide="message-square" class="w-3.5 h-3.5"></i> CONTATO
                    </a>
                @endif
                @if($settings->aboutText || $settings->aboutTitle)
                    <a href="#about" class="hover:text-brand-magenta transition-colors">Quem sou eu</a>
                @endif
                @if(count($approvals) > 0)
                    <a href="#approvals" class="hover:text-brand-magenta transition-colors">Aprovações</a>
                @endif
                @if(count($faqs) > 0)
                    <a href="#faq" class="hover:text-brand-magenta transition-colors">FAQ</a>
                @endif
            </div>
        </div>
    </footer>

    <!-- ============================================== -->
    <!-- MODALS & DRAWERS                              -->
    <!-- ============================================== -->

    <!-- 1. PRODUCT DETAILS MODAL -->
    <div id="product-detail-modal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-md items-center justify-center p-4 overflow-y-auto">
        <div class="bg-[#0f0f0f] border border-brand-magenta/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto">
            <button onclick="closeProductModal()" class="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/70 hover:text-white hover:bg-brand-magenta transition-all z-10">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-2/5 bg-[#070707] flex items-center justify-center border-r border-white/5 p-4">
                    <img id="modal-product-image" src="" alt="" class="w-full h-auto max-h-[60vh] object-contain rounded-xl">
                </div>

                <div class="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-2 mb-3">
                            <span id="modal-product-category" class="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-brand-magenta/10 border border-brand-magenta/30 text-brand-light-magenta"></span>
                            <span id="modal-product-badge" class="hidden text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-brand-magenta text-white"></span>
                        </div>

                        <h2 id="modal-product-title" class="text-2xl font-black text-white leading-tight mb-4"></h2>
                        <div id="modal-product-description" class="text-brand-gray-light/80 text-sm font-light leading-relaxed mb-6 whitespace-pre-line"></div>
                    </div>

                    <div class="pt-6 border-t border-white/5">
                        <div class="flex items-baseline gap-2 mb-4">
                            <span id="modal-product-original-price" class="text-xs text-white/40 line-through"></span>
                            <span id="modal-product-promo-price" class="text-brand-magenta font-black text-2xl tracking-tight"></span>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <button id="modal-btn-add-cart" class="py-3 px-4 rounded-xl border border-brand-magenta/40 bg-brand-magenta/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-magenta/20 transition-all flex items-center justify-center gap-2">
                                <i data-lucide="shopping-cart" class="w-4 h-4 text-brand-magenta"></i> Adicionar ao Carrinho
                            </button>
                            <button id="modal-btn-buy-now" class="btn-magenta py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg">
                                Comprar Agora <i data-lucide="arrow-right" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. CART DRAWER (GAVETA LATERAL DO CARRINHO) -->
    <div id="cart-drawer-overlay" class="fixed inset-0 z-50 hidden bg-black/70 backdrop-blur-sm transition-opacity" onclick="closeCartDrawer()">
        <div class="fixed top-0 right-0 h-full w-full max-w-md bg-[#111111] border-l border-white/10 shadow-2xl flex flex-col" onclick="event.stopPropagation()">
            
            <!-- Drawer Header -->
            <div class="p-5 border-b border-white/10 flex justify-between items-center bg-[#0c0c0c]">
                <div class="flex items-center gap-2.5">
                    <i data-lucide="shopping-cart" class="w-5 h-5 text-brand-magenta"></i>
                    <h3 class="text-base font-black text-white uppercase tracking-wider">Seu Carrinho</h3>
                    <span id="drawer-items-count" class="text-xs bg-brand-magenta/20 text-brand-light-magenta px-2 py-0.5 rounded-full font-bold">0</span>
                </div>
                <button onclick="closeCartDrawer()" class="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <!-- Drawer Items List -->
            <div id="cart-items-container" class="flex-grow overflow-y-auto p-5 space-y-4">
                <!-- Injected via JavaScript -->
            </div>

            <!-- Drawer Footer / Checkout CTA -->
            <div class="p-5 border-t border-white/10 bg-[#0c0c0c] space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-xs uppercase font-bold text-white/50 tracking-wider">Total do Pedido:</span>
                    <span id="cart-total-price" class="text-2xl font-black text-brand-magenta tracking-tight">R$ 0,00</span>
                </div>

                <button 
                    id="btn-drawer-checkout"
                    onclick="openCheckoutModal()"
                    class="btn-magenta w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.35)] cursor-pointer"
                >
                    <span>Finalizar Compra</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>

                <div class="flex justify-between items-center text-[11px] text-white/40 pt-1">
                    <button onclick="clearCart()" class="hover:text-red-400 transition-colors">Limpar Carrinho</button>
                    <button onclick="closeCartDrawer()" class="hover:text-white transition-colors">Continuar Comprando</button>
                </div>
            </div>

        </div>
    </div>

    <!-- 3. CHECKOUT MODAL (LAYOUT COMPLETO DE CHECKOUT COM O PREÇO DE TUDO DO CARRINHO) -->
    <div id="checkout-modal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md items-center justify-center p-4 overflow-y-auto">
        <div class="bg-[#101010] border border-brand-magenta/30 rounded-2xl w-full max-w-4xl shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
            
            <!-- Checkout Header -->
            <div class="p-5 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a] sticky top-0 z-20">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-brand-magenta/20 border border-brand-magenta/50 flex items-center justify-center">
                        <i data-lucide="shield-check" class="w-4 h-4 text-brand-magenta"></i>
                    </div>
                    <div>
                        <h2 class="text-base sm:text-lg font-black text-white">Checkout Seguro</h2>
                        <p class="text-[11px] text-white/50">Ambiente criptografado com SSL 256-bit</p>
                    </div>
                </div>
                <button onclick="closeCheckoutModal()" class="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <div class="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <!-- Left Column: Customer Form & Payment Method (7 cols) -->
                <div class="lg:col-span-7 space-y-6">
                    
                    <!-- Customer Information -->
                    <div class="bg-[#141414] p-5 rounded-xl border border-white/5 space-y-4">
                        <h4 class="text-xs font-black uppercase tracking-wider text-brand-light-magenta flex items-center gap-2">
                            <i data-lucide="user" class="w-4 h-4 text-brand-magenta"></i> 1. Dados do Comprador
                        </h4>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="sm:col-span-2">
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Nome Completo *</label>
                                <input type="text" id="chk-name" placeholder="Ex: João da Silva" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" required />
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">E-mail para Acesso *</label>
                                <input type="email" id="chk-email" placeholder="seu@email.com" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" required />
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">WhatsApp / Celular *</label>
                                <input type="tel" id="chk-phone" placeholder="(99) 99999-9999" maxlength="15" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" required />
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">CPF *</label>
                                <input type="text" id="chk-cpf" placeholder="000.000.000-00" maxlength="14" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" required />
                            </div>
                        </div>
                    </div>

                    <!-- Payment Methods Selection -->
                    <div class="bg-[#141414] p-5 rounded-xl border border-white/5 space-y-4">
                        <h4 class="text-xs font-black uppercase tracking-wider text-brand-light-magenta flex items-center gap-2">
                            <i data-lucide="credit-card" class="w-4 h-4 text-brand-magenta"></i> 2. Forma de Pagamento
                        </h4>

                        <div class="grid grid-cols-3 gap-2">
                            <button type="button" onclick="selectPaymentMethod('pix', this)" class="pay-method-btn active py-3 px-2 rounded-xl border border-brand-magenta bg-brand-magenta/15 text-white text-center transition-all cursor-pointer">
                                <i data-lucide="zap" class="w-5 h-5 text-brand-magenta mx-auto mb-1"></i>
                                <span class="text-[11px] font-black uppercase tracking-wider block">PIX</span>
                                <span class="text-[9px] text-emerald-400 font-bold block">Imediato</span>
                            </button>

                            <button type="button" onclick="selectPaymentMethod('card', this)" class="pay-method-btn py-3 px-2 rounded-xl border border-white/10 bg-[#1c1c1c] text-white/70 text-center transition-all cursor-pointer hover:border-brand-magenta/40">
                                <i data-lucide="credit-card" class="w-5 h-5 text-white/60 mx-auto mb-1"></i>
                                <span class="text-[11px] font-black uppercase tracking-wider block">Cartão</span>
                                <span class="text-[9px] text-white/40 block">Até 12x</span>
                            </button>

                            <button type="button" onclick="selectPaymentMethod('boleto', this)" class="pay-method-btn py-3 px-2 rounded-xl border border-white/10 bg-[#1c1c1c] text-white/70 text-center transition-all cursor-pointer hover:border-brand-magenta/40">
                                <i data-lucide="file-text" class="w-5 h-5 text-white/60 mx-auto mb-1"></i>
                                <span class="text-[11px] font-black uppercase tracking-wider block">Boleto</span>
                                <span class="text-[9px] text-white/40 block">Até 72h</span>
                            </button>
                        </div>

                        <!-- Pix description -->
                        <div id="payment-pix-details" class="p-3.5 rounded-lg bg-[#1c1c1c] border border-white/5 text-xs text-brand-gray-light/70 space-y-1.5">
                            <p class="font-bold text-white flex items-center gap-1.5">
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Liberação Imediata
                            </p>
                            <p class="text-[11px]">Ao clicar em pagar, geramos o QR Code e o código Pix Copia e Cola para pagamento rápido pelo seu aplicativo de banco.</p>
                        </div>

                        <!-- Card details (if card selected) -->
                        <div id="payment-card-details" class="hidden space-y-3">
                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Número do Cartão *</label>
                                <input type="text" id="chk-card-number" placeholder="0000 0000 0000 0000" maxlength="19" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" />
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Validade (MM/AA) *</label>
                                    <input type="text" id="chk-card-expiry" placeholder="MM/AA" maxlength="5" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" />
                                </div>
                                <div>
                                    <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">CVV *</label>
                                    <input type="text" id="chk-card-cvv" placeholder="123" maxlength="4" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Nome no Cartão *</label>
                                <input type="text" id="chk-card-holder" placeholder="NOME IMPRESSO NO CARTÃO" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/20 focus:border-brand-magenta outline-none" />
                            </div>
                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Opções de Parcelamento *</label>
                                <select id="chk-card-installments" onchange="onInstallmentChanged()" class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white focus:border-brand-magenta outline-none cursor-pointer">
                                    <option value="1">1x à vista (sem juros)</option>
                                </select>
                            </div>
                        </div>

                        <!-- Boleto details (if boleto selected) -->
                        <div id="payment-boleto-details" class="hidden p-3.5 rounded-lg bg-[#1c1c1c] border border-white/5 text-xs text-brand-gray-light/70 space-y-1">
                            <p class="font-bold text-white">Boleto Bancário</p>
                            <p class="text-[11px]">Compensação em até 72 horas úteis. O comprovante é enviado no seu e-mail.</p>
                        </div>

                    </div>

                </div>

                <!-- Right Column: Order Summary (5 cols) -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-[#141414] p-5 rounded-xl border border-white/5 space-y-4 sticky top-24">
                        <h4 class="text-xs font-black uppercase tracking-wider text-brand-light-magenta flex items-center gap-2">
                            <i data-lucide="shopping-bag" class="w-4 h-4 text-brand-magenta"></i> Resumo do Pedido
                        </h4>

                        <!-- Items preview list in checkout -->
                        <div id="checkout-items-preview" class="space-y-3 max-h-56 overflow-y-auto pr-1">
                            <!-- Injected dynamically -->
                        </div>

                        <div class="border-t border-white/10 pt-4 space-y-2">
                            <div class="flex justify-between text-xs text-white/60">
                                <span>Subtotal dos itens:</span>
                                <span id="checkout-subtotal" class="font-bold text-white">R$ 0,00</span>
                            </div>
                            <div class="flex justify-between items-baseline pt-2 border-t border-white/10">
                                <span class="text-xs uppercase font-black text-white tracking-wider">Total a Pagar:</span>
                                <span id="checkout-total-price" class="text-2xl font-black text-brand-magenta tracking-tight">R$ 0,00</span>
                            </div>
                        </div>

                        <!-- Action Submit Button -->
                        <button 
                            id="btn-submit-order"
                            onclick="submitOrder()"
                            class="btn-magenta w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(220,38,38,0.4)] cursor-pointer"
                        >
                            <span>Pagar Agora</span>
                            <i data-lucide="lock" class="w-4 h-4"></i>
                        </button>

                        <div class="space-y-1.5 pt-2 text-[10px] text-white/40 text-center">
                            <p class="flex items-center justify-center gap-1.5">
                                <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> Garantia de 7 dias ou seu dinheiro de volta
                            </p>
                            <p class="flex items-center justify-center gap-1.5">
                                <i data-lucide="shield" class="w-3.5 h-3.5 text-brand-magenta"></i> Pagamento seguro com checkout Getfy
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- RESULT PAYMENT VIEW (EX: PIX GENERATED) -->
            <div id="checkout-result-view" class="hidden p-6 md:p-10 text-center space-y-6">
                <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                    <i data-lucide="check-circle" class="w-8 h-8"></i>
                </div>
                
                <div>
                    <h3 class="text-2xl font-black text-white">Pedido Criado com Sucesso!</h3>
                    <p class="text-xs text-white/60 mt-1">Escaneie o QR Code abaixo ou utilize o Pix Copia e Cola para pagar.</p>
                </div>

                <div class="bg-[#141414] p-6 rounded-2xl max-w-sm mx-auto border border-brand-magenta/30 space-y-4">
                    <img id="result-pix-qrcode" src="" alt="QR Code PIX" class="w-48 h-48 mx-auto rounded-lg bg-white p-2" />
                    
                    <div class="space-y-1.5">
                        <label class="block text-[10px] font-black uppercase text-white/50 tracking-wider">Pix Copia e Cola</label>
                        <div class="flex gap-2">
                            <input id="result-pix-code" type="text" readonly class="w-full bg-[#1c1c1c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white font-mono" />
                            <button onclick="copyPixCode()" id="btn-copy-pix" class="btn-magenta px-3.5 py-2 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1">
                                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                                <span>Copiar</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center gap-4">
                    <button onclick="window.location.reload()" class="px-6 py-2.5 rounded-full border border-white/10 bg-[#1c1c1c] text-white text-xs font-bold hover:bg-white/10 transition-colors">
                        Voltar para a Vitrine
                    </button>
                </div>
            </div>

        </div>
    </div>

    <!-- 4. LIGHTBOX IMAGE PREVIEW -->
    <div id="lightbox-modal" class="fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md items-center justify-center p-4" onclick="closeLightbox()">
        <img id="lightbox-image" src="" alt="Ampliado" class="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-brand-magenta/30" />
    </div>

    <!-- ============================================== -->
    <!-- JAVASCRIPT STATE MANAGEMENT & ACTIONS          -->
    <!-- ============================================== -->
    <script>
        // Init Lucide
        lucide.createIcons();

        // Carrinho State
        let cart = JSON.parse(localStorage.getItem('vitrine_cart') || '[]');
        let selectedPaymentMethod = 'pix';

        function updateCartBadge() {
            const badge = document.getElementById('cart-counter-badge');
            const drawerCount = document.getElementById('drawer-items-count');
            const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
            if (badge) badge.innerText = totalItems;
            if (drawerCount) drawerCount.innerText = totalItems;
            localStorage.setItem('vitrine_cart', JSON.stringify(cart));
            renderCartItems();
        }

        function parsePrice(priceStr) {
            if (typeof priceStr === 'number') return priceStr;
            const cleaned = String(priceStr).replace(/[^\d,.]/g, '');
            if (cleaned.includes(',') && cleaned.includes('.')) {
                return parseFloat(cleaned.replace(/\./g, '').replace(',', '.'));
            } else if (cleaned.includes(',')) {
                return parseFloat(cleaned.replace(',', '.'));
            }
            return parseFloat(cleaned) || 0;
        }

        function formatCurrency(num) {
            return 'R$ ' + num.toFixed(2).replace('.', ',');
        }

        function addToCart(product) {
            const existing = cart.find(i => i.id === product.id);
            if (existing) {
                existing.quantity = (existing.quantity || 1) + 1;
            } else {
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: parsePrice(product.promoPrice),
                    promoPrice: product.promoPrice,
                    imageUrl: product.imageUrl,
                    category: product.category,
                    quantity: 1
                });
            }
            updateCartBadge();
            openCartDrawer();
        }

        function removeFromCart(productId) {
            cart = cart.filter(i => i.id !== productId);
            updateCartBadge();
        }

        function changeCartQty(productId, delta) {
            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity = (item.quantity || 1) + delta;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                    return;
                }
            }
            updateCartBadge();
        }

        function clearCart() {
            cart = [];
            updateCartBadge();
        }

        function renderCartItems() {
            const container = document.getElementById('cart-items-container');
            const totalPriceEl = document.getElementById('cart-total-price');
            if (!container) return;

            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-16 text-white/40 space-y-3">
                        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto text-brand-magenta/30"></i>
                        <p class="text-xs font-bold uppercase tracking-wider">Seu carrinho está vazio</p>
                        <button onclick="closeCartDrawer()" class="btn-magenta px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                            Escolher Cursos
                        </button>
                    </div>
                `;
                if (totalPriceEl) totalPriceEl.innerText = 'R$ 0,00';
                lucide.createIcons();
                return;
            }

            let total = 0;
            let html = '';

            cart.forEach(item => {
                const lineTotal = (item.price || 0) * (item.quantity || 1);
                total += lineTotal;
                html += `
                    <div class="bg-[#161616] p-3.5 rounded-xl border border-white/5 flex items-center gap-3">
                        <img src="${item.imageUrl}" alt="${item.title}" class="w-14 h-14 object-cover rounded-lg bg-[#070707] shrink-0" onerror="this.style.display='none'">
                        <div class="flex-grow min-w-0">
                            <h4 class="text-xs font-bold text-white truncate">${item.title}</h4>
                            <span class="text-[10px] text-brand-light-magenta block">${item.category || ''}</span>
                            <span class="text-xs font-black text-brand-magenta">${formatCurrency(item.price)}</span>
                        </div>
                        <div class="flex flex-col items-end gap-1.5 shrink-0">
                            <button onclick="removeFromCart('${item.id}')" class="text-white/40 hover:text-red-400 p-1">
                                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                            </button>
                            <div class="flex items-center gap-2 bg-[#0c0c0c] border border-white/10 rounded-lg px-2 py-0.5 text-xs">
                                <button onclick="changeCartQty('${item.id}', -1)" class="hover:text-brand-magenta">-</button>
                                <span class="font-bold text-white">${item.quantity}</span>
                                <button onclick="changeCartQty('${item.id}', 1)" class="hover:text-brand-magenta">+</button>
                            </div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
            if (totalPriceEl) totalPriceEl.innerText = formatCurrency(total);
            lucide.createIcons();
        }

        function openCartDrawer() {
            renderCartItems();
            const drawer = document.getElementById('cart-drawer-overlay');
            if (drawer) drawer.classList.remove('hidden');
        }

        function closeCartDrawer() {
            const drawer = document.getElementById('cart-drawer-overlay');
            if (drawer) drawer.classList.add('hidden');
        }

        window.__PAGARME_INSTALLMENTS__ = @json($pagarmeInstallments ?? []);
        window.__CARD_GATEWAY__ = "{{ $settings->payment_gateways['card'] ?? 'pagarme' }}";

        function getPagarmeInstallmentRate(n) {
            const cfg = window.__PAGARME_INSTALLMENTS__;
            const rates = cfg?.rates && typeof cfg.rates === 'object' ? cfg.rates : {};
            return Math.min(99.9999, Math.max(0, Number(rates[n] ?? rates[String(n)] ?? 0) || 0));
        }

        function isPagarmeFeePassedToCustomer(n) {
            const cfg = window.__PAGARME_INSTALLMENTS__;
            return Number(n) === 1
                ? Boolean(cfg?.pass_1x_fee_to_customer)
                : Boolean(cfg?.enabled);
        }

        function getPagarmeProducerAssumption() {
            const cfg = window.__PAGARME_INSTALLMENTS__;
            return Math.min(100, Math.max(0, Number(cfg?.producer_fee_assumption_percent) || 0));
        }

        function getPagarmeSaleFeeAmount(n) {
            if (Number(n) < 2) return 0;
            const cfg = window.__PAGARME_INSTALLMENTS__;
            return Math.max(0, Number(cfg?.sale_fee_amount) || 0);
        }

        function calculateInstallmentTotal(n, base) {
            const isPagarme = (window.__CARD_GATEWAY__ || 'pagarme') === 'pagarme';
            if (!isPagarme) {
                return base;
            }
            const rate = getPagarmeInstallmentRate(n);
            const passFee = isPagarmeFeePassedToCustomer(n);
            const fixedFee = getPagarmeSaleFeeAmount(n);
            const assumption = getPagarmeProducerAssumption();
            const grossedUp = (passFee && rate > 0)
                ? (base * (1 - (assumption / 100))) / (1 - (rate / 100))
                : base;
            return Math.round((grossedUp + fixedFee) * 100) / 100;
        }

        function getCartSubtotal() {
            return cart.reduce((acc, item) => acc + ((item.price || 0) * (item.quantity || 1)), 0);
        }

        function updateCheckoutTotalPrice() {
            const totalEl = document.getElementById('checkout-total-price');
            if (!totalEl) return;
            const baseTotal = getCartSubtotal();
            if (selectedPaymentMethod === 'card') {
                const n = parseInt(document.getElementById('chk-card-installments')?.value) || 1;
                const finalTotal = calculateInstallmentTotal(n, baseTotal);
                totalEl.innerText = formatCurrency(finalTotal);
            } else {
                totalEl.innerText = formatCurrency(baseTotal);
            }
        }

        function onInstallmentChanged() {
            updateCheckoutTotalPrice();
        }

        // DIRECT BUY (Single Product)
        function directBuy(product) {
            addToCart(product);
            closeCartDrawer();
            openCheckoutModal();
        }

        // CHECKOUT MODAL
        function openCheckoutModal() {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio.');
                return;
            }
            closeCartDrawer();

            // Populate checkout items preview
            const previewContainer = document.getElementById('checkout-items-preview');
            const subtotalEl = document.getElementById('checkout-subtotal');

            let total = 0;
            let previewHtml = '';

            cart.forEach(item => {
                const lineTotal = (item.price || 0) * (item.quantity || 1);
                total += lineTotal;
                previewHtml += `
                    <div class="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                        <div class="flex items-center gap-2 min-w-0 pr-2">
                            <span class="text-brand-magenta font-bold">${item.quantity}x</span>
                            <span class="text-white truncate">${item.title}</span>
                        </div>
                        <span class="font-bold text-white shrink-0">${formatCurrency(lineTotal)}</span>
                    </div>
                `;
            });

            if (previewContainer) previewContainer.innerHTML = previewHtml;
            if (subtotalEl) subtotalEl.innerText = formatCurrency(total);

            // Populate installment options (1x - 12x) with Pagar.me settings
            const installmentsSelect = document.getElementById('chk-card-installments');
            if (installmentsSelect) {
                let optionsHtml = '';
                const minInstallmentAmount = Number(window.__PAGARME_INSTALLMENTS__?.minimum_installment_amount) || 2;

                for (let i = 1; i <= 12; i++) {
                    const installmentTotal = calculateInstallmentTotal(i, total);
                    const installmentVal = installmentTotal / i;

                    if (i > 1 && installmentVal < minInstallmentAmount) {
                        break;
                    }

                    const hasInterest = installmentTotal > (total + 0.005);
                    const interestLabel = hasInterest 
                        ? `(Total: ${formatCurrency(installmentTotal)})` 
                        : (i === 1 ? '(à vista)' : 'sem juros');

                    optionsHtml += `<option value="${i}">${i}x de ${formatCurrency(installmentVal)} ${interestLabel}</option>`;
                }
                installmentsSelect.innerHTML = optionsHtml;
                installmentsSelect.value = "1";
            }

            updateCheckoutTotalPrice();

            const modal = document.getElementById('checkout-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        }

        function closeCheckoutModal() {
            const modal = document.getElementById('checkout-modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }

        function selectPaymentMethod(method, btn) {
            selectedPaymentMethod = method;
            document.querySelectorAll('.pay-method-btn').forEach(b => {
                b.classList.remove('active', 'border-brand-magenta', 'bg-brand-magenta/15');
                b.classList.add('border-white/10', 'bg-[#1c1c1c]');
            });
            btn.classList.add('active', 'border-brand-magenta', 'bg-brand-magenta/15');
            btn.classList.remove('border-white/10', 'bg-[#1c1c1c]');

            document.getElementById('payment-pix-details').classList.toggle('hidden', method !== 'pix');
            document.getElementById('payment-card-details').classList.toggle('hidden', method !== 'card');
            document.getElementById('payment-boleto-details').classList.toggle('hidden', method !== 'boleto');

            updateCheckoutTotalPrice();
        }

        async function submitOrder() {
            const name = document.getElementById('chk-name').value.trim();
            const email = document.getElementById('chk-email').value.trim();
            const phone = document.getElementById('chk-phone').value.trim();
            const cpfRaw = document.getElementById('chk-cpf').value.trim();
            const cleanCpf = cpfRaw.replace(/\D/g, '');

            if (!name) {
                alert('Por favor, informe seu nome completo.');
                document.getElementById('chk-name').focus();
                return;
            }

            if (!email || !email.includes('@')) {
                alert('Por favor, informe um e-mail válido para receber o acesso.');
                document.getElementById('chk-email').focus();
                return;
            }

            if (!cleanCpf || cleanCpf.length !== 11) {
                alert('O CPF é obrigatório. Por favor, digite um CPF válido com 11 dígitos.');
                document.getElementById('chk-cpf').focus();
                return;
            }

            const installments = selectedPaymentMethod === 'card'
                ? (parseInt(document.getElementById('chk-card-installments')?.value) || 1)
                : 1;

            if (selectedPaymentMethod === 'card') {
                const cardNum = (document.getElementById('chk-card-number')?.value || '').replace(/\D/g, '');
                const cardExp = (document.getElementById('chk-card-expiry')?.value || '').trim();
                const cardCvv = (document.getElementById('chk-card-cvv')?.value || '').trim();
                const cardHolder = (document.getElementById('chk-card-holder')?.value || '').trim();

                if (cardNum.length < 13 || cardExp.length < 5 || cardCvv.length < 3 || !cardHolder) {
                    alert('Por favor, preencha todos os dados do cartão de crédito.');
                    return;
                }
            }

            const btn = document.getElementById('btn-submit-order');
            btn.disabled = true;
            btn.innerHTML = `<span>Processando pedido...</span>`;

            try {
                const response = await fetch('{{ url("/vitrine/api/checkout") }}', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    body: JSON.stringify({
                        customer: { name, email, phone, cpf: cleanCpf },
                        items: cart,
                        payment_method: selectedPaymentMethod,
                        installments: installments
                    })
                });

                const data = await response.json();

                if (!response.ok || !data.success) {
                    alert(data.error || 'Erro ao processar pedido. Tente novamente.');
                    btn.disabled = false;
                    btn.innerHTML = `<span>Pagar Agora</span> <i data-lucide="lock" class="w-4 h-4"></i>`;
                    lucide.createIcons();
                    return;
                }

                // Pedido criado com sucesso!
                clearCart();

                if (selectedPaymentMethod === 'pix' && data.pix) {
                    document.getElementById('result-pix-qrcode').src = data.pix.qrcode;
                    document.getElementById('result-pix-code').value = data.pix.code;
                    document.querySelector('#checkout-modal .grid').classList.add('hidden');
                    document.getElementById('checkout-result-view').classList.remove('hidden');
                } else {
                    alert('Pedido realizado com sucesso! Verifique seu e-mail para acompanhar o acesso.');
                    window.location.reload();
                }

            } catch (err) {
                alert('Erro de conexão com o servidor. Tente novamente.');
            } finally {
                btn.disabled = false;
                btn.innerHTML = `<span>Pagar Agora</span> <i data-lucide="lock" class="w-4 h-4"></i>`;
                lucide.createIcons();
            }
        }

        // Máscaras de entrada (CPF, Telefone, Cartão)
        document.addEventListener('DOMContentLoaded', () => {
            const cpfInput = document.getElementById('chk-cpf');
            if (cpfInput) {
                cpfInput.addEventListener('input', function(e) {
                    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
                    if (v.length > 9) {
                        v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
                    } else if (v.length > 6) {
                        v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
                    } else if (v.length > 3) {
                        v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
                    }
                    e.target.value = v;
                });
            }

            const phoneInput = document.getElementById('chk-phone');
            if (phoneInput) {
                phoneInput.addEventListener('input', function(e) {
                    let v = e.target.value.replace(/\D/g, '').slice(0, 11);
                    if (v.length > 10) {
                        v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
                    } else if (v.length > 6) {
                        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                    } else if (v.length > 2) {
                        v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
                    }
                    e.target.value = v;
                });
            }

            const cardNumInput = document.getElementById('chk-card-number');
            if (cardNumInput) {
                cardNumInput.addEventListener('input', function(e) {
                    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
                    e.target.value = v.replace(/(\d{4})(?=\d)/g, '$1 ');
                });
            }

            const cardExpInput = document.getElementById('chk-card-expiry');
            if (cardExpInput) {
                cardExpInput.addEventListener('input', function(e) {
                    let v = e.target.value.replace(/\D/g, '').slice(0, 4);
                    if (v.length > 2) {
                        v = v.replace(/(\d{2})(\d{1,2})/, '$1/$2');
                    }
                    e.target.value = v;
                });
            }

            const cardCvvInput = document.getElementById('chk-card-cvv');
            if (cardCvvInput) {
                cardCvvInput.addEventListener('input', function(e) {
                    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
                });
            }
        });

        function copyPixCode() {
            const input = document.getElementById('result-pix-code');
            input.select();
            navigator.clipboard.writeText(input.value);
            const btn = document.getElementById('btn-copy-pix');
            btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> <span>Copiado!</span>`;
            lucide.createIcons();
            setTimeout(() => {
                btn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i> <span>Copiar</span>`;
                lucide.createIcons();
            }, 3000);
        }

        // CATEGORY & INSTANT SEARCH FILTER
        let currentCategory = 'Todos';
        let currentSearchQuery = '';

        function applyFilters() {
            const cards = document.querySelectorAll('.product-card');
            let visibleCount = 0;
            const query = currentSearchQuery.trim().toLowerCase();

            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category') || '';
                const cardTitle = card.getAttribute('data-title') || (card.querySelector('h3, h4')?.innerText || '').toLowerCase();
                const cardDesc = card.getAttribute('data-desc') || (card.querySelector('p')?.innerText || '').toLowerCase();
                const cardBadge = (card.querySelector('.uppercase')?.innerText || '').toLowerCase();

                const matchesCategory = (currentCategory === 'Todos' || cardCat === currentCategory);
                const matchesSearch = !query || 
                    cardTitle.includes(query) || 
                    cardCat.toLowerCase().includes(query) || 
                    cardDesc.includes(query) || 
                    cardBadge.includes(query);

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Update counter badge
            const counterBox = document.getElementById('search-results-counter');
            const counterText = document.getElementById('search-counter-text');
            if (counterBox && counterText) {
                if (query || currentCategory !== 'Todos') {
                    counterText.innerText = `${visibleCount} ${visibleCount === 1 ? 'curso encontrado' : 'cursos encontrados'}`;
                    counterBox.classList.remove('hidden');
                } else {
                    counterBox.classList.add('hidden');
                }
            }

            // Empty state
            const emptyState = document.getElementById('catalog-empty-search');
            if (emptyState) {
                if (visibleCount === 0 && cards.length > 0) {
                    emptyState.classList.remove('hidden');
                    emptyState.classList.add('flex');
                    const termEl = document.getElementById('empty-search-term');
                    if (termEl) {
                        termEl.innerText = query ? `"${currentSearchQuery}"` : `a categoria "${currentCategory}"`;
                    }
                } else {
                    emptyState.classList.add('hidden');
                    emptyState.classList.remove('flex');
                }
            }

            lucide.createIcons();
        }

        function handleCatalogSearch(val) {
            currentSearchQuery = val;
            const clearBtn = document.getElementById('catalog-search-clear');
            if (clearBtn) {
                if (val.trim()) {
                    clearBtn.classList.remove('hidden');
                } else {
                    clearBtn.classList.add('hidden');
                }
            }
            applyFilters();
        }

        function clearCatalogSearch() {
            const input = document.getElementById('catalog-search-input');
            if (input) {
                input.value = '';
                input.focus();
            }
            handleCatalogSearch('');
        }

        function resetAllCatalogFilters() {
            clearCatalogSearch();
            const firstCatBtn = document.querySelector('.category-btn');
            if (firstCatBtn) {
                filterCategory('Todos', firstCatBtn);
            }
        }

        function filterCategory(category, btn) {
            currentCategory = category;
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('active', 'bg-brand-magenta', 'text-white', 'border-brand-magenta', 'shadow-[0_0_12px_rgba(220,38,38,0.3)]');
                b.classList.add('bg-[#121212]', 'text-brand-gray-light/70', 'border-white/10');
            });
            if (btn) {
                btn.classList.add('active', 'bg-brand-magenta', 'text-white', 'border-brand-magenta', 'shadow-[0_0_12px_rgba(220,38,38,0.3)]');
                btn.classList.remove('bg-[#121212]', 'text-brand-gray-light/70', 'border-white/10');
            }

            applyFilters();
        }

        // Shortcut: press '/' to focus search input
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                const searchInput = document.getElementById('catalog-search-input');
                if (searchInput) {
                    e.preventDefault();
                    searchInput.focus();
                    searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });

        // PRODUCT MODAL
        function openProductModal(product) {
            const imgEl = document.getElementById('modal-product-image');
            if (product.imageUrl) {
                imgEl.src = product.imageUrl;
                imgEl.style.display = 'block';
            } else {
                imgEl.src = '';
                imgEl.style.display = 'none';
            }
            document.getElementById('modal-product-title').innerText = product.title;
            document.getElementById('modal-product-category').innerText = product.category;
            
            const badgeEl = document.getElementById('modal-product-badge');
            if (product.badge) {
                badgeEl.innerText = product.badge;
                badgeEl.classList.remove('hidden');
            } else {
                badgeEl.classList.add('hidden');
            }

            const descEl = document.getElementById('modal-product-description');
            const desc = product.longDescription || product.description || '';
            descEl.innerText = desc;
            descEl.style.display = desc ? 'block' : 'none';
            document.getElementById('modal-product-promo-price').innerText = product.promoPrice;
            
            const origPriceEl = document.getElementById('modal-product-original-price');
            if (product.originalPrice) {
                origPriceEl.innerText = product.originalPrice;
                origPriceEl.classList.remove('hidden');
            } else {
                origPriceEl.classList.add('hidden');
            }

            document.getElementById('modal-btn-add-cart').onclick = () => {
                addToCart(product);
                closeProductModal();
            };

            document.getElementById('modal-btn-buy-now').onclick = () => {
                directBuy(product);
                closeProductModal();
            };

            const modal = document.getElementById('product-detail-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            lucide.createIcons();
        }

        function closeProductModal() {
            const modal = document.getElementById('product-detail-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // FAQ ACCORDION
        function toggleFaq(index) {
            const ans = document.getElementById('faq-answer-' + index);
            const chevron = document.getElementById('faq-chevron-' + index);
            const isHidden = ans.classList.contains('hidden');
            
            ans.classList.toggle('hidden');
            if (chevron) {
                chevron.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        }

        // LIGHTBOX
        function openLightbox(url) {
            const img = document.getElementById('lightbox-image');
            img.src = url;
            const modal = document.getElementById('lightbox-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeLightbox() {
            const modal = document.getElementById('lightbox-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        // Initial setup
        updateCartBadge();
    </script>
</body>
</html>
