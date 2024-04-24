import React from "react";

function NavBar(){

    return (
        <nav className = "nav">
            <a href= "/" className = "home-page">Lazado</a>
            <ul>
                <li><a href= "/appliances">Appliances</a></li>
                <li><a href = "/gadgets">Gadgets</a></li>
                <li><a href = "/accessories">Accessories</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;