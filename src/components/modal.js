import React, {} from 'react';
import '../todo.css'

function Modal (props){

    function saveSection() {
        console.log('saving section...')
        props.hideModal()
    }

    return (
        <div id='backDrop' style={props.modalState}>
             <div id='goalForm'>
                <h3>
                    Section Title
                </h3>
                <i class='fa fa-times fa-lg' id='closeBtn' aria-hidden='true' onClick={e => props.hideModal()}></i>
                <input id='newTitle'>
                </input>
                <div class='taskInput'>
                    <i class='fa fa-plus' id='addTask' aria-hidden='true'></i>
                    <h5>
                        New Task
                    </h5>
                    <input>

                    </input>
                </div>
                <div class='taskInput'>
                    <i class='fa fa-times' id='removeTask' aria-hidden='true'></i>
                    <h5>
                        New Task
                    </h5>
                    <input>

                    </input>
                </div>
                
                <button id='acceptBtn' onClick={e => saveSection()}>
                    Done
                </button>
            </div>
        </div>
           
    )
}

export default Modal;