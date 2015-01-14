'use strict';
 
angular.module('angAppApp')
  .controller('LogoutCtrl', function ($auth, $state) {
    $auth.logout();
    $state.go('main');
  });
