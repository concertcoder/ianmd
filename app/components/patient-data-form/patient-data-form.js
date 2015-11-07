'use strict';

angular.module('ianmd.components.patientDataForm', [])
.directive(
  'patientDataForm',
  function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'components/patient-data-form/patient-data-form.tpl.html',
      controller: 'PatientDataFormCtrl as formCtrl',
      bindToController: true
    };
  }
)
.controller('PatientDataFormCtrl', function(userService, kPatientInputFields, patientData, $location) {
  (function (vm) {
    vm.currentPatient = patientData.getCurrentPatient();

    vm.save = function vmSave(){
      patientData.savePatientData(vm.currentPatient);
      $location.path('/home');
    };

    vm.patientChange = function vmPatientChange(setPatient){
      vm.currentPatient = setPatient
    };
  })(this);
});
