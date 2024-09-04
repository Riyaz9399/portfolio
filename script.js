window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.pageYOffset;
  
    sections.forEach((section) => {
      if (section.offsetTop - window.innerHeight / 1.3 < scrollPos) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  });
  