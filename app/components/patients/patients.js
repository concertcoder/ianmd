'use strict';

angular.module('ianmd.components.patients', [])
.directive(
  'patients',
  function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/patients/patients.tpl.html',
      controller: 'PatientsCtrl as patientsCtrl',
      bindToController: true
    };
  }
)
.controller('PatientsCtrl', function(userService, patientData, $location) {
  (function (vm) {
    vm.user = userService.getUser();
    var facility = vm.user.facility;
    vm.moment = moment;
    vm.patients = patientData.getPatientDataByFacility(facility);

    vm.goToPatient = function vmGoToPatient(setPatient){
      userService.removeUnseenChangeForPatientId(setPatient.id.value);
      patientData.setCurrentPatient(setPatient);
      $location.path('/patient');
    };
  })(this);
});
