import React, { useState, useEffect } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  return (
    <>
      <div>
        <h1>{size}</h1>
      </div>
    </>
  )
}

export default ShowHide;
