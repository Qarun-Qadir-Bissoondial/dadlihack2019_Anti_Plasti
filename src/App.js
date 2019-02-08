import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TemporaryDrawer from "./Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TemporaryDrawer/>
        </header>
      </div>
    );
  }
}

export default App;
