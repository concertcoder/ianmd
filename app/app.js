'use strict';

angular.module('ianmd', [
  'ngRoute',
  'ianmd.view1',
  'ianmd.view2'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
