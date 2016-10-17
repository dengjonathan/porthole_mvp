import React, { Component } from 'react';
import '../App.css'; //FIXME place all styles in assets
import Word from './Word';
import CurrentWord from './CurrentWord';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Porthole</h2>
        </div>
        <Word word='previous' />
        <CurrentWord word='current' />
        <Word word='next' />
      </div>
    );
  }
}

export default App;
