'use strict';

angular.module('angAppApp')
  .service('alert', function alert ($rootScope, $timeout) {
    var alertTimeout;
    // AngularJS will instantiate a singleton by calling "new" on this function
    return function (type, title, message, timeout){
      $rootScope.alert = {
        hasBeenShown: true,
        show: true,
        type: type,
        title: title,
        message: message
      };

      $timeout.cancel(alertTimeout);
      alertTimeout = $timeout(function(){
        $rootScope.alert.show = false;
      }, timeout || 2000);    
    
    }
  });
