import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import TimesheetPage from './pages/timesheet';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timesheet">Timesheet</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/timesheet' element={<TimesheetPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
