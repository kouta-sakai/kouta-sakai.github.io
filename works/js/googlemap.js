var map;
function initialize() {
  var latlng = new google.maps.LatLng(32.801611982090456,130.70938488528486);
  var myOptions = {
    zoom: 17,
    center: latlng,
    mapTypeControlOptions: { mapTypeIds: ['odd', google.maps.MapTypeId.ROADMAP] },
	disableDefaultUI: true,
	zoomControl: true,
	scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

var image = 'img/icon.png';
  var lopanMarker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: image
  });

var styleOptions = [{
    featureType: "administrative",
    elementType: "all",
    stylers: [
      { visibility: "simplified" }
    ]
  },{
    featureType: "water",
    elementType: "all",
    stylers: [
      { hue: "#55abc5" }
    ]
  },{
    featureType: "road",
    elementType: "all",
    stylers: [
      { visibility: "simplified" },
      { saturation: -89 },
      { gamma: 1.39 },
      { lightness: 56 }
    ]
  },{
    featureType: "landscape",
    elementType: "all",
    stylers: [
      { visibility: "on" },
      { gamma: 1.76 },
      { saturation: -95 }
    ]
  },{
    featureType: "poi",
    elementType: "all",
    stylers: [
      { visibility: "simplified" }
    ]
  },{
    featureType: "transit",
    elementType: "all",
    stylers: [
      { visibility: "simplified" },
      { gamma: 2.51 }]
}];
  var styledMapOptions = { name: '繧ｪ繝ｪ繧ｸ繝翫Ν' }
  var oddType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('odd', oddType);
  map.setMapTypeId('odd');
}
