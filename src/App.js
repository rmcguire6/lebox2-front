import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import Register from './pages/Register';

import './App.css';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState({});
  return (
    <>
      <div className="container">
        <h1>Welcome to the Leitner Box</h1>
        <UserContext.Provider value={[user, setUser]}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route index element={<Dashboard />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    </>
  );
};
export default App;
