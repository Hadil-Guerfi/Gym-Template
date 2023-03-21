import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useIncrementNumber from '../../hooks/useIncrementNumber'


export default function Figure() {


  const [ counter1, setCounter1 ] = useState(0)

  const [ counter2, setCounter2 ] = useState(0)

  const [ counter3, setCounter3 ] = useState(0)

  useIncrementNumber(counter1,setCounter1,140)

  useIncrementNumber(counter2,setCounter2,978)

  useIncrementNumber(counter3,setCounter3,50)


  return (
    <div className='figures'>
        <div>
            <div>+ {counter1}</div>
            <span>EXPERT COACHES</span>
        </div>
    
       <div>
        <div>+ {counter2}</div>
        <span>MEMBERS JOINED</span>
        </div>
  
        <div>
        <div>+ {counter3}</div>
        <span>FITNESS PROGRAMS</span>
    </div>  
  
    </div>  
    
  )
}

