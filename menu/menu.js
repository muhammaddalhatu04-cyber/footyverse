// Function to initialize menu after loading
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

  // Hamburger toggle
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navMenu.style.left === "0px") {
      navMenu.style.left = "-300px";
    } else {
      navMenu.style.left = "0px";
    }
  });

  // Back button click
  backBtn.addEventListener('click', () => {
    window.history.back();
  });

  // Submenu toggle for Match Updates
  submenuParents.forEach(parent => {
    parent.addEventListener('click', (e) => {
      e.stopPropagation();
      const submenu = parent.querySelector('.submenu');
      if(submenu.style.display === "block") {
        submenu.style.display = "none";
      } else {
        submenu.style.display = "block";
      }
    });
  });

  // Page navigation
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const page = item.getAttribute('data-page');
      if(page) window.location.href = `${page}.html`;
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && e.target !== hamburger) {
      navMenu.style.left = "-300px";
      submenuParents.forEach(parent => {
        const submenu = parent.querySelector('.submenu');
        submenu.style.display = "none";
      });
    }
  });
}

// Load menu.html and initialize AFTER it’s in DOM
document.addEventListener("DOMContentLoaded", () => {
  fetch('menu/menu.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('menu-placeholder').innerHTML = data;
      initMenu(); // attach event listeners AFTER menu is added
    })
    .catch(err => console.error("Menu failed to load:", err));
});