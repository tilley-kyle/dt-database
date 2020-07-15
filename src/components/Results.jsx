import React from 'react';
import './components.css';

import SearchBar from './SearchBar';
import Machine from './Machine';

const Results = ({ currentResults }) => {
  return (
    <div className="results-container">
      <SearchBar />
      {currentResults.map((machine) => <Machine machine={machine} />
      )}
    </div>
  )
};

export default Results;