const chai = require('chai');
const assert = chai.assert;


  suite('Basic Assertions', function () {
    // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'this is an optional error description - e.g. null is null');
      assert.isNotNull(1, '1 is not null');
    });
    
  // -----------------------------------------------------------------------------
});
