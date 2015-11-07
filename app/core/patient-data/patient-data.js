'use strict';

angular.module('ianmd.core.patient.data', [])
  .factory('patientData', function(kPatientInputFields, $localStorage, kAppVersion){
    var currentPatientId = null;
    var patientData = {};

    if (!$localStorage.patientData || $localStorage.patientData.version !== kAppVersion) {
      patientData['mark.dunn'] = R.clone(kPatientInputFields);
      patientData['mark.dunn'].id.value = 'mark.dunn';
      patientData['mark.dunn'].firstname.value = 'Mark';
      patientData['mark.dunn'].lastname.value = 'Dunn';

      patientData['james.smith'] = R.clone(kPatientInputFields);
      patientData['james.smith'].id.value = 'james.smith';
      patientData['james.smith'].firstname.value = 'James';
      patientData['james.smith'].lastname.value = 'Smith';

      $localStorage.patientData = {
        version: kAppVersion,
        data: patientData,
        currentPatientId: null
      };
    }

    currentPatientId = $localStorage.patientData.currentPatientId;
    patientData = $localStorage.patientData.data;

    function savePatientData(patient) {
      patientData[patient.id.value] = patient;
      return true;
    }

    function getPatientDataById(patientId) {
      if (!patientData[patientId]) {
        return null;
      }
      return patientData[patientId];
    }

    function getCurrentPatient(){
      return patientData[currentPatientId];
    }

    function setCurrentPatient(patient){
      currentPatientId = patient.id.value;
      $localStorage.patientData.currentPatientId = currentPatientId;
    }

    return {
      getPatientDataById: getPatientDataById,
      savePatientData: savePatientData,
      getCurrentPatient: getCurrentPatient,
      setCurrentPatient: setCurrentPatient
    };
  });