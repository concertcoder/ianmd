'use strict';

angular.module('ianmd.sections.home', [])
.controller('HomeCtrl', function(userService, kFacilities) {
  (function (vm) {
    vm.user = userService.getUser();
    vm.facility = kFacilities[vm.user.facility];
  })(this);
});