'use strict';

/* Controllers */

angular.module('ac.controllers', ['ac.services']).
  controller('BlockListCtrl', ['$scope', 'Block', function($scope, Block) {
    $scope.blocks = [];
	$scope.blockchain = Block.query([], function(bc) {
	    for(var i=0; i<bc.blocks.length; i++) {
	        $scope.blocks.push(bc.blocks[i]);
	    } 
 	   $rootScope.slideAnim = "'slideleft'";
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
  }]).
  controller('IUINavCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
	$rootScope.slideAnim = "'slideleft'";
    $scope.$on('$routeChangeStart', function(scope, next, current) {
//        var backwards = false;
//        if (next.$$route.templateUrl == "partials/block-list.html") {
//            backwards = true;
//        }
//	    $rootScope.slideAnim = backwards ? "'slideright'" : "'slideleft'";
    });
  }]).
  controller('IUIToolbarCtrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
    $scope.title = "AfterCaster";
    $scope.bbTitle = "Back";
    $scope.bbClass = "button show";
    $scope.$on('$routeChangeStart', function(scope, next, current) {
    });
    $scope.bbClick = function() {
 	   $rootScope.slideAnim = "'slideleft'";
       $location.path("/blocks");
    };
  }]);
