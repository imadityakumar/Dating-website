import React from 'react';
import './App.css';
import Interactiveicons1 from './interactiveicons1';
import FullFooter from './FullFooter';
import Fullnavbar from './Fullnavbar';
import Interactiveicons2 from './interactiveicons2.js';
import Interactiveicons3 from './interactiveicons3.js';
import Top1 from './Top1'
import Top2 from './Top2';
import Top3 from './Top3';
import Top4 from './Top4';
import Top5 from './Top5';
import Login from './loginpage';

function App() {
  return (

    <div className="App">

      <Fullnavbar />
      



  <Top1/>
  <Top2/> 
  <Top3/>
  <Top4/>
  <Top5/>

      
      <Interactiveicons1 />
      <Interactiveicons2 />
      <Interactiveicons3 />

      <Login/>
      <FullFooter />



    </div>
  );
}

export default App;
