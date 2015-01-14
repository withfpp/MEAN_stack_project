'use strict';

describe('Service: authIntercepter', function () {

  // load the service's module
  beforeEach(module('angAppApp'));

  // instantiate service
  var authIntercepter;
  beforeEach(inject(function (_authIntercepter_) {
    authIntercepter = _authIntercepter_;
  }));

  it('should do something', function () {
    expect(!!authIntercepter).toBe(true);
  });

});
