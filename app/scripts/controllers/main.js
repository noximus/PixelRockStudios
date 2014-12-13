'use strict';

/**
 * @ngdoc function
 * @name pixelRockStudiosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pixelRockStudiosApp
 */
angular.module('pixelRockStudiosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log("main page function go here");
    // var navBG = $(".navBg");
    // TweenMax(navBG, 2, {css:{left:"200px"}, ease:Linear.easeNone});
  });
