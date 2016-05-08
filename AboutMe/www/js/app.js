// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.project', {
        url: '/project',
        views: {
            'menuContent': {
                templateUrl: 'templates/project.html',
                controller: 'ListsCtrl'
            }
        }
    })

	
	
.state('app.eagle', {
        url: '/eagle',
        views: {
            'menuContent': {
                templateUrl: 'templates/eagle.html',
                controller: 'ListsCtrl'
            }
        }
    })


.state('app.smart', {
        url: '/smart',
        views: {
            'menuContent': {
                templateUrl: 'templates/smart.html',
                controller: 'ListsCtrl'
            }
        }
    })

.state('app.online', {
        url: '/online',
        views: {
            'menuContent': {
                templateUrl: 'templates/online.html',
                controller: 'ListsCtrl'
            }
        }
    })

.state('app.money', {
        url: '/money',
        views: {
            'menuContent': {
                templateUrl: 'templates/money.html',
                controller: 'ListsCtrl'
            }
        }
    })




    .state('app.more', {
        url: '/more',
        views: {
            'menuContent': {
                templateUrl: 'templates/more.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.magazine', {
        url: '/magazine',
        views: {
            'menuContent': {
                templateUrl: 'templates/magazine.html',
                controller: 'InkCtrl'
            }
        }
    })

     .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            }
            
        }
    })

    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.achieve', {
        url: '/achieve',
        views: {
            'menuContent': {
                templateUrl: 'templates/achieve.html',
                controller: 'MotionCtrl'
            }
        }
    })
    
    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.timeline', {
        url: '/timeline',
        views: {
            'menuContent': {
                templateUrl: 'templates/timeline.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/about');
});
