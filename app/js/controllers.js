'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services']).
  controller('BlockListCtrl', ['$scope', 'BlockChain', function($scope, BlockChain) {
    $scope.blocks = [];
	$scope.blockchain = BlockChain.query([], function(bc) {
	    for(var i=0; i<bc.blocks.length; i++) {
	        $scope.blocks.push(bc.blocks[i]);
	    } 
	}, function() {
	});
  }])
  .controller('BlockDetailCtrl', ['$scope', '$routeParams', 'Block', function($scope, $routeParams, Block) {
	$scope.block = Block.get({hash: $routeParams.hash});
  }]);
