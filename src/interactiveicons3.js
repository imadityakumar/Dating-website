import React from 'react';
import './interactiveicons.css';
import cheers from './pages/images/animation_500_kyrds7gd.gif'
import camera from './pages/images/animation_500_kyrdtr7a.gif';
import magnifyingglass from './pages/images/animation_500_kyrdw8bu.gif';
import calendar from './pages/images/animation_500_kyrlm1qr.gif';

function Interactiveicons3() {
    return (
        <div className='maindiv'>
            <br />
            <div className='div1'>
                <img className='img1 calendar'src={calendar}></img>
                <h4>
                    Send date requests & sync it to your calendars
                </h4>
            </div>
            <div className='div2'>
                <img src={camera} className='img2'></img>
                <h4>
                    Choose from 12+ date types & 250+ experiences
                </h4>
            </div>
            <div className='div3'>
                <img src={magnifyingglass} className='img3'></img>
                <h4>
                    Activate the Guru to be safe on any date - from start to finish
                </h4>
            </div>
            <div className='div4'>
                <img
                    className='img4'
                    src={cheers}  ></img>
                <h4>
                    Dedicated to user success rates on dates
                </h4>
            </div>
        </div>
    )
}

export default Interactiveicons3;

