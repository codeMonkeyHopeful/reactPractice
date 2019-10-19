import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm working!</h1>
        <h1>And here is what a person would say</h1>
        <Person />
      </div>
    );
  }
}

export default App;
