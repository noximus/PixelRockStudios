'use strict';

describe('Service: apiDetail', function () {

  // load the service's module
  beforeEach(module('pixelRockStudiosApp'));

  // instantiate service
  var apiDetail;
  beforeEach(inject(function (_apiDetail_) {
    apiDetail = _apiDetail_;
  }));

  it('should do something', function () {
    expect(!!apiDetail).toBe(true);
  });

});
