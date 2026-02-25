import bannerImg from '../../assets/banner-about-bg.png';

export function Banner() {
  return `
            <section class="relative overflow-hidden" style="height: 280px;">
        <!-- Background image — full cover, no crop -->
        <img src="${bannerImg}" alt="Ondel-Ondel Products" class="absolute inset-0 w-full h-full"
            style="object-fit: cover; object-position: center center; background-repeat: no-repeat;" />
        <!-- Dark overlay so text readable -->
        <div class="absolute inset-0" style="background: rgba(15, 8, 2, 0.52);"></div>

        <!-- Centered content -->
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2 class="text-white text-3xl sm:text-4xl font-bold mb-3"
                style="font-family:'Playfair Display',serif; font-style:italic;">
                About us
            </h2>
            <p class="text-[#d4c4b0] text-sm sm:text-base max-w-sm mx-auto mb-6 leading-relaxed"
                style="font-family:'DM Sans',sans-serif;">
                Menyediakan Berbagai Macam Cookies Renyah dan Bolu Empuk yang Setala Enak dan Lezat
            </p>
            <a href="about.html" style="background:#c0602a; font-family:'DM Sans',sans-serif;"
                class="inline-block text-white font-semibold text-sm px-8 py-2.5 rounded-md hover:bg-[#a84e22] active:scale-95 transition-all duration-200">
                Read More
            </a>
        </div>
    </section>
    `;
}
