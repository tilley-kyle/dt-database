const dateFormatter = (inputDate) => {
  inputDate = inputDate.split('-');
  return `${inputDate[1]}/${inputDate[2]}/${inputDate[0]}`;
};

export default  dateFormatter;