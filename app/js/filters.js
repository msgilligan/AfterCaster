'use strict';

/* Filters */

angular.module('ac.filters', []).
  filter('hashtruncat',function(){
    return function(input){
      var outval = "";
      if (input != undefined) {
        var th = input.replace(/^0+/, '');
        outval = th.substring(0,12)+'...'+th.slice(-12);
      }
      return outval;
    };
  }).
  filter('exhashtruncat',function(){
    return function(input){
      var outval = "";
      if (input != undefined) {
        var th = input.replace(/^0+/, '');
        outval = th.substring(0,5)+'...'+th.slice(-5);
      }
      return outval;
    };
  });
