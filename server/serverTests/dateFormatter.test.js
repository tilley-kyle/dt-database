const { expect } = require('chai');
const dateFormatter = require('../controllers/dateFormatter');

describe('dateFormatter Tests', () => {
  it('Should handle a proper input', () => {
    expect(dateFormatter('2020-07-22')).to.equal('07/22/2020');
  });
  it('Should return false with no input', () => {
    expect(dateFormatter('')).to.be.false;
  });
  it('Should return false with date before 2000', () => {
    expect(dateFormatter('1999-07-22')).to.be.false;
  });
  it('Should return false with date more than a year from currnet year', () => {
    before(() => {
      const date = `${new Date().getFullYear() + 2}-07-22`;
      expect(dateFormatter(date)).to.be.false;
    });
  });
  it('Should return false if input format is not yyyy-mm-dd', () => {
    expect(dateFormatter('02-2002-20')).to.be.false;
  });
  it('Should return false if the month is not between 01 and 12', () => {
    expect(dateFormatter('2005-00-15')).to.be.false;
    expect(dateFormatter('2005-13-15')).to.be.false;
  });
  it('Should return false if day is not a valid number', () => {
    expect(dateFormatter('2020-07-00')).to.be.false;
    expect(dateFormatter('2020-07-33')).to.be.false;
  });
});