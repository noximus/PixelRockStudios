'use strict';

describe('Controller: CitymapsCtrl', function () {

  // load the controller's module
  beforeEach(module('pixelRockStudiosApp'));

  var CitymapsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CitymapsCtrl = $controller('CitymapsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
