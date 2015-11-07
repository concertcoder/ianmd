'use strict';

angular.module('ianmd', [
  'ngRoute',
  'ianmd.constants',
  'ianmd.core.router.config',
  'ianmd.core.user.service',
  'ianmd.components.headerMenu',
  'ianmd.sections.home',
  'ianmd.sections.login'
]);