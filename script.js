const menuButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuButton && sidebar) {
  menuButton.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
