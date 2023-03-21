import React, { useState } from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import tick from "../../assets/whiteTick.png"
import rightArrow from "../../assets/rightArrow.png"

function Plans() {

    const [indexSelected, setIndexSelected] = useState(null)

    const handleHover = (index) => {
        setIndexSelected(index)
    }

    const handleLeave = () => {
        setIndexSelected(null)
    }

    return (
        <div className='plans'>
            <div className='blur plans-blur1'></div>
            <div className='blur plans-blur2'></div>
            <div className='heading-section'>
                <span className='stoke-text'>READY TO START </span>
                <span>YOUR JOURNEY</span>
                <span className='stoke-text'>NOW </span>
            </div>
            <div className={`plans-container`}>
                {plansData.map((elt, index) => (
                    <div
                        className={`plan-card ${index === indexSelected ? 'plan-card-selected' : ''}`}
                        key={index}
                        onMouseOver={() => handleHover(index)}
                        onMouseLeave={handleLeave}
                    >
                        {elt.icon}
                        <div className='name'>{elt.name}</div>
                        <div className='price'>$ {elt.price}</div>
                        <div className='features'>
                            {elt.features.map((text, i) => (
                                <div key={i}>
                                    <img src={tick} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className='benefits'>
                            <span>See more benefits</span>
                            <img src={rightArrow} />
                        </div>
                        <div className='join'>
                            <button>Join Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans
