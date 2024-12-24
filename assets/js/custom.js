const aos = () => {
  AOS.init({
    duration: 1200,
    once: true,
  });
};

aos();

// Dynamic Gallery Modal
const galleryModal = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("galleryModal");
    const modalImage = document.getElementById("galleryModalImage");

    document.querySelectorAll(".box-wrapper").forEach((box) => {
      box.addEventListener("click", () => {
        const imgSrc = box.getAttribute("data-img-src");
        modalImage.src = imgSrc;
      });
    });
  });
};

galleryModal();

// NAVBAR
const navbar = () => {
  // Add Active Class to Navbar
  const navLinkEls = document.querySelectorAll(".nav-link");

  navLinkEls.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      // Remove 'active' class from all nav items
      navLinkEls.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked nav item
      navLink.classList.add("active");
    });
  });

  const initNavbarScrollEffect = () => {
    const menu = document.querySelector(".menu");
    const hero = document.querySelector(".hero");

    if (!menu || !hero) {
      console.warn("Required elements '.menu' or '.hero' not found.");
      return;
    }

    const heroHeight = hero.offsetHeight;

    window.addEventListener("scroll", () => {
      const isScrolled = window.scrollY >= heroHeight;

      menu.classList.toggle("fixed-top", isScrolled);
      menu.classList.toggle("menu-fade-down-bg", isScrolled);
      menu.classList.toggle("rounded", !isScrolled);
    });
  };

  initNavbarScrollEffect();
};
navbar();
