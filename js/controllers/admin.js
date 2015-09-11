angular.module('myApp')
.controller('AdminCtrl', function($scope, $http, $state) {
  console.log('AdminCtrl loaded');
  $http.get('/admin/classes').then(function(data) {
    $scope.classes = data.data;
  });

  $scope.userIsNowPaid = function(user, sewingClass) {
    console.log('pay for user:', user);
    console.log('class', sewingClass);
    $http.post('/classes/pay', {
      classId: sewingClass._id,
      userId: user._id
    }).then(function(savedClass) {
      console.log('savedClass', savedClass);
      $state.reload();
    }, function(err) {
      console.log(err);
    });
  };

});
