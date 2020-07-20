import currencyFormatter from './currencyFormatter';
import dateFormatter from './dateFormatter';

const inputFormattingController = (inputObj) => {
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