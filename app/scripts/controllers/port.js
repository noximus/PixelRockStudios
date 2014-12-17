'use strict';

/**
 * @ngdoc function
 * @name pixelRockStudiosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pixelRockStudiosApp
 */
angular.module('pixelRockStudiosApp')
  .controller('PortCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var navBG = $(".navBg");
    var breadCrumb = $(".bread-crumbs");
    var buttons = $(".pixel-button img");
    TweenMax.to(navBG, 1, {css:{'margin-left':"137px"}, ease:Bounce.easeOut});
    TweenMax.to(breadCrumb, 1, {css:{'padding-top':"10px",'height':"30px",'display':'block','opacity':'1'}, ease:Bounce.easeOut});
    $(".pixel-button").hover(function(e){
    	TweenMax.to($(this).children('img'), 1, {css:{'margin-right':"30px"}, ease:Elastic.easeOut});
    }, function(e){
    	TweenMax.to($(this).children('img'), 1, {css:{'margin-right':"5px"}, ease:Bounce.easeOut});
    });

  });
