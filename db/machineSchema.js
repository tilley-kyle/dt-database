const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/campro', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', () => console.log('error connecting to database'));
db.once('open', () => console.log('connected to database'));

const machineSchema = new mongoose.Schema({
  Model: String,
  Serial_Number: String,
  TW_Invoice_Number: String,
  TW_Invoice_Date: String,
  TW_Invoice_Total: Number,
  CUSA_Invoice_Number: String,
  CUSA_Invoice_Date: String,
  CUSA_Invoice_Total: Number,
  Dealer: String,
  End_User: String,
  Date_Paid: String,
  Duty_Tarrif: Number,
  Port_Handling: Number,
  Devaning: Number,
  Other_Handling: Number,
  Total_Landed: Number,
  Gross_Profit: Number,
});

const Machine = mongoose.model('Machine', machineSchema);

module.exports = Machine;