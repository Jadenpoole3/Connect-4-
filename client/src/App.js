import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GridCell from './GridCell'

class App extends Component {

  render() {
    const cells = []; 

    // close all of each row into a container for styling 
    for (let y = 5; y >= 0; y--) {  //this is a nested loop  minus because im going 5 down to zero 
      const row = []; // in a container of its own 

      for(let x = 0; x < 7; x++) { // 7x6  so 6 column 7 rows   starting at 0 and going 
        //Jaden figure out a way to join these keys better not the best practice never mind

        row.push(<GridCell key={x}  x={x} y={y} />);     
       } 
       cells.push(<div key={y} className="row">{row}</div>) // push them into cells with a div wrap around them, this is getting is own iteration as well as x 
       
    } 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Connect 4</h1>
        </header>
       {cells}  
      </div>
    );
  }
}

export default App;
