import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {

    return (
        <ul className='nav-links'>
            <li>
                <NavLink exact to='/teams'>Team Stats</NavLink>
            </li>
            <li>
                <NavLink exact to='/bowlers'>Bowler Stats</NavLink>
            </li>
            <li>
                <NavLink exact to='/beerframes'>Beer Frames</NavLink>
            </li>
            
        </ul>
    )
};

export default NavLinks;