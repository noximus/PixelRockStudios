'use strict';

/**
 * @ngdoc service
 * @name pixelRockStudiosApp.portDetail
 * @description
 * # portDetail
 * Factory in the pixelRockStudiosApp.
 */
angular.module('pixelRockStudiosApp')
  .factory('portDetail', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
