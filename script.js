const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

const navItems = document.querySelectorAll(".nav-item");
const submenuParents = document.querySelectorAll(".submenu-parent");
const submenuItems = document.querySelectorAll(".submenu-item");

const topNews = [
  {
    title: "Mbappé agrees shocking move",
    image: "images/mbappe-transfer.jpg",
    author: "FootyVerse"
  },
  {
    title: "Ronaldo scores hat-trick",
    image: "images/ronaldo-transfer.jpg",
    author: "FootyVerse"
  }
];

// MENU OPEN / CLOSE
menuToggle.onclick = () => {
  sideMenu.classList.add("active");
  overlay.classList.add("active");
};

closeMenu.onclick = closeAllMenus;
overlay.onclick = closeAllMenus;

function closeAllMenus() {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  submenuParents.forEach(p => p.classList.remove("open"));
}

// SUBMENU TOGGLE
submenuParents.forEach(parent => {
  parent.addEventListener("click", () => {
    parent.classList.toggle("open");
  });
});

// NAV ITEM CLICK
navItems.forEach(item => {
  item.addEventListener("click", () => {
    const page = item.dataset.page;
    if (page) window.location.href = `${page}.html`;
  });
});

// SUBMENU ITEM CLICK
submenuItems.forEach(item => {
  item.addEventListener("click", () => {
    const page = item.dataset.page;
    window.location.href = `${page}.html`;
  });
});

// RENDER HOME NEWS
function renderNews() {
  const container = document.getElementById("top-news");
  container.innerHTML = "";

  topNews.forEach(n => {
    container.innerHTML += `
      <div class="news-card">
        <img src="${n.image}">
        <div class="news-info">
          <h3>${n.title}</h3>
          <span>By ${n.author}</span>
        </div>
      </div>
    `;
  });
}

renderNews();
/* ================= TRANSFER DATA ================= */

const transfers = [
  {
    id: 1,
    title: "Mbappé agrees move to Real Madrid",
    image: "images/mbappe-transfer.jpg",
    author: "FootyVerse",
    tag: "Here We Go",
    date: "2026-01-05",
    content: "Kylian Mbappé has agreed personal terms with Real Madrid..."
  },
  {
    id: 2,
    title: "Ronaldo linked with Bayern shock",
    image: "images/ronaldo-transfer.jpg",
    author: "FootyVerse",
    tag: "Rumor",
    date: "2026-01-03",
    content: "Cristiano Ronaldo has been linked with a sensational move..."
  },
  {
    id: 3,
    title: "Chelsea confirm striker signing",
    image: "images/messi-transfer.jpg",
    author: "FootyVerse",
    tag: "Confirmed",
    date: "2026-01-01",
    content: "Chelsea Football Club have officially announced..."
  }
];

let filteredTransfers = [...transfers];

/* ================= RENDER ================= */

const container = document.getElementById("transferContainer");

function renderTransfers(list) {
  if (!container) return;
  container.innerHTML = "";

  list.forEach(t => {
    container.innerHTML += `
      <div class="news-card" onclick="openArticle(${t.id})">
        <img src="${t.image}">
        <div class="news-info">
          <span class="tag ${t.tag.toLowerCase().replace(/ /g,'-')}">${t.tag}</span>
          <h3>${t.title}</h3>
          <span>${t.author} • ${t.date}</span>
        </div>
      </div>
    `;
  });
}

renderTransfers(filteredTransfers);

/* ================= SEARCH ================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    filteredTransfers = transfers.filter(t =>
      t.title.toLowerCase().includes(value)
    );

    renderTransfers(filteredTransfers);
  });
}

/* ================= SORT ================= */

const sortSelect = document.getElementById("sortSelect");

if (sortSelect) {
  sortSelect.addEventListener("change", e => {
    const value = e.target.value;

    if (value === "newest") {
      filteredTransfers.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (value === "oldest") {
      filteredTransfers.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (["confirmed", "rumor", "here-we-go"].includes(value)) {
      filteredTransfers = transfers.filter(
        t => t.tag.toLowerCase().replace(/ /g,'-') === value
      );
    }

    renderTransfers(filteredTransfers);
  });
}

/* ================= ARTICLE ================= */

function openArticle(id) {
  localStorage.setItem("articleId", id);
  window.location.href = "article.html";
}
