import React from 'react';
import './App.css';

import camproUSALogo from './images/Campro_USA_Blue_Logo.webp';
import dummyData from './dummyData';

import Body from './components/Body';

import totalLandedCalc from './helperFunctions/totalLandedCalc';
import grossProfitCalc from './helperFunctions/grossProfitCalc';
import inputFormattingController from './helperFunctions/inputFormattingController';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentResults: [],
      totalResults: [],
      pageToDisplay: 'search',
      searchInput: '',
      newInput: {},
    }
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onTextInput = this.onTextInput.bind(this);
    this.onNewMachineInput = this.onNewMachineInput.bind(this);
    this.onSubmitData = this.onSubmitData.bind(this);
  }

  componentDidMount() {
    this.setState({ totalResults: dummyData });
  }

  async onSearchInputClick(e) {
    await this.setState({ pageToDisplay: e.target.id, currentResults: [] });
  }

  async onSearchClick(e) {
    const { totalResults, searchInput } = this.state;
    const results = [];
    if (e.target.value === 'all') {
      await this.setState({ currentResults: this.state.totalResults });
      return;
    }
    totalResults.forEach((item) => {
      if (item[e.target.value] == searchInput) {
        results.push(item);
      }
    });
    this.setState({ currentResults: results });
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

  async onSubmitData(e) {
    e.preventDefault();
    const { totalResults, newInput } = this.state;
    newInput['Total-Landed'] = totalLandedCalc(newInput);
    newInput['Gross-Profit'] = grossProfitCalc(newInput, newInput['Total-Landed']);
    const formattedInput = inputFormattingController(newInput);
    if (formattedInput) {
      alert('The data was successfully added');
      await this.setState({ totalResults: [...totalResults, formattedInput], pageToDisplay: 'search' });
      this.setState({ newInput: {} });
    } else {
      return null;
    }
  }

  render() {
    const { pageToDisplay, searchCriteria, currentResults, totalResults, newInput } = this.state;
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
          <a href="https://www.campro-usa.com/">
            <img className="banner-img" src={camproUSALogo} alt="campro usa logo" />
          </a>
        </div>
        <Body
          pageToDisplay={pageToDisplay}
          searchCriteria={searchCriteria}
          currentResults={currentResults}
          totalResults={totalResults}
          onSearchClick={this.onSearchClick}
          onTextInput={this.onTextInput}
          onNewMachineInput={this.onNewMachineInput}
          newInput={newInput}
          onSubmitData={this.onSubmitData}
        />
      </div>
    );
  }
}

export default App;
