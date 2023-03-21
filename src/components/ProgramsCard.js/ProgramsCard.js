import React from 'react'
import rightArrow from "../../assets/rightArrow.png"
import "./ProgramsCard.css"

function ProgramsCard(props) {
  return (
    
    <div className='program-card'>

        {props.image}
        
        <div className='prgm-heading'>{props.heading}</div>

        <span>{props.details}</span>

        <div className='join-now'>
            <a href='#join'>Join Now</a>
            <div>
              <img src={rightArrow}/>
            </div>
        </div>


    </div>
  )
}

export default ProgramsCard