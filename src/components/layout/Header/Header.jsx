import React from "react";
import './Header.css'

const Header = ({ headerText }) => {
    return (
        <header>
            <div>
                <h2>{ headerText }</h2>
            </div>
        </header>
    ); 
}

export default Header;