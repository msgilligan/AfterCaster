'use strict';

/* Services */

angular.module('myApp.services', ['ngResource']).
  value('version', '0.1').
  factory('BlockChain', function($resource) {
    var BlockChain = $resource('http://www.corsproxy.com/blockchain.info/blocks/0?format=json',
                        {}, {
                        'get': {method:'GET'},
                        'query': {method: 'GET', isArray:false}
                        });
    return BlockChain;
  }).
  factory('Block', function($resource) {
    var Block = $resource('http://www.corsproxy.com/blockchain.info/rawblock/:hash',
                        {}, {
                        'get': {method:'GET'},
                        });
    return Block;
  });

