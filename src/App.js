import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Background from './components/background';
import Weather from './components/weather';
import Planner from './components/planner';
import Todo from './components/todo';
import Modal from './components/modal';
import EditModal from './components/editModal'

toast.configure();

function App() {

  const [modalState, setModalState] = useState( { visibility : 'hidden'} );
  const [ editModalState, setEditModalState ] = useState( {visibility : 'hidden'});

  const [ taskList, setTaskList] = useState([]);
  const [ newTitle, setNewTitle ] = useState('');
  const [ newTasks, setNewTasks ] = useState([]);
  const [ sectionList, setSectionList ]= useState([]);

  const [ editSectionState, setEditSectionState ] = useState();

  const [ i , setI ] = useState(1);
  const [ j , setJ ] = useState(1);

  function showModal () {
    setModalState({
      visiblity : 'visible'
    })
  }
  function showEditModal () {
    console.log('showing modal visible')
    setEditModalState({
      visiblity : 'visible'
    })
  }

  function hideModal () {
    setModalState( {
      visibility : 'hidden'
    });
    //clearing text hooks and task array in modal
    setTaskList([])
    setNewTitle('')
    setNewTasks([]);
  }

  function hideEditModal () {
    setEditModalState( {
      visibility : 'hidden'
    });
  }

  function removeTask(i) {
      setTaskList(taskList.filter(item => item.key !== i));
      setNewTasks(newTasks.filter(item => item.key !== i));
  }

  function addNewTask(){
      setTaskList(taskList => ([...taskList, 
          <div class='taskInput' key={i}>
              <i class='fa fa-times removeTask'  aria-hidden='true' onClick = { e => removeTask(i)} ></i>
              <h5>
                  New Task
              </h5>
              <input onChange={ e => setTask( e.target.value, i)}>

              </input>
          </div>
      ]));
      setI( i + 1)
  }

  function saveSection() {
    if ( newTitle === '' ){
      toast.error('Please Enter a Section Title :)')
    } else {
      hideModal()
      addNewSection();
      console.log('saving section...', );
    }
   
  }

  function addNewSection(){

    const color = [Math.floor(Math.random() * 4)]

    const obj = {
      id: j,
      title: newTitle,
      tasks: newTasks,
      color: color
    };
    setSectionList([
      ...sectionList, obj
    ]);
    setJ( j + 1)
  }

  function setTask( text, i ){
      const obj = {
          id: i,
          text: text,          
      }
      setNewTasks([
          ...newTasks, obj
      ])
  }
  //edit modal functions
  function editSection( id ){
    console.log('editing section with id...', id, 'section list ...', sectionList);
    console.log('modal State', modalState);
    showEditModal();

    const section = sectionList.filter( 
      e => e.id === id
    )
    console.log('returning section...', section)

    setEditSectionState( section[0] );
    console.log('editSectionState', editSectionState)
}

  
  return (
    <div >
      <container id='container'>

        <Background/>
        <Modal modalState={modalState} hideModal={hideModal} saveSection={saveSection} removeTask={removeTask} addNewTask={addNewTask} setTask={setTask} setNewTitle={setNewTitle} taskList={taskList}/>
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
              <Todo showModal={showModal} newTitle={newTitle} newTasks={newTasks} taskList={taskList}  sectionList={sectionList} setSectionList={setSectionList} showEditModal={showEditModal} editSection={editSection} setEditModalState={setEditModalState}/>
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
