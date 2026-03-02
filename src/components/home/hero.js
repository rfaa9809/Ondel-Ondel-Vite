export function Hero() {
  return `
<section class="hero">
    <div class="hero-photo"></div>
    <div class="hero-overlay"></div>
    
    <div class="hero-content w-full px-6 sm:px-10 lg:px-20 max-w-screen-xl mx-auto pb-24">
        <div class="max-w-xl">
            <p class="label-tag mb-5 animate-fade-up delay-1">✦ &nbsp; Kue & Kering Premium</p>
            <h1 class="hero-headline text-5xl sm:text-6xl md:text-7xl mb-6 animate-fade-up delay-2">Cita
                Rasa<br>Bikin Ketagihan</h1>
            <p class="hero-sub text-base sm:text-lg mb-10 animate-fade-up delay-3 max-w-sm">Kualitas premium, harga
                terjangkau — dari dapur kami langsung ke meja makan Anda.</p>
            <div class="flex flex-wrap gap-4 animate-fade-up delay-4">
                <a href="#productSection" class="btn-primary">Beli Sekarang
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
                <a href="about.html" class="btn-secondary">Pelajari Lebih Lanjut</a>
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-6 mt-12 animate-fade-up delay-5">
                <div>
                    <p class="text-[#f5f0e8] font-semibold text-xl" style="font-family:'Playfair Display',serif">500+</p>
                    <p class="text-[#7a6e62] text-xs tracking-wide uppercase mt-0.5">Pelanggan Puas</p>
                </div>
                <div class="w-px h-10 bg-[#3a2e20]"></div>
                <div>
                    <p class="text-[#f5f0e8] font-semibold text-xl" style="font-family:'Playfair Display',serif">13+</p>
                    <p class="text-[#7a6e62] text-xs tracking-wide uppercase mt-0.5">Varian Produk</p>
                </div>
                <div class="w-px h-10 bg-[#3a2e20]"></div>
                <div>
                    <p class="text-[#f5f0e8] font-semibold text-xl" style="font-family:'Playfair Display',serif">★ 4.9</p>
                    <p class="text-[#7a6e62] text-xs tracking-wide uppercase mt-0.5">Rating</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div
        onclick="window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })"
        class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 cursor-pointer hover:opacity-100 transition"
    >
        <span class="text-[#b8a898] text-xs tracking-widest uppercase"
            style="font-family:'DM Sans',sans-serif">Scroll</span>
        <div class="scroll-dot w-1 h-4 rounded-full bg-[#d4a96a]"></div>
        <svg xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-[#d4a96a] animate-bounce"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    </div>

</section>

    `;
}
