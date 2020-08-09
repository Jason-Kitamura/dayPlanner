import React, {useState} from 'react';
import '../modal.css'

function Modal (props){

    const [ taskList, setTaskList] = useState([])

    const [ i , setI ] = useState(0)

    function saveSection() {
        console.log('saving section...')
        props.hideModal()
    }
    function removeTask(i) {
        console.log('removing task... ', i);
        setTaskList(taskList.filter(item => item.key !== i));
    }
    function addNewTask(){

        setTaskList(taskList => ([...taskList, 
            <div class='taskInput' key={i}>
                <i class='fa fa-times removeTask'  aria-hidden='true' onClick = { e => removeTask(i)} ></i>
                <h5>
                    New Task
                </h5>
                <input>

                </input>
            </div>
        ]));

        setI( i + 1)
        
        console.log('new task', taskList, 'i = ', i)
            }
    
    return (
        <div id='backDrop' style={props.modalState}>
             <div id='goalForm'>
                 <div id='titleSection'>
                    <h1>
                        Section Title
                    </h1>
                    <i class='fa fa-times fa-lg' id='closeBtn' aria-hidden='true' onClick={e => props.hideModal()}></i>
                    <input id='newTitle' >
                    
                    </input>
                 </div>
               
                <div class='taskInput'>
                    <i class='fa fa-plus' id='addTask' aria-hidden='true' onClick={ e => addNewTask()}></i>
                    <h5>
                        New Task
                    </h5>
                    <input>

                    </input>
                </div>
                {taskList}
                {/* <div class='taskInput'>
                    <i class='fa fa-times' id='removeTask' aria-hidden='true'></i>
                    <h5>
                        New Task
                    </h5>
                    <input>

                    </input>
                </div> */}
                
                <button id='acceptBtn' onClick={e => saveSection()}>
                    Done
                </button>
            </div>
        </div>
           
    )
}

export default Modal;