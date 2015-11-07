'use strict';

angular.module('ianmd.core.router.config', ['ngRoute'])
  .config(
    function routerConfig($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'sections/view1/view1.html',
        controller: 'View1Ctrl'
      });
      $routeProvider.when('/view2', {
        templateUrl: 'sections/view2/view2.html',
        controller: 'View2Ctrl'
      });
      $routeProvider.otherwise({redirectTo: '/view1'});
    }
  );
