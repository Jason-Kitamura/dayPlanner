import React, {useState} from 'react';
import '../modal.css'

function Modal (props){
  
    
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
      
                
                <button id='acceptBtn' onClick={e => props.saveSection()}>
                    Done
                </button>
            </div>
        </div>
           
    )
}

export default Modal;