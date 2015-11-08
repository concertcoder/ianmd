'use strict';

angular.module('ianmd', [
  'ngRoute',
  'ngStorage',
  '720kb.tooltips',
  'isteven-multi-select',
  'nsPopover',
  'ianmd.constants',
  'ianmd.core.router.config',
  'ianmd.core.user.service',
  'ianmd.core.patient.data',
  'ianmd.components.headerMenu',
  'ianmd.components.patientDataForm',
  'ianmd.components.patients',
  'ianmd.components.preferences',
  'ianmd.components.personhood',
  'ianmd.components.needs',
  'ianmd.sections.patient',
  'ianmd.sections.home',
  'ianmd.sections.login'
]);