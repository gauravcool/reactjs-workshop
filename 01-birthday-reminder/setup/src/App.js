import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [people, setPeople] = useState(data);

  return (
    <section className='container'>
      <h2>reminder project setup</h2>
      <p>{people.length} birthdays today</p>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
    );
}

export default App;
