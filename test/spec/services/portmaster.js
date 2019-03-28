'use strict';

describe('Service: portMaster', function () {

  // load the service's module
  beforeEach(module('pixelRockStudiosApp'));

  // instantiate service
  var portMaster;
  beforeEach(inject(function (_portMaster_) {
    portMaster = _portMaster_;
  }));

  it('should do something', function () {
    expect(!!portMaster).toBe(true);
  });

});
