import React from 'react';
import logo from './logo.svg';
import './App.css';

import Background from './components/background'
import Weather from './components/weather';
import Planner from './components/planner';
import Todo from './components/todo';

function App() {
  return (
    <div >
      <container id='container'>

        <Background/>
        <header>
            <h1 id='header'>Day Planner</h1>
          </header>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8'>
              <div class='row'>
                <Weather/>
              </div>
              <div class='row'>
                <Planner/>
              </div>
            </div>
            <div class='col-md-4'>
              <Todo/>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
