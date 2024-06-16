import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);
  const [text, setText] = useState(100);

  useEffect(() => {
    console.log('call useEffect');
    document.title = `(${value})`
  })

  useEffect(() => {
    console.log('call useEffect - value');
    document.title = `(${value})`
  }, [value])

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
      <h1>{text}</h1>
      <button className='btn' onClick={() => setText(text + 1)}>Increase</button>

    </>
  )
};

export default UseEffectBasics;
