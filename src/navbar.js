import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/About">ABOUT</Link>
            <Link to="/Mission">MISSION</Link>
            <Link to="/Join">JOIN</Link>
            <Link to="/Careers">CAREERS</Link>
            <Link to="/Blogs">BLOG</Link>

            <button
                Link to="/The-app">THE APP
            </button>

        </div >
    )
}

export default Navbar;
