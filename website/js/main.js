// ── Navbar: transparent → solid on scroll ────────────
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const floatingCta = document.getElementById('floatingCta');

function updateNavbar() {
  if (window.scrollY > 60) {
    navbar.classList.remove('navbar--transparent');
    navbar.classList.add('navbar--solid');
  } else {
    navbar.classList.remove('navbar--solid');
    if (document.querySelector('.hero')) navbar.classList.add('navbar--transparent');
  }
}

window.addEventListener('scroll', () => {
  updateNavbar();
  if (floatingCta) {
    floatingCta.classList.toggle('visible', window.scrollY > 400);
  }
}, { passive: true });

updateNavbar();

// ── Burger Menu ──────────────────────────────────────
if (burger && navMenu) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    navMenu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Active Nav Link ──────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar__nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Scroll Reveal (IntersectionObserver) ────────────
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || i * 80;
      setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── Smooth Scroll with Navbar Offset ────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 90;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
  });
});

// ── Hero Parallax Effect ────────────────────────────
function initParallax() {
  const heroBg = document.querySelector('.hero__parallax-bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
  }, { passive: true });
}
initParallax();

// ── Word Reveal Animation (Hero H1) ─────────────────
function initWordReveal() {
  const heroH1 = document.querySelector('.hero__inner h1');
  if (!heroH1) return;

  const originalText = heroH1.innerHTML;
  const words = originalText.split(' ');

  heroH1.innerHTML = words.map((word, i) =>
    `<span class="word-reveal" style="animation-delay: ${i * 120}ms">${word}</span>`
  ).join(' ');

  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes wordFadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .word-reveal {
      animation: wordFadeInUp 600ms var(--ease-out) forwards;
      display: inline-block;
      margin-right: 0.2em;
    }
  `;
  document.head.appendChild(style);
}
initWordReveal();

// ── Stats Counter Animation ─────────────────────────
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const count = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';

        if (!isNaN(count)) {
          let current = 0;
          const increment = count / 40; // animate over ~40 frames at 60fps
          const timer = setInterval(() => {
            current = Math.min(current + increment, count);
            el.textContent = Math.floor(current) + suffix;
            if (current >= count) {
              clearInterval(timer);
              el.textContent = count + suffix;
              observer.unobserve(el);
            }
          }, 16); // ~60fps
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}
initCounters();

// ── Staggered Entrance Animations ──────────────────
function initStaggeredAnimations() {
  const staggerGroups = [
    { selector: '.projects-grid .project-card', delay: 60 },
    { selector: '.services-overview-grid .service-overview-item', delay: 80 },
    { selector: '.testimonials-grid .testimonial-card', delay: 80 }
  ];

  staggerGroups.forEach(group => {
    const elements = document.querySelectorAll(group.selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const parent = entry.target.parentElement;
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.animationDelay = `${index * group.delay}ms`;
          entry.target.classList.add('stagger-animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  });
}
initStaggeredAnimations();

// ── Subtle Tilt on Scroll (Cards) ──────────────────
function initCardTilt() {
  const cards = document.querySelectorAll('.project-card, .service-overview-item, .testimonial-card');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;
      const distance = (screenCenter - cardCenter) * 0.05;

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.style.transform = `perspective(1000px) rotateX(${-distance}deg)`;
      }
    });
  }, { passive: true });
}
initCardTilt();
