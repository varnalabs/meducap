meducap.controller('RouteListCtrl',function($scope, $firebaseArray) {
  var refS = firebase.database().ref('schools');
  var refH = firebase.database().ref('healthcare');
  $scope.schoolsDb = $firebaseArray(refS);
  $scope.hospitalsDb = $firebaseArray(refH);

  $scope.schoolsDb.$loaded()
    .then(function() {
      console.log($scope.schoolsDb);
    })
    .catch(function(err) {
      console.error(err);
    });

  $scope.schoolsDb.$loaded()
    .then(function() {
      console.log($scope.schoolsDb);
    })
    .catch(function(err) {
      console.error(err);
    });


});
