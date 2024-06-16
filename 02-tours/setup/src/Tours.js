import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  return <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
    {tours.map((tour) => {
      return <Tour key={tour.id} id={tour.id} image={tour.image} info={tour.info} name={tour.name} price={tour.price} removeTour={removeTour} />
    })}
  </div>
</section>
};

export default Tours;
