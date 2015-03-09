'use strict';

/**
 * @ngdoc service
 * @name pixelRockStudiosApp.portMaster
 * @description
 * # portMaster
 * Factory in the pixelRockStudiosApp.
 */
angular.module('pixelRockStudiosApp')
  .factory('portMaster', function () {
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
