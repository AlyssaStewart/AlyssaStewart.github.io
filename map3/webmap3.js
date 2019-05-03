let mymap = L.map('map1').setView([35.17, -98.25], 5)
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(stateMap)
})
L.geoJSON(data, { style: { color: 'yellow' } }).addTo(stateMap)
let stateStyle = { 
	color: 'yellow',
	weight: 2,
	fillOpacity: 0.1
}
let stateStyle = function (feature) {
  let household = feature.properties.AVE.HH.SZ // get the current state's Household attribute
  let stateColor = 'gold' // let the initial color be a darker yellow
  if (  household < 2.5 ) { stateColor = 'yellow' } // if the state's household size is less than the average, color it a lighter yellow
  return {
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}
   let onEachFeature = function (feature, layer) {
     let name = feature.properties.STATE_NAME
     let age = feature.properties.AVE.HH.SZ
     layer.bindPopup('Median household of ' + name + ': ' + household + '<br>National average: 2.5')
   }
let stateGeojsonOptions = { style: stateStyle }
L.geoJSON(data, stateGeojsonOptions).addTo(stateMap)
