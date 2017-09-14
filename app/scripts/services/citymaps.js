'use strict';
angular.module('pixelRockStudiosApp')
  .factory('cityMaps', function ($resource) {
    return $resource('http://coresearch.citymaps.com/search/:search_q?lat=:lat&lon=:lng&radius=20&zoom=15&businesses=1');
  });