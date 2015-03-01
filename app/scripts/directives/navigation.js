'use strict';

/**
 * @ngdoc directive
 * @name pixelRockStudiosApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('pixelRockStudiosApp')
  .directive('navigation', function () {
    return {
      templateUrl: '../views/navigation.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
        // element.text('this is the navigation directive');
        // console.log(scope, element, attrs);
        
              // add navigation controller to this level

      }
    };
  });
