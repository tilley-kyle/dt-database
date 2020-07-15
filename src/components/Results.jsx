import React from 'react';
import './components.css';

import SearchBar from './SearchBar';
import Machine from './Machine';

const Results = () => {
  return (
    <div className="results-container">
      <SearchBar />
      <Machine />
    </div>
  )
};

export default Results;