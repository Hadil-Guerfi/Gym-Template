import React from 'react'
import "./LevelUp.css"

function LevelUp() {


  return (
    <div className='level-up'>
        <div className='level-up-container'>
            <div className='heading-section'>
                <span className='stoke-text'>READY TO</span>
                <span>LEVEL UP YOUR BODY</span>
                <span className='stoke-text'>WITH US?</span> 
            </div>

            <div className='input-side'>
            
                <input type="email" name='email'  placeholder='Enter Your Adress Email Here' />
                <button type='submit'>Join Now</button>


            </div>
        </div>
    
    </div>
  )
}

export default LevelUp