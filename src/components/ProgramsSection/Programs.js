import React from 'react'
import ProgramsCard from "../ProgramsCard.js/ProgramsCard"
import {programsData} from "../../data/programsData"
import "./Programs.css"


function Programs() {

  return (
    <div className='programs'>

      <div className='heading-section'>

      <span className='stoke-text'>EXPLORE OUR</span>
      <span>PROGRAMS</span>
      <span className='stoke-text'>TO SHAPE YOU</span>

      
      </div>
    
      <div className='progrmas-cards-container'>
        {programsData.map((elt,index)=>
        
          <ProgramsCard key={index} image={elt.image} heading={elt.heading} details={elt.details} />

        )}
      </div>

    </div>
  )
  
}

export default Programs