'use strict';
angular.module('myApp')
.directive('postMessage', [function() {

  function link(scope, elem, attrs) {
    window.addEventListener('message', receiveMessage, false);

    // event.data should match options available on leaflet directive
    // https://github.com/angular-ui/ui-leaflet
    function receiveMessage(event) {
      console.info(event.data);
      const options = event.data;

      // var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
      // if (origin !== "http://example.org:8080")
      //   return;

      const geojson = options.geojson;
      geojson.onEachFeature = onEachFeature; // send marker click to parent

      angular.extend(scope, options);

      scope.$apply();

    }
  }

  function onClick(event) {
    // console.info(event);
    const outbound = {
      feature: event.target.feature,
      latlng: event.latlng,
      type: event.type
    };
    if (window.parent) {
      window.parent.postMessage(outbound, '*');
    } else {
      console.info('Parent will receive: ', outbound);
    }
  }

  function onEachFeature(feature, layer) {
    layer.on({
      click: onClick
    });
  }

  return {
    link: link
  };
}]);
