'use strict';
angular.module('pixelRockStudiosApp')
  .directive('navigation', ['navigationFact' ,function (navigationFact) {
    return {
      templateUrl: '../views/partials/navigation.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
      	var navBG = $(".navBg");
		// if(element.find('.active')){
		// 	console.log(scope.$id);
		// }
		console.log(element.children().find('.active').data());
		// scope.triggerHandler()
      	// var currentItem = 2;
      	// var prevOffset = (122*currentItem)+15;
      	 scope.navigationFact = navigationFact;
          // add navigation controller to this level - check
        // TweenMax.to(navBG, 1, {css:{'margin-left':prevOffset+"px"}, ease:Bounce.easeOut});
        scope.navClicked = function(item){
        	// proper MVC framework requires us to first add this to the model
        	
        	var newOffset = (122*item)+15;
        	// This animation should be in the "VIEW" and should be listening for the MODEL to change
        	TweenMax.to(navBG, 1, {css:{'margin-left':newOffset+"px"}, ease:Bounce.easeOut});
        }
        
          // 1 move nav elements first 
          // 2 convert to OOP after
      }
    };
  }]);
