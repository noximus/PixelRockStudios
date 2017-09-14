'use strict';

describe('Service: skillList', function () {

  // load the service's module
  beforeEach(module('pixelRockStudiosApp'));

  // instantiate service
  var skillList;
  beforeEach(inject(function (_skillList_) {
    skillList = _skillList_;
  }));

  it('should do something', function () {
    expect(!!skillList).toBe(true);
  });

});
