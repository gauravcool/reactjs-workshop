import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'


function App() {

  const [color, setColor] = useState('#f15025');
  const [error, setError] = useState('');
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world');
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (e) {
      console.log(e); 
      setError(true);
    }
    
  };


  return (<>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input className={`${error ? 'error' : null}`} type='text' value={color} onChange={(e) => setColor(e.target.value)} />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index) => {
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })

      }
    </section>
  </>)
}

export default App
