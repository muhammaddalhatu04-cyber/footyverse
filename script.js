document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('menu-toggle');
  const backBtn = document.querySelector('#menu .back-btn');
  const submenuParents = document.querySelectorAll('.submenu-parent');
  const menuItems = document.querySelectorAll('#menu li[data-page]');

  // Hamburger opens menu
  hamburger.addEventListener('click', () => menu.classList.add('active'));

  // Back button closes menu
  backBtn.addEventListener('click', () => menu.classList.remove('active'));

  // Submenu toggle
  submenuParents.forEach(parent => {
    parent.addEventListener('click', () => parent.classList.toggle('active'));
  });

  // Menu item click
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if(item.getAttribute('data-page') === window.location.pathname.split('/').pop()) {
        menu.classList.remove('active'); // collapse if on same page
      } else {
        window.location.href = item.getAttribute('data-page');
      }
    });
  });

  // ===== TOP NEWS DATA =====
  const topNews = [];
  for(let i=1;i<=25;i++){
    topNews.push({
      title:`Sample News Headline #${i}`,
      img:`images/news${i}.jpg`,
      page:`news${i}.html`,
      author:`M. Dalhatu`,
      date:`2026-01-${i<10?'0'+i:i}`
    });
  }

  // Render news
  const topNewsSection = document.getElementById('top-news');
  topNews.forEach(news => {
    const card = document.createElement('div');
    card.className = "news-card";
    card.innerHTML = `
      <img src="${news.img}" alt="${news.title}">
      <div class="news-info">
        <h3>${news.title}</h3>
        <span>${news.author} - ${news.date}</span>
      </div>
    `;
    card.onclick = () => window.location.href = news.page;
    topNewsSection.appendChild(card);
  });
});