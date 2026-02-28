import "./style.css";
import {
  Navbar,
  initNavbar,
  initNavbarActiveLink,
} from "./components/navbar.js";
import { Hero } from "./components/home/hero.js";
import {
  productFeature,
  initProductFeature,
} from "./components/home/productFeature.js";
import { Banner } from "./components/home/banner.js";
import {
  exploreMore,
  switchExploreTab,
} from "./components/home/exploreMore.js";
import { reviewRating } from "./components/home/reviewRating.js";
import { Footer } from "./components/footer.js";
import { ScrollTopBtn } from "./components/ScrollTopBtn.js";
import { initScrollTop } from "./utils/scrollTop.js";

const WA_NUMBER = "6282211866577";

window.orderViaWhatsApp = function (productName, price) {
  const pesan =
    `Halo Kak Ondel-Ondel! 👋\n` +
    `Saya ingin memesan produk berikut:\n\n` +
    `🍪 *Produk :* ${productName}\n` +
    `💰 *Harga  :* ${price} / toples\n\n` +
    `Mohon isi data saya:\n` +
    `👤 *Nama          :* \n` +
    `📍 *Alamat Lengkap:* \n` +
    `📦 *Jumlah        :* \n` +
    `🚚 *Pengiriman    :* (pickup / kirim)\n\n` +
    `Terima kasih! 🙏`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
};

window.switchExploreTab = switchExploreTab;

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${productFeature()}
  ${Banner()}
  ${exploreMore()}
  ${reviewRating()}
  ${Footer()}
  ${ScrollTopBtn()}
`;

initProductFeature();
initNavbar();
initScrollTop();
initNavbarActiveLink();
