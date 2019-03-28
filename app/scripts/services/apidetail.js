'use strict';

/**
 * @ngdoc service
 * @name pixelRockStudiosApp.apiDetail
 * @description
 * # apiDetail
 * Factory in the pixelRockStudiosApp.
 */
angular.module('pixelRockStudiosApp')
  .factory('apiDetail', function ($http) {
    // var meaningOfLife = $http.get('scripts/services/objects/bmw-m-40th.json');
    var apiDetail = {};

    // Public API here
    return {
      getJsonFile: function (fileName) {

        var url = 'scripts/services/objects/api/'+fileName;
        var portDetail = $http({
            url: url,
            method: 'GET'
        }).success(function(data) {
            return data;
        });
        return apiDetail;
        console.log(data)
      }
    };
  });