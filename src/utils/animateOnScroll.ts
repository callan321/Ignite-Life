export function animateOnScroll() {
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[animate-on-scroll]');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.getAttribute('animate-on-scroll');
          if (animationClass) {
            entry.target.classList.add(animationClass);
          }
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  });
}