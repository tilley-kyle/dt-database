const currencyFormatter = (currency) => {
  if (!parseInt(currency) && !parseFloat(currency)) {
    return false;
  }
  return parseInt(currency).toFixed(2);
};

module.exports = currencyFormatter;