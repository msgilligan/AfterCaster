'use strict';


// Declare app level module which depends on filters, and services
//angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
angular.module('myApp', ['myApp.services', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/blocks', {templateUrl: 'partials/partial1.html', controller: 'BlockListCtrl'});
    $routeProvider.when('/block/:hash', {templateUrl: 'partials/partial2.html', controller: 'BlockDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/blocks'});
  }]);
