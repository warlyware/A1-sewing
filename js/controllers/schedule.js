angular.module('myApp').controller('ScheduleCtrl', function ($scope, ngDialog) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: '09-12-2015',
        status: 'class1',
      },
      {
        date: '09-19-2015',
        status: 'class1',
      },
      {
        date: '09-28-2015',
        status: 'class2'
      }
    ];

  $scope.getEventInfo = function() {
    // var moment = moment($scope.dt).format();
    // var date =
    var date = moment($scope.dt).format('MM-DD-YYYY');
    console.log('getting info', date);
    if (date == '09-12-2015' || date == '09-19-2015') {
      $scope.eventName = 'Beginning Quilting';
      $scope.eventInfo = 'quilting';
    }
    else if (date == '09-28-2015') {
      $scope.eventName = 'Beginning Sewing';
      $scope.eventInfo = 'sewing';
    } else {
      $scope.eventName = '';
    }
  };

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  $scope.openRegistrationDialog = function() {
    console.log('OPENING');
      ngDialog.open({
        template: '/templates/registerPopup.html',
        className: 'ngdialog-theme-plain',
        scope: $scope
      });
  };

  $scope.registerForClass = function(user) {
    console.log('register', user);
  };

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

});
