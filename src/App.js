import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, i am a React App</h1>
    //   </div>
    // );
    //return React.createElement('div',null,'h1','Hi i\'m the new React App');
    return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works now'));
  }
}

export default App;
