import React from 'react';
import './components.css';


import Results from './Results';
import Input from './Input';
import Edit from './Edit';

const Body = ({ pageToDisplay, searchCriteria, currentResults, onSearchClick, onTextInput, onNewMachineInput, newInput, onSubmitData, onMachineClick, onEditClick, modelIDs, editElement, onMachineEdit, onEditSubmit }) => {
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
  } else if (pageToDisplay === 'edit') {
    return <Edit onMachineEdit={onMachineEdit} editElement={editElement} onEditSubmit={onEditSubmit} />
  }

}

export default Body;