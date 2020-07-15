import React from 'react';
import './components.css';

import SearchBar from './SearchBar';
import Machine from './Machine';

const Results = ({ currentResults }) => {
  return (
    <div className="results-container">
      <SearchBar />
      <div className="table-container">
        {currentResults.map((machine) => <Machine key={machine.Model} machine={machine} />
        )}
      </div>
    </div>
  )
};

export default Results;