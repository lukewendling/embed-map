'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui-leaflet'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/templates/map',
    controller: 'MapCtrl'
  })
  .otherwise({redirectTo: '/'});
}]);
