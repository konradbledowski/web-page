document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Nasłuchiwanie scrolla
  window.addEventListener('scroll', handleScroll);

  // Wywołaj raz na start, by sprawdzić pozycję po odświeżeniu
  handleScroll();
});
