'use strict';

angular.module('ianmd.constants', [])
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
    'firstname': {
      id: 'firstname',
      display: 'First Name',
      value: ''
    },
    'lastname': {
      id: 'lastname',
      display: 'Last Name',
      value: ''
    },
    'occupation': {
      id: 'occupation',
      display: 'Previous or Current Occupation',
      value: ''
    },
    'birthplace': {
      id: 'birthplace',
      display: 'Birth Place',
      value: ''
    }
  });