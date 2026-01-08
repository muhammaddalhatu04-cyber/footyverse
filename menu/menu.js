// Wait for menu HTML to load before attaching listeners
function initMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navItems = document.querySelectorAll('#nav-menu .nav-item');
  const submenuParents = document.querySelectorAll('.submenu-parent');
  const backBtn = document.getElementById('back-btn');

  // Show back button on non-home pages
  if (!window.location.pathname.includes("index.html") && !window.location.pathname.endsWith("/")) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }

  // Back button click
  backBtn.addEventListener('click', () => {
    window.history.back();
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    navMenu.style.left = (navMenu.style.left === "0px") ? "-300px" : "0px";
  });

  // Submenu toggle
  submenuParents.forEach(parent => {
    parent.addEventListener('click', (e) => {
      e.stopPropagation();
      const submenu = parent.querySelector('.submenu');
      submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
    });
  });

  // Page navigation
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const page = item.getAttribute('data-page');
      if(page) window.location.href = `${page}.html`;
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if(!navMenu.contains(e.target) && e.target !== hamburger) {
      navMenu.style.left = "-300px";
      submenuParents.forEach(parent => {
        const submenu = parent.querySelector('.submenu');
        submenu.style.display = "none";
      });
    }
  });
}

// Load menu HTML dynamically and initialize
fetch('menu/menu.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('menu-placeholder').innerHTML = data;
    initMenu();  // <-- Attach all event listeners AFTER menu is loaded
  });
