import React from 'react';
import './navbar.css';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';

function myFunction() {
    console.log("Hello World");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function Navbar() {
    return (<>
        <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">Courses</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="#home" className="icon" onClick={() => {
                myFunction()
            }}>
                <ViewWeekIcon/>
            </a>
        </div>
    </>);
}

export default Navbar;