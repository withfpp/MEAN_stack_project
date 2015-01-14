'use strict';

angular.module('angAppApp')
  .factory('authToken', function ($window) {
    // Service logic
    var storage = $window.localStorage;
    var cachedToken;
    var userToken = 'userToken';
    var isAuthenticated = false;

    // Public API 
    var authToken = {
      setToken: function(token) {
        cachedToken = token;
        storage.setItem(userToken, token);
        isAuthenticated = true;
        console.log('setTOKEN: ' + storage['userToken']);
      },
      getToken: function () {
        if(!cachedToken) {
          console.log('in the get TOKEN');
          cachedToken = storage.getItem(userToken);
          console.log(cachedToken);
        }
        return cachedToken;
      },
      isAuthenticated: function (){
        // return true if getToken() returns something
        return !!authToken.getToken();
      },
      removeToken: function(){
        cachedToken = null;
        storage.removeItem('userToken');
        isAuthenticated = false;
      }
    };

    return authToken;
  });
