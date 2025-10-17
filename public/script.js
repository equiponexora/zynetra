document.addEventListener('DOMContentLoaded', () => {

  // --- Script para el menú móvil ---
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      mainNav.classList.toggle('show');
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
  }

  // --- Script para el cursor personalizado ---
  const cursor = document.getElementById('custom-cursor');
  const interactiveElements = document.querySelectorAll('a, button, .menu-toggle, .logo, .btn-modal, .modal-close');
  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
    });
  }

  // ======================================================= //
  // ============   NUEVA LÓGICA PARA MODALES   ============ //
  // ======================================================= //
  const modalTriggers = document.querySelectorAll('.btn-modal');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const modalCloses = document.querySelectorAll('.modal-close');

  // Abrir modal al hacer clic en un botón
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal-target');
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
      }
    });
  });

  // Cerrar modal al hacer clic en el botón 'X'
  modalCloses.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  });

  // Cerrar modal al hacer clic en el fondo (overlay)
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (event) => {
      // Si el clic fue directamente en el overlay y no en su contenido
      if (event.target === overlay) {
        overlay.classList.remove('active');
        document.body.classList.remove('modal-open');
      }
    });
  });
});