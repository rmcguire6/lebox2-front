import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {AuthContext} from '../App';

const NavBar = () => {
  const {token, setToken} = useContext(AuthContext);
  const handleSignOut = () => {
    setToken(null);
  };
  return (
    <>
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          {' '}
          Home
        </NavLink>{' '}
        | {''}
        {token && (
          <>
            <NavLink className="nav-link" to="/dashboard">
              Cards
            </NavLink>{' '}
            | {''}
          </>
        )}
        {!token && (
          <>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>{' '}
            | {''}
            <NavLink className="nav-link" to="/signin">
              Sign In
            </NavLink>{' '}
          </>
        )}
        {token && (
          <button className="signOutButton" onClick={handleSignOut}>
            Sign Out
          </button>
        )}
      </nav>
    </>
  );
};
export default NavBar;
