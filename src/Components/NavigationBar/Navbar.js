import React, { useState } from 'react';
import { NavBar, NavHeader, NavToggle, NavMenu, NavLink, NavTint } from './NavbarElements.js';
import styled from 'styled-components';

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    function ToggleNavBar() { setIsExpanded(!isExpanded) }

    return (
        <NavBar>
            <NavHeader>
                <NavToggle onClick={() => { ToggleNavBar() }} />
            </NavHeader>

            {isExpanded &&
                <NavMenu>
                    <NavToggle onClick={() => { ToggleNavBar() }} />
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            }

            {isExpanded && <NavTint onClick={() => { ToggleNavBar() }}/>}
        </NavBar>
    )
}