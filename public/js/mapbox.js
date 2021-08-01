const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoianVnYWwxMjEiLCJhIjoiY2tyMTBhbWNsMHpubjJ5czZjODVxcXA4ZiJ9.-1IkMuQZAfb7Qwx8A3I4Pw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
