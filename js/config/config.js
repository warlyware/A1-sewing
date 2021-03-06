angular.module('myApp')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
      })
      .state('quilting', {
        url: '/quilting',
        templateUrl: '/templates/classes/quilting.html',
        controller: 'ClassCtrl'
      })
      .state('sewing', {
        url: '/sewing',
        templateUrl: '/templates/classes/sewing.html',
        controller: 'ClassCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '/templates/admin.html',
        controller: 'AdminCtrl'
      });
  });
