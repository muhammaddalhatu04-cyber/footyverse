// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Load top news dynamically
const topNews = [
  {
    title:"Ronaldo Hat-Trick vs Al Hilal",
    img:"images/ronaldo-hat-trick.JPG",
    writer:"John Doe",
    link:"news/ronaldo-hat-trick.html"
  },
  {
    title:"Mbappé Scores Winning Goal",
    img:"images/mbappe-goal.jpg",
    writer:"Jane Smith",
    link:"news/mbappe-goal.html"
  },
  // Add more news objects dynamically here...
];

const newsSection = document.getElementById('top-news');

topNews.forEach(news => {
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
