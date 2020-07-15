import React from 'react';
import './App.css';

import camproUSALogo from './images/Campro_USA_Blue_Logo.webp';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="banner-container">
        <img className="banner-img" src={camproUSALogo} alt="campro usa logo" />
      </div>
    );
  }
}

export default App;
