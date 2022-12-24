
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Taskinput from './components/Taskinput'
import { useState,useEffect } from 'react';


function App() {
  let [addtask,setAddTask]=useState(true);

  let [tasks,setAllTasks]=useState(()=>{
    return [
    {
      id:1,task:"Doctor appointment",date:"10 november",reminder:true
    },
    {
      id:2,task:"meeting at school",date:"11 november",reminder:true
    },
    {
      id:3,task:"food shopping",date:"12 november",reminder:false
    }
  ]});
  
  const functiontosetaddtask=()=>{
    setAddTask(addtask=>!addtask);
  }

  const togglereminder=(taskid)=>{
   
    setAllTasks(prevtasks=>{
      return prevtasks.map((task) =>
        task.id === taskid ? { ...task, reminder: !task.reminder } : task
      )
    }
    )
    }

    const addnewtask=(newtask,newtime,newreminder)=>{
      setAllTasks(tasks=>[...tasks,{id:Math.random() * 100000000,task:newtask,date:newtime,reminder:newreminder}])
    }
    const  deletenewtask=(taskid)=>{  
      const newtasks=tasks.filter((task)=>{return taskid!==task.id})
      setAllTasks(tasks=>newtasks)
      
    }
  return (
    <div className="App">
      <Header functiontosetaddtask={functiontosetaddtask}/>
      {addtask ? <Taskinput addnewtask={addnewtask}/>: <span></span>}
      <Tasks  tasks={tasks} togglereminder={togglereminder} deletenewtask={deletenewtask}/>
    </div>
  );
}


export default App;
