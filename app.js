'use strict';

// Declare app level module which depends on views, and components
var totalHealthTrackApp = angular.module('totalHealthTrack', [
    'ui.router',
    'ngAnimate',
    'ngMaterial',
    'angularCSS',
    // 'ui.select',
    'myApp.version'
]);

totalHealthTrackApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$mdDateLocaleProvider', function($locationProvider, $stateProvider, $urlRouterProvider, $mdDateLocaleProvider) {
    $locationProvider.hashPrefix('!');

    $stateProvider
        .state('home', {
            templateUrl: 'app/views/home.html',
            url: '/'
            // controller: 'HomeController'
        });

    $urlRouterProvider.otherwise('something');

    // $mdDateLocaleProvider.formatDate = function(date) {
    //     return moment(date).format('DD-MM-YYYY');
    // };
}]);
