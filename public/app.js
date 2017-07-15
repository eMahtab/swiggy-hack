var app=angular.module('swiggyHack',['ui.router','app.constants','app.service','app.controllers','ngRateIt']);


app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'templates/main.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller:'LoginController'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
            controller:'SignupController'
        })
        .state('list', {
            url: '/list',
            templateUrl: 'templates/list.html',
            controller:'ListController',
            authenticate: true
        })
        .state('edit', {
            url: '/edit/:id',
            templateUrl: 'templates/edit-bookmark.html',
            controller:'EditController',
            authenticate: true
        });
});

