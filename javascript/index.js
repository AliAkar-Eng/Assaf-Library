AOS.init({


duration:1000,

offset:100,



easing:'ease-in-out',



});

// Smooth scroll for anchor links accounting for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navbarHeight = 70; // fixed navbar height
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
  
  // Prevent auto-scroll on page load
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);
  });
  