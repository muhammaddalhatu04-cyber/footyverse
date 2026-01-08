const hamburger = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');
const menuBack = document.getElementById('menu-back');
const menuItems = document.querySelectorAll('#menu .menu-item');
const submenuParents = document.querySelectorAll('.submenu-parent');

// Hamburger click opens menu
hamburger.addEventListener('click', () => {
  menu.classList.remove('menu-closed');
  menu.classList.add('menu-open');
});

// Back button closes menu
menuBack.addEventListener('click', () => {
  menu.classList.remove('menu-open');
  menu.classList.add('menu-closed');
});

// Toggle submenus
submenuParents.forEach(parent => {
  parent.addEventListener('click', (e) => {
    e.stopPropagation();
    const submenu = parent.querySelector('.submenu');
    submenu.classList.toggle('submenu-open');
  });
});

// Menu item navigation
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');
    if (page) window.location.href = page;
  });
});