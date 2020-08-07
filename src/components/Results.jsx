import React from 'react';
import './components.css';

import SearchBar from './SearchBar';
import Machine from './Machine';

const Results = ({ currentResults, onSearchClick, onTextInput, onEditClick, totalResults, onMachineClick }) => {
  if (!currentResults.length) {
    return (
      <div className="results-container">
        <SearchBar onSearchClick={onSearchClick} onTextInput={onTextInput} totalResults={totalResults} onMachineClick={onMachineClick} />
      </div>
    )
  } else {
    let totalProfit = 0;
    currentResults.forEach((machine) => {
      totalProfit += parseInt(machine['Gross_Profit']);
    });
    return (
      <div className="results-container">
        <SearchBar onSearchClick={onSearchClick} onTextInput={onTextInput} currentResults={currentResults} totalResults={totalResults} />
        <div className="machine-container">
          <table className="table-container-averages">
            <thead>
              <tr className="title-box">
                <th className="title-avgs">Total Sold</th>
                <th className="title-avgs">Total Profit</th>
                <th className="title-avgs">Average Profit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even">
                <td className="data-entry">{currentResults.length}</td>
                <td className="data-entry">{totalProfit.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
                <td className="data-entry">
                  {(totalProfit / currentResults.length).toLocaleString("en-US", {style:"currency", currency:"USD"})}
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-container">
            <thead>
              <tr className="title-box">
                <th className=""></th>
                <th className="title">Model</th>
                <th className="title">Serial Number</th>
                <th className="title">TW Invoice Number</th>
                <th className="title">TW Invoice Date</th>
                <th className="title">TW Invoice Total</th>
                <th className="title">Duty/ Tarrif</th>
                <th className="title">Port Handling</th>
                <th className="title">Devaning</th>
                <th className="title">Other Handling</th>
                <th className="title">Total Landed</th>
                <th className="title">Dealer</th>
                <th className="title">End User</th>
                <th className="title">CUSA Invoice Number</th>
                <th className="title">CUSA Invoice Date</th>
                <th className="title">CUSA Invoice Total</th>
                <th className="title">Date Paid</th>
                <th className="title">Gross Profit</th>
              </tr>
            </thead>
            {currentResults.map((machine, i) => <Machine key={i} inc={i} machine={machine} onEditClick={onEditClick} />
            )}
          </table>
        </div>
      </div>
    )
  }
};

export default Results;