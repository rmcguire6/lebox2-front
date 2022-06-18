import React from 'react';
import {NavLink} from 'react-router-dom';
import {setAuthToken} from '../services/utils';

const NavBar = () => {
  const handleSignOut = () => {
    setAuthToken(null);
  };
  return (
    <>
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/dashboard">
          Cards
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/signin">
          Sign In
        </NavLink>{' '}
        | {''}
        <button className="signOutButton" onClick={handleSignOut}>
          Sign Out
        </button>
      </nav>
    </>
  );
};
export default NavBar;
