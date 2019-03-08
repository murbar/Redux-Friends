import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions';

const Login = ({ login, location, history }) => {
  //  if logged in, redirect to FriendsList
  const [credentials, setCredentials] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4'
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(credentials);
      const { state } = location;
      const destination = state ? state.from.pathname : '/';
      history.replace(destination);
    } catch (ex) {
      console.log(ex);
    }
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

export default connect(
  null,
  { login }
)(Login);
