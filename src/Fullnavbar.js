import React from 'react';
import About from './pages/about'
import Mission from './pages/mission';
import Join from './pages/join';
import Careers from './pages/careers';
import Blogs from './pages/blog';
import theapp from './pages/theapp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Techrupt from './pages/images/techrupt.svg';
import Navbar from './navbar';

function Fullnavbar() {
    return (
        <div className='mainnavbar'>
            <img
                className='logo'
                src={Techrupt}
            >
            </img>

            <Router>
                <Navbar />
                <Routes>
                    <Route path='/about' exact component={About} />
                    <Route path='/mission' component={Mission} />
                    <Route path='/join' component={Join} />
                    <Route path='/careers' component={Careers} />
                    <Route path='/blogs' component={Blogs} />
                    <Route path='/theapp' component={theapp} />
                </Routes>
            </Router>
        </div >
    );
}

export default Fullnavbar;

