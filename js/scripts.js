// Smooth Scrolling for Anchor Links with a More Dynamic Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Reveal Animations for Elements as They Come Into View
const elements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

elements.forEach(element => {
  observer.observe(element);
});

// Dynamic Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    navbar.style.transform = 'translateY(0)';
    navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  } else {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    navbar.style.transform = 'translateY(0)';
    navbar.style.boxShadow = 'none';
  }
});