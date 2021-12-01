$(document).ready(function () {
  console.log("ready");
});

let map;

// create map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40, lng: -77.55 },
    zoom: 5.4,
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
// InfoWindow help from https://www.svennerberg.com/2012/03/adding-multiple-markers-to-google-maps-from-json/
function createMarkers(places) {
  var infoWindow = new google.maps.InfoWindow();
  for (let i = 0; i <= places.length; i++) {
    var data = places[i];
    var pos = new google.maps.LatLng(data.lat, data.lng);
    console.log(pos);
    var title = places[i].name;
    console.log(title);
    var marker = new google.maps.Marker({
      position: pos,
      map,
      title: title,
    });
    marker.setMap(map);
    // opening infoWindow when marker clicked and creating a closure to pass current data
    (function (marker, data) {
      var descrip = places[i].description;
      var img = places[i].image;
      var content =
        "<div><h1>" +
        data.name +
        ", " +
        data.state +
        "</h1></div><br><div class='row'><div class='col-md-6'><p>" +
        descrip +
        "</p></div><div class='col-md-6'>" +
        img +
        "</p></div></div>";
      google.maps.event.addListener(marker, "click", function (e) {
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
      });
    })(marker, data);
  }
}
