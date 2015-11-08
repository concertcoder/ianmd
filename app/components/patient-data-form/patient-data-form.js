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
    vm.fieldFilter = 'Needs';
    vm.showChangeBanner = false;
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

    if (userService.getUser().unseenChangesForUsers[vm.currentPatient.id.value]) {
      vm.showChangeBanner = true;
    }

    vm.removeAlert = function vmRemoveAlert(){
      userService.removeUnseenChangeForPatientId(vm.currentPatient.id.value);
      vm.showChangeBanner = false;
    };

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
          if (!!value.editable && value.section === vm.fieldFilter) {
              result[key] = value;
          }
      });
      return result;
    };

    vm.fieldWasChanged = function vmFieldWasChanged(fieldId){
      return !R.isNil(patientData.getPreviousPatientFieldValue(fieldId));
    };

    vm.getChangeText = function vmGetChangeText(fieldId){
      var changeValue = patientData.getPreviousPatientFieldValue(fieldId);
      return 'Value changed from: \'' + (changeValue === '' ? 'No Value' : changeValue) + '\'';
    };

    vm.switchMode = function vmSwitchMode(){
      vm.inEditMode = !vm.inEditMode;
    }
    
    vm.getTitleFromFilter = function vmGetTitleFromFilter(filter){
      var filterToTitle = {
        'Needs': 'Preferences',
        'Preferences': 'Interests',
        'Personhood': 'Story'
      };
      
      return filterToTitle[filter];
    };
  })(this);
});
