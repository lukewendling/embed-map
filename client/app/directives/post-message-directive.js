'use strict';
angular.module('myApp')
.directive('postMessage', [function() {

  function link(scope, elem, attrs) {
    window.addEventListener('message', receiveMessage, false);

    function receiveMessage(event) {
      console.info(event.data)
      var options = event.data;

      // var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
      // if (origin !== "http://example.org:8080")
      //   return;

      if (options.tiles) {
        angular.extend(scope, {
          tiles: options.tiles
        });
      }
      if (options.geojson || options.geoJson) {
        angular.extend(scope, {
          geojson: options.geojson || options.geoJson
        });
      }
      if (options.center) {
        angular.extend(scope, {
          center: options.center
        });
      }
      scope.$apply();
    }
  }

  return {
    link: link
  };
}]);
