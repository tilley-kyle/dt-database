import React from 'react';import './components.css';

import totalLandedCalc from '../helperFunctions/totalLandedCalc';
import grossProfitCalc from '../helperFunctions/grossProfitCalc';

const Edit = ({ editElement, onMachineEdit, onEditSubmit }) => {
  const totalLanded = totalLandedCalc(editElement);
  const grossProfit = grossProfitCalc(editElement, totalLanded) ? grossProfitCalc(editElement, totalLanded) : 0;

  return (
    <div className="input-container">
      <div className="field-container">
  <input className="input-field" type="input" placeholder={editElement.Model} id="Model" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.Serial_Number} id="Serial_Number" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.TW_Invoice_Number} id="TW_Invoice_Number" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="date" value={editElement.TW_Invoice_Date} id="TW_Invoice_Date" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.TW_Invoice_Total} id="TW_Invoice_Total" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.CUSA_Invoice_Number} id="CUSA_Invoice_Number" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="date" value={editElement.CUSA_Invoice_Date} id="CUSA_Invoice_Date" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.CUSA_Invoice_Total} id="CUSA_Invoice_Total" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.Dealer} id="Dealer" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.End_User} id="End_User" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="date" value={editElement.Date_Paid} id="Date_Paid" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.Duty_Tarrif} id="Duty_Tarrif" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.Port_Handling} id="Port_Handling" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.Devaning} id="Devaning" onChange={(e) => onMachineEdit(e)} />
        <input className="input-field" type="input" placeholder={editElement.Other_Handling} id="Other_Handling" onChange={(e) => onMachineEdit(e)} />
      </div>
      <div className="total-submit">
        <p className="totals">Total Landed: {totalLanded.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
        <p className="totals">Gross Profit:  {grossProfit.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
        <button type="submit" onClick={(e) => onEditSubmit(e)}>Submit Change</button>
      </div>
    </div>
  );
}

export default Edit;