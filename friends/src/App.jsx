import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';

const App = () => {
  return (
    <Router>
      <main>
        <Route path="/" component={Login} />
        <ProtectedRoute exact path="friends-list" component={FriendsList} />
      </main>
    </Router>
  );
};

export default App;
