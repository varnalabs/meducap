meducap.controller('AddHospitalCtrl', function($scope,$cordovaGeolocation,$state, auth){
  console.log(auth.getHospital());
  $scope.healthcare = {};
  $scope.healthcare.uploadedBy = auth.getUser().username;

  $scope.addHospital = function(healthcare){
    healthcare.Timestamp = new Date();
    healthcare.h009District = 'Visakhapatnam';
    auth.setArrHospital(healthcare);
    $state.go('home.dash');
  };


  $scope.refreshLocation = function () {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)

      .then(function (position) {
        var Latitude  = position.coords.latitude;
        var Longitude = position.coords.longitude;
        console.log(Latitude + '   ' + Longitude);
        $scope.healthcare.Latitude = Latitude;
        $scope.healthcare.Longitude = Longitude;
      }, function(err) {
        console.log(err);
        console.log('Please turn on your location.');
      });
  };
  $scope.refreshLocation();

  //var watchOptions = {timeout : 3000, enableHighAccuracy: false};
  //var watch = $cordovaGeolocation.watchPosition(watchOptions);
  //
  //watch.then(
  //  null,
  //
  //  function(err) {
  //    console.log(err);
  //    console.log('Please turn on your location!');
  //
  //  },
  //
  //  function(position) {
  //    var lat  = position.coords.latitude;
  //    var long = position.coords.longitude;
  //    console.log(lat + '' + long);
  //    $scope.healthcare.lat = lat;
  //    $scope.healthcare.long = long;
  //  }
  //);
  $scope.$on("$ionicView.leave", function(event, data){
    // handle event
    //watch.clearWatch();
  });
});
