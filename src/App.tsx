import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import TimesheetPage from './pages/Timesheet';
import HomePage from './pages/Home';
import Navigation from './components/base/Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/timesheet' element={<TimesheetPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
