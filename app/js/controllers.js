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
  }]).
  controller('LatestBlockCtrl', ['$scope', 'Block', function($scope, Block) {
    $scope.blocks = [];
	$scope.latest = Block.latest([], function(block) {
	    $scope.blocks.push(block);
	}, function() {
	});
  }]).
  controller('BlockDetailCtrl', ['$scope', '$routeParams', 'Block', function($scope, $routeParams, Block) {
	$scope.block = Block.get({hash: $routeParams.hash});
  }]).
  controller('TxDetailCtrl', ['$scope', '$routeParams', 'Tx', function($scope, $routeParams, Tx) {
	$scope.tx = Tx.get({hash: $routeParams.hash});
  }]).
  controller('AddrDetailCtrl', ['$scope', '$routeParams', 'Addr', function($scope, $routeParams, Addr) {
	$scope.addr = Addr.get({addr: $routeParams.addr}, function(addr) {
    var qrcode = new QRCode("qrcode");
    qrcode.makeCode(addr.address);
  });
}]);
