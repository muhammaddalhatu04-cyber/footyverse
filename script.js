// ===== SAMPLE TOP NEWS DATA =====
const topNews = [
  { id: 1, title: "Ronaldo scores a hat-trick", author: "John Doe", image: "images/news1.jpg", page: "article1.html" },
  { id: 2, title: "Mbappé joins PSG mega transfer", author: "Jane Smith", image: "images/news2.jpg", page: "article2.html" },
  { id: 3, title: "Messi wins another Ballon d'Or", author: "Alex Brown", image: "images/news3.jpg", page: "article3.html" },
  { id: 4, title: "Al Hilal wins Saudi Pro League", author: "Sara Ali", image: "images/news4.jpg", page: "article4.html" },
  { id: 5, title: "Manchester United signs new striker", author: "David Green", image: "images/news5.jpg", page: "article5.html" },
  { id: 6, title: "Barcelona defeats Real Madrid in El Clasico", author: "Luis Martinez", image: "images/news6.jpg", page: "article6.html" },
  { id: 7, title: "Juventus clinches Serie A title", author: "Mario Rossi", image: "images/news7.jpg", page: "article7.html" },
  { id: 8, title: "Bayern Munich dominates Bundesliga", author: "Anna Schmidt", image: "images/news8.jpg", page: "article8.html" },
  { id: 9, title: "Paris Saint-Germain signs new midfielder", author: "Jean Dupont", image: "images/news9.jpg", page: "article9.html" },
  { id: 10, title: "MLS season kicks off with record attendance", author: "Michael Lee", image: "images/news10.jpg", page: "article10.html" },
  { id: 11, title: "Saudi Pro League attracts European stars", author: "Faisal Al-Harbi", image: "images/news11.jpg", page: "article11.html" },
  { id: 12, title: "Liverpool secures Champions League spot", author: "Emma Taylor", image: "images/news12.jpg", page: "article12.html" },
  { id: 13, title: "Arsenal wins dramatic match against Chelsea", author: "Oliver Smith", image: "images/news13.jpg", page: "article13.html" },
  { id: 14, title: "Real Madrid suffers injury blow", author: "Carlos Garcia", image: "images/news14.jpg", page: "article14.html" },
  { id: 15, title: "Inter Milan tops Serie A table", author: "Francesco Bianchi", image: "images/news15.jpg", page: "article15.html" },
  { id: 16, title: "Bayern Munich signs new defender", author: "Helga Müller", image: "images/news16.jpg", page: "article16.html" },
  { id: 17, title: "Chelsea transfers: summer window recap", author: "George Wilson", image: "images/news17.jpg", page: "article17.html" },
  { id: 18, title: "Lionel Messi sets scoring record", author: "Ana Costa", image: "images/news18.jpg", page: "article18.html" },
  { id: 19, title: "Tottenham Hotspur wins thrilling match", author: "James Brown", image: "images/news19.jpg", page: "article19.html" },
  { id: 20, title: "AC Milan signs young talent", author: "Luca Romano", image: "images/news20.jpg", page: "article20.html" },
  { id: 21, title: "Manchester City dominates Premier League", author: "Sophie Clarke", image: "images/news21.jpg", page: "article21.html" },
  { id: 22, title: "PSG faces tough Champions League draw", author: "Pierre Laurent", image: "images/news22.jpg", page: "article22.html" },
  { id: 23, title: "MLS star sets record goal", author: "Kevin Johnson", image: "images/news23.jpg", page: "article23.html" },
  { id: 24, title: "Saudi Pro League expands with new clubs", author: "Omar Al-Farsi", image: "images/news24.jpg", page: "article24.html" },
  { id: 25, title: "Liverpool signs new goalkeeper", author: "Emily Watson", image: "images/news25.jpg", page: "article25.html" }
];

// ===== RENDER HERO =====
function renderHero(newsItem) {
  const hero = document.getElementById('hero');
  hero.innerHTML = `
    <div class="hero-card" onclick="window.location.href='${newsItem.page}'">
      <img src="${newsItem.image}" alt="${newsItem.title}">
      <div class="news-info">
        <h2>${newsItem.title}</h2>
        <span>By ${newsItem.author}</span>
      </div>
    </div>
  `;
}

// ===== RENDER TOP NEWS =====
function renderNews(newsArray) {
  const topNewsContainer = document.getElementById('top-news');
  topNewsContainer.innerHTML = '';
  newsArray.forEach(news => {
    const card = document.createElement('div');
    card.classList.add('news-card');
    card.innerHTML = `
      <img src="${news.image}" alt="${news.title}">
      <div class="news-info">
        <h3>${news.title}</h3>
        <span>By ${news.author}</span>
      </div>
    `;
    card.onclick = () => {
      window.location.href = news.page;
    };
    topNewsContainer.appendChild(card);
  });
}

// ===== MENU FUNCTIONALITY =====
function initMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const sideMenu = document.getElementById('sideMenu');
  const closeMenu = document.getElementById('closeMenu');
  const overlay = document.querySelector('.overlay');
  const navItems = document.querySelectorAll('.nav-item');
  const submenuParents = document.querySelectorAll('.submenu-parent');

  // Open menu
  menuToggle.onclick = () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  };

  // Close menu
  function close() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    submenuParents.forEach(p => p.classList.remove('open'));
  }

  closeMenu.onclick = close;
  overlay.onclick = close;

  // Submenu toggle
  submenuParents.forEach(parent => {
    parent.addEventListener('click', e => {
      e.stopPropagation(); // Prevent closing menu
      parent.classList.toggle('open');
    });
  });

  // Menu item click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const page = item.getAttribute('data-page');
      if (page) {
        window.location.href = page;
      }
    });
  });
}

// ===== INITIAL RENDER =====
renderHero(topNews[0]); // First news as hero
renderNews(topNews);     // Render top 25 news
