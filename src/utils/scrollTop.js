export function initScrollTop() {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 200);
  });

  window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}