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
      patientData['mark.dunn'].lastUpdated.value = moment().format('MM/DD/YYYY');
      patientData['mark.dunn'].facility.value = ['5193366551'];

      patientData['james.smith'] = R.clone(kPatientInputFields);
      patientData['james.smith'].id.value = 'james.smith';
      patientData['james.smith'].firstname.value = 'James';
      patientData['james.smith'].lastname.value = 'Smith';
      patientData['james.smith'].lastUpdated.value = moment().format('MM/DD/YYYY');
      patientData['james.smith'].facility.value = ['5193366551'];

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
      patientData[patient.id.value].lastUpdated.value = moment().format('MM/DD/YYYY');
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

    function getPatientDataByFacility(facilityId) {
      var results = {};

      angular.forEach(patientData, function(patient, key) {
          if (patient.facility.value.indexOf(facilityId) !== -1) {
            results[key] = patient;
          }
      });
      return results;
    }

    return {
      getPatientDataById: getPatientDataById,
      getPatientDataByFacility: getPatientDataByFacility,
      savePatientData: savePatientData,
      getCurrentPatient: getCurrentPatient,
      setCurrentPatient: setCurrentPatient
    };
  });