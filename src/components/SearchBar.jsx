import React from 'react';
import './components.css';

const SearchBar = ({ onSearchClick, onTextInput, currentResults, totalResults }) => (
  <div className="search-bar">
    <input type="input" list="model-list" name="model" id="model" placeholder="Input Model ID" />
    <datalist id="model-list">
      {totalResults.map((machine) =>
        <option value={machine.Model} />
      )}
      <option value="CPV-1050B"/>
    </datalist>
    <button type="submit" value="Model" onClick={(e) => {onSearchClick(e); document.getElementById('searchInputModel').value=''}}>Search Model</button>
    <input type="input" id="searchInputSerial" placeholder="Input Serial ID" onChange={(e) => {onTextInput(e)}}></input>
    <button type="submit" value="Serial_Number" onClick={(e) => {onSearchClick(e); document.getElementById('searchInputSerial').value=''}}>Search Serial</button>
    <input type="input" id="searchInputDealer" placeholder="Input Dealer" onChange={(e) => {onTextInput(e)}}></input>
    <button type="submit" value="Dealer" onClick={(e) => {onSearchClick(e); document.getElementById('searchInputDealer').value=''}}>Search Dealer</button>
    <input type="input" id="searchInputUser" placeholder="Input End User" onChange={(e) => {onTextInput(e)}}></input>
    <button type="submit" value="End_User" onClick={(e) => {onSearchClick(e); document.getElementById('searchInputUser').value=''}}>Search End User</button>
    <button type="submit" value="all" onClick={(e) => {onSearchClick(e)}}>All Sales</button>
  </div>
);

export default SearchBar;