'use strict';

/**
 * @ngdoc overview
 * @name pixelRockStudiosApp
 * @description
 * # pixelRockStudiosApp
 *
 * Main module of the application.
 navigation controller
 */
angular
  .module('pixelRockStudiosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ncy-angular-breadcrumb'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortCtrl',
        ncyBreadcrumb: {
          label: 'Portfolio'
        }
      })
      .when('/experimental', {
        templateUrl: 'views/experimental.html',
        controller: 'ExperimentalCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'BioCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
