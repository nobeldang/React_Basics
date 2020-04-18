import React from "react"

function TodoItem(props){
    const item_strike_style = {
        textDecoration : "line-through",
        fontStyle : "italic",
        color : "#cdcdcd"
    }
    return(
        <div>
            <input type="checkbox" checked={props.item.isCompleted} onChange={() => props.handleClick(props.item.id)}/>
            <h3 style = {props.item.isCompleted ? item_strike_style: null}>{props.item.text}</h3>
            <hr />
        </div>
    )
}
export default TodoItem