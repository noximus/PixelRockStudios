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
        controller: 'portCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      //$('.pixel-wrapper').css
      // alert('this is the spot');
  });
