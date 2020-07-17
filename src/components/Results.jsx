import React from 'react';
import './components.css';

import SearchBar from './SearchBar';
import Machine from './Machine';

const Results = ({ currentResults, onSearchClick, onTextInput }) => {
  return (
    <div className="results-container">
      <SearchBar onSearchClick={onSearchClick} onTextInput={onTextInput} />
      <div className="machine-container">
      <table className="table-container">
        <thead>
          <tr>
            <th>Model</th>
            <th>Serial Number</th>
            <th>TW Invoice Number</th>
            <th>TW Invoice Date</th>
            <th>TW Invoice Total</th>
            <th>CUSA Invoice Number</th>
            <th>CUSA Invoice Date</th>
            <th>CUSA Invoice Total</th>
            <th>Dealer</th>
            <th>End User</th>
            <th>Date Sold</th>
            <th>Date Paid</th>
            <th>Duty/Tarrif</th>
            <th>Port Handling</th>
            <th>Devaning</th>
            <th>Other Handling</th>
            <th>Total Landed</th>
            <th>Gross Profit</th>
          </tr>
        </thead>
        {currentResults.map((machine) => <Machine key={machine.counter} machine={machine} />
        )}
      </table>
    </div>
    </div>
  )
};

export default Results;