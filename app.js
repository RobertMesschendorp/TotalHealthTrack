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
            url: '/',
            controller: 'MainController'
        })

        .state('foodShuffle', {
            templateUrl: 'app/views/food.html',
            url: '/food'
        })

        .state('Categories', {
            templateUrl: 'app/views/food.html',
            url: '/categories'
        })

        .state('Personal Financial Management', {
            templateUrl: 'app/views/finance.html',
            url: '/personalfinancialmanagement'
        })

        .state('Stocks and shares', {
            templateUrl: 'app/views/finance.html',
            url: '/stocksandshares'
        })

        .state('Running', {
            templateUrl: 'app/views/sports.html',
            url: '/running'
        })

        .state('Fitness', {
            templateUrl: 'app/views/sports.html',
            url: '/fitness'
        })

        .state('moodweb', {
            templateUrl: 'app/views/mental.html',
            url: '/moodweb'
        });

    $urlRouterProvider.otherwise('something');

    // $mdDateLocaleProvider.formatDate = function(date) {
    //     return moment(date).format('DD-MM-YYYY');
    // };
}]);
