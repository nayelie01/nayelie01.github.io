alert("Welcome to my website");

var view;
var map;
var intialLocation;
var london;

function init() {
  intialLocation = ol.proj.fromLonLat([41.043316, 28.862457]);
  london = ol.proj.fromLonLat([-0.12755, 51.507222]);

  view = new ol.View({
    center: intialLocation,
    zoom: 6
  });
  

  map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Title({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view: view
  });
}

function panLondon() {
  view.animate({
    center: london,
    duration: 2000
  });
}
