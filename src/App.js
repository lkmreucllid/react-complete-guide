import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {name:'Max Tennyson', age: 58},
      {name:'Ben Tennyson', age: 10},
      {name:'Gwen Tennyson', age: 11}
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>This is actually Working!</p>
        <button onClick={() => this.switchNameHandler('Ben 10')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this.switchNameHandler,'Ben 10ison')}
          changed = {this.nameChangedHandler}
          >My Hobbies are reading and sleeping
        </Person>
        <Person
        name={this.state.persons[2].name} age={this.state.persons[2].age}
        />
      </div>
    );
    //return React.createElement('div',null,'h1','Hi i\'m the new React App');
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works now'));
  }
}

export default App;
