import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

const url = 'https://jsonplaceholder.typicode.com/users';

export default function App() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
}

export const Home = () => {
  return (
    <div>
      <h1>Home </h1>
    </div>
  );
};

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setStatus('pending');
    axios
      .get(url)
      .then((res) => {
        setStatus('success');
        setUsers(res.data);
      })
      .catch((err) => {
        setStatus('error');
      });
  };

  return (
    <div>
      <h1>Users Page. </h1>
      {status === 'pending' && <div>Loading ....</div>}
      {status === 'error' && <div>API Error !</div>}
      {status === 'success' &&
        users.map((user) => (
          <li key={user.id} className="userList">
            {user.name}
          </li>
        ))}
      {users.map((user) => (
        <li key={user.id} className="userList">
          {user.name}
        </li>
      ))}
    </div>
  );
};

export const Support = () => {
  return <h1>Support Page. </h1>;
};

export const PageNotFount = () => {
  return (
    <h1>
      Page Not Found. <Link to="/">Go to Home</Link>
    </h1>
  );
};
