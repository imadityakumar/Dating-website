import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Techrupt from './pages/images/techrupt.svg';

function footer() {
    return (
        <div className='overallfooter'> 
            <div className='footerlogo'>
                <img src={Techrupt}></img>
            </div> 
            <div className='footer'>
                <Link to='/About'>ABOUT</Link>
                <Link to='/Mission'>MISSION</Link>
                <Link to='/Join'>JOIN</Link>
                <Link to='/Careers'>CAREERS</Link>
                <Link to='/Blog'>BLOG</Link>
            </div>

            <h5 className='copyright'>COPYRIGHT © 2022</h5>
        </div>
    );
}

export default footer;
