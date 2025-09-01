var map = L.map('map').setView([4.687640387032661, -74.14950733915333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.687640387032661, -74.14950733915333]).addTo(map);
var marker = L.marker([4.698932493528999, -74.11327818455958]).addTo(map);