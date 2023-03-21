import React, { useMemo, useRef } from 'react'
import { useState ,useEffect } from 'react'
import {testimonialsData} from "../../data/testimonialsData"
import rightArrow from "../../assets/rightArrow.png"
import leftArrow from "../../assets/leftArrow.png"
import "./Testimonials.css"
import useOnscreen from '../../hooks/useOnscreen'

function Testimonials() {

    let [selected,setSelected]=useState(0)

    let [righto,setRighto]=useState("")

    let [lefto,setLefto]=useState("")

    let [disp,setDisp]=useState("")

    let ref=useRef(null)

    let memoOptions=useMemo(()=>{
      return { threshold:0.5}
      
    })

    let isVisible=useOnscreen(ref,memoOptions)
    // console.log(isVisible)
    // console.log(ref.current)
    // console.log(memoOptions)

    useEffect(() => {

       setTimeout(() => {
        setRighto("")
        setLefto("")
        setDisp("")
       },300);

      }, [righto,lefto,disp]);
    
    const handleLeftArrow=()=>{

        if(selected>=0){
            setSelected((prv)=>prv+1)
        }
        if(selected===testimonialsData.length-1){
            setSelected(0)
        }    
            setRighto("translateToRight")
            setLefto("translateToLeft")
            setDisp("disp")

    }


    const handleRightArrow=()=>{
        
        if(selected>=0){
            setSelected((prv)=>prv+1)
        }
        if(selected===testimonialsData.length-1){
            setSelected(0)
        }      
            setRighto("translateToRight")
            setLefto("translateToLeft")
            setDisp("disp")
    }



  return (
    <div className='testimonials'>

        <div className='testimonials-heading heading-section'>
            TESTIMONIALS
        </div>

      <div className='testimonials-container'>  

        <div className='testimonials-left-side'>

            <div className='heading-right'>What They Say About Us</div>
            
                <div className={`${righto}`}> {testimonialsData[selected].review } </div>
                <div className={`status ${disp}`}>
                    <span>{testimonialsData[selected].name} - </span>
                    <span>{testimonialsData[selected].status}</span>
                </div>

        </div>
  
        <div className='testimonials-right-side'>
          <div className='img-left-container'>
            <div className={`cadre ${isVisible?"animateCadre":""}`} ref={ref}></div>
            <div className={`full ${isVisible?"animateFull":""}`}></div>
            <img src={testimonialsData[selected].image}  className={`${lefto}`} />
            <div className='arrows'>
                <img src={leftArrow} onClick={handleLeftArrow}/>
                <img src={rightArrow} onClick={handleRightArrow}/>
            </div>
          </div>  

        </div>

       </div>
    
    </div>
  )
}

export default Testimonials