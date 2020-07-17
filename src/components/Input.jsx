import React from 'react';
import './components.css';

const Input = ({ onNewMachineInput, newInput }) => {
  const totalLanded = 0;
  const grossProfit = 0;
  return (
    <div className="input-container">
      <div className="field-container">
        <input className="input-field" type="input" placeholder="Model" id="Model" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Serial Number" id="Serial-Number" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Taiwan Invoice Number" id="TW-Invoice-Number" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Taiwan Invoice Date" id="TW-Invoice-Date" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Taiwan Invoice Total" id="TW-Invoice-Total" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="CUSA Invoice Number" id="CUSA-Invoice-Number" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="CUSA Invoice Date" id="CUSA-Invoice-Date" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="CUSA Invoice Total" id="CUSA-Invoice-Total" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Dealer" id="Dealer" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="End User" id="End-User" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Date Sold" id="Date-Sold" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Date Paid" id="Date-Paid" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Duty/Tarrif" id="Duty/Tarrit" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Port Handling" id="Port-Handling" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Devaning" id="Devaning" onChange={(e) => onNewMachineInput(e)} />
        <input className="input-field" type="input" placeholder="Other Handling" id="Other-Handling" onChange={(e) => onNewMachineInput(e)} />
      </div>
      <div className="total-submit">
        <p className="totals">Total Landed is ${totalLanded}</p>
        <p className="totals">Gross Profit is ${grossProfit}</p>
        <button type="submit">Submit Data</button>
      </div>
    </div>
  );
}

export default Input;