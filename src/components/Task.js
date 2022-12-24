import xlogo from '../images/x logo.png'
function Task({task,togglereminder,deletenewtask}){
    
    return(
        <div className="task" id={task.id} style={{borderColor:setcolor(task.reminder)}} onClick={()=>{togglereminder(task.id)}} >
            <div className="taskwrapper">
                <div className="tasktask">{task.task}</div>
                <img src={xlogo} alt="x logo" className="xlogo" onClick={()=>deletenewtask(task.id)}/>
            </div>
            <div className="taskdate">{task.date}</div>
        </div>
        )
}

const setcolor=(reminder)=>{
    return reminder ? "green" : "transparent";
}
export default Task;