import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'John Doe',
    age: 40,
    message: 'jdas'
  });

  const changeMessage = () => {
    setPerson({...person, age: 23});
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3 >{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change</button>
    </>
  );
};

export default UseStateObject;
