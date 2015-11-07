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
    var patientsLookup = userService.getUser().patients;
    vm.patients = {};

    R.forEach(function(id){
      vm.patients[id] =  patientData.getPatientDataById(id);
    }, patientsLookup);

    vm.goToPatient = function vmGoToPatient(setPatient){
      patientData.setCurrentPatient(setPatient);
      $location.path('/patient');
    };
  })(this);
});
