import React, { useState } from 'react';
import { NavBar, NavHeader, NavToggle, NavMenu, NavLink, NavTint, NavIcon } from './NavbarElements.js';
import styled from 'styled-components';

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    function ToggleNavBar() { setIsExpanded(!isExpanded) }

    return (
        <NavBar>
            <NavHeader>
                <NavToggle onClick={() => { ToggleNavBar() }} />
                <NavIcon><label>GitHub:&nbsp;</label><a href="https://github.com/nahCauhsoJ">https://github.com/nahCauhsoJ</a></NavIcon>
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