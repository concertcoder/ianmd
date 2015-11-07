'use strict';

angular.module('ianmd.components.headerMenu', [])
.directive(
  'headerMenu',
  function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/header-menu/header-menu.tpl.html',
      controller: 'HeaderMenuCtrl as headerMenuCtrl',
      bindToController: true
    };
  }
)
.controller('HeaderMenuCtrl', function(userService, $location) {
  (function (vm) {
    vm.user = userService.getUser();
    console.log(vm.user);
    vm.logout = function() {
      userService.logout();
      $location.path('/login');
    };
  })(this);
});
