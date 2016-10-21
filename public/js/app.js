// public/js/app.js
var app = angular.module('sampleApp', ['ngRoute']);

// public/js/appRoutes.js
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // nerds page that will use the NerdController
    .when('/nerds', {
        templateUrl: 'views/nerd.html',
        controller: 'NerdController'
    });

$locationProvider.html5Mode(true);

}]);