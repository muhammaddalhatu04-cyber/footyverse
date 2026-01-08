// ===== LOAD MENU =====
fetch('menu.html')
  .then(res => res.text())
  .then(data => document.getElementById('menu-placeholder').innerHTML = data);

// ===== BACK BUTTON =====
document.getElementById('back-btn').addEventListener('click', () => {
  window.history.back();
});

// ===== TRANSFER NEWS DATA =====
const transfers = [
  {player:"Kylian Mbappé", club:"PSG", type:"Confirmed", img:"images/transfer1.jpg", page:"transfer1.html"},
  {player:"Erling Haaland", club:"Manchester City", type:"Latest", img:"images/transfer2.jpg", page:"transfer2.html"},
  {player:"Ronaldo", club:"Al-Nassr", type:"Confirmed", img:"images/transfer3.jpg", page:"transfer3.html"},
  {player:"Lionel Messi", club:"Inter Miami", type:"Latest", img:"images/transfer4.jpg", page:"transfer4.html"},
  {player:"Darwin Núñez", club:"Liverpool", type:"Confirmed", img:"images/transfer5.jpg", page:"transfer5.html"},
  {player:"Gabriel Jesus", club:"Arsenal", type:"Latest", img:"images/transfer6.jpg", page:"transfer6.html"},
  {player:"Jude Bellingham", club:"Real Madrid", type:"Confirmed", img:"images/transfer7.jpg", page:"transfer7.html"},
  {player:"Vinicius Jr", club:"Real Madrid", type:"Latest", img:"images/transfer8.jpg", page:"transfer8.html"},
  {player:"Pedri", club:"Barcelona", type:"Confirmed", img:"images/transfer9.jpg", page:"transfer9.html"},
  {player:"Robert Lewandowski", club:"Barcelona", type:"Latest", img:"images/transfer10.jpg", page:"transfer10.html"},
  {player:"Marcus Rashford", club:"Manchester United", type:"Latest", img:"images/transfer11.jpg", page:"transfer11.html"},
  {player:"Kai Havertz", club:"Chelsea", type:"Confirmed", img:"images/transfer12.jpg", page:"transfer12.html"},
  {player:"Neymar Jr", club:"PSG", type:"Latest", img:"images/transfer13.jpg", page:"transfer13.html"},
  {player:"Erik ten Hag", club:"Manchester United", type:"Confirmed", img:"images/transfer14.jpg", page:"transfer14.html"},
  {player:"Paulo Dybala", club:"Roma", type:"Latest", img:"images/transfer15.jpg", page:"transfer15.html"},
  {player:"Bruno Fernandes", club:"Manchester United", type:"Confirmed", img:"images/transfer16.jpg", page:"transfer16.html"},
  {player:"Son Heung-min", club:"Tottenham", type:"Latest", img:"images/transfer17.jpg", page:"transfer17.html"},
  {player:"Harry Kane", club:"Bayern Munich", type:"Confirmed", img:"images/transfer18.jpg", page:"transfer18.html"},
  {player:"Ilkay Gündogan", club:"Barcelona", type:"Latest", img:"images/transfer19.jpg", page:"transfer19.html"},
  {player:"Joshua Kimmich", club:"Bayern Munich", type:"Confirmed", img:"images/transfer20.jpg", page:"transfer20.html"},
  {player:"Raheem Sterling", club:"Chelsea", type:"Latest", img:"images/transfer21.jpg", page:"transfer21.html"},
  {player:"Romelu Lukaku", club:"Inter Milan", type:"Confirmed", img:"images/transfer22.jpg", page:"transfer22.html"},
  {player:"Matheus Cunha", club:"Atletico Madrid", type:"Latest", img:"images/transfer23.jpg", page:"transfer23.html"},
  {player:"Riyad Mahrez", club:"Manchester City", type:"Confirmed", img:"images/transfer24.jpg", page:"transfer24.html"},
  {player:"Christian Pulisic", club:"Chelsea", type:"Latest", img:"images/transfer25.jpg", page:"transfer25.html"}
];

// ===== RENDER TRANSFER CARDS =====
const transferSection = document.getElementById('transfer-cards');

function renderTransfers(data){
  transferSection.innerHTML = "";
  data.forEach(t => {
    const card = document.createElement('div');
    card.className = "transfer-card";
    card.style.cursor = "pointer";
    card.style.borderRadius = "8px";
    card.style.overflow = "hidden";
    card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    card.style.transition = "transform 0.2s";
    card.onmouseover = () => card.style.transform = "scale(1.03)";
    card.onmouseleave = () => card.style.transform = "scale(1)";
    card.innerHTML = `
      <img src="${t.img}" alt="${t.player}" style="width:100%; height:180px; object-fit:cover;">
      <div style="padding:10px;">
        <h3 style="font-weight:bold;">${t.player}</h3>
        <p>Club: ${t.club}</p>
        <p>Type: ${t.type}</p>
      </div>
    `;
    card.onclick = () => window.location.href = t.page;
    transferSection.appendChild(card);
  });
}

// INITIAL RENDER
renderTransfers(transfers);

// ===== FILTERS =====
document.getElementById('searchInput').addEventListener('input', e=>{
  const val = e.target.value.toLowerCase();
  const filtered = transfers.filter(t=> t.player.toLowerCase().includes(val));
  renderTransfers(filtered);
});

document.getElementById('clubFilter').addEventListener('change', e=>{
  const val = e.target.value.toLowerCase();
  const filtered = val === "all" ? transfers : transfers.filter(t=> t.club.toLowerCase() === val);
  renderTransfers(filtered);
});

document.getElementById('sortFilter').addEventListener('change', e=>{
  let sorted = [...transfers];
  if(e.target.value === "a-z") sorted.sort((a,b)=> a.player.localeCompare(b.player));
  if(e.target.value === "z-a") sorted.sort((a,b)=> b.player.localeCompare(a.player));
  if(e.target.value === "latest") sorted.sort((a,b)=> transfers.indexOf(b) - transfers.indexOf(a));
  if(e.target.value === "confirmed") sorted = transfers.filter(t=> t.type.toLowerCase()==="confirmed");
  renderTransfers(sorted);
});
