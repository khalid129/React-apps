import React, {useState} from "react";
import TodoList from "./TodoList";

const Todo = ()=>{

    const [inputList,setInputList] = useState("");
    const [item,setItem]=useState([]); 

    const itemEvent = (event)=>{
        setInputList(event.target.value);
    };

    const listOfItems = ()=>{
        setItem((oldItems)=>{
            return [...oldItems,inputList];
        })
        setInputList("");
    };


    const deleteItems = (id)=>{
        setItem((oldItems)=>{
            return oldItems.filter((arr,index)=>{
                return index!==id;
            })
        })
    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>
                        Todo List
                    </h1>
                    <br/>
                    <div className="item_div">
                    <input type="text" placeholder="Add a item" onChange={itemEvent} value={inputList}/>
                    <button onClick={listOfItems}>+</button>
                    </div>
                    <ol>
                       {
                           item.map((itemVal,index)=>{
                              
                              return(<TodoList 
                                   text = {itemVal}
                                   key = {index}
                                   id = {index}
                                   onSelect = {deleteItems}
                               />); 
                           })
                       }
                   
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Todo;