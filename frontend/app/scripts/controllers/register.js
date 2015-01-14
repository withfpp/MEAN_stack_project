'use strict';

angular.module('angAppApp')
  .controller('RegisterCtrl', function ($scope, alert, $auth) {

    $scope.submit = function(){

      $auth.signup({email: $scope.email, password:$scope.password})
        .then(function(res){
          alert('success', 'GOOD', 'success register');
        })
        .catch(function(err){
          alert('warning', 'oops', 'could not register');
        });
    }
  });
