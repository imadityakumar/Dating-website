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
        <ReusableMobile
                  vidsrc="https://theluvhut.com/wp-content/uploads/2021/10/lh_375_812.mp4"
                  imgsrc="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/phone-frame-4.png?w=1140&amp;ssl=1"
                  imgW="315"
                  imgH="605"
                  vidW="320"
                  vidH="580"
              />
        </div>
    </div>
    );
}


export default Top2;