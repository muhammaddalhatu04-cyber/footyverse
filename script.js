// ===== TOP NEWS DATA (25 News) =====
const topNews = [
  {title:"Ronaldo Hat-trick vs Al Hilal", img:"images/news1.jpg", page:"news1.html", author:"M. Dalhatu", date:"2026-01-01"},
  {title:"Mbappé joins PSG dream team", img:"images/news2.jpg", page:"news2.html", author:"M. Dalhatu", date:"2026-01-02"},
  {title:"Haaland scores 4 in EPL", img:"images/news3.jpg", page:"news3.html", author:"M. Dalhatu", date:"2026-01-03"},
  {title:"Messi assists twice for Inter Miami", img:"images/news4.jpg", page:"news4.html", author:"M. Dalhatu", date:"2026-01-04"},
  {title:"Man City wins FA Cup", img:"images/news5.jpg", page:"news5.html", author:"M. Dalhatu", date:"2026-01-05"},
  {title:"Liverpool signs teenage prodigy", img:"images/news6.jpg", page:"news6.html", author:"M. Dalhatu", date:"2026-01-06"},
  {title:"Chelsea under pressure after draw", img:"images/news7.jpg", page:"news7.html", author:"M. Dalhatu", date:"2026-01-07"},
  {title:"Arsenal's comeback hero", img:"images/news8.jpg", page:"news8.html", author:"M. Dalhatu", date:"2026-01-08"},
  {title:"Barcelona wins El Clasico", img:"images/news9.jpg", page:"news9.html", author:"M. Dalhatu", date:"2026-01-09"},
  {title:"Real Madrid signs rising star", img:"images/news10.jpg", page:"news10.html", author:"M. Dalhatu", date:"2026-01-10"},
  {title:"Serie A updates: AC Milan dominates", img:"images/news11.jpg", page:"news11.html", author:"M. Dalhatu", date:"2026-01-11"},
  {title:"Bundesliga transfer rumors", img:"images/news12.jpg", page:"news12.html", author:"M. Dalhatu", date:"2026-01-12"},
  {title:"Ligue 1: Monaco surprises PSG", img:"images/news13.jpg", page:"news13.html", author:"M. Dalhatu", date:"2026-01-13"},
  {title:"MLS: LA Galaxy stuns rivals", img:"images/news14.jpg", page:"news14.html", author:"M. Dalhatu", date:"2026-01-14"},
  {title:"Saudi Pro League: Al-Nassr signs star", img:"images/news15.jpg", page:"news15.html", author:"M. Dalhatu", date:"2026-01-15"},
  {title:"EPL relegation battle heats up", img:"images/news16.jpg", page:"news16.html", author:"M. Dalhatu", date:"2026-01-16"},
  {title:"Transfer gossip: top moves", img:"images/news17.jpg", page:"news17.html", author:"M. Dalhatu", date:"2026-01-17"},
  {title:"UCL: PSG vs Bayern thriller", img:"images/news18.jpg", page:"news18.html", author:"M. Dalhatu", date:"2026-01-18"},
  {title:"Player comparison: Haaland vs Ronaldo", img:"images/news19.jpg", page:"news19.html", author:"M. Dalhatu", date:"2026-01-19"},
  {title:"New manager at Arsenal", img:"images/news20.jpg", page:"news20.html", author:"M. Dalhatu", date:"2026-01-20"},
  {title:"MLS superstar makes debut", img:"images/news21.jpg", page:"news21.html", author:"M. Dalhatu", date:"2026-01-21"},
  {title:"Bundesliga title race", img:"images/news22.jpg", page:"news22.html", author:"M. Dalhatu", date:"2026-01-22"},
  {title:"La Liga: Sevilla shocks Real", img:"images/news23.jpg", page:"news23.html", author:"M. Dalhatu", date:"2026-01-23"},
  {title:"Serie A: Napoli vs Juventus", img:"images/news24.jpg", page:"news24.html", author:"M. Dalhatu", date:"2026-01-24"},
  {title:"EPL: Newcastle wins dramatic match", img:"images/news25.jpg", page:"news25.html", author:"M. Dalhatu", date:"2026-01-25"}
];

// ===== RENDER NEWS =====
const topNewsSection = document.getElementById('top-news');

topNews.forEach(news => {
  const card = document.createElement('div');
  card.className = "news-card";
  card.innerHTML = `
    <img src="${news.img}" alt="${news.title}">
    <div class="news-info">
      <h3>${news.title}</h3>
      <span>${news.author} | ${news.date}</span>
    </div>
  `;
  card.addEventListener('click', () => window.location.href = news.page);
  topNewsSection.appendChild(card);
});