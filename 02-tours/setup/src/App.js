import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data.json';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours, setTours] = useState(data);
  console.log('tours', tours);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {return id !== tour.id});
    setTours(newTours);
  }

  const fetchTours = () => {
    setLoading(true);
    try {
      setLoading(false);
      setTours(data);
    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />
}

export default App
