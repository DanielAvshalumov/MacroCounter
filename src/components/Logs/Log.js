import React from "react"

const Log = (props) => {
    
    return (
        <div style={{marginRight:160}}>
            <ul>
                {props.mealLogs.map((x,key) => (<li key={key}>{x}</li>))}
            </ul>
            <h4>{props.calories}</h4>
            <h4>{props.protein}</h4>
        </div>
    )
}

export default Log;