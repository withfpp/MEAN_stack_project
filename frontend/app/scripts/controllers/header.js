'use strict';

// USE: angular oauth module - "saterllizer"
// satterlizer provide "isAuthenticated" state.
// once we login through satellizer, it will automatically provide the states.
// so we can just use it.

angular.module('angAppApp')
  .controller('HeaderCtrl', function ($scope, $auth) {
    $scope.isAuthenticated = $auth.isAuthenticated;
  });

