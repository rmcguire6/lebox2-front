import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BadRoutePage from './pages/BadRoutePage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ProtectedRoute from 'routers/ProtectedRoute';
import Register from './pages/Register';
import Signin from './pages/Signin';
import './App.css';

export const AuthContext = React.createContext();

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <div className="container">
        <AuthContext.Provider value={{token, setToken}}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    {' '}
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/signin" element={<Signin />} />
              <Route path="/register" element={<Register />} />
              <Route index path="/" element={<Home />} />
              <Route path="*" element={<BadRoutePage />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </div>
    </>
  );
};
export default App;
