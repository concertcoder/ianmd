'use strict';

angular.module('ianmd.components.personhood', [])
.directive(
  'personhood',
  function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/personhood/personhood.tpl.html',
      controller: 'PersonhoodCtrl as ctrl',
      bindToController: true,
      scope: {
        patient: '='
      }
    };
  }
)
.controller('PersonhoodCtrl', function() {
  (function (vm) {
  })(this);
});
