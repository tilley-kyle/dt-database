const currencyFormatter = require('./currencyFormatter');
const dateFormatter = require('./dateFormatter');

const formatter = (inputMachineObj) => {
  const currencyFields = ['TW_Invoice_Total', 'Duty_Tarrif', 'Port_Handling', 'Devaning', 'Other_Handling', 'Total_Landed', 'CUSA_Invoice_Total', 'Gross_Profit'];
  const dateFields = ['TW_Invoice_Date', 'CUSA_Invoice_Date', 'Date_Paid'];
  currencyFields.forEach((field) => {
    inputMachineObj[field] = currencyFormatter(inputMachineObj[field]);
  });
  dateFields.forEach((field) => {
    inputMachineObj[field] = dateFormatter(inputMachineObj[field]);
  });
  
};

module.exports = formatter;