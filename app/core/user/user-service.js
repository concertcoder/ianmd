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
          facility: kFacilities['st.marys'],
          patients: ['mark.dunn', 'james.smith'],
          type: kUserTypes.PSW
        },
        'tammy.le': {
          username: 'tammy.le',
          firstname: 'Tammy',
          lastname: 'Le',
          password: 'tester',
          facility: kFacilities['st.johns'],
          patients: ['mark.dunn', 'james.smith'],
          type: kUserTypes.PSW
        },
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

    return {
      login: login,
      getUser: getUser,
      logout: logout
    };
  });