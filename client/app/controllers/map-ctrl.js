angular.module('myApp')
.controller('MapCtrl', [ '$scope', '$http', "leafletMapEvents", "leafletData",
  function($scope, $http, leafletMapEvents, leafletData) {

    //debounce can be removed in favor of a lodash esque solution if you want...
    //or be placed in a utility namespace of some sort.  I wasn't sure if you wanted
    //to pull in any more third party utilities or not
    $scope.debounce = function(func, wait, immediate) {
      let timeout;
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    $scope.fitBounds = function(){
      console.log("fitting bounds");
      leafletData.getMap().then((map) => {
        const group = new L.FeatureGroup;

        map.eachLayer((layer)=>{
          if(layer instanceof L.Marker || layer instanceof L.GeoJSON)
            group.addLayer(layer);
        });
        if(group.getLayers().length === 0) return;
        map.fitBounds(group.getBounds());
      });

    };

    $scope.fit =$scope.debounce($scope.fitBounds,10,false);
    $scope.$watchGroup(['markers', 'geojson'], function() {
      $scope.fit();
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
