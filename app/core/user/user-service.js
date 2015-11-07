'use strict';

angular.module('ianmd.core.user.service', [])
  .factory('userService', function(kUserTypes){
    var currentUserId = null;
    var users = {
      'chris.gosselin': {
        username: 'chris.gosselin',
        firstname: 'Chris',
        lastname: 'Gosselin',
        password: 'tester',
        patients: ['mark.dunn', 'james.smith'],
        type: kUserTypes.PSW
      },
      'tammy.le': {
        username: 'tammy.le',
        firstname: 'Tammy',
        lastname: 'Le',
        password: 'tester',
        patients: ['mark.dunn'],
        type: kUserTypes.PSW
      },
    }

    function login(username, password) {
      if (users[username] && users[username].password === password){
        currentUserId = username;
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
    }

    return {
      login: login,
      getUser: getUser,
      logout: logout
    };
  });