'use strict';
angular.module('pixelRockStudiosApp')
  .factory('portDetail', function ($http) {
    // var meaningOfLife = $http.get('scripts/services/objects/bmw-m-40th.json');
    var portDetail = {};

    // Public API here
    return {
      getJsonFile: function (fileName) {

        var url = 'scripts/services/objects/port/'+fileName;
        var portDetail = $http({
            url: url,
            method: 'GET'
        }).success(function(data) {
            return data;
        });
        return portDetail;
        console.log(data)
      }
    };
  });
