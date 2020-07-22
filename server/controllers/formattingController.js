const currencyFormatter = require('./currencyFormatter');
const dateFormatter = require('./dateFormatter');

const Machine = require('../../db/machineSchema');

const formattingController = async (req, res) => {
  const currencyFields = ['TW_Invoice_Total', 'Duty_Tarrif', 'Port_Handling', 'Devaning', 'Other_Handling', 'Total_Landed', 'CUSA_Invoice_Total', 'Gross_Profit'];
  const dateFields = ['TW_Invoice_Date', 'CUSA_Invoice_Date', 'Date_Paid'];
  currencyFields.forEach((field) => {
    req.body[field] = currencyFormatter(req.body[field]);
  });
  dateFields.forEach((field) => {
    req.body[field] = dateFormatter(req.body[field]);
  });
  const machine = new Machine({
    Model: req.body['Model'],
    Serial_Number: req.body['Serial_Number'],
    TW_Invoice_Number: req.body['TW_Invoice_Number'],
    TW_Invoice_Date: req.body['TW_Invoice_Date'],
    TW_Invoice_Total: req.body['TW_Invoice_Total'],
    CUSA_Invoice_Number: req.body['CUSA_Invoice_Number'],
    CUSA_Invoice_Date: req.body['CUSA_Invoice_Date'],
    CUSA_Invoice_Total: req.body['CUSA_Invoice_Total'],
    Dealer: req.body['Dealer'],
    End_User: req.body['End_User'],
    Date_Paid: req.body['Date_Paid'],
    Duty_Tarrif: req.body['Duty_Tarrif'],
    Port_Handling: req.body['Port_Handling'],
    Devaning: req.body['Devaning'],
    Other_Handling: req.body['Other_Handling'],
    Total_Landed: req.body['Total_Landed'],
    Gross_Profit: req.body['Gross_Profit'],
  });
  machine.save()
  .then(() => {
    res.status(201).send();
  })
  .catch((err) => {
    res.status(400).send(err);
  });
};

module.exports = formattingController;