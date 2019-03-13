import React, { Component } from 'react';
import './App.css';
import FadeInParagraph from './components/FadeInParagraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <FadeInParagraph>Learn React</FadeInParagraph>
        </header>
      </div>
    );
  }
}

export default App;
