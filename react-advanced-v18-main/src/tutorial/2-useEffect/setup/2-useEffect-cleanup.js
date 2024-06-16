import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    //cleanup function to clean event listeners
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  })

  return (
    <>
    <h1>Window</h1>
    <h2>Size: {size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
