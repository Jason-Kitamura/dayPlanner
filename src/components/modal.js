import React, {useState} from 'react';
import '../modal.css'

function Modal (props){

    // const [ taskList, setTaskList] = useState([])

    // const [ i , setI ] = useState(1)

    // const [ newTitle, setNewTitle ] = useState('')
    // const [ newTasks, setNewTasks ] = useState([])


    // function saveSection() {
    //     console.log('saving section...', newTitle, 'newTasks', newTasks)
    //     props.hideModal()
    // }
    // function removeTask(i) {
    //     console.log('removing task... ', i);
    //     setTaskList(taskList.filter(item => item.key !== i));
    //     setNewTasks(newTasks.filter(item => item.key !== i));
    // }
    // function addNewTask(){
    //     setTaskList(taskList => ([...taskList, 
    //         <div class='taskInput' key={i}>
    //             <i class='fa fa-times removeTask'  aria-hidden='true' onClick = { e => removeTask(i)} ></i>
    //             <h5>
    //                 New Task
    //             </h5>
    //             <input onChange={ e => setTask( e.target.value, i)}>

    //             </input>
    //         </div>
    //     ]));
    //     setI( i + 1)
    //     // console.log('new task', taskList, 'i = ', i)
    // }
    // function setTask( text, i ){
    //     console.log('new tasks hook', newTasks)
    //     const obj = {
    //         text: text,
    //         id: i
    //     }
    //     setNewTasks([
    //         ...newTasks, obj
    //     ])
    // }

        
    
    return (
        <div id='backDrop' style={props.modalState}>
             <div id='goalForm'>
                 <div id='titleSection'>
                    <h1>
                        Section Title
                    </h1>
                    <i class='fa fa-times fa-lg' id='closeBtn' aria-hidden='true' onClick={e => props.hideModal()}></i>
                    <i class='fa fa-plus fa-2x' id='addTask' aria-hidden='true' onClick={ e => props.addNewTask()}></i>
                    <input id='newTitle' onChange={ e => props.setNewTitle( e.target.value )}>
                    
                    </input>
                 </div>
                 {props.taskList}
                 {/* return(
        <div class='section' id={e.id}>
            <h4 class='sectionTitle'>{e.title}<i class="fa fa-plus newTask" aria-hidden="true"></i></h4>
            {e.tasks.forEach( e => {
              return(
                <div class='task'>
                <p>{e.text}
                  <div class='checkbox'>
                      <input type='checkbox' ></input>
                      <i class="fa fa-trash " aria-hidden="true"></i>
                  </div>
                </p>                
              </div>
            )
            })}
            
        </div>   */}
        
    
                 
                {/* <div class='taskInput'>
                    
                    <h5>
                        New Task
                    </h5>
                    <input >

                    </input>
                </div> */}
                
                {/* <div class='taskInput'>
                    <i class='fa fa-times' id='removeTask' aria-hidden='true'></i>
                    <h5>
                        New Task
                    </h5>
                    <input>

                    </input>
                </div> */}
                
                <button id='acceptBtn' onClick={e => props.saveSection()}>
                    Done
                </button>
            </div>
        </div>
           
    )
}

export default Modal;