angular.module('myApp')
  .controller('HomeCtrl', function($scope) {
    console.log('home controller loaded');
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  });
