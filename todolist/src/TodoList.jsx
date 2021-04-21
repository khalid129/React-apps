import React from "react";

const TodoList = (props)=>{

    return(
        <div >
        <li><i className="fa fa-times style" aria-hidden="true" onClick={()=>{props.onSelect(props.id); }}/>   {props.text} </li>
        </div>
    );
}

export default TodoList;