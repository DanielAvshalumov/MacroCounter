import React from "react"
import Log from "./Log";

const Logs = (props) => {
    const pastLogs = props.logs.map(item => (<Log mealLogs = {item.mealLog} calories={item.cals} protein={item.prot}/>))
    return (
        <main style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:80}}>
            <h3>Current Log</h3>
            <div>
                <Log 
                mealLogs = {props.mealLogs}
                calories = {props.calories.in}
                protein = {props.calories.protein}/>
            </div>
            <h3 style={{marginTop:30,fontSize:15}}>Past 3 Days</h3>
            <div style={{display:"flex"}}>
                {pastLogs}
            </div>
           
        </main>
    )
}

export default Logs;