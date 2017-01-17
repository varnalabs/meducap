meducap.controller('AddSchoolCtrl', function($scope,$cordovaGeolocation,$state, auth){
  $scope.school = {};
  $scope.school.uploadedBy = auth.getUser().username;
  //$scope.school.drinkingWater = true;
$scope.school.s003StartingTime = new Date();
$scope.school.s005DataCollectionDate = new Date();

/*$scope.school.s066StudentClubs = false;
$scope.school.s067PTAssociation = false;
$scope.school.s068DrinkingWater = false;
$scope.school.s069OverheadTankDW = false;
$scope.school.s070WaterFilter = false;
$scope.school.s071Toilet = false;
$scope.school.s072BoysToilet = false;
$scope.school.s073GirlsToilet = false;
$scope.school.s074ToiletLock = false;
$scope.school.s075ToiletWater = false;
$scope.school.s076MotorPump = false;
$scope.school.s077Washbasin = false;
$scope.school.s078OverheadTankTW = false;
$scope.school.s079SanitaryNapkins = false;
$scope.school.s080SanitaryNapkinMachines = false;
$scope.school.s081Projector = false;
$scope.school.s082Computer = false;
$scope.school.s083Electricity = false;
$scope.school.s084Playground = false;
$scope.school.s085ActivityHall = false;
$scope.school.s093IFARecord = false;
$scope.school.s094FirstAidBox = false;
$scope.school.s095StudentsFirstAid = false;
$scope.school.s096TeachersFirstAid = false;
$scope.school.s097RBSKCheckup = false;
$scope.school.s098MedicalCases = false;
*/
  console.log(auth.getSchools());

  $scope.addSchool = function(school){
    school.s004EndingTime = new Date();
    school.s015District = 'Visakhapatnam';
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
