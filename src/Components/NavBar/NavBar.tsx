import React from "react";

const NavBar = (props: any) => {
    return(
        <nav className='nav'>
            <ul>
                <li> Profile </li>
                <li> Messages </li>
                <li> News </li>
                <li> Settings </li>
            </ul>
        </nav>
    )
}

export default NavBar;