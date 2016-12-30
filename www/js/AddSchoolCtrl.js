meducap.controller('AddSchoolCtrl', function($scope,$cordovaGeolocation,$state, auth){
  $scope.school = {};
  $scope.school.uploadedBy = auth.getUser().username;
  //$scope.school.drinkingWater = true;


  $scope.school.drinkingWater = false;
  $scope.school.waterFilter = false;
  $scope.school.toiletFacility = false;
  $scope.school.runningWaterToilet = false;
  $scope.school.separateGirlToilet = false;
  $scope.school.runningWaterGirlToilet = false;
  $scope.school.functionalMotorPump = false;
  $scope.school.continuousPowerSupply = false;
  $scope.school.healthCheckupThisYear = false;
  $scope.school.medicalCaseLastYear = false;
  $scope.school.functionalPowerPointProjector = false;
  $scope.school.canStaffUseProjector = false;
  $scope.school.functionalComputer = false;

  console.log(auth.getSchools());

  $scope.addSchool = function(school){
    school.timestamp = new Date();
    school.district = 'visakhapatnam';
    auth.setArrSchool(school);
    $state.go('home.dash');
  };

  /*location*/
  $scope.refreshLocation = function () {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)

      .then(function (position) {
        console.log('getting loca');
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat + '   ' + long);
        $scope.school.lat = lat;
        $scope.school.long = long;
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
  //    alert('Please turn on your location, closing app');
  //
  //  },
  //
  //  function(position) {
  //    var lat  = position.coords.latitude;
  //    var long = position.coords.longitude;
  //    console.log(lat + '' + long);
  //    $scope.school.lat = lat;
  //    $scope.school.long = long;
  //  }
  //);
  $scope.$on("$ionicView.leave", function(event, data){
    // handle event
    //watch.clearWatch();
  });

});
