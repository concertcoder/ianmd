'use strict';

angular.module('ianmd', [
  'ngRoute',
  'ianmd.constants',
  'ianmd.core.router.config',
  'ianmd.core.user.service',
  'ianmd.core.patient.data',
  'ianmd.components.headerMenu',
  'ianmd.components.patientDataForm',
  'ianmd.components.patients',
  'ianmd.sections.patient',
  'ianmd.sections.home',
  'ianmd.sections.login'
]);