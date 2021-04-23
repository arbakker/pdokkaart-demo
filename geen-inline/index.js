Pdok.addcss("https://kaart.pdok.nl/api/styles/default/style.css");
Pdok.addcss("https://kaart.pdok.nl/api/styles/api.css");
var config_108={
  "mapdiv": "map_108",
  "zoom": 3,
  "showscaleline": true,
  "showmouseposition": true,
  "loc": "170000, 470000",
  "baselayers": [
    {
      "id": "BRT",
      "visible": true
    },
    {
      "id": "LUFO",
      "visible": false
    }
  ],
  "markersdef": "https://kaart.pdok.nl/api/js/pdok-markers.js",
  "layersdef": "https://kaart.pdok.nl/api/js/pdok-layers.js"
};
var api_108;
Pdok.ready( 
function(){ 
api_108 = new Pdok.Api(config_108);
} );
