meducap.controller('AddSchoolCtrl', function($scope,$cordovaGeolocation,$state, auth){
  $scope.school = {};
  $scope.school.uploadedBy = auth.getUser().username;
  //$scope.school.drinkingWater = true;
$scope.school.s3StartingTime = new Date();
$scope.school.s5DataCollectionDate = new Date();

$scope.school.StudentClubs = false;
$scope.school.PTAssociation = false;
$scope.school.DrinkingWater = false;
$scope.school.OverheadTankDW = false;
$scope.school.WaterFilter = false;
$scope.school.Toilet = false;
$scope.school.GirlsToilet = false;
$scope.school.ToiletLock = false;
$scope.school.ToiletRW = false;
$scope.school.MotorPump = false;
$scope.school.TapWater = false;
$scope.school.OverheadTankTW = false;
$scope.school.PowerSupply = false;
$scope.school.SanitaryNapkins = false;
$scope.school.Projector = false;
$scope.school.Computer = false;
$scope.school.Playground = false;
$scope.school.ActivityHall = false;
$scope.school.FirstAidBox = false;
$scope.school.StudentsFirstAid = false;
$scope.school.TeachersFirstAid = false;
$scope.school.HealthCheckup2016 = false;
$scope.school.MedicalCases2016 = false;
$scope.school.AFHCorYUVA = false;

  console.log(auth.getSchools());

  $scope.addSchool = function(school){
    school.s4EndingTime = new Date();
    school.District = 'Visakhapatnam';
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
        var Latitude  = position.coords.latitude;
        var Longitude = position.coords.longitude;
        console.log(Latitude + '   ' + Longitude);
        $scope.school.Latitude = Latitude;
        $scope.school.Longitude = Longitude;
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
