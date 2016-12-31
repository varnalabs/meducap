meducap.controller('DashCtrl', function($scope,$cordovaGeolocation) {
  /*location*/

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var Latitude  = position.coords.latitude;
      var Longitude = position.coords.longitude;
      $scope.Latitude = Latitude;
      $scope.Longitude = Longitude;
    }, function(err) {
      // error
    });


  var watchOptions = {
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    function(position) {
      var Latitude  = position.coords.latitude;
      var Longitude = position.coords.longitude;
      $scope.Latitude = Latitude;
      $scope.Longitude = Longitude;
    });
  $scope.$on("$ionicView.leave", function(event, data){
    // handle event
    watch.clearWatch();
  });
});
