import { useState } from 'react';
import './Taskinput.css'
function Taskinput({addnewtask}){
  const [task,settask]=useState("");
  const [time,settime]=useState("");
  const [reminder,setreminder]=useState(false);
  function tempsubmit(e){
    e.preventDefault();
    if(task!="" && time!=""){
    addnewtask(task,time,reminder)
    settask("");settime("");setreminder(false);
    e.target[0].value="";
    e.target[1].value="";
    e.target[2].checked=false;
    }
    else{
        alert("please fill taask and time before adding task")
    }
  }
return(
    <form className="taskinput" onSubmit={(e)=>{tempsubmit(e)}}>
        <div className="taskinput1">
            <div>Task</div>
            <input type="text" placeholder="Add Task" onChange={(e)=>{settask(e.target.value)}}/>
        </div>
        <div className="taskinput1">
             <div>Day & time</div>
            <input type="type" placeholder="Add Day time" onChange={(e)=>{settime(e.target.value)}}/>
        </div>
        <div className="taskinput2">
            <div>Set Reminder</div> <input type="checkbox" onChange={(e)=>{setreminder(e.target.checked)}}/>
        </div>
        <div className="taskinput3">
            <input type="submit" value="save task" />
        </div>
        
    </form>
)
}
export default Taskinput;