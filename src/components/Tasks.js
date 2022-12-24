import React from "react"
import './Tasks.css'
import Task from './Task'

function Tasks({tasks,togglereminder,deletenewtask}){
    
return(
    <div>
    {tasks.map((task,index)=>{return <Task  task={task} key={index} togglereminder={togglereminder} deletenewtask={deletenewtask}  />}) }
    </div>
)
}



export default Tasks;