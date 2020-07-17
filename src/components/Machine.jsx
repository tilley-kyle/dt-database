import React from 'react';
import './components.css';

const Machine = ({ machine, key }) => {
  return (

    <tbody>
      <tr>
        <td className={key}>{machine['Model']}</td>
        <td className={key}>{machine['Serial-Number']}</td>
        <td className={key}>{machine['TW-Invoice-Number']}</td>
        <td className={key}>{machine['TW-Invoice-Date']}</td>
        <td className={key}>{machine['TW-Invoice-Total']}</td>
        <td className={key}>{machine['CUSA-Invoice-Number']}</td>
        <td className={key}>{machine['CUSA-Invoice-Date']}</td>
        <td className={key}>{machine['CUSA-Invoice-Total']}</td>
        <td className={key}>{machine['Dealer']}</td>
        <td className={key}>{machine['End-User']}</td>
        <td className={key}>{machine['Date-Sold']}</td>
        <td className={key}>{machine['Date-Paid']}</td>
        <td className={key}>{machine['Duty/Tarrif']}</td>
        <td className={key}>{machine['Port-Handling']}</td>
        <td className={key}>{machine['Devaning']}</td>
        <td className={key}>{machine['Other-Handling']}</td>
        <td className={key}>{machine['Total-Landed']}</td>
        <td className={key}>{machine['Gross-Profit']}</td>
      </tr>
    </tbody>
   

);
  }
export default Machine;