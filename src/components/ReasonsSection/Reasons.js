import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"
import adidas from "../../assets/adidas.png"
import nick from "../../assets/nike.png"
import NB from "../../assets/nb.png"

import React from 'react'

function Reasons() {

    let imgArray=[image1,image2,image3,image4]

  return (
    <div className="reasons">
            
        <div className='heading-section'>
            <span className='stoke-text'>WHY </span>
            <span>CHOOSE</span>
             <span className='stoke-text'>US?</span>
        </div>
    
      <div className="reasons-sides"> 
        <div className="reasons-imgs">
            {imgArray.map((image,index)=>
                <img src={image} key={index}/>
            )}
        
        </div>
        
            <div className="reasons-text">

                <div className="ticks">
                    <div>
                        <img src={tick}/>
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick}/>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick}/>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>

                    <div>
                        <img src={tick}/>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                    
                </div>
                <div className="partners-side">
                    <div>OUR PARTNERS</div>
                    <div className="partners-imgs">
                        <img src={NB}/>
                        <img src={adidas}/>
                        <img src={nick}/>
                    </div>
                </div>

            </div>
        </div> 
    </div>
  )
}

export default Reasons