import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>This is actually Working!</p>
        <Person name="Max Tennyson" age="10"/>
        <Person name="Gwen Tennyson" age="11"/>
        <Person name="Max Tennyson" age="58"/>
      </div>
    );
    //return React.createElement('div',null,'h1','Hi i\'m the new React App');
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works now'));
  }
}

export default App;
