const dateFormatter = (inputDate) => {
  const date = new Date();
  const year = date.getFullYear();
  inputDate = inputDate.split('-');
  if (parseInt(inputDate[0]) < 2000 || parseInt(inputDate[0]) > year + 1) return false
  return `${inputDate[1]}/${inputDate[2]}/${inputDate[0]}`;
};

export default  dateFormatter;