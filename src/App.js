import React from 'react';
import './App.css';

import camproUSALogo from './images/Campro_USA_Blue_Logo.webp';
import dummyData from './dummyData';

import Body from './components/Body';

import searchInputFormatter from './helperFunctions/searchInputFormatter';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentResults: [],
      totalResults: [],
      action: 'input',
      searchInput: '',
      newInput: {},
    }
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onTextInput = this.onTextInput.bind(this);
    this.onNewMachineInput = this.onNewMachineInput.bind(this);
  }

  componentDidMount() {
    this.setState({ totalResults: dummyData });
  }

  async onSearchInputClick(e) {
    await this.setState({ action: e.target.id });
  }

  async onSearchClick(e) {
    const { totalResults, searchInput } = this.state;
    const results = [];
    if (e.target.value === 'all') {
      await this.setState({ currentResults: this.state.totalResults });
      return;
    }
    totalResults.forEach((item) => {
      console.log(e.target.value)
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

  render() {
    const { action, searchCriteria, currentResults, totalResults } = this.state;
    return (
      <div className="total-container">
        <div className="banner-container">
          <div className="contact-container">
            <p className="call-today">Call Today: </p>
            <p className="phone-number">(760) 706-7425</p>
            {/* <a className="dealer" href="https://www.campro-usa.com/">Dealer Center</a> */}
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
          action={action}
          searchCriteria={searchCriteria}
          currentResults={currentResults}
          totalResults={totalResults}
          onSearchClick={this.onSearchClick}
          onTextInput={this.onTextInput}
          onNewMachineInput={this.onNewMachineInput}
        />
      </div>
    );
  }
}

export default App;
