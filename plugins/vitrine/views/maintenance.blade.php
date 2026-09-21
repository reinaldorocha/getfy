<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $settings->maintenance_title ?: 'Estamos em Manutenção' }} | {{ $settings->siteName ?: 'Vitrine' }}</title>
    
    @if($settings->faviconUrl)
        <link rel="icon" href="{{ $settings->faviconUrl }}">
    @endif

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
        body {
            font-family: 'Inter', sans-serif;
            background-color: {{ $settings->bgColor ?: '#0a0a0a' }};
            color: #ffffff;
        }
        .glow-sphere {
            position: absolute;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, {{ $settings->primaryColor ?: '#dc2626' }}22 0%, rgba(0,0,0,0) 70%);
            border-radius: 50%;
            pointer-events: none;
            filter: blur(60px);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-[#0a0a0a]">

    <!-- Ambient glow spheres -->
    <div class="glow-sphere top-[-100px] left-1/2 -translate-x-1/2"></div>
    <div class="glow-sphere bottom-[-150px] right-[-100px]"></div>

    <!-- Main Container -->
    <div class="relative z-10 max-w-xl w-full mx-auto text-center flex flex-col items-center">
        
        <!-- Logo -->
        <div class="mb-8">
            @if($settings->logoUrl)
                <img src="{{ $settings->logoUrl }}" alt="{{ $settings->siteName }}" class="h-14 max-w-[240px] object-contain mx-auto">
            @else
                <div class="text-3xl font-extrabold tracking-wider text-white">
                    {{ $settings->siteName ?: 'VITRINE' }}
                </div>
            @endif
        </div>

        <!-- Glass Card -->
        <div class="w-full bg-[#121212]/85 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-magenta to-transparent"></div>

            <!-- Maintenance Icon / Badge -->
            <div class="mx-auto w-16 h-16 rounded-2xl bg-brand-magenta/15 border border-brand-magenta/30 flex items-center justify-center mb-6 shadow-lg shadow-brand-magenta/10">
                <i data-lucide="wrench" class="w-8 h-8 text-brand-magenta"></i>
            </div>

            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-5">
                <span class="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                Manutenção Programada
            </div>

            <!-- Title -->
            <h1 class="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {{ $settings->maintenance_title ?: 'Estamos em Manutenção' }}
            </h1>

            <!-- Message -->
            <p class="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
                {{ $settings->maintenance_message ?: 'Nossa vitrine está temporariamente indisponível para melhorias e atualizações. Voltaremos em breve com novidades!' }}
            </p>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                @if($settings->supportWhatsapp)
                    @php
                        $cleanPhone = preg_replace('/[^0-9]/', '', $settings->supportWhatsapp);
                        $whatsappUrl = "https://wa.me/{$cleanPhone}?text=" . urlencode("Olá! Vi que o site está em manutenção e gostaria de informações.");
                    @endphp
                    <a href="{{ $whatsappUrl }}" target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-700/40">
                        <i data-lucide="message-circle" class="w-4 h-4"></i>
                        Falar no WhatsApp
                    </a>
                @endif

                <button onclick="window.location.reload()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm transition-all duration-200">
                    <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                    Atualizar Página
                </button>
            </div>
        </div>

        <!-- Footer Info & Admin link -->
        <div class="mt-8 text-center text-xs text-white/40 flex flex-col items-center gap-2">
            <p>&copy; {{ date('Y') }} {{ $settings->siteName ?: 'Vitrine' }}. Todos os direitos reservados.</p>
            <a href="{{ url('/vitrine/admin') }}" class="text-white/30 hover:text-white/60 transition-colors inline-flex items-center gap-1">
                <i data-lucide="lock" class="w-3 h-3"></i> Acesso Administrativo
            </a>
        </div>
    </div>

    <script>
        lucide.createIcons();
    </script>
</body>
</html>
