import React from "react";
import AddIcon from '@material-ui/icons/Add';

const Note = ()=>{

    return(<>
    <div className="center_div">
            <div className="note_div">
                <form>
                    <input type="text" className="task" placeholder="Task"/>
                    <textarea name="note" id="note" cols="" rows=""></textarea>
                    <button><AddIcon/></button>
                </form>
            </div>
            </div>
    </>);
}

export default Note;