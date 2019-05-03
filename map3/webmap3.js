let mymap = L.map('map1').setView([35.17, -98.25], 5)
var OpenStreetMap_DE = L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(mymap)
var OpenStreetMap_DE = L.tilelayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
  layers: 'warnings_c',
  format: 'image/png',
  transparent: true
  attribution: 'NOAA, Iowa State University'
}).addTo(mymap)
