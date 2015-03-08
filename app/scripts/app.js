'use strict';
/*
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

  .config(function($stateProvider, $urlRouterProvider,$breadcrumbProvider) {
    .when('/citymaps', {
      templateUrl: 'views/citymaps.html',
      controller: 'CitymapsCtrl'
    })
    $urlRouterProvider.otherwise("/home");
    $breadcrumbProvider.setOptions({
      templateUrl: 'views/partials/breadcrumbs.html'
    });
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        onEnter: function(){
          console.log("runAnimation");
        },
        onExit: function(){
          console.log("ExitAnimation");
        }
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
  });
  // .controller('pixelRockStudiosApp', ['$state',
  //   function($state) {
  //     console.log("init");
  //       $state.go('home');
  //   }
  // ]);