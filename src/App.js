import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name:'Max Tennyson', age: 58},
      {name:'Ben Tennyson', age: 10},
      {name:'Gwen Tennyson', age: 11}
    ],
    showPerson: false
  }

  switchNameHandler = (newName)=>{
    //console.log('Button Clicked');
    this.setState({
      persons: [
        {name:'Max Tennyson', age: 58},
        {name:newName, age: 10},
        {name:'Gwen Tennyson', age: 12}
      ]
    })
  }

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        {name:'Max Tennyson', age: 58},
        {name:event.target.value, age: 10},
        {name:'Gwen Tennyson', age: 12}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow})
  }

  render() {
    const styleStr={
      backgroundColor: 'white',
      border: '1px solid blue',
      font: 'inherit',
      padding: '8px',
      cusor:'pointer'
    };

    let personStr = null;
    if(this.state.showPerson){
      personStr = (
        <div>
          {this.state.persons.map(person => {
            <Person name={person.name} age={person.age}
              />
          })}
      </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>This is actually Working!</p>
        <button
        style={styleStr}
         onClick={this.togglePersonHandler}>Toggle Persons</button>
       {personStr}
      </div>
    );
    //return React.createElement('div',null,'h1','Hi i\'m the new React App');
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works now'));
  }
}

export default App;
