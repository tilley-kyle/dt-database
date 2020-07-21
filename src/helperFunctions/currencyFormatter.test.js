import currencyFormatter from '../helperFunctions/currencyFormatter';

const { expect } = require('chai');

// import currencyFormatter from '../helperFunctions/currencyFormatter';

describe('currencyFormatter Tests', () => {
  it('should handle proper input, 01-01-2001', () => {
    expect(currencyFormatter('01-01-2001')).to.equal('01/01/2001');
  })
});