angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "./views/about.html"
            })
            .state('adventurers', {
                url: '/',
                parent: 'home',
                templateUrl: './views/about-adventurers.html'
            })
            .state('contact', {
                urel: '/contact',
                parent: 'home',
                templateUrl: './views/contact.html'
            })
            .state('packages', {
                url: '/packages/:country',
                templateUrl: './views/packages.html',
                controller: 'packageCtrl'
            })
            .state('booked', {
                url: '/booked/:id',
                templateUrl: './views/booked.html',
                controller: 'bookedCtrl'
            })
            .state('locations', {
                url: '/locations',
                templateUrl: './views/locations.html',
                controller:'locationCtrl'
            })
            
        $urlRouterProvider
            .otherwise('/');
    });