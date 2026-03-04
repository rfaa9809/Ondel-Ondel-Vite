import qrisImg from '../../assets/qris.jpg'

export function mainContact() {
  return `
        <section class="py-10 px-6 sm:px-10 lg:px-20 relative z-10">
      <div class="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

        <!-- KIRI (Info + Quick actions) -->
        <aside class="lg:col-span-4 space-y-6">

          <div class="glass card p-6">
            <h2 class="text-xl font-semibold text-[#f5f0e8]" style="font-family:'Playfair Display',serif;">
              Info Kontak
            </h2>
            <p class="text-[#b8a898] text-sm mt-2" style="font-family:'DM Sans',sans-serif;">
              Cara paling cepat: WhatsApp.
            </p>

            <div class="mt-5 space-y-4" style="font-family:'DM Sans',sans-serif;">
              <div class="flex gap-4">
                <div class="icon-chip">
                  <svg class="w-5 h-5 text-[#d4a96a]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.713 3.102c-.125-.501-.575-.852-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p class="text-[#f5f0e8] font-semibold">WhatsApp</p>
                  <a href="https://wa.me/6282211866577" target="_blank"
                    class="text-[#25D366] hover:text-[#6ef59a] transition font-semibold">
                    0822-1186-6577
                  </a>
                  <p class="text-xs muted mt-1">Klik untuk chat langsung</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="icon-chip">
                  <svg class="w-5 h-5 text-[#c0602a]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-[#f5f0e8] font-semibold">Alamat</p>
                  <p class="text-[#b8a898] text-sm">Jl Kampus Unkris No 29 RT 5 RW 9, Indonesia</p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="icon-chip">
                  <svg class="w-5 h-5 text-[#d4a96a]" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-[#f5f0e8] font-semibold">Jam</p>
                  <p class="text-[#b8a898] text-sm">Senin – Minggu, 08.00–20.00</p>
                </div>
              </div>
            </div>

            <div class="soft-divider my-5"></div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a href="https://wa.me/6282211866577" target="_blank"
                class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold
                       bg-[#25D366] text-[#0a0805] hover:brightness-110 transition">
                Chat WhatsApp
              </a>
              <a href="tel:+6282211866577"
                class="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold
                       border border-[#2a1f10] text-[#f5f0e8] hover:border-[#c0602a] hover:text-[#d4a96a] transition">
                Telepon
              </a>
            </div>
          </div>

          <!-- Mini promo / note biar penuh -->
          <div class="glass card p-6">
            <p class="text-xs tracking-widest uppercase text-[#7a6e62]" style="font-family:'DM Sans',sans-serif;">
              Catatan Order
            </p>
            <h3 class="text-[#f5f0e8] font-semibold mt-2" style="font-family:'Poppins',sans-serif;">
              Untuk hampers & corporate
            </h3>
            <p class="text-[#b8a898] text-sm mt-2 leading-relaxed" style="font-family:'DM Sans',sans-serif;">
              Sertakan jumlah, tanggal kirim, dan budget — biar kami bisa rekomendasikan paket terbaik.
            </p>
          </div>

                  <!-- QRIS -->
        <div class="glass card p-6">
          <p class="text-xs tracking-widest uppercase text-[#7a6e62]" style="font-family:'DM Sans',sans-serif;">
            Pembayaran
          </p>
          <h3 class="text-[#f5f0e8] font-semibold mt-2" style="font-family:'Poppins',sans-serif;">
            Scan QRIS
          </h3>
          <p class="text-[#b8a898] text-sm mt-2 leading-relaxed" style="font-family:'DM Sans',sans-serif;">
            Bayar langsung via QRIS — support semua e-wallet & m-banking.
          </p>

          <div class="mt-4 rounded-xl overflow-hidden border border-[#2a1f10] bg-white p-3 mx-auto max-w-[400px] md:max-w-[180px]">
            <img src="${qrisImg}" alt="QRIS Ondel-Ondel" class="w-full h-auto object-contain">
          </div>

          <div class="mt-3 flex flex-wrap gap-2 text-[#b8a898]">
            <span class="badge-tag">GoPay</span>
            <span class="badge-tag">OVO</span>
            <span class="badge-tag">Dana</span>
            <span class="badge-tag">BCA</span>
            <span class="badge-tag">Mandiri</span>
          </div>
        </div>

        </aside>

        <!-- TENGAH (FORM) -->
        <section class="lg:col-span-4">
          <div class="glass card p-6">
            <h3 class="text-xl font-semibold text-[#f5f0e8]" style="font-family:'Playfair Display',serif;">
              Kirim Pesan
            </h3>
            <p class="text-[#b8a898] text-sm mt-2" style="font-family:'DM Sans',sans-serif;">
              Setelah klik tombol, WhatsApp akan terbuka otomatis.
            </p>

            <form id="contactForm" class="mt-5 space-y-4" style="font-family:'DM Sans',sans-serif;">
              <div>
                <label class="text-[#b8a898] text-sm">Nama</label>
                <input id="nama" type="text" required class="field mt-2" placeholder="Nama kamu" />
              </div>

              <div>
                <label class="text-[#b8a898] text-sm">No. WhatsApp</label>
                <input id="wa" type="text" required class="field mt-2" placeholder="Contoh: 0812xxxx" />
              </div>

              <div>
                <label class="text-[#b8a898] text-sm">Kategori</label>
                <select id="kategori" class="field mt-2">
                  <option value="Order Produk">Order Produk</option>
                  <option value="Hampers / Gift">Hampers / Gift</option>
                  <option value="Corporate / Event">Corporate / Event</option>
                  <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                </select>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="text-[#b8a898] text-sm">Tanggal dibutuhkan</label>
                  <input id="tanggal" type="date" class="field mt-2" />
                </div>
                <div>
                  <label class="text-[#b8a898] text-sm">Jumlah</label>
                  <input id="jumlah" type="text" class="field mt-2" placeholder="Misal: 5 box" />
                </div>
              </div>

              <div>
                <label class="text-[#b8a898] text-sm">Pesan</label>
                <textarea id="pesan" rows="5" required class="field mt-2" placeholder="Tulis pesan kamu..."></textarea>
                <p class="text-xs muted mt-2">Semakin detail, semakin cepat kami bantu.</p>
              </div>

              <button type="submit"
                class="w-full px-6 py-3 rounded-xl font-semibold
                       bg-gradient-to-r from-[#8B5E34] to-[#F28C38] text-white
                       hover:brightness-110 transition">
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </section>

        <!-- KANAN (MAP + FAQ) -->
        <aside class="lg:col-span-4 space-y-6">

          <div class="glass card overflow-hidden">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-[#f5f0e8]" style="font-family:'Playfair Display',serif;">
                Lokasi Kami
              </h3>
              <p class="text-[#b8a898] text-sm mt-2" style="font-family:'DM Sans',sans-serif;">
                Klik untuk melihat rute.
              </p>
            </div>

            <div class="relative h-[260px]">
              <iframe
                class="w-full h-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.989179204456!2d106.9085274!3d-6.2651525999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3000f412ad1%3A0x9345f34eb957e7b8!2sOndel%20Ondel%20Cake%20and%20cookies!5e0!3m2!1sid!2sid!4v1772274804913!5m2!1sid!2sid">
              </iframe>

              <a href="https://maps.app.goo.gl/fLAQy6axQHRs6E6a8" target="_blank"
                class="absolute bottom-4 right-4 px-4 py-2 rounded-xl font-semibold text-sm
                       bg-[#0d0905]/80 border border-[#2a1f10] text-[#f5f0e8]
                       hover:border-[#c0602a] hover:text-[#d4a96a] transition"
                style="font-family:'DM Sans',sans-serif;">
                Buka di Google Maps →
              </a>
            </div>
          </div>

          <div class="glass card p-6">
            <h3 class="text-xl font-semibold text-[#f5f0e8]" style="font-family:'Playfair Display',serif;">
              Pertanyaan Umum
            </h3>

            <div class="mt-4 space-y-3 text-[#b8a898]" style="font-family:'DM Sans',sans-serif;">
              <div class="p-4 rounded-xl bg-[#0d0905] border border-[#2a1f10]">
                <p class="text-[#f5f0e8] font-semibold">Pengiriman area mana?</p>
                <p class="text-sm mt-1 muted">Jakarta & sekitarnya (tanya dulu ya).</p>
              </div>
              <div class="p-4 rounded-xl bg-[#0d0905] border border-[#2a1f10]">
                <p class="text-[#f5f0e8] font-semibold">Bisa corporate/event?</p>
                <p class="text-sm mt-1 muted">Bisa, tersedia paket hampers premium.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#0d0905] border border-[#2a1f10]">
                <p class="text-[#f5f0e8] font-semibold">Minimal pre-order?</p>
                <p class="text-sm mt-1 muted">Tergantung produk, biasanya 1–2 hari.</p>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </section>
    `;
}


export function initFormToWhastapp() {
  const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const wa = document.getElementById("wa").value.trim();
        const kategori = document.getElementById("kategori").value;
        const tanggal = document.getElementById("tanggal").value;
        const jumlah = document.getElementById("jumlah").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        const nomorTujuan = "6282211866577"; // admin tujuan
        const msg =
          `Halo Ondel-Ondel!%0A%0A` +
          `Nama: ${encodeURIComponent(nama)}%0A` +
          `WA: ${encodeURIComponent(wa)}%0A` +
          `Kategori: ${encodeURIComponent(kategori)}%0A` +
          `Tanggal dibutuhkan: ${encodeURIComponent(tanggal || "-")}%0A` +
          `Jumlah: ${encodeURIComponent(jumlah || "-")}%0A%0A` +
          `Pesan:%0A${encodeURIComponent(pesan)}`;

        window.open(`https://wa.me/${nomorTujuan}?text=${msg}`, "_blank");
      });
}
}