// Load content from JSON and populate the website
let CONTENT = {};

async function loadContent() {
  try {
    const response = await fetch('content.json');
    if (!response.ok) throw new Error('content.json not found');
    CONTENT = await response.json();
    applyContent();
  } catch (error) {
    console.error('Error loading content.json:', error);
  }
}

function applyContent() {
  // Company/Contact info
  if (CONTENT.contact) {
    document.querySelectorAll('[data-content="phone"]').forEach(el => {
      el.textContent = CONTENT.contact.phone;
      if (el.tagName === 'A') el.href = `tel:${CONTENT.contact.phone}`;
    });
    document.querySelectorAll('[data-content="email"]').forEach(el => {
      el.textContent = CONTENT.contact.email;
      if (el.tagName === 'A') el.href = `mailto:${CONTENT.contact.email}`;
    });
    document.querySelectorAll('[data-content="location"]').forEach(el => {
      el.textContent = CONTENT.contact.location;
    });
    document.querySelectorAll('[data-content="openingHours"]').forEach(el => {
      el.textContent = CONTENT.contact.openingHours;
    });
  }

  // Hero section
  if (CONTENT.hero) {
    const heroHeading = document.querySelector('[data-content="heroHeadline"]');
    if (heroHeading) {
      heroHeading.innerHTML = CONTENT.hero.headline.replace('begeistern', '<em>begeistern</em>');
    }

    const heroSubheading = document.querySelector('[data-content="heroSubheadline"]');
    if (heroSubheading) heroSubheading.textContent = CONTENT.hero.subheadline;
  }

  // Stats
  if (CONTENT.stats) {
    const statsElements = document.querySelectorAll('[data-stat]');
    statsElements.forEach(el => {
      const statKey = el.getAttribute('data-stat');
      if (CONTENT.stats[statKey]) {
        el.textContent = CONTENT.stats[statKey];
      }
    });
  }

  // Company year
  if (CONTENT.company && CONTENT.company.foundedYear) {
    document.querySelectorAll('[data-content="foundedYear"]').forEach(el => {
      el.textContent = `seit ${CONTENT.company.foundedYear}`;
    });
  }

  // Testimonials
  if (CONTENT.testimonials) {
    const testimonialsContainer = document.querySelector('[data-content="testimonials"]');
    if (testimonialsContainer) {
      testimonialsContainer.innerHTML = CONTENT.testimonials.map(testimonial => `
        <div class="testimonial-card reveal">
          <div class="testimonial-card__stars">${'★'.repeat(testimonial.stars)}${'☆'.repeat(5 - testimonial.stars)}</div>
          <p class="testimonial-card__text">"${testimonial.text}"</p>
          <p class="testimonial-card__author">${testimonial.author}</p>
          <p class="testimonial-card__location">${testimonial.location}</p>
        </div>
      `).join('');
      // Re-trigger reveal animations
      if (window.initScrollReveals) window.initScrollReveals();
    }
  }

  // Apply CSS variables from design system
  if (CONTENT.design && CONTENT.design.colors) {
    const root = document.documentElement;
    Object.entries(CONTENT.design.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${camelToKebab(key)}`, value);
    });
  }
}

function camelToKebab(str) {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

// Load content when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadContent);
} else {
  loadContent();
}
