meducap.directive('tabs', function () {
  return{
    restrict: 'E',
    templateUrl: 'templates/tabs.html',
    controller: function($scope, $state){



      if( $state.is('home') === true || $state.is('app.listings') === true || $state.is('app.listingsAll') === true ) {
        $scope.activeTab = 'Home';
      }
      else if ( $state.is('home.upload') === true ) {
        $scope.activeTab = 'Upload';
      }
      else if ( $state.is('home.dash') === true ) {
        $scope.activeTab = 'Dash';
      }
      else if ( $state.is('home.settings') === true ) {
        $scope.activeTab = 'Settings';
      }
      else if ( $state.is('home.info') === true) {
        $scope.activeTab = 'Info';
      }
      else if ( $state.is('home.unicef') === true) {
        $scope.activeTab = 'Unicef';
      }
    }
  }
});
