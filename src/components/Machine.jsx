import React from 'react';
import './components.css';

const Machine = ({ machine, inc }) => {
  const tdClassName = inc % 2 === 0 || inc === 0 ? 'even' : 'odd';
  return (
    <tbody>
      <tr className={tdClassName}>
        <td className="data-entry">{machine['Model']}</td>
        <td className="data-entry">{machine['Serial_Number']}</td>
        <td className="data-entry">{machine['TW_Invoice_Number']}</td>
        <td className="data-entry">{machine['TW_Invoice_Date']}</td>
        <td className="data-entry">${machine['TW_Invoice_Total']}</td>
        <td className="data-entry">${machine['Duty_Tarrif']}</td>
        <td className="data-entry">${machine['Port_Handling']}</td>
        <td className="data-entry">${machine['Devaning']}</td>
        <td className="data-entry">${machine['Other_Handling']}</td>
        <td className="data-entry">${machine['Total_Landed']}</td>
        <td className="data-entry">{machine['Dealer']}</td>
        <td className="data-entry">{machine['End_User']}</td>
        <td className="data-entry">{machine['CUSA_Invoice_Number']}</td>
        <td className="data-entry">{machine['CUSA_Invoice_Date']}</td>
        <td className="data-entry">${machine['CUSA_Invoice_Total']}</td>
        <td className="data-entry">{machine['Date_Paid']}</td>
        <td className="data-entry">${machine['Gross_Profit']}</td>
      </tr>
    </tbody>


);
  }
export default Machine;