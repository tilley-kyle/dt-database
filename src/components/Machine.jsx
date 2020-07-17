import React from 'react';
import './components.css';

const Machine = ({ machine, inc }) => {
  const tdClassName = inc % 2 === 0 || inc === 0 ? 'even' : 'odd';
  return (
    <tbody>
      <tr className={tdClassName}>
        <td >{machine['Model']}</td>
        <td >{machine['Serial-Number']}</td>
        <td >{machine['TW-Invoice-Number']}</td>
        <td >{machine['TW-Invoice-Date']}</td>
        <td >{machine['TW-Invoice-Total']}</td>
        <td >{machine['CUSA-Invoice-Number']}</td>
        <td >{machine['CUSA-Invoice-Date']}</td>
        <td >{machine['CUSA-Invoice-Total']}</td>
        <td >{machine['Dealer']}</td>
        <td >{machine['End-User']}</td>
        <td >{machine['Date-Sold']}</td>
        <td >{machine['Date-Paid']}</td>
        <td >{machine['Duty/Tarrif']}</td>
        <td >{machine['Port-Handling']}</td>
        <td >{machine['Devaning']}</td>
        <td >{machine['Other-Handling']}</td>
        <td >{machine['Total-Landed']}</td>
        <td >{machine['Gross-Profit']}</td>
      </tr>
    </tbody>


);
  }
export default Machine;