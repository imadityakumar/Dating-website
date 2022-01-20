import React from 'react';
import ReusableMobile from './ReuseableMobile';


const Top3=()=>{
    return(
        <div className="top3">
        <div className="top3-image">
            <div className="phone-container ">
                <div className="video-container">
                  <video autoplay="" loop="" muted="" playsinline="" className="video phone" id="movie">
                   <source src="https://theluvhut.com/wp-content/uploads/2021/10/lh_375_812.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className="frame-container">
               <img className="phone-bg" src="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/phone-frame-4.png?w=1140&amp;ssl=1" width="415" height="814"/>
               </div>
           </div>
        </div>
        <div className="top3-write">
            <div>
               <h1>MATCHES(MEET) </h1>
               <h1>FRIEND</h1>
            </div>
            <div>
                <h3>Meet those vibing in social Communities,stories and Live Events</h3>
            </div>
        </div>
    </div>
    );
}  

export default Top3;