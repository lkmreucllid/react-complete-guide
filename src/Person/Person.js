import React from 'react';

const Person = (props) =>{
    return(
    <div>
        <p onClick={props.click}>Hi, my name is {props.name} and i am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    );
}

export default Person;