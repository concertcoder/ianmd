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