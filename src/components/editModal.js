import React, {useState} from 'react';
import '../modal.css'

function EditModal (props){

    function updateTitle( text){
        let oldSection = props.editSectionState;
            props.setEditSectionState( old => ({
                ...old, 
                title : text
            }))
            console.log(props.editSectionState.title)
    }
    function updateSection(){
        
    }
  
    try{

        const renderTasks = props.editSectionState.tasks.map((task, i) => (
            <div class='taskInput' key={i}>
              <i class='fa fa-times removeTask'  aria-hidden='true'  ></i>
              <h5>
                  New Task
              </h5>
              <input value={task.text}>

              </input>
          </div>
        ))
    
        return (
            <div id='backDrop' style={props.editModalState}>
                 <div id='goalForm'>
                     <div id='titleSection'>
                        <h1>
                            Section Title
                        </h1>
                        <i class='fa fa-times fa-lg' id='closeBtn' aria-hidden='true' onClick={e => props.hideEditModal()}></i>
                        <i class='fa fa-plus fa-2x' id='addTask' aria-hidden='true' ></i>
                        <input id='newTitle' value={props.editSectionState.title} onChange={e => updateTitle(e.target.value)}>
                        
                        </input>
                     </div>
                     {renderTasks}
          
                    
                    <button id='acceptBtn' onClick={updateSection()}>
                        Done
                    </button>
                </div>
            </div>
               
        )} catch {
            return(
                ''
            )
        }
    }
    
    


export default EditModal;