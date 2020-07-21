import currencyFormatter from './currencyFormatter';
import dateFormatter from './dateFormatter';

const inputFormattingController = (inputObj) => {
  const currencyFields = ['TW_Invoice_Total', 'Duty_Tarrif', 'Port_Handling', 'Devaning', 'Other_Handling', 'Total_Landed', 'CUSA_Invoice_Total', 'Gross_Profit'];
  const dateFields = ['TW_Invoice_Date', 'CUSA_Invoice_Date', 'Date_Paid'];
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
    if (!inputObj[field]) {
      failedFields.push(field);
    }
  });
  if (failedFields.length > 0) {
    const failedFieldsString = failedFields.map((field) => `${field} `);
    alert(`${failedFieldsString} is/are not correct.`);
    return null;
  };
  return inputObj;
};

export default inputFormattingController