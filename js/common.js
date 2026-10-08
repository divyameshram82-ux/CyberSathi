// CyberSathi Shared UI Engine
// "Awareness for Every Village, Opportunity for Every Family"

function initCommonUI() {
  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('cybersathi_theme') || 'light';
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (themeToggle) themeToggle.textContent = '🌙';
  } else {
    document.body.classList.remove('dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('cybersathi_theme', isDark ? 'dark' : 'light');
      themeToggle.textContent = isDark ? '🌙' : '☀️';
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  // Modal setup
  const modalClose = document.querySelector('.cs-modal-close');
  const modalBackdrop = document.querySelector('.cs-modal-backdrop');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Toast Notifications
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : '⚠️'}</span>
    <div>${escapeHtml(message)}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Modal Manager
function openModal(htmlContent) {
  const modal = document.getElementById('csModal');
  const modalBody = document.getElementById('csModalContent');
  if (!modal || !modalBody) return;

  modalBody.innerHTML = htmlContent;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('csModal');
  const modalBody = document.getElementById('csModalContent');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (modalBody) {
    modalBody.innerHTML = '';
  }
}

// Safe string escaping
function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>'"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[c]));
}

// Expose universally to window
if (typeof window !== 'undefined') {
  window.initCommonUI = initCommonUI;
  window.showToast = showToast;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.escapeHtml = escapeHtml;
  window.CyberSathiCommon = { initCommonUI, showToast, openModal, closeModal, escapeHtml };
}

// Auto-run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initCommonUI);
