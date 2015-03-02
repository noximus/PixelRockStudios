'use strict';

/**
 * @ngdoc directive
 * @name pixelRockStudiosApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('pixelRockStudiosApp',$rootScope)
  .directive('navigation', function () {
    return {
      templateUrl: '../views/partials/navigation.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
        // element.text('this is the navigation directive');
        //$rootScope.nav.items = ['home','bio','portfolio','contact'];
        //console.log($rootScope.nav.items[0]);
        // console.log(scope, element, attrs);

              // add navigation controller to this level

              // 1 move nav elements first
              // 2 convert to OOP after


      }
    };
  });
