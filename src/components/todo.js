import React, {} from 'react';
import '../todo.css'

function Todo() {

    function addSection() {
        console.log('add section')
    }

    return (
        <div id="todo">
            
            <div>
                <p id='newSection' onClick={e => addSection()}>Add goal +</p>
            </div>
            <br/>
            <div class='section'>
                <h4 class='sectionTitle'>Work Goals<i class="fa fa-plus newTask" aria-hidden="true"></i></h4>
                <div class='task'>
                <p>Work on App
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                </div>
                <div class='task'>
                <p>Interview Prep
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                </div>
                <div class='task'>
                <p>Clean PC
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                </div>
            </div>
            <div class='section' id='section2'>
                <h4 class='sectionTitle'>Personal Goals<i class="fa fa-plus newTask" aria-hidden="true"></i></h4>
                <div class='task'>
                    <p>Excercise
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>
                </div>
                <div class='task'>
                <p>No carbs
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                </div>
             
            </div> 
            <div class='section' id='section3'>
                <h4 class='sectionTitle'>Summer Goals<i class="fa fa-plus newTask" aria-hidden="true"></i></h4>
                <div class='task'>
                <p>Go to the beach
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                </div>
                <div class='task'>
                <p>Get a Job
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                </div>
                <div class='task'>
                <p>Learn Photoshop
                        <div class='checkbox'>
                            <input type='checkbox' ></input>
                            <i class="fa fa-trash " aria-hidden="true"></i>
                        </div>
                    </p>                
                </div>
            </div>             
        </div>
    )
}

export default Todo;

//add section
//card
    //add button
    //task with check box
    //delete box