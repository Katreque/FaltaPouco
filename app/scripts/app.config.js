(function(){
  'use strict'

  angular.module('FaltaPouco')
  .config(['$routeProvider', function('$routeProvider'){

      $routeProvider
        .when('/config', {
          controller: 'controllerConfig',
          controllerAs: 'ctrlConfig',
          templateUrl: './app/views/config.html',
        })
  }])

  .config(['$locatoinProvider', function($locationProvider){
    $locationProvider.html5Mode(true);
  }])
}())
