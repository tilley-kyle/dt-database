const inputFieldCheck = (inputObject) => {
  const missingFields = [];
  const fields = [
    'TW_Invoice_Total',
    'Duty_Tarrif',
    'Port_Handling',
    'Devaning',
    'Other_Handling',
    'Total_Landed',
    'CUSA_Invoice_Total',
    'Gross_Profit',
    'Model',
    'Serial_Number',
    'Dealer',
    'End_User',
    'CUSA_Invoice_Date',
    'CUSA_Invoice_Number',
    'Date_Paid',
    'TW_Invoice_Number',
    'TW_Invoice_Date'
    ];
  fields.map((field) => {
    if (!inputObject[field]) {
      missingFields.push(field);
    }
  });
  if (missingFields.length) {
    return missingFields;
  }
  return true;
};

export default inputFieldCheck;