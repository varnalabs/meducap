meducap.controller('UploadCtrl', function($scope,$firebaseObject, $firebaseArray, auth) {

  var refS = firebase.database().ref('schools');
  var refH = firebase.database().ref('healthcare');
  var schoolsDb = $firebaseArray(refS);
  var hospitalsDb = $firebaseArray(refH);


  var schools = auth.getSchools();
 var hospitals = auth.getHospital();
  $scope.lastSync = auth.getTime();
  if(schools && schools != null && schools.length>0) {
    var lenS = schools.length;
  }
  if(hospitals && hospitals != null && hospitals.length>0) {
    var lenH = hospitals.length;
  }

 // var lenH = hospitals.length;

 $scope.uploadData = function(){
   console.log('uploading');
   //$scope.lastSync = new Date();
   //auth.setTime($scope.lastSync);
  if(schools && schools != null && schools.length>0){
    schools.forEach(function(school, i){
      console.log('inside schhools');
      schoolsDb.$add(school).then(function(ref){
        console.log(ref.key + ' has been added');
        if(i == lenS-1) {
          schools = [];
          auth.deleteSchools();
          $scope.lastSync = new Date();
          auth.setTime($scope.lastSync);
        }

      })
    });
  }

  if(hospitals && hospitals != null && hospitals.length>0){
    hospitals.forEach(function (hospital, j) {
      hospitalsDb.$add(hospital).then(function(ref){
        console.log(ref.key + ' has been added');
        if(j == lenH-1) {
          hospitals = [];
          auth.deleteHospitals();
          $scope.lastSync = new Date();
          auth.setTime($scope.lastSync);
        }

      })
    })
  }

 }

});
