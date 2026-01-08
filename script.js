// ELEMENTS
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuBack = document.getElementById('menuBack');
const matchUpdates = document.getElementById('matchUpdates');
const matchLeagues = document.getElementById('matchLeagues');
const submenuBack = document.getElementById('submenuBack');
const navItems = document.querySelectorAll('.nav-item, .submenu-item');
const newsSection = document.getElementById('top-news');

// TOP NEWS
let topNews = [
  {title:"Ronaldo Hat-Trick vs Al Hilal", img:"images/ronaldo.jpg", writer:"John Doe", link:"ronaldo.html"},
  {title:"Mbappé Scores Winning Goal", img:"images/mbappe.jpg", writer:"Jane Smith", link:"mbappe.html"},
  {title:"Messi Leads PSG to Victory", img:"images/messi.jpg", writer:"Alex Brown", link:"messi.html"}
];

// RENDER NEWS
function renderNews(newsArray){
  newsSection.innerHTML="";
  newsArray.forEach(news=>{
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

// INITIAL TOP NEWS
renderNews(topNews);

// ===== MENU =====
hamburger.addEventListener('click', ()=> navMenu.classList.toggle('active'));
menuBack.addEventListener('click', ()=> navMenu.classList.remove('active'));

// MATCH UPDATES: only expand/collapse submenu
matchUpdates.addEventListener('click', e=>{
  e.stopPropagation();
  matchUpdates.classList.toggle('active');
  matchLeagues.style.display = matchUpdates.classList.contains('active') ? 'flex' : 'none';
});

// SUBMENU BACK
submenuBack.addEventListener('click', e=>{
  e.stopPropagation();
  matchUpdates.classList.remove('active');
  matchLeagues.style.display='none';
});

// MENU ITEM CLICK
navItems.forEach(item=>{
  item.addEventListener('click', ()=>{
    const page = item.getAttribute('data-page');

    // Close menu
    navMenu.classList.remove('active');
    document.querySelectorAll('.submenu-parent').forEach(p=>p.classList.remove('active'));
    matchLeagues.style.display='none';

    // Highlight
    navItems.forEach(i=>i.classList.remove('active'));
    item.classList.add('active');

    // Home dynamic
    if(page==='home') renderNews(topNews);

    // Submenu items redirect to their league page
    else if(item.classList.contains('submenu-item') && page) window.location.href = `${page}.html`;

    // Other pages
    else if(page) window.location.href = `${page}.html`;
  });
});
