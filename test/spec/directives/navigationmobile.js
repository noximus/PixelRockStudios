'use strict';

describe('Directive: navigationMobile', function () {

  // load the directive's module
  beforeEach(module('pixelRockStudiosApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navigation-mobile></navigation-mobile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navigationMobile directive');
  }));
});
