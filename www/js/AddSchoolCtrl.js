meducap.controller('AddSchoolCtrl', function($scope,$cordovaGeolocation,$state, auth){
  $scope.school = {};
  $scope.school.uploadedBy = auth.getUser().username;
  //$scope.school.drinkingWater = true;
$scope.school.s3StartingTime = new Date();
$scope.school.s5DataCollectionDate = new Date();

$scope.school.s61StudentClubs = false;
$scope.school.s62PTAssociation = false;
$scope.school.s63DrinkingWater = false;
$scope.school.s64OverheadTankDW = false;
$scope.school.s65WaterFilter = false;
$scope.school.s66Toilet = false;
$scope.school.s67BoysToilet = false;
$scope.school.s68GirlsToilet = false;
$scope.school.s69ToiletLock = false;
$scope.school.s70ToiletWater = false;
$scope.school.s71MotorPump = false;
$scope.school.s72Washbasin = false;
$scope.school.s73OverheadTankTW = false;
$scope.school.s74SanitaryNapkins = false;
$scope.school.s75SanitaryNapkinMachines = false;
$scope.school.s76Projector = false;
$scope.school.s77Computer = false;
$scope.school.s78Electricity = false;
$scope.school.s79Playground = false;
$scope.school.s80ActivityHall = false;
$scope.school.s88IFARecord = false;
$scope.school.s89FirstAidBox = false;
$scope.school.s90StudentsFirstAid = false;
$scope.school.s91TeachersFirstAid = false;
$scope.school.s93MedicalCases = false;

  console.log(auth.getSchools());

  $scope.addSchool = function(school){
    school.s4EndingTime = new Date();
    school.s16District = 'Visakhapatnam';
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
