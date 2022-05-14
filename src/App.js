import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Welcome to the Leitner Box</h1>
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
