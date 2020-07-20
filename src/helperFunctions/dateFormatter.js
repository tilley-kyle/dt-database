const dateFormatter = (inputDate) => {
  console.log(inputDate)
  inputDate = inputDate.split('-');
  console.log(inputDate)
  if (inputDate.length !== 3) {
    console.log(inputDate)
    return false;
  }
  return `${inputDate[1]}/${inputDate[2]}/${inputDate[0]}`;
};

export default  dateFormatter;