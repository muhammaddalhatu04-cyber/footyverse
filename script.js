// ===== MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Open/close menu when hamburger clicked
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Swipe to close menu on mobile
let startX = 0;
navMenu.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

navMenu.addEventListener('touchmove', e => {
  const moveX = e.touches[0].clientX;
  if (startX - moveX > 50) { // swipe left
    navMenu.classList.remove('active');
  }
});

// ===== DYNAMIC MENU HIGHLIGHT =====
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    navMenu.classList.remove('active'); // close menu on mobile after click
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
  // Add more news objects here
];

// ===== RENDER NEWS CARDS =====
const newsSection = document.getElementById('top-news');

function renderNews() {
  newsSection.innerHTML = ""; // clear old content
  topNews.forEach((news, index) => {
    const card = document.createElement('div');
    card.classList.add('news-card');
    card.innerHTML = `
      <a href="${news.link}">
        <img src="${news.img}" alt="${news.title}">
        <h3>${news.title}</h3>
        <p>By ${news.writer}</p>
      </a>
      <button class="delete-btn" data-index="${index}">&times;</button>
    `;
    newsSection.appendChild(card);
  });

  // Add delete functionality
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = e.target.getAttribute('data-index');
      topNews.splice(idx, 1); // remove news from array
      renderNews(); // re-render
    });
  });
}

// Initial render
renderNews();
