const currencyFormatter = (currency) => {
  if (!parseInt(currency) && !parseFloat(currency) && currency !== '0') {
    return false;
  }
  return parseFloat(currency).toFixed(2);
};

module.exports = currencyFormatter;