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
    /*
    vm.outputFoods = [];
    vm.foods = [
      {name: 'Apple', selected: false  },
      {name: 'Orange', selected: false },
      {name: 'Steak',  selected: false  },
      {name: 'Pizza', selected: false },
      {name: 'Lobster', selected: false  }
    ];*/

    vm.inEditMode = false;
    vm.currentPatient = patientData.getCurrentPatient();

    vm.save = function vmSave(){
      patientData.savePatientData(vm.currentPatient);
      vm.switchMode();
    };

    vm.goBack = function vmGoback(){
      $location.path('/home');
    };

    vm.patientChange = function vmPatientChange(setPatient){
      vm.currentPatient = setPatient
    };

    vm.getEditableProps = function getEditableProps(props){
      var result = {};
      angular.forEach(props, function(value, key) {
          if (!!value.editable) {
              result[key] = value;
          }
      });
      return result;
    };

    vm.switchMode = function vmSwitchMode(){
      vm.inEditMode = !vm.inEditMode;
    }
  })(this);
});
