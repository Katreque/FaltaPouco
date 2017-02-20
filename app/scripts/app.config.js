(function(){
  'use strict'

  angular.module('FaltaPouco')
    .config(['$locatoinProvider', function($locationProvider){
      $locationProvider.html5Mode(true);
    }])
}())
