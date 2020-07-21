const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/campro', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', () => console.log('error connecting to database'));
db.once('open', () => console.log('connected to database'));

const machineSchema = new mongoose.Schema({
  Model: String,
  Serial_Number: String,
  Taiwan_Invoice_Number: String,
  Taiwan_Invoice_Date: String,
  Taiwan_Invoice_Total: String,
  CUSA_Invoice_Number: String,
  CUSA_Invoice_Date: String,
  CUSA_Invoice_Total: String,
  Dealer: String,
  End_User: String,
  Date_Paid: String,
  Duty_Tarrig: String,
  Port_Handling: String,
  Devaning: String,
  Other_Handling: String,
  Total_Landed: String,
  Gross_Profit: String,
});

const Machine = mongoose.model('Machine', machineSchema);

module.exports = Machine;