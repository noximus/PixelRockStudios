'use strict';
angular.module('pixelRockStudiosApp')
  .factory('navigationFact', function () {
    var navigation = ["home","bio","portfolio","experimental",'contact'];
    // Public API here
    return navigation;
  });
