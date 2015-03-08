'use strict';

/**
 * @ngdoc overview
 * @name djcomAngularApp
 * @description
 * # djcomAngularApp
 *
 * Main module of the application.
 */
angular
  .module('djcomAngularApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'dataCtrl'
      })
      .when('/portfolio', {
          templateUrl: 'views/portfolio.html',
          controller: 'PortfolioCtrl'
      })
      .when('/projects', {
          templateUrl: 'views/projects.html',
          controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
