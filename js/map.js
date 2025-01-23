var map = L.map('map').setView([13.695870, -89.136476], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([13.695870, -89.136476]).addTo(map);

var circle = L.circle([13.695870, -89.136476], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.1,
    radius: 400
}).addTo(map);