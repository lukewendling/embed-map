angular.module('myApp')
.controller('MapCtrl', [ '$scope', '$http', "leafletMapEvents", "leafletData",
  function($scope, $http, leafletMapEvents, leafletData) {

    $scope.fitBounds = _.debounce(function(){
      leafletData.getMap().then((map) => {
        const group = new L.FeatureGroup;
        map.eachLayer((layer)=>{
          if(layer instanceof L.Marker || layer instanceof L.GeoJSON) group.addLayer(layer);
        });
        if(group.getLayers().length === 0) return;
        map.fitBounds(group.getBounds());
      });
    });

    $scope.$watchGroup(['markers', 'geojson'], function() {
      $scope.fitBounds();
    });

    angular.extend($scope, {
    // center: {
    //   autoDiscover: true
    // },
    center: {
      lat: -8.98,
      lng: -38.22,
      zoom: 8
    },
    defaults: {
      // scrollWheelZoom: false
    },
    tiles: {
      url: "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
    }
  });
}]);
