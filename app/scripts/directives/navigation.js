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
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the navigation directive');
      }
    };
  });
