'use strict';

angular.module('ianmd.core.patient.data', [])
  .factory('patientData', function(kPatientInputFields, $localStorage, kAppVersion, userService, kSanaMarina, kVickiChan){
    var currentPatientId = null;
    var patientData = {};

    /* This is where we initiatize fake patient data.  This was so tedious */
    if (!$localStorage.patientData || $localStorage.patientData.version !== kAppVersion) {
      // Started filling things out through the UI then taking it out of local storage and saving it to a constant
      // less painful but if fields change...
      patientData['sana.marina'] = kSanaMarina;
      patientData['vicki.chan'] = kVickiChan;

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
      
      patientData['alex.writer'] = R.clone(kPatientInputFields);
      patientData['alex.writer'].id.value = 'alex.writer';
      patientData['alex.writer'].firstname.value = 'Alex';
      patientData['alex.writer'].lastname.value = 'Writer';
      patientData['alex.writer'].lastUpdated.value = moment().unix();
      patientData['alex.writer'].facility.value = ['5193366551'];
      patientData['alex.writer'].ohip.value = '4444-124-117 KP';
      patientData['alex.writer'].roomnum.value = '11C';
      
      patientData['danielle.hoffman'] = R.clone(kPatientInputFields);
      patientData['danielle.hoffman'].id.value = 'danielle.hoffman';
      patientData['danielle.hoffman'].firstname.value = 'Danielle';
      patientData['danielle.hoffman'].lastname.value = 'Hoffman';
      patientData['danielle.hoffman'].lastUpdated.value = moment().unix();
      patientData['danielle.hoffman'].facility.value = ['5193366551'];
      patientData['danielle.hoffman'].ohip.value = '2837-333-117 KP';
      patientData['danielle.hoffman'].roomnum.value = '14C';
      
      patientData['sarah.bedrock'] = R.clone(kPatientInputFields);
      patientData['sarah.bedrock'].id.value = 'sarah.bedrock';
      patientData['sarah.bedrock'].firstname.value = 'Sarah';
      patientData['sarah.bedrock'].lastname.value = 'Bedrock';
      patientData['sarah.bedrock'].lastUpdated.value = moment().unix();
      patientData['sarah.bedrock'].facility.value = ['5193366551'];
      patientData['sarah.bedrock'].ohip.value = '2837-124-222 KP';
      patientData['sarah.bedrock'].roomnum.value = '9A';
      
      patientData['tammy.chen'] = R.clone(kPatientInputFields);
      patientData['tammy.chen'].id.value = 'tammy.chen';
      patientData['tammy.chen'].firstname.value = 'Tammy';
      patientData['tammy.chen'].lastname.value = 'Chen';
      patientData['tammy.chen'].lastUpdated.value = moment().unix();
      patientData['tammy.chen'].facility.value = ['5193366551'];
      patientData['tammy.chen'].ohip.value = '9999-124-117 KP';
      patientData['tammy.chen'].roomnum.value = '7B';
      
      patientData['chris.gregory'] = R.clone(kPatientInputFields);
      patientData['chris.gregory'].id.value = 'chris.gregory';
      patientData['chris.gregory'].firstname.value = 'Chris';
      patientData['chris.gregory'].lastname.value = 'Gregory';
      patientData['chris.gregory'].lastUpdated.value = moment().unix();
      patientData['chris.gregory'].facility.value = ['5193366551'];
      patientData['chris.gregory'].ohip.value = '2837-999-117 KP';
      patientData['chris.gregory'].roomnum.value = '30C';
      
      patientData['james.red'] = R.clone(kPatientInputFields);
      patientData['james.red'].id.value = 'james.red';
      patientData['james.red'].firstname.value = 'James';
      patientData['james.red'].lastname.value = 'Red';
      patientData['james.red'].lastUpdated.value = moment().unix();
      patientData['james.red'].facility.value = ['5193366551'];
      patientData['james.red'].ohip.value = '2837-124-999 KP';
      patientData['james.red'].roomnum.value = '2A';

      $localStorage.patientData = {
        version: kAppVersion,
        data: patientData,
        currentPatientId: null
      };

      // Keep in mind data is stored least recent changes to recent changes, so reverse array if needed
      $localStorage.patientHistory = {
        version: kAppVersion,
        data: {}
      };
    }

    currentPatientId = $localStorage.patientData.currentPatientId;
    patientData = $localStorage.patientData.data;

    function savePatientData(patient) {
      var currentFieldsClone = R.values(R.clone(patientData[patient.id.value]));
      patientData[patient.id.value] = patient;
      patientData[patient.id.value].lastUpdated.value = moment().unix();

      var changes = R.filter(function(currentField){
        if(currentField === undefined ||
          currentField.id === undefined ||
          currentField.value === undefined) {
          return false;
        }
        return !R.equals(currentField.value, patientData[patient.id.value][currentField.id].value);
      }, currentFieldsClone);

      if (!$localStorage.patientHistory.data[patient.id.value]) {
        $localStorage.patientHistory.data[patient.id.value] = [];
      }

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