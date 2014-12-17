'use strict';

/**
 * @ngdoc function
 * @name pixelRockStudiosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pixelRockStudiosApp
 */
angular.module('pixelRockStudiosApp')
  .controller('ExperimentalCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var navBG = $(".navBg");
    var breadCrumb = $(".bread-crumbs");
    TweenMax.to(navBG, 1, {css:{'margin-left':"259px"}, ease:Bounce.easeOut});
    TweenMax.to(breadCrumb, 1, {css:{'padding-top':"10px",'height':"30px",'display':'block','opacity':'1'}, ease:Bounce.easeOut});
    for (var i = 0; i < 72; i++) {
		var rotateVar = i*5;
		$("#wrapper").append('<div class="box red" id="box'+i+'"></div>');
		TweenMax.set($("#wrapper"),{css:{transformPerspective:900,rotationX:"100px"}});
		
		
		TweenMax.set($('#box'+i),{css:{rotationY:i*5, transformOrigin:"50% 50% 200"}});
		// TweenMax.fromTo($('#box'+i),10, {css:{rotationY:rotateVar, transformOrigin:"bottom bottom -400",transformPerspective:200}},{css:{rotationY:rotateVar+360, transformOrigin:"bottom bottom -400",transformPerspective:200},repeat:-1,ease:Linear.easeNone});		
		// TweenMax.to($('#box'+i),10, {css:{rotationX:-360, transformOrigin:"bottom bottom -400"},repeat:-1,ease:Linear.easeNone});
	};
	for (var i = 0; i < 36; i++) {
		var rotateVar = i*5;
		$("#wrapper2").append('<div class="box blue" id="boxa'+i+'"></div>');
		TweenMax.set($("#wrapper2"),{css:{transformPerspective:0,transform:"translateZ(100px)"}});
		
		
		TweenMax.set($('#boxa'+i),{css:{rotationY:i*10, transformOrigin:"50% 50% 100"}});
		//TweenMax.fromTo($('#box'+i),10, {css:{rotationY:rotateVar, transformOrigin:"bottom bottom -400",transformPerspective:200}},{css:{rotationY:rotateVar+360, transformOrigin:"bottom bottom -400",transformPerspective:200},repeat:-1,ease:Linear.easeNone});		
		//TweenMax.to($('#box'+i),10, {css:{rotationX:-360, transformOrigin:"bottom bottom -400"},repeat:-1,ease:Linear.easeNone});
	};
	TweenMax.to($("#wrapper"),10,{css:{rotationY:360,transformOrigin:"0 50% 200px",transformPerspective:900,},repeat:-1,ease:Linear.easeNone});
	TweenMax.to($("#wrapper2"),2,{css:{rotationY:-360,transformOrigin:"0 50% 100px",transformPerspective:0},repeat:-1,ease:Linear.easeNone});

  });
