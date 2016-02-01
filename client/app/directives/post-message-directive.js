'use strict';
angular.module('myApp')
.directive('postMessage', [function() {

  function link(scope, elem, attrs) {
    window.addEventListener('message', receiveMessage, false);

    function receiveMessage(event) {
      var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
      // if (origin !== "http://example.org:8080")
      //   return;

      console.info(event.data)
      angular.extend(scope, {
        tiles: {
          url: event.data.tilesUrl
        }
      });
      scope.$apply();
    }
  }

  return {
    link: link
  };
}]);
