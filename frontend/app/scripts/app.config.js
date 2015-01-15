angular.module('angAppApp').config(function ($urlRouterProvider, $stateProvider, $httpProvider, $authProvider, API_URL){
  
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('main', {
    url: '/',
    templateUrl: '/views/main.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: '/views/register.html',
    controller: 'RegisterCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })

  .state('jobs', {
    url: '/jobs',
    templateUrl: '/views/jobs.html',
    controller: 'JobsCtrl'
  })

  .state('find', {
    url: '/find',
    templateUrl: '/views/find.html',
    controller: 'FindCtrl'
  })

  .state('logout', {
    url: '/logout',
    controller: 'LogoutCtrl'
  });

  $authProvider.loginUrl = API_URL + 'login';
  $authProvider.signupUrl = API_URL + 'register';


  $authProvider.google({
    clientId:'544523155739-fb3chtd84uvc861je9dmdsrb7jhsfaic.apps.googleusercontent.com',
    url: API_URL + 'auth/google'
  })

  $authProvider.facebook({
    clientId:'408421739316519',
    url: API_URL + 'auth/facebook'
  })

  $httpProvider.interceptors.push('authInterceptor');

})

.constant('API_URL', 'http://localhost:3000/')

.run(function($window){
  var params = $window.location.search.substring(1);

  if(params && $window.opener && $window.opener.location.origin === $window.location.origin){
    var pair = params.split('=');
    var code = decodeURIComponent(pair[1]);

    //authorization code is being sent from the main window to the popup window
    $window.opener.postMessage(code, $window.location.origin);
  }
})






