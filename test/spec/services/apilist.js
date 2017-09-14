'use strict';

describe('Service: apiList', function () {

  // load the service's module
  beforeEach(module('pixelRockStudiosApp'));

  // instantiate service
  var apiList;
  beforeEach(inject(function (_apiList_) {
    apiList = _apiList_;
  }));

  it('should do something', function () {
    expect(!!apiList).toBe(true);
  });

});
