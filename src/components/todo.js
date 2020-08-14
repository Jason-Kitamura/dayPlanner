import React, { useState } from 'react';
import '../todo.css'

function Todo(props) {

 


    function addSection() {
        console.log('add section');
        props.showModal();
    }
    
    const renderTodo = props.sectionList.map((section, i) => (
        <div class='section' id={section.id}>
            <h4 class='sectionTitle'>{section.title}<i class="fa fa-plus newTask" aria-hidden="true"></i></h4>
            
            {section.tasks.map( (task, i) => (
                <div class='task'>
                    <p>{task.text}
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                
                </div>
            ))}
        </div>
    ))
    

    return (
        <div id="todo">

            <div>
                <p id='newSection' onClick={e => addSection()} >Add goal +</p>
                
            </div>
            <br/>
            {/* {props.list} */}
            {renderTodo}
            
        </div>
    )
}

export default Todo;

//add section
//card
    //add button
    //task with check box
    //delete box