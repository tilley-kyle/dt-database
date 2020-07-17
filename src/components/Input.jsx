import React from 'react';
import './components.css';

const Input = ({ onNewMachineInput }) => (
  <div className="input-container">
    <input type="input" placeholder="Enter Model" id="Model" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Serial Number" id="Serial-Number" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Taiwan Invoice Number" id="TW-Invoice-Number" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Taiwan Invoice Date" id="TW-Invoice-Date" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Taiwan Invoice Total" id="TW-Invoice-Total" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter CamproUSA Invoice Number" id="CUSA-Invoice-Number" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter CamproUSA Invoice Date" id="CUSA-Invoice-Date" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter CamproUSA Invoice Total" id="CUSA-Invoice-Total" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Dealer" id="Dealer" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter End User" id="End-User" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Date Sold" id="Date-Sold" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Date Paid" id="Date-Paid" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Duty/Tarrif" id="Duty/Tarrit" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Port Handling" id="Port-Handling" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Devaning" id="Devaning" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="Enter Other Handling" id="Other-Handling" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="" id="" onChange={(e) => onNewMachineInput(e)}></input>
    <input type="input" placeholder="" id="" onChange={(e) => onNewMachineInput(e)}></input>
  </div>
);

export default Input;