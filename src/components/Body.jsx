import React from 'react';
import './components.css';


import Results from './Results';
import Input from './Input';

const Body = ({ pageToDisplay, searchCriteria, currentResults, onSearchClick, onTextInput, onNewMachineInput, newInput, onSubmitData, onMachineClick, onEditClick, modelIDs }) => {
  if (pageToDisplay === 'home') return <div className="body-container">nothing clicked yet</div>
  else if (pageToDisplay === 'search') {
    return <Results
      currentResults={currentResults}
      onSearchClick={onSearchClick}
      onTextInput={onTextInput}
      onEditClick={onEditClick}
      onMachineClick={onMachineClick}
      modelIDs={modelIDs}
      />
  } else if (pageToDisplay === 'input') {
    return <Input onNewMachineInput={onNewMachineInput} newInput={newInput} onSubmitData={onSubmitData} />
  }

}

export default Body;