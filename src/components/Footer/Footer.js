import React from 'react'
import github from "../../assets/github.png"
import insta from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>

        <div className='blur1 blur'></div>

        <div className='blur2 blur'></div>

        <div className='social-media'>
            <img src={github}/>
            <img src={insta}/>
            <img src={linkedin}/>
        </div>
        <img src={logo}/>

    </div>
  )
}

export default Footer