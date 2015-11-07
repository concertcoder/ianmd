'use strict';

angular.module('ianmd.sections.home', ['ianmd.core.user.service'])
.controller('HomeCtrl', function(userService, $location) {
  (function (vm) {
    vm.user = userService.getUser();
    vm.logout = function() {
      userService.logout();
      $location.path('/login');
    };
  })(this);
});