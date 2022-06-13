import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import NavBar from './components/NavBar';
import NoMatch from './pages/NoMatch'
import Register from './pages/Register';

import './App.css';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <div className="container">
        <h1>Welcome to the Leitner Box </h1>
        {user.username}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" setUser={setUser} element={<Register />} />
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
