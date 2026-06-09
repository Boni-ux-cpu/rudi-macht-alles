(function () {
  const burger = document.getElementById('burger'), menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }));
  }
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (reduce) return;
  const io = new IntersectionObserver((es) => { es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .14 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  const px = [...document.querySelectorAll('[data-parallax]')];
  if (!px.length) return;
  let ticking = false;
  const move = () => { px.forEach(el => { const r = el.getBoundingClientRect(); const speed = parseFloat(el.dataset.parallax); const y = (r.top + r.height / 2 - innerHeight / 2) * speed * -1; el.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`; }); ticking = false; };
  const req = () => { if (!ticking) { requestAnimationFrame(move); ticking = true; } };
  move(); window.addEventListener('scroll', req, { passive: true }); window.addEventListener('resize', req, { passive: true });
})();
