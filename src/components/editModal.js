import React, {useState} from 'react';
import '../modal.css';

function EditModal (props){

    const [ taskList, setTaskList] = useState([]);

    function updateTitle( text){
        props.setEditSectionState( old => ({
            ...old, 
            title : text
        }));
    };

    function updateTask(id, text){
        let oldSection = props.editSectionState;
        let newTaskArray =  oldSection.tasks.map( e => {
            if ( e.id === id ) {
                return Object.assign({}, e, {text : text})
            }
            return e;
        })
        oldSection.tasks = newTaskArray;
        console.log('new task array', oldSection.tasks);
        props.setEditSectionState( oldSection );
    }

    function newTask( text, id ){
        //scan for task with id in editSectionState
        let newTaskArray =  taskList.map( e => {
            if ( e.id === id ) {
                return Object.assign({}, e, {text : text});
            }
            return e;
        })
        setTaskList( newTaskArray );
    }

    function addNewTask(){   
        const taskArray = taskList;
        const newTask= {
            id : props.i,
            text : '',
        }
        taskArray.push( newTask );
        setTaskList( taskArray );
        props.setI( props.i + 1);
    }

    function removeTask( id ){
        const newTaskList = taskList.filter( task => 
            task.id !== id
        );
        setTaskList( newTaskList );
        const newSectionTasks = props.editSectionState.tasks.filter( task => 
            task.id !== id
        )
        const newSectionState = props.editSectionState;
            newSectionState.tasks = newSectionTasks;
        props.setEditSectionState( newSectionState );
    }
       
    function updateSection( id ){
        console.log('updating section with id...', id);
        const finalTaskArray = props.editSectionState.tasks.concat( taskList );
        const cleanTaskArray = finalTaskArray.filter( task => {
            return task.text !== ''
        })
        const newSectionList = props.sectionList.map( e => {
            if( e.id === id ){
                return Object.assign({}, e, {title :props.editSectionState.title, tasks: cleanTaskArray})
            }
            return e;
        });
        props.setSectionList( newSectionList );
        props.hideEditModal();
        props.setEditSectionState({});
        setTaskList([])
    }
    function deleteSection( id ){
        console.log('deleting section with id...', id);
        console.log('sectionList', props.sectionList);
        const newSectionList = props.sectionList.filter( section => {
            return section.id !== id;
        })
        console.log('new section list', newSectionList);
        props.setSectionList( newSectionList );
        props.hideEditModal();
        props.setEditSectionState({});
    }
  
    try{
        const renderTasks = props.editSectionState.tasks.map((task, i) => (
            <div class='taskInput' key={i}>
                <i class='fa fa-times removeTask'  aria-hidden='true' onClick={ e => removeTask( task.id )} ></i>
                <h5>
                    New Task
                </h5>
                <input placeholder={task.text} onChange={ e => updateTask(task.id, e.target.value)}>

                </input>
            </div>
        ))
    
        return (
            <div id='backDrop' style={props.editModalState}>
                <div id='goalForm'>
                    <div id='titleSection'>
                        <h1>
                            Section Title
                            {/* <i id='deleteBtn' class='fa fa-trash'></i> */}
                        </h1>
                        <i class='fa fa-times fa-lg' id='closeBtn' aria-hidden='true' onClick={e => props.hideEditModal()}></i>
                        <i class='fa fa-plus fa-2x' id='addTask' aria-hidden='true' onClick={e => addNewTask()} ></i>
                        <input id='newTitle' value={props.editSectionState.title} onChange={e => updateTitle(e.target.value)}>
                        
                        </input>
                     </div>
                     {renderTasks}
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
                    <button id='acceptBtn' onClick={e => updateSection(props.editSectionState.id)}>
                        Done
                    </button>
                    <p id='deleteBtn' onClick={e => deleteSection(props.editSectionState.id)}>delete</p>
                    
                </div>
            </div>  
        )
    } catch {
        return(
            <div></div>
        )
    }
}
    
    


export default EditModal;