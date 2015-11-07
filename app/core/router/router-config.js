'use strict';

angular.module('ianmd.core.router.config', ['ngRoute'])
  .config(
    function routerConfig($routeProvider) {
      $routeProvider.when('/login', {
        templateUrl: 'sections/login/login.html',
        controller: 'LoginCtrl as loginCtrl'
      });
      $routeProvider.when('/home', {
        templateUrl: 'sections/home/home.html',
        controller: 'HomeCtrl as homeCtrl'
      });
      $routeProvider.otherwise({redirectTo: '/login'});
    }
  );
