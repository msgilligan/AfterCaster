'use strict';

/* Controllers */

angular.module('ac.controllers', ['ac.services']).
  controller('BlockListCtrl', ['$scope', 'Block', function($scope, Block) {
    $scope.blocks = [];
	$scope.blockchain = Block.query([], function(bc) {
	    for(var i=0; i<bc.blocks.length; i++) {
	        $scope.blocks.push(bc.blocks[i]);
	    } 
	}, function() {
	});
  }])
  .controller('BlockDetailCtrl', ['$scope', '$routeParams', 'Block', function($scope, $routeParams, Block) {
	$scope.block = Block.get({hash: $routeParams.hash});
  }]);
