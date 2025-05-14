// Бургер-меню логіка
document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('mainNav').classList.toggle('active');
  });
  
  // Ініціалізація мапи
const map = L.map('map').setView([20, 0], 2); // Світова карта

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
}).addTo(map);

// Позначки подій
const events = [
    { name: "Каннський кінофестиваль", coords: [43.5528, 7.0174] },
    { name: "Октоберфест", coords: [48.1351, 11.5820] },
    { name: "Карнавал у Ріо", coords: [-22.9068, -43.1729] },
    { name: "Фестиваль світла в Ліоні", coords: [45.7640, 4.8357] },
    { name: "Глендалійський музичний фестиваль", coords: [34.1425, -118.2551] },
    { name: "Фестиваль Холі", coords: [28.6139, 77.2090] },
    { name: "Единбурзький фестиваль мистецтв", coords: [55.9533, -3.1883] },
    { name: "Венеційський карнавал", coords: [45.4408, 12.3155] },
  ];
  
  

events.forEach(event => {
  L.marker(event.coords).addTo(map)
    .bindPopup(`<b>${event.name}</b>`);
});