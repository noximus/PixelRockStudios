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
    var navBG = $(".navBg");
    var breadCrumb = $(".bread-crumbs");
    TweenMax.to(navBG, 1, {css:{'margin-left':"15px"}, ease:Bounce.easeOut});
    //breadCrumb.fadeOut();
    TweenMax.to(breadCrumb, .5, {css:{'padding-top':"0px"}, ease:Linear.easeOut});
    TweenMax.to(breadCrumb, 1, {css:{'height':"0px",'display':'none','opacity':'0'}, ease:Linear.easeOut});

    $(".navbut").click(function(){
    	$(".navbut").removeClass("active");
    	$(this).addClass("active");
    });
  });
