'use strict';

angular.module('ianmd.sections.home', [])
.controller('HomeCtrl', function(userService) {
  (function (vm) {
    vm.user = userService.getUser();
  })(this);
});