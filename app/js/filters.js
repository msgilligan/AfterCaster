'use strict';

/* Filters */

angular.module('ac.filters', []).
  filter('btc_convert',function(){
    return function(input){
      return input*.00000001
    };
  };
);
