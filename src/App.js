import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Interactiveicons1 from './interactiveicons1';
import Interactiveicons2 from './interactiveicons2.js';
import Interactiveicons3 from './interactiveicons3.js';
import Top1 from './Top1'
import Top2 from './Top2';
import Top3 from './Top3';
import Top4 from './Top4';
import Top5 from './Top5';
import Login from './loginpage';
import Navbar from './navbar';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'
            element={<>
              <Navbar />
              <Top1 />
              <Interactiveicons1 />
              <Top2 />
              <Interactiveicons2 />
              <Top3 />
              <Interactiveicons3 />
              <Top4 />
              <Top5 />
              <Footer />
             </>
            }
          />


          <Route path='/contact'
            element={<>
              <Navbar />
              <Login />
              <Footer />
             </>
            }
          />
          

        </Routes>
        {/* <Fullnavbar />
        <Top1 />
        <Interactiveicons1 />

        <Top2 />
        <Interactiveicons2 />

        <Top3 />
        <Interactiveicons3 />

        <Top4 />
        <Top5 />

        <FullFooter />
      */} </Router>


    </div>
  );
}

export default App;
