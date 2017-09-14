'use strict';

describe('Service: apiMaster', function () {

  // load the service's module
  beforeEach(module('pixelRockStudiosApp'));

  // instantiate service
  var apiMaster;
  beforeEach(inject(function (_apiMaster_) {
    apiMaster = _apiMaster_;
  }));

  it('should do something', function () {
    expect(!!apiMaster).toBe(true);
  });

});
