'use strict';

angular.module('ianmd.core.user.service', [])
  .factory('userService', function(kUserTypes, $localStorage, kAppVersion, kFacilities){
    var currentUserId = null;
    var users = {}

    if (!$localStorage.userData || $localStorage.userData.version !== kAppVersion) {
      users = {
        'chris.gosselin': {
          username: 'chris.gosselin',
          firstname: 'Chris',
          lastname: 'Gosselin',
          password: 'tester',
          facility: '5193366551',
          type: kUserTypes.PSW,
          unseenChangesForUsers: {}
        },
        'tammy.le': {
          username: 'tammy.le',
          firstname: 'Tammy',
          lastname: 'Le',
          password: 'tester',
          facility: '5193366551',
          type: kUserTypes.PSW,
          unseenChangesForUsers: {}
        },
        'john.chan': {
          username: 'john.chan',
          firstname: 'John',
          lastname: 'Chan',
          password: 'tester',
          facility: '4162223211',
          type: kUserTypes.FAMILY_CAREGIVER,
          unseenChangesForUsers: {}
        }
      };

      $localStorage.userData = {
        version: kAppVersion,
        data: users,
        currentUserId: null
      };
    }

    currentUserId = $localStorage.userData.currentUserId;
    users = $localStorage.userData.data;

    function login(username, password) {
      if (users[username] && users[username].password === password){
        currentUserId = username;
        $localStorage.userData.currentUserId = currentUserId;
        return true;
      } else {
        return false;
      }
    }

    function getUser(){
      if (!users[currentUserId]) {
        return null;
      }

      return users[currentUserId];
    }

    function logout(){
      currentUserId = null;
      $localStorage.userData.currentUserId = null;
    }

    function setUnseenChangeForPatientId(patientId){
      getUser().unseenChangesForUsers[patientId] = true;
      $localStorage.userData.data = users;
    }

    function removeUnseenChangeForPatientId(patientId){
      delete getUser().unseenChangesForUsers[patientId];
      $localStorage.userData.data = users;
    }

    function removeAllUnseenChanges(){
      getUser().unseenChangesForUsers = {};
      $localStorage.userData.data = users;
    }

    return {
      login: login,
      getUser: getUser,
      logout: logout,
      setUnseenChangeForPatientId: setUnseenChangeForPatientId,
      removeUnseenChangeForPatientId: removeUnseenChangeForPatientId,
      removeAllUnseenChanges: removeAllUnseenChanges
    };
  });