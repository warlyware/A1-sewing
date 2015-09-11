angular.module('myApp')
.controller('AdminCtrl', function($scope, $http) {
  console.log('AdminCtrl loaded');
  $http.get('/admin/classes').then(function(data) {
    $scope.classes = data.data;
  });
});
