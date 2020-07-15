import React from 'react';
import './components.css';

const SearchBar = () => (
  <div className="search-bar">
    <input type="input" placeholder="Input Model ID"></input>
    <button type="submit">Search Model</button>
    <input type="input" placeholder="Input Serial ID"></input>
    <button type="submit">Search Serial</button>
    <input type="input" placeholder="Input Dealer"></input>
    <button type="submit">Search Dealer</button>
    <input type="input" placeholder="Input End User"></input>
    <button type="submit">Search End User</button>
    <button type="submit">All Sales</button>
  </div>
);

export default SearchBar;