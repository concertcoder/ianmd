'use strict';

angular.module('ianmd.core.user.service', [])
  .factory('userService', function(){
    var currentUserId = null;
    var users = {
      'chris.gosselin': {
        username: 'chris.gosselin',
        firstname: 'Chris',
        lastname: 'Gosselin',
        password: 'tester',
        type: 'caregiver'
      },
      'tammy.le': {
        username: 'tammy.le',
        firstname: 'Tammy',
        lastname: 'Le',
        password: 'tester',
        type: 'family'
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