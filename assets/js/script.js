document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.querySelector('.main-header');

  // --- OBSŁUGA SCROLLA ---
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // --- OBSŁUGA BURGERA (Dodałem, żeby kod był kompletny) ---
  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      burger.classList.toggle('toggle');
    });
  }

  // --- OBSŁUGA BANERA COOKIES ---
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');

  // 1. Sprawdź czy baner powinien być widoczny
  if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.setProperty('display', 'block', 'important');
  }

  // 2. Obsługa kliknięcia
  if (acceptBtn && cookieBanner) {
    acceptBtn.onclick = function () {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.setProperty('display', 'none', 'important');
      console.log('Baner zaakceptowany i ukryty.');
    };
  }
});

// Nasłuchiwanie scrolla
window.addEventListener('scroll', handleScroll);
// Wywołaj raz na start
handleScroll();

// --- OBSŁUGA MENU MOBILNEGO (Burger) ---
if (burger) {
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('toggle');

    // Blokada scrollowania strony, gdy menu jest otwarte
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
}

// Zamykanie menu po kliknięciu w dowolny link (płynne przejście)
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    burger.classList.remove('toggle');
    document.body.style.overflow = 'auto';
  });
});
