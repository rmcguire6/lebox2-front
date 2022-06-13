import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import NavBar from './components/NavBar';
import NoMatch from './pages/NoMatch'
import Register from './pages/Register';

import './App.css';

const App = () => {

  return (
    <>
      <div className="container">
        <h1>Welcome to the Leitner Box </h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route index element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
