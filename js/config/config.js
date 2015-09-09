angular.module('myApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
        controller: 'HomeCtrl'
      })
      .state('classes', {
        url: '/classes',
        templateUrl: '/templates/classes.html',
        controller: 'ClassCtrl'
      });

  });
