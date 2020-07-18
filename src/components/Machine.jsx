import React from 'react';
import './components.css';

const Machine = ({ machine, inc }) => {
  const tdClassName = inc % 2 === 0 || inc === 0 ? 'even' : 'odd';
  return (
    <tbody>
      <tr className={tdClassName}>
        <td className="data-entry">{machine['Model']}</td>
        <td className="data-entry">{machine['Serial-Number']}</td>
        <td className="data-entry">{machine['TW-Invoice-Number']}</td>
        <td className="data-entry">{machine['TW-Invoice-Date']}</td>
        <td className="data-entry">${machine['TW-Invoice-Total']}</td>
        <td className="data-entry">{machine['CUSA-Invoice-Number']}</td>
        <td className="data-entry">{machine['CUSA-Invoice-Date']}</td>
        <td className="data-entry">${machine['CUSA-Invoice-Total']}</td>
        <td className="data-entry">{machine['Dealer']}</td>
        <td className="data-entry">{machine['End-User']}</td>
        <td className="data-entry">{machine['Date-Sold']}</td>
        <td className="data-entry">{machine['Date-Paid']}</td>
        <td className="data-entry">${machine['Duty/Tarrif']}</td>
        <td className="data-entry">${machine['Port-Handling']}</td>
        <td className="data-entry">${machine['Devaning']}</td>
        <td className="data-entry">${machine['Other-Handling']}</td>
        <td className="data-entry">${machine['Total-Landed']}</td>
        <td className="data-entry">${machine['Gross-Profit']}</td>
      </tr>
    </tbody>


);
  }
export default Machine;