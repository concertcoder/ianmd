'use strict';

angular.module('ianmd.sections.home', ['ianmd.core.user.service'])
.controller('HomeCtrl', function(userService) {
  (function (vm) {
    console.log(userService.getUser())
  })(this);
});