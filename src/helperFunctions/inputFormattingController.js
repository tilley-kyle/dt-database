const currencyFormatter = '.currencyFormatter';
const dateFormatter = '.dateFormatter';

const inputFormattingController = (inputObj) => {
  //obj that has each field
  //obj that keeps track of each field that is wrong
  //iterate throught object
    //check that items formatting
    //if supposed to be a dollar amount, run it through number converter
    //if supposed to be date, foromat it to mm/dd/yyyy
  //if obj that keeps track of wrong fields is empty, return fomratted inputObj
  //else, return field names that are wrong
  const currencyFields = ['TW-Invoice-Total', 'Duty/Tarrif', 'Port-Handling', 'Devaning', 'Other-Handling', 'Total-Landed', 'CUSA-Invoice-Total', 'Gross-Profit'];
  const dateFields = ['TW-Invoice-Date', 'CUSA-Invoice-Date', 'Date-Paid'];
  const failedFields = [];
  for (const field in inputObj) {
    if (currencyFields.indexOf(field) > -1) {
      if (currencyFormatter(inputObj[field])) {
        inputObj[field] = currencyFormatter(inputObj[field]);
      } else {
        failedFields.push(field);
      }
    } else if (dateFields.indexOf(field) > -1) {
      if (dateFormatter(inputObj[field])) {
        inputObj[field] = dateFormatter(inputObj[field]);
      } else {
        failedFields.push(field);
      }
    }
  }
  if (failedFields.length > 0) return failedFields;
  return inputObj;
};

export default inputFormattingController