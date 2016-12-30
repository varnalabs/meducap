meducap.controller('DashCtrl', function($scope,$cordovaGeolocation) {
  /*location*/

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      $scope.lat = lat;
      $scope.long = long;
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
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      $scope.lat = lat;
      $scope.long = long;
    });
  $scope.$on("$ionicView.leave", function(event, data){
    // handle event
    watch.clearWatch();
  });
});
