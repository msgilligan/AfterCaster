'use strict';


// Declare app level module which depends on filters, and services
//angular.module('ac', ['ac.filters', 'ac.services', 'ac.directives', 'ac.controllers']).
angular.module('ac', ['ac.services', 'ac.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/blocks', {templateUrl: 'partials/block-list.html', controller: 'BlockListCtrl'});
    $routeProvider.when('/block/:hash', {templateUrl: 'partials/block-detail.html', controller: 'BlockDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/blocks'});
  }]);
