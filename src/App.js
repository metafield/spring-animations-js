import React, { Component } from 'react';
import './App.css';
import FadeInParagraph from './components/FadeInParagraph';
import AnimatedSVG from './components/AnimatedSVG';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <FadeInParagraph>Learn React</FadeInParagraph>
            <AnimatedSVG />
        </header>
      </div>
    );
  }
}

export default App;
