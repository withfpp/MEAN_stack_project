'use strict';

/**
 * @ngdoc service
 * @name angAppApp.authIntercepter
 * @description
 * # authIntercepter
 * Factory in the angAppApp.
 */
angular.module('angAppApp')
  .factory('authInterceptor', function (authToken) {
    // Service logic
    // 앵귤러에서 나오는 http 리퀘스트를 가로채서 authorization 을 부여하는 서비스.

    // Public API here
    return {
      request: function(config) {
        var token = authToken.getToken();

        if (token)
          config.headers.Authorization = 'Bearer ' + token;

        return config;
      },
      response: function(response) {
        return response;
      }
    };
  });
