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
