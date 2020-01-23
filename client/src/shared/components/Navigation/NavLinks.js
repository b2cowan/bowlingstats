import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {

    return (
        <ul className='nav-links'>
            <li>
                <NavLink exact to='/teams'>Teams</NavLink>
            </li>
            <li>
                <NavLink exact to='/bowlers'>Bowlers</NavLink>
            </li>
            <li>
                <NavLink exact to='/beerframes'>Beer Frames</NavLink>
            </li>
            
        </ul>
    )
};

export default NavLinks;