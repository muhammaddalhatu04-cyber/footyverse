// ===== ELEMENTS =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const menuBack = document.getElementById('menuBack');
const matchUpdates = document.getElementById('matchUpdates');
const matchLeagues = document.getElementById('matchLeagues');
const submenuBack = document.getElementById('submenuBack');
const navItems = document.querySelectorAll('.nav-item, .submenu-item');
const newsSection = document.getElementById('top-news');

// ===== SAMPLE TOP NEWS =====
let topNews = [
  {title:"Ronaldo Hat-Trick vs Al Hilal", img:"images/ronaldo.jpg", writer:"John Doe", link:"ronaldo.html"},
  {title:"Mbappé Scores Winning Goal", img:"images/mbappe.jpg", writer:"Jane Smith", link:"mbappe.html"},
  {title:"Messi Leads PSG to Victory", img:"images/messi.jpg", writer:"Alex Brown", link:"messi.html"}
];

// ===== SAMPLE LEAGUE DATA =====
const leagueData = {
  "epl": [
    {title:"Manchester United 2-1 Liverpool", img:"images/epl1.jpg", writer:"Alex Doe", link:"epl1.html"},
    {title:"Chelsea Beats Arsenal 3-2", img:"images/epl2.jpg", writer:"Mary Smith", link:"epl2.html"}
  ],
  "la-liga": [
    {title:"Real Madrid 4-0 Barcelona", img:"images/laliga1.jpg", writer:"Juan Perez", link:"laliga1.html"}
  ],
  "serie-a":[ {title:"Juventus 2-0 Inter", img:"images/seriea1.jpg", writer:"Luca Bianchi", link:"seriea1.html"} ],
  "bundesliga":[ {title:"Bayern 3-1 Dortmund", img:"images/bundesliga1.jpg", writer:"Hans Mueller", link:"bundesliga1.html"} ],
  "ligue-one":[ {title:"PSG 5-0 Lyon", img:"images/ligue1.jpg", writer:"Marie Dupont", link:"ligue1.html"} ],
  "mls":[ {title:"LA Galaxy 2-1 Inter Miami", img:"images/mls1.jpg", writer:"John Doe", link:"mls1.html"} ],
  "saudi-pro-league":[ {title:"Al Hilal 3-2 Al Nassr", img:"images/saudi1.jpg", writer:"Ahmed Al-Faisal", link:"saudi1.html"} ],
  "champions-league":[ {title:"Real Madrid 2-1 Man City", img:"images/cl1.jpg", writer:"Carlos Lopez", link:"cl1.html"} ]
};

// ===== RENDER NEWS FUNCTION =====
function renderNews(newsArray){
  newsSection.innerHTML = "";
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

// ===== INITIAL TOP NEWS =====
renderNews(topNews);

// ===== MENU TOGGLE =====
hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

// ===== BACK BUTTON (FULL MENU) =====
menuBack.addEventListener('click', e=>{
  e.stopPropagation();
  navMenu.classList.remove('active');
  document.querySelectorAll('.submenu-parent').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.submenu').forEach(sub=>sub.style.display='none');
});

// ===== MATCH UPDATES SUBMENU =====
matchUpdates.addEventListener('click', e=>{
  e.stopPropagation();
  if(window.innerWidth <= 768){
    matchUpdates.classList.toggle('active');
  } else {
    matchLeagues.style.display = matchLeagues.style.display==='flex'?'none':'flex';
  }
});

// ===== SUBMENU BACK BUTTON =====
submenuBack.addEventListener('click', e=>{
  e.stopPropagation();
  matchUpdates.classList.remove('active');
  matchLeagues.style.display='none';
});

// ===== MENU ITEM CLICK =====
navItems.forEach(item=>{
  item.addEventListener('click', ()=>{
    const page = item.getAttribute('data-page');
    if(page && !item.classList.contains('submenu-item')) window.location.href=`${page}.html`;

    navMenu.classList.remove('active');
    document.querySelectorAll('.submenu-parent').forEach(p=>p.classList.remove('active'));
    matchLeagues.style.display='none';

    navItems.forEach(i=>i.classList.remove('active'));
    item.classList.add('active');
  });
});

// ===== DYNAMIC LEAGUE CLICK =====
const leagueItems = document.querySelectorAll('.submenu-item');
leagueItems.forEach(item=>{
  item.addEventListener('click', ()=>{
    const league = item.getAttribute('data-page');
    if(leagueData[league]) renderNews(leagueData[league]);

    navMenu.classList.remove('active');
    document.querySelectorAll('.submenu-parent').forEach(p=>p.classList.remove('active'));
    matchLeagues.style.display='none';

    leagueItems.forEach(i=>i.classList.remove('active'));
    item.classList.add('active');
  });
});
