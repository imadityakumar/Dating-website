import React from 'react';
import './interactiveicons.css';
import personlaptop from './pages/images/animation_500_kyrcw8ab.gif'
import camera from './pages/images/animation_500_kyra8gql.gif';
import phonescreen from './pages/images/animation_500_kyrcrf5e.gif';
 import maps from './pages/images/animation_500_kyrag0za.gif';
 
function Interactiveicons2() {
    return (
        <div className='maindiv'>
            <br />
            <div className='div1'>
                <img className='img1' src={personlaptop}></img>
                <h4>
                    Personalize your social communities to fit any vibe
                </h4>
            </div>
             <div className='div2'>
                <img src={camera} className='img2'></img>
                <h4>
                    Watch dating tips, podcasts, and sponsored entertainment
                </h4>
            </div>
            <div className='div3'>
                <img src={phonescreen} className='img3'></img>
                <h4>
                    Easily match with likeminded audience members
                </h4>
            </div>
             <div className='div4'>
                <img
                    className='img4'
                    src={maps}  ></img>
                <h4>
                    Attend in-person events using our HotSpots list
                </h4>
            </div>
         </div>
    )
}

export default Interactiveicons2

