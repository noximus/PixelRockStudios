'use strict';

/**
 * @ngdoc service
 * @name pixelRockStudiosApp.navigation
 * @description
 * # navigation
 * Factory in the pixelRockStudiosApp.
 */
angular.module('pixelRockStudiosApp')
  .factory('navigation', function () {
    // Service logic
    // ...

    var navigation = ["home", "bio", "portfolio"];;

    // Public API here
    return {
      gotoNav: function () {
        return navigation;
      }
    };
  });
