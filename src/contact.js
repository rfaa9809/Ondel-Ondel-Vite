import "./style.css";
import {
  Navbar,
  initNavbar,
  initNavbarActiveLink,
} from "./components/navbar.js";
import { HeroContact } from "./components/contact/hero.js";
import { Footer } from "./components/footer.js";
import { mainContact } from "./components/contact/mainContact.js";
import { ScrollTopBtn } from "./components/ScrollTopBtn.js";
import { initScrollTop } from "./utils/scrollTop.js";
import { initFormToWhastapp } from "./components/contact/mainContact.js";

document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${HeroContact()}
  ${mainContact()}
  ${Footer()}
  ${ScrollTopBtn()}
  `;

initNavbar();
initScrollTop();
initNavbarActiveLink();
initFormToWhastapp();
