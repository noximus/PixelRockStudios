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
        	var navBG = $(".navBg");
        	var newOffset = (122*item)+15;//needs a negative offset to compensate for graphics
        	// console.log("New offset =", newOffset);
        	TweenMax.to(navBG, 1, {css:{'margin-left':newOffset+"px"}, ease:Bounce.easeOut});
        }
        
          // 1 move nav elements first 
          // 2 convert to OOP after
      }
    };
  });
