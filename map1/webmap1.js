let mymap = L.map('mymap1').setView([35.17, -98.25], 5)
var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png').addTo(map1), {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
let mymap = L.marker([32, -85]).addTo(mymap)
let mymap = L. polygon([
    [50.517, -0.05],
    [50.512, -0.03],
    [50.52, -0.064]
]).addTo(mymap);
mymap.bindPopup('My site polygon')
mymap.bindPopup('My site marker')
