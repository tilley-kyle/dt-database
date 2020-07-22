const dateFormatter = (inputDate) => {
  const date = new Date();
  const year = date.getFullYear();
  inputDate = inputDate.split('-');
  if (!inputDate[0]) {
    return false;
  } else if (parseInt(inputDate[0]) < 2000 || parseInt(inputDate[0]) > year + 1) {
    return false;
  } else if(parseInt(inputDate[1]) < 1 || parseInt(inputDate[1]) > 12) {
    return false;
  } else if(parseInt(inputDate[2]) < 1 || parseInt(inputDate[2]) > 31) {
    return false;
  }
  return `${inputDate[1]}/${inputDate[2]}/${inputDate[0]}`;
};

module.exports = dateFormatter;