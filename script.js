// ===== ELEMENTS =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuBack = document.getElementById('menuBack');
const matchUpdates = document.getElementById('matchUpdates');
const matchLeagues = document.getElementById('matchLeagues');
const submenuBack = document.getElementById('submenuBack');
const navItems = document.querySelectorAll('.nav-item, .submenu-item');
const newsSection = document.getElementById('top-news');

// ===== TOP NEWS DATA =====
const topNews = [
  {
    title: "Ronaldo Hat-Trick vs Al Hilal",
    img: "images/ronaldo.JPG",
    writer: "Mubeen",
    link: "ronaldo.html"
  },
  {
    title: "Mbappé Scores Winning Goal",
    img: "images/mbappe.JPG",
    writer: "Mubeen",
    link: "mbappe.html"
  },
  {
    title: "Messi Leads PSG to Victory",
    img: "images/messi.JPG",
    writer: "Mubeen",
    link: "messi.html"
  }
];

// ===== FUNCTION TO RENDER TOP NEWS =====
function renderNews(newsArray) {
  newsSection.innerHTML = ""; // Clear existing news
  newsArray.forEach(news => {
    const card = document.createElement('div');
    card.classList.add('news-card');
    card.innerHTML = `
      <a href="${news.link}">
        <img src="${news.img}" alt="${news.title}">
        <h3>${news.title}</h3>
        <p>By ${news.writer}</p>
      </a>
    `;
    newsSection.appendChild(card);
  });
}

// Initial render
renderNews(topNews);

// ===== MENU FUNCTIONS =====

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Full menu back button
menuBack.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// Match Updates submenu toggle
matchUpdates.addEventListener('click', (e) => {
  e.stopPropagation();
  matchUpdates.classList.toggle('active');
  matchLeagues.style.display = matchUpdates.classList.contains('active') ? 'flex' : 'none';
});

// Submenu back button
submenuBack.addEventListener('click', (e) => {
  e.stopPropagation();
  matchUpdates.classList.remove('active');
  matchLeagues.style.display = 'none';
});

// Menu item click
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');

    // Close menu and submenu
    navMenu.classList.remove('active');
    matchUpdates.classList.remove('active');
    matchLeagues.style.display = 'none';

    // Remove all active highlights
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Home dynamic
    if (page === "home") renderNews(topNews);

    // Submenu items redirect to league pages
    else if (item.classList.contains('submenu-item') && page) {
      window.location.href = `${page}.html`;
    }

    // Other pages
    else if (page) {
      window.location.href = `${page}.html`;
    }
  });
});
