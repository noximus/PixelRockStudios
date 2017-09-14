'use strict';

describe('Controller: BioCtrl', function () {

  // load the controller's module
  beforeEach(module('pixelRockStudiosApp'));

  var BioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BioCtrl = $controller('BioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
