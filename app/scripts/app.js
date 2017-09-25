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
    'ncy-angular-breadcrumb',
    'uiGmapgoogle-maps'
  ])
  .config(function($stateProvider, $urlRouterProvider,$breadcrumbProvider,uiGmapGoogleMapApiProvider) {
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
        // [ofn] then tab
      })
      .state('portfolio', {
        url: "/portfolio",
        templateUrl: "views/portfolio.html",
        controller: 'PortCtrl',
        ncyBreadcrumb: {
          label: 'Portfolio / {{portDetail.name}}'
        }
      })
      // .state('portfolio.list', {
      //     url: "/list",
      //     templateUrl: "views/portfolio.details.html",
      //     controller: function($scope) {
      //       $scope.things = ["A", "Set", "Of", "Things"];
      //     }
      // })
      .state('skills', {
        url: "/skills",
        templateUrl: "views/skills.html",
        controller: 'SkillsCtrl',
        ncyBreadcrumb: {
          label: 'Skills'
        }
      })
      .state('profile', {
        url: "/profile",
        templateUrl: "views/profile.html",
        controller: 'ProfileCtrl',
        ncyBreadcrumb: {
          label: 'Profile'
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
      .state('api', {
        url: "/api",
        templateUrl: "views/api.html",
        controller: 'ApiCtrl',
        ncyBreadcrumb: {
          label: 'API'
        }
      })
      .state('contact', {
        url: "/contact",
        templateUrl: "views/contact.html",
        controller: 'ContactCtrl',
        ncyBreadcrumb: {
          label: ''
        }
      })
      .state('citymaps', {
        url: "/citymaps",
        templateUrl: "views/citymaps.html",
        controller: 'CitymapsCtrl',
        ncyBreadcrumb: {
          label: 'City Maps'
        }
      });
      uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'places,geometry,visualization'
      });
  });
    