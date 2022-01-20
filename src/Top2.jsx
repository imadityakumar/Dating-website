import React from 'react';
import ReusableMobile from './ReuseableMobile';

const Top2=()=>{
    return(
        <div className="top2">
        <div className="top2-write">
            <div>
               <h1>SOCIAL DATING </h1>
            </div>
            <div>
                <h3>Share your world (in real-time) with singles everywhere</h3>
            </div>
        </div>
        <div className="top2-image">
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
    </div>
    );
}


export default Top2;