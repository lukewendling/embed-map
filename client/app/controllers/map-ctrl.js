angular.module('myApp')
.controller('MapCtrl', [ '$scope', '$http',
  function($scope, $http) {

  angular.extend($scope, {
    // center: {
    //   autoDiscover: true
    // },
    center: {
      lat: 30.25,
      lng: -97.75,
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
