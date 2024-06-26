import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  })

  return (
    <>
      <h3>Github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = users;
          return (
            <li key={id}><img src={html_url} /></li>
          )
        })

        }

      </ul>
    </>
    );
};

export default UseEffectFetchData;
