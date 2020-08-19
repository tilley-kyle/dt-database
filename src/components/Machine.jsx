import React from 'react';
import './components.css';

const Machine = ({ machine, inc, onEditClick }) => {
  const tdClassName = inc % 2 === 0 || inc === 0 ? 'even' : 'odd';
  return (
    <tbody>
      <tr className={tdClassName}>
        <td className="edit-button"><button className="reset-style"  id={inc} onClick={(e) => onEditClick(e)}>&#9998;</button></td>
        <td className="data-entry">{machine['Model']}</td>
        <td className="data-entry">{machine['Serial_Number']}</td>
        <td className="data-entry">{machine['TW_Invoice_Number']}</td>
        <td className="data-entry">{machine['TW_Invoice_Date']}</td>
        <td className="data-entry">{parseInt(machine['TW_Invoice_Total']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
        <td className="data-entry">{parseInt(machine['Duty_Tarrif']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
        <td className="data-entry">{parseInt(machine['Port_Handling']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
        <td className="data-entry">{parseInt(machine['Devaning']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
        <td className="data-entry">{parseInt(machine['Other_Handling']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
        <td className="data-entry">{parseInt(machine['Total_Landed']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
        <td className="data-entry">{machine['Dealer']}</td>
        <td className="data-entry">{machine['End_User']}</td>
        <td className="data-entry">{machine['CUSA_Invoice_Number']}</td>
        <td className="data-entry">{machine['CUSA_Invoice_Date']}</td>
        <td className="data-entry">{parseInt(machine['CUSA_Invoice_Total']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
        <td className="data-entry">{machine['Date_Paid']}</td>
        <td className="data-entry">{parseInt(machine['Gross_Profit']).toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
      </tr>
    </tbody>


);
  }
export default Machine;