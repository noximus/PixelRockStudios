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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortCtrl'
      })
      .when('/experimental', {
        templateUrl: 'views/experimental.html',
        controller: 'ExperimentalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      // add navigation controller to this level
      //$('.pixel-wrapper').css
      // alert('this is the spot');
  });
