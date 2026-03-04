import logo from "../../assets/logo.png";
import menuImg from '../../assets/menu.jpeg'
import posterImg from '../../assets/poster-ondel-ondel.jpeg'

export function mainAbout() {
  return `

  <div class="h-24"></div>

 
      <main class="relative bg-accents z-0">

    <!-- HERO ABOUT -->
    <section class="relative pt-10 pb-14 px-6 sm:px-10 lg:px-20">
      <div class="max-w-screen-xl mx-auto text-center relative z-10 reveal">
        <span class="badge-tag mb-4 inline-flex">✦ <span>Tentang Kami</span></span>

        <h1 class="text-7xl sm:text-6xl font-bold text-[#f5f0e8] section-title">
          Sejarah Ondel-Ondel Cake and Cookies
        </h1>

        <p class="text-[#b8a898] mt-5 max-w-2xl mx-auto leading-relaxed" style="font-family:'DM Sans',sans-serif;">
          Dari resep keluarga menjadi pilihan hampers premium—konsisten, rapi, dan selalu bikin nagih.
        </p>

        <div class="w-20 h-0.5 bg-[#c0602a] mx-auto mt-7 rounded-full"></div>

        <div class="mt-10 flex flex-wrap justify-center gap-2">
          <span class="badge-tag">Premium Ingredients</span>
          <span class="badge-tag">Handmade</span>
          <span class="badge-tag">Hampers Ready</span>
          <span class="badge-tag">Fast Response</span>
        </div>
      </div>

      
    </section>

    <div class="soft-divider max-w-screen-xl mx-auto"></div>

     <!-- SEJARAH + TIMELINE + HIGHLIGHT -->
    <section id="sejarahSection" class="py-14 px-6 sm:px-10 lg:px-20">
      <div class="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        <div class="glass card p-8 reveal">
          <div class="flex items-center gap-4 mb-6">
            <div class="icon-chip">
              <svg class="w-5 h-5 text-[#d4a96a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-semibold text-[#f5f0e8]" style="font-family:'Playfair Display',serif;">
                Cerita Kami
              </h2>
              <p class="text-[#b8a898] text-sm mt-1" style="font-family:'DM Sans',sans-serif;">
                Perjalanan dari dapur rumahan sampai jadi favorit hampers.
              </p>
            </div>
          </div>

          <p class="text-[#b8a898] leading-relaxed" style="font-family:'DM Sans',sans-serif;">
            Ondel-Ondel Cake and Cookies lahir dari dapur rumahan dan resep keluarga untuk momen spesial.
            Berawal dari permintaan teman dan keluarga, kami memproduksi secara konsisten
            dengan fokus pada bahan premium, rasa yang “nagih”, dan packaging rapi.
          </p>

          <div class="mt-8 timeline space-y-5">
            <div class="flex gap-4">
              <div class="dot"></div>
              <div>
                <p class="text-[#f5f0e8] font-semibold" style="font-family:'Poppins',sans-serif;">Awal mula</p>
                <p class="text-[#b8a898] text-sm" style="font-family:'DM Sans',sans-serif;">Resep keluarga untuk momen spesial.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="dot"></div>
              <div>
                <p class="text-[#f5f0e8] font-semibold" style="font-family:'Poppins',sans-serif;">Mulai produksi</p>
                <p class="text-[#b8a898] text-sm" style="font-family:'DM Sans',sans-serif;">Permintaan meningkat → produksi konsisten.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="dot"></div>
              <div>
                <p class="text-[#f5f0e8] font-semibold" style="font-family:'Poppins',sans-serif;">Premium hampers</p>
                <p class="text-[#b8a898] text-sm" style="font-family:'DM Sans',sans-serif;">Fokus rasa, detail, dan packaging.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="glass card p-8 reveal">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-[#d4a96a] text-lg font-semibold" style="font-family:'Poppins',sans-serif;">Highlight</h3>
            <div class="w-16 h-0.5 bg-[#c0602a] rounded-full"></div>
          </div>

          <ul class="text-[#b8a898] space-y-4" style="font-family:'DM Sans',sans-serif;">
            <li class="flex gap-4">
              <span class="text-[#c0602a] mt-1">✦</span>
              <div>
                <p class="text-[#f5f0e8] font-semibold">Fokus</p>
                <p class="text-sm">Kue kering premium & hampers</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="text-[#c0602a] mt-1">✦</span>
              <div>
                <p class="text-[#f5f0e8] font-semibold">Bahan</p>
                <p class="text-sm">Pilihan & kualitas terjaga</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="text-[#c0602a] mt-1">✦</span>
              <div>
                <p class="text-[#f5f0e8] font-semibold">Target</p>
                <p class="text-sm">Pelanggan rumahan & corporate</p>
              </div>
            </li>
          </ul>

          <div class="mt-8 soft-divider"></div>

          <div class="mt-6">
            <p class="text-[#b8a898] text-sm leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              Detail kecil bikin beda: konsistensi rasa, kebersihan, dan packaging yang rapi.
            </p>
          </div>
        </div>

      </div>
    </section>

     <!-- BRAND IDENTITY SECTION -->
    <section class="relative pt-16 pb-10 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div class="max-w-screen-xl mx-auto">
        <div class="glass card p-10 md:p-14 reveal">
          <div class="flex flex-col md:flex-row items-center gap-12">
            
            <!-- Logo Side -->
            <div class="flex flex-col items-center gap-5 flex-shrink-0">
              <div class="w-36 h-36 rounded-full bg-[#f9eee7]
                          flex items-center justify-center 
                          shadow-[0_0_60px_rgba(192,96,42,0.35)]
                          border border-[#2a1f10]">
                <img src="${logo}" alt="Ondel-Ondel Logo" class="w-40 h-40 object-contain">
              </div>
              <div class="text-center">
                <p class="text-[#f5f0e8] font-semibold text-xl tracking-wide"
                  style="font-family:'Playfair Display',serif; font-style:italic;">
                  Ondel-Ondel
                </p>
                <p class="text-[#7a6e62] text-xs tracking-widest uppercase mt-1"
                  style="font-family:'DM Sans',sans-serif;">
                  Cake and Cookies
                </p>
              </div>
            </div>

            <!-- Divider vertical -->
            <div class="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-[#2a1f10] to-transparent"></div>

            <!-- Filosofi Side -->
            <div class="flex-1">
              <span class="badge-tag mb-4 inline-flex">✦ <span>Filosofi Brand</span></span>
              <h2 class="text-3xl sm:text-4xl font-bold text-[#f5f0e8] mt-3 section-title">
                Filosofi Logo
              </h2>
              <div class="w-12 h-0.5 bg-[#c0602a] mt-4 mb-6 rounded-full"></div>
              <p class="text-[#b8a898] leading-relaxed mb-5" style="font-family:'DM Sans',sans-serif;">
                <span class="text-[#d4a96a] font-semibold">Ondel-Ondel Cake and Cookies</span> Logo ini menyatukan ikon budaya Betawi (Ondel-ondel & Monas) sebagai identitas lokal yang kuat dengan tangkai gandum sebagai simbol bahan baku berkualitas. Paduan warna cokelat dan lingkaran ganda mencerminkan kehangatan serta komitmen brand dalam menyajikan kelezatan tradisional yang terpercaya sejak 2016.
              </p>
              <p class="text-[#b8a898] leading-relaxed" style="font-family:'DM Sans',sans-serif;">
                Nama ini juga mencerminkan semangat kami: <span class="text-[#f5f0e8]">berani tampil beda</span>, 
                mempertahankan kualitas, dan membawa kebahagiaan lewat setiap gigitan.
              </p>

              <div class="mt-8 grid grid-cols-3 gap-4">
                <div class="text-center p-4 rounded-xl border border-[#2a1f10] bg-[#0d0905]">
                  <p class="text-[#c0602a] text-2xl font-bold" style="font-family:'Playfair Display',serif;">500+</p>
                  <p class="text-[#7a6e62] text-xs mt-1" style="font-family:'DM Sans',sans-serif;">Order Selesai</p>
                </div>
                <div class="text-center p-4 rounded-xl border border-[#2a1f10] bg-[#0d0905]">
                  <p class="text-[#c0602a] text-2xl font-bold" style="font-family:'Playfair Display',serif;">4.9★</p>
                  <p class="text-[#7a6e62] text-xs mt-1" style="font-family:'DM Sans',sans-serif;">Rating Rata-rata</p>
                </div>
                <div class="text-center p-4 rounded-xl border border-[#2a1f10] bg-[#0d0905]">
                  <p class="text-[#c0602a] text-2xl font-bold" style="font-family:'Playfair Display',serif;">13+</p>
                  <p class="text-[#7a6e62] text-xs mt-1" style="font-family:'DM Sans',sans-serif;">Varian Produk</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- POSTER & MENU SECTION -->
    <div class="soft-divider max-w-screen-xl mx-auto"></div>

    <section class="py-14 px-6 sm:px-10 lg:px-20">
      <div class="max-w-screen-xl mx-auto">
        
        <div class="text-center mb-10 reveal">
          <span class="badge-tag mb-4 inline-flex">✦ <span>Visual Kami</span></span>
          <h2 class="text-4xl sm:text-5xl font-bold text-[#f5f0e8] section-title">Poster & Menu</h2>
          <div class="w-20 h-0.5 bg-[#c0602a] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Poster -->
          <div class="glass card reveal overflow-hidden">
            <div class="p-5 border-b border-[#2a1f10]">
              <p class="text-[#d4a96a] text-sm font-semibold tracking-widest uppercase"
                style="font-family:'DM Sans',sans-serif;">✦ Poster</p>
              <h3 class="text-[#f5f0e8] text-xl font-semibold mt-1"
                  style="font-family:'Playfair Display',serif;">Ondel-Ondel Cookies</h3>
            </div>
            <div class="overflow-hidden">
              <img src="${posterImg}" alt="Poster Ondel-Ondel"
                  class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
            </div>
          </div>

          <!-- Menu -->
          <div class="glass card reveal overflow-hidden">
            <div class="p-5 border-b border-[#2a1f10]">
              <p class="text-[#d4a96a] text-sm font-semibold tracking-widest uppercase"
                style="font-family:'DM Sans',sans-serif;">✦ Menu</p>
              <h3 class="text-[#f5f0e8] text-xl font-semibold mt-1"
                  style="font-family:'Playfair Display',serif;">Daftar Produk Kami</h3>
            </div>
            <div class="overflow-hidden">
              <img src="${menuImg}" alt="Menu Ondel-Ondel"
                  class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
            </div>
          </div>

        </div>
      </div>
    </section>

    <div class="soft-divider max-w-screen-xl mx-auto"></div>

    <!-- WHY US (tambahan section biar makin keren) -->
    <section class="py-14 px-6 sm:px-10 lg:px-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-center mb-10 reveal">
          <span class="badge-tag mb-4 inline-flex">✦ <span>Kenapa Pilih Kami</span></span>
          <h2 class="text-4xl sm:text-5xl font-bold text-[#f5f0e8] section-title">Yang Bikin Beda</h2>
          <div class="w-20 h-0.5 bg-[#c0602a] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass card p-8 reveal">
            <div class="flex items-center gap-4 mb-4">
              <div class="icon-chip">
                <svg class="w-5 h-5 text-[#d4a96a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.5l2.5 5 5.5.8-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6-4-3.9 5.5-.8L12 6.5z"/>
                </svg>
              </div>
              <h3 class="text-[#f5f0e8] font-semibold" style="font-family:'Poppins',sans-serif;">Premium Rasa</h3>
            </div>
            <p class="text-[#b8a898] leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              Rasa konsisten, tekstur pas, dan dibuat dengan bahan yang terjaga kualitasnya.
            </p>
          </div>

          <div class="glass card p-8 reveal">
            <div class="flex items-center gap-4 mb-4">
              <div class="icon-chip">
                <svg class="w-5 h-5 text-[#d4a96a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0l-8 5-8-5m16 0l-8-5-8 5"/>
                </svg>
              </div>
              <h3 class="text-[#f5f0e8] font-semibold" style="font-family:'Poppins',sans-serif;">Packaging Elegan</h3>
            </div>
            <p class="text-[#b8a898] leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              Rapi, aman, dan cocok jadi hadiah. Hampers terasa lebih “niat”.
            </p>
          </div>

          <div class="glass card p-8 reveal">
            <div class="flex items-center gap-4 mb-4">
              <div class="icon-chip">
                <svg class="w-5 h-5 text-[#d4a96a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="text-[#f5f0e8] font-semibold" style="font-family:'Poppins',sans-serif;">Fast Response</h3>
            </div>
            <p class="text-[#b8a898] leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              Admin responsif & info jelas. Kamu bisa tanya dulu sebelum order.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="soft-divider max-w-screen-xl mx-auto"></div>

    <!-- VISI MISI -->
    <section class="py-14 px-6 sm:px-10 lg:px-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-center mb-10 reveal">
          <span class="badge-tag mb-4 inline-flex">✦ <span>Arah Kami</span></span>
          <h2 class="text-4xl sm:text-5xl font-bold text-[#f5f0e8] section-title">Visi & Misi</h2>
          <div class="w-20 h-0.5 bg-[#c0602a] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="glass card p-8 reveal">
            <div class="flex items-center gap-4 mb-4">
              <div class="icon-chip">
                <svg class="w-5 h-5 text-[#d4a96a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3l2.09 6.26L21 9.27l-5 3.64L17.18 21 12 17.77 6.82 21 8 12.91 3 9.27l6.91-1.01L12 3z"/>
                </svg>
              </div>
              <h3 class="text-[#d4a96a] text-xl font-semibold" style="font-family:'Poppins',sans-serif;">Visi</h3>
            </div>
            <p class="text-[#b8a898] leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              Menjadi brand kue yang menghadirkan cake dan cookies berkualitas premium, dapat dinikmati oleh semua kalangan tanpa mengorbankan cita rasa maupun mutu.
            </p>
          </div>

          <div class="glass card p-8 reveal">
            <div class="flex items-center gap-4 mb-4">
              <div class="icon-chip">
                <svg class="w-5 h-5 text-[#d4a96a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4M12 22C7.03 20.5 4 16.36 4 11V5l8-3 8 3v6c0 5.36-3.03 9.5-8 11z"/>
                </svg>
              </div>
              <h3 class="text-[#d4a96a] text-xl font-semibold" style="font-family:'Poppins',sans-serif;">Misi</h3>
            </div>

            <ul class="text-[#b8a898] space-y-3 leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              <li class="flex gap-3"><span class="text-[#c0602a]">•</span> Menghadirkan kue kering dan cake dengan bahan pilihan dan standar kualitas terbaik.</li>
              <li class="flex gap-3"><span class="text-[#c0602a]">•</span> Menawarkan produk premium dengan harga yang tetap terjangkau.</li>
              <li class="flex gap-3"><span class="text-[#c0602a]">•</span> Menjaga konsistensi rasa, tekstur, dan tampilan dalam setiap produk.</li>
              <li class="flex gap-3"><span class="text-[#c0602a]">•</span> Memberikan pengalaman manis yang berkesan bagi setiap pelanggan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div class="soft-divider max-w-screen-xl mx-auto"></div>

    <!-- SWOT -->
    <section class="py-14 px-6 sm:px-10 lg:px-20">
      <div class="max-w-screen-xl mx-auto">
        <div class="text-center mb-10 reveal">
          <span class="badge-tag mb-4 inline-flex">✦ <span>Analisis</span></span>
          <h2 class="text-4xl sm:text-5xl font-bold text-[#f5f0e8] section-title">SWOT</h2>
          <div class="w-20 h-0.5 bg-[#c0602a] mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass card p-8 reveal">
            <h3 class="text-[#d4a96a] text-xl font-semibold mb-4" style="font-family:'Poppins',sans-serif;">Strength</h3>
            <ul class="text-[#b8a898] space-y-2" style="font-family:'DM Sans',sans-serif;">
              <li>• Bahan premium & rasa konsisten</li>
              <li>• Brand image elegan, cocok untuk hampers</li>
              <li>• Rating & repeat order tinggi</li>
            </ul>
          </div>

          <div class="glass card p-8 reveal">
            <h3 class="text-[#d4a96a] text-xl font-semibold mb-4" style="font-family:'Poppins',sans-serif;">Weakness</h3>
            <ul class="text-[#b8a898] space-y-2" style="font-family:'DM Sans',sans-serif;">
              <li>• Kapasitas produksi terbatas</li>
              <li>• Ketergantungan musim (high season)</li>
              <li>• Distribusi belum luas</li>
            </ul>
          </div>

          <div class="glass card p-8 reveal">
            <h3 class="text-[#d4a96a] text-xl font-semibold mb-4" style="font-family:'Poppins',sans-serif;">Opportunity</h3>
            <ul class="text-[#b8a898] space-y-2" style="font-family:'DM Sans',sans-serif;">
              <li>• Tren snack premium & hampers meningkat</li>
              <li>• Marketplace & social commerce berkembang</li>
              <li>• Peluang kerjasama corporate gift</li>
            </ul>
          </div>

          <div class="glass card p-8 reveal">
            <h3 class="text-[#d4a96a] text-xl font-semibold mb-4" style="font-family:'Poppins',sans-serif;">Threat</h3>
            <ul class="text-[#b8a898] space-y-2" style="font-family:'DM Sans',sans-serif;">
              <li>• Kompetitor harga lebih murah</li>
              <li>• Fluktuasi harga bahan baku</li>
              <li>• Tren produk cepat berubah</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / HERO -->
    <section class="px-6 sm:px-10 lg:px-20 pb-16">
      <div class="max-w-screen-xl mx-auto glass card p-10 md:p-12 reveal">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <h2 class="text-4xl sm:text-5xl font-bold text-[#f5f0e8] section-title">
              Cita Rasa<br>Bikin Ketagihan
            </h2>
            <p class="text-[#b8a898] mt-5 max-w-xl leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              Kualitas premium, harga terjangkau — dari dapur kami langsung ke meja makan Anda.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span class="badge-tag">Packaging Rapi</span>
              <span class="badge-tag">Fresh Batch</span>
              <span class="badge-tag">Fast Response</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <a href="index.html#productSection" class="btn-primary">Beli Sekarang</a>
            <a href="contact.html"
              class="px-6 py-3 rounded-full border border-[#2a1f10] text-[#f5f0e8] hover:border-[#c0602a] hover:text-[#d4a96a] transition"
              style="font-family:'DM Sans',sans-serif;">
              Tanya Admin
            </a>
          </div>
        </div>
      </div>
    </section>

  </main>
    `;
}
