'use strict';

angular.module('ianmd.core.patient.data', [])
  .factory('patientData', function(kPatientInputFields, $localStorage, kAppVersion, userService){
    var currentPatientId = null;
    var patientData = {};

    if (!$localStorage.patientData || $localStorage.patientData.version !== kAppVersion) {
      patientData['mark.dunn'] = R.clone(kPatientInputFields);
      patientData['mark.dunn'].id.value = 'mark.dunn';
      patientData['mark.dunn'].firstname.value = 'Mark';
      patientData['mark.dunn'].lastname.value = 'Dunn';
      patientData['mark.dunn'].lastUpdated.value = moment().unix();
      patientData['mark.dunn'].facility.value = ['5193366551'];
      patientData['mark.dunn'].ohip.value = '2857-124-317 KP';
      patientData['mark.dunn'].roomnum.value = '10A';

      patientData['james.smith'] = R.clone(kPatientInputFields);
      patientData['james.smith'].id.value = 'james.smith';
      patientData['james.smith'].firstname.value = 'James';
      patientData['james.smith'].lastname.value = 'Smith';
      patientData['james.smith'].lastUpdated.value = moment().unix();
      patientData['james.smith'].facility.value = ['5193366551'];
      patientData['james.smith'].ohip.value = '2837-124-117 KP';
      patientData['james.smith'].roomnum.value = '14A';
      
      patientData['james.smith1'] = R.clone(kPatientInputFields);
      patientData['james.smith1'].id.value = 'james.smith1';
      patientData['james.smith1'].firstname.value = 'James';
      patientData['james.smith1'].lastname.value = 'Smith';
      patientData['james.smith1'].lastUpdated.value = moment().unix();
      patientData['james.smith1'].facility.value = ['5193366551'];
      patientData['james.smith1'].ohip.value = '2837-124-117 KP';
      patientData['james.smith1'].roomnum.value = '14A';
      
      patientData['james.smith2'] = R.clone(kPatientInputFields);
      patientData['james.smith2'].id.value = 'james.smith2';
      patientData['james.smith2'].firstname.value = 'James';
      patientData['james.smith2'].lastname.value = 'Smith';
      patientData['james.smith2'].lastUpdated.value = moment().unix();
      patientData['james.smith2'].facility.value = ['5193366551'];
      patientData['james.smith2'].ohip.value = '2837-124-117 KP';
      patientData['james.smith2'].roomnum.value = '14A';
      
      patientData['james.smith3'] = R.clone(kPatientInputFields);
      patientData['james.smith3'].id.value = 'james.smith3';
      patientData['james.smith3'].firstname.value = 'James';
      patientData['james.smith3'].lastname.value = 'Smith';
      patientData['james.smith3'].lastUpdated.value = moment().unix();
      patientData['james.smith3'].facility.value = ['5193366551'];
      patientData['james.smith3'].ohip.value = '2837-124-117 KP';
      patientData['james.smith3'].roomnum.value = '14A';
      
      patientData['james.smith4'] = R.clone(kPatientInputFields);
      patientData['james.smith4'].id.value = 'james.smith4';
      patientData['james.smith4'].firstname.value = 'James';
      patientData['james.smith4'].lastname.value = 'Smith';
      patientData['james.smith4'].lastUpdated.value = moment().unix();
      patientData['james.smith4'].facility.value = ['5193366551'];
      patientData['james.smith4'].ohip.value = '2837-124-117 KP';
      patientData['james.smith4'].roomnum.value = '14A';
      
      patientData['james.smith5'] = R.clone(kPatientInputFields);
      patientData['james.smith5'].id.value = 'james.smith5';
      patientData['james.smith5'].firstname.value = 'James';
      patientData['james.smith5'].lastname.value = 'Smith';
      patientData['james.smith5'].lastUpdated.value = moment().unix();
      patientData['james.smith5'].facility.value = ['5193366551'];
      patientData['james.smith5'].ohip.value = '2837-124-117 KP';
      patientData['james.smith5'].roomnum.value = '14A';
      
      patientData['james.smith6'] = R.clone(kPatientInputFields);
      patientData['james.smith6'].id.value = 'james.smith6';
      patientData['james.smith6'].firstname.value = 'James';
      patientData['james.smith6'].lastname.value = 'Smith';
      patientData['james.smith6'].lastUpdated.value = moment().unix();
      patientData['james.smith6'].facility.value = ['5193366551'];
      patientData['james.smith6'].ohip.value = '2837-124-117 KP';
      patientData['james.smith6'].roomnum.value = '14A';



      $localStorage.patientData = {
        version: kAppVersion,
        data: patientData,
        currentPatientId: null
      };

      // Keep in mind data is stored least recent changes to recent changes, so reverse array if needed
      $localStorage.patientHistory = {
        version: kAppVersion,
        data: {
          'mark.dunn': [],
          'james.smith': []
        }
      };
    }

    currentPatientId = $localStorage.patientData.currentPatientId;
    patientData = $localStorage.patientData.data;

    function savePatientData(patient) {
      var currentFieldsClone = R.values(R.clone(patientData[patient.id.value]));
      patientData[patient.id.value] = patient;
      patientData[patient.id.value].lastUpdated.value = moment().unix();

      var changes = R.filter(function(currentField){
        return !R.equals(currentField.value, patientData[patient.id.value][currentField.id].value);
      }, currentFieldsClone);

      $localStorage.patientHistory.data[patient.id.value].push(R.clone(changes));
      $localStorage.patientData.data[patient.id.value] = R.clone(patientData[patient.id.value]);
      userService.setUnseenChangeForPatientId(patient.id.value);
      return true;
    }

    function getPatientDataById(patientId) {
      if (!patientData[patientId]) {
        return null;
      }
      return patientData[patientId];
    }

    function getCurrentPatient(){
      return R.clone(patientData[currentPatientId]);
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