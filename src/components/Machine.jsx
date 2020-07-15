import React from 'react';
import './components.css';

const Machine = ({ machine })=> (
  <div className='machine-container'>
    <table>
      <tr>
        <th className="field">Field</th>
        <th className="value">Value</th>
      </tr>
      <tr>
        <th className="title">Model</th>
        <th>{machine}</th>
      </tr>
      <tr>
        <th className="title">Serial Number</th>
        <th>{}</th>
      </tr>
      <tr>
        <th className="title">TW Invoice Number</th>
        <th>{}</th>
      </tr>
      <tr>
        <th className="title">IW Invoice Date</th>
        <th>{}</th>
      </tr>
      <tr>
        <th className="title">TW Invoice Total</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Date Sold</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Dealer</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">End User</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">CUSA Invoice Number</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">CUSA Invoice Date</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">CUSA Invoice Total</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Date Paid</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Duty/Tarrif</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Port Handling</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Devaning</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Other Handling</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Total Landed</th>
        <th></th>
      </tr>
      <tr>
        <th className="title">Gross Profit</th>
        <th></th>
      </tr>
    </table>
  </div>
);

export default Machine;