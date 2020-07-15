import React from 'react';
import './components.css';

const Machine = ({ machine })=> (
  <div className='machine-container'>
    <table>
      <tr>
        <th className="field">Field</th>
        <th className="value">Value</th>
      </tr>
      <tr className="odd">
        <td className="title">Model</td>
        <td>{machine.Model}</td>
      </tr>
      <tr className="even">
        <td className="title">Serial Number</td>
        <td>{machine['Serial-Number']}</td>
      </tr>
      <tr className="odd">
        <td className="title">TW Invoice Number</td>
        <td>{machine['TW-Invoice-Number']}</td>
      </tr>
      <tr className="even">
        <td className="title">TW Invoice Date</td>
        <td>{machine['TW-Invoice-Date']}</td>
      </tr>
      <tr className="odd">
        <td className="title">TW Invoice Total</td>
        <td>{machine['TW-Invoice-Total']}</td>
      </tr>
      <tr className="even">
        <td className="title">Date Sold</td>
        <td>{machine['Date-Sold']}</td>
      </tr>
      <tr className="odd">
        <td className="title">Dealer</td>
        <td>{machine['Dealer']}</td>
      </tr>
      <tr className="even">
        <td className="title">End User</td>
        <td>{machine['End-User']}</td>
      </tr>
      <tr className="odd">
        <td className="title">CUSA Invoice Number</td>
        <td>{machine['CUSA-Invoice-Number']}</td>
      </tr>
      <tr className="even">
        <td className="title">CUSA Invoice Date</td>
        <td>{machine['CUSA-Invoice-Date']}</td>
      </tr>
      <tr className="odd">
        <td className="title">CUSA Invoice Total</td>
        <td>{machine['CUSA-Invoice-Total']}</td>
      </tr>
      <tr className="even">
        <td className="title">Date Paid</td>
        <td>{machine['Date-Paid']}</td>
      </tr>
      <tr className="odd">
        <td className="title">Duty/Tarrif</td>
        <td>{machine['Duty/Tarrif']}</td>
      </tr>
      <tr className="even">
        <td className="title">Port Handling</td>
        <td>{machine['Port-Handling']}</td>
      </tr>
      <tr className="odd">
        <td className="title">Devaning</td>
        <td>{machine.Devaning}</td>
      </tr>
      <tr className="even">
        <td className="title">Other Handling</td>
        <td>{machine['Other-Handling']}</td>
      </tr>
      <tr className="odd">
        <td className="title">Total Landed</td>
        <td>{machine['Total-Landed']}</td>
      </tr>
      <tr className="even">
        <td className="title">Gross Profit</td>
        <td>{machine['Gross-Profit']}</td>
      </tr>
    </table>
  </div>
);

export default Machine;