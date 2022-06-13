import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>{' '}
        | {''}
        <NavLink className="nav-link" to="/signin">
          Sign In
        </NavLink>
      </nav>
    </>
  );
};
export default NavBar;
