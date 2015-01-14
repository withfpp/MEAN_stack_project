'use strict';

angular.module('angAppApp')
  .service('auth', function auth ($http, API_URL, authToken, $state, $window, $q){
    
    // function authSuccessful(res){
    //   console.log(' authSuccessful res = ' + res);
    //   authToken.setToken(res.token);
    //   $state.go('main');
    // }

    // this.login = function (email, password) {
    //   return $http.post(API_URL + 'login', {
    //     email: email,
    //     password: password
    //   }).success(authSuccessful);
    // }

    // this.register = function (email, password) {
    //   return $http.post(API_URL + 'register', {
    //     email: email,
    //     password: password
    //   }).success(authSuccessful);
  
    // }
    var OAuthClinetId = '544523155739-fb3chtd84uvc861je9dmdsrb7jhsfaic.apps.googleusercontent.com';
    var urlBuilder = [];
    urlBuilder.push('response_type=code', 
      'client_id=' + OAuthClinetId,
      'redirect_uri=' + window.location.origin,
      'scope=profile email')

    this.googleAuth = function(){
     
      var url = "https://accounts.google.com/o/oauth2/auth?" + urlBuilder.join('&');
      var options = "width=600, height=600";

      var deferred = $q.defer();

      var popup = $window.open(url, '', options);

      $window.focus();
      $window.addEventListener('message', function (event){
        if(event.origin === $window.location.origin){
          var code = event.data;
          popup.close();

          $http.post(API_URL + 'auth/google', {
            code: code,
            clientId: OAuthClinetId,
            redirectUri: window.location.origin
          }).success(function(jwt){
            authSuccessful(jwt);
            deferred.resolve(jwt);
          });

        }
      });

      return deferred.promise;
    }
});