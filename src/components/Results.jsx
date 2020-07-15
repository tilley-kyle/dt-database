import React from 'react';
import './components.css';

import SearchBar from './SearchBar';
import Machine from './Machine';

const Results = ({ currentResults, onSearchClick }) => {
  return (
    <div className="results-container">
      <SearchBar onSearchClick={onSearchClick} />
      <div className="table-container">
        {currentResults.map((machine) => <Machine key={machine.Model} machine={machine} />
        )}
      </div>
    </div>
  )
};

export default Results;