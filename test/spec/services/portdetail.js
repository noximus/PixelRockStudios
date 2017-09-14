'use strict';

describe('Service: portDetail', function () {

  // load the service's module
  beforeEach(module('pixelRockStudiosApp'));

  // instantiate service
  var portDetail;
  beforeEach(inject(function (_portDetail_) {
    portDetail = _portDetail_;
  }));

  it('should do something', function () {
    expect(!!portDetail).toBe(true);
  });

});
