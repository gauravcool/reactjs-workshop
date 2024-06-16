import React from 'react';

const ErrorExample = () => {

  let title = 'random title';

  const handleClick = () => {
    title = 'new title';
    console.log('hello world');
  }

  return <React.Fragment>
    <h1>{title}</h1>
    <button className='btn' onClick={handleClick}>Click</button>
  </React.Fragment>
};

export default ErrorExample;
