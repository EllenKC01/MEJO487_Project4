let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.32, lng: -76.55 },
    zoom: 5.3,
  });
}
