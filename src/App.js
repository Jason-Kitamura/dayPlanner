import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Background from './components/background'
import Weather from './components/weather';
import Planner from './components/planner';
import Todo from './components/todo';
import Modal from './components/modal'

function App() {

  const [modalState, setModalState] = useState( {
    visibility : 'hidden'
  })

  function showModal () {
    setModalState({
      visiblity : 'visible'
    })
  }
  function hideModal () {
    setModalState( {
      visibility : 'hidden'
    });
    console.log('close Modal', modalState)
  }

  
  
  return (
    <div >
      <container id='container'>

        <Background/>
        <Modal modalState={modalState} hideModal={hideModal}/>
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
              <Todo showModal={showModal}/>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
