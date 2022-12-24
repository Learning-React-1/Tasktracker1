import React from "react"
import './Header.css'
function Header({functiontosetaddtask}){

    return(
        <div className="header">
            <h1>Task Tracker</h1>
            <button className="taskbutton" onClick={()=>{functiontosetaddtask()}}>Add</button>
        </div>
    )

}
export default Header;