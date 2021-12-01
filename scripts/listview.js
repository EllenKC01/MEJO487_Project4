$(document).ready(function () {
  console.log("ready");
  loadData();
});

// load json
function loadData() {
  $.getJSON("./data/markers.json", function (places) {
    console.log(places);
    createTable(places);
  });
}

// create data table with place info using DataTables plugin
function createTable(places) {
  $("#myTable").DataTable({
    data: places,
    columns: [
      { data: "image" },
      { data: "name" },
      { data: "state" },
      { data: "description" },
    ],
    responsive: true,
  });
}
