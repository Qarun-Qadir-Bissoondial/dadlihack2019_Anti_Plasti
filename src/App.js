import React, { Component } from 'react';

import './App.css';
import TemporaryDrawer from "./components/Toolbar/Toolbar";
import About from "./pages/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TemporaryDrawer/>
        </header>

        <main>
            <About/>
        </main>
      </div>
    );
  }
}

export default App;
