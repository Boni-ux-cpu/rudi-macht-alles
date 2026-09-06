(function () {
  const burger = document.getElementById('burger'), menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', () => { const o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }));
  }

  // Anfrage-Formular: baut eine WhatsApp-Nachricht aus den Feldern — keine Daten werden gespeichert
  document.querySelectorAll('form[data-wa]').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      const v = n => (f.elements[n] && f.elements[n].value.trim()) || '';
      const lines = ['Hallo Rudi, ich habe eine Anfrage über die Website.'];
      if (v('leistung')) lines.push('Leistung: ' + v('leistung'));
      if (v('name')) lines.push('Name: ' + v('name'));
      if (v('kontakt')) lines.push('Erreichbar unter: ' + v('kontakt'));
      if (v('nachricht')) lines.push('Nachricht: ' + v('nachricht'));
      window.open('https://wa.me/4917631147867?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  });

  // Akkordeons (FAQ + Leistungs-Karten): nur eines pro Gruppe offen
  document.querySelectorAll('[data-acc-group]').forEach(group => {
    const btns = [...group.querySelectorAll('[data-acc]')];
    const closeAll = () => btns.forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).classList.remove('open');
    });
    btns.forEach(btn => btn.addEventListener('click', e => {
      e.stopPropagation();
      const wasOpen = btn.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!wasOpen) {
        btn.setAttribute('aria-expanded', 'true');
        document.getElementById(btn.getAttribute('aria-controls')).classList.add('open');
      }
    }));
  });
  // Klick auf die Karte (z.B. Bild) löst den Aufklapp-Knopf aus
  document.querySelectorAll('.svc-card').forEach(card => {
    const btn = card.querySelector('[data-acc]');
    if (!btn) return;
    card.addEventListener('click', e => {
      if (e.target.closest('a, button')) return;
      btn.click();
    });
  });

  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (reduce) return;

  // Scroll-Reveal — blendet auch Sektionen ein, die nach einem Anker-Sprung über dem Viewport liegen
  let revealEls = [...document.querySelectorAll('.reveal')];
  let revealTick = false;
  const revealCheck = () => {
    revealEls = revealEls.filter(el => {
      if (el.getBoundingClientRect().top < innerHeight * .88) { el.classList.add('in'); return false; }
      return true;
    });
    revealTick = false;
    if (!revealEls.length) window.removeEventListener('scroll', revealReq);
  };
  const revealReq = () => { if (!revealTick) { revealTick = true; requestAnimationFrame(revealCheck); } };
  revealCheck(); window.addEventListener('scroll', revealReq, { passive: true });

  // Zahlen-Counter (Endwert steht bereits im HTML — ohne JS bleibt er korrekt)
  const cio = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target, end = parseInt(el.dataset.count, 10), start = parseInt(el.dataset.start || '0', 10);
      const dur = 1600, t0 = performance.now();
      const num = el.querySelector('.val') || el;
      const step = t => {
        const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        num.textContent = String(Math.round(start + (end - start) * eased));
        if (p < 1) requestAnimationFrame(step); else num.textContent = end + '';
      };
      requestAnimationFrame(step);
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  // Parallax — nur auf größeren Screens, Mobile bleibt statisch
  const px = matchMedia('(min-width:769px)').matches ? [...document.querySelectorAll('[data-parallax]')] : [];
  if (!px.length) return;
  let ticking = false;
  const move = () => { px.forEach(el => { const r = el.getBoundingClientRect(); const speed = parseFloat(el.dataset.parallax); const y = (r.top + r.height / 2 - innerHeight / 2) * speed * -1; el.style.transform = `translate3d(0,${y.toFixed(1)}px,0)`; }); ticking = false; };
  const req = () => { if (!ticking) { requestAnimationFrame(move); ticking = true; } };
  move(); window.addEventListener('scroll', req, { passive: true }); window.addEventListener('resize', req, { passive: true });
})();
