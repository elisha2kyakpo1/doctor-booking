import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

const Users = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    setToken(token);
  }

  return (
    <form onSubmit={handleSubmit} className="inner-container">
      <div className="header">
        Login
      </div>
      <div className="box">

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input onChange={e => setEmail(e.target.value)}
            type="text"
            name="email"
            className="login-input"
            placeholder="enter your email"/>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            className="login-input"
            placeholder="enter your Password"/>
        </div>

        <button
          type="button"
          className="login-btn"
        >
        Login
        </button>
      </div>
    </form>
  );
}

Users.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Users;
