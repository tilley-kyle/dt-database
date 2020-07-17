import React from 'react';
import './components.css';

const SearchBar = ({ onSearchClick, onTextInput }) => (
  <div className="search-bar">
    <input type="input" placeholder="Input Model ID"></input>
    <button type="submit" value="Model" onClick={(e) => {onSearchClick(e)}}>Search Model</button>
    <input type="input" placeholder="Input Serial ID" onChange={(e) => {onTextInput(e)}}></input>
    <button type="submit" value="Serial-ID" onClick={(e) => {onSearchClick(e)}}>Search Serial</button>
    <input type="input" placeholder="Input Dealer"></input>
    <button type="submit" value="Dealer" onClick={(e) => {onSearchClick(e)}}>Search Dealer</button>
    <input type="input" placeholder="Input End User"></input>
    <button type="submit" value="End-User" onClick={(e) => {onSearchClick(e)}}>Search End User</button>
    <button type="submit" value="all" onClick={(e) => {onSearchClick(e)}}>All Sales</button>
  </div>
);

export default SearchBar;