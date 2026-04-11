/* ═══════════════════════════════
   ZONA A1 — Main JavaScript
   by MataryClub
═══════════════════════════════ */

/* ── FAQ ACCORDION ── */
function faq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(e => e.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── SCROLL REVEAL (index.html only) ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('on');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.r').forEach(el => obs.observe(el));
}

/* ── PANDUAN: scroll to section ── */
function scrollToSection(id, tabEl) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  document.querySelectorAll('.p-tab').forEach(t => t.classList.remove('p-active'));
  if (tabEl) tabEl.classList.add('p-active');
}

/* ── PANDUAN: highlight active tab on scroll ── */
function initTabScroll() {
  const sectionIds = ['p1','p2','p3','p4','p5','p6','p7','p8','p9'];
  const tabs = document.querySelectorAll('.p-tab');
  if (!tabs.length) return;

  window.addEventListener('scroll', () => {
    let current = 0;
    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) current = i;
    });
    tabs.forEach((t, i) => t.classList.toggle('p-active', i === current));
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initTabScroll();
});
