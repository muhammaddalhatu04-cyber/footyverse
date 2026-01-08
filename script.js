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
  { title: "Ronaldo Hat-Trick vs Al Hilal", img: "images/ronaldo.jpg", writer: "John Doe", link: "ronaldo.html" },
  { title: "Mbappé Scores Winning Goal", img: "images/mbappe.jpg", writer: "Jane Smith", link: "mbappe.html" },
  { title: "Messi Leads PSG to Victory", img: "images/messi.jpg", writer: "Alex Brown", link: "messi.html" }
];
const transferNews = [
  { 
    title: "Mbappé linked with Real Madrid move", 
    img: "images/mbappe-transfer.jpg", 
    writer: "Transfer Guru", 
    link: "mbappe-transfer.html" 
  },
  { 
    title: "Ronaldo rumored to join Al Nassr permanently", 
    img: "images/ronaldo-transfer.jpg", 
    writer: "Football Insider", 
    link: "ronaldo-transfer.html" 
  },
  { 
    title: "Messi set for PSG contract renewal talks", 
    img: "images/messi-transfer.jpg", 
    writer: "Soccer Daily", 
    link: "messi-transfer.html" 
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

// Initial render of home news
renderNews(topNews);

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Full menu back button
menuBack.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

// ===== MATCH UPDATES SUBMENU =====
// Only toggle the submenu; no redirect
matchUpdates.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent closing menu
  matchUpdates.classList.toggle('active');
  matchLeagues.style.display = matchUpdates.classList.contains('active') ? 'flex' : 'none';
});

// Submenu back button
submenuBack.addEventListener('click', (e) => {
  e.stopPropagation();
  matchUpdates.classList.remove('active');
  matchLeagues.style.display = 'none';
});

// ===== MENU ITEM CLICK =====
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const page = item.getAttribute('data-page');

    // Close full menu only if it’s a main page, not submenu toggle
    if (!item.classList.contains('submenu-parent')) {
      navMenu.classList.remove('active');
    }

    // Remove active highlight from all
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    // Home dynamically reloads top news
    if (page === "home") {
      renderNews(topNews);
    }

    // League pages redirect
    else if (item.classList.contains('submenu-item') && page) {
      window.location.href = `${page}.html`;
    }

    // Other pages
    else if (page) {
      window.location.href = `${page}.html`;
    }
  });
});
