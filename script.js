// ===== TOP NEWS DATA (25 news) =====
const topNews = [
  {title:"Ronaldo Hat-trick vs Al Hilal", img:"images/news1.jpg", page:"news1.html", author:"M. Dalhatu"},
  {title:"Mbappé joins PSG dream team", img:"images/news2.jpg", page:"news2.html", author:"M. Dalhatu"},
  {title:"Haaland scores 4 in EPL", img:"images/news3.jpg", page:"news3.html", author:"M. Dalhatu"},
  {title:"Messi assists twice for Inter Miami", img:"images/news4.jpg", page:"news4.html", author:"M. Dalhatu"},
  {title:"Man City wins FA Cup", img:"images/news5.jpg", page:"news5.html", author:"M. Dalhatu"},
  {title:"Liverpool signs teenage prodigy", img:"images/news6.jpg", page:"news6.html", author:"M. Dalhatu"},
  {title:"Chelsea under pressure after draw", img:"images/news7.jpg", page:"news7.html", author:"M. Dalhatu"},
  {title:"Arsenal's comeback hero", img:"images/news8.jpg", page:"news8.html", author:"M. Dalhatu"},
  {title:"Barcelona wins El Clasico", img:"images/news9.jpg", page:"news9.html", author:"M. Dalhatu"},
  {title:"Real Madrid signs rising star", img:"images/news10.jpg", page:"news10.html", author:"M. Dalhatu"},
  {title:"Serie A updates: AC Milan dominates", img:"images/news11.jpg", page:"news11.html", author:"M. Dalhatu"},
  {title:"Bundesliga transfer rumors", img:"images/news12.jpg", page:"news12.html", author:"M. Dalhatu"},
  {title:"Ligue 1: Monaco surprises PSG", img:"images/news13.jpg", page:"news13.html", author:"M. Dalhatu"},
  {title:"MLS: LA Galaxy stuns rivals", img:"images/news14.jpg", page:"news14.html", author:"M. Dalhatu"},
  {title:"Saudi Pro League: Al-Nassr signs star", img:"images/news15.jpg", page:"news15.html", author:"M. Dalhatu"},
  {title:"EPL relegation battle heats up", img:"images/news16.jpg", page:"news16.html", author:"M. Dalhatu"},
  {title:"Transfer gossip: top moves", img:"images/news17.jpg", page:"news17.html", author:"M. Dalhatu"},
  {title:"UCL: PSG vs Bayern thriller", img:"images/news18.jpg", page:"news18.html", author:"M. Dalhatu"},
  {title:"Player comparison: Haaland vs Ronaldo", img:"images/news19.jpg", page:"news19.html", author:"M. Dalhatu"},
  {title:"New manager at Arsenal", img:"images/news20.jpg", page:"news20.html", author:"M. Dalhatu"},
  {title:"MLS superstar makes debut", img:"images/news21.jpg", page:"news21.html", author:"M. Dalhatu"},
  {title:"Bundesliga title race", img:"images/news22.jpg", page:"news22.html", author:"M. Dalhatu"},
  {title:"La Liga: Sevilla shocks Real", img:"images/news23.jpg", page:"news23.html", author:"M. Dalhatu"},
  {title:"Serie A: Napoli vs Juventus", img:"images/news24.jpg", page:"news24.html", author:"M. Dalhatu"},
  {title:"EPL: Newcastle wins dramatic match", img:"images/news25.jpg", page:"news25.html", author:"M. Dalhatu"}
];

// ===== LOAD MENU AND INITIALIZE =====
fetch('menu/menu.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('menu-placeholder').innerHTML = data;

    // ===== MENU INITIALIZATION =====
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
        e.stopPropagation();
        const submenu = parent.querySelector('.submenu');
        const isVisible = submenu.style.display === 'block';
        navMenu.querySelectorAll('.submenu').forEach(sm => sm.style.display='none');
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
  });

// ===== RENDER TOP NEWS =====
const topNewsSection = document.getElementById('top-news');
topNews.forEach(news => {
  const card = document.createElement('div');
  card.className = "news-card";
  card.innerHTML = `
    <img src="${news.img}" alt="${news.title}">
    <div class="news-info">
      <h3>${news.title}</h3>
      <span>Author: ${news.author}</span>
    </div>
  `;
  card.onclick = () => window.location.href = news.page;
  topNewsSection.appendChild(card);
});