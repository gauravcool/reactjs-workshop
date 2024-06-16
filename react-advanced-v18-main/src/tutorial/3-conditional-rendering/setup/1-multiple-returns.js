import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {

  const [user, setUser] = useState('default user');
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUser(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getUser();
  });

  if(isLoading) {
    return <h1>Loading...</h1>
  }

  return (
      <>
        <h2>user</h2>
      </>
    );
};

export default MultipleReturns;
