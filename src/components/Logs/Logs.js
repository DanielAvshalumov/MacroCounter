import React from "react"
import Log from "./Log";

const Logs = (props) => {
    
    return (
        <main style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:80}}>
            <h3>Current Log</h3>
            <div>
                <Log 
                mealLogs = {props.mealLogs}/>
            </div>
            <h3 style={{marginTop:30,fontSize:15}}>Past 3 Days</h3>
            <div style={{display:"flex"}}>
                <Log 
                mealLogs = {props.mealLogs}/>
                <Log mealLogs = {props.mealLogs}/>
                <Log mealLogs = {props.mealLogs}/>
            </div>
           
        </main>
    )
}

export default Logs;