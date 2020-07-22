const currencyFormatter = (currency) => {
  if (!parseInt(currency) && !parseFloat(currency)) {
    return false;
  }
  return parseFloat(currency).toFixed(2);
};

module.exports = currencyFormatter;