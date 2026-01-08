// ===== MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ===== DYNAMIC MENU HIGHLIGHT =====
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// ===== TOP NEWS DYNAMIC LOADING =====
const topNews = [
  {
    title: "Ronaldo Hat-Trick vs Al Hilal",
    img: "images/ronaldo-hat-trick.jpg",
    writer: "John Doe",
    link: "#"
  },
  {
    title: "Mbappé Scores Winning Goal",
    img: "images/mbappe-goal.jpg",
    writer: "Jane Smith",
    link: "#"
  },
  {
    title: "Messi Leads PSG to Victory",
    img: "images/messi-victory.jpg",
    writer: "Alex Brown",
    link: "#"
  }
  // Add more news objects here dynamically
];

const newsSection = document.getElementById('top-news');
topNews.forEach(news => {
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