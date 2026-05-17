// ── Gallery Filter ───────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
    });
  });
});

// ── Before / After Slider ────────────────────────────
function initBASlider(el) {
  const after = el.querySelector('.ba-slider__after');
  const handle = el.querySelector('.ba-slider__handle');
  let dragging = false;

  function setPosition(x) {
    const rect = el.getBoundingClientRect();
    let pct = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    const pctStr = `${pct * 100}%`;
    after.style.clipPath = `inset(0 ${100 - pct * 100}% 0 0)`;
    handle.style.left = pctStr;
  }

  // Start at 50%
  setPosition(el.getBoundingClientRect().left + el.getBoundingClientRect().width / 2);

  el.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); });
  el.addEventListener('touchstart', e => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });

  window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('touchmove', e => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });

  window.addEventListener('mouseup', () => { dragging = false; });
  window.addEventListener('touchend', () => { dragging = false; });
}

document.querySelectorAll('.ba-slider').forEach(initBASlider);
