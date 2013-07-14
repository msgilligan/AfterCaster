'use strict';

/* Filters */

angular.module('ac.filters', []).filter('hashtruncat',function(){
    return function(input){
      var th = input.replace(/^0+/, '');
      return th.substring(0,12)+'...'+th.slice(-12);
    };
  });

angular.module('ac.filters', []).filter('exhashtruncat',function(){
    return function(input){
      var th = input.replace(/^0+/, '');
      return th.substring(0,5)+'...'+th.slice(-5);
    };
  });
