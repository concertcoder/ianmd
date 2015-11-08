'use strict';

angular.module('ianmd.components.preferences', [])
.directive(
  'preferences',
  function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/preferences/preferences.tpl.html',
      controller: 'PreferencesCtrl as ctrl',
      bindToController: true,
      scope: {
        patient: '='
      }
    };
  }
)
.controller('PreferencesCtrl', function() {
  (function (vm) {
  })(this);
});
