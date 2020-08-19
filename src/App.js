import React, {useState} from 'react';

import './App.css';

import Background from './components/background';
import Weather from './components/weather';
import Planner from './components/planner';
import Todo from './components/todo';
import Modal from './components/modal';
import EditModal from './components/editModal'


function App() {

  const [modalState, setModalState] = useState( { visibility : 'hidden'} );
  const [ editModalState, setEditModalState ] = useState( {visibility : 'hidden'});

  
  
  const [ newTasks, setNewTasks ] = useState([]);
  const [ sectionList, setSectionList ]= useState([]);

  const [ editSectionState, setEditSectionState ] = useState();

  const [ i , setI ] = useState(1);
  
//modal visibilities
  function showModal () {
    setModalState({
      visiblity : 'visible'
    })
  }
  function showEditModal () {
    setEditModalState({
      visiblity : 'visible'
    })
  }
  function hideModal () {
    setModalState( {
      visibility : 'hidden'
    });
  }
  function hideEditModal () {
    setEditModalState( {
      visibility : 'hidden'
    });
  }

  //edit modal functions
  function editSection( id ){
    showEditModal();
    const section = sectionList.filter( 
      e => e.id === id
    )
    setEditSectionState( section[0] );
  }

  
  return (
    <div >
      <container id='container'>

        <Background/>
        <Modal modalState={modalState} hideModal={hideModal} i={i} setI={setI} sectionList={sectionList} setSectionList={setSectionList}/>
        <EditModal hideEditModal={hideEditModal} editModalState={editModalState} sectionList={sectionList} setSectionList={setSectionList} editSectionState={editSectionState} setEditSectionState={setEditSectionState} i={i} setI={setI}/>
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
              <Todo showModal={showModal}  newTasks={newTasks}  sectionList={sectionList} setSectionList={setSectionList} showEditModal={showEditModal} editSection={editSection} setEditModalState={setEditModalState}/>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
