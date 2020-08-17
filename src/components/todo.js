import React, { useState } from 'react';
import '../todo.css'

function Todo(props) {

    const colorArray = [
        {
            //red
            borderBottom: 'solid rgba(95, 48, 48, 0.781)',
            borderRight:' solid rgba(95, 48, 48, 0.781)',
            borderTop: 'solid  rgba(207, 105, 105, 0.781)',
            borderLeft: 'solid  rgba(207, 105, 105, 0.781)',
            backgroundColor: 'rgba(255, 82, 82, 0.637)',
        },
        {
            //orange
            borderBottom: 'solid rgba(90, 55, 27, 0.781)',
            borderRight: 'solid rgba(90, 55, 27, 0.781)',
            borderTop: 'solid rgba(207, 159, 105, 0.781)',
            borderLeft: 'solid  rgba(207, 159, 105, 0.781)',
            backgroundColor: 'rgba(240, 143, 78, 0.733)',
        },
        {
            //blue
            borderBottom: 'solid rgba(27, 36, 90, 0.781)',
            borderRight: 'solic rgba(27, 36, 90, 0.781)',
            borderTop: 'solid rgba(122, 172, 230, 0.781)',
            borderLeft: 'solid  rgba(122, 172, 230, 0.781)',
            backgroundColor: 'rgba(78, 135, 240, 0.733)',
        },
        {
            //green
            borderBottom: 'solid rgba(50, 95, 48, 0.781)',
            borderRight: 'solic rgba(50, 95, 48, 0.781)',
            borderTop: 'solid rgba(171, 236, 160, 0.781)',
            borderLeft: 'solid  rgba(171, 236, 160, 0.781)',
            backgroundColor: 'rgba(98, 226, 86, 0.637)',
        },
        {
            //purple
            borderBottom: 'solid rgba(91, 48, 95, 0.781)',
            borderRight: 'solic rgba(91, 48, 95, 0.781)',
            borderTop: 'solid rgba(236, 160, 226, 0.781)',
            borderLeft: 'solid  rgba(236, 160, 226, 0.781)',
            backgroundColor: 'rgba(253, 55, 204, 0.493)',
        }
    ];


    function addSection() {
        console.log('add section');
        props.showModal();
    }

    
    
    const renderTodo = props.sectionList.map((section, i) => (
        <div class='section' id={section.id} style={colorArray[section.color]} >
            <h4 class='sectionTitle'>{section.title}<i class="fa fa-edit newTask" aria-hidden="true" onClick={e => props.editSection(section.id)}></i></h4>
            
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