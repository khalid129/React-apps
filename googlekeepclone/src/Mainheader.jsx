import React from "react";
import googleclone from "./googleclone.png"
const Mainheader = () => {
    return (<>
        <div className="header_div">
            <img src={googleclone} height="60" width="60" alt="Picture not available" />
            <h1>Google Keep Clone</h1>
        </div>
    </>);
}
export default Mainheader;