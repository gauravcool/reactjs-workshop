import React, { useState } from 'react';

const UseStateBasics = () => {

  const [title, setTitle] = useState('Old title')

  const handleClick = () => {
    if(title == 'Old title')
      setTitle('New Title');
    else
      setTitle('Old title');
  }

  return <React.Fragment>
  <h1>{title}</h1>
  <button className='btn' onClick={handleClick}>Click</button>
</React.Fragment>
};

export default UseStateBasics;
