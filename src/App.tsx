import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import './styles/base/buttons.css';
import './styles/base/table.css';

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

// TODO: Move table to table component
// TODO: Create table component?
// TODO: Create another modal content?
// TODO: Separate general css and component css

export default App;
