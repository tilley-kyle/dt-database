const currencyFormatter = (currency) => {
  console.log(currency)
  if (!parseInt(currency) && !parseFloat(currency)) {
    console.log('here')
    return false;
  }
  return parseFloat(parseInt(currency).toFixed(2));
};

export default currencyFormatter;