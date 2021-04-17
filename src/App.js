import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id:'user1', name:'Max Tennyson', age: 58},
      {id:'user2', name:'Ben Tennyson', age: 10},
      {id:'user3', name:'Gwen Tennyson', age: 11}
    ],
    showPerson: false
  }

  deletePersonHandler =(personIndex) => {
    //const persons = this.state.persons.slice();// use this or the spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons});
  }

  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({ persons: persons});
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
          {this.state.persons.map((person,index) => {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
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
