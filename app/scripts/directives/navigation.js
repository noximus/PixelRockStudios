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
        	console.log("element find attr",element.find('li#'+item).offset().left);
        }
        
          // 1 move nav elements first 
          // 2 convert to OOP after
      }
    };
  });
