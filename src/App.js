import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {BadRoutePage} from './pages/BadRoutePage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Register from './pages/Register';
import Signin from './pages/Signin';

import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to the Leitner Box </h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route index element={<Home />} />
            <Route path="*" element={<BadRoutePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
