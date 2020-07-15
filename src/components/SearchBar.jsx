import React from 'react';
import './components.css';

const SearchBar = ({ onSearchClick }) => (
  <div className="search-bar">
    <input type="input" placeholder="Input Model ID"></input>
    <button type="submit" value="model" onClick={(e) => {onSearchClick(e)}}>Search Model</button>
    <input type="input" placeholder="Input Serial ID"></input>
    <button type="submit" value="serial" onClick={(e) => {onSearchClick(e)}}>Search Serial</button>
    <input type="input" placeholder="Input Dealer"></input>
    <button type="submit" value="dealer" onClick={(e) => {onSearchClick(e)}}>Search Dealer</button>
    <input type="input" placeholder="Input End User"></input>
    <button type="submit" value="user" onClick={(e) => {onSearchClick(e)}}>Search End User</button>
    <button type="submit" value="all" onClick={(e) => {onSearchClick(e)}}>All Sales</button>
  </div>
);

export default SearchBar;