'use strict';

angular.module('ianmd.sections.login', ['ianmd.core.user.service'])

.controller('LoginCtrl', function(userService, $location) {
  (function (vm) {
    vm.login = function vmLogin(){
      var success = userService.login(vm.username, vm.password);

      if (success) {
        $location.path('/home');
      }
    };
  })(this);
});