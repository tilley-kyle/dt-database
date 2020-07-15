import React from 'react';
import './App.css';

import camproUSALogo from './images/Campro_USA_Blue_Logo.webp';
import dummyData from './dummyData';

import Body from './components/Body';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentResults: [],
      action: 'search',
      searchCriteria: 'total',
      searchInput: '',
    }
  }

  componentDidMount() {
    this.setState({ currentResults: dummyData });
  }

  async onSearchInputClick(e) {
    await this.setState({ action: e.target.id });
  }

  render() {
    const { action, searchCriteria, currentResults } = this.state;
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
          />

      </div>
    );
  }
}

export default App;
