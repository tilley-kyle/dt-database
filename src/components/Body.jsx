import React from 'react';
import './components.css';


import Results from './Results';
import Input from './Input';

const Body = ({ action, searchCriteria, currentResults, totalResults, onSearchClick, onChangedText }) => {
  if (!action) return <div className="body-container">nothing clicked yet</div>
  else if (action === 'search') {
    return <Results
      currentResults={currentResults}
      totalResults={totalResults}
      onSearchClick={onSearchClick}
      onChangedText={onChangedText}
      />
  } else if (action === 'input') {
    return <Input />
  }

}

export default Body;