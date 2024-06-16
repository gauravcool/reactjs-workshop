import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState(true);
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(true);

  return (
    <>
      <h1>{text && "something"}</h1>
      <h2>{value || "this is also something"}</h2>
      <p>{isError ? "This is true" : "This is false"}</p>
    </>
  );
};

export default ShortCircuit;
