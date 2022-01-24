import React from 'react';
import './App.css';
import Interactiveicons1 from './interactiveicons1';
import FullFooter from './FullFooter';
import Fullnavbar from './Fullnavbar';
import Interactiveicons2 from './interactiveicons2.js';
import Interactiveicons3 from './interactiveicons3.js';
import Login from './loginpage';

function App() {
  return (

    <div className="App">

      <Fullnavbar />
      
      <Interactiveicons1 />
      <Interactiveicons2 />
      <Interactiveicons3 />

      <Login/>
      <FullFooter />



    </div>
  );
}

export default App;
