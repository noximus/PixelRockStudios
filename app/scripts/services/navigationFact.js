'use strict';
angular.module('pixelRockStudiosApp')
  .factory('navigationFact', ['$rootScope',function ($rootScope) {
    var navigation = ["home","bio","portfolio","experimental","contact","citymaps"];
    // $rootScope.navSelected = navigation;
    // Public API here
    // create model for navigation here that can be changed using ui-router
    return navigation;
  }]);
