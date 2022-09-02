import React from "react";
import Nav from "./Nav";
import "./Header.css";

function Header() {

    return (
        <div className="Header">
            <div className="HeaderBox">
                <p>This is the Header component</p>
                <Nav/> 
            </div>
        </div>
 
   
    )
}

export default Header;