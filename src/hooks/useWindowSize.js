import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function useWindowSize() {

    const[size,setWindowSize]=useState([window.innerWidth,window.innerHeight])
    
    useEffect(() => {
      
        const handleSize=()=>{
                setWindowSize([window.innerWidth,window.innerHeight])
        }    

        window.addEventListener("resize",handleSize)

      return () => {
        window.removeEventListener("resize",handleSize)
      }
    }, [])
    
    return size

}

