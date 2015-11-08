'use strict';

angular.module('ianmd.components.needs', [])
.directive(
  'needs',
  function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/needs/needs.tpl.html',
      controller: 'NeedsCtrl as ctrl',
      bindToController: true,
      scope: {
        patient: '='
      }
    };
  }
)
.controller('NeedsCtrl', function() {
  (function (vm) {
  })(this);
});
