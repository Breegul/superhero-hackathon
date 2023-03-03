import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'

const Nav = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/search">Search</NavLink>
                <NavLink to="/Heroes">Heroes</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer>Best hero or something</footer>
    </>
};

export default Nav;
