// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Create a map instance and set the initial view coordinates and zoom level
  var map = L.map('map').setView([-23.517074562812148, -46.835377805910085], 13);


  // Add a tile layer to the map from OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var greenIcon = L.icon({
    iconUrl: 'https://pngfre.com/wp-content/uploads/dog-poster.png',
 
    iconSize:     [80, 60], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  // Create a marker with popup and add it to the map
  var marker = L.marker([-23.517074562812148, -46.835377805910085]).addTo(map);
  marker.bindPopup("Hello there! Woo Woo. Hello.").openPopup();
});
