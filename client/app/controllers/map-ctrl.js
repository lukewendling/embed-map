angular.module('myApp')
.controller('MapCtrl', [ '$scope', '$http',
  function($scope, $http) {

  angular.extend($scope, {
    // center: {
    //   autoDiscover: true
    // },
    japan: {
      lat: 38.51,
      lng: 139,
      zoom: 4
    },
    defaults: {
      scrollWheelZoom: false
    },
    tiles: {
      url: "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"

    }
  });

  $http.get("test/data/JPN.geo.json").success(function(data, status) {
    angular.extend($scope, {
      geojson: {
        data: data,
        style: {
          fillColor: "blue",
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }
    });
  });
}]);
