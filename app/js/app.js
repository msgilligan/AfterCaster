'use strict';


// Declare app level module which depends on filters, and services
//angular.module('ac', ['ac.filters', 'ac.services', 'ac.directives', 'ac.controllers']).
angular.module('ac', ['ac.services', 'ac.controllers', 'ac.filters']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/blocks', {templateUrl: 'partials/block-list.html', controller: 'BlockListCtrl'});
    $routeProvider.when('/latest', {templateUrl: 'partials/block-list.html', controller: 'LatestBlockCtrl'});
    $routeProvider.when('/block/:hash', {templateUrl: 'partials/block-detail.html', controller: 'BlockDetailCtrl'});
    $routeProvider.when('/tx/:hash', {templateUrl: 'partials/tx-detail.html', controller: 'TxDetailCtrl'});
    $routeProvider.when('/addr/:addr', {templateUrl: 'partials/addr-detail.html', controller: 'AddrDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/blocks'});
  }]);
