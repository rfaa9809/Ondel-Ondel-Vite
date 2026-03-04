
import "./style.css";
import {
  Navbar,
  initNavbar,
  initNavbarActiveLink,
} from "./components/navbar.js";
import { Footer } from "./components/footer.js";
import { ScrollTopBtn } from "./components/ScrollTopBtn.js";
import { initScrollTop } from "./utils/scrollTop.js";
const path = window.location.pathname;

const isServices = path.endsWith("/services.html") || path.endsWith("/services");

const WA_NUMBER = "6282211866577";

window.orderViaWhatsApp = function () {
  const pesan =
    `Halo Kak Ondel-Ondel! 👋\n`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
};

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${isServices ? Services() : `
    ${Hero()}
    ${productFeature()}
    ${Banner()}
    ${exploreMore()}
    ${reviewRating()}
  `}
  ${Footer()}
  ${ScrollTopBtn()}
`;

initNavbar();
initScrollTop();
initNavbarActiveLink();

if (!isServices) {
  initProductFeature();
} else {
  initServices(WA_NUMBER);
}

export function Services() {
  return `
    <section class="pt-32 pb-20 bg-[#0a0805] text-[#f5f0e8]">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Heading -->
        <div class="text-center mb-16">
          <p class="label-tag mb-3">OUR SERVICES</p>
          <h2 class="text-4xl md:text-5xl font-semibold italic mb-4">
            Layanan Ondel-Ondel Cake and Cookies 🍪
          </h2>
          <p class="hero-sub max-w-2xl mx-auto">
            Kami menghadirkan layanan terbaik untuk setiap momen spesial kamu.
            Mulai dari custom cake hingga paket acara premium.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          ${card("🎉 Paket Acara & Catering",
            "Snack box dan paket kue untuk arisan, meeting kantor dan acara seperti perayaan hari raya.",
            "Minimal 10 box")}

          ${card("🚚 Delivery Service",
            "Pengiriman aman & rapi. Bisa same-day sesuai jam order dan area pengiriman.",
            "Area kota")}

          ${card("📝 Sistem Pre-Order",
            "Produk dibuat setelah order masuk agar selalu fresh. Custom cake membutuhkan waktu produksi lebih lama.",
            "DP 50% Custom")}

          ${card("✨ Dessert Table Setup",
            "Setup dessert table & dekorasi sesuai tema acara kamu. Cocok untuk event premium.",
            "By Request")}
        </div>

        <!-- CTA -->
        <div class="mt-16 text-center">
          <p class="hero-sub mb-6">
            Siap buat momen kamu lebih manis bersama Ondel-Ondel Cake and Cookies?
          </p>
          <button 
            onclick="orderViaWhatsApp('LayananServices', 'Konsultasi')"
            class="btn-primary">
            Konsultasi via WhatsApp
          </button>
        </div>

      </div>
    </section>
  `;
}

function card(title, desc, badge) {
  return `
    <div class="p-6 rounded-2xl border border-[#3a2e20] bg-[#0f0c07] 
                hover:translate-y-[-4px] transition duration-300 
                shadow-lg shadow-black/30">

      <div class="text-xs tracking-widest text-[#d4a96a] mb-3">
        ${badge}
      </div>

      <h3 class="text-xl font-semibold mb-3">
        ${title}
      </h3>

      <p class="text-[#b8a898] leading-relaxed text-sm">
        ${desc}
      </p>
    </div>
  `;
}