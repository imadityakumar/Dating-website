import React from 'react';
import ReusableMobile from './ReuseableMobile';

const Top1=()=>{
    return(
        <div className="top1">
        <div className="top1-main ">
            <div className="top1-main-left ">
              <div  className='top1-mobile'>
              <ReusableMobile/>
              </div>
            </div>
            <div className="top1-main-right ">
                <div className="top1-main-right-inner">
                    <div className="top1-first" >
                        <h2>CONNECT.</h2>
                    </div>
                    <div className="top1-second">
                         <h2>SHARE.</h2>
                    </div>
                    <div className="top1-third">
                        <h1>DATE.</h1>
                    </div>
                    <div className="top1-fourth">
                     <button className="my-button" role="button">JOIN WAITLIST</button>
                    </div>
                </div>
                   
            </div>
                   
        </div>	

            
        <div className="top1-bottom">
            <div className="top1-bottom-head">
                <h5>AS SEEN ON</h5>
            </div>
            <div className="top1-bottom-row1">
                 <img src="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/logo-kickstarter.png?w=363&ssl=1" width="363" height="43"/>
            </div>
            <div className="top1-bottom-row2">
                <div>
                   <img src="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/logo-startupboston.png?fit=153%2C97&ssl=1" width="153" height="97"/>
                </div>
                <div>
                    <img src="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/logo-gdi.png?fit=120%2C64&ssl=1" width="120" height="64"/>
                </div>
                <div>
                    <img src="https://i0.wp.com/theluvhut.com/wp-content/uploads/2021/10/logo-gaper.png?fit=218%2C57&ssl=1" width="218" height="57"/>
                </div>
                <div>
                    <img src="https://png.pngtree.com/png-clipart/20201009/ourmid/pngtree-pink-youtube-icon-png-image_5523793.png" width="202" height="46"/>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Top1;