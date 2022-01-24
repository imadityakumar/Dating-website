import React from 'react';
import ReusableMobile from './ReuseableMobile';


const Top4=()=>{
    return(
        <div className="top4">
        <div className="top4-write">
            <div>
               <h1>EFFORTLESS DATES </h1>
            </div>
            <div>
                <h3>Instantly book 1 on 1 or Group Dates using Hotspots</h3>
            </div>
        </div>
        <div className="top4-image">
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

export default Top4;