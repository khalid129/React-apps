import React, {useState} from "react";
import TodoList from "./TodoList";

const Todo = () => {

    const [itemlist,setItemList] = useState();
    const [item,setItem] = useState([]);

    const inputlist = (event)=>{
        setItemList(event.target.value);
    };

    const addItem = ()=>{
        setItem((oldarray)=>{
            return[...oldarray,itemlist];
        });
        setItemList(" ");
    }

    const deleteItems = (id)=>{
        console.log("deleted");
        setItem((olditem)=>{
            olditem.filter((arr,index)=>{
                return index!==id;
            });
        });
    };
    return (<>
        <div className="main_div">
            <div className="center_div">
                <h1>Todo List</h1>
                <div>
                    <input type="text" name="todo" id="" value={itemlist} onChange={inputlist}/>
                    <button onClick={addItem}>+</button>
                </div>
                <ul>
                    {
                        item.map((itemVal,index)=>{
                            return  <TodoList text={itemVal} id = {index} key={index} onSelect = {deleteItems} />;
                        })
                    }
                </ul>
            </div>
        </div>
    </>);
}

export default Todo;

 