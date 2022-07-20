import React from "react"

const Log = (props) => {
    console.log(props.mealLogs)
    return (
        <div style={{marginRight:160}}>
            <ul>
                {props.mealLogs.map(x => (<li>{x}</li>))}
            </ul>
        </div>
    )
}

export default Log;