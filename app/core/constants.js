'use strict';

angular.module('ianmd.constants', [])
  .constant('kAppVersion', 8)
  .constant('kFacilities', {
    '5193366551': {
      id: '5193366551',
      street: '229 Wellington St',
      city: 'Sarnia',
      state: 'Ontario',
      postal: 'N7T 1G9',
      phone: '(519) 336-6551',
      name: 'Vision Nursing Home'
    },
    '4163433244': {
      street: '25 Brunswick Ave',
      city: 'Toronto',
      state: 'Ontario',
      postal: 'M5S 2L9',
      phone: '416-343-3244',
      name: 'Kensington Gardens'
    }
  })
  .constant('kUserTypes', {
    'PSW': 'Personal Support Worker',
    'FAMILY_CAREGIVER': 'Family Caregiver',
    'PATIENT': 'Patient',
    'FAMILY': 'Family'
  })
  .constant('kPatientInputFields', {
    'id': {
      id: 'id',
      display: 'User Id',
      value: '',
    },
    'facility': {
      id: 'facility',
      display: 'Facility',
      value: '',
    },
    'lastUpdated': {
      id: 'lastUpdated',
      display: 'Last Updated',
      value: ''
    },
    'firstname': {
      id: 'firstname',
      display: 'First Name',
      editable: true,
      value: ''
    },
    'lastname': {
      id: 'lastname',
      display: 'Last Name',
      editable: true,
      value: ''
    },
    'occupation': {
      id: 'occupation',
      display: 'Previous or Current Occupation',
      editable: true,
      value: ''
    },
    'birthplace': {
      id: 'birthplace',
      display: 'Birth Place',
      editable: true,
      value: ''
    }
  });