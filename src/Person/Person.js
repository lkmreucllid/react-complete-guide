import React from 'react';

const Person = (props) =>{
    return(
    <div>
        <p onClick={props.click}>Hi, my name is {props.name} and i am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" value={props.name} onChange={props.changed}/>
    </div>
    );
}

export default Person;