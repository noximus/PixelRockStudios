'use strict';
angular.module('pixelRockStudiosApp')
  .factory('navigationFact', ['$rootScope',function ($rootScope) {
    var navigation = ["home","portfolio","experimental","citymaps"];
    // $rootScope.navSelected = navigation;
    // Public API here
    // create model for navigation here that can be changed using ui-router
    return navigation;
  }]);
