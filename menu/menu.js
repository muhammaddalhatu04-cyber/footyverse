function initializeMenu() {
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('menu-hamburger');
  const backBtn = document.getElementById('menu-back');
  const navItems = navMenu.querySelectorAll('.nav-item');
  const submenuParents = navMenu.querySelectorAll('.submenu-parent');

  // OPEN MENU
  hamburger.addEventListener('click', () => {
    navMenu.classList.add('active');
    backBtn.style.display = 'none';
    navMenu.querySelectorAll('.submenu').forEach(sm => sm.style.display = 'none');
  });

  // BACK BUTTON CLOSES MENU
  backBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  // SUBMENU TOGGLE FOR "Match Updates"
  submenuParents.forEach(parent => {
    parent.addEventListener('click', e => {
      e.stopPropagation(); // prevent parent click
      const submenu = parent.querySelector('.submenu');
      const isVisible = submenu.style.display === 'block';
      // close all other submenus
      navMenu.querySelectorAll('.submenu').forEach(sm => sm.style.display = 'none');
      // toggle this submenu
      submenu.style.display = isVisible ? 'none' : 'block';
    });
  });

  // MAIN NAV ITEM CLICK
  navItems.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      const page = item.getAttribute('data-page');
      if (item.classList.contains('submenu-parent')) return; // parent does not redirect
      if (page) window.location.href = page;

      // Highlight active
      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // SUBMENU ITEM CLICK
  const submenuItems = navMenu.querySelectorAll('.submenu-item');
  submenuItems.forEach(sub => {
    sub.addEventListener('click', e => {
      e.stopPropagation();
      const page = sub.getAttribute('data-page');
      if (page) window.location.href = page;
    });
  });
}

// ===== LOAD MENU AND INITIALIZE =====
fetch('menu/menu.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('menu-placeholder').innerHTML = data;
    initializeMenu(); // run after menu is in DOM
  });