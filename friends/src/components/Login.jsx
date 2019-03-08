import React, { useState } from 'react';

const Login = () => {
  //  if logged in, redirect to FriendsList
  const [credentials, setCredentials] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username || ''}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={credentials.password || ''}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
