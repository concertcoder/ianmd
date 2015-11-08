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
    vm.getInfluences = function getInfluences(){
      var aboveMed = R.filter(function(field){
        return field.workCloudDisplay && field.subcat === 'Personal Values - Factors influencing who I am' && field.value > 4
      }, R.values(vm.patient));

      return R.reverse(R.sortBy(R.prop('value'), aboveMed));
    };
  })(this);
});
