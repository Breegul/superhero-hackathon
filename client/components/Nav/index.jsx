import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Nav = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/search">Search</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer>Best hero or something</footer>
    </>
};

export default Nav;
