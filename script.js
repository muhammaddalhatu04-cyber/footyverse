// ===== MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
    document.querySelectorAll('.submenu-parent').forEach(parent => parent.classList.remove('active'));
  }
});

// Submenu toggle on mobile
const submenuParents = document.querySelectorAll('.submenu-parent');

submenuParents.forEach(parent => {
  parent.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      parent.classList.toggle('active');
    }
  });
});

// Menu item click
const navItems = document.querySelectorAll('.nav-item, .submenu-item');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');
    if (page) {
      window.location.href = `${page}.html`;
    }
    navMenu.classList.remove('active');
    document.querySelectorAll('.submenu-parent').forEach(parent => parent.classList.remove('active'));
  });
});

// ===== TOP NEWS ARRAY =====
let topNews = [
  {
    title: "Ronaldo Hat-Trick vs Al Hilal",
    img: "images/ronaldo-hat-trick.jpg",
    writer: "John Doe",
    link: "ronaldo-hat-trick.html"
  },
  {
    title: "Mbappé Scores Winning Goal",
    img: "images/mbappe-goal.jpg",
    writer: "Jane Smith",
    link: "mbappe-goal.html"
  },
  {
    title: "Messi Leads PSG to Victory",
    img: "images/messi-victory.jpg",
    writer: "Alex Brown",
    link: "messi-victory.html"
  }
];

// ===== RENDER NEWS =====
const newsSection = document.getElementById('top-news');

function renderNews() {
  newsSection.innerHTML = "";
  topNews.forEach((news) => {
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

renderNews();
