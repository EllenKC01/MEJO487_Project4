$(document).ready(function () {
  console.log("ready");
});

let map;

// create map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.32, lng: -77.55 },
    zoom: 5.5,
    mapTypeId: "terrain",
  });

  loadData();

  if (screen.width < 767 && typeof map !== "undefined") {
    map.setZoom(5);
  }
}

// load json data
function loadData() {
  $.getJSON("./data/markers.json", function (places) {
    console.log(places);
    createMarkers(places);
  });
}

// create map markers w json data
function createMarkers(places) {
  var pos = "";
  var title = "";
  for (let i = 0; i <= places.length; i++) {
    pos = { lat: places[i].lat, lng: places[i].lng };
    console.log(pos);
    title = places[i].name;
    console.log(title);
    new google.maps.Marker({
      position: pos,
      map: map,
      title: title,
    });
  }

  const marker = google.maps.Marker;

  marker.addListener("click", () => {
    map.setZoom(3);
  });
}
