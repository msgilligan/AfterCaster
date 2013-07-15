'use strict';

/* Controllers */

angular.module('ac.controllers', ['ac.services']).
  controller('BlockListCtrl', ['$rootScope', '$scope', 'Block', function($rootScope, $scope, Block) {
    $rootScope.title = "Blocks";
    $rootScope.bbTitle = null;
    $rootScope.bbClass = "button";
    $scope.blocks = [];
	$scope.blockchain = Block.query([], function(bc) {
	    for(var i=0; i<bc.blocks.length; i++) {
	        $scope.blocks.push(bc.blocks[i]);
	    } 
 	   $rootScope.slideAnim = "'slideleft'";
	}, function() {
	});
  }]).
  controller('LatestBlockCtrl', ['$rootScope', '$scope', 'Block', function($rootScope, $scope, Block) {
    $rootScope.title = "Latest Block";
    $rootScope.bbTitle = "Back";
    $rootScope.bbClass = "button show";
    $scope.blocks = [];
	$scope.latest = Block.latest([], function(block) {
	    $scope.blocks.push(block);
	}, function() {
	});
  }]).
  controller('BlockDetailCtrl', ['$rootScope', '$scope', '$routeParams', 'Block', function($rootScope, $scope, $routeParams, Block) {
    $rootScope.title = "Block Info";
    $rootScope.bbTitle = "Back";
    $rootScope.bbClass = "button show";
	$scope.block = Block.get({hash: $routeParams.hash});
  }]).
  controller('TxDetailCtrl', ['$rootScope', '$scope', '$routeParams', 'Tx', function($rootScope, $scope, $routeParams, Tx) {
    $rootScope.title = "Tx Info";
    $rootScope.bbTitle = "Back";
    $rootScope.bbClass = "button show";
	$scope.tx = Tx.get({hash: $routeParams.hash});
  }]).
  controller('AddrDetailCtrl', ['$rootScope', '$scope', '$routeParams', 'Addr', function($rootScope, $scope, $routeParams, Addr) {
    $rootScope.title = "Address (Wallet)";
    $rootScope.bbTitle = "Back";
    $rootScope.bbClass = "button show";
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
//    $rootScope.title = "AfterCaster";
//    $rootScope.bbTitle = "Back";
//    $rootScope.bbClass = "button show";
    $scope.$on('$routeChangeStart', function(scope, next, current) {
    });
    $scope.bbClick = function() {
 	   $rootScope.slideAnim = "'slideleft'";
       $location.path("/blocks");
    };
  }]);
