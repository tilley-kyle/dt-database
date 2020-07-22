const { expect } = require('chai');
const currencyFormatter = require('../controllers/currencyFormatter');

describe('currencyFormatter Tests', () => {
  it('Should handle 0', () => {
    expect(currencyFormatter('0')).to.equal('0.00');
  });
  it('Should handle an integer', () => {
    expect(currencyFormatter('5000')).to.equal('5000.00');
  });
  it('Should reject a non-number input', () => {
    expect(currencyFormatter('abc')).to.be.false;
  });
  it('Should handle negative numbers', () => {
    expect(currencyFormatter('-50')).to.equal('-50.00');
  });
  it('Should handle numbers that are already integers', () => {
    expect(currencyFormatter('100.00')).to.equal('100.00');
  });
  it('Should return false when given no input', () => {
    expect(currencyFormatter('')).to.be.false;
  });
});