// Espera a que todo el HTML esté cargado antes de ejecutar el código
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
  const interactiveElements = document.querySelectorAll('a, button, .menu-toggle, .logo');

  // Solo ejecutar si el cursor existe
  if (cursor) {
    // Mover el cursor
    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // Añadir clase 'grow' al pasar sobre elementos interactivos
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('grow');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
      });
    });
  }
});