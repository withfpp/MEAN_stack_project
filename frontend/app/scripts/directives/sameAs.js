'use strict';

/**
 * @ngdoc directive
 * @name angAppApp.directive:sameAs
 * @description
 * # sameAs
 */

angular.module('angAppApp')
  .directive('validateEquals', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl){
        function validateEqual(value){
          var valid = (value === scope.$eval(attrs.validateEquals));
          ngModelCtrl.$setValidity('equal', valid);
          return valid ? valid : undefined;
        }

        ngModelCtrl.$parsers.push(validateEqual);
        ngModelCtrl.$formatters.push(validateEqual);

        scope.$watch(attrs.validateEquals, function(){
          ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
        })

      }
     
    };
  });
