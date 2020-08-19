import React, {useState} from 'react';
import '../modal.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function Modal (props){

    const [ taskList, setTaskList] = useState([]);
    const [ newTitle, setNewTitle ] = useState('');
    const [ j , setJ ] = useState(1);

    function addNewTask(){
        const taskArray = taskList;
        const newTask = {
          id : props.i,
          text : '',
        }
        taskArray.push( newTask );
        setTaskList( taskArray );
        props.setI( props.i + 1)
    }

    function newTask( text, id ){
        //scan for task with id in editSectionState
        let newTaskArray =  taskList.map( e => {
            console.log('text', taskList, 'id', id, 'element id', e.id)
            if ( e.id === id ) {
                return Object.assign({}, e, {text : text});
            }
            return e;
        })
        setTaskList( newTaskArray );
    }

    function addNewSection(){
        const color = [Math.floor(Math.random() * 4)];
        const cleanTaskList = taskList.filter( task => {
            return task.text !== ''
        })
        const obj = {
          id: j,
          title: newTitle,
          tasks: cleanTaskList,
          color: color
        };
        //add new section to the section array
        props.setSectionList([
          ...props.sectionList, obj
        ]);
        setJ( j + 1)
    }

    function removeTask( id ){
        console.log('removing task...', id)
        const newTaskList = taskList.filter( task => 
            task.id !== id
        );
        setTaskList( newTaskList );
        console.log('new task list', taskList)
    }

    function saveSection() {
        if ( newTitle === '' ){
          toast.error('Please Enter a Section Title :)')
        } else {
            props.hideModal()
            addNewSection();
            setTaskList([])
            setNewTitle('')
          console.log('saving section...', );
        }
    }
   
    return (
        <div id='backDrop' style={props.modalState}>
            <div id='goalForm'>
                <div id='titleSection'>
                    <h1>
                        Section Title
                    </h1>
                    <i class='fa fa-times fa-lg' id='closeBtn' aria-hidden='true' onClick={e => props.hideModal()}></i>
                    <i class='fa fa-plus fa-2x' id='addTask' aria-hidden='true' onClick={ e => addNewTask()}></i>
                    <input id='newTitle' onChange={ e => setNewTitle( e.target.value )}>
                    
                    </input>
                </div>
                {taskList.map( el => (
                    <div class='taskInput' key={el.id}>
                        <i class='fa fa-times removeTask'  aria-hidden='true' onClick={ e => removeTask( el.id )} ></i>
                        <h5>
                            New Task
                        </h5>
                        <input onChange={e => newTask( e.target.value, el.id)}>
            
                        </input>
                    </div>
                ))}
                <button id='acceptBtn' onClick={e => saveSection()}>
                    Done
                </button>
            </div>
        </div>     
    )
}

export default Modal;