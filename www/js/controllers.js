meducap.controller('LoginCtrl', function($scope, $http, $ionicHistory,$state,$timeout,$cordovaGeolocation, auth) {
  $scope.errorLogin = false;
  if(auth.isLoggedIn()){
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('home.dash');
  }
  $scope.user = {};
  $scope.signIn = function(){


    $http.get('js/data.json').then(function(resp){
     var users = resp.data[0];
      console.log(users[$scope.user.username]);
      if(users[$scope.user.username] && users[$scope.user.username]== $scope.user.password){
        auth.setUser($scope.user);
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go('home.dash');
        console.log('logged in');


      }else{
        console.log('invalid');
        $scope.errorLogin = true;
        $timeout(function(){
          $scope.errorLogin = false;
        },2000)
      }
    })
  };

/*location*/
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)

    .then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat + '   ' + long);
      $scope.lat = lat;
      $scope.long = long;
    }, function(err) {
      console.log(err);
     // alert('Please turn on your location.');
    });

  var watchOptions = {timeout : 3000, enableHighAccuracy: false};
  var watch = $cordovaGeolocation.watchPosition(watchOptions);

  watch.then(
    null,

    function(err) {
      console.log(err);
     // alert('Please turn on your location, closing app');

    },

    function(position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat + '' + long);
      $scope.lat = lat;
      $scope.long = long;
    }
  );

  watch.clearWatch();

});





meducap.controller('InfoCtrl', function($scope, auth) {
  $scope.schools = auth.getSchools();
  $scope.hospitals = auth.getHospital();

  if($scope.schools==null){
    $scope.schools = [];
  }
  if($scope.hospitals==null){
    $scope.hospitals = [];
  }
  $scope.deleteS = function(index){
    $scope.schools.splice(index);
    auth.resetArrSchool( $scope.schools);

  };
  $scope.deleteH = function(index){
    $scope.hospitals.splice(index);
    auth.resetArrHospital($scope.hospitals);

  }
});
meducap.controller('SettingsCtrl', function($scope, $state, auth) {
  $scope.logout = function(){
    auth.deleteAuth();
    $state.go('login');
  }
});

meducap.controller('EditSchoolCtrl', function($scope, $state,$stateParams,$cordovaGeolocation, auth) {
    $scope.school = {};
    var schools = auth.getSchools();

    var currentSchool = schools[$stateParams.id];
    $scope.school = currentSchool;
  $scope.addSchool = function(school){
    schools[$stateParams.id] = school;
    auth.resetArrSchool(schools);
    $state.go('home.info');
  };
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

});
meducap.controller('EditHospitalCtrl', function($scope, $state,$stateParams,$cordovaGeolocation, auth) {
  $scope.hospital = {};
  var hospitals = auth.getHospital();

  var currentHospital = hospitals[$stateParams.id];
  $scope.healthcare = currentHospital;
  console.log(currentHospital);

  $scope.addHospital = function(healthcare){
    hospitals[$stateParams.id] = healthcare;
    auth.resetArrHospital(hospitals);
    $state.go('home.info');
  };

  $scope.refreshLocation = function () {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)

      .then(function (position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;
        console.log(lat + '   ' + long);
        $scope.healthcare.lat = lat;
        $scope.healthcare.long = long;
      }, function(err) {
        console.log(err);
        console.log('Please turn on your location.');
      });
  };


});
