const currencyFormatter = require('./currencyFormatter');
const dateFormatter = require('./dateFormatter');

const formattingController = (req, res) => {
  const currencyFields = ['TW_Invoice_Total', 'Duty_Tarrif', 'Port_Handling', 'Devaning', 'Other_Handling', 'Total_Landed', 'CUSA_Invoice_Total', 'Gross_Profit'];
  const dateFields = ['TW_Invoice_Date', 'CUSA_Invoice_Date', 'Date_Paid'];
  currencyFields.forEach((field) => {
    req.body[field] = currencyFormatter(req.body[field]);
  });
  dateFields.forEach((field) => {
    req.body[field] = dateFormatter(req.body[field]);
  });
  console.log(req.body)
};

module.exports = formattingController;