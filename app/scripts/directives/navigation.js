'use strict';

/**
 * @ngdoc directive
 * @name pixelRockStudiosApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('pixelRockStudiosApp')
  .directive('navigation', function (navigationFact) {
    return {
      templateUrl: '../views/partials/navigation.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
      	scope.navigationFact = navigationFact;
      	// console.log(scope.navigationFact);
      	// scope.activeIndex=0;
      	element.children().children().click(function(){
      		
	    	// $(".navbut").removeClass("active");
	    	// $(this).children().addClass("active");
	    });
        // element.text('this is the navigation directive');
        //$rootScope.nav.items = ['home','bio','portfolio','contact'];
        //console.log($rootScope.nav.items[0]);
        // console.log(scope, element, attrs);

              // add navigation controller to this level

              // 1 move nav elements first
              // 2 convert to OOP after


      }
    };
  });
