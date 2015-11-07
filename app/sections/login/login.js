'use strict';

angular.module('ianmd.sections.login', [])

.controller('LoginCtrl', function(userService, $location) {
  (function (vm) {
    vm.msg = '';

    vm.login = function vmLogin(){
      var success = userService.login(vm.username, vm.password);

      if (success) {
        $location.path('/home');
      } else {
        vm.msg = 'Credentials are not correct';
      }
    };
  })(this);
});