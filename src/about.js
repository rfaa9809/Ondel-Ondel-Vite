// about.js
import "./style.css";
import { Navbar, initNavbar, initNavbarActiveLink } from "./components/navbar.js";
import { mainAbout } from "./components/about/mainAbout.js";
import { Footer } from "./components/footer.js";
import { ScrollTopBtn } from "./components/ScrollTopBtn.js";
import { initScrollTop } from "./utils/scrollTop.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${mainAbout()}
  ${Footer()}
  ${ScrollTopBtn()}
`;

initNavbar();
initScrollTop();
initNavbarActiveLink();

// reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// cursor glow
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".card").forEach(card => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", ((e.clientX - r.left) / r.width * 100) + "%");
    card.style.setProperty("--y", ((e.clientY - r.top) / r.height * 100) + "%");
  });
});