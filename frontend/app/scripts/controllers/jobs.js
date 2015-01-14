'use strict';

angular.module('angAppApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL, alert) {
    $http.get(API_URL + 'jobs')
      .success(function(jobs){
        $scope.jobs = jobs;
      }).error(function(err){
        alert('warning', 'unable to get jobs '+ err.message, err.message);
      })

});
