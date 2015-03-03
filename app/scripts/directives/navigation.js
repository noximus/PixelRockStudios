'use strict';
angular.module('pixelRockStudiosApp')
  .directive('navigation', function (navigationFact) {
    return {
      templateUrl: '../views/partials/navigation.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
      	scope.navigationFact = navigationFact;
          // add navigation controller to this level - check
        scope.navClicked = function(item){

        	// proper MVC framework requires us to first add this to the model
        	var navBG = $(".navBg");
        	var newOffset = (122*item)+15;
        	// This animation should be in the "VIEW" and should be listening for the MODEL to change
        	TweenMax.to(navBG, 1, {css:{'margin-left':newOffset+"px"}, ease:Bounce.easeOut});
        }
        
          // 1 move nav elements first 
          // 2 convert to OOP after
      }
    };
  });
