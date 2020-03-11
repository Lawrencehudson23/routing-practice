import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Welcome from './views/Welcome';
import OneParam from './views/OneParam';
import ThreeParam from './views/ThreeParam';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path='/welcome'/>
        <OneParam path='/:word'/>
        <ThreeParam path='/:word/:color/:bgc'/>
      </Router>
    </div>
  );
}

export default App;
