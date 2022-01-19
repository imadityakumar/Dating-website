import React from 'react';
import "./index.css";

const ReusableMobile=()=>{
    return(
      <div class="phone-container">
       <div class="video-container">
         <video autoplay="" loop="" muted="" playsinline="" class="video phone" id="movie">
           <source src="https://theluvhut.com/wp-content/uploads/2021/10/lh_375_812.mp4" type="video/mp4"/>
         </video>
       </div>
      <img class="phone-bg" src="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/phone-frame-4.png?w=1140&amp;ssl=1" width="415" height="814"/>
      </div>
    );
}

export default ReusableMobile;