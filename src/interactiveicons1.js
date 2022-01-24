import React from 'react';
import './interactiveicons.css';
import tickmark from './pages/images/animation_500_kyon4uou.gif'
import reels from './pages/images/animation_500_kyonzo3y.gif';
import hello from './pages/images/animation_500_kyqxq86c.gif';
import peoplephone from './pages/images/animation_500_kyqy4c7q.gif';

function Interactiveicons1() {
    return (
        <div className='maindiv'>
            <br />
            <div className='div1'>
                <img className='img1' src={tickmark}></img>
                <h4>
                    Introducing the first fully-verified dating community #VerifyOne
                </h4>
            </div>
            <div className='div2'>
                <img src={reels} className='img2'></img>
                <h4>
                    Video profiles to see matches in real-time under the spotlight
                </h4>
            </div>
            <div className='div3'>
                <img src={hello} className='img3'></img>
                <h4>
                    Use our compatibility tool & gain insights before you send that fiery DM
                </h4>
            </div>
            <div className='div4'>
                <img
                    className='img4'
                    src={peoplephone}  ></img>
                <h4>
                    Connect over 12+ platforms to your interactive profile
                </h4>
            </div>
        </div>
    )
}

export default Interactiveicons1

/* 
function Interactiveicons() {
    return (
        <div className='maindiv'>
            <div className='imagesection'>
                <img src={tickmark} className='tick'></img>
                <img src={reels} className='reels'></img>
                <img src={hello} className='hello'></img>
                <img src={peoplephone} className='peoplephoen'></img>
            </div>
            <div className='text-section'>
                 <h4>
                    Introducing the first fully-verified dating community #VerifyOne
                </h4>
                <h4>
                    Video profiles to see matches in real-time under the spotlight
                </h4>
            </div>
        </div>
    )
} */

