import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Background from './components/background';
import Weather from './components/weather';
import Planner from './components/planner';
import Todo from './components/todo';
import Modal from './components/modal';

toast.configure();

function App() {

  const [modalState, setModalState] = useState( { visibility : 'hidden'} )

  const [ taskList, setTaskList] = useState([])
  const [ newTitle, setNewTitle ] = useState('')
  const [ newTasks, setNewTasks ] = useState([]);
  const [ sectionList, setSectionList ]= useState([]);

  const [ i , setI ] = useState(1)
  const [ j , setJ ] = useState(1)

  function showModal () {
    setModalState({
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
    const obj = {
      id: j,
      title: newTitle,
      tasks: newTasks,
    };
    setSectionList([
      ...sectionList, obj
    ]);
    setJ( j + 1)
  }

  function setTask( text, i ){
      const obj = {
          text: text,
          id: i
      }
      setNewTasks([
          ...newTasks, obj
      ])
  }

  
  return (
    <div >
      <container id='container'>

        <Background/>
        <Modal modalState={modalState} hideModal={hideModal} saveSection={saveSection} removeTask={removeTask} addNewTask={addNewTask} setTask={setTask} setNewTitle={setNewTitle} taskList={taskList}/>
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
              <Todo showModal={showModal} newTitle={newTitle} newTasks={newTasks} taskList={taskList}  sectionList={sectionList} />
            </div>
          </div>
        </div>
      </container>
    </div>
  );
}

export default App;
