import currencyFormatter from './currencyFormatter';
import dateFormatter from './dateFormatter';

const inputFormattingController = (inputObj) => {
  const currencyFields = ['TW-Invoice-Total', 'Duty/Tarrif', 'Port-Handling', 'Devaning', 'Other-Handling', 'Total-Landed', 'CUSA-Invoice-Total', 'Gross-Profit'];
  const dateFields = ['TW-Invoice-Date', 'CUSA-Invoice-Date', 'Date-Paid'];
  const failedFields = [];
  currencyFields.forEach((field) => {
    if (!inputObj[field]) {
      failedFields.push(field);
      return null;
    }
    inputObj[field] = currencyFormatter(inputObj[field]);
  });
  dateFields.forEach((field) => {
    if (!inputObj[field]) {
      failedFields.push(field);
      return null;
    }
    inputObj[field] = dateFormatter(inputObj[field]);
  });
  if (failedFields.length > 0) {
    const failedFieldsString = failedFields.map((field) => `${field} `);
    alert(`${failedFieldsString} are not correct.`);
    return null;
  };
  return inputObj;
};

export default inputFormattingController