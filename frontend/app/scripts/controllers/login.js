'use strict';

angular.module('angAppApp')
  .controller('LoginCtrl', function ($scope, alert, auth, $auth) {
  
  $scope.submit = function(){
    $auth.login({email: $scope.email, password: $scope.password})
      .then(function (res){
        // satellizer returns user info insde data object
        alert('success', 'welcome '+ res.data.user.email, 'Good to meet you ' + res.data.user.email + '.');
      }).catch(errorHandling);
  }

  $scope.authenticate = function (provider) {
    $auth.authenticate(provider).then(function (res){
      alert('success', 'welcome '+ res.data.user.displayName, 'Good to meet you ' + '.');
    },errorHandling);
  }

  function errorHandling(err){
    alert('warning', 'something is wrong', err.message);
  }

});