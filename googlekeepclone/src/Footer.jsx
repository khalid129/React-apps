import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer = ()=>{
    var year = new Date();
    var date = year.getFullYear(); 
    return(<>
        <footer>Copyright {date} <CopyrightIcon/> </footer>
    </>);
}
export default Footer;