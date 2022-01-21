import React from 'react';
import Footer from './footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/about'
import Mission from './pages/mission';
import Join from './pages/join';
import Careers from './pages/careers';
import Blogs from './pages/blog';
import theapp from './pages/theapp';


function FullFooter() {
    return (
        <div>
            <Router>
                <Footer />
                <Routes>
                    <Route path='/about' exact component={About} />
                    <Route path='/mission' component={Mission} />
                    <Route path='/join' component={Join} />
                    <Route path='/careers' component={Careers} />
                    <Route path='/blogs' component={Blogs} />
                    <Route path='/theapp' component={theapp} />
                </Routes>
            </Router>
        </div>
    );
}

export default FullFooter;
