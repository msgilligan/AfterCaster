'use strict';

/* Services */

angular.module('ac.services', ['ngResource']).
  value('version', '0.1').
  factory('Block', function($resource) {
    var Block = $resource('http://www.corsproxy.com/blockchain.info/rawblock/:hash',
                        {}, {
                        'get': {method:'GET'},
                        'query': {method: 'GET', url: 'http://www.corsproxy.com/blockchain.info/blocks/0?format=json', isArray:false}
                        });
    return Block;
  });

