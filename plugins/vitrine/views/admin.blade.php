<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Vitrine | Getfy</title>
    
    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Tailwind CSS CDN -->
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
        }

        body {
            background-color: #070707;
            color: #e2e2e2;
            font-family: 'Inter', sans-serif;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0c0c0c; }
        ::-webkit-scrollbar-thumb { background: #222222; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--color-brand-magenta); }

        .btn-magenta {
            background: var(--color-brand-magenta);
            color: #ffffff;
            font-weight: 700;
            transition: all 0.2s ease;
        }
        .btn-magenta:hover {
            filter: brightness(1.15);
            box-shadow: 0 0 20px rgba(220, 38, 38, 0.35);
        }
    </style>
</head>
<body class="bg-[#070707] text-[#e2e2e2] min-h-screen flex flex-col">

    <!-- TOPBAR -->
    <header class="bg-[#0f0f0f] border-b border-[#1c1c1c] sticky top-0 z-30">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row justify-between items-center gap-4">
            
            <div class="flex items-center gap-3">
                <a href="{{ url('/') }}" class="p-2 rounded-lg bg-[#181818] hover:bg-[#222222] text-white/70 hover:text-white transition-colors" title="Ir para Painel Getfy">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i>
                </a>
                <div>
                    <h1 class="text-base font-black text-white flex items-center gap-2">
                        <span>Vitrine de Cursos</span>
                        <span class="text-[10px] bg-brand-magenta/20 text-brand-light-magenta border border-brand-magenta/40 px-2 py-0.5 rounded-full font-extrabold uppercase">ADM</span>
                    </h1>
                    <p class="text-[11px] text-white/50">Personalização de layout, catálogo de produtos e configurações</p>
                </div>
            </div>

            <div class="flex items-center gap-3">
                @if(!empty($settings->is_maintenance))
                    <div class="px-3 py-1.5 rounded-lg bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-xs font-bold flex items-center gap-1.5 animate-pulse" title="A vitrine pública está offline no momento">
                        <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
                        <span>Em Manutenção</span>
                    </div>
                @endif

                <button 
                    onclick="syncGetfyProducts()" 
                    id="btn-sync-top"
                    class="px-4 py-2 rounded-lg bg-brand-magenta/15 hover:bg-brand-magenta/25 border border-brand-magenta/40 text-brand-light-magenta hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                    title="Puxa os produtos mais recentes cadastrados no Getfy"
                >
                    <i data-lucide="refresh-cw" class="w-3.5 h-3.5" id="sync-icon"></i>
                    <span>Sincronizar do Getfy</span>
                </button>

                <a 
                    href="{{ url('/vitrine') }}" 
                    target="_blank" 
                    class="btn-magenta px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-sm"
                >
                    <span>Ver Vitrine</span>
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
            </div>

        </div>

        <!-- NAVIGATION TABS (6 TABS) -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex space-x-1 overflow-x-auto border-t border-[#181818]">
                <button onclick="switchTab('dashboard', this)" class="nav-tab active px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-brand-magenta text-white bg-[#121212] flex items-center gap-2 transition-all">
                    <i data-lucide="layout-dashboard" class="w-4 h-4 text-brand-magenta"></i> Dashboard
                </button>
                <button onclick="switchTab('products', this)" class="nav-tab px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-transparent text-white/60 hover:text-white flex items-center gap-2 transition-all">
                    <i data-lucide="book-open" class="w-4 h-4"></i> Cursos & Produtos
                </button>
                <button onclick="switchTab('about', this)" class="nav-tab px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-transparent text-white/60 hover:text-white flex items-center gap-2 transition-all">
                    <i data-lucide="user" class="w-4 h-4"></i> Quem Sou Eu
                </button>
                <button onclick="switchTab('approvals', this)" class="nav-tab px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-transparent text-white/60 hover:text-white flex items-center gap-2 transition-all">
                    <i data-lucide="check-circle-2" class="w-4 h-4"></i> Aprovações
                </button>
                <button onclick="switchTab('faq', this)" class="nav-tab px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-transparent text-white/60 hover:text-white flex items-center gap-2 transition-all">
                    <i data-lucide="help-circle" class="w-4 h-4"></i> FAQ
                </button>
                <button onclick="switchTab('gateways', this)" class="nav-tab px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-transparent text-white/60 hover:text-white flex items-center gap-2 transition-all">
                    <i data-lucide="credit-card" class="w-4 h-4"></i> Gateways de Pagamento
                </button>
                <button onclick="switchTab('settings', this)" class="nav-tab px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-transparent text-white/60 hover:text-white flex items-center gap-2 transition-all">
                    <i data-lucide="settings" class="w-4 h-4"></i> Site Geral
                </button>
            </div>
        </div>
    </header>

    <!-- TOAST NOTIFICATION -->
    <div id="toast" class="fixed bottom-6 right-6 z-50 hidden bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2">
        <i data-lucide="check" class="w-4 h-4"></i>
        <span id="toast-message">Operação realizada com sucesso!</span>
    </div>

    <!-- TAB CONTENT SECTIONS -->
    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">

        <!-- ============================================== -->
        <!-- 1. TAB: DASHBOARD                              -->
        <!-- ============================================== -->
        <section id="tab-dashboard" class="tab-pane space-y-6">
            
            <!-- Greeting Box -->
            <div class="bg-[#121212] border border-[#1c1c1c] p-6 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-magenta/5 blur-3xl pointer-events-none"></div>
                <h3 class="text-xl font-bold text-white flex items-center gap-2 mb-2">
                    <i data-lucide="sparkles" class="text-brand-magenta w-5 h-5"></i> Bem-vindo ao Painel ADM da Vitrine
                </h3>
                <p class="text-brand-gray-light/75 text-sm max-w-2xl leading-relaxed font-light">
                    Aqui você pode personalizar as cores, banner de vídeo/imagem, logotipo, biografia "Quem Sou Eu", gerenciar seus produtos cadastrados no Getfy e otimizações de SEO.
                </p>

                <div class="mt-5 flex flex-wrap gap-3">
                    <a href="{{ url('/vitrine') }}" target="_blank" class="px-4 py-2 bg-brand-magenta/15 border border-brand-magenta/30 hover:bg-brand-magenta/25 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5">
                        <i data-lucide="eye" class="w-3.5 h-3.5"></i> Visualizar Vitrine Pública
                    </a>
                    <button onclick="document.querySelector('[onclick*=\'products\']').click()" class="px-4 py-2 bg-[#1c1c1c] border border-[#2d2d2d] hover:bg-[#252525] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5">
                        <i data-lucide="plus-circle" class="w-3.5 h-3.5 text-brand-magenta"></i> Gerenciar Cursos
                    </button>
                    <button onclick="syncGetfyProducts()" class="px-4 py-2 bg-[#1c1c1c] border border-[#2d2d2d] hover:bg-[#252525] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5">
                        <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-emerald-400"></i> Sincronizar Produtos do Getfy
                    </button>
                </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div class="bg-[#121212] border border-[#1c1c1c] p-5 rounded-xl">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-white/50">Cursos Ativos</span>
                    <span id="stat-products" class="text-3xl font-black text-white mt-2 block">{{ count($products) }}</span>
                </div>
                <div class="bg-[#121212] border border-[#1c1c1c] p-5 rounded-xl">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-white/50">Categorias</span>
                    <span id="stat-categories" class="text-3xl font-black text-brand-magenta mt-2 block">{{ count($categories) }}</span>
                </div>
                <div class="bg-[#121212] border border-[#1c1c1c] p-5 rounded-xl">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-white/50">Depoimentos / Fotos</span>
                    <span id="stat-approvals" class="text-3xl font-black text-white mt-2 block">{{ count($approvals) }}</span>
                </div>
                <div class="bg-[#121212] border border-[#1c1c1c] p-5 rounded-xl">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-white/50">Pedidos na Vitrine</span>
                    <span id="stat-orders" class="text-3xl font-black text-emerald-400 mt-2 block">{{ $stats['total_orders'] ?? 0 }}</span>
                </div>
            </div>

        </section>

        <!-- ============================================== -->
        <!-- 2. TAB: CURSOS & PRODUTOS                      -->
        <!-- ============================================== -->
        <section id="tab-products" class="tab-pane hidden space-y-6">
            
            <!-- Category Filter Manager -->
            <div class="bg-[#121212] border border-[#1c1c1c] p-5 rounded-xl space-y-4">
                <h4 class="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                    <i data-lucide="tag" class="w-4 h-4 text-brand-magenta"></i> Gerenciar Filtros de Categorias
                </h4>

                <div class="flex flex-col sm:flex-row gap-2 max-w-lg">
                    <input type="text" id="new-category-input" placeholder="Nova categoria (Ex: Carreiras Policiais)" class="flex-grow bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-4 py-2.5 text-xs text-white outline-none" />
                    <button onclick="addCategory()" class="btn-magenta px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider cursor-pointer">
                        Criar Categoria
                    </button>
                </div>

                <div class="flex flex-wrap gap-2 pt-2 border-t border-[#1c1c1c]" id="categories-badge-list">
                    @foreach($categories as $cat)
                        <div class="flex items-center bg-[#1c1c1c] rounded border border-[#2d2d2d] h-7 text-[11px]">
                            <span class="px-2.5 font-semibold text-white/80">{{ $cat }}</span>
                            <button onclick="deleteCategory('{{ $cat }}')" class="bg-red-950/30 hover:bg-red-500/20 text-red-400 px-2 h-full border-l border-[#2d2d2d] transition-colors" title="Apagar categoria">
                                ×
                            </button>
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Products Header with Actions -->
            <div class="flex flex-col sm:flex-row justify-between items-center bg-[#121212] p-5 rounded-xl border border-[#1c1c1c] gap-4">
                <div class="space-y-1">
                    <div class="text-xs sm:text-sm font-semibold text-white/80">
                        Cursos no Catálogo: <span id="products-count-badge" class="text-brand-magenta font-bold">{{ count($products) }}</span>
                    </div>
                    <p class="text-[11px] text-white/50">
                        Use o botão <strong>Visível / Oculto</strong> para esconder qualquer produto da vitrine sem apagar, ou exclua se desejar remover.
                    </p>
                </div>

                <div class="flex flex-wrap gap-2.5 items-center">
                    @if(!empty($settings->excluded_products) && count($settings->excluded_products) > 0)
                        <button onclick="restoreExcludedProducts()" class="px-3.5 py-2 rounded-lg bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors" title="Restaura os produtos excluídos anteriormente">
                            <i data-lucide="undo-2" class="w-3.5 h-3.5"></i> Restaurar Excluídos ({{ count($settings->excluded_products) }})
                        </button>
                    @endif
                    <button onclick="syncGetfyProducts()" class="px-4 py-2.5 rounded-lg bg-[#1c1c1c] border border-[#2d2d2d] hover:bg-[#252525] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-emerald-400"></i> Puxar do Getfy
                    </button>
                    <button onclick="openProductEditModal(null)" class="btn-magenta px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                        <i data-lucide="plus" class="w-4 h-4"></i> Cadastrar Novo Curso
                    </button>
                </div>
            </div>

            <!-- Products List -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="admin-products-list">
                @foreach($products as $prod)
                    <div class="bg-[#121212] border {{ $prod->is_active ? 'border-[#1c1c1c]' : 'border-dashed border-red-500/30 opacity-75' }} rounded-xl p-4 flex flex-col justify-between space-y-3 relative group hover:border-brand-magenta/40 transition-colors">
                        @if($prod->badge)
                            <span class="absolute top-3 right-3 text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-brand-magenta text-white">
                                {{ $prod->badge }}
                            </span>
                        @endif

                        <div class="flex gap-3">
                            <img src="{{ $prod->imageUrl }}" alt="{{ $prod->title }}" class="w-16 h-16 object-cover rounded-lg bg-[#070707] shrink-0 border border-white/5" onerror="this.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop'" />
                            <div class="min-w-0 flex-grow">
                                <div class="flex items-center gap-1.5">
                                    <span class="text-[10px] text-brand-light-magenta font-bold uppercase block">{{ $prod->category }}</span>
                                    @if(!$prod->is_active)
                                        <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">OCULTO</span>
                                    @endif
                                </div>
                                <h4 class="text-xs font-bold text-white line-clamp-2 mt-0.5">{{ $prod->title }}</h4>
                                <div class="mt-1 flex items-baseline gap-2">
                                    @if($prod->originalPrice)
                                        <span class="text-[10px] text-white/40 line-through">{{ $prod->originalPrice }}</span>
                                    @endif
                                    <span class="text-xs font-black text-brand-magenta">{{ $prod->promoPrice }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between items-center pt-3 border-t border-[#1c1c1c] text-xs">
                            <button onclick="toggleProductVisibility('{{ $prod->id }}', {{ $prod->is_active ? 0 : 1 }})" 
                                    class="px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 transition-colors {{ $prod->is_active ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/50' : 'bg-neutral-800 text-white/50 border border-white/10 hover:bg-neutral-700' }}"
                                    title="{{ $prod->is_active ? 'Clique para ocultar da vitrine pública' : 'Clique para tornar visível na vitrine pública' }}">
                                <span class="w-1.5 h-1.5 rounded-full {{ $prod->is_active ? 'bg-emerald-400' : 'bg-white/40' }}"></span>
                                <span>{{ $prod->is_active ? 'Visível' : 'Oculto' }}</span>
                            </button>

                            <div class="flex gap-2">
                                <button onclick='openProductEditModal({{ json_encode($prod) }})' class="px-3 py-1 bg-[#1c1c1c] hover:bg-[#252525] text-white text-[11px] font-bold rounded flex items-center gap-1 transition-colors">
                                    <i data-lucide="edit-2" class="w-3 h-3 text-brand-magenta"></i> Editar
                                </button>
                                <button onclick="deleteProduct('{{ $prod->id }}')" class="px-2 py-1 bg-red-950/20 hover:bg-red-500/20 text-red-400 text-[11px] font-bold rounded transition-colors" title="Remover permanentemente da vitrine">
                                    <i data-lucide="trash-2" class="w-3 h-3"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

        </section>

        <!-- ============================================== -->
        <!-- 3. TAB: QUEM SOU EU                            -->
        <!-- ============================================== -->
        <section id="tab-about" class="tab-pane hidden space-y-6">
            <div class="bg-[#121212] border border-[#1c1c1c] p-6 rounded-2xl space-y-6 max-w-4xl">
                <h3 class="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <i data-lucide="user" class="w-4 h-4 text-brand-magenta"></i> Seção "Quem Sou Eu"
                </h3>

                <div class="space-y-4">
                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Título da Seção</label>
                        <input type="text" id="about-title-input" value="{{ $settings->aboutTitle }}" placeholder="Ex: Quem Sou Eu (deixe em branco para ocultar seção)" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-4 py-2.5 text-xs text-white outline-none" />
                    </div>

                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Foto do Mentor / Produtor (URL)</label>
                        <input type="url" id="about-image-input" value="{{ $settings->aboutImageUrl }}" placeholder="https://..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-4 py-2.5 text-xs text-white outline-none" />
                    </div>

                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Biografia e Credenciais</label>
                        <textarea id="about-text-input" rows="8" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg p-4 text-xs text-white outline-none leading-relaxed font-light">{{ $settings->aboutText }}</textarea>
                    </div>

                    <button onclick="saveAboutSection()" class="btn-magenta px-6 py-3 rounded-lg text-xs font-black uppercase tracking-wider">
                        Salvar Seção Quem Sou Eu
                    </button>
                </div>
            </div>
        </section>

        <!-- ============================================== -->
        <!-- 4. TAB: APROVAÇÕES                             -->
        <!-- ============================================== -->
        <section id="tab-approvals" class="tab-pane hidden space-y-6">
            <div class="bg-[#121212] border border-[#1c1c1c] p-6 rounded-2xl space-y-6">
                <h3 class="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-brand-magenta"></i> Galeria de Depoimentos & Alunos Aprovados
                </h3>

                <!-- Add Approval Form -->
                <div class="flex flex-col sm:flex-row gap-2 max-w-lg">
                    <input type="url" id="new-approval-url" placeholder="URL da imagem (Ex: https://...)" class="flex-grow bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-4 py-2.5 text-xs text-white outline-none" />
                    <button onclick="addApproval()" class="btn-magenta px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider cursor-pointer">
                        Adicionar Foto
                    </button>
                </div>

                <!-- Approvals List -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" id="approvals-admin-grid">
                    @foreach($approvals as $app)
                        <div class="relative group rounded-xl overflow-hidden aspect-[4/5] bg-[#1c1c1c] border border-white/5">
                            <img src="{{ $app->imageUrl }}" alt="Aprovação" class="w-full h-full object-cover" />
                            <button onclick="deleteApproval({{ $app->id }})" class="absolute top-2 right-2 p-1.5 rounded-full bg-red-600/80 hover:bg-red-600 text-white transition-colors" title="Excluir">
                                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>

        <!-- ============================================== -->
        <!-- 5. TAB: FAQ                                    -->
        <!-- ============================================== -->
        <section id="tab-faq" class="tab-pane hidden space-y-6">
            <div class="bg-[#121212] border border-[#1c1c1c] p-6 rounded-2xl space-y-6 max-w-4xl">
                <h3 class="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <i data-lucide="help-circle" class="w-4 h-4 text-brand-magenta"></i> Perguntas Frequentes (FAQ)
                </h3>

                <!-- Add FAQ Form -->
                <div class="p-5 bg-[#181818] rounded-xl border border-white/5 space-y-3">
                    <h4 class="text-xs font-bold text-white uppercase tracking-wider">Adicionar Nova Pergunta</h4>
                    <input type="text" id="new-faq-question" placeholder="Pergunta (Ex: Quais as formas de pagamento?)" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-4 py-2.5 text-xs text-white outline-none" />
                    <textarea id="new-faq-answer" rows="3" placeholder="Resposta detalhada..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg p-3 text-xs text-white outline-none"></textarea>
                    <button onclick="addFaq()" class="btn-magenta px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider">
                        Adicionar ao FAQ
                    </button>
                </div>

                <!-- Existing FAQs List -->
                <div class="space-y-3" id="admin-faqs-list">
                    @foreach($faqs as $f)
                        <div class="p-4 bg-[#181818] rounded-xl border border-white/5 flex justify-between items-start gap-4">
                            <div class="space-y-1 flex-grow">
                                <h5 class="text-xs font-bold text-white">{{ $f->question }}</h5>
                                <p class="text-xs text-white/60 font-light leading-relaxed whitespace-pre-line">{{ $f->answer }}</p>
                            </div>
                            <div class="flex items-center gap-1 shrink-0">
                                <button type="button" onclick="openEditFaqModal({{ $f->id }}, {{ json_encode($f->question) }}, {{ json_encode($f->answer) }})" class="p-1.5 text-white/40 hover:text-brand-light-magenta transition-colors" title="Editar Pergunta">
                                    <i data-lucide="pencil" class="w-4 h-4"></i>
                                </button>
                                <button type="button" onclick="deleteFaq({{ $f->id }})" class="p-1.5 text-white/40 hover:text-red-400 transition-colors" title="Excluir Pergunta">
                                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>

        <!-- ============================================== -->
        <!-- 6. TAB: GATEWAYS DE PAGAMENTO DO CARRINHO      -->
        <!-- ============================================== -->
        <section id="tab-gateways" class="tab-pane hidden space-y-6">
            <div class="bg-[#121212] border border-[#1c1c1c] p-6 rounded-2xl space-y-6 max-w-5xl">
                <div>
                    <h3 class="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-1">
                        <i data-lucide="credit-card" class="w-4 h-4 text-brand-magenta"></i> Gateways de Pagamento do Carrinho
                    </h3>
                    <p class="text-xs text-white/50">
                        Escolha os gateways conectados no Getfy que processarão os pagamentos de múltiplos cursos no carrinho da vitrine.
                    </p>
                </div>

                @php
                    $savedGateways = is_array($settings->payment_gateways) ? $settings->payment_gateways : [];
                    $pixGateway = array_key_exists('pix', $savedGateways) ? ($savedGateways['pix'] ?: 'disabled') : 'mercadopago';
                    $cardGateway = array_key_exists('card', $savedGateways) ? ($savedGateways['card'] ?: 'disabled') : 'pagarme';
                    $boletoGateway = array_key_exists('boleto', $savedGateways) ? ($savedGateways['boleto'] ?: 'disabled') : 'mercadopago';
                @endphp

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- PIX -->
                    <div class="bg-[#181818] border border-white/5 p-5 rounded-xl space-y-4 flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                                    <i data-lucide="qr-code" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 class="text-sm font-bold text-white">PIX</h4>
                                    <p class="text-[11px] text-white/50">Pagamento instantâneo no carrinho</p>
                                </div>
                            </div>

                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Gateway PIX</label>
                                <select id="cfg-gateway-pix" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-3.5 py-2.5 text-xs text-white outline-none">
                                    <option value="disabled" {{ ($pixGateway === 'disabled' || empty($pixGateway)) ? 'selected' : '' }}>(Nenhum / Desativado)</option>
                                    <option value="pix_direct" {{ $pixGateway === 'pix_direct' ? 'selected' : '' }}>PIX Nativo Getfy (Chave Pix)</option>
                                    @foreach($gateways_by_method['pix'] ?? [] as $g)
                                        <option value="{{ $g['slug'] }}" {{ $pixGateway === $g['slug'] ? 'selected' : '' }}>
                                            {{ $g['name'] }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="pt-3 border-t border-white/5 text-[11px] text-white/40">
                            Gera QR Code dinâmico e código Pix Copia e Cola instantâneo.
                        </div>
                    </div>

                    <!-- Cartão de Crédito -->
                    <div class="bg-[#181818] border border-white/5 p-5 rounded-xl space-y-4 flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                                    <i data-lucide="credit-card" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 class="text-sm font-bold text-white">Cartão de Crédito</h4>
                                    <p class="text-[11px] text-white/50">Crédito com parcelamento</p>
                                </div>
                            </div>

                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Gateway Cartão</label>
                                <select id="cfg-gateway-card" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-3.5 py-2.5 text-xs text-white outline-none">
                                    <option value="disabled" {{ ($cardGateway === 'disabled' || empty($cardGateway)) ? 'selected' : '' }}>(Nenhum / Desativado)</option>
                                    @foreach($gateways_by_method['card'] ?? [] as $g)
                                        <option value="{{ $g['slug'] }}" {{ $cardGateway === $g['slug'] ? 'selected' : '' }}>
                                            {{ $g['name'] }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="pt-3 border-t border-white/5 text-[11px] text-white/40">
                            Processa compras à vista e parceladas no cartão de crédito.
                        </div>
                    </div>

                    <!-- Boleto Bancário -->
                    <div class="bg-[#181818] border border-white/5 p-5 rounded-xl space-y-4 flex flex-col justify-between">
                        <div class="space-y-3">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                                    <i data-lucide="receipt" class="w-6 h-6"></i>
                                </div>
                                <div>
                                    <h4 class="text-sm font-bold text-white">Boleto Bancário</h4>
                                    <p class="text-[11px] text-white/50">Emissão de boleto para pagamento</p>
                                </div>
                            </div>

                            <div>
                                <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Gateway Boleto</label>
                                <select id="cfg-gateway-boleto" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-3.5 py-2.5 text-xs text-white outline-none">
                                    <option value="disabled" {{ ($boletoGateway === 'disabled' || empty($boletoGateway)) ? 'selected' : '' }}>(Nenhum / Desativado)</option>
                                    @foreach($gateways_by_method['boleto'] ?? [] as $g)
                                        <option value="{{ $g['slug'] }}" {{ $boletoGateway === $g['slug'] ? 'selected' : '' }}>
                                            {{ $g['name'] }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                        </div>

                        <div class="pt-3 border-t border-white/5 text-[11px] text-white/40">
                            Emite linha digitável e PDF com vencimento configurado.
                        </div>
                    </div>
                </div>

                <!-- Info Box & Save Button -->
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#181818] border border-white/5">
                    <div class="flex items-center gap-2 text-xs text-white/60">
                        <i data-lucide="info" class="w-4 h-4 text-brand-magenta shrink-0"></i>
                        <span>Para conectar novas credenciais de adquirentes (Mercado Pago, Pagar.me, Asaas, etc.), acesse <a href="{{ url('/integracoes?tab=gateways') }}" target="_blank" class="text-brand-light-magenta underline font-semibold hover:text-white">Integrações &rarr; Gateways</a> do Getfy.</span>
                    </div>

                    <button onclick="savePaymentGateways()" class="btn-magenta px-6 py-3 rounded-lg text-xs font-black uppercase tracking-wider shrink-0 shadow-lg cursor-pointer">
                        Salvar Gateways do Carrinho
                    </button>
                </div>
            </div>
        </section>

        <!-- ============================================== -->
        <!-- 7. TAB: SITE GERAL (CONFIGURAÇÕES)            -->
        <!-- ============================================== -->
        <section id="tab-settings" class="tab-pane hidden space-y-6">
            <div class="bg-[#121212] border border-[#1c1c1c] p-6 rounded-2xl space-y-8 max-w-5xl">
                
                <div>
                    <h3 class="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-1">
                        <i data-lucide="sliders" class="w-4 h-4 text-brand-magenta"></i> Configurações Visuais e do Site
                    </h3>
                    <p class="text-xs text-white/50">Personalize a identidade da vitrine, cores, banners e botões.</p>
                </div>

                <!-- Maintenance Mode Card -->
                <div class="p-5 bg-gradient-to-r from-[#181515] to-[#121212] rounded-xl border border-yellow-500/30 space-y-4">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <span class="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                                <i data-lucide="wrench" class="w-5 h-5"></i>
                            </span>
                            <div>
                                <h4 class="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                                    Modo Manutenção
                                    @if(!empty($settings->is_maintenance))
                                        <span class="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-[10px] font-bold border border-yellow-500/30">ATIVO</span>
                                    @else
                                        <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">VITRINE ONLINE</span>
                                    @endif
                                </h4>
                                <p class="text-[11px] text-white/50">Quando ativado, visitantes públicos verão a tela de manutenção. Administradores continuam visualizando normalmente.</p>
                            </div>
                        </div>

                        <label class="relative inline-flex items-center cursor-pointer select-none shrink-0">
                            <input type="checkbox" id="cfg-is_maintenance" class="sr-only peer" {{ !empty($settings->is_maintenance) ? 'checked' : '' }}>
                            <div class="w-11 h-6 bg-[#252525] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                            <span class="ml-2.5 text-xs font-bold text-white/90">Ativar Manutenção</span>
                        </label>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/5">
                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Título da Página de Manutenção</label>
                            <input type="text" id="cfg-maintenance_title" value="{{ $settings->maintenance_title ?: 'Estamos em Manutenção' }}" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" placeholder="Estamos em Manutenção" />
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Mensagem para os Visitantes</label>
                            <input type="text" id="cfg-maintenance_message" value="{{ $settings->maintenance_message ?: 'Nossa vitrine está temporariamente indisponível para melhorias e atualizações. Voltaremos em breve!' }}" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" placeholder="Mensagem informativa..." />
                        </div>
                    </div>
                </div>

                <!-- Colors & Aesthetics -->
                <div class="p-5 bg-[#181818] rounded-xl border border-white/5 space-y-4">
                    <h4 class="text-xs font-black uppercase tracking-wider text-brand-light-magenta">Cores & Estilos</h4>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Cor Primária (Vermelho / Destaque)</label>
                            <div class="flex gap-2 items-center">
                                <input type="color" id="cfg-primaryColor" value="{{ $settings->primaryColor ?: '#dc2626' }}" class="w-10 h-10 rounded border border-white/20 bg-transparent cursor-pointer" onchange="document.getElementById('cfg-primaryColor-hex').value = this.value" />
                                <input type="text" id="cfg-primaryColor-hex" value="{{ $settings->primaryColor ?: '#dc2626' }}" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3 py-2 text-xs text-white uppercase font-mono" onchange="document.getElementById('cfg-primaryColor').value = this.value" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Cor de Fundo do Site</label>
                            <input type="text" id="cfg-bgColor" value="{{ $settings->bgColor ?: '#0a0a0a' }}" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3 py-2 text-xs text-white font-mono" placeholder="#0a0a0a" />
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1.5">Estilo dos Botões</label>
                            <select id="cfg-buttonStyle" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3 py-2 text-xs text-white">
                                <option value="pill" {{ ($settings->buttonStyle ?? 'pill') === 'pill' ? 'selected' : '' }}>Pílula (Arredondado Total)</option>
                                <option value="rounded" {{ ($settings->buttonStyle ?? 'pill') === 'rounded' ? 'selected' : '' }}>Arredondado Leve (rounded-xl)</option>
                                <option value="square" {{ ($settings->buttonStyle ?? 'pill') === 'square' ? 'selected' : '' }}>Quadrado (rounded-md)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Brand & Texts -->
                <div class="p-5 bg-[#181818] rounded-xl border border-white/5 space-y-4">
                    <h4 class="text-xs font-black uppercase tracking-wider text-brand-light-magenta">Identidade & Contato</h4>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Nome da Marca / Site</label>
                            <input type="text" id="cfg-siteName" value="{{ $settings->siteName }}" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Logotipo (URL da Imagem)</label>
                            <input type="url" id="cfg-logoUrl" value="{{ $settings->logoUrl }}" placeholder="https://..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">WhatsApp de Vendas (apenas números com DDD)</label>
                            <input type="text" id="cfg-globalWhatsapp" value="{{ $settings->globalWhatsapp }}" placeholder="Ex: 5511999999999" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Favicon (Ícone da aba)</label>
                            <input type="url" id="cfg-faviconUrl" value="{{ $settings->faviconUrl }}" placeholder="https://..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>
                    </div>
                </div>

                <!-- Hero Section Config -->
                <div class="p-5 bg-[#181818] rounded-xl border border-white/5 space-y-4">
                    <h4 class="text-xs font-black uppercase tracking-wider text-brand-light-magenta">Hero (Topo da Vitrine)</h4>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="sm:col-span-2">
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Título Principal do Hero</label>
                            <input type="text" id="cfg-heroTitle" value="{{ $settings->heroTitle }}" placeholder="Deixe em branco para ocultar" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>

                        <div class="sm:col-span-2">
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Subtítulo do Hero</label>
                            <textarea id="cfg-heroSubtitle" rows="2" placeholder="Subtítulo opcional..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white">{{ $settings->heroSubtitle }}</textarea>
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Badge de Destaque</label>
                            <input type="text" id="cfg-heroBadge" value="{{ $settings->heroBadge }}" placeholder="Ex: NOVO LANÇAMENTO" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Texto do Botão Hero</label>
                            <input type="text" id="cfg-heroButtonText" value="{{ $settings->heroButtonText }}" placeholder="Ex: VER CURSOS AGORA" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>

                        <div class="sm:col-span-2">
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Banner em Vídeo ou Foto Completa (URL opcional)</label>
                            <input type="url" id="cfg-heroBannerUrl" value="{{ $settings->heroBannerUrl }}" placeholder="https://..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Tipo de Banner</label>
                            <select id="cfg-heroBannerType" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white">
                                <option value="image" {{ ($settings->heroBannerType ?? 'image') === 'image' ? 'selected' : '' }}>Imagem</option>
                                <option value="video" {{ ($settings->heroBannerType ?? 'image') === 'video' ? 'selected' : '' }}>Vídeo</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Imagem Lateral do Hero</label>
                            <input type="url" id="cfg-heroImageUrl" value="{{ $settings->heroImageUrl }}" placeholder="https://..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>
                    </div>
                </div>

                <!-- SEO -->
                <div class="p-5 bg-[#181818] rounded-xl border border-white/5 space-y-4">
                    <h4 class="text-xs font-black uppercase tracking-wider text-brand-light-magenta">Otimização SEO</h4>
                    <div class="space-y-3">
                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Título da Aba (SEO Title)</label>
                            <input type="text" id="cfg-seoTitle" value="{{ $settings->seoTitle }}" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Meta Descrição (Google)</label>
                            <textarea id="cfg-seoDescription" rows="2" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white">{{ $settings->seoDescription }}</textarea>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center pt-4">
                    <button onclick="resetDefaults()" class="px-5 py-2.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs font-bold transition-colors">
                        Restaurar Padrões Iniciais
                    </button>
                    <button onclick="saveAllSettings()" class="btn-magenta px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl">
                        Salvar Todas as Configurações
                    </button>
                </div>

            </div>
        </section>

    </main>

    <!-- ============================================== -->
    <!-- MODAL: CRIAR / EDITAR PRODUTO                  -->
    <!-- ============================================== -->
    <div id="product-form-modal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm items-center justify-center p-4 overflow-y-auto">
        <div class="bg-[#121212] border border-brand-magenta/30 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative my-auto">
            <button onclick="closeProductEditModal()" class="absolute top-4 right-4 p-1.5 rounded-lg text-white/60 hover:text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <h3 id="form-modal-title" class="text-lg font-black text-white mb-6">Cadastrar Novo Curso</h3>

            <input type="hidden" id="edit-prod-id" />

            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-bold uppercase text-white/70 mb-1">Nome do Curso / Material *</label>
                    <input type="text" id="edit-prod-title" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-3.5 py-2 text-xs text-white outline-none" required />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Categoria *</label>
                        <select id="edit-prod-category" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-3.5 py-2 text-xs text-white outline-none">
                            @foreach($categories as $cat)
                                <option value="{{ $cat }}">{{ $cat }}</option>
                            @endforeach
                        </select>
                    </div>

                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Badge Promocional</label>
                        <select id="edit-prod-badge" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-3.5 py-2 text-xs text-white outline-none">
                            <option value="">(Sem badge)</option>
                            <option value="MAIS VENDIDO">MAIS VENDIDO</option>
                            <option value="DESTAQUE">DESTAQUE</option>
                            <option value="PROMOÇÃO">PROMOÇÃO</option>
                            <option value="NOVO">NOVO</option>
                            <option value="LANÇAMENTO">LANÇAMENTO</option>
                            <option value="VAGAS LIMITADAS">VAGAS LIMITADAS</option>
                        </select>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Preço "De" (Risco)</label>
                        <input type="text" id="edit-prod-originalPrice" placeholder="Ex: R$ 97,00" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white outline-none" />
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Preço "Por" *</label>
                        <input type="text" id="edit-prod-promoPrice" placeholder="Ex: R$ 37,00" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white outline-none" required />
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Proporção da Foto</label>
                        <select id="edit-prod-orientation" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white">
                            <option value="square">Quadrada (1:1)</option>
                            <option value="vertical">Vertical (3:4)</option>
                            <option value="horizontal">Horizontal (16:9)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-bold uppercase text-white/70 mb-1">URL da Imagem de Capa *</label>
                    <input type="url" id="edit-prod-imageUrl" placeholder="https://..." class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white outline-none" required />
                    
                    <!-- Presets Rápidos -->
                    <div class="flex gap-2 mt-2 items-center text-[11px] text-white/50">
                        <span>Presets:</span>
                        <button type="button" onclick="document.getElementById('edit-prod-imageUrl').value='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600'" class="hover:text-brand-magenta">Código</button>
                        <span>•</span>
                        <button type="button" onclick="document.getElementById('edit-prod-imageUrl').value='https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600'" class="hover:text-brand-magenta">Estudos</button>
                        <span>•</span>
                        <button type="button" onclick="document.getElementById('edit-prod-imageUrl').value='https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600'" class="hover:text-brand-magenta">Direito</button>
                        <span>•</span>
                        <button type="button" onclick="document.getElementById('edit-prod-imageUrl').value='https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600'" class="hover:text-brand-magenta">IA</button>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-bold uppercase text-white/70 mb-1">Descrição Curta (Exibida no Card)</label>
                    <textarea id="edit-prod-description" rows="2" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg p-3 text-xs text-white outline-none"></textarea>
                </div>

                <div>
                    <label class="block text-xs font-bold uppercase text-white/70 mb-1">Descrição Completa (Exibida no Modal / Detalhes)</label>
                    <textarea id="edit-prod-longDescription" rows="4" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg p-3 text-xs text-white outline-none"></textarea>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Texto do Botão</label>
                        <input type="text" id="edit-prod-buttonText" value="QUERO COMEÇAR AGORA" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase text-white/70 mb-1">Link de Destino Direto (Opcional)</label>
                        <input type="text" id="edit-prod-buttonLink" placeholder="/c/checkout-slug ou link externo" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] rounded-lg px-3.5 py-2 text-xs text-white" />
                    </div>
                </div>

                <div class="p-3.5 bg-[#181818] rounded-xl border border-white/5 flex items-center justify-between">
                    <div>
                        <span class="text-xs font-bold text-white block">Exibir na Vitrine Pública</span>
                        <span class="text-[11px] text-white/50">Se desmarcado, o curso fica oculto para visitantes sem ser excluído.</span>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="edit-prod-isActive" class="sr-only peer" checked>
                        <div class="w-11 h-6 bg-[#252525] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                        <span class="ml-2.5 text-xs font-bold text-white">Visível</span>
                    </label>
                </div>

                <div class="flex justify-end gap-3 pt-4 border-t border-[#1c1c1c]">
                    <button type="button" onclick="closeProductEditModal()" class="px-5 py-2.5 rounded-lg border border-[#2d2d2d] text-white/70 hover:text-white text-xs font-bold">
                        Cancelar
                    </button>
                    <button type="button" onclick="saveProduct()" class="btn-magenta px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider">
                        Salvar Produto
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- ============================================== -->
    <!-- MODAL: EDITAR FAQ                              -->
    <!-- ============================================== -->
    <div id="modal-edit-faq" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm items-center justify-center p-4 overflow-y-auto">
        <div class="bg-[#121212] border border-brand-magenta/30 rounded-2xl w-full max-w-lg shadow-2xl p-6 relative my-auto space-y-4">
            <button type="button" onclick="closeEditFaqModal()" class="absolute top-4 right-4 p-1.5 rounded-lg text-white/60 hover:text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <h3 class="text-base font-black text-white flex items-center gap-2">
                <i data-lucide="help-circle" class="w-5 h-5 text-brand-magenta"></i>
                Editar Pergunta do FAQ
            </h3>

            <input type="hidden" id="edit-faq-id" />

            <div class="space-y-3">
                <div>
                    <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Pergunta *</label>
                    <input type="text" id="edit-faq-question" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg px-3.5 py-2.5 text-xs text-white outline-none" required />
                </div>
                <div>
                    <label class="block text-[11px] font-bold uppercase text-white/70 mb-1">Resposta *</label>
                    <textarea id="edit-faq-answer" rows="4" class="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-brand-magenta rounded-lg p-3 text-xs text-white outline-none" required></textarea>
                </div>
            </div>

            <div class="flex justify-end gap-3 pt-3 border-t border-white/5">
                <button type="button" onclick="closeEditFaqModal()" class="px-4 py-2 text-xs font-bold text-white/60 hover:text-white">
                    Cancelar
                </button>
                <button type="button" onclick="saveEditFaq()" class="btn-magenta px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wider">
                    Salvar Alterações
                </button>
            </div>
        </div>
    </div>

    <!-- ============================================== -->
    <!-- JAVASCRIPT LOGIC                               -->
    <!-- ============================================== -->
    <script>
        lucide.createIcons();

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = msg;
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3500);
        }

        // Tabs
        function switchTab(tabId, btn) {
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
            document.getElementById('tab-' + tabId).classList.remove('hidden');

            document.querySelectorAll('.nav-tab').forEach(b => {
                b.classList.remove('active', 'border-brand-magenta', 'text-white', 'bg-[#121212]');
                b.classList.add('border-transparent', 'text-white/60');
            });
            btn.classList.add('active', 'border-brand-magenta', 'text-white', 'bg-[#121212]');
            btn.classList.remove('border-transparent', 'text-white/60');
        }

        // Sync from Getfy
        async function syncGetfyProducts() {
            const icon = document.getElementById('sync-icon');
            if (icon) icon.classList.add('animate-spin');

            try {
                const res = await fetch('{{ url("/vitrine/admin/products/sync") }}', {
                    method: 'POST',
                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}' }
                });
                const data = await res.json();
                if (data.success) {
                    showToast(data.message);
                    setTimeout(() => window.location.reload(), 1000);
                }
            } catch (e) {
                alert('Erro ao sincronizar produtos do Getfy.');
            } finally {
                if (icon) icon.classList.remove('animate-spin');
            }
        }

        // Categories
        async function addCategory() {
            const input = document.getElementById('new-category-input');
            const name = input.value.trim();
            if (!name) return;

            try {
                const res = await fetch('{{ url("/vitrine/admin/categories") }}', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
                    body: JSON.stringify({ name })
                });
                if (res.ok) {
                    showToast('Categoria criada com sucesso!');
                    input.value = '';
                    window.location.reload();
                }
            } catch (e) {
                alert('Erro ao adicionar categoria.');
            }
        }

        async function deleteCategory(name) {
            if (!confirm(`Deseja apagar a categoria "${name}"?`)) return;

            try {
                const res = await fetch('{{ url("/vitrine/admin/categories") }}/' + encodeURIComponent(name), {
                    method: 'DELETE',
                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}' }
                });
                if (res.ok) {
                    showToast('Categoria removida.');
                    window.location.reload();
                }
            } catch (e) {
                alert('Erro ao excluir categoria.');
            }
        }

        // Approvals
        async function addApproval() {
            const input = document.getElementById('new-approval-url');
            const imageUrl = input.value.trim();
            if (!imageUrl) return;

            try {
                const res = await fetch('{{ url("/vitrine/admin/approvals") }}', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
                    body: JSON.stringify({ imageUrl })
                });
                if (res.ok) {
                    showToast('Foto de aprovado adicionada!');
                    input.value = '';
                    window.location.reload();
                }
            } catch (e) {
                alert('Erro ao adicionar aprovação.');
            }
        }

        async function deleteApproval(id) {
            if (!confirm('Deseja excluir esta imagem?')) return;
            try {
                const res = await fetch('{{ url("/vitrine/admin/approvals") }}/' + id, {
                    method: 'DELETE',
                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}' }
                });
                if (res.ok) {
                    showToast('Foto excluída.');
                    window.location.reload();
                }
            } catch (e) {
                alert('Erro ao excluir foto.');
            }
        }

        // FAQs
        async function addFaq() {
            const q = document.getElementById('new-faq-question').value.trim();
            const a = document.getElementById('new-faq-answer').value.trim();
            if (!q || !a) {
                alert('Preencha a pergunta e a resposta.');
                return;
            }

            try {
                const res = await fetch('{{ url("/vitrine/admin/faqs") }}', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
                    body: JSON.stringify({ question: q, answer: a })
                });
                if (res.ok) {
                    showToast('Pergunta adicionada ao FAQ!');
                    window.location.reload();
                }
            } catch (e) {
                alert('Erro ao adicionar FAQ.');
            }
        }

        async function deleteFaq(id) {
            if (!confirm('Deseja apagar esta pergunta do FAQ?')) return;
            try {
                const res = await fetch('{{ url("/vitrine/admin/faqs") }}/' + id, {
                    method: 'DELETE',
                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}' }
                });
                if (res.ok) {
                    showToast('Pergunta removida.');
                    window.location.reload();
                }
            } catch (e) {
                alert('Erro ao excluir FAQ.');
            }
        }

        function openEditFaqModal(id, question, answer) {
            document.getElementById('edit-faq-id').value = id;
            document.getElementById('edit-faq-question').value = question;
            document.getElementById('edit-faq-answer').value = answer;

            const modal = document.getElementById('modal-edit-faq');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            if (window.lucide) lucide.createIcons();
        }

        function closeEditFaqModal() {
            const modal = document.getElementById('modal-edit-faq');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        async function saveEditFaq() {
            const id = document.getElementById('edit-faq-id').value;
            const q = document.getElementById('edit-faq-question').value.trim();
            const a = document.getElementById('edit-faq-answer').value.trim();

            if (!q || !a) {
                alert('Preencha a pergunta e a resposta.');
                return;
            }

            try {
                const res = await fetch('{{ url("/vitrine/admin/faqs") }}/' + id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    body: JSON.stringify({ question: q, answer: a })
                });
                if (res.ok) {
                    showToast('Pergunta atualizada com sucesso!');
                    window.location.reload();
                } else {
                    alert('Erro ao atualizar FAQ.');
                }
            } catch (e) {
                alert('Erro de conexão ao atualizar FAQ.');
            }
        }

        // About Section
        async function saveAboutSection() {
            const aboutTitle = document.getElementById('about-title-input').value.trim();
            const aboutImageUrl = document.getElementById('about-image-input').value.trim();
            const aboutText = document.getElementById('about-text-input').value.trim();

            try {
                const res = await fetch('{{ url("/vitrine/admin/settings") }}', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
                    body: JSON.stringify({ aboutTitle, aboutImageUrl, aboutText })
                });
                if (res.ok) {
                    showToast('Seção "Quem Sou Eu" salva com sucesso!');
                }
            } catch (e) {
                alert('Erro ao salvar biografia.');
            }
        }

        // Settings
        async function saveAllSettings() {
            const settings = {
                is_maintenance: document.getElementById('cfg-is_maintenance').checked ? 1 : 0,
                maintenance_title: document.getElementById('cfg-maintenance_title').value.trim(),
                maintenance_message: document.getElementById('cfg-maintenance_message').value.trim(),
                primaryColor: document.getElementById('cfg-primaryColor-hex').value.trim(),
                bgColor: document.getElementById('cfg-bgColor').value.trim(),
                buttonStyle: document.getElementById('cfg-buttonStyle').value,
                siteName: document.getElementById('cfg-siteName').value.trim(),
                logoUrl: document.getElementById('cfg-logoUrl').value.trim(),
                globalWhatsapp: document.getElementById('cfg-globalWhatsapp').value.trim(),
                faviconUrl: document.getElementById('cfg-faviconUrl').value.trim(),
                heroTitle: document.getElementById('cfg-heroTitle').value.trim(),
                heroSubtitle: document.getElementById('cfg-heroSubtitle').value.trim(),
                heroBadge: document.getElementById('cfg-heroBadge').value.trim(),
                heroButtonText: document.getElementById('cfg-heroButtonText').value.trim(),
                heroBannerUrl: document.getElementById('cfg-heroBannerUrl').value.trim(),
                heroBannerType: document.getElementById('cfg-heroBannerType').value,
                heroImageUrl: document.getElementById('cfg-heroImageUrl').value.trim(),
                seoTitle: document.getElementById('cfg-seoTitle').value.trim(),
                seoDescription: document.getElementById('cfg-seoDescription').value.trim(),
            };

            try {
                const res = await fetch('{{ url("/vitrine/admin/settings") }}', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
                    body: JSON.stringify(settings)
                });
                if (res.ok) {
                    showToast('Configurações salvas com sucesso!');
                    setTimeout(() => window.location.reload(), 1000);
                }
            } catch (e) {
                alert('Erro ao salvar configurações.');
            }
        }

        async function resetDefaults() {
            if (!confirm('Deseja realmente restaurar todas as configurações para o padrão inicial?')) return;
            try {
                const res = await fetch('{{ url("/vitrine/admin/reset") }}', {
                    method: 'POST',
                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}' }
                });
                if (res.ok) {
                    showToast('Padrões restaurados com sucesso!');
                    setTimeout(() => window.location.reload(), 800);
                }
            } catch (e) {
                alert('Erro ao restaurar padrões.');
            }
        }

        // Product Modal
        function openProductEditModal(prod) {
            const modal = document.getElementById('product-form-modal');
            const titleEl = document.getElementById('form-modal-title');

            if (prod) {
                titleEl.innerText = 'Editar Curso / Produto';
                document.getElementById('edit-prod-id').value = prod.id;
                document.getElementById('edit-prod-title').value = prod.title || '';
                document.getElementById('edit-prod-category').value = prod.category || '';
                document.getElementById('edit-prod-badge').value = prod.badge || '';
                document.getElementById('edit-prod-originalPrice').value = prod.originalPrice || '';
                document.getElementById('edit-prod-promoPrice').value = prod.promoPrice || '';
                document.getElementById('edit-prod-orientation').value = prod.imageOrientation || 'square';
                document.getElementById('edit-prod-imageUrl').value = prod.imageUrl || '';
                document.getElementById('edit-prod-description').value = prod.description || '';
                document.getElementById('edit-prod-longDescription').value = prod.longDescription || '';
                document.getElementById('edit-prod-buttonText').value = prod.buttonText || 'QUERO COMEÇAR AGORA';
                document.getElementById('edit-prod-buttonLink').value = prod.buttonLink || '';
                document.getElementById('edit-prod-isActive').checked = prod.is_active !== undefined ? Boolean(prod.is_active) : true;
            } else {
                titleEl.innerText = 'Cadastrar Novo Curso';
                document.getElementById('edit-prod-id').value = '';
                document.getElementById('edit-prod-title').value = '';
                document.getElementById('edit-prod-originalPrice').value = '';
                document.getElementById('edit-prod-promoPrice').value = 'R$ 37,00';
                document.getElementById('edit-prod-imageUrl').value = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop';
                document.getElementById('edit-prod-description').value = '';
                document.getElementById('edit-prod-longDescription').value = '';
                document.getElementById('edit-prod-buttonText').value = 'QUERO COMEÇAR AGORA';
                document.getElementById('edit-prod-buttonLink').value = '';
                document.getElementById('edit-prod-isActive').checked = true;
            }

            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeProductEditModal() {
            const modal = document.getElementById('product-form-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        async function saveProduct() {
            const id = document.getElementById('edit-prod-id').value;
            const payload = {
                title: document.getElementById('edit-prod-title').value.trim(),
                category: document.getElementById('edit-prod-category').value,
                badge: document.getElementById('edit-prod-badge').value,
                originalPrice: document.getElementById('edit-prod-originalPrice').value.trim(),
                promoPrice: document.getElementById('edit-prod-promoPrice').value.trim(),
                imageOrientation: document.getElementById('edit-prod-orientation').value,
                imageUrl: document.getElementById('edit-prod-imageUrl').value.trim(),
                description: document.getElementById('edit-prod-description').value.trim(),
                longDescription: document.getElementById('edit-prod-longDescription').value.trim(),
                buttonText: document.getElementById('edit-prod-buttonText').value.trim(),
                buttonLink: document.getElementById('edit-prod-buttonLink').value.trim(),
                is_active: document.getElementById('edit-prod-isActive').checked ? 1 : 0,
            };

            if (!payload.title || !payload.promoPrice || !payload.imageUrl) {
                alert('Preencha os campos obrigatórios (Título, Preço e Imagem).');
                return;
            }

            const url = id 
                ? '{{ url("/vitrine/admin/products") }}/' + id 
                : '{{ url("/vitrine/admin/products") }}';
            const method = id ? 'PUT' : 'POST';

            try {
                const res = await fetch(url, {
                    method: method,
                    headers: { 'Content-Type': 'application/json', 'X-CSRF-TOKEN': '{{ csrf_token() }}' },
                    body: JSON.stringify(payload)
                });
                if (res.ok) {
                    showToast('Produto salvo com sucesso!');
                    closeProductEditModal();
                    window.location.reload();
                } else {
                    alert('Erro ao salvar produto.');
                }
            } catch (e) {
                alert('Erro de conexão ao salvar produto.');
            }
        }

        async function toggleProductVisibility(id, newStatus) {
            try {
                const res = await fetch('{{ url("/vitrine/admin/products") }}/' + id + '/toggle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    body: JSON.stringify({ is_active: newStatus })
                });
                if (res.ok) {
                    showToast(newStatus ? 'Produto agora está VISÍVEL na vitrine!' : 'Produto agora está OCULTO da vitrine!');
                    setTimeout(() => window.location.reload(), 600);
                } else {
                    alert('Não foi possível alterar a visibilidade.');
                }
            } catch (e) {
                alert('Erro ao conectar ao servidor.');
            }
        }

        async function restoreExcludedProducts() {
            if (!confirm('Deseja restaurar todos os cursos excluídos anteriormente e re-sincronizar com o Getfy?')) return;
            try {
                const res = await fetch('{{ url("/vitrine/admin/products/restore-excluded") }}', {
                    method: 'POST',
                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}' }
                });
                const data = await res.json();
                if (res.ok && data.success) {
                    showToast(data.message || 'Cursos restaurados com sucesso!');
                    setTimeout(() => window.location.reload(), 800);
                } else {
                    alert(data.error || 'Erro ao restaurar cursos.');
                }
            } catch (e) {
                alert('Erro de conexão ao restaurar.');
            }
        }

        async function savePaymentGateways() {
            const payment_gateways = {
                pix: document.getElementById('cfg-gateway-pix').value || 'disabled',
                card: document.getElementById('cfg-gateway-card').value || 'disabled',
                boleto: document.getElementById('cfg-gateway-boleto').value || 'disabled',
            };

            try {
                const res = await fetch('{{ url("/vitrine/admin/settings") }}', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': '{{ csrf_token() }}'
                    },
                    body: JSON.stringify({ payment_gateways })
                });
                if (res.ok) {
                    showToast('Gateways do carrinho salvos com sucesso!');
                } else {
                    alert('Erro ao salvar gateways do carrinho.');
                }
            } catch (e) {
                alert('Erro de conexão ao salvar.');
            }
        }

        async function deleteProduct(id) {
            if (!confirm('Deseja excluir este produto permanentemente da vitrine?\n\n(Dica: se quiser apenas ocultar temporariamente dos clientes, clique no botão "Visível/Oculto")')) return;
            try {
                const res = await fetch('{{ url("/vitrine/admin/products") }}/' + id, {
                    method: 'DELETE',
                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}' }
                });
                if (res.ok) {
                    showToast('Produto excluído da vitrine.');
                    window.location.reload();
                }
            } catch (e) {
                alert('Erro ao excluir produto.');
            }
        }
    </script>
</body>
</html>
