'use strict';
angular.module('pixelRockStudiosApp')
  .controller('ExperimentalCtrl', function ($scope) {
    // Three JS code here... needs to be put into a class
  for (var i = 0; i < 72; i++) {
		var rotateVar = i*5;
		$("#wrapper").append('<div class="box red" id="box'+i+'"></div>');
		TweenMax.set($("#wrapper"),{css:{transformPerspective:900,rotationX:"200px"}});
		TweenMax.set($('#box'+i),{css:{rotationY:i*6, transformOrigin:"50% 50% 200"}});
	};
	for (var i = 0; i < 36; i++) {
		var rotateVar = i*5;
		$("#wrapper2").append('<div class="box blue" id="boxa'+i+'"></div>');
		TweenMax.set($("#wrapper2"),{css:{transformPerspective:0,transform:"translateZ(100px)"}});
		
		TweenMax.set($('#boxa'+i),{css:{rotationY:i*10, transformOrigin:"50% 50% 100"}});
	};

	
	TweenMax.to($("#wrapper"),25,{css:{rotationY:360,transformOrigin:"0 50% 200px",transformPerspective:900,},repeat:-1,ease:Linear.easeNone});
	TweenMax.to($("#wrapper2"),10,{css:{rotationY:360,transformOrigin:"0 50% 100px",transformPerspective:0},repeat:-1,ease:Linear.easeNone});
	// Three JS ends here
});
