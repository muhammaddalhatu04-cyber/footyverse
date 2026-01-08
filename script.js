/* ================= MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

// Open menu
menuToggle.onclick = () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
};

// Close menu
function closeAll() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.querySelectorAll(".submenu-parent").forEach(p =>
    p.classList.remove("open")
  );
}

closeMenu.onclick = closeAll;
overlay.onclick = closeAll;

// Submenu toggle
document.querySelectorAll(".submenu-parent").forEach(parent => {
  parent.onclick = () => parent.classList.toggle("open");
});

// Menu item clicks
document.querySelectorAll(".nav-item").forEach(item => {
  item.onclick = () => {
    const page = item.dataset.page;
    if (page && page !== "index") {
      window.location.href = `${page}.html`;
    }
  };
});

// Submenu item clicks (leagues under Match Updates)
document.querySelectorAll(".submenu-item").forEach(item => {
  item.onclick = () => {
    window.location.href = `${item.dataset.page}.html`;
  };
});

/* ================= HOME NEWS (25 REAL ONES) ================= */
const homeNews = [
  {
    id: 1,
    title: "Real Madrid edge Bayern Munich in dramatic Champions League semi-final",
    image: "images/news1.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Real Madrid secured a dramatic late victory over Bayern Munich to book their place in the Champions League final after a tense night at the Bernabéu."
  },
  {
    id: 2,
    title: "Manchester City extend winning run with dominant display at Etihad",
    image: "images/news2.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Pep Guardiola’s side delivered a ruthless performance as City tightened their grip on the Premier League title race."
  },
  {
    id: 3,
    title: "Arsenal suffer costly defeat in race for top four",
    image: "images/news3.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Arsenal’s hopes of securing Champions League football took a hit after a narrow loss away from home."
  },
  {
    id: 4,
    title: "Barcelona youngster shines in crucial La Liga victory",
    image: "images/news4.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "A teenage sensation stole the spotlight as Barcelona claimed three vital points in the title race."
  },
  {
    id: 5,
    title: "Liverpool survive late scare to keep title hopes alive",
    image: "images/news5.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Liverpool held their nerve in stoppage time to secure a crucial win at Anfield."
  },
  {
    id: 6,
    title: "PSG crowned Ligue 1 champions with games to spare",
    image: "images/news6.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Paris Saint-Germain wrapped up another league title following a comfortable home victory."
  },
  {
    id: 7,
    title: "Inter Milan strengthen grip on Serie A summit",
    image: "images/news7.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Inter continued their impressive form with a commanding win that keeps them clear at the top."
  },
  {
    id: 8,
    title: "Borussia Dortmund boost Champions League hopes",
    image: "images/news8.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Dortmund claimed a vital three points in a tightly contested Bundesliga clash."
  },
  {
    id: 9,
    title: "Chelsea struggle for consistency after frustrating draw",
    image: "images/news9.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Chelsea dropped points again as their inconsistency continued under the floodlights."
  },
  {
    id: 10,
    title: "Napoli return to winning ways with convincing performance",
    image: "images/news10.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Napoli responded well after recent setbacks with a dominant home display."
  },
  {
    id: 11,
    title: "Tottenham secure dramatic late winner in London derby",
    image: "images/news11.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "A stoppage-time goal sealed a thrilling victory in a fiery London derby."
  },
  {
    id: 12,
    title: "AC Milan held as title race tightens in Serie A",
    image: "images/news12.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "AC Milan dropped points as pressure mounted at the top of the table."
  },
  {
    id: 13,
    title: "Juventus grind out narrow away win",
    image: "images/news13.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Juventus showed resilience to secure a hard-fought three points."
  },
  {
    id: 14,
    title: "Newcastle United continue impressive home form",
    image: "images/news14.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Newcastle maintained their strong home record with a solid victory."
  },
  {
    id: 15,
    title: "Atletico Madrid edge past rivals in tense encounter",
    image: "images/news15.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Atletico claimed bragging rights in a closely contested match."
  },
  {
    id: 16,
    title: "West Ham push for European qualification",
    image: "images/news16.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "West Ham’s European ambitions remain alive after a crucial win."
  },
  {
    id: 17,
    title: "Sevilla suffer setback in Champions League chase",
    image: "images/news17.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Sevilla slipped up at a critical moment in the season."
  },
  {
    id: 18,
    title: "Brighton impress with attacking football",
    image: "images/news18.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Brighton delighted fans with an energetic attacking display."
  },
  {
    id: 19,
    title: "RB Leipzig close gap on Bundesliga leaders",
    image: "images/news19.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Leipzig’s win keeps the Bundesliga title race interesting."
  },
  {
    id: 20,
    title: "Roma snatch late draw in dramatic finish",
    image: "images/news20.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "A late equaliser rescued a point for Roma in stoppage time."
  },
  {
    id: 21,
    title: "Lyon bounce back after disappointing run",
    image: "images/news21.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Lyon responded positively following recent struggles."
  },
  {
    id: 22,
    title: "Everton ease relegation fears with vital win",
    image: "images/news22.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Everton took a big step toward safety with a crucial victory."
  },
  {
    id: 23,
    title: "Monaco keep pressure on top four",
    image: "images/news23.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Monaco remain firmly in the hunt for Champions League qualification."
  },
  {
    id: 24,
    title: "Aston Villa continue remarkable season",
    image: "images/news24.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Villa’s impressive campaign shows no signs of slowing down."
  },
  {
    id: 25,
    title: "Sporting CP maintain unbeaten league run",
    image: "images/news25.jpg",
    author: "FootyVerse",
    date: "Today",
    content: "Sporting continued their strong domestic form with another win."
  }
];

/* ================= HERO ================= */
const hero = document.getElementById("hero");
if (hero) {
  const main = homeNews[0];
  hero.innerHTML = `
    <div class="news-card hero-card" onclick="openArticle(${main.id})">
      <img src="${main.image}">
      <div class="news-info">
        <h2>${main.title}</h2>
        <span>${main.author} • ${main.date}</span>
      </div>
    </div>
  `;
}

/* ================= RENDER 25 ================= */
const newsContainer = document.getElementById("top-news");
if (newsContainer) {
  homeNews.forEach(news => {
    newsContainer.innerHTML += `
      <div class="news-card" onclick="openArticle(${news.id})">
        <img src="${news.image}">
        <div class="news-info">
          <h3>${news.title}</h3>
          <span>${news.author} • ${news.date}</span>
        </div>
      </div>
    `;
  });
}

/* ================= ARTICLE REDIRECT ================= */
function openArticle(id) {
  const article = homeNews.find(n => n.id === id);
  localStorage.setItem("articleData", JSON.stringify(article));
  window.location.href = "article.html";
}
