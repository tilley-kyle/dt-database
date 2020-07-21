const dateFormatter = (inputDate) => {
  const date = new Date();
  const year = date.getFullYear();
  if (parseInt(inputDate.split('-')[0]) < 2000 || parseInt(inputDate.split('-')[0]) > year + 1) {
    return false
  }
  inputDate = inputDate.split('-');
  return `${inputDate[1]}/${inputDate[2]}/${inputDate[0]}`;
};

module.exports =  dateFormatter;