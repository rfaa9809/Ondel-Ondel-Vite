export function Navbar() {
  return `
    <nav class="fixed w-full z-20 top-0 start-0" id="mainNav">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-5">
        <a href="#" class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-[#c0602a] flex items-center justify-center">
            <svg
              class="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 3a1 1 0 110 2 1 1 0 010-2zm-3 8l1.5-4.5h3L13 13H7z" />
            </svg>
          </div>
          <span
            class="text-[#f5f0e8] font-semibold text-base tracking-wide"
            style="font-family:'Playfair Display',serif"
          >
            Ondel-Ondel
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-main"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-[#b8a898] rounded-md md:hidden hover:text-[#f5f0e8]"
          aria-controls="navbar-main"
          aria-expanded="false"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto transition-all duration-300" id="navbar-main">
          <ul class="flex flex-col md:flex-row md:gap-8 gap-1 mt-4 md:mt-0 p-4 md:p-0 
                    bg-[#0d0905] md:bg-transparent rounded-xl md:rounded-none 
                    border border-[#2a1f10] md:border-none">
            <li><a href="/" class="nav-link block py-2 px-3 md:p-0">Home</a></li>
            <li><a href="/about.html" class="nav-link block py-2 px-3 md:p-0">About</a></li>
            <li><a href="/contact.html" class="nav-link block py-2 px-3 md:p-0">Contact Us</a></li>
            <li><a href="/services.html" class="nav-link block py-2 px-3 md:p-0">Services</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const nav = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  const toggleBtn = document.querySelector("[data-collapse-toggle]");
  const navMenu = document.getElementById("navbar-main");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });

    // tutup menu kalau klik link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
      });
    });

    // tutup menu kalau klik di luar
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) {
        navMenu.classList.add("hidden");
      }
    });
  }
}

export function initNavbarActiveLink() {
  const currentPath = window.location.pathname;
  console.log("Current path:", currentPath);

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    console.log("Link path:", linkPath);

    link.classList.remove("active");

    if (
      currentPath === linkPath ||
      (currentPath === "/" && linkPath === "/") ||
      (currentPath.includes(linkPath) && linkPath !== "/")
    ) {
      link.classList.add("active");
    }
  });
}
