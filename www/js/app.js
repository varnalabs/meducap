// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var meducap = angular.module('meducap', ['ionic', 'ngCordova', 'firebase'])

  .run(function ($ionicPlatform, $rootScope, $ionicHistory, $state, $ionicPopup, auth) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });


    $ionicPlatform.registerBackButtonAction(function (event) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Close Form',
        template: 'Are you sure you want to go back?'
      });
      if ($ionicHistory.currentStateName() === 'home.add-school') {


        confirmPopup.then(function (res) {
          if (res) {
            $ionicHistory.goBack();
          } else {
            console.log('You are not sure');
          }
        });


      } else if ($ionicHistory.currentStateName() === 'home.add-hospital') {
        confirmPopup.then(function (res) {
          if (res) {
            $ionicHistory.goBack();
          } else {
            console.log('You are not sure');
          }
        });
      } else if ($ionicHistory.currentStateName() === 'home.edit-hospital') {
        confirmPopup.then(function (res) {
          if (res) {
            $ionicHistory.goBack();
          } else {
            console.log('You are not sure');
          }
        });
      } else if ($ionicHistory.currentStateName() === 'home.edit-school') {
        confirmPopup.then(function (res) {
          if (res) {
            $ionicHistory.goBack();
          } else {
            console.log('You are not sure');
          }
        });
      } else if ($ionicHistory.currentStateName() === 'home.route-view') {
            $ionicHistory.goBack();
      }
      else {
        event.preventDefault();
      }
    }, 100);


    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      var loginScreen;
      if (toState.name === "login") {
        loginScreen = toState.name
      }
      if (loginScreen) {
        return
      }
      var loggedIn = auth.isLoggedIn();
      if (!loggedIn) {
        event.preventDefault();
        $state.go('login');
      }
    })


  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.transition('none');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    var config = {
      apiKey: "AIzaSyBO12rC_8xRgk7Rggwq45FUCvOhySsnfbw",
      authDomain: "meducap-449a5.firebaseapp.com",
      databaseURL: "https://meducap-449a5.firebaseio.com",
      storageBucket: "meducap-449a5.appspot.com",
      messagingSenderId: "948310896184"
    };
    firebase.initializeApp(config);

    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        cache: false,
        controller: 'LoginCtrl'
      })
      // setup an abstract state for the tabs directive
      .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'templates/home.html'
      })

      // Each tab has its own nav history stack:

      .state('home.dash', {
        url: '/dash',
        views: {
          'home': {
            templateUrl: 'templates/dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('home.upload', {
        url: '/upload',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/upload.html',
            controller: 'UploadCtrl'
          }
        }
      })
      .state('home.route-list', {
        url: '/route-list',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/route-list.html',
            controller: 'RouteListCtrl'
          }
        }
      })
      .state('home.info', {
        url: '/info',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/info.html',
            controller: 'InfoCtrl'
          }
        }
      })
      .state('home.unicef', {
        url: '/unicef',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/unicef.html'

          }
        }
      })
      .state('home.settings', {
        url: '/settings',
        views: {
          'home': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsCtrl'

          }
        }
      })
      .state('home.school', {
        url: '/school',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/school.html'

          }
        }
      })
      .state('home.add-school', {
        url: '/add-school',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/school.html',
            controller: 'AddSchoolCtrl'

          }
        }
      })
      .state('home.edit-school', {
        url: '/edit-school/:id',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/school.html',
            controller: 'EditSchoolCtrl'

          }
        }
      })
      .state('home.edit-hospital', {
        url: '/edit-hospital/:id',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/hospital.html',
            controller: 'EditHospitalCtrl'
          }
        }
      })
      .state('home.add-hospital', {
        url: '/add-hospital',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/hospital.html',
            controller: 'AddHospitalCtrl'

          }
        }
      })
      .state('home.route-view', {
        url: '/route-view',
        cache: false,
        views: {
          'home': {
            templateUrl: 'templates/route-view.html',
            controller: 'RouteViewCtrl'
          }
        }
      })
      .state('home.hospital', {
        url: '/hospital',
        views: {
          'home': {
            templateUrl: 'templates/hospital.html'

          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });

meducap.directive("fileread", [function () {
  return {
    scope: {
      fileread: "="
    },
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        var maxSize = 1024;
        if (changeEvent.target.files[0].size / 1024 > maxSize) {
          return false;
        }
        console.log(changeEvent.target.files[0].size);

        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          var img = new Image;
          img.onload = resizeImage;
          img.src = loadEvent.target.result;
          function resizeImage() {
            console.log(this.width);
            console.log(this.width * 0.6);
            var newDataUri = imageToDataUri(this, this.width * 0.6, this.height * 0.6);
            scope.$apply(function () {
              scope.fileread = newDataUri;
            });
          }

        };
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
}]);
function imageToDataUri(img, width, height) {

  // create an off-screen canvas
  var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

  // set its dimension to target size
  canvas.width = width;
  canvas.height = height;

  // draw source image into the off-screen canvas:
  ctx.drawImage(img, 0, 0, width, height);

  // encode image to data-uri with base64 version of compressed image
  return canvas.toDataURL("image/jpeg", 0.6);
}

