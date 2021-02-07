import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
  const[personState, setPersonState] = useState({
    persons: [
      {name:'Max Tennyson', age: 58},
      {name:'Ben Tennyson', age: 10},
      {name:'Gwen Tennyson', age: 11}
    ],
    otherState : 'some other State'
  });
//you can use multiple useSate
  const switchNameHandler = ()=>{
    //console.log('Button Clicked');
    setPersonState({
      persons: [
        {name:'Max Tennyson', age: 58},
        {name:'Benjamin Tennyson', age: 10},
        {name:'Gwen Tennyson', age: 12}
      ],
      otherState: personState.otherState
    })
  };
 
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>This is actually Working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies are reading and sleeping</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',null,'h1','Hi i\'m the new React App');
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this works now'));
  
}

export default app;