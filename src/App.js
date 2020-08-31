import React from 'react';
import './App.css';

import camproUSALogo from './images/Campro_USA_Blue_Logo.webp';

import Body from './components/Body';

import totalLandedCalc from './helperFunctions/totalLandedCalc';
import grossProfitCalc from './helperFunctions/grossProfitCalc';
import inputFieldCheck from './helperFunctions/inputFieldCheck';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentResults: [],
      pageToDisplay: 'search',
      searchInput: '',
      newInput: {},
      modelIDs: [],
      editElement: {},
    }
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onTextInput = this.onTextInput.bind(this);
    this.onNewMachineInput = this.onNewMachineInput.bind(this);
    this.onSubmitData = this.onSubmitData.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onMachineClick = this.onMachineClick.bind(this);
    this.onMachineEdit = this.onMachineEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/start')
    .then((res) => {
      return res.json();
    })
    .then( async (modelIDs) =>{
      await this.setState({ modelIDs: modelIDs });
    })
  }

  async onSearchInputClick(e) {
    await this.setState({ pageToDisplay: e.target.id, currentResults: [] });
  }

  async onSearchClick(e) {
    const { searchInput } = this.state;
    const fetchBody = {criteria: e.target.value, input: searchInput};
    fetch('http://localhost:3001/search', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fetchBody),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.setState({ currentResults: data });
    })
  }

  async onTextInput(e) {
    e.preventDefault();
    await this.setState({ searchInput: e.target.value });
  }

  async onNewMachineInput(e) {
    const { newInput } = this.state;
    newInput[e.target.id] = e.target.value;
    await this.setState({ newInput: newInput });
  }

  async onMachineEdit(e) {
    const { editElement } = this.state;
    editElement[e.target.id] = e.target.value;

  }

  async onSubmitData(e) {
    e.preventDefault();
    const { newInput, modelIDs } = this.state;
    newInput['Total_Landed'] = totalLandedCalc(newInput).toString();
    newInput['Gross_Profit'] = grossProfitCalc(newInput, newInput['Total_Landed']).toString();
    const statusOfFields = inputFieldCheck(newInput);
    if (statusOfFields === true) {
      fetch('http://localhost:3001/input', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(newInput),
      })
        .then((res) => {
          if (res.status === 201) {
            this.setState({ modelIDs: [...modelIDs, newInput.Model], pageToDisplay: 'search', newInput: {} });
          } else {
            alert ('At least 1 input field couldn\'t be properly stored');
          }
        })
        .catch((err) => {
          alert('Server side error loading data');
          console.log(err);
        });
    } else {
      alert(`${statusOfFields} is/are wrong`);
    }
  }

  async onEditSubmit(e) {
    const {editElement} = this.state;
    fetch('http://localhost:3001/edit', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(editElement),
    })
    .then(() => {
      alert('Data edited');
      this.setState({ pageToDisplay: 'search' });
    })
    .catch((err) => {
      console.log(err);
      alert('Something went wrong');
    });
  }

  async onEditClick (e) {
    const { currentResults } = this.state;
    e.preventDefault(e);
    console.log(currentResults[e.target.id])
    this.setState({ pageToDisplay: 'edit', editElement: currentResults[e.target.id] });
  }

  onMachineClick (e) {
    e.preventDefault();
    this.setState({ pageToDisplay: 'edit', editElement: e.target.value });
    console.log(e.target.value);
  }

  render() {
    const { pageToDisplay, searchCriteria, currentResults, newInput, modelIDs, editElement } = this.state;
    return (
      <div className="total-container">
        <div className="banner-container">
          <div className="contact-container">
            <p className="call-today">Call Today: </p>
            <p className="phone-number">(760) 706-7425</p>
          </div>
          <div className="banner">
            <div className="search-input">
              <div className="search item" id="search" onClick={(e) => this.onSearchInputClick(e)}>Search</div>
              <div className="input item" id="input" onClick={(e) => this.onSearchInputClick(e)}>Input</div>
            </div>
          </div>
          <a href="https://www.campro-usa.com/" target="_blank">
            <img className="banner-img" src={camproUSALogo} alt="campro usa logo" />
          </a>
        </div>
        <Body
          pageToDisplay={pageToDisplay}
          searchCriteria={searchCriteria}
          currentResults={currentResults}
          onSearchClick={this.onSearchClick}
          onTextInput={this.onTextInput}
          onNewMachineInput={this.onNewMachineInput}
          newInput={newInput}
          onSubmitData={this.onSubmitData}
          onMachineClick={this.onMachineClick}
          onEditClick={this.onEditClick}
          modelIDs={modelIDs}
          editElement={editElement}
          onMachineEdit={this.onMachineEdit}
          onEditSubmit={this.onEditSubmit}
        />
      </div>
    );
  }
}

export default App;
