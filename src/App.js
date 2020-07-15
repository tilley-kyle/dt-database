import React from 'react';
import './App.css';

import camproUSALogo from './images/Campro_USA_Blue_Logo.webp';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentResults: {},
      searchCriteria: 'total',
      searchInput: '',
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="banner-container">
        <div className="contact-container">
          <p className="call-today">Call Today: </p>
          <p className="phone-number">(760) 706-7425</p>
          {/* <a className="dealer" href="https://www.campro-usa.com/">Dealer Center</a> */}
        </div>
        <div className="banner">
          <div className="search-input">
            <div className="search-input-item">Search</div>
            <div className="search-input-item">Input</div>
          </div>
        </div>
        <a href="https://www.campro-usa.com/">
          <img className="banner-img" src={camproUSALogo} alt="campro usa logo" />
        </a>
      </div>
    );
  }
}

export default App;
