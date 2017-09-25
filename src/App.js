import React, { Component } from 'react';
import './App.css';

import EnterpriseList from './components/EnterpriseList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App bus lines</h2>
        </div>
        <EnterpriseList />
      </div>
    );
  }
}

export default App;
