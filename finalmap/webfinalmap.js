let mymap = L.map('map1').setView([35.15, -99], 4)
var Thunderforest_OpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '<your apikey>',
	maxZoom: 22
}).addTo(mymap)
let foodTrucksUrl = 'https://opendata.arcgis.com/datasets/33f825353da04a5fbb2c204a6c6128c7_0.geojson'
jQuery.getJSON(foodTrucksUrl, function (data) {
	L.geoJSON(data).addTo(foodMap)
})
L.geoJSON (data, {style: {color: 'red' } }).addTo(foodMap)
let foodStyle = {
	color: 'red',
	weight: 1,
	fillOpacity: 0.2
}
let StateGeojsonOptions = { style: foodStyle }
L.geogJSON(data, foodGeojsonOptions).addTo(foodMap)
