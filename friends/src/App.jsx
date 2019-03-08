import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';

const App = () => {
  return (
    <Router>
      <main>
        <h1>Redux With Friends</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends-list">Friends List</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/friends-list" component={FriendsList} />
        <Route path="/logout" component={Logout} />
      </main>
    </Router>
  );
};

export default App;
