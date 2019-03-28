'use strict';

describe('Service: citymaps', function () {

  // load the service's module
  beforeEach(module('pixelRockStudiosApp'));

  // instantiate service
  var citymaps;
  beforeEach(inject(function (_citymaps_) {
    citymaps = _citymaps_;
  }));

  it('should do something', function () {
    expect(!!citymaps).toBe(true);
  });

});
