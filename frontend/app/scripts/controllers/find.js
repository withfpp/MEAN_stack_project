'use strict'

angular.module('angAppApp')
  .controller('FindCtrl', function ($scope, $http, API_URL, alert) {

    $http.get(API_URL + "find")
      .success(function (plumbers){
        $scope.plumbers = plumbers;
      }).error(function (err){
        alert('OOPS!', 'Fail to load lists');
      })

    $scope.sorting = 'name';

    $scope.up = function(plumber){
      return plumber.voteNum++;  
    };

    $scope.down = function(plumber){
      return plumber.voteNum--;  
    }

  });

 