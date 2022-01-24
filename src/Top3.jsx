import React from 'react';
import ReusableMobile from './ReuseableMobile';


const Top3=()=>{
    return(
        <div className="top3">
        <div className="top3-image">
        <ReusableMobile
                  vidsrc="https://theluvhut.com/wp-content/uploads/2021/10/lh_375_812.mp4"
                  imgsrc="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/phone-frame-4.png?w=1140&amp;ssl=1"
                  imgW="315"
                  imgH="605"
                  vidW="320"
                  vidH="580"
              />
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