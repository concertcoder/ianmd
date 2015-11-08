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
      patientData.setCurrentPatient(setPatient);
      $location.path('/patient');
    };
    
    vm.getInRowOf = R.memoize(function vmGetInRowOf(maxRow, patients){
      var rowIndex = 0;
      var row = [];
      var rowByRow = [];
      for(var key in patients){
          row.push(patients[key]);
          if (row.length === maxRow){
              rowByRow.push(row);
              row = [];
          }
      }

      if (row.length){
          rowByRow.push(row);
      }
      
      return rowByRow;
    });
  })(this);
});
