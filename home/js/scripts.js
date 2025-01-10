document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const handleScroll = () => {
    fadeInElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});
