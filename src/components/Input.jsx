import React from 'react';
import './components.css';

import totalLandedCalc from '../helperFunctions/totalLandedCalc';
import grossProfitCalc from '../helperFunctions/grossProfitCalc';

const Input = ({ onNewMachineInput, newInput, onSubmitData }) => {
  const totalLanded = totalLandedCalc(newInput);
  const grossProfit = grossProfitCalc(newInput, totalLanded) ? grossProfitCalc(newInput, totalLanded) : 0;
  return (
    <div className="input-container">
      <div className="field-container">
        <input className="input-field" type="input" placeholder="Model" id="Model" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Serial Number" id="Serial_Number" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Taiwan Invoice Number" id="TW_Invoice_Number" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="date" id="TW_Invoice_Date" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Taiwan Invoice Total" id="TW_Invoice_Total" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="CUSA Invoice Number" id="CUSA_Invoice_Number" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="date" id="CUSA_Invoice_Date" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="CUSA Invoice Total" id="CUSA_Invoice_Total" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Dealer" id="Dealer" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="End User" id="End_User" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="date" id="Date_Paid" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Duty/Tarrif" id="Duty_Tarrif" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Port Handling" id="Port_Handling" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Devaning" id="Devaning" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Other Handling" id="Other_Handling" onChange={(e) => onNewMachineInput(e)} />
      </div>
      <div className="total-submit">
        <p className="totals">Total Landed: {totalLanded.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
        <p className="totals">Gross Profit:  {grossProfit.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
        <button type="submit" onClick={(e) => onSubmitData(e)}>Submit Data</button>
      </div>
    </div>
  );
}

export default Input;