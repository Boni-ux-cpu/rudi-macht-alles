// ── Contact Form Validation ───────────────────────────
const form = document.getElementById('kontaktForm');
if (!form) return;

const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('formSuccess');

function setError(inputId, errorId, msg) {
  document.getElementById(inputId)?.classList.add('error');
  const el = document.getElementById(errorId);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}

function clearError(inputId, errorId) {
  document.getElementById(inputId)?.classList.remove('error');
  const el = document.getElementById(errorId);
  if (el) { el.textContent = ''; el.classList.remove('show'); }
}

['name','email','nachricht'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', () => clearError(id, id + 'Error'));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  clearError('name','nameError'); clearError('email','emailError');
  clearError('nachricht','nachrichtError');
  const dsErr = document.getElementById('datenschutzError');
  if (dsErr) { dsErr.textContent = ''; dsErr.classList.remove('show'); }

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const nachricht = document.getElementById('nachricht').value.trim();
  const ds = document.getElementById('datenschutz').checked;

  if (!name) { setError('name','nameError','Bitte geben Sie Ihren Namen ein.'); valid = false; }
  if (!email) { setError('email','emailError','Bitte geben Sie Ihre E-Mail-Adresse ein.'); valid = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('email','emailError','Bitte geben Sie eine gültige E-Mail-Adresse ein.'); valid = false; }
  if (!nachricht) { setError('nachricht','nachrichtError','Bitte schreiben Sie uns eine kurze Nachricht.'); valid = false; }
  if (!ds && dsErr) { dsErr.textContent = 'Bitte stimmen Sie der Datenschutzerklärung zu.'; dsErr.classList.add('show'); valid = false; }

  if (!valid) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Wird gesendet …';

  // TODO: Replace with real Formspree endpoint
  // fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form), headers:{'Accept':'application/json'} })
  setTimeout(() => {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Anfrage absenden';
    formSuccess.classList.add('show');
    setTimeout(() => formSuccess.classList.remove('show'), 7000);
  }, 1200);
});
