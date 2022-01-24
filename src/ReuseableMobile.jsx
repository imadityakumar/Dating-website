import React from 'react';
import "./index.css";

const ReusableMobile=(props)=>{
    return(
      <div className="phone-container ">
      <div className="video-container">
        <video autoplay="" loop="" muted="" playsinline="" className="video phone" id="movie" width={props.vidW} height={props.vidH}>
         <source src={props.vidsrc} type="video/mp4"  />
        </video>
      </div>
      <div className="frame-container">
     <img className="phone-bg" src={props.imgsrc} width={props.imgW} height={props.imgH}/>
     </div>
 </div>
    );
}

export default ReusableMobile;