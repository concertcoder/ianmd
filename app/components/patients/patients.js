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
.controller('PatientsCtrl', function(userService, patientData, $location, kPatientInputFields) {
  (function (vm) {
    vm.popoverOn = true;
    vm.extraFields = [
      'lunchTime',
      'lunchFreq',
      'healthyFood'
    ];

    vm.getValue = function(value){
      if (typeof value === 'string') {
        return value === '' ? 'N/A' : value;
      } else {
        return patientData.getTextFromScaleValue(value);
      }
    };

    vm.getFieldName = function(fieldId){
      return kPatientInputFields[fieldId].tableDisplay;
    };

    vm.user = userService.getUser();
    vm.changeCount = R.keys(vm.user.unseenChangesForUsers).length;
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

    vm.getChangeableFields = R.memoize(function vmGetChangeableFields(){
      var fieldClone = R.clone(kPatientInputFields);
      return R.filter(function(field){
        return vm.extraFields.indexOf(field.id) === -1 && field.tableDisplay
      }, R.values(fieldClone));
    });

    vm.swapField = function vmSwapField(changeTo, changeFrom){
      var indexOfFrom = vm.extraFields.indexOf(changeFrom);
      vm.extraFields[indexOfFrom] = changeTo;
    };

    vm.popoverShowing = function popoverShowing(){
      var popovers = document.querySelectorAll('.ns-popover-list-theme');
      var showing = false;
      R.forEach(function(popover){
        if(popover.style.display !== 'none') {
          showing = true;
        }
      }, popovers);
      return showing;
    };

    vm.closePopUps = function closePopUps(){
      var popovers = document.querySelectorAll('.ns-popover-list-theme');
      R.forEach(function(popover){
        popover.style.display = 'none';
      }, popovers);
      vm.popoverOn = !vm.popoverOn;
    };

    vm.getChangeText = function getChangeText(){
      return vm.changeCount === 1 ? 'a resident' : vm.changeCount + ' residents';
    };

    vm.removeAlert = function(){
      userService.removeAllUnseenChanges();
      vm.changeCount = 0;
    }

  })(this);
});
