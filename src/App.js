import React, { Component } from 'react';
import './App.css';
import BmiCalc from './components/BmiCalc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BmiCalc/>
      </div>
    );
  }
}

export default App;
