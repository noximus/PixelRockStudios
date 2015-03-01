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
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ncy-angular-breadcrumb'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Use angular-breadcrumbs for this *requires ui-router replacing ngRoute
  // https://github.com/ncuillery/angular-breadcrumb
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/main.html"
    })
    .state('portfolio', {
      url: "/portfolio",
      templateUrl: "views/portfolio.html",
        controller: 'PortCtrl',
        ncyBreadcrumb: {
          label: 'Portfolio'
        }
    })
    //   .state('portfolio.list', {
    //     url: "/list",
    //     templateUrl: "views/portfolio.details.html",
    //     controller: function($scope) {
    //       $scope.things = ["A", "Set", "Of", "Things"];
    //     }
    // })
    .state('bio', {
      url: "/bio",
      templateUrl: "views/bio.html",
        controller: 'BioCtrl',
        ncyBreadcrumb: {
          label: 'Bio'
        }
    })
    .state('experimental', {
      url: "/experimental",
      templateUrl: "views/experimental.html",
        controller: 'ExperimentalCtrl',
        ncyBreadcrumb: {
          label: 'Experimental'
        }
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "views/contact.html",
        controller: 'ContactCtrl',
        ncyBreadcrumb: {
          label: ''
        }
    });
  })
  .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      templateUrl: 'views/partials/breadcrumbs.html'
    });
});